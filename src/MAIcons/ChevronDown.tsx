import IconTypes from "@shared/types/icons";

const ChevronDown = ({ color = "#212121", width = "15", height = "8", id = "" }: IconTypes) => {
  return (
    <svg
      id={id}
      width={width}
      height={height}
      viewBox="0 0 15 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5784 0.418275C14.8066 0.6432 14.8073 1.00853 14.5799 1.23426L8.2045 7.56331C7.95375 7.81223 7.54619 7.81223 7.29549 7.56331L0.920076 1.23426C0.692708 1.00853 0.693407 0.643199 0.921592 0.418274C1.14978 0.193338 1.51912 0.193996 1.74649 0.419728L7.74999 6.37966L13.7535 0.419729C13.9809 0.193996 14.3502 0.193339 14.5784 0.418275Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronDown;
