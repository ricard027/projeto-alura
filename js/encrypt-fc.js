export const EncryptMessage = (msg) => {
  let msgencrypt = "";
  for (let i = 0; i < msg.length; i++) {
    let codig = msg.charCodeAt(i);
    codig = codig + 1;
    msgencrypt += String.fromCharCode(codig);
  }
  return msgencrypt;
};
