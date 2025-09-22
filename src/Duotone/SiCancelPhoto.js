import * as React from "react";
const SvgSiCancelPhoto = ({ title, titleId, ...props }) => (
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
      fillOpacity={0.16}
      d="M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M20 22H8.4C5.42 22 3 19.58 3 16.6V5m13.828 8.828-5.656-5.656m5.656 0-5.656 5.656M8.4 3h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"
    />
  </svg>
);
export default SvgSiCancelPhoto;
