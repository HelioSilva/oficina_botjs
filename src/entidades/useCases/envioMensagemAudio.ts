import { Client, MessageMedia } from "whatsapp-web.js";
import { IEnvioMensagem } from "../interfaces/IEnvioMensagem";
import { BaseEnvio } from "./baseEnvio";

export class EnvioMensagemAudio extends BaseEnvio {
  constructor(
    private data: {
      para: string;
      mensagem: string;
      path: string;
      audioAsVoice?: boolean;
    }
  ) {
    super();
  }

  async enviar(): Promise<void> {
    const audio = MessageMedia.fromFilePath(this.data.path);
    await this.bot?.sendMessage(this.data.para, audio, {
      caption: this.data.mensagem,
      sendAudioAsVoice: this.data.audioAsVoice,
    });
    return;
  }
}
