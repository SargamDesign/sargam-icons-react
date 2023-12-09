import * as React from "react";
const SvgSiAlignHorizCenterSimple = ({ title, titleId, ...props }) => (
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
      d="M12 1a1 1 0 0 1 1 1v6h5.4a2.6 2.6 0 0 1 2.6 2.6v2.8a2.6 2.6 0 0 1-2.6 2.6H13v6a1 1 0 1 1-2 0v-6H5.6A2.6 2.6 0 0 1 3 13.4v-2.8A2.6 2.6 0 0 1 5.6 8H11V2a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgSiAlignHorizCenterSimple;
