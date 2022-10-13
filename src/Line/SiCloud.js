import * as React from "react";
const SvgSiCloud = ({ title, titleId, ...props }) => (
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
      clipRule="evenodd"
      d="M4.178 18.555H18.28a4.7 4.7 0 1 0 0-9.4 5.319 5.319 0 0 0-.783.07A6.267 6.267 0 0 0 5.87 11.042c-.082.41-.124.828-.125 1.246v.446a3.133 3.133 0 1 0-1.567 5.82Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSiCloud;
