import * as React from "react";
const SvgSiAlignBottomSimple = ({ title, titleId, ...props }) => (
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
      d="M8 3.6A2.6 2.6 0 0 1 10.6 1h2.8A2.6 2.6 0 0 1 16 3.6v12.8a2.6 2.6 0 0 1-2.6 2.6h-2.8A2.6 2.6 0 0 1 8 16.4zM2 21a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2z"
    />
  </svg>
);
export default SvgSiAlignBottomSimple;
