/** @format */

import express, { Application, Request, Response } from "express";
import { mainApp } from "./mainApp";
import { DBonnect } from "./config/DataBase";
import { envriomentVariable } from "./env/envriomentVariable";
import amqp from "amqplib";
import { myConnection } from "./utils/connection";

const app: Application = express();

const port: number | any = envriomentVariable.port;

mainApp(app);

app.use(express());

myConnection("get");
const Server = app.listen(envriomentVariable.port, () => {
  DBonnect();

  process.on("uncaughtException", (reason: any) => {
    console.log("uncaughtException", reason);
    process.exit(1);
  });

  process.on("unhandledRejection", (error: any) => {
    console.log("unhandledRejection", error);
    Server.close(() => {
      process.exit(1);
    });
  });
});
