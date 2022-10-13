import * as React from "react";
const SvgSiLeftUp = ({ title, titleId, ...props }) => (
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
      d="M9.707 4.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L8 7.414V14.6a5.4 5.4 0 0 0 5.4 5.4H19a1 1 0 1 0 0-2h-5.6a3.4 3.4 0 0 1-3.4-3.4V7.414l2.293 2.293a1 1 0 0 0 1.414-1.414l-4-4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiLeftUp;
