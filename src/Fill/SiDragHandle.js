import * as React from "react";
const SvgSiDragHandle = ({ title, titleId, ...props }) => (
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
      d="M4 9a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4Zm0 4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiDragHandle;
