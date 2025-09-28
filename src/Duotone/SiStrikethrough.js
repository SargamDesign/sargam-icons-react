import * as React from "react";
const SvgSiStrikethrough = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.619 4.33A8.6 8.6 0 0 0 12.333 3c-2.38 0-4.571 1.947-4.571 3.894 0 2.043 1.524 3.658 4.571 4.94C15.857 13.306 17 14.588 17 16.774 17 19.527 14.143 21 11.667 21 10 21 8.38 20.525 7 19.575M4 12h16"
    />
  </svg>
);
export default SvgSiStrikethrough;
