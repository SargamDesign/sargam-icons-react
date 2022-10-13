import * as React from "react";
const SvgSiAlert = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M10.575 5.217 3.517 17a1.667 1.667 0 0 0 1.425 2.5h14.116a1.666 1.666 0 0 0 1.425-2.5L13.425 5.217a1.666 1.666 0 0 0-2.85 0Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M12 16h.008M12 10v3"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiAlert;
