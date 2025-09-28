import * as React from "react";
const SvgSiMonitor = ({ title, titleId, ...props }) => (
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
    <path
      fill="currentColor"
      d="M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zm8-4.4a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 14.6V6.4A3.4 3.4 0 0 1 4.4 3h15.2l.175.005A3.4 3.4 0 0 1 23 6.4z"
    />
  </svg>
);
export default SvgSiMonitor;
