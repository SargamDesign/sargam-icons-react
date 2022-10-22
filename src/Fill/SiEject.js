import * as React from "react";
const SvgSiEject = ({ title, titleId, ...props }) => (
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
      d="M4.18 13.427A1 1 0 0 0 5 15h14a1 1 0 0 0 .82-1.573l-7-10a1 1 0 0 0-1.64 0l-7 10ZM4 19.2A1.8 1.8 0 0 0 5.8 21h12.4a1.8 1.8 0 0 0 1.8-1.8v-.4a1.8 1.8 0 0 0-1.8-1.8H5.8A1.8 1.8 0 0 0 4 18.8v.4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiEject;
