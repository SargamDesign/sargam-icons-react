import * as React from "react";
const SvgSiTerminalAlt = ({ title, titleId, ...props }) => (
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
      d="M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="m5 16 4-4-4-4"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 16h8"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiTerminalAlt;
