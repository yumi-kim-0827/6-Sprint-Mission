import mockImg from "./assets/img/main-img-1.svg";

const mockData = [];

// 20개의 mock 데이터 생성
for (let i = 1; i <= 20; i++) {
  const data = {
    id: i,
    name: `상품 ${i}`,
    description: "블루투스",
    price: Math.floor(Math.random() * 1000000) + 50000, // 랜덤한 가격 (50000부터 1000000 사이)
    favoriteCount: Math.floor(Math.random() * 100), // 랜덤한 찜 개수 (0부터 100 사이)
    images: [{ mockImg }], // 이미지 URL (i에 따라 번호가 증가함)
    tags: ["전자제품"],
    createdAt: new Date().toISOString(), // 현재 날짜와 시간
    updatedAt: new Date().toISOString(), // 현재 날짜와 시간
    ownerId: 1, // 소유자 ID (고정값으로 설정)
  };
  mockData.push(data);
}

export default mockData;
