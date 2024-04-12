// 숫자 3자리 마라 콤마를 찍는 함수입니다.
export default function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
