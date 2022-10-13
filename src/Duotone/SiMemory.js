import * as React from "react";
const SvgSiMemory = ({ title, titleId, ...props }) => (
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
      d="M16.6 5H7.4A2.4 2.4 0 0 0 5 7.4v9.2A2.4 2.4 0 0 0 7.4 19h9.2a2.4 2.4 0 0 0 2.4-2.4V7.4A2.4 2.4 0 0 0 16.6 5Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M13.4 9h-2.8A1.6 1.6 0 0 0 9 10.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 13.4 9Z"
      fill="#fff"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M14 5V3m-4 2V3m4 18v-2m-4 2v-2m11-5h-2m2-4h-2M5 14H3m2-4H3"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiMemory;
