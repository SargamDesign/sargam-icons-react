import * as React from "react";
const SvgSiMonitorCheck = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="currentColor" d="M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.775 3.005A3.4 3.4 0 0 1 23 6.4v8.2a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 14.6V6.4A3.4 3.4 0 0 1 4.4 3h15.2zm-4.068 4.788a1 1 0 0 0-1.414 0L11 11.086 9.707 9.793a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiMonitorCheck;
