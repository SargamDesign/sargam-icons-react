import * as React from "react";
const SvgSiDragIndicatorAlt = ({ title, titleId, ...props }) => (
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
      d="M14 6a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Zm0 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1ZM9 9a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2H9Zm-1 5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm7 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Zm-7 1a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 5a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2H9Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiDragIndicatorAlt;
