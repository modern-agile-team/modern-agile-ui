import React from "react";

export interface MAButtonTypes {
  children: React.ReactNode;
  varient?: "outlined" | "contained";
  sizes?: "xs" | "s" | "m" | "l" | "xl";
  disabled?: boolean;
}

export interface MACheckBoxTypes {
  sizes?: "xs" | "s" | "m" | "l" | "xl";
  disabled?: boolean;
  value?: string | number;
  label?: false | string;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}
