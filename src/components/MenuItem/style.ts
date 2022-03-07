import { COLORS } from "@shared/theme";
import styled from "styled-components";

export const MenuLI = styled.li`
  padding: 16px;
  &:hover {
    background-color: ${COLORS.MAIN.SUBTLE};
  }
  &:active,
  &:focus {
    background-color: ${COLORS.MAIN.COMMON};
  }
  cursor: default;
`;
