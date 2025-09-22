import * as React from "react";
const SvgSiBriefcase = ({ title, titleId, ...props }) => (
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
      d="M15 21V4.8a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V21M4.4 7h15.2A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7"
    />
  </svg>
);
export default SvgSiBriefcase;
