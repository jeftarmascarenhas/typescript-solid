import { EmailProvider, Message } from "../EmailProvider"
import nodemailer from "nodemailer"

export class MailtrapEmailProvider implements EmailProvider {
  private transporter
  constructor() {
    this.transporter = nodemailer.createTransport()
  }
  async sendEmail(message: Message): Promise<void> {}
}
