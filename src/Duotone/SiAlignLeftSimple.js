import * as React from "react";
const SvgSiAlignLeftSimple = ({ title, titleId, ...props }) => (
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
      d="M22 13.4v-2.8A1.6 1.6 0 0 0 20.4 9H7.6A1.6 1.6 0 0 0 6 10.6v2.8A1.6 1.6 0 0 0 7.6 15h12.8a1.6 1.6 0 0 0 1.6-1.6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M2 2v20m20-11.4v2.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 13.4v-2.8A1.6 1.6 0 0 1 7.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6"
    />
  </svg>
);
export default SvgSiAlignLeftSimple;
