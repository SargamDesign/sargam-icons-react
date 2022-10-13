import * as React from "react";
const SvgSiLeftDown = ({ title, titleId, ...props }) => (
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
      d="M10 9.4A3.4 3.4 0 0 1 13.4 6H19a1 1 0 1 0 0-2h-5.6A5.4 5.4 0 0 0 8 9.4v7.186l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L10 16.586V9.4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiLeftDown;
