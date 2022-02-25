import React from "react";
import { MenuLI } from "./style";

interface Props {
  value?: string | number;
  children: React.ReactNode;
}

const MenuItem = ({ value, children }: Props) => {
  return <MenuLI value={value}>{children}</MenuLI>;
};

export default MenuItem;
