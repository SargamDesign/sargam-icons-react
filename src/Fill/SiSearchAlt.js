import * as React from "react";
const SvgSiSearchAlt = ({ title, titleId, ...props }) => (
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
      d="M9 2a7 7 0 1 0 4.192 12.606l7.1 7.101a1 1 0 0 0 1.415-1.414l-7.1-7.1A7 7 0 0 0 9 2ZM4 9a5 5 0 1 1 10 0A5 5 0 0 1 4 9Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiSearchAlt;
