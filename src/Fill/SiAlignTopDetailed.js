import * as React from "react";
const SvgSiAlignTopDetailed = ({ title, titleId, ...props }) => (
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
      d="M2 1a1 1 0 0 0 0 2h20a1 1 0 1 0 0-2H2Zm2 6.6A2.6 2.6 0 0 1 6.6 5h1.8A2.6 2.6 0 0 1 11 7.6v12.8A2.6 2.6 0 0 1 8.4 23H6.6A2.6 2.6 0 0 1 4 20.4V7.6Zm9 0A2.6 2.6 0 0 1 15.6 5h1.8A2.6 2.6 0 0 1 20 7.6v4.8a2.6 2.6 0 0 1-2.6 2.6h-1.8a2.6 2.6 0 0 1-2.6-2.6V7.6Z"
    />
  </svg>
);
export default SvgSiAlignTopDetailed;
