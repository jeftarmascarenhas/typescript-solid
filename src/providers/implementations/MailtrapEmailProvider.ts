import { EmailProvider, Message } from "../EmailProvider"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

export class MailtrapEmailProvider implements EmailProvider {
  private transporter: Mail
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "fc182b4cdef659",
        pass: "3f198faf1e0108",
      },
    })
  }
  async sendEmail(message: Message): Promise<void> {
    this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    })
  }
}
