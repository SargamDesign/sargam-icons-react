import * as React from "react";
const SvgSiAlignLeftSimple = ({ title, titleId, ...props }) => (
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
      d="M22 13.4v-2.8A1.6 1.6 0 0 0 20.4 9H7.6A1.6 1.6 0 0 0 6 10.6v2.8A1.6 1.6 0 0 0 7.6 15h12.8a1.6 1.6 0 0 0 1.6-1.6Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M2 2v20"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiAlignLeftSimple;
