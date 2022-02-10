import styled from "styled-components";
import { COLORS } from "@shared/theme";

export const ButtonStyle = styled.button<{
  size: string[];
  colors: string[];
  isOutLine: boolean;
}>`
  border-radius: 6px;
  padding: ${props => props.size[0]};
  font-size: ${props => props.size[1]};
  background: ${props => props.colors[0]};
  color: ${props => props.colors[1]};
  border: ${props =>
    props.isOutLine ? `1px solid ${COLORS.MAIN.COMMON}` : "none"};
  &:hover {
    background: ${props =>
      props.isOutLine ? "black" : `${COLORS.MAIN.LIGHTER}`};
  }
  &:active {
    background: ${props =>
      props.isOutLine ? "black" : `${COLORS.MAIN.DARKER}`};
  }

  &:focus {
    outline: 0;
    box-shadow: 0px 0px 20px #9f7eff;
  }
`;
