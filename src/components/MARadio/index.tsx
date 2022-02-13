import { useCallback, useMemo, useState } from "react";
import { InvisibleRadio, StyledRadioLabel, VisibleRadio } from "./style";

interface Props {
  size?: "s" | "m" | "l";
}

const MARadio = ({ size = "m" }: Props) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const radioSize = useMemo(() => {
    switch (size) {
      case "s":
        return { outer: "16px", inner: "8px" };
      case "m":
        return { outer: "24px", inner: "14px" };
      case "l":
        return { outer: "32px", inner: "20px" };
    }
  }, [size]);

  const clickRadio = useCallback(() => {
    setIsCheck(!isCheck);
  }, [isCheck]);

  return (
    <StyledRadioLabel>
      <InvisibleRadio type="radio" onChange={clickRadio} />
      <VisibleRadio radioSize={radioSize} isCheck={isCheck}>
        {isCheck && <div />}
      </VisibleRadio>
    </StyledRadioLabel>
  );
};

export default MARadio;
