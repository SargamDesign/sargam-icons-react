import * as React from "react";
const SvgSiMovie = ({ title, titleId, ...props }) => (
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
      d="M20.6 3H3.4A2.4 2.4 0 0 0 1 5.4v13.2A2.4 2.4 0 0 0 3.4 21h17.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 20.6 3Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M20.6 3H3.4A2.4 2.4 0 0 0 1 5.4V9h22V5.4A2.4 2.4 0 0 0 20.6 3Z"
      fill="#fff"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="m15 9 2-6M7 9l2-6M1 9h22"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiMovie;
