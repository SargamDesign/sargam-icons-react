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
      d="M18.364 18.364 5.636 5.636m12.728 12.728h-5.657m5.657 0v-5.657M5.636 5.636v5.657m0-5.657h5.657"
    />
  </svg>
);
export default SvgSiNorthwestSoutheast;
