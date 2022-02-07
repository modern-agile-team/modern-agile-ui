import { ColorTypes, TypographyTypes } from "./types/themes";

export const COLORS: ColorTypes = {
  MAIN: {
    COMMON: "#6550FF",
    DARKER: "#1324CB",
    LIGHTER: "#9F7EFF",
    SUBTLE: "#ECE5FF",
  },
  ERROR: {
    COMMON: "#FF3B3B",
    DARKER: "#E63535",
    LIGHTER: "#FF5C5C",
    SUBTLE: "#FF8080",
  },
  WARNING: {
    COMMON: "#FFCC00",
    DARKER: "#E6B800",
    LIGHTER: "#FDDD48",
    SUBTLE: "#FDED72",
  },
  INFO: {
    COMMON: "#0063F7",
    DARKER: "#004FC4",
    LIGHTER: "#5B8DEF",
    SUBTLE: "#9DBFF9",
  },
  SUCCESS: {
    COMMON: "#06C270",
    DARKER: "#05A660",
    LIGHTER: "#39D98A",
    SUBTLE: "#57EBA1",
  },
  DARK: {
    DARK1: "#1E1E1E",
    DARK2: "#535962",
    DARK3: "#828B99",
    DARK4: "#A9B4C3",
  },
  LIGHT: {
    LIGHT1: "#CED7E1",
    LIGHT2: "#DBE1E9",
    LIGHT3: "#ECF0F5",
    LIGHT4: "#F9FBFF",
  },
  LINEAR: {
    LINEAR1: "background: linear-gradient(180deg, #6550FF 0%, rgba(101, 80, 255, 0) 85.61%);",
    LINEAR2:
      "background: linear-gradient(180deg, rgba(236, 229, 255, 0.5) 0%, rgba(236, 229, 255, 0) 100%);",
  },
};

export const Typography: TypographyTypes = {
  HEAD: {
    600: {
      fontSize: "44px",
      fontWeight: "bold",
      lineHeight: `${1.3 * 44}px`,
    },
    500: {
      fontSize: "36px",
      fontWeight: "bold",
      lineHeight: `${1.3 * 36}px`,
    },
    400: {
      fontSize: "28px",
      fontWeight: "bold",
      lineHeight: `${1.3 * 28}px`,
    },
    300: {
      fontSize: "24px",
      fontWeight: "bold",
      lineHeight: `${1.3 * 24}px`,
    },
    200: {
      fontSize: "20px",
      fontWeight: "bold",
      lineHeight: `${1.3 * 20}px`,
    },
    100: {
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: `${1.3 * 16}px`,
    },
  },
  BODY: {
    400: {
      fontSize: "20px",
      fontWeight: "normal",
      lineHeight: `${1.7 * 20}px`,
    },
    300: {
      fontSize: "18px",
      fontWeight: "normal",
      lineHeight: `${1.7 * 18}px`,
    },
    200: {
      fontSize: "16px",
      fontWeight: "normal",
      lineHeight: `${1.7 * 16}px`,
    },
    100: {
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: `${1.7 * 14}px`,
    },
  },
  DISPLAY: {
    200: {
      fontSize: "48px",
      fontWeight: "lighter",
      lineHeight: `${1.3 * 48}px`,
    },
    100: {
      fontSize: "40px",
      fontWeight: "lighter",
      lineHeight: `${1.3 * 40}px`,
    },
  },
  LEADPARAGRAPH: {
    100: {
      fontSize: "22px",
      fontWeight: "normal",
      lineHeight: `${1.5 * 22}px`,
    },
  },
};
