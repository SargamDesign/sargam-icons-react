import * as React from "react";
const SvgSiCancelPhoto = ({ title, titleId, ...props }) => (
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
      d="M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M20 22H8.4C5.42 22 3 19.58 3 16.6V5m13.828 8.829-5.656-5.657m5.656 0-5.656 5.656"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiCancelPhoto;
