import IconTypes from "@shared/types/icons";

const EmojiSadSlightOutlined = ({
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
        d="M10.125 10.125C10.125 10.8154 9.56535 11.375 8.875 11.375C8.18465 11.375 7.625 10.8154 7.625 10.125C7.625 9.43465 8.18465 8.875 8.875 8.875C9.56535 8.875 10.125 9.43465 10.125 10.125ZM15.125 11.375C15.8154 11.375 16.375 10.8154 16.375 10.125C16.375 9.43465 15.8154 8.875 15.125 8.875C14.4346 8.875 13.875 9.43465 13.875 10.125C13.875 10.8154 14.4346 11.375 15.125 11.375ZM15.5035 14.5C13.9108 14.5 12.3536 14.9715 11.0283 15.855C10.7411 16.0465 10.6635 16.4345 10.855 16.7218C11.0464 17.0089 11.4345 17.0865 11.7217 16.895C12.8416 16.1484 14.1575 15.75 15.5035 15.75H16.5C16.8451 15.75 17.125 15.4701 17.125 15.125C17.125 14.7799 16.8451 14.5 16.5 14.5H15.5035ZM2 12C2 6.47715 6.47715 2 12 2C17.5229 2 22 6.47715 22 12C22 17.5229 17.5229 22 12 22C6.47715 22 2 17.5229 2 12ZM12 3.25C7.16751 3.25 3.25 7.16751 3.25 12C3.25 16.8325 7.16751 20.75 12 20.75C16.8325 20.75 20.75 16.8325 20.75 12C20.75 7.16751 16.8325 3.25 12 3.25Z"
        fill={color}
      />
    </svg>
  );
};

export default EmojiSadSlightOutlined;
