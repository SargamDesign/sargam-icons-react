import * as React from "react";
const SvgSiAlignRightSimple = ({ title, titleId, ...props }) => (
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
      d="M23 2a1 1 0 1 0-2 0v20a1 1 0 1 0 2 0V2ZM3.6 8h12.8a2.6 2.6 0 0 1 2.6 2.6v2.8a2.6 2.6 0 0 1-2.6 2.6H3.6A2.6 2.6 0 0 1 1 13.4v-2.8A2.6 2.6 0 0 1 3.6 8Z"
    />
  </svg>
);
export default SvgSiAlignRightSimple;
