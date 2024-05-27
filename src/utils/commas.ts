export function addCommas(number: number): string {
  return number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function removeCommas(str: string): string {
  return str.replace(/,/g, "");
}
