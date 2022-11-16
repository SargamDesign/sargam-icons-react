import * as React from "react";
const SvgSiMic = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C9.769 2 8 3.757 8 5.828v6.344C8 14.242 9.769 16 12 16s4-1.758 4-3.828V5.828C16 3.758 14.231 2 12 2Z"
      fill="currentColor"
    />
    <path
      d="M13 20.945V23a1 1 0 1 1-2 0v-2.055A9 9 0 0 1 3 12a1 1 0 1 1 2 0 7 7 0 1 0 14 0 1 1 0 1 1 2 0 9 9 0 0 1-8 8.945Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiMic;
