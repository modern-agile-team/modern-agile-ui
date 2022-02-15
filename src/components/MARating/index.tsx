import { MARatingTypes } from "@shared/types/input";
import { RatingWrap } from "./style";

const MARating = ({ sizes = "m", disabled = false }: MARatingTypes) => {
  return (
    <RatingWrap>
      <div>별별</div>
    </RatingWrap>
  );
};

export default MARating;
