import * as React from "react";
const SvgSiGrid = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M4.6 2A2.6 2.6 0 0 0 2 4.6v3.8A2.6 2.6 0 0 0 4.6 11h3.8A2.6 2.6 0 0 0 11 8.4V4.6A2.6 2.6 0 0 0 8.4 2zm11 0A2.6 2.6 0 0 0 13 4.6v3.8a2.6 2.6 0 0 0 2.6 2.6h3.8A2.6 2.6 0 0 0 22 8.4V4.6A2.6 2.6 0 0 0 19.4 2zm-11 11A2.6 2.6 0 0 0 2 15.6v3.8A2.6 2.6 0 0 0 4.6 22h3.8a2.6 2.6 0 0 0 2.6-2.6v-3.8A2.6 2.6 0 0 0 8.4 13zm11 0a2.6 2.6 0 0 0-2.6 2.6v3.8a2.6 2.6 0 0 0 2.6 2.6h3.8a2.6 2.6 0 0 0 2.6-2.6v-3.8a2.6 2.6 0 0 0-2.6-2.6z"
    />
  </svg>
);
export default SvgSiGrid;
