import * as React from "react";
const SvgSiDownRight = ({ title, titleId, ...props }) => (
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
      d="M6 5a1 1 0 0 0-2 0v5.6A5.4 5.4 0 0 0 9.4 16h7.186l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L16.586 14H9.4A3.4 3.4 0 0 1 6 10.6V5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiDownRight;
