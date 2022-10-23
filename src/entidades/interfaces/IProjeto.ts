import { IEnvioMensagem } from "./IEnvioMensagem";
import { IMensagemRecebida } from "./IMensagemRecebida";

export interface IProjeto {
  mensagemRecebida(msg: IMensagemRecebida): Promise<void | IEnvioMensagem>;
}
