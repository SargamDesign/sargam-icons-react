import * as React from "react";
const SvgSiSwapVert = ({ title, titleId, ...props }) => (
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
      d="M7 2a1 1 0 0 1 1 1v15.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L6 18.586V3a1 1 0 0 1 1-1m9.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L18 5.414V21a1 1 0 1 1-2 0V5.414l-2.293 2.293a1 1 0 1 1-1.414-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiSwapVert;
