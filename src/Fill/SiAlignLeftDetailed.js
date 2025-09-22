import * as React from "react";
const SvgSiAlignLeftDetailed = ({ title, titleId, ...props }) => (
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
      d="M7 17.4v-1.8A1.6 1.6 0 0 1 8.6 14h3.8a1.6 1.6 0 0 1 1.6 1.6v1.8a1.6 1.6 0 0 1-1.6 1.6H8.6A1.6 1.6 0 0 1 7 17.4m0-9V6.6A1.6 1.6 0 0 1 8.6 5h11.8A1.6 1.6 0 0 1 22 6.6v1.8a1.6 1.6 0 0 1-1.6 1.6H8.6A1.6 1.6 0 0 1 7 8.4"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M3 1a1 1 0 0 0-1 1v20a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiAlignLeftDetailed;
