import * as React from "react";
const SvgSiKeypad = ({ title, titleId, ...props }) => (
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
      d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#fff"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M19 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#fff"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#fff"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </svg>
);
export default SvgSiKeypad;
