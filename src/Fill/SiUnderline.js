import * as React from "react";
const SvgSiUnderline = ({ title, titleId, ...props }) => (
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
      d="M20 20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM5 12V4H4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2H7v8c0 2.748 2.252 5 5 5s5-2.252 5-5V4h-1a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-1v8c0 3.852-3.148 7-7 7s-7-3.148-7-7"
    />
  </svg>
);
export default SvgSiUnderline;
