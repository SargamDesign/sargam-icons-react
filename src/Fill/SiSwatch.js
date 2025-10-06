import * as React from "react";
const SvgSiSwatch = ({ title, titleId, ...props }) => (
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
      d="M6 2a4 4 0 0 1 4 4v2.313l1.9-1.899a4 4 0 0 1 5.657 5.657L15.627 14H18a4 4 0 0 1 .206 7.995L18 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m3.628 18H18a2 2 0 0 0 .204-3.99L18 16h-4.372zm-3.636-3a1 1 0 1 0 0 2h.009a1 1 0 0 0 0-2zm10.15-9.172a2 2 0 0 0-2.828 0L10 11.142v5.657l2.5-2.501.01-.01 3.633-3.63a2 2 0 0 0 0-2.83"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiSwatch;
