import * as React from "react";
const SvgSiBarcodeScan = ({ title, titleId, ...props }) => (
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
      d="M4 5.4A1.4 1.4 0 0 1 5.4 4H7a1 1 0 0 0 0-2H5.4A3.4 3.4 0 0 0 2 5.4V7a1 1 0 0 0 2 0V5.4ZM17 2a1 1 0 1 0 0 2h1.6A1.4 1.4 0 0 1 20 5.4V7a1 1 0 1 0 2 0V5.4A3.4 3.4 0 0 0 18.6 2H17ZM4 17a1 1 0 1 0-2 0v1.6A3.4 3.4 0 0 0 5.4 22H7a1 1 0 1 0 0-2H5.4A1.4 1.4 0 0 1 4 18.6V17Zm18 0a1 1 0 1 0-2 0v1.6a1.4 1.4 0 0 1-1.4 1.4H17a1 1 0 1 0 0 2h1.6a3.4 3.4 0 0 0 3.4-3.4V17ZM1 11a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2H1Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiBarcodeScan;
