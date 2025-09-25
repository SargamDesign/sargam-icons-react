import * as React from "react";
const SvgSiViewCompact = ({ title, titleId, ...props }) => (
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
    <path fill="currentColor" d="M11 13H8v-3h3zm5 0h-3v-3h3z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v10.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 16.6V6.4A2.4 2.4 0 0 1 4.4 4M8 8V5H6v3H3v2h3v3H3v2h3v3h2v-3h3v3h2v-3h3v3h2v-3h3v-2h-3v-3h3V8h-3V5h-2v3h-3V5h-2v3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiViewCompact;
