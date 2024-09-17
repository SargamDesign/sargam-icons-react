import * as React from "react";
const SvgSiUpTwoHeaded = ({ title, titleId, ...props }) => (
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
      d="M11.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L13 6.414v2.172l2.707 2.707a1 1 0 0 1-1.414 1.414L13 11.414V20a1 1 0 1 1-2 0v-8.586l-1.293 1.293a1 1 0 0 1-1.414-1.414L11 8.586V6.414L9.707 7.707a1 1 0 0 1-1.414-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiUpTwoHeaded;
