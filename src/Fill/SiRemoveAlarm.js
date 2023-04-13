import * as React from "react";
const SvgSiRemoveAlarm = ({ title, titleId, ...props }) => (
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
      d="M6.707 3.707a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414l3-3Zm10.586-1.414a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8 12a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiRemoveAlarm;
