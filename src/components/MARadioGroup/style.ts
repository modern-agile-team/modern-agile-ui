import styled from "styled-components";

export const Wrap = styled.div<{
  direction: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: wrap;
`;
