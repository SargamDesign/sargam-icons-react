import * as React from "react";
const SvgSiEditDetailedAlt = ({ title, titleId, ...props }) => (
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
      d="M16.773 5.46a1.25 1.25 0 1 1 1.768 1.767L8.095 17.673l-2.21.442.442-2.21L16.773 5.46Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M19.071 7.757 8.464 18.364l-3.535.707.707-3.536L16.243 4.93"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.243 4.929a2 2 0 0 1 2.828 2.828"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m14.828 6.343 2.829 2.829"
    />
  </svg>
);
export default SvgSiEditDetailedAlt;
