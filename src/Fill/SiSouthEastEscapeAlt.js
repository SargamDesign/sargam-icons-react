import * as React from "react";
const SvgSiSouthEastEscapeAlt = ({ title, titleId, ...props }) => (
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
      d="M8.4 7C7.622 7 7 7.622 7 8.4v4.2c0 .778.622 1.4 1.4 1.4H9a1 1 0 1 1 0 2h-.6A3.394 3.394 0 0 1 5 12.6V8.4C5 6.518 6.518 5 8.4 5h4.2C14.482 5 16 6.518 16 8.4V9a1 1 0 1 1-2 0v-.6c0-.778-.622-1.4-1.4-1.4zm.893 2.293a1 1 0 0 1 1.414 0L17 15.586V14a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h1.586l-6.293-6.293a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiSouthEastEscapeAlt;
