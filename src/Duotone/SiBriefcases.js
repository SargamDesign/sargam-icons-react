import * as React from "react";
const SvgSiBriefcases = ({ title, titleId, ...props }) => (
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
      d="M20.6 6H7.4A2.4 2.4 0 0 0 5 8.4v8.2A2.4 2.4 0 0 0 7.4 19h13.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 20.6 6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M19 22H7.4C4.42 22 2 19.58 2 16.6V11"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17 19V3.8a.8.8 0 0 0-.8-.8h-4.4a.8.8 0 0 0-.8.8V19"
    />
  </svg>
);
export default SvgSiBriefcases;
