export function addCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function removeCommas(str) {
  return str.replace(/,/g, "");
}
