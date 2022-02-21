import ChevronDown from "@MAIcons/ChevronDown";
import React, { useState } from "react";
import { Wrap } from "./style";

interface Props {
  label?: string;
  children: React.ReactElement[] | React.ReactElement;
}

const MASelect = ({ label = "Select an option123", children }: Props) => {
  const [content, setContent] = useState<string>(label);

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setContent(e.currentTarget.innerHTML);
  };

  return (
    <Wrap>
      <div className="masb">
        <span>{content}</span>
      </div>
      <ChevronDown />
      <div className="options">
        <ul>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              onClick,
            })
          )}
        </ul>
      </div>
    </Wrap>
  );
};

export default MASelect;
