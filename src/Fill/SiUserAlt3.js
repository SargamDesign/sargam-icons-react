import * as React from "react";
const SvgSiUserAlt3 = ({ title, titleId, ...props }) => (
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
      d="M7.25 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0ZM5 16.4A1.4 1.4 0 0 1 6.4 15h11.2a1.4 1.4 0 0 1 1.4 1.4V21a1 1 0 1 0 2 0v-4.6a3.4 3.4 0 0 0-3.4-3.4H6.4A3.4 3.4 0 0 0 3 16.4V21a1 1 0 1 0 2 0v-4.6Z"
    />
  </svg>
);
export default SvgSiUserAlt3;
