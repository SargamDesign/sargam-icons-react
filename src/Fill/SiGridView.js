import * as React from "react";
const SvgSiGridView = ({ title, titleId, ...props }) => (
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
      d="M5.6 3A2.6 2.6 0 0 0 3 5.6v2.8A2.6 2.6 0 0 0 5.6 11h2.8A2.6 2.6 0 0 0 11 8.4V5.6A2.6 2.6 0 0 0 8.4 3H5.6Zm0 10A2.6 2.6 0 0 0 3 15.6v2.8A2.6 2.6 0 0 0 5.6 21h2.8a2.6 2.6 0 0 0 2.6-2.6v-2.8A2.6 2.6 0 0 0 8.4 13H5.6Zm10-10A2.6 2.6 0 0 0 13 5.6v2.8a2.6 2.6 0 0 0 2.6 2.6h2.8A2.6 2.6 0 0 0 21 8.4V5.6A2.6 2.6 0 0 0 18.4 3h-2.8Zm0 10a2.6 2.6 0 0 0-2.6 2.6v2.8a2.6 2.6 0 0 0 2.6 2.6h2.8a2.6 2.6 0 0 0 2.6-2.6v-2.8a2.6 2.6 0 0 0-2.6-2.6h-2.8Z"
    />
  </svg>
);
export default SvgSiGridView;
