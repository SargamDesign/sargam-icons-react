import * as React from "react";
const SvgSiSignOutAlt = ({ title, titleId, ...props }) => (
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
      d="M4 5.4A1.4 1.4 0 0 1 5.4 4H11a1 1 0 1 0 0-2H5.4A3.4 3.4 0 0 0 2 5.4v13.2A3.4 3.4 0 0 0 5.4 22H11a1 1 0 1 0 0-2H5.4A1.4 1.4 0 0 1 4 18.6V5.4Z"
      fill="currentColor"
    />
    <path
      d="M16.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 13H7a1 1 0 1 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiSignOutAlt;
