import * as React from "react";
const SvgSiCrosshairDetailed = ({ title, titleId, ...props }) => (
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
      d="M13 2a1 1 0 1 0-2 0v1h2V2Zm-3 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 3.055V5a1 1 0 1 1-2 0V3.055A9.004 9.004 0 0 0 3.055 11H5a1 1 0 1 1 0 2H3.055A9.004 9.004 0 0 0 11 20.945V19a1 1 0 1 1 2 0v1.945A9.004 9.004 0 0 0 20.945 13H19a1 1 0 1 1 0-2h1.945A9.004 9.004 0 0 0 13 3.055ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      fill="currentColor"
    />
    <path
      d="M21 11v2h1a1 1 0 1 0 0-2h-1Zm-8 10h-2v1a1 1 0 1 0 2 0v-1ZM3 13v-2H2a1 1 0 1 0 0 2h1Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiCrosshairDetailed;
