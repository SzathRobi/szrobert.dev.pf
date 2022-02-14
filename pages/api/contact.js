import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export default async function handler(req, res) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "robertpfsite@gmail.com",
      pass: process.env.password,
    },
  });

  let options = {
    from: `${req.body.email}`,
    to: "szathrobi98@gmail.com",
    subject: `From The Site`,
    text: `${req.body.email} ${req.body.message}`,
    html: `<div><p>${req.body.email}</p><p>${req.body.message}</p></div>`,
  };

  let result = await transporter.sendMail(options);

  res.status(200).json({ success: true });
}
