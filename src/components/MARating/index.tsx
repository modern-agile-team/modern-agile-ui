import { MARatingTypes } from "@shared/types/input";
import { useState } from "react";
import { RatingWrap, StarContainer, FillStar, OutLineStar } from "./style";

const MARating = ({ sizes = "m", disabled = false }: MARatingTypes) => {
  const array = Array(5).fill(0);
  const [size, setSize] = useState(["30", "30", "30", "30", "30"]);

  const start = (num: number) => {
    switch (num) {
      case 2:
        return <OutLineStar />;
      case 1:
        return <OutLineStar />;
      case 0:
        return <OutLineStar />;
    }
  };

  return (
    <RatingWrap>
      {/* <div>{Array(10).fill(0).map(_, idx => <div key={idx} onMouseOver={() => array[] += 1}></div>)}</div> */}
      {/* {array.map(e => start(e))} */}
      <StarContainer
      // onMouseOver={() => (size[0] = "50")}
      // onMouseOut={() => (size[0] = "30")}
      >
        <OutLineStar />
      </StarContainer>
      {/* <StarContainer
        onMouseOver={() => (size[1] = "50")}
        onMouseOut={() => (size[1] = "30")}
      >
        <FillStar size={size[0]} />
      </StarContainer> */}
    </RatingWrap>
  );
};

export default MARating;
