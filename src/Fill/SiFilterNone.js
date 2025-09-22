import * as React from "react";
const SvgSiFilterNone = ({ title, titleId, ...props }) => (
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
      d="M8.4 2h11.2A2.4 2.4 0 0 1 22 4.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 15.6V4.4A2.4 2.4 0 0 1 8.4 2"
    />
    <path
      fill="currentColor"
      d="M4 4a1 1 0 0 0-2 0v11.6C2 19.132 4.868 22 8.4 22H20a1 1 0 1 0 0-2H8.4A4.403 4.403 0 0 1 4 15.6z"
    />
  </svg>
);
export default SvgSiFilterNone;
