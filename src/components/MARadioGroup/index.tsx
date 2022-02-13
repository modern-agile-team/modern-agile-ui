import { useCallback, useMemo, useState } from "react";
import { InvisibleRadio, StyledRadioLabel, VisibleRadio } from "./style";

interface Props {
  value: string | number;
  size?: "s" | "m" | "l";
  labelLocation?: "top" | "bottom" | "left" | "right";
  label?: false | string;
  disabled?: boolean;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

const MARadioGroup = ({
  size = "m",
  label = false,
  labelLocation = "right",
  disabled = false,
  value,
  onChange,
}: Props) => {
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

  const clickRadio = useCallback(
    (e) => {
      setIsCheck(!isCheck);
      onChange(e);
    },
    [isCheck]
  );

  return (
    <StyledRadioLabel disabled={disabled} labelLocation={labelLocation}>
      <InvisibleRadio type="radio" onChange={clickRadio} disabled={disabled} value={value} />
      <VisibleRadio disabled={disabled} radioSize={radioSize} isCheck={isCheck}>
        {isCheck && <div />}
      </VisibleRadio>
      {label && <span>{label}</span>}
    </StyledRadioLabel>
  );
};

export default MARadioGroup;
