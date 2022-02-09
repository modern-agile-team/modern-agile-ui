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

export const VisibleRadio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const CheckCircle = styled.div`
  border: 1px solid;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;
