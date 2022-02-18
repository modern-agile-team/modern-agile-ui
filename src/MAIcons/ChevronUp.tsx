import IconTypes from "@shared/types/icons";

export const ChevronUp = ({
  color = "#212121",
  width = "15",
  height = "8",
}: IconTypes) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.921581 7.58173C0.693385 7.3568 0.69272 6.99147 0.920112 6.76574L7.2955 0.436687C7.54625 0.18777 7.95381 0.18777 8.20451 0.436687L14.5799 6.76574C14.8073 6.99147 14.8066 7.3568 14.5784 7.58172C14.3502 7.80666 13.9809 7.806 13.7535 7.58027L7.75001 1.62034L1.74648 7.58027C1.5191 7.806 1.14978 7.80666 0.921581 7.58173Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronUp;
