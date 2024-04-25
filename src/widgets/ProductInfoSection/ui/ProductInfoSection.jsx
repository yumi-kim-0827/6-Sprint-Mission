import styled from "styled-components";
import { TagList } from "../../../entities/TagList";
import { FlexContainer, FlexItem } from "../../../shared/ui/Container";
import { formatPrice } from "../../../shared/util/util";

const NewFlexContainer = styled(FlexContainer)`
  @media (width<=767px) {
    flex-direction: column;
  }
`;

const ProductImage = styled.img`
  width: 486px;
  height: 486px;
  @media (width<=1199px) {
    width: 340px;
    height: 340px;
  }
  @media (width<=767px) {
    width: 343px;
    height: 343px;
  }
`;

export const ProductInfoSection = ({ info }) => {
  const { favoriteCount, images, tags, name, description, price } = info;
  const hashtag = tags.map((v) => `#${v}`);

  return (
    <NewFlexContainer as="section" gap="16px" justify="center">
      <ProductImage src={images} alt={name + "image"} />
      <FlexContainer direction="column">
        <h1>{name}</h1>
        <p>{formatPrice(price)}</p>
        <hr />
        <FlexContainer direction="column">
          <h2>상품 소개</h2>
          <p>{description}</p>
          <h2>상품 태그</h2>
          <TagList tags={hashtag} />
          <FlexItem flex="1">
            {/* <ImageButton src={} value={}/> */}
            <span>ImageButton {favoriteCount}</span>
          </FlexItem>
        </FlexContainer>
      </FlexContainer>
    </NewFlexContainer>
  );
};
