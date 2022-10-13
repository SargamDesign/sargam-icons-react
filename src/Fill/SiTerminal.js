import * as React from "react";
const SvgSiTerminal = ({ title, titleId, ...props }) => (
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
      d="M4.707 5.293a1 1 0 0 0-1.414 1.414L8.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414l-6-6ZM12 17a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiTerminal;
