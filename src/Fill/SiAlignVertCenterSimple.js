import * as React from "react";
const SvgSiAlignVertCenterSimple = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M10.6 3A2.6 2.6 0 0 0 8 5.6V11H2a1 1 0 1 0 0 2h6v5.4a2.6 2.6 0 0 0 2.6 2.6h2.8a2.6 2.6 0 0 0 2.6-2.6V13h6a1 1 0 1 0 0-2h-6V5.6A2.6 2.6 0 0 0 13.4 3z"
    />
  </svg>
);
export default SvgSiAlignVertCenterSimple;
