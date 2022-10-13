import * as React from "react";
const SvgSiMoreMutedVertCircle = ({ title, titleId, ...props }) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM10.95 8.05a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiMoreMutedVertCircle;
