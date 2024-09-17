import * as React from "react";
const SvgSiNorthwestSoutheast = ({ title, titleId, ...props }) => (
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
      d="M5.293 5.293A1 1 0 0 1 6 5h4a1 1 0 1 1 0 2H8.414L17 15.586V14a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.586L7 8.414V10a1 1 0 1 1-2 0V6a1 1 0 0 1 .293-.707"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiNorthwestSoutheast;
