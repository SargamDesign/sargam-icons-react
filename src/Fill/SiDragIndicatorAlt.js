import * as React from "react";
const SvgSiDragIndicatorAlt = ({ title, titleId, ...props }) => (
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
      d="M14 6a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM9 9a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m7 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm-7 1a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M9 5a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2z"
    />
  </svg>
);
export default SvgSiDragIndicatorAlt;
