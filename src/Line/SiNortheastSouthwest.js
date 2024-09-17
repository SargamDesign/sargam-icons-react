import * as React from "react";
const SvgSiNortheastSouthwest = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 6 6 18M18 6v4m0-4h-4M6 18v-4m0 4h4"
    />
  </svg>
);
export default SvgSiNortheastSouthwest;
