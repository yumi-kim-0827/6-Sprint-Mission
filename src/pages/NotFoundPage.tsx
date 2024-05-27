import { useEffect, useRef } from "react";
import styled from "styled-components";

const NotFoundPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const emojiRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const emojis = emojiRefs.current;

      emojis.forEach((emoji, index) => {
        if (emoji) {
          const delay = index * 200;
          const randomX = Math.random() * container.offsetWidth;
          const randomY = Math.random() * container.offsetHeight;

          emoji.style.left = `${randomX}px`;
          emoji.style.animationDelay = `${delay}ms`;
          emoji.style.setProperty("--end-y", `${randomY + 50}px`);
        }
      });
    }
  }, []);

  return (
    <StyledDiv ref={containerRef}>
      {Array.from({ length: 16 }, (_, index) => (
        <Emoji
          key={index}
          className="falling-letter"
          ref={(el) => (emojiRefs.current[index] = el)}>
          🐼
        </Emoji>
      ))}
      <StyledP>404 NotFoundPage</StyledP>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  position: relative;
  margin: 70px auto 0 auto;
  max-width: 1200px;
  height: calc(100vh - 230px);
`;

const StyledP = styled.p`
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 50px;
  text-align: center;
`;

const Emoji = styled.div`
  position: absolute;
  font-size: 20px;
  animation: falling-emoji 5s linear infinite;
  opacity: 0;

  @keyframes falling-emoji {
    0% {
      top: 0%;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      top: var(--end-y);
      opacity: 0;
    }
  }
`;

export default NotFoundPage;
