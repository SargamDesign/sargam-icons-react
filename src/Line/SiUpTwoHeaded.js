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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 20V4m0 0L9 7m3-3 3 3m-6 5 3-3 3 3"
    />
  </svg>
);
export default SvgSiUpTwoHeaded;
