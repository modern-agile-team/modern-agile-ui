import React from "react";

export interface MAButtonTypes {
  children: React.ReactNode;
  varient?: "outlined" | "contained";
  sizes?: "xs" | "s" | "m" | "l" | "xl";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface MACheckBoxTypes {
  checked?: boolean;
  sizes?: "xs" | "s" | "m" | "l" | "xl";
  disabled?: boolean;
  value?: string | number;
  label?: false | string;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}
