import { COLORS } from "@shared/theme";
import styled from "styled-components";

export const StyledRadioLabel = styled.label<{
  direction: string[];
  disabled: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction[0]};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  opacity: ${(props) => props.disabled && 0.5};
  cursor: pointer;
  span {
    font-size: 14px;
    color: ${COLORS.DARK.DARK3};
    margin: ${(props) => props.direction[1]};
  }
  &:hover,
  &:focus {
    .visible-radio {
      border: 1px solid ${COLORS.MAIN.COMMON};
    }
  }
  &:active {
    .visible-radio {
      background: ${(props) => !props.disabled && COLORS.MAIN.DARKER};
    }
  }
`;

export const InvisibleRadio = styled.input`
  display: none;
`;

export const VisibleRadio = styled.div<{
  isCheck: boolean;
  radioSize: { outer: string; inner: string };
  disabled: boolean;
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
`;

export const CheckCircle = styled.div``;
