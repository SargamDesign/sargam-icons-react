import * as React from "react";
const SvgSiArticle = ({ title, titleId, ...props }) => (
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
      d="M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 17.6V6.4A2.4 2.4 0 0 1 4.4 4ZM8 8a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Zm-1 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 2a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiArticle;