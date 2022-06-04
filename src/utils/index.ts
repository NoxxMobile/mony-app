export const capitalizeFirstLetter = (str: string) => {
  return str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

export const formatCurrency = (
  locales = "en-US",
  currency = "USD",
  maximumFractionDigits = 1,
) =>
  new Intl.NumberFormat(locales, {
    currency,
    style: "currency",
    maximumFractionDigits,
  });
