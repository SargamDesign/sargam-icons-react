import * as React from "react";
const SvgSiAlignRight = ({ title, titleId, ...props }) => (
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
      d="M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm6 4a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-7 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m7 3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"
    />
  </svg>
);
export default SvgSiAlignRight;
