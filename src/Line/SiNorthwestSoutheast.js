import * as React from "react";
const SvgSiNorthwestSoutheast = ({ title, titleId, ...props }) => (
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
      strokeWidth={1.5}
      d="m6 6 12 12M6 6v4m0-4h4m8 12v-4m0 4h-4"
    />
  </svg>
);
export default SvgSiNorthwestSoutheast;
