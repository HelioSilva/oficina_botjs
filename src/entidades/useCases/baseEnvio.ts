import { Client } from "whatsapp-web.js";
import { IEnvioMensagem } from "../interfaces/IEnvioMensagem";

export abstract class BaseEnvio implements IEnvioMensagem {
  protected bot: Client | undefined;
  injetarBOT(bot: Client): void {
    this.bot = bot;
  }
  abstract enviar(): void;
}
