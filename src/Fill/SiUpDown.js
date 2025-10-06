import * as React from "react";
const SvgSiUpDown = ({ title, titleId, ...props }) => (
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
      d="M11.37 2.225a1 1 0 0 1 1.337.068l4 4a1 1 0 1 1-1.414 1.414L13 5.414v13.172l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 18.586V5.414L8.707 7.707a1 1 0 1 1-1.414-1.414l4-4z"
    />
  </svg>
);
export default SvgSiUpDown;
