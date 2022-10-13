import * as React from "react";
const SvgSiToggleOn = ({ title, titleId, ...props }) => (
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
      d="M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6Zm13 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiToggleOn;
