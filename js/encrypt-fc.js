export const EncryptMessage = (msg) => {
  let msgencrypt = "";
  let RandomIndex = Math.floor(Math.random() * 26);

  for (let i = 0; i < msg.length; i++) {
    let codig = msg.charCodeAt(i);
    codig = codig + 1;
    msgencrypt += String.fromCharCode(codig);
  }
  return msgencrypt;
};
