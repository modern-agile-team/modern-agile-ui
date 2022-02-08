import { COLORS } from "@shared/theme";
import { MACheckBoxTypes } from "@shared/types/input";
import React, { useCallback, useMemo, useState } from "react";
import { InvisibleCheckBox, StyledLabel, VisibleCheckBox } from "./style";

const MACheckBox = ({
  sizes = "m",
  disabled = false,
  value,
  onChange,
}: MACheckBoxTypes) => {
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

  const clickCheckBox = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(!isChecked);
      onChange(e);
    },
    [isChecked, onChange]
  );

  const backgroundColor = useMemo(() => {
    if (disabled) {
      return isChecked ? COLORS.MAIN.SUBTLE : COLORS.LIGHT.LIGHT3;
    } else {
      return isChecked ? COLORS.MAIN.COMMON : "white";
    }
  }, [disabled, isChecked]);

  const borderColor = useMemo(() => {
    if (disabled) return COLORS.MAIN.SUBTLE;
    else return isChecked ? COLORS.MAIN.COMMON : COLORS.DARK.DARK4;
  }, [disabled, isChecked]);

  return (
    <StyledLabel>
      <InvisibleCheckBox
        value={value}
        checked={isChecked}
        onChange={clickCheckBox}
        disabled={disabled}
      />
      <VisibleCheckBox
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        size={size}
      >
        {isChecked && "✔"}
      </VisibleCheckBox>
    </StyledLabel>
  );
};

export default MACheckBox;
