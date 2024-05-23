export default function FileInput() {
  return (
    <div>
      <input
        type="file"
        accept="images/png, images/jpeg"
        placeholder="이미지 등록"
        className="img_add_input"
      />
      <div></div>
    </div>
  );
}
