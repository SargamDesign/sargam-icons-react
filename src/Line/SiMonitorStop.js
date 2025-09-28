import * as React from "react";
const SvgSiMonitorStop = ({ title, titleId, ...props }) => (
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
      d="M9 20h6M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v8.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 14.6V6.4A2.4 2.4 0 0 1 4.4 4m5.9 4h3.4a.8.8 0 0 1 .8.8v3.4a.8.8 0 0 1-.8.8h-3.4a.8.8 0 0 1-.8-.8V8.8a.8.8 0 0 1 .8-.8"
    />
  </svg>
);
export default SvgSiMonitorStop;
