import * as React from "react";
const SvgSiUserAlt4 = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4 7a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9"
    />
  </svg>
);
export default SvgSiUserAlt4;
