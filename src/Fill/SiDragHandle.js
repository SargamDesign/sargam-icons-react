import * as React from "react";
const SvgSiDragHandle = ({ title, titleId, ...props }) => (
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
      d="M4 9a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4Zm0 4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2H4Z"
    />
  </svg>
);
export default SvgSiDragHandle;
