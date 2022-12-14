import * as React from "react";
const SvgSiUnfoldMore = ({ title, titleId, ...props }) => (
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
      d="M8.293 14.293a1 1 0 0 1 1.414 0L12 16.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414Zm3-9a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L12 7.414 9.707 9.707a1 1 0 0 1-1.414-1.414l3-3Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiUnfoldMore;
