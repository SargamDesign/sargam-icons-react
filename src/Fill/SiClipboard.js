import * as React from "react";
const SvgSiClipboard = ({ title, titleId, ...props }) => (
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
      d="M7 3V1.8A1.8 1.8 0 0 1 8.8 0h6.4A1.8 1.8 0 0 1 17 1.8V3h1.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3zm2-1h6v2H9z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiClipboard;
