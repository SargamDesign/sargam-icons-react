import * as React from "react";
const SvgSiClipboard = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 3V1.8A1.8 1.8 0 0 1 8.8 0h6.4A1.8 1.8 0 0 1 17 1.8V3h1.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H7Zm2-1h6v2H9V2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiClipboard;
