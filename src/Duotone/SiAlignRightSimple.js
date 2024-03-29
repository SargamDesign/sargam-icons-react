import * as React from "react";
const SvgSiAlignRightSimple = ({ title, titleId, ...props }) => (
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
      d="M2 10.6v2.8A1.6 1.6 0 0 0 3.6 15h12.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 16.4 9H3.6A1.6 1.6 0 0 0 2 10.6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M22 22V2M2 13.4v-2.8A1.6 1.6 0 0 1 3.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 13.4"
    />
  </svg>
);
export default SvgSiAlignRightSimple;
