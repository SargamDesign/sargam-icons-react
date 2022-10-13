import * as React from "react";
const SvgSiAlignLeftSimple = ({ title, titleId, ...props }) => (
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
      d="M3 2a1 1 0 1 0-2 0v20a1 1 0 1 0 2 0V2Zm2 8.6A2.6 2.6 0 0 1 7.6 8h12.8a2.6 2.6 0 0 1 2.6 2.6v2.8a2.6 2.6 0 0 1-2.6 2.6H7.6A2.6 2.6 0 0 1 5 13.4v-2.8Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiAlignLeftSimple;
