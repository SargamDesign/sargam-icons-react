import * as React from "react";
const SvgSiMoreMutedHoriz = ({ title, titleId, ...props }) => (
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
      d="M6 11a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm6 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm7 1a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiMoreMutedHoriz;
