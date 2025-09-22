import * as React from "react";
const SvgSiSouthEastEscapeAlt = ({ title, titleId, ...props }) => (
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
      d="m10 10 8 8m0 0v-4m0 4h-4m-5-3h-.6C7.07 15 6 13.93 6 12.6V8.4C6 7.07 7.07 6 8.4 6h4.2C13.93 6 15 7.07 15 8.4V9"
    />
  </svg>
);
export default SvgSiSouthEastEscapeAlt;
