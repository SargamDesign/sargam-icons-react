import * as React from "react";
const SvgSiArrowDownwardCircle = ({ title, titleId, ...props }) => (
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
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm14.707.707-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V8a1 1 0 1 1 2 0v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiArrowDownwardCircle;
