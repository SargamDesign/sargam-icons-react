import * as React from "react";
const SvgSiCheck = ({ title, titleId, ...props }) => (
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
      d="M19.633 6.226a1 1 0 0 1 .141 1.407l-9 11a1 1 0 0 1-1.481.074l-5-5a1 1 0 1 1 1.414-1.414l4.219 4.219 8.3-10.145a1 1 0 0 1 1.407-.14Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiCheck;
