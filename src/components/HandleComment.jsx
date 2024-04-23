import React from "react";
import noninquiry from "../assets/no-inquiry.png";
import profile from "../assets/profile.png";
import "./HandleComment.css";
import returnlist from "../assets/return.png";

const mockData = [
  {
    id: "상큼한판다",
    profile: profile,
    time: "1시간 전",
    comment: "혹시 사용기간이 어떻게 되실까요?",
  },
  {
    id: "똑똑한판다",
    profile: profile,
    time: "1시간 전",
    comment: "색상이 어떻게 되는지 궁금해요!",
  },
  {
    id: "강인한판다",
    profile: profile,
    time: "1시간 전",
    comment: "상세 잔기스 사진 있을까요?",
  },
];

const HandleComment = () => {
  return (
    <div className="wrapper">
      <div className="inquire-container">
        <label htmlFor="inquire-area">문의하기</label>
        <textarea
          className="inquire-container__inquire-area"
          name="inquire-area"
          id="inquire-area"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></textarea>
        <button className="inquire-container__register-btn">등록</button>
      </div>
      <div className="comment-container">
        {mockData.length !== 0 ? (
          mockData.map((data) => {
            return (
              <div className="comment" key={data.id}>
                <p className="comment__content">{data.comment}</p>
                <div className="profile">
                  <img className="profile__img" src={data.profile} alt="프로필 이미지" />
                  <div className="profile-info">
                    <span className="profile__id">{data.id}</span>
                    <span className="profile__time">{data.time}</span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="non-comment-container">
            <img src={noninquiry} alt="댓글이 없는 경우 출력 이미지" />
            <p>아직 문의가 없습니다.</p>
          </div>
        )}
      </div>
      <div className="return-to-items-btn-container">
        <button className="return-to-items-btn-container__btn">
          <span>목록으로 돌아가기</span>
          <img src={returnlist} alt="목록으로 돌아가기 버튼" />
        </button>
      </div>
    </div>
  );
};

export default HandleComment;
