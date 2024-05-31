export default function formatDate(date: Date) {
  const dateTime = new Date(date);

  const MM = String(dateTime.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(dateTime.getUTCDate()).padStart(2, "0");
  const YYYY = String(dateTime.getUTCFullYear());

  return `${YYYY}. ${MM}. ${dd}`;
}
