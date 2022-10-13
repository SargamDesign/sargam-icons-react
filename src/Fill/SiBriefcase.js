import * as React from "react";
const SvgSiBriefcase = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7H16V4.8A1.8 1.8 0 0 0 14.2 3H9.8A1.8 1.8 0 0 0 8 4.8V7Zm2 0V5h4v2h-4Zm0 1v12H8V8h2Zm6 0v12h-2V8h2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiBriefcase;
