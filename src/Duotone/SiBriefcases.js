import * as React from "react";
const SvgSiBriefcases = ({ title, titleId, ...props }) => (
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
      d="M20.6 6H7.4A2.4 2.4 0 0 0 5 8.4v8.2A2.4 2.4 0 0 0 7.4 19h13.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 20.6 6Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M19 22H7.4C4.42 22 2 19.58 2 16.6V11"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M17 19V3.8a.8.8 0 0 0-.8-.8h-4.4a.8.8 0 0 0-.8.8V19"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiBriefcases;
