import * as React from "react";
const SvgSiCopyrightAlt = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.23 13.697C14.974 15.095 13.767 16 12.142 16c-2.076 0-3.373-1.535-3.373-3.992v-.01C8.77 9.534 10.062 8 12.137 8c1.61 0 2.865 1.011 3.092 2.478M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
    />
  </svg>
);
export default SvgSiCopyrightAlt;
