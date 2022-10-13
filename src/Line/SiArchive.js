import * as React from "react";
const SvgSiArchive = ({ title, titleId, ...props }) => (
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
      d="m21 7-1 11.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3 7"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M21.4 3H2.6A1.6 1.6 0 0 0 1 4.6v.8A1.6 1.6 0 0 0 2.6 7h18.8A1.6 1.6 0 0 0 23 5.4v-.8A1.6 1.6 0 0 0 21.4 3Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M16 7v2.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V7"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiArchive;
