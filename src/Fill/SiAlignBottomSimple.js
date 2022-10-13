import * as React from "react";
const SvgSiAlignBottomSimple = ({ title, titleId, ...props }) => (
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
      d="M8 3.6A2.6 2.6 0 0 1 10.6 1h2.8A2.6 2.6 0 0 1 16 3.6v12.8a2.6 2.6 0 0 1-2.6 2.6h-2.8A2.6 2.6 0 0 1 8 16.4V3.6ZM2 21a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiAlignBottomSimple;
