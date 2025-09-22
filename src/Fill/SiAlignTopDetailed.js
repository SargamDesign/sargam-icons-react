import * as React from "react";
const SvgSiAlignTopDetailed = ({ title, titleId, ...props }) => (
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
      d="M17.4 7h-1.8A1.6 1.6 0 0 0 14 8.6v3.8a1.6 1.6 0 0 0 1.6 1.6h1.8a1.6 1.6 0 0 0 1.6-1.6V8.6A1.6 1.6 0 0 0 17.4 7m-9 0H6.6A1.6 1.6 0 0 0 5 8.6v11.8A1.6 1.6 0 0 0 6.6 22h1.8a1.6 1.6 0 0 0 1.6-1.6V8.6A1.6 1.6 0 0 0 8.4 7"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M1 3a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiAlignTopDetailed;
