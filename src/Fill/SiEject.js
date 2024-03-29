import * as React from "react";
const SvgSiEject = ({ title, titleId, ...props }) => (
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
      d="M4.18 13.427A1 1 0 0 0 5 15h14a1 1 0 0 0 .82-1.573l-7-10a1 1 0 0 0-1.64 0zM4 19.2A1.8 1.8 0 0 0 5.8 21h12.4a1.8 1.8 0 0 0 1.8-1.8v-.4a1.8 1.8 0 0 0-1.8-1.8H5.8A1.8 1.8 0 0 0 4 18.8z"
    />
  </svg>
);
export default SvgSiEject;
