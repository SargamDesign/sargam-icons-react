import * as React from "react";
const SvgSiMemory = ({ title, titleId, ...props }) => (
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
      d="M10 2a1 1 0 0 1 1 1v2h2V3a1 1 0 1 1 2 0v2h1.6A2.4 2.4 0 0 1 19 7.4V9h2a1 1 0 1 1 0 2h-2v2h2a1 1 0 1 1 0 2h-2v1.6a2.4 2.4 0 0 1-2.4 2.4H15v2a1 1 0 1 1-2 0v-2h-2v2a1 1 0 1 1-2 0v-2H7.4A2.4 2.4 0 0 1 5 16.6V15H3a1 1 0 1 1 0-2h2v-2H3a1 1 0 1 1 0-2h2V7.4A2.4 2.4 0 0 1 7.4 5H9V3a1 1 0 0 1 1-1Zm3.4 7h-2.8A1.6 1.6 0 0 0 9 10.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 13.4 9Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiMemory;
