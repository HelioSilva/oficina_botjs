# Oficina_BOTJS

Esse BOT é o resultado de uma série no canal @OficinaDaProgramação(Youtube), sobre a criação de BOTs para Whatsapp.
Pensando em criar vários tipos de BOTs, precisavamos ter um template de BOT para facilitar os projetos.

Usamos como motor do bot a biblioteca "pedroslopez/whatsapp-web.js" para recebimento e envio de mensagens.
A idéia é aprimorar o template, para que tenhamos escolha de motor, tirando toda dependência de um único motor do WhatsAppBOT.

## Autores

- [@HelioSilva](https://github.com/HelioSilva)

## Instalação

Instale oficina_botjs com npm

```bash
  npm install oficina_botjs
```

## Melhorias

Que melhorias você fez no seu código? Ex: refatorações, melhorias de performance, acessibilidade, etc

## Relatos de Bugs e sugestões

Para relatar bugs e sugestões no projeto, use as Issues do projeto no github.
[Link](https://github.com/HelioSilva/Serie-ChatBot-ZeroAoAvancado/issues)

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Uso/Exemplos

#### Criar o BOT

```javascript
import { BotJS } from "oficina_botjs";

const bot = new BotJS({
  timeout: 1000,
});

bot.executar();
```

#### Enviar mensagem(Texto)

```javascript
import { BotJS, EnvioMensagemTexto } from "oficina_botjs";

const bot = new BotJS({
  timeout: 1000,
});

(()=>{
 await bot.executar();

  const msgTexto = new EnvioMensagemTexto({
          para: '551112341234@c.us',
          mensagem: "Eu sou o BOT!",
  });

  bot.enviar(msgTexto);
})();
```
