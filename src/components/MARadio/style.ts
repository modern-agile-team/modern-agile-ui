import { COLORS } from "@shared/theme";
import styled from "styled-components";

export const StyledRadioLabel = styled.label`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`;

export const InvisibleRadio = styled.input`
  display: none;
`;

export const VisibleRadio = styled.div<{
  isCheck: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.DARK.DARK4};
  background: ${(props) => (props.isCheck ? COLORS.MAIN.COMMON : COLORS.LIGHT.LIGHT4)};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  div {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${COLORS.LIGHT.LIGHT4};
  }
  &:hover,
  &:focus {
    border: 1px solid ${COLORS.MAIN.COMMON};
  }
  &:active {
    background: ${COLORS.MAIN.DARKER};
  }
`;

export const CheckCircle = styled.div``;
