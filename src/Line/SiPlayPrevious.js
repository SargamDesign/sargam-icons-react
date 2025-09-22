import * as React from "react";
const SvgSiPlayPrevious = ({ title, titleId, ...props }) => (
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
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m21 5-10 7 10 7zM3.8 5h2.4a.8.8 0 0 1 .8.8v12.4a.8.8 0 0 1-.8.8H3.8a.8.8 0 0 1-.8-.8V5.8a.8.8 0 0 1 .8-.8Z"
    />
  </svg>
);
export default SvgSiPlayPrevious;
