import * as React from "react";
const SvgSiAlignHorizCenterDetailed = ({ title, titleId, ...props }) => (
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
      d="M13 2a1 1 0 1 0-2 0v2H5.6A2.6 2.6 0 0 0 3 6.6v1.8A2.6 2.6 0 0 0 5.6 11H11v2H9.6A2.6 2.6 0 0 0 7 15.6v1.8A2.6 2.6 0 0 0 9.6 20H11v2a1 1 0 1 0 2 0v-2h1.4a2.6 2.6 0 0 0 2.6-2.6v-1.8a2.6 2.6 0 0 0-2.6-2.6H13v-2h5.4A2.6 2.6 0 0 0 21 8.4V6.6A2.6 2.6 0 0 0 18.4 4H13z"
    />
  </svg>
);
export default SvgSiAlignHorizCenterDetailed;
