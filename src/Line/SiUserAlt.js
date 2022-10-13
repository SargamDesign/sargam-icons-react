import * as React from "react";
const SvgSiUserAlt = ({ title, titleId, ...props }) => (
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
      d="M20.4 22H3.6c-.88 0-1.6-.72-1.6-1.6v-4.65c0-.25 0-.38.12-.62.38-.88 1.5-1.62 3.25-2.25 1.25 2.38 3.75 4 6.62 4s5.38-1.62 6.62-4c1.75.62 2.88 1.38 3.25 2.25.12.12.12.38.12.62v4.65c0 .88-.72 1.6-1.6 1.6h.02Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSiUserAlt;
