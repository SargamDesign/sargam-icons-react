import * as React from "react";
const SvgSiInsights = ({ title, titleId, ...props }) => (
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
      d="M4 3a1 1 0 0 0-2 0v17.2A1.8 1.8 0 0 0 3.8 22H21a1 1 0 1 0 0-2H4V3Zm17.707 4.707a1 1 0 0 0-1.414-1.414L14 12.586l-3.293-3.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L10 11.414l3.293 3.293a1 1 0 0 0 1.414 0l7-7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiInsights;
