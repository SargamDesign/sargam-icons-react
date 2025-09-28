import * as React from "react";
const SvgSiMap = ({ title, titleId, ...props }) => (
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
    <path fill="currentColor" fillOpacity={0.16} d="M9 19V3l6 2v16z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9 3v16M9 3 2 5v16l7-2M9 3l6 2M9 19l6 2m0-16v16m0-16 7-2v16l-7 2"
    />
  </svg>
);
export default SvgSiMap;
