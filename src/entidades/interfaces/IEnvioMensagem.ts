import { Client } from "whatsapp-web.js";

export interface IEnvioMensagem {
  enviar(): void;
  injetarBOT(bot: Client): void;
}
