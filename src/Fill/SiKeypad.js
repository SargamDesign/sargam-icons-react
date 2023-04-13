import * as React from "react";
const SvgSiKeypad = ({ title, titleId, ...props }) => (
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
      d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm9-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm12 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-9 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm16-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
export default SvgSiKeypad;
