/** @format */

import dotenv from "dotenv";

export const envriomentVariable = {
  port: process.env.port!,
  mongodb_string: process.env.mongodb_string! as any,
};
