import { CheckCircle, InvisibleRadio, StyledRadioLabel, VisibleRadio } from "./style";

const MARadio = () => {
  return (
    <StyledRadioLabel>
      <InvisibleRadio type="radio" />
      <VisibleRadio>
        <CheckCircle />
      </VisibleRadio>
    </StyledRadioLabel>
  );
};

export default MARadio;
