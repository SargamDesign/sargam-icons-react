import * as React from "react";
const SvgSiBuildingAlt3 = ({ title, titleId, ...props }) => (
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
      d="M18 2v4m0-4H6m12 0h1m-1 4v13.6a2.4 2.4 0 0 1-2.4 2.4M18 6h4m-6.4 16h4a2.4 2.4 0 0 0 2.4-2.4V6m-6.4 16H14m0 0h-4m4 0v-3.2a.8.8 0 0 0-.8-.8h-2.4a.8.8 0 0 0-.8.8V22m0 0H8.4m0 0A2.4 2.4 0 0 1 6 19.6V6m2.4 16H4.3C2.975 22 2 20.878 2 19.553V6m4 0V2m0 4H2m4-4H5m17 4h1M2 6H1m9 0h4m-4 4h4m-4 4h4"
    />
  </svg>
);
export default SvgSiBuildingAlt3;
