const nodemailer = require("nodemailer");
class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: "587",
      sucure: false,
      auth: {
        user: "regconfirm.v2@gmail.com",
        pass: "regconfirm.v2@gmail.com",
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: "regconfirm.v2@gmail.com",
      to: to,
      subject: `Account activation ${process.env.API_URL}`,
      text: "",
      html: `
      <div>
        <h1>Hello world!</h1>
        <h2>${link}</h2>
      </div>
      `,
    });
  }
}

module.exports = new MailService();
