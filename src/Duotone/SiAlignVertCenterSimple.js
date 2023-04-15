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
      fillOpacity={0.16}
      d="M13.4 4h-2.8A1.6 1.6 0 0 0 9 5.6v12.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6V5.6A1.6 1.6 0 0 0 13.4 4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M2 12h7m6 0h7M10.6 4h2.8A1.6 1.6 0 0 1 15 5.6v12.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 18.4V5.6A1.6 1.6 0 0 1 10.6 4Z"
    />
  </svg>
);
export default SvgSiAlignVertCenterSimple;
