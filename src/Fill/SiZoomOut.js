import * as React from "react";
const SvgSiZoomOut = ({ title, titleId, ...props }) => (
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
      d="M11 19a7.965 7.965 0 0 0 4.906-1.68l4.387 4.387a1 1 0 0 0 1.414-1.414l-4.387-4.387A8 8 0 1 0 11 19Zm-3-9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiZoomOut;
