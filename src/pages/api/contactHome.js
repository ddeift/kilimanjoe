export default function ContactHome(req, res) {
    require("dotenv").config();
  
    const password = process.env.PASSWORD;
  
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "mail.gmx.com",
      secure: true,
      auth: {
        user: "kilimanjoe@gmx.de",
        pass: password,
      },
    });
  
    const mailData = {
      from: "kilimanjoe@gmx.de",
      to: "kilimanjoe@gmx.de",
      subject: `Kontakt Formular von KilimanJoe Pension`,
      text:
        req.body.message +
        " | Nachricht von: " +
        req.body.firstName +
        req.body.lastName +
        req.body.email +
        req.body.tel ,
  
      html: `<div>${req.body.message}</div><hr><p>Gesendet von:</p><br><p>${req.body.firstName} ${req.body.lastName}</p><br><p>${req.body.email}</p><br><p>Tel: ${req.body.tel}</p><br><p>Company Name: ${req.body.company}</p><br><p>Position: ${req.body.titlePosition}</p>`,
    };
  
    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  
    console.log(req.body);
    res.send("success");
  }
  