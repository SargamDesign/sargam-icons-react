import * as React from "react";
const SvgSiAlignBottomDetailed = ({ title, titleId, ...props }) => (
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
      d="M4 3.6A2.6 2.6 0 0 1 6.6 1h1.8A2.6 2.6 0 0 1 11 3.6v12.8A2.6 2.6 0 0 1 8.4 19H6.6A2.6 2.6 0 0 1 4 16.4V3.6Zm9 8A2.6 2.6 0 0 1 15.6 9h1.8a2.6 2.6 0 0 1 2.6 2.6v4.8a2.6 2.6 0 0 1-2.6 2.6h-1.8a2.6 2.6 0 0 1-2.6-2.6v-4.8ZM2 21a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2H2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiAlignBottomDetailed;
