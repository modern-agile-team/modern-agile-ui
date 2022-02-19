import React, { useCallback, useState } from "react";

interface Props {
  name?: string;
  size?: string;
  labelLocation?: "top" | "bottom" | "left" | "right";
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  children: any;
}

const MARadioGroup = ({
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
    <div role="radiogroup">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          name,
          size,
          labelLocation,
          onChange: changeProps,
          selectedValue,
        })
      )}
    </div>
  );
};

export default MARadioGroup;
