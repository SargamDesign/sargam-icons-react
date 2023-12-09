import * as React from "react";
const SvgSiAlignLeftDetailed = ({ title, titleId, ...props }) => (
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
      d="M3 2a1 1 0 1 0-2 0v20a1 1 0 1 0 2 0zm2 4.6A2.6 2.6 0 0 1 7.6 4h12.8A2.6 2.6 0 0 1 23 6.6v1.8a2.6 2.6 0 0 1-2.6 2.6H7.6A2.6 2.6 0 0 1 5 8.4zm0 9A2.6 2.6 0 0 1 7.6 13h4.8a2.6 2.6 0 0 1 2.6 2.6v1.8a2.6 2.6 0 0 1-2.6 2.6H7.6A2.6 2.6 0 0 1 5 17.4z"
    />
  </svg>
);
export default SvgSiAlignLeftDetailed;
