import { Client } from "whatsapp-web.js";
import { IEnvioMensagem } from "../interfaces/IEnvioMensagem";
import { BaseEnvio } from "./baseEnvio";

export class EnvioMensagemTexto extends BaseEnvio {
  constructor(private data: { para: string; mensagem: string }) {
    super();
  }

  async enviar(): Promise<void> {
    await this.bot?.sendMessage(this.data.para, this.data.mensagem);
    return;
  }
}
