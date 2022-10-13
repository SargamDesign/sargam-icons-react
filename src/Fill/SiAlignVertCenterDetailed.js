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
      d="M4 5.6A2.6 2.6 0 0 1 6.6 3h1.8A2.6 2.6 0 0 1 11 5.6V11h2V9.6A2.6 2.6 0 0 1 15.6 7h1.8A2.6 2.6 0 0 1 20 9.6V11h2a1 1 0 1 1 0 2h-2v1.4a2.6 2.6 0 0 1-2.6 2.6h-1.8a2.6 2.6 0 0 1-2.6-2.6V13h-2v5.4A2.6 2.6 0 0 1 8.4 21H6.6A2.6 2.6 0 0 1 4 18.4V13H2a1 1 0 1 1 0-2h2V5.6Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiAlignVertCenterDetailed;
