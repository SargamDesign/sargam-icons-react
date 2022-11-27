import * as React from "react";
const SvgSiEditSimple = ({ title, titleId, ...props }) => (
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
      d="M16.737 3.727a1.3 1.3 0 0 1 1.839 0l1.697 1.697a1.3 1.3 0 0 1 0 1.838L8.818 18.718a.5.5 0 0 1-.256.136l-3.535.707a.5.5 0 0 1-.589-.588l.708-3.535a.5.5 0 0 1 .136-.256L16.737 3.727Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiEditSimple;
