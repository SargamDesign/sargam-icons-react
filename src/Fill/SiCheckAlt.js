import * as React from "react";
const SvgSiCheckAlt = ({ title, titleId, ...props }) => (
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
      d="M19.47 4.118a1 1 0 0 1 .412 1.353l-8 15a1 1 0 0 1-1.59.236l-6-6a1 1 0 1 1 1.415-1.414l5.046 5.046 7.365-13.81a1 1 0 0 1 1.353-.411Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiCheckAlt;
