/**
 * 금액을 한국돈 표현법으로 반환해주는 함수
 * @param price 가격
 * @returns
 */
export const formatNumberToWon = (price: number): string => {
  return price.toLocaleString('ko-KR') + ' 원';
};
