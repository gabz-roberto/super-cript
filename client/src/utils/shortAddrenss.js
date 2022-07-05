export const shortAddress = (address) => {
  return `${address.slice(0, 5)}... ${address.length - 4}`;
};
