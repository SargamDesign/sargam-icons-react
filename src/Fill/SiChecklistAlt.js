import * as React from "react";
const SvgSiChecklistAlt = ({ title, titleId, ...props }) => (
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
      d="M22.707 6.707a1 1 0 0 0-1.414-1.414L18 8.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4ZM2 7a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2H2Zm20.707 6.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L18 16.586l3.293-3.293a1 1 0 0 1 1.414 0ZM2 15a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiChecklistAlt;
