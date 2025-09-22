import * as React from "react";
const SvgSiNorthEast = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M10 8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-2.586l-6.293 6.293a1 1 0 0 1-1.414-1.414L13.586 9H11a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiNorthEast;
