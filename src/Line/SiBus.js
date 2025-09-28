import * as React from "react";
const SvgSiBus = ({ title, titleId, ...props }) => (
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
      d="M4 12h16M8 15.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m9 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6.4 2h11.2A2.4 2.4 0 0 1 20 4.4v16a1.6 1.6 0 0 1-1.6 1.6h-.8a1.6 1.6 0 0 1-1.6-1.6V19H8v1.4A1.6 1.6 0 0 1 6.4 22h-.8A1.6 1.6 0 0 1 4 20.4v-16A2.4 2.4 0 0 1 6.4 2"
    />
  </svg>
);
export default SvgSiBus;
