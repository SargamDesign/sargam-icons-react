import * as React from "react";
const SvgSiExpandLessAlt = ({ title, titleId, ...props }) => (
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
      d="M11.293 7.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1-1.414 1.414L12 9.414l-7.293 7.293a1 1 0 0 1-1.414-1.414l8-8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiExpandLessAlt;
