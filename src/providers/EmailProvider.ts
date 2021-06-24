interface SenderReceiver {
  name: string
  email: string
}

export interface Message {
  to: SenderReceiver
  from: SenderReceiver
  subject: string
  body: string
}

export interface EmailProvider {
  sendEmail(message: Message): Promise<void>
}
