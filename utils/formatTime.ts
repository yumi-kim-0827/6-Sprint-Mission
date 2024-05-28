export default function formatTime(time: string) {
  const date = new Date(time);

  const year = date.getFullYear();
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  const formatedTime = `${year}. ${month}. ${day}`;
  return formatedTime;
}
