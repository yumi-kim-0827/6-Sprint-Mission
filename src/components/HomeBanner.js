import React from "react";
import Button from "./Button";
import "./Button.css";
import "./HomeBanner.css";
import { Link } from "react-router-dom";

const HomeBanner = ({
  imgUrl,
  imgAlt,
  textFirstLine,
  textSecondLine,
  buttonText,
  buttonLink,
}) => {
  const text = `${textFirstLine} ${textSecondLine}`;

  return (
    <div className="banner">
      <div className="banner-inner">
        <img src={imgUrl} alt={imgAlt} className="banner-inner__img" />
        <div className="banner-inner__description text-wrap">
          <p className="text-wrap">
            {textFirstLine}
            <br />
            {textSecondLine}
          </p>
          <p className="text-nowrap">{text}</p>
          {buttonText && (
            <Button className="btn-large banner-inner__btn">
              <Link to={buttonLink}>{buttonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
