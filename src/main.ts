import { Client, GroupNotification, LocalAuth, Message } from "whatsapp-web.js";
import Qrcode from "qrcode-terminal";

const bot = new Client({
  authStrategy: new LocalAuth(),
});

bot.on("qr", (qr: string) => {
  Qrcode.generate(qr, { small: true });
});

bot.on("message", (message: Message) => {
  console.log(`Voce recebeu uma mensagem de ${message.from}: ${message.body}`);
});

bot.on("ready", () => {
  console.log("Bot conectado.");
});

bot.initialize();
