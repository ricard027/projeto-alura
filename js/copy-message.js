export const CopyMessage = async (messageEncrypted) => {
  try {
    await navigator.clipboard.writeText(messageEncrypted);
  } catch (error) {
    console.log(error);
  }
};
