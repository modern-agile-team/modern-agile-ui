import React from "react";

interface Props {
  value?: string | number;
  children: React.ReactNode;
}

const MenuItem = ({ value, children }: Props) => {
  return <li value={value}>{children}</li>;
};

export default MenuItem;
