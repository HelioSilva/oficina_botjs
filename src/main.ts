import { BotJS } from "./entidades/botjs";
import { EnvioMensagemAudio } from "./entidades/useCases/envioMensagemAudio";
import { EnvioMensagemImagem } from "./entidades/useCases/envioMensagemImagem";
import { EnvioMensagemTexto } from "./entidades/useCases/envioMensagemTexto";
import { PATH_MEDIA } from "./utils/constantes";

const bot = new BotJS(1000);

const mensagemTexto = new EnvioMensagemTexto({
  para: "558296130940@c.us",
  mensagem: "Aguarde... imagem chegando....",
});

const mensagemImagem = new EnvioMensagemImagem({
  para: "558296130940@c.us",
  mensagem: "Teste",
  path: PATH_MEDIA + "img.png",
});

const mensagemAudio = new EnvioMensagemAudio({
  para: "558296130940@c.us",
  mensagem: "Teste",
  path: PATH_MEDIA + "audio.ogg",
  audioAsVoice: true,
});

(async () => {
  await bot.executar();
  await bot.enviar(mensagemTexto);
  await bot.enviar(mensagemImagem);
  await bot.enviar(mensagemAudio);
})();
