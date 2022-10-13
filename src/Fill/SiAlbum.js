import * as React from "react";
const SvgSiAlbum = ({ title, titleId, ...props }) => (
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
    <path d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiAlbum;
