import * as React from "react";
const SvgSiSmartPhone = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillOpacity={0.16}
      d="M15.6 2H8.4A2.4 2.4 0 0 0 6 4.4v15.2A2.4 2.4 0 0 0 8.4 22h7.2a2.4 2.4 0 0 0 2.4-2.4V4.4A2.4 2.4 0 0 0 15.6 2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M11 5h2M8.4 2h7.2A2.4 2.4 0 0 1 18 4.4v15.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 19.6V4.4A2.4 2.4 0 0 1 8.4 2"
    />
  </svg>
);
export default SvgSiSmartPhone;
