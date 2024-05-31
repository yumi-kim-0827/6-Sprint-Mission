export default function FormatDate(date: Date) {
  const MM = String(date.getUTCMonth() + 1).padStart(2, '0');
  const DD = String(date.getUTCDate() + 1).padStart(2, '0');
  const YYYY = String(date.getUTCFullYear());

  return `${YYYY}. ${MM}. ${DD}`;
}
