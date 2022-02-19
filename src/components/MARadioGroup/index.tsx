import React from "react";

interface Props {
  name?: string;
  size?: string;
  labelLocation?: "top" | "bottom" | "left" | "right";
  children: any;
}

const MARadioGroup = ({
  size = "m",
  labelLocation = "right",
  name = "radioGroup",
  children,
}: Props) => {
  return (
    <div role="radiogroup">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { name, size, labelLocation })
      )}
    </div>
  );
};

export default MARadioGroup;
