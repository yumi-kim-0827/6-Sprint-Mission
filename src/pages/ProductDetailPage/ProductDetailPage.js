import "./ProductDetailPage.css";
import itemImg from "../../assets/like.svg";
import userIcon from "../../assets/userIcon.svg";

function ProductDetailPage() {
	const question_warning = "개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";
	return (

		<div className="product-detail-section">
			<div className="product-detail-wrapper">
				<img src={itemImg} alt="상품이미지"></img>
				<div className="product-detail-information">
					<div>name</div>
					<div>price</div>
					<div>description</div>
					<div>tag</div>
					<div>favoriteCount</div>
				</div>
			</div>
			<form className="question-wrapper">
				<label htmlFor="question">문의하기</label>
				<input id="question" placeholder={question_warning}></input>
				<button type="submit">등록</button>
			</form>
			<div className="comment-wrapper">
				<div className="user-comment-wrapper">
					<div className="user-content">content: 작성자가 남긴 문구</div>
					<div className="user-information">
						<img src={userIcon} alt="사용자이미지" />
						<div className="user-text-information">
							<div>nickname: 사용자 닉네임</div>
							<div>updatedAt: 문의글 마지막 업데이트 시간</div>
						</div>
					</div>
				</div>

				<div className="user-comment-wrapper">
					<div className="user-content">content: 작성자가 남긴 문구</div>
					<div className="user-information">
						<img src={userIcon} alt="사용자이미지" />
						<div className="user-text-information">
							<div className="user-nickname">nickname: 사용자 닉네임</div>
							<div className="user-updatedAt">updatedAt: 문의글 마지막 업데이트 시간</div>
						</div>
					</div>
				</div>
			</div>
			<button className="back-item-list-button">목록으로 돌아가기</button>
		</div>

	);
}


export default ProductDetailPage;