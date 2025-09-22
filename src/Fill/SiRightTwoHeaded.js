import * as React from "react";
const SvgSiRightTwoHeaded = ({ title, titleId, ...props }) => (
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
      d="M11.293 8.293a1 1 0 0 1 1.414 0L15.414 11h2.172l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.586 13h-2.172l-2.707 2.707a1 1 0 0 1-1.414-1.414L12.586 13H4a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiRightTwoHeaded;
