import * as React from "react";
const SvgSiViewCompact = ({ title, titleId, ...props }) => (
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
    <path d="M11 14H8v-3h3v3Zm5 0h-3v-3h3v3Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.4 5h15.2A2.4 2.4 0 0 1 22 7.4v10.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 17.6V7.4A2.4 2.4 0 0 1 4.4 5ZM8 9V6H6v3H3v2h3v3H3v2h3v3h2v-3h3v3h2v-3h3v3h2v-3h3v-2h-3v-3h3V9h-3V6h-2v3h-3V6h-2v3H8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiViewCompact;
