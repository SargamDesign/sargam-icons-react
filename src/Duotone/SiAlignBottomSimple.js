import * as React from "react";
const SvgSiAlignBottomSimple = ({ title, titleId, ...props }) => (
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
      fillOpacity={0.16}
      d="M13.4 2h-2.8A1.6 1.6 0 0 0 9 3.6v12.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 13.4 2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M2 22h20M10.6 2h2.8A1.6 1.6 0 0 1 15 3.6v12.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 16.4V3.6A1.6 1.6 0 0 1 10.6 2"
    />
  </svg>
);
export default SvgSiAlignBottomSimple;
