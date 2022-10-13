import * as React from "react";
const SvgSiCodeMuted = ({ title, titleId, ...props }) => (
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
      d="M15.707 7.293a1 1 0 1 0-1.414 1.414L17.586 12l-3.293 3.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4Zm-6 1.414a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L6.414 12l3.293-3.293Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiCodeMuted;
