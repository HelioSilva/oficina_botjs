import { MessageMedia } from "whatsapp-web.js";
import { BaseEnvio } from "./baseEnvio";

export class EnvioMensagemImagem extends BaseEnvio {
  constructor(
    private data: {
      para: string;
      mensagem?: string;
      path: string;
      AsDocument?: boolean;
      AsSticker?: boolean;
    }
  ) {
    super();
  }

  async enviar(): Promise<void> {
    const img = MessageMedia.fromFilePath(this.data.path);
    await this.bot?.sendMessage(this.data.para, img, {
      caption: this.data.mensagem,
      sendMediaAsDocument: this.data.AsDocument,
      sendMediaAsSticker: this.data.AsSticker,
    });
    return;
  }
}
