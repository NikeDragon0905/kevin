const express = require("express");

const app = express();
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

app.use(express.json());
app.use(cors());

const oauth2Client = new OAuth2(
  "952295374020-ec5nosg93nha0k4qmkljqqc8t80rninv.apps.googleusercontent.com", // ClientID
  "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", // Client Secret
  "https://developers.google.com/oauthplayground" // Redirect URL
);
oauth2Client.setCredentials({
  refresh_token:
    "1//04XUYTHIrnswhCgYIARAAGAQSNwF-L9IrNTiLsZtFEg3HRvxMoVKLf17_SjYicMEHkTwSI2ZI_g3HgG5ryQQlol2dwIYe86OFLoc",
});
const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "ryo.kanazawa34@gmail.com",
    clientId:
      "952295374020-ec5nosg93nha0k4qmkljqqc8t80rninv.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "1//04XUYTHIrnswhCgYIARAAGAQSNwF-L9IrNTiLsZtFEg3HRvxMoVKLf17_SjYicMEHkTwSI2ZI_g3HgG5ryQQlol2dwIYe86OFLoc",
    accessToken: accessToken,
    tls: {
      rejectUnauthorized: false,
    },
  },
});

const mailOptions = {
  from: "ryo.kanazawa34@gmail.com",
  to: "ryo.kanazawa34@gmail.com",
  subject: "Node.js Email with Secure OAuth",
  generateTextFromHTML: true,
  html: "<b>test</b>",
};
smtpTransport.sendMail(mailOptions, (error, response) => {
  error ? console.log(error) : console.log(response);
  smtpTransport.close();
});
app.post("/mail", async (req, res) => {
  console.log(req.body);
  const frommail = req.body.email;
  const password = req.body.password;
  const tomail = "codemaster034@gmail.com";
  const subject = req.body.subject;
  const message = req.body.message;

  var transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: frommail,
      pass: password,
    },
  });

  var mailOptions = {
    from: frommail,
    to: tomail,
    subject: subject,
    text: message,
    // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});

app.use(express.static(path.join(__dirname, "../build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is Running");
});
