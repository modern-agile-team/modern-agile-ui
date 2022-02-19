import React, { useCallback, useState } from "react";
import { Wrap } from "./style";

interface Props {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  name?: string;
  size?: string;
  labelLocation?: "top" | "bottom" | "left" | "right";
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  children: any;
}

const MARadioGroup = ({
  direction = "column",
  size = "m",
  labelLocation = "right",
  name = "radioGroup",
  children,
  onChange,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const changeProps = useCallback(
    (e) => {
      if (onChange) onChange(e);
      setSelectedValue(e.target.value);
    },
    [selectedValue]
  );

  return (
    <Wrap role="radiogroup" direction={direction}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          name,
          size,
          labelLocation,
          onChange: changeProps,
          selectedValue,
        })
      )}
    </Wrap>
  );
};

export default MARadioGroup;
