import * as React from "react";
const SvgSiAssignment = ({ title, titleId, ...props }) => (
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
    <path d="M11 3a1 1 0 1 1 2 0h2a3 3 0 1 0-6 0h2Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8v1.2a.8.8 0 0 0 .8.8h6.4a.8.8 0 0 0 .8-.8V3Zm-9 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Zm0 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Zm0 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H7Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiAssignment;
