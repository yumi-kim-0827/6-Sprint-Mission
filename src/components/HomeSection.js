import React from "react";
import "./HomeSection.css";

const HomeSection = ({
  imgUrl,
  imgAlt,
  badgeText,
  titleFirstLine,
  titleSecondLine,
  descriptionFirstLine,
  descriptionSecondLine,
}) => {
  const title = `${titleFirstLine} ${titleSecondLine}`;

  return (
    <div className="section-inner">
      <div className="section-inner__img">
        <img src={imgUrl} alt={imgAlt} />
      </div>
      <div className="section-inner__caption">
        {badgeText && <span className="section-inner__badge">{badgeText}</span>}
        <p className="section-inner__title text-wrap">
          {titleFirstLine}
          <br />
          {titleSecondLine}
        </p>
        <p className="section-inner__title text-nowrap">{title}</p>
        <p className="section-inner__description">
          {descriptionFirstLine}
          <br />
          {descriptionSecondLine}
        </p>
      </div>
    </div>
  );
};

export default HomeSection;
