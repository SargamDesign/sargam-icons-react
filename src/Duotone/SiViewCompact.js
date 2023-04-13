import * as React from "react";
const SvgSiViewCompact = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M19.6 5H4.4A2.4 2.4 0 0 0 2 7.4v10.2A2.4 2.4 0 0 0 4.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V7.4A2.4 2.4 0 0 0 19.6 5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7 20V5m5 15V5m5 15V5M2 10h20M2 15h20"
    />
  </svg>
);
export default SvgSiViewCompact;
