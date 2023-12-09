import * as React from "react";
const SvgSiAlignRightDetailed = ({ title, titleId, ...props }) => (
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
      d="M23 2a1 1 0 1 0-2 0v20a1 1 0 1 0 2 0zM1 6.6A2.6 2.6 0 0 1 3.6 4h12.8A2.6 2.6 0 0 1 19 6.6v1.8a2.6 2.6 0 0 1-2.6 2.6H3.6A2.6 2.6 0 0 1 1 8.4zm8 9a2.6 2.6 0 0 1 2.6-2.6h4.8a2.6 2.6 0 0 1 2.6 2.6v1.8a2.6 2.6 0 0 1-2.6 2.6h-4.8A2.6 2.6 0 0 1 9 17.4z"
    />
  </svg>
);
export default SvgSiAlignRightDetailed;
