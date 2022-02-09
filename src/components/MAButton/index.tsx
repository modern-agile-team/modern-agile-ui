import { MAButtonTypes } from "@shared/types/input";
import { ButtonStyle } from "./style";

const MAButton = ({ children, fill }: MAButtonTypes) => {
  return <ButtonStyle fill={fill}>{children}</ButtonStyle>;
};

export default MAButton;
