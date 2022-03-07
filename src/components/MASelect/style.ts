import { COLORS } from "@shared/theme";
import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .masb {
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 6px;
    padding: 16px 56px 16px 16px;
    border: 1px solid ${COLORS.DARK.DARK4};
    min-width: 150px;
    cursor: pointer;
  }
  .options {
    line-height: 1.5;
    border-radius: 6px;
    width: calc(100% - 2px);
    border: 1px solid ${COLORS.DARK.DARK4};
    position: absolute;
    top: 55px;
    ul {
      padding: 8px 0;
    }
  }
  #up {
    transition-duration: 0.3s;
    transform: rotate(180deg);
  }
  #down {
    transition-duration: 0.3s;
    transform: rotate(360deg);
  }
  svg {
    right: 21.25px;
    position: absolute;
  }
`;
