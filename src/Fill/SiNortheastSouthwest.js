import * as React from "react";
const SvgSiNortheastSouthwest = ({ title, titleId, ...props }) => (
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
      d="M14 5h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8.414L8.414 17H10a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586L15.586 7H14a1 1 0 1 1 0-2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiNortheastSouthwest;
