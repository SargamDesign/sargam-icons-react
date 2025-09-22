import * as React from "react";
const SvgSiSouthWestEscapeAlt = ({ title, titleId, ...props }) => (
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
      d="m14 10-8 8m0 0v-4m0 4h4m5-3h.6c1.33 0 2.4-1.07 2.4-2.4V8.4C18 7.07 16.93 6 15.6 6h-4.2C10.07 6 9 7.07 9 8.4V9"
    />
  </svg>
);
export default SvgSiSouthWestEscapeAlt;
