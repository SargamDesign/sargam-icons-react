import * as React from "react";
const SvgSiMoreVert = ({ title, titleId, ...props }) => (
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
      d="M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-2 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiMoreVert;
