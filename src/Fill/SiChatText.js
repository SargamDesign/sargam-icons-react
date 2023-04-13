import * as React from "react";
const SvgSiChatText = ({ title, titleId, ...props }) => (
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
      d="M16.475 16H19c1.663 0 3-1.338 3-3V6c0-1.662-1.337-3-3-3H5C3.337 3 2 4.338 2 6v7c0 1.662 1.337 3 3 3h2.513c.3 0 .587.137.774.375l2.925 3.65c.4.5 1.163.5 1.563 0l2.925-3.65a.99.99 0 0 1 .775-.375ZM7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiChatText;
