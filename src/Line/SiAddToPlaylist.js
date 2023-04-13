import * as React from "react";
const SvgSiAddToPlaylist = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M4 11h12m-1 4 2 2 4-4M4 7h12M4 15h8"
    />
  </svg>
);
export default SvgSiAddToPlaylist;
