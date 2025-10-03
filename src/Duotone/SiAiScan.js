import * as React from "react";
const SvgSiAiScan = ({ title, titleId, ...props }) => (
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
      d="M7 21H5.4A2.4 2.4 0 0 1 3 18.6V17m14 4h1.6a2.4 2.4 0 0 0 2.4-2.4V17m0-10V5.4A2.4 2.4 0 0 0 18.6 3H17M7 3H5.4A2.4 2.4 0 0 0 3 5.4V7m5.806-.224-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0M15 13l-.4 1.6-1.6.4 1.6.4.4 1.6.4-1.6L17 15l-1.6-.4z"
    />
  </svg>
);
export default SvgSiAiScan;
