import { COLORS } from "@shared/theme";
import { MACheckBoxTypes } from "@shared/types/input";
import React, { useCallback, useMemo, useState } from "react";
import { InvisibleCheckBox, StyledLabel, VisibleCheckBox } from "./style";

const MACheckBox = ({ sizes = "m", value, onChange }: MACheckBoxTypes) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const size = useMemo(() => {
    switch (sizes) {
      case "xs":
        return "20px";
      case "s":
        return "25px";
      case "m":
        return "30px";
      case "l":
        return "35px";
      case "xl":
        return "40px";
    }
  }, [sizes]);

  const borderColor = COLORS.DARK.DARK4;

  const clickCheckBox = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(!isChecked);
      onChange(e);
    },
    [isChecked, onChange]
  );

  return (
    <StyledLabel>
      <InvisibleCheckBox
        value={value}
        checked={isChecked}
        onChange={clickCheckBox}
      />
      <VisibleCheckBox borderColor={borderColor} size={size}>
        {isChecked && "✔"}
      </VisibleCheckBox>
    </StyledLabel>
  );
};

export default MACheckBox;
