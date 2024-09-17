import * as React from "react";
const SvgSiMicDetailed = ({ title, titleId, ...props }) => (
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
      d="M5 7a7 7 0 0 1 14 0v6a7 7 0 0 1-6 6.93V22h5a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h5v-2.07A7 7 0 0 1 5 13zm7-4a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm-1 4a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m-3 3a1 1 0 0 1 1-1h.1a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1m3 0a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4-1a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm0-3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zM9 6a1 1 0 0 0 0 2h.1a1 1 0 0 0 0-2zm3 6a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm2-2a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1m-6 0a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiMicDetailed;
