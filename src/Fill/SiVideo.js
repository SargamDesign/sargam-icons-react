import * as React from "react";
const SvgSiVideo = ({ title, titleId, ...props }) => (
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
      d="M23.383 5.076A1 1 0 0 1 24 6v12a1 1 0 0 1-1.707.707l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.09-.217ZM3.4 6h8.2A2.4 2.4 0 0 1 14 8.4v7.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 15.6V8.4A2.4 2.4 0 0 1 3.4 6Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiVideo;
