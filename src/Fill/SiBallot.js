import * as React from "react";
const SvgSiBallot = ({ title, titleId, ...props }) => (
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
      d="M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3ZM8 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm5 1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Zm0 6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Zm-7 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiBallot;
