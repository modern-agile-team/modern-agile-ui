import styled from "styled-components";

export const ButtonStyle = styled.button<{
  fill: boolean;
}>`
  border: 1px solid #6550ff;
  background: ${props => (props.fill ? "#6550ff" : "white")};
`;
