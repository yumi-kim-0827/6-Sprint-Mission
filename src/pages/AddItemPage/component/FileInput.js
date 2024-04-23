

function FileInput({ name, value, onChange }) {
	

	const handleChange = (e) => {
		const nextValue = e.target.files[0];
		onChange(name, nextValue);
	}

	return (
		<>
			<label htmlFor="img">상품 이미지</label>
			<input type="file" id="img" placeholder="이미지 등록" onChange={handleChange} className="add-item-img" />
			
		</>
	);
}


export default FileInput;