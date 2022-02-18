import IconTypes from "@shared/types/icons";

const EmojiSadOutlined = ({
  color = "#212121",
  width = "24",
  height = "24",
}: IconTypes) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9999 1.99805C17.5236 1.99805 22.0014 6.47589 22.0014 11.9996C22.0014 17.5233 17.5236 22.0011 11.9999 22.0011C6.47614 22.0011 1.99829 17.5233 1.99829 11.9996C1.99829 6.47589 6.47614 1.99805 11.9999 1.99805ZM11.9999 3.49805C7.30457 3.49805 3.49829 7.30432 3.49829 11.9996C3.49829 16.6949 7.30457 20.5011 11.9999 20.5011C16.6951 20.5011 20.5014 16.6949 20.5014 11.9996C20.5014 7.30432 16.6951 3.49805 11.9999 3.49805ZM11.9999 13.4971C13.6311 13.4971 15.1602 14.152 16.2809 15.2925C16.5712 15.588 16.5671 16.0628 16.2716 16.3531C15.9761 16.6434 15.5013 16.6393 15.211 16.3438C14.3695 15.4874 13.2246 14.9971 11.9999 14.9971C10.7725 14.9971 9.62519 15.4896 8.78332 16.3493C8.49351 16.6453 8.01867 16.6503 7.72272 16.3605C7.42677 16.0707 7.42179 15.5958 7.71159 15.2999C8.83281 14.1549 10.365 13.4971 11.9999 13.4971ZM9.00029 8.75024C9.69025 8.75024 10.2496 9.30956 10.2496 9.99953C10.2496 10.6895 9.69025 11.2488 9.00029 11.2488C8.31033 11.2488 7.751 10.6895 7.751 9.99953C7.751 9.30956 8.31033 8.75024 9.00029 8.75024ZM15.0003 8.75024C15.6903 8.75024 16.2496 9.30956 16.2496 9.99953C16.2496 10.6895 15.6903 11.2488 15.0003 11.2488C14.3103 11.2488 13.751 10.6895 13.751 9.99953C13.751 9.30956 14.3103 8.75024 15.0003 8.75024Z"
        fill={color}
      />
    </svg>
  );
};

export default EmojiSadOutlined;
