import React from "react";
import { ButtonStyle } from "./style";

interface Props {
  children: React.ReactNode;
}

const MAButton = ({ children }: Props) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default MAButton;
