import * as React from "react";
const SvgSiCode = ({ title, titleId, ...props }) => (
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
      fill="currentColor"
      d="M8.707 6.707a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L3.414 12zm8-1.414a1 1 0 1 0-1.414 1.414L20.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414z"
    />
  </svg>
);
export default SvgSiCode;
