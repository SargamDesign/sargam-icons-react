import * as React from "react";
const SvgSiDownTwoHeaded = ({ title, titleId, ...props }) => (
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
      d="M12 3a1 1 0 0 1 1 1v8.586l1.293-1.293a1 1 0 0 1 1.414 1.414L13 15.414v2.172l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L11 17.586v-2.172l-2.707-2.707a1 1 0 1 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiDownTwoHeaded;
