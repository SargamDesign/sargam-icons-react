import * as React from "react";
const SvgSiToggleOff = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6Zm3 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17 6H7a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </svg>
);
export default SvgSiToggleOff;
