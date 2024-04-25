import { TagList } from "../../../entities/TagList";

export const ProductInfoSection = ({ info }) => {
  const hashtag = info?.tags.map((v) => `#${v}`);

  return (
    <div className="main">
      <TagList tags={hashtag} />
    </div>
  );
};
