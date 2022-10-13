import * as React from "react";
const SvgSiArrowLeft = ({ title, titleId, ...props }) => (
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
      d="M10.707 8.707a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L8.414 13H18a1 1 0 1 0 0-2H8.414l2.293-2.293Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiArrowLeft;
