import styled from "styled-components";

export const Wrap = styled.div<{
  direction: string;
  distance: number;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: wrap;
  label {
    padding: ${(props) => props.distance}px;
  }
`;
