import { useCallback, useMemo } from "react";
import { InvisibleRadio, StyledRadioLabel, VisibleRadio } from "./style";

interface Props {
  value: string | number;
  selectedValue?: string;
  name?: string;
  size?: "s" | "m" | "l";
  labelLocation?: "top" | "bottom" | "left" | "right";
  label?: false | string;
  disabled?: boolean;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio = ({
  size = "m",
  labelLocation = "right",
  label = false,
  disabled = false,
  name = "",
  value,
  selectedValue,
  onChange,
}: Props) => {
  const direction = useMemo(() => {
    switch (labelLocation) {
      case "top":
        return ["column-reverse", "0 0 8px 0"];
      case "bottom":
        return ["column", "8px 0 0 0"];
      case "left":
        return ["row-reverse", "0 8px 0 0"];
      case "right":
        return ["row", "0 0 0 8px"];
    }
  }, [labelLocation]);

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
      if (onChange) onChange(e);
    },
    [selectedValue, onChange]
  );

  return (
    <StyledRadioLabel disabled={disabled} direction={direction}>
      <InvisibleRadio
        type="radio"
        onChange={clickRadio}
        disabled={disabled}
        value={value}
        name={name}
      />
      <VisibleRadio
        className={`visible-radio ${value}`}
        disabled={disabled}
        radioSize={radioSize}
        isCheck={selectedValue === value}
      >
        {selectedValue === value && <div />}
      </VisibleRadio>
      {label && <span>{label}</span>}
    </StyledRadioLabel>
  );
};

export default Radio;
