import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`;

export const InvisibleCheckBox = styled.input.attrs({
  type: "checkbox",
})`
  display: none;
`;

export const VisibleCheckBox = styled.div<{
  size: string;
  borderColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 6px;
  border: 1px solid ${(props) => props.borderColor};
`;
