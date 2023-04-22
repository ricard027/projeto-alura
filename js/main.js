// Functions

import { CopyMessage } from "./copy-message.js";
import { DecryptMessage } from "./decrypt-function.js";
import { EncryptMessage } from "./encrypt-fc.js";
import { ModalMessage } from "./modal-message.js";

// Components

import {
  AreaTextMessage,
  ButtonCopyMessage,
  ContainerMessage,
  ContainerNotAreMessage,
  DecryptButton,
  EncryptButton,
  Inputmessage,
} from "./components.js";

let message = "";

Inputmessage.addEventListener("input", (e) => {
  let { value } = e.target;
  message = value;
});

// funçao de encriptar

EncryptButton.addEventListener("click", () => {
  let msgEncrypt = EncryptMessage(message);

  if (message != "") {
    ButtonCopyMessage.style.display = "block";
  }

  if (message != "") {
    ContainerMessage.style.display = "block";
    ContainerNotAreMessage.style.display = "none";
  } else {
    ModalMessage("Voce precisa digitar algum texto pra encriptar :/");
  }

  Inputmessage.value = "";
  AreaTextMessage.value = msgEncrypt;
});

// funçao de desencriptar

DecryptButton.addEventListener("click", () => {
  let MsgDecrypt = DecryptMessage(message);

  Inputmessage.value === ""
    ? ModalMessage("Voce precisa digitar algum texto pra desencriptar :/")
    : (AreaTextMessage.value = MsgDecrypt);
  Inputmessage.value = "";
});

// funçao de copiar mensagem

ButtonCopyMessage.addEventListener("click", (e) => {
  if (AreaTextMessage.value == "") {
    ModalMessage("Poxa, nenhum texto pra copiar :(");
  } else {
    ModalMessage("Texto copaiado com sucesso :D");
  }
  CopyMessage(AreaTextMessage.value);
});
