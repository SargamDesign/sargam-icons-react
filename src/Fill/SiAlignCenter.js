import * as React from "react";
const SvgSiAlignCenter = ({ title, titleId, ...props }) => (
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
      d="M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3Zm3 4a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H6Zm-4 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm4 3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiAlignCenter;
