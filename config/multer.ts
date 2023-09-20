/** @format */

import multer from "multer";
import { Request } from "express";

type DestinationCallBack = (Error: Error | null, Destination: string) => void;
type FileDecCallBack = (Error: Error | null, Destination: string) => void;

const storage = multer.diskStorage({
  destination: (
    req: Request,
    File: Express.Multer.File,
    cb: DestinationCallBack
  ) => {
    cb(null, "uploads");
  },

  filename: (req: Request, file: Express.Multer.File, cb: FileDecCallBack) => {
    cb(null, file.originalname);
  },
});

const ViewImage = multer({ storage: storage }).single("avarta");
export default ViewImage;
