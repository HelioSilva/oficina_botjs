import { Message } from "whatsapp-web.js";

export interface IMensagemRecebida {
  from: string;
  message: Message;
}
