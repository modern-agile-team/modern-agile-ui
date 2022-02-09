import IconTypes from "@shared/types/icons";

const ChevronRight = ({ color = "#212121" }: IconTypes) => {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.168275 0.171581C0.3932 -0.0566153 0.75853 -0.05728 0.984262 0.170112L7.31331 6.5455C7.56223 6.79625 7.56223 7.20381 7.31331 7.45451L0.984262 13.8299C0.75853 14.0573 0.3932 14.0566 0.168275 13.8284C-0.0566614 13.6002 -0.0560039 13.2309 0.169729 13.0035L6.12966 7.00001L0.169729 0.996477C-0.0560039 0.769097 -0.0566614 0.399778 0.168275 0.171581Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronRight;
