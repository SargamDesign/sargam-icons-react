import * as React from "react";
const SvgSiUserAlt5 = ({ title, titleId, ...props }) => (
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
      d="M5.37 13.88c-1.75.63-2.87 1.37-3.25 2.25-.12.24-.12.37-.12.62v3.65c0 .88.72 1.6 1.6 1.6h16.8-.02c.88 0 1.6-.72 1.6-1.6v-3.65c0-.24 0-.5-.12-.62-.37-.87-1.5-1.63-3.25-2.25M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSiUserAlt5;
