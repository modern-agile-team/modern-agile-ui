import IconTypes from "@shared/types/icons";

const Dismiss = ({ color = "#212121" }: IconTypes) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.149301 0.149545C0.348365 -0.0498482 0.671116 -0.0498482 0.870184 0.149545L7.00002 6.28936L13.1298 0.149545C13.3289 -0.0498482 13.6516 -0.0498482 13.8507 0.149545C14.0498 0.348933 14.0498 0.672211 13.8507 0.8716L7.72087 7.01143L13.8279 13.1284C14.027 13.3278 14.027 13.6511 13.8279 13.8504C13.6288 14.0499 13.3061 14.0499 13.107 13.8504L7.00002 7.73346L0.892976 13.8504C0.693908 14.0499 0.371161 14.0499 0.172093 13.8504C-0.0269754 13.6511 -0.0269754 13.3278 0.172093 13.1284L6.27912 7.01143L0.149301 0.8716C-0.049767 0.672211 -0.049767 0.348933 0.149301 0.149545Z"
        fill={color}
      />
    </svg>
  );
};

export default Dismiss;
