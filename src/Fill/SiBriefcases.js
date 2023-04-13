import * as React from "react";
const SvgSiBriefcases = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M10 6V3.8A1.8 1.8 0 0 1 11.8 2h4.4A1.8 1.8 0 0 1 18 3.8V6h2.6A2.4 2.4 0 0 1 23 8.4v8.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V8.4A2.4 2.4 0 0 1 7.4 6H10Zm2 0V4h4v2h-4Zm0 1v11h-2V7h2Zm6 0v11h-2V7h2Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M3 11a1 1 0 1 0-2 0v5.6C1 20.132 3.868 23 7.4 23H19a1 1 0 1 0 0-2H7.4A4.403 4.403 0 0 1 3 16.6V11Z"
    />
  </svg>
);
export default SvgSiBriefcases;
