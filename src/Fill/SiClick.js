import * as React from "react";
const SvgSiClick = ({ title, titleId, ...props }) => (
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
      d="M10.293 10.293a1 1 0 0 1 1.11-.208l10 4.4a1.001 1.001 0 0 1-.15 1.882l-3.87 1.015-1.016 3.872a1 1 0 0 1-1.882.148l-4.4-10a1 1 0 0 1 .208-1.109m-3.948 5.946a1 1 0 1 1 1.414 1.414l-2.121 2.121a1 1 0 0 1-1.414-1.414zm-1.34-5.244a1 1 0 1 1 0 2h-3a1 1 0 0 1 0-2zm-.781-6.77a1 1 0 0 1 1.414 0l2.121 2.122A1 1 0 0 1 6.345 7.76L4.224 5.64a1 1 0 0 1 0-1.414m14.142-.006a1 1 0 1 1 1.413 1.414l-2.12 2.12a1 1 0 0 1-1.415-1.413zM11 5V2a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0"
    />
  </svg>
);
export default SvgSiClick;
