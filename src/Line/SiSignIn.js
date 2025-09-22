import * as React from "react";
const SvgSiSignIn = ({ title, titleId, ...props }) => (
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
      d="m14 15 3-3m0 0-3-3m3 3H3m7-4V5.4A2.4 2.4 0 0 1 12.4 3h6.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4h-6.2a2.4 2.4 0 0 1-2.4-2.4V16"
    />
  </svg>
);
export default SvgSiSignIn;
