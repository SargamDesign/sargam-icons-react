import * as React from "react";
const SvgSiArrowUpward = ({ title, titleId, ...props }) => (
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
      d="M12.707 5.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11 8.414V18a1 1 0 1 0 2 0V8.414l2.293 2.293a1 1 0 0 0 1.414-1.414l-4-4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiArrowUpward;
