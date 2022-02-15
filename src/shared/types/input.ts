import React from "react";

export interface MAButtonTypes {
  children: React.ReactNode;
}

export interface MACheckBoxTypes {
  sizes?: "xs" | "s" | "m" | "l" | "xl";
  disabled?: boolean;
  value?: string | number;
  label?: false | string;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface MARatingTypes {
  sizes?: "s" | "m" | "l";
  disabled?: boolean;
}
