import * as React from "react";
const SvgSiAlignVertCenterDetailed = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M1 12a1 1 0 0 1 1-1h3V4.6A1.6 1.6 0 0 1 6.6 3h1.8A1.6 1.6 0 0 1 10 4.6V11h4V8.6A1.6 1.6 0 0 1 15.6 7h1.8A1.6 1.6 0 0 1 19 8.6V11h3a1 1 0 1 1 0 2h-3v2.4a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6V13h-4v6.4A1.6 1.6 0 0 1 8.4 21H6.6A1.6 1.6 0 0 1 5 19.4V13H2a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiAlignVertCenterDetailed;
