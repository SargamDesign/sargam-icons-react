import * as React from "react";
const SvgSiAlignHorizCenterDetailed = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 2v3m0 5v4m0 5v3m4-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6H9.6A1.6 1.6 0 0 1 8 17.4v-1.8A1.6 1.6 0 0 1 9.6 14h4.8a1.6 1.6 0 0 1 1.6 1.6m4-9v1.8a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 8.4V6.6A1.6 1.6 0 0 1 5.6 5h12.8A1.6 1.6 0 0 1 20 6.6"
    />
  </svg>
);
export default SvgSiAlignHorizCenterDetailed;
