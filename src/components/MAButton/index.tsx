import { MAButtonTypes } from "@shared/types/input";
import { useMemo, useState } from "react";
import { ButtonStyle } from "./style";
import { COLORS } from "@shared/theme";

const MAButton = ({
  children,
  varient = "contained",
  sizes = "m",
  disabled = false,
}: MAButtonTypes) => {
  const [isOutLine, setIsOutLine] = useState<boolean>(false);

  const VHPaddingFontSize = useMemo(() => {
    switch (sizes) {
      case "xs":
        return ["10px 16px", "12px"];
      case "s":
        return ["12px 24px", "14px"];
      case "m":
        return ["14px 32px", "16px"];
      case "l":
        return ["16px 48px", "18px"];
      case "xl":
        return ["20px 56px", "20px"];
    }
  }, [sizes]);

  const colors = useMemo(() => {
    if (disabled) return [`${COLORS.MAIN.SUBTLE}`, `${COLORS.LIGHT.LIGHT1}`];
    if (varient === "outlined") {
      setIsOutLine(true); //디자인이 아직 미완이라 하심
      return ["white", "black"];
    }
    setIsOutLine(false);
    return [`${COLORS.MAIN.COMMON}`, "white"];
  }, [varient]);

  return (
    <ButtonStyle
      size={VHPaddingFontSize}
      colors={colors}
      isOutLine={isOutLine}
      disabled={disabled}
    >
      {children}
    </ButtonStyle>
  );
};

export default MAButton;
