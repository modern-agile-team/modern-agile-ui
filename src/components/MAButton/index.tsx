import { MAButtonTypes } from "@shared/types/input";
import { ButtonStyle } from "./style";

const MAButton = ({ children }: MAButtonTypes) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};

export default MAButton;
