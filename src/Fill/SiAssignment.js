import * as React from "react";
const SvgSiAssignment = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="currentColor" d="M11 3a1 1 0 1 1 2 0h2a3 3 0 1 0-6 0h2Z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8v1.2a.8.8 0 0 0 .8.8h6.4a.8.8 0 0 0 .8-.8V3Zm-9 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Zm0 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7Zm0 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiAssignment;
