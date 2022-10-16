import { MessageMedia } from "whatsapp-web.js";
import { BaseEnvio } from "./baseEnvio";

export class EnvioMensagemVideo extends BaseEnvio {
  constructor(
    private data: {
      para: string;
      mensagem?: string;
      path: string;
      AsDocument?: boolean;
      AsGif?: boolean;
    }
  ) {
    super();
  }

  async enviar(): Promise<void> {
    const video = MessageMedia.fromFilePath(this.data.path);
    await this.bot?.sendMessage(this.data.para, video, {
      caption: this.data.mensagem,
      sendMediaAsDocument: this.data.AsDocument,
      sendVideoAsGif: this.data.AsGif,
    });
  }
}
