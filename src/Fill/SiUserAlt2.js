import * as React from "react";
const SvgSiUserAlt2 = ({ title, titleId, ...props }) => (
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
      d="M7.25 6a4.75 4.75 0 0 1 9.5 0v1a4.75 4.75 0 1 1-9.5 0zm3.85 7C6.086 13 2 17.018 2 22a1 1 0 1 0 2 0c0-3.854 3.167-7 7.1-7h1.8c3.933 0 7.1 3.146 7.1 7a1 1 0 1 0 2 0c0-4.982-4.086-9-9.1-9z"
    />
  </svg>
);
export default SvgSiUserAlt2;
