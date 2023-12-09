import * as React from "react";
const SvgSiProjectsAlt = ({ title, titleId, ...props }) => (
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
      d="M5.4 2h13.2A3.4 3.4 0 0 1 22 5.4v13.2a3.4 3.4 0 0 1-3.4 3.4H5.4A3.4 3.4 0 0 1 2 18.6V5.4A3.4 3.4 0 0 1 5.4 2M7 5a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m6 1a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiProjectsAlt;
