## 기본 요구사항

- [x] Github에 PR(Pull Request)을 만들어서 미션을 제출합니다.
- [x] 피그마 디자인에 맞게 페이지를 만들어 주세요.
- [x] React를 사용합니다

## 체크리스트 [기본]

### 상품 상세

- [x] 상품 상세 페이지 주소는 “/items/{productId}” 입니다.
- [x] response 로 받은 아래의 데이터로 화면을 구현합니다.
      => favoriteCount : 하트 개수
      => images : 상품 이미지
      => tags : 상품태그
      => name : 상품 이름
      => description : 상품 설명

- [x] 목록으로 돌아가기 버튼을 클릭하면 중고마켓 페이지 주소인 “/items” 으로 이동합니다
      상품 문의 댓글

- [x] 문의하기에 내용을 입력하면 등록 버튼의 색상은 “3692FF”로 변합니다.
- [x] response 로 받은 아래의 데이터로 화면을 구현합니다
      => image : 작성자 이미지
      => nickname : 작성자 닉네임
      => content : 작성자가 남긴 문구
      => updatedAt : 문의글 마지막 업데이트 시간

## 스크린샷

https://pandamarket-jmj.netlify.app/additem

## 멘토에게

상품 상세 페이지에서 정보를 가져올 때 API를 매번 불러오는데 이러면 성능에 영향이 있을까요?
한 곳에서 API를 불러오고 그걸 저장해뒀다가 API에 변경 사항이 있는지만 확인하고 가져와서 사용하는 방법을 생각해 봤는데 이 방법이 더 나을까요?
