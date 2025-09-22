import * as React from "react";
const SvgSiInsights = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 21H3.8a.8.8 0 0 1-.8-.8V3m3 11 4-4 4 4 7-7"
    />
  </svg>
);
export default SvgSiInsights;
