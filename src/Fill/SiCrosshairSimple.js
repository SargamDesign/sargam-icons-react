import * as React from "react";
const SvgSiCrosshairSimple = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12ZM13 2v4a1 1 0 1 1-2 0V2h2ZM2 11h4a1 1 0 1 1 0 2H2v-2Zm16 0a1 1 0 1 0 0 2h4v-2h-4Zm-5 7a1 1 0 1 0-2 0v4h2v-4Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiCrosshairSimple;
