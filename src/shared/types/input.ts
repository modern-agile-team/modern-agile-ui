import React from "react";

export interface MAButtonTypes {
  children: React.ReactNode;
  fill: boolean;
  sizes?: "xs" | "s" | "m" | "l" | "xl";
  disabled?: boolean;
  //온클릭 넘겨줘야되나요 순기씌??
}
