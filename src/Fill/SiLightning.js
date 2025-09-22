import * as React from "react";
const SvgSiLightning = ({ title, titleId, ...props }) => (
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
      d="M13.133 2.379a1 1 0 0 1 1.77.785L13.848 9.5h3.819a1 1 0 0 1 .784 1.621l-7.917 10a1 1 0 0 1-1.77-.785L9.819 14H6a1 1 0 0 1-.783-1.621z"
    />
  </svg>
);
export default SvgSiLightning;
