import * as React from "react";
const SvgSiMonitorUp = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9 20h6m-5-10 2-2m0 0 2 2m-2-2v5M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v8.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 14.6V6.4A2.4 2.4 0 0 1 4.4 4"
    />
  </svg>
);
export default SvgSiMonitorUp;
