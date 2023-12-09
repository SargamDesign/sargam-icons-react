import * as React from "react";
const SvgSiFactCheck = ({ title, titleId, ...props }) => (
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
      fill="currentColor"
      fillRule="evenodd"
      d="M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M4 9a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 2a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm10.707.707 4-4a1 1 0 0 0-1.414-1.414L15 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiFactCheck;
