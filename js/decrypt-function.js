export const DecryptMessage = (messageEncrypted) => {
  let msgDecrypt = "";

  for (let i = 0; i < messageEncrypted.length; i++) {
    let codig = messageEncrypted.charCodeAt(i);
    codig = codig - 1;
    msgDecrypt += String.fromCharCode(codig);
  }
  return msgDecrypt;
};
