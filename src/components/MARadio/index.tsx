import { useCallback, useState } from "react";
import { CheckCircle, InvisibleRadio, StyledRadioLabel, VisibleRadio } from "./style";

const MARadio = () => {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const clickRadio = useCallback(() => {
    setIsCheck(!isCheck);
  }, [isCheck]);

  return (
    <StyledRadioLabel>
      <InvisibleRadio type="radio" onChange={clickRadio} />
      <VisibleRadio>{isCheck && <CheckCircle />}</VisibleRadio>
    </StyledRadioLabel>
  );
};

export default MARadio;