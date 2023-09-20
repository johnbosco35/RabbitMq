/** @format */

import mongoose from "mongoose";

const Url: any = "mongodb://localhost/authdb";

export const DBonnect = () => {
  try {
    const connect = mongoose.connect(Url);
    console.log("dataBase && Server is now on 🚀🚀🚀🚀");
  } catch (error) {
    console.log(error);
  }
};
