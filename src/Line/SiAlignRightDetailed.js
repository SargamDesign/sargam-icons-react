import * as React from "react";
const SvgSiAlignRightDetailed = ({ title, titleId, ...props }) => (
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
      d="M18 17.4v-1.8a1.6 1.6 0 0 0-1.6-1.6h-4.8a1.6 1.6 0 0 0-1.6 1.6v1.8a1.6 1.6 0 0 0 1.6 1.6h4.8a1.6 1.6 0 0 0 1.6-1.6Zm0-9V6.6A1.6 1.6 0 0 0 16.4 5H3.6A1.6 1.6 0 0 0 2 6.6v1.8A1.6 1.6 0 0 0 3.6 10h12.8A1.6 1.6 0 0 0 18 8.4Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M22 2v20"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiAlignRightDetailed;
