import * as React from "react";
const SvgSiRupee = ({ title, titleId, ...props }) => (
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
      d="M7.001 12h3.75c1.172 0 2.272-.4 3.061-1.077a3.43 3.43 0 0 0 1.01-1.423H7a1 1 0 0 1 0-2h7.822a3.431 3.431 0 0 0-1.01-1.423C13.022 5.401 11.923 5 10.751 5H7a1 1 0 1 1 0-2h3.75c.06 0 .12 0 .18.002L11 3h7a1 1 0 1 1 0 2h-2.425a5.236 5.236 0 0 1 1.322 2.5H18a1 1 0 1 1 0 2h-1.103c-.236 1.127-.865 2.154-1.783 2.941C13.934 13.452 12.363 14 10.75 14H9.713l6.138 5.24a1 1 0 0 1-1.299 1.52l-8.197-6.997-.01-.009a.996.996 0 0 1-.207-1.26A1.004 1.004 0 0 1 7.001 12Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiRupee;