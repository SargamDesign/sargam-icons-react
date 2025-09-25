import * as React from "react";
const SvgSiDirection = ({ title, titleId, ...props }) => (
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
      d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.437 1.225L12 18.065l-6.495 3.798a1 1 0 0 1-1.437-1.225l7-18 .066-.138A1 1 0 0 1 12 2"
    />
  </svg>
);
export default SvgSiDirection;
