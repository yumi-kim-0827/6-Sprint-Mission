export function formatCurrency(value) {
  const strValue = String(value);
  const [integerPart, decimalPart] = strValue.split(".");
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
  const result = decimalPart
    ? `${formattedIntegerPart}.${decimalPart}원`
    : `${formattedIntegerPart}원`;

  return result;
}
