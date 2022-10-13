import * as React from "react";
const SvgSiFileUpload = ({ title, titleId, ...props }) => (
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
      d="M11.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 6.414V16a1 1 0 1 1-2 0V6.414L8.707 8.707a1 1 0 0 1-1.414-1.414l4-4Z"
      fill="currentColor"
    />
    <path
      d="M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4V17Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiFileUpload;
