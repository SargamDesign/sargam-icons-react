import * as React from "react";
const SvgSiWarning = ({ title, titleId, ...props }) => (
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
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10M12 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiWarning;
