import * as React from "react";
const SvgSiKeypad = ({ title, titleId, ...props }) => (
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
      d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm9-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm12 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-9 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm16-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiKeypad;
