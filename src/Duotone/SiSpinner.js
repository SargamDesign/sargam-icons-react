import * as React from "react";
const SvgSiSpinner = ({ title, titleId, ...props }) => (
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
      d="M12 2v4m0 12v4m-9.995-9.995h4m12 0h4M4.931 4.932l2.828 2.829m8.485 8.485 2.829 2.829m-14.136 0 2.829-2.829m8.485-8.485 2.829-2.829"
    />
  </svg>
);
export default SvgSiSpinner;
