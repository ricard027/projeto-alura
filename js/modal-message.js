import { AreaTextMessage, Inputmessage } from "./main.js";

export const ModalMessage = (text) => {
  let customModal = document.createElement("div");
  customModal.innerHTML = `<div class='messageModal'>${text}</div>`;
  customModal.className = "modal";
  Inputmessage.focus();
  document.body.appendChild(customModal);

  setTimeout(() => {
    !document.body.removeChild(customModal);
  }, [1000]);
};
