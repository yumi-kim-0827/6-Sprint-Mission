export const convertTime = (textDate: string) => {
  const date = new Date(textDate);
  const year = date.getFullYear();
  let month: number | string = date.getMonth() + 1;
  if (month < 10) {
    month = '0' + month.toString();
  }
  const day = date.getDay();

  return `${year}. ${month}. ${day} `;
};

