import * as React from "react";
const SvgSiRemoveAlarm = ({ title, titleId, ...props }) => (
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
      d="M6.707 3.707a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414l3-3Zm10.586-1.414a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8 12a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiRemoveAlarm;
