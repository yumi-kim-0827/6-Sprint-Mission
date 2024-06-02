export default function formatDate(timestamp: string): string {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const resDate = `${year}. ${month}. ${day}`;
  return resDate;
}

// YYYY. MM. DD
