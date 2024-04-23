import uploadIcon from "../../../assets/plus.svg";

function FileInput() {
	return (
		<>
			<label htmlFor="img">상품 이미지</label>
			<input type="file" id="img" placeholder="이미지 등록" className="add-item-img" />
		</>
	);
}


export default FileInput;