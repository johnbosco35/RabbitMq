/** @format */

import express, { Router } from "express";
import {
  createUser,
  getAllUser,
  getUser,
  signInUser,
  verifyUser,
} from "../controller/Authcontroller";
import VarifyHolder from "../utils/VarifyHolder";
import { createAccount, signInAccount } from "../utils/verification";

const router = Router();

router.route("/createUser").post(VarifyHolder(createAccount), createUser);
router.route("/signInUser").post(VarifyHolder(signInAccount), signInUser);
router.route("/").get(getAllUser);
router.route("/:userID/getuser").get(getUser);
router.route("/:userID/varified").get(verifyUser);

export default router;
