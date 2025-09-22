import * as React from "react";
const SvgSiDashboardCustomize = ({ title, titleId, ...props }) => (
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
      d="M3 5.6A2.6 2.6 0 0 1 5.6 3h2.8A2.6 2.6 0 0 1 11 5.6v2.8A2.6 2.6 0 0 1 8.4 11H5.6A2.6 2.6 0 0 1 3 8.4zm0 10A2.6 2.6 0 0 1 5.6 13h2.8a2.6 2.6 0 0 1 2.6 2.6v2.8A2.6 2.6 0 0 1 8.4 21H5.6A2.6 2.6 0 0 1 3 18.4zm10-10A2.6 2.6 0 0 1 15.6 3h2.8A2.6 2.6 0 0 1 21 5.6v2.8a2.6 2.6 0 0 1-2.6 2.6h-2.8A2.6 2.6 0 0 1 13 8.4zm4 7.4a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgSiDashboardCustomize;
