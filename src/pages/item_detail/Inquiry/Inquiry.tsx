import React, { useState, useEffect, ChangeEvent } from "react";
import { EnrollButton, Head, InquirySection, TextArea } from "./inquiry_style";

const Inquiry = () => {
  const [inquiryInput, setInquiryInput] = useState("");
  const [enrollButtonDisable, setEnrollButtonDisable] = useState(true);

  const handleInquiryInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInquiryInput(e.target.value);
  };

  //등록 버튼 활성화 검사
  useEffect(() => {
    setEnrollButtonDisable(inquiryInput ? false : true);
  }, [inquiryInput]);

  return (
    <InquirySection>
      <Head>문의하기</Head>
      <TextArea
        value={inquiryInput}
        onChange={handleInquiryInput}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      ></TextArea>
      <EnrollButton>
        <button disabled={enrollButtonDisable}>등록</button>
      </EnrollButton>
    </InquirySection>
  );
};

export default Inquiry;
