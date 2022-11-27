import * as React from "react";
const SvgSiEditDetailedAlt = ({ title, titleId, ...props }) => (
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
      d="M19.071 7.757 8.464 18.364l-3.535.707.707-3.536L16.243 4.93"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <path
      d="m14.828 6.343 2.829 2.829"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M16.243 4.929a2 2 0 1 1 2.828 2.828"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </svg>
);
export default SvgSiEditDetailedAlt;
