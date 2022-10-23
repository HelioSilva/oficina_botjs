import { Client, LocalAuth, Message } from "whatsapp-web.js";
import Qrcode from "qrcode-terminal";
import { IMensagemRecebida } from "./interfaces/IMensagemRecebida";
import { IEnvioMensagem } from "./interfaces/IEnvioMensagem";
import { PATH_CHROME } from "../utils/constantes";
import { IProjeto } from "./interfaces/IProjeto";

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export class BotJS {
  private listaMensagens: IMensagemRecebida[] = [];
  private bot: Client;
  constructor(
    private params: {
      timeout?: number;
      useChrome?: boolean;
      projeto?: IProjeto;
      pathSession?: string;
    }
  ) {
    this.bot = this.criarBot();
    this.inicializar();
  }

  public async executar() {
    await this.bot.initialize();
    this.processamento();
  }

  public async enviar(msg: IEnvioMensagem) {
    msg.injetarBOT(this.bot);
    msg.enviar();
  }

  private async processamento() {
    while (true) {
      // alguma coisa
      if (this.listaMensagens.length > 0) {
        const msg = this.listaMensagens.shift();
        if (msg && this.params.projeto) {
          const response = await this.params.projeto.mensagemRecebida(msg);
          if (response) {
            this.enviar(response);
          }
        }
      }
      await delay(this.params.timeout ? this.params.timeout : 5000);
    }
  }

  private criarBot(): Client {
    return new Client({
      puppeteer: {
        executablePath: this.params.useChrome ? PATH_CHROME : undefined,
      },
      authStrategy: new LocalAuth({
        dataPath: this.params.pathSession ? this.params.pathSession : undefined,
      }),
    });
  }

  private inicializar() {
    this.bot.on("qr", (qr: string) => {
      Qrcode.generate(qr, { small: true });
    });

    this.bot.on("message", (message: Message) => {
      this.listaMensagens.push({
        from: message.from,
        message,
      });
      console.log(
        `Voce recebeu uma mensagem de ${message.from}: ${message.body}`
      );
    });

    this.bot.on("ready", () => {
      console.log("Bot conectado.");
    });
  }
}
