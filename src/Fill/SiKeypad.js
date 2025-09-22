import * as React from "react";
const SvgSiKeypad = ({ title, titleId, ...props }) => (
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
      d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m9-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m12 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-9 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m16-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgSiKeypad;
