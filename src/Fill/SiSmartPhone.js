import * as React from "react";
const SvgSiSmartPhone = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.6 1A3.4 3.4 0 0 1 19 4.4v15.2a3.4 3.4 0 0 1-3.4 3.4H8.4a3.4 3.4 0 0 1-3.395-3.225L5 19.6V4.4A3.4 3.4 0 0 1 8.4 1zM11 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiSmartPhone;
