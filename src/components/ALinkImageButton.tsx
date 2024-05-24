import React from "react";

interface ALinkImageButtonProps {
  href: string;
  src: string;
  alt: string;
}

const ALinkImageButton = ({ href, src, alt }: ALinkImageButtonProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} />
    </a>
  );
};

export default ALinkImageButton;
