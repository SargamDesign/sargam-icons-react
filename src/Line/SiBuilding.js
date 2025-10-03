import * as React from "react";
const SvgSiBuilding = ({ title, titleId, ...props }) => (
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
      d="M20 5v14.6a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 19.6V5m11 17v-3.2a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V22m3-14v2m0 3v2m4-7v2m0 3v2M8 8v2m0 3v2M2.8 2h18.4a.8.8 0 0 1 .8.8v1.4a.8.8 0 0 1-.8.8H2.8a.8.8 0 0 1-.8-.8V2.8a.8.8 0 0 1 .8-.8"
    />
  </svg>
);
export default SvgSiBuilding;
