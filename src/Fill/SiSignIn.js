import * as React from "react";
const SvgSiSignIn = ({ title, titleId, ...props }) => (
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
      d="M11 5.4A1.4 1.4 0 0 1 12.4 4h6.2A1.4 1.4 0 0 1 20 5.4v13.2a1.4 1.4 0 0 1-1.4 1.4h-6.2a1.4 1.4 0 0 1-1.4-1.4V16a1 1 0 1 0-2 0v2.6a3.4 3.4 0 0 0 3.4 3.4h6.2a3.4 3.4 0 0 0 3.4-3.4V5.4A3.4 3.4 0 0 0 18.6 2h-6.2A3.4 3.4 0 0 0 9 5.4V8a1 1 0 1 0 2 0V5.4Z"
      fill="currentColor"
    />
    <path
      d="M13.293 8.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L14.586 13H3a1 1 0 1 1 0-2h11.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiSignIn;
