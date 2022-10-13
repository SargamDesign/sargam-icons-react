import * as React from "react";
const SvgSiAddAlarm = ({ title, titleId, ...props }) => (
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
      d="M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M8 13h8m-4 4V9m6-6 3 3M3 6l3-3"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiAddAlarm;
