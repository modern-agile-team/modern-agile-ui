import styled from "styled-components";

import StarFill from "@MAIcons/StarFill";
import StarHalf from "@MAIcons/StarHalf";
import StarOutlined from "@MAIcons/StarOutlined";

export const RatingWrap = styled.div`
  border: 1px solid;
`;

export const FillStar = styled(StarFill)`
  width: 1500px;
  height: 1500px;
`;

export const OutLineStar = styled(StarOutlined).attrs({ size: "50" })`
  cursor: pointer;
  &:hover {
    font-size: 1000px;
  }
`;

export const StarContainer = styled.div`
  display: inline-block;
`;
