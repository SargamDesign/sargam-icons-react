import * as React from "react";
const SvgSiCastle = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M18 1a1 1 0 0 1 1 1v7h2v-.953a1 1 0 1 1 2 0V19.6a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 19.6V8a1 1 0 0 1 2 0v1h2V2a1 1 0 0 1 2 0v1h2V2a1 1 0 1 1 2 0v1h2V2a1 1 0 1 1 2 0v1h2V2a1 1 0 0 1 1-1m-6 13a4 4 0 0 0-4 4v3h2v-3a2 2 0 0 1 4 0v3h2v-3a4 4 0 0 0-4-4m-7-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm12 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-6-6a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiCastle;
