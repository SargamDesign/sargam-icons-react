import * as React from "react";
const SvgSiRemoveFromLibrary = ({ title, titleId, ...props }) => (
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
      d="M19.6 2H8.4A2.4 2.4 0 0 0 6 4.4v11.2A2.4 2.4 0 0 0 8.4 18h11.2a2.4 2.4 0 0 0 2.4-2.4V4.4A2.4 2.4 0 0 0 19.6 2ZM10 9a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2h-8Z"
      fill="currentColor"
    />
    <path
      d="M3 3a1 1 0 0 1 1 1v11.6C4 18.028 5.972 20 8.4 20H20a1 1 0 1 1 0 2H8.4A6.403 6.403 0 0 1 2 15.6V4a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiRemoveFromLibrary;
