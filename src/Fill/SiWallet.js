import * as React from "react";
const SvgSiWallet = ({ title, titleId, ...props }) => (
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
      d="M19 12a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H20a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V16h.4a2.6 2.6 0 0 0 2.6-2.6v-2.8A2.6 2.6 0 0 0 21.4 8H21V6.4A2.4 2.4 0 0 0 18.6 4Zm-2 6a.6.6 0 0 0-.6.6v2.8a.6.6 0 0 0 .6.6h4.8a.6.6 0 0 0 .6-.6v-2.8a.6.6 0 0 0-.6-.6h-4.8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiWallet;
