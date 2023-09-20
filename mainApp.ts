/** @format */

import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./router/Authrouter";

export const mainApp = (app: Application) => {
  app.use(express()).use(cors());
  app.set("view engine", "ejs");

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "Active🚀🚀🚀🚀",
      });
    } catch (error) {
      console.log(error);
    }
  });

  app.use("/api", router);
};
