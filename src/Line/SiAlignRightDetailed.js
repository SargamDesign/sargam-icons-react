import * as React from "react";
const SvgSiAlignRightDetailed = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M22 2v20m-4-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6h-4.8a1.6 1.6 0 0 1-1.6-1.6v-1.8a1.6 1.6 0 0 1 1.6-1.6h4.8a1.6 1.6 0 0 1 1.6 1.6m0-9v1.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 8.4V6.6A1.6 1.6 0 0 1 3.6 5h12.8A1.6 1.6 0 0 1 18 6.6"
    />
  </svg>
);
export default SvgSiAlignRightDetailed;
