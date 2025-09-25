import * as React from "react";
const SvgSiFlagAlt3 = ({ title, titleId, ...props }) => (
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
      d="M18.934 2.002a1 1 0 0 1 .773 1.705L9.162 14.251l2.774 7.397a1 1 0 0 1-1.873.704l-2.992-7.98-4-10a1 1 0 0 1 .863-1.37z"
    />
  </svg>
);
export default SvgSiFlagAlt3;
