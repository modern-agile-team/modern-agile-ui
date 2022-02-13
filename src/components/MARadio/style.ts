import { COLORS } from "@shared/theme";
import styled from "styled-components";

export const StyledRadioLabel = styled.label<{
  labelLocation: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  span {
    font-size: 14px;
    color: ${COLORS.DARK.DARK3};
    position: absolute;
    ${(props) => props.labelLocation}: -20px;
  }
`;

export const InvisibleRadio = styled.input`
  display: none;
`;

export const VisibleRadio = styled.div<{
  isCheck: boolean;
  radioSize: { outer: string; inner: string };
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid ${(props) => (props.isCheck ? COLORS.MAIN.COMMON : COLORS.DARK.DARK4)};
  background: ${(props) => (props.isCheck ? COLORS.MAIN.COMMON : COLORS.LIGHT.LIGHT4)};
  width: ${(props) => props.radioSize.outer};
  height: ${(props) => props.radioSize.outer};
  div {
    width: ${(props) => props.radioSize.inner};
    height: ${(props) => props.radioSize.inner};
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
