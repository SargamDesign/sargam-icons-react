import * as React from "react";
const SvgSiCity = ({ title, titleId, ...props }) => (
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
      d="M9 1a1 1 0 0 1 1 1v8h5V6a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1v14.6a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 19.6V3a1 1 0 0 1 0-2zM5 17a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm7 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm7 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM5 14a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm7 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm7 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM5 11a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm14 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM5 8a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2zm14 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM5 5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiCity;
