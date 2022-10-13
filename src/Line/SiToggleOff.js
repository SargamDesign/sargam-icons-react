import * as React from "react";
const SvgSiToggleOff = ({ title, titleId, ...props }) => (
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
      d="M17 6H7a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M7 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </svg>
);
export default SvgSiToggleOff;
