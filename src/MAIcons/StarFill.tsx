import IconTypes from "@shared/types/icons";

const StarFill = ({ color = "#212121" }: IconTypes) => {
  return (
    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.547 0.903189C11.1414 -0.301057 12.8586 -0.301069 13.4529 0.903189L16.283 6.63736L22.611 7.55687C23.9399 7.74999 24.4706 9.38319 23.509 10.3205L18.9299 14.7839L20.0109 21.0865C20.2378 22.4101 18.8486 23.4194 17.66 22.7945L12 19.8188L6.34003 22.7945C5.15137 23.4194 3.7621 22.4101 3.98912 21.0865L5.07008 14.7839L0.49107 10.3205C-0.470582 9.38319 0.0600701 7.74999 1.38904 7.55687L7.71708 6.63736L10.547 0.903189Z"
        fill={color}
      />
    </svg>
  );
};

export default StarFill;
