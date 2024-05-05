import nodemailer from "nodemailer";
import { configs } from "../config/config";

const resetMail = async (HTML: any, email: any, subject: any) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: configs.senderEmail,
      pass: configs.app_pass,
    },
  });

  const info = await transporter.sendMail({
    from: configs.senderEmail, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    html: HTML, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
};

export const mailSender = {
  resetMail,
};
