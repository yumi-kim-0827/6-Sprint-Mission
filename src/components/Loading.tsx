import styled from "styled-components";
import spinner from "../assets/img/spinner.gif";

const Loading = () => {
  return (
    <LoadingBox>
      <div>Loading...</div>
      <img src={spinner} />
    </LoadingBox>
  );
};

const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-weight: 700;
  font-size: 36px;
`;

export default Loading;
