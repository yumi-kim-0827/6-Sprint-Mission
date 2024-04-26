import "./ProductDetailPage.css";
import backListIcon from "../../assets/backList.svg";
import ProductDetaiWrapper from "./component/ProductDetailWrapper";
import QuestionWrapper from "./component/QuestionWrapper";

function ProductDetailPage() {
	const question_warning = "개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";
	return (

		<div className="product-detail-section">
			<ProductDetaiWrapper/>
			<form className="question-wrapper">
				<label htmlFor="question">문의하기</label>
				<input id="question" placeholder={question_warning}></input>
				<button type="submit">등록</button>
			</form>
			<QuestionWrapper />
			<button className="back-item-list-button">
        목록으로 돌아가기
        <img src={backListIcon} alt="목록 돌아가기 아이콘"/>
        </button>
		</div>

	);
}


export default ProductDetailPage;