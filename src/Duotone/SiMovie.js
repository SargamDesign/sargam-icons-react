import * as React from "react";
const SvgSiMovie = ({ title, titleId, ...props }) => (
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
      fillOpacity={0.16}
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M20.6 3H3.4A2.4 2.4 0 0 0 1 5.4v13.2A2.4 2.4 0 0 0 3.4 21h17.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 20.6 3Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M20.6 3H3.4A2.4 2.4 0 0 0 1 5.4V9h22V5.4A2.4 2.4 0 0 0 20.6 3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m15 9 2-6M7 9l2-6M1 9h22"
    />
  </svg>
);
export default SvgSiMovie;
