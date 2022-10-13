import * as React from "react";
const SvgSiSortAlt = ({ title, titleId, ...props }) => (
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
      d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4Zm0 4a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H4Zm-1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiSortAlt;
