import React from "react";

export interface MAButtonTypes {
  children: React.ReactNode;
}

export interface MACheckBoxTypes {
  sizes?: "xs" | "s" | "m" | "l" | "xl";
  disabled?: boolean;
  value?: string | number;
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}
