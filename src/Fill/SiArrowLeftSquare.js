import * as React from "react";
const SvgSiArrowLeftSquare = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H5.4A2.4 2.4 0 0 0 3 5.4m4.293 5.893a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 13H16a1 1 0 1 0 0-2h-5.586l2.293-2.293a1 1 0 0 0-1.414-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiArrowLeftSquare;
