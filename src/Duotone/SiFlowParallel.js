import * as React from "react";
const SvgSiFlowParallel = ({ title, titleId, ...props }) => (
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
      fillOpacity={0.16}
      d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </svg>
);
export default SvgSiFlowParallel;
