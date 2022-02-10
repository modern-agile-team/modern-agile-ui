import React from "react";

export interface MAButtonTypes {
  children: React.ReactNode;
  varient?: "outlined" | "contained";
  sizes?: "xs" | "s" | "m" | "l" | "xl";
  disabled?: boolean;
}
