import ChevronDown from "@MAIcons/ChevronDown";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Wrap } from "./style";

interface Props {
  label?: string;
  children: React.ReactElement[] | React.ReactElement;
}

const MASelect = ({ label = "Select an option", children }: Props) => {
  const [content, setContent] = useState<string>(label);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  const closeOptionsOutOfArea = useCallback(
    (e: any) => {
      if (isOpen && (!ref.current || !ref.current.contains(e.target))) setIsOpen(false);
    },
    [isOpen, ref.current]
  );

  const onClick = (e: any) => {
    setContent(e.target.innerText);
    setIsOpen(false);
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("click", closeOptionsOutOfArea);
    return () => {
      window.removeEventListener("click", closeOptionsOutOfArea);
    };
  }, [closeOptionsOutOfArea]);

  return (
    <Wrap ref={ref}>
      <div className="masb" onClick={toggleOptions}>
        <span>{content}</span>
        <ChevronDown id={isOpen ? "up" : "down"} />
      </div>
      {isOpen && (
        <div className="options">
          <ul onClick={onClick}>{children}</ul>
        </div>
      )}
    </Wrap>
  );
};

export default MASelect;
