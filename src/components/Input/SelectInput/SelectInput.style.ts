import styled from "styled-components";
import { onTabletAndPc } from "styles/mediaQuery";
import COLORS from "styles/palette";
import zIndex from "styles/zIndex";

export const SelectInputContainer = styled.div`
  cursor: pointer;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid ${COLORS.GRAY_200};
  position: relative;
  color: ${COLORS.COOL_GRAY_800};
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  ${onTabletAndPc} {
    min-width: 130px;
  }
`;

export const SelectButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectButton = styled.div`
  ${onTabletAndPc} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
  }
`;

export const DropdownContentContainer = styled.ul`
  position: absolute;
  z-index: ${zIndex.dropdown};
  width: 130px;
  right: 0;
  top: 50px;
  border-radius: 12px;
  background-color: white;
  border: 1px solid ${COLORS.GRAY_200};
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const DropdwonContent = styled.li`
  padding: 9px 0px;
  text-align: center;
  &:first-child {
    border-bottom: 1px solid ${COLORS.GRAY_200};
    &:hover,
    &:focus {
      background-color: ${COLORS.GRAY_50};
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
  }
  &:last-child {
    &:hover,
    &:focus {
      background-color: ${COLORS.GRAY_50};
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }
`;
