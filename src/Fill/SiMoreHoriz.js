import * as React from "react";
const SvgSiMoreHoriz = ({ title, titleId, ...props }) => (
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
      d="M3 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm9 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiMoreHoriz;
