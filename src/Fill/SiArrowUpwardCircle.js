import * as React from "react";
const SvgSiArrowUpwardCircle = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-14.707-.707 4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 10.414V16a1 1 0 1 1-2 0v-5.586l-2.293 2.293a1 1 0 0 1-1.414-1.414Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiArrowUpwardCircle;
