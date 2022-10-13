import * as React from "react";
const SvgSiCancelPhoto = ({ title, titleId, ...props }) => (
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
      d="M8.4 3h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3Zm3.479 4.464a1 1 0 1 0-1.415 1.415L12.586 11l-2.122 2.121a1 1 0 0 0 1.415 1.415L14 12.414l2.121 2.122a1 1 0 1 0 1.415-1.415L15.414 11l2.122-2.121a1 1 0 0 0-1.415-1.415l-2.12 2.122-2.122-2.122Z"
      fill="currentColor"
    />
    <path
      d="M4 5a1 1 0 0 0-2 0v11.6C2 20.132 4.868 23 8.4 23H20a1 1 0 1 0 0-2H8.4A4.403 4.403 0 0 1 4 16.6V5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiCancelPhoto;
