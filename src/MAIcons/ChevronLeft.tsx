import IconTypes from "@shared/types/icons";

const ChevronLeft = ({ color = "#212121" }: IconTypes) => {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.33173 13.8284C7.1068 14.0566 6.74147 14.0573 6.51574 13.8299L0.186688 7.4545C-0.0622286 7.20375 -0.0622286 6.79619 0.186688 6.54549L6.51574 0.170076C6.74147 -0.0572924 7.1068 -0.0565926 7.33173 0.171592C7.55666 0.399778 7.55601 0.76912 7.33027 0.996488L1.37034 6.99999L7.33027 13.0035C7.556 13.2309 7.55666 13.6002 7.33173 13.8284Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronLeft;
