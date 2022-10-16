import { BotJS } from "./entidades/botjs";
import {
  EnvioMensagemAudio,
  EnvioMensagemImagem,
  EnvioMensagemTexto,
  EnvioMensagemVideo,
} from "./entidades/useCases";
import { PATH_MEDIA } from "./utils/constantes";
import { resolve } from "path";

const bot = new BotJS({
  timeout: 5000,
  useChrome: true,
});

const mensagemTexto = new EnvioMensagemTexto({
  para: "558296130940@c.us",
  mensagem: "Aguarde... imagem chegando....",
});

const mensagemImagem = new EnvioMensagemImagem({
  para: "558296130940@c.us",
  mensagem: "Teste",
  path: resolve(PATH_MEDIA, "img.png"),
  AsSticker: true,
});

const mensagemAudio = new EnvioMensagemAudio({
  para: "558296130940@c.us",
  mensagem: "Teste",
  path: resolve(PATH_MEDIA, "audio.ogg"),
  audioAsVoice: true,
});

const mensagemVideo = new EnvioMensagemVideo({
  para: "558296130940@c.us",
  path: resolve(PATH_MEDIA, "video.mp4"),
  AsGif: true,
});

(async () => {
  await bot.executar();
  await bot.enviar(mensagemTexto);
  await bot.enviar(mensagemImagem);
  await bot.enviar(mensagemAudio);
  await bot.enviar(mensagemVideo);
})();
