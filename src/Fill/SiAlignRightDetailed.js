import * as React from "react";
const SvgSiAlignRightDetailed = ({ title, titleId, ...props }) => (
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
      d="M23 2a1 1 0 1 0-2 0v20a1 1 0 1 0 2 0V2ZM1 6.6A2.6 2.6 0 0 1 3.6 4h12.8A2.6 2.6 0 0 1 19 6.6v1.8a2.6 2.6 0 0 1-2.6 2.6H3.6A2.6 2.6 0 0 1 1 8.4V6.6Zm8 9a2.6 2.6 0 0 1 2.6-2.6h4.8a2.6 2.6 0 0 1 2.6 2.6v1.8a2.6 2.6 0 0 1-2.6 2.6h-4.8A2.6 2.6 0 0 1 9 17.4v-1.8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiAlignRightDetailed;
