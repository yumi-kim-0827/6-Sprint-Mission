import Image from "next/image";
import style from "./Feature.module.scss";

interface FeatureProps {
  image: string;
  alt: string;
  featureName: string;
  title: string;
  description: string;
  direction?: "row" | "row-reverse";
}

export default function Feature({
  image,
  alt,
  featureName,
  title,
  description,
  direction,
}: FeatureProps) {
  return (
    <div
      className={style.feature_container}
      style={{ flexDirection: direction }}
    >
      <div className={style.image}>
        <Image fill src={image} alt={alt} />
      </div>
      <div className={style.feature_content}>
        <h2>{featureName}</h2>
        <h1>{title}</h1>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
}
