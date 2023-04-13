import * as React from "react";
const SvgSiMic = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 17c-2.75 0-5-2.172-5-4.828V5.828C7 3.172 9.25 1 12 1s5 2.172 5 4.828v6.344C17 14.828 14.75 17 12 17Z"
    />
    <path
      fill="currentColor"
      d="M11.25 23a.75.75 0 0 0 1.5 0h-1.5Zm1.5-3v-.75h-1.5V20h1.5Zm0 3v-3h-1.5v3h1.5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4 12a8 8 0 1 0 16 0"
    />
  </svg>
);
export default SvgSiMic;
