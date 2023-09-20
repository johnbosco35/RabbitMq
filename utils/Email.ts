/** @format */

import nodemailer from "nodemailer";
import { google } from "googleapis";
import path from "path";
import ejs from "ejs";

const GOOGLE_ID =
  "12197239419-vdnoksaihbff5rtv0vkltu0nc9tn858t.apps.googleusercontent.com";
const GOOGLE_SECRET = "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";
const GOOGLE_REFRESHTOKEN =
  "1//04qCoOzn7ioFECgYIARAAGAQSNwF-L9IrFF8GX54baNqawjLHJGLNJJD6HkbNSTWSIAKU74Rx8ozyfVLJUWICp4IySliok2wP-JI";

const GOOGLE_URL = "https://developer.google.com/oauthplayground";

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_URL);
oAuth.setCredentials({ access_token: GOOGLE_REFRESHTOKEN });

const URL: string = "http://localhost:3344";

export const openingMail = async (user: any) => {
  try {
    const accessToken: any = (await oAuth.getAccessToken()).token;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "Okonkwovincent63@gmail.com",
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET,
        refreshToken: GOOGLE_REFRESHTOKEN,
        accessToken,
      },
    });

    const data = {
      email: user.email,
      userName: user.userName,
      url: `${URL}/api/${user.id}/verified`,
    };

    const locateFile = path.join(__dirname, "../views/accountOpening.ejs");
    const readFile = await ejs.renderFile(locateFile, data);

    const mailer = {
      from: "Account Opening 🚀🚀🚀 <codelabbest@gmail.com>",
      to: user?.email,
      subject: "Account Opening",
      html: readFile,
    };

    transport.sendMail(mailer);
  } catch (error) {
    console.log(error);
  }
};
