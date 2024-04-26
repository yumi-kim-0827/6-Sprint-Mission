import "./ProductDetailPage.css";
import ProductDetailWrapper from "./component/ProductDetailWrapper";
import QuestionWrapper from "./component/QuestionWrapper";
import backListIcon from "../../assets/backList.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetailPage() {
	const question_warning = "개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

	
	const [inputText, setInputText] = useState('');
	const [disabled, setDisabled] = useState(true);


	const handleInputChange = (e) => {
		setInputText(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		if (inputText !== '') {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	}, [inputText]);

	return (

		<div className="product-detail-section">
			<ProductDetailWrapper />
			<form className="question-wrapper" onSubmit={handleSubmit}>
				<label htmlFor="question">문의하기</label>
				<textarea id="question" type="text" value={inputText} placeholder={question_warning} onChange={handleInputChange} />
				<div className="submit-button-wrapper">
					<button disabled={disabled}>등록</button>
				</div>

			</form>

			<div className="comment-wrapper">
				<QuestionWrapper />
				<div className="back-item-list-button-section">
					<NavLink to="/items" style={{
						textDecoration:"none"
					}}>
						<button className="back-item-list-button">
							<span>
								목록으로 돌아가기
							</span>
							<img src={backListIcon} alt="목록 돌아가기 아이콘" />
						</button>
					</NavLink>
				</div>

			</div>
		</div>


	);
}


export default ProductDetailPage;