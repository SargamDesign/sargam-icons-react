import * as React from "react";
const SvgSiFlowParallel = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M8 8.83a3.001 3.001 0 1 0-2 0v6.34a3.001 3.001 0 1 0 2 0zM7 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9-1.83V8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0M16 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1-13a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiFlowParallel;
