import * as React from "react";
const SvgSiChat = ({ title, titleId, ...props }) => (
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
      d="M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65c-.4.5-1.162.5-1.563 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.663 0-3-1.338-3-3V6c0-1.662 1.337-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3Z"
    />
  </svg>
);
export default SvgSiChat;
