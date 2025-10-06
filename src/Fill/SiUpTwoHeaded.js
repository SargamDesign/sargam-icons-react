import * as React from "react";
const SvgSiUpTwoHeaded = ({ title, titleId, ...props }) => (
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
      d="M11 20v-8.586l-2.293 2.293a1 1 0 1 1-1.414-1.414L11 8.586V6.414L8.707 8.707a1 1 0 1 1-1.414-1.414l4-4 .076-.068a1 1 0 0 1 1.338.068l4 4a1 1 0 1 1-1.414 1.414L13 6.414v2.172l3.707 3.707a1 1 0 1 1-1.414 1.414L13 11.414V20a1 1 0 1 1-2 0"
    />
  </svg>
);
export default SvgSiUpTwoHeaded;
