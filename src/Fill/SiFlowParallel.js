import * as React from "react";
const SvgSiFlowParallel = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 8.83a3.001 3.001 0 1 0-2 0v6.34a3.001 3.001 0 1 0 2 0V8.83ZM7 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9-1.83V8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0ZM16 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1-13a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiFlowParallel;
