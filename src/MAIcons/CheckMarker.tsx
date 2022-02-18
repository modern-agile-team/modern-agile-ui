import IconTypes from "@shared/types/icons";

const CheckMarker = ({
  color = "#212121",
  width = "14",
  height = "10",
}: IconTypes) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.863 0.156129C14.0529 0.356593 14.0443 0.673058 13.8438 0.862978L4.34385 9.86299C4.24715 9.95459 4.1178 10.0038 3.98463 9.99974C3.85144 9.99564 3.72539 9.93859 3.63447 9.84114L0.134476 6.09114C-0.0539436 5.88929 -0.0430336 5.57289 0.158846 5.38444C0.360721 5.19604 0.677116 5.20694 0.865531 5.40884L4.0218 8.79059L13.1561 0.137024C13.3566 -0.0528912 13.673 -0.0443363 13.863 0.156129Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckMarker;
