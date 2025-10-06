import * as React from "react";
const SvgSiLeftTwoHeaded = ({ title, titleId, ...props }) => (
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
      d="M12.293 7.293a1 1 0 1 1 1.414 1.414L11.414 11H20a1 1 0 1 1 0 2h-8.586l2.293 2.293a1 1 0 1 1-1.414 1.414L8.586 13H6.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L6.414 11h2.172z"
    />
  </svg>
);
export default SvgSiLeftTwoHeaded;
