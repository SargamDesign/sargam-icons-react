import * as React from "react";
const SvgSiMoreMutedVert = ({ title, titleId, ...props }) => (
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
      d="M12 7h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2Zm1 6h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm0 6h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiMoreMutedVert;
