import { Client, MessageMedia } from "whatsapp-web.js";
import { IEnvioMensagem } from "../interfaces/IEnvioMensagem";
import { BaseEnvio } from "./baseEnvio";

export class EnvioMensagemImagem extends BaseEnvio {
  constructor(private data: { para: string; mensagem: string; path: string }) {
    super();
  }

  async enviar(): Promise<void> {
    const img = MessageMedia.fromFilePath(this.data.path);
    await this.bot?.sendMessage(this.data.para, img, {
      caption: this.data.mensagem,
    });
    return;
  }
}
