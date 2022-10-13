import * as React from "react";
const SvgSiAlignVertCenterDetailed = ({ title, titleId, ...props }) => (
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
      d="M17.4 8h-1.8A1.6 1.6 0 0 0 14 9.6v4.8a1.6 1.6 0 0 0 1.6 1.6h1.8a1.6 1.6 0 0 0 1.6-1.6V9.6A1.6 1.6 0 0 0 17.4 8Zm-9-4H6.6A1.6 1.6 0 0 0 5 5.6v12.8A1.6 1.6 0 0 0 6.6 20h1.8a1.6 1.6 0 0 0 1.6-1.6V5.6A1.6 1.6 0 0 0 8.4 4Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M2 12h3m14 0h3m-12 0h4"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiAlignVertCenterDetailed;
