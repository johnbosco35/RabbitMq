/** @format */

import amqp from "amqplib";
import Authmodel from "../model/Authmodel";

const amqpServer = "amqp://localhost:5672";

const myConnection = async (queue: string) => {
  try {
    const connect = await amqp.connect(amqpServer);
    const channel = await connect.createChannel();

    await channel.assertQueue(queue);

    channel.consume(queue, async (message: any) => {
      let res = JSON.parse(message.content.toString());

      const user: any = await Authmodel.findOne({
        where: { id: res?.userID },
      });

      user?.store?.push(res);

      const product: any = await Authmodel.updateOne({
        where: { id: res?.userID },
        data: {
          store: user?.store,
        },
      });

      console.log(product);

      await channel.ack(message);
    });
  } catch (error) {
    console.log("error connecting...");
  }
};

export { myConnection };
