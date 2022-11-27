import * as React from "react";
const SvgSiEditDetailed = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.737 3.727a1.3 1.3 0 0 1 1.839 0l1.697 1.697a1.3 1.3 0 0 1 0 1.838L8.818 18.718a.5.5 0 0 1-.256.136l-3.535.707a.5.5 0 0 1-.589-.588l.708-3.535a.5.5 0 0 1 .136-.256l8.84-8.839 3.535 3.536.707-.707-3.536-3.536 1.91-1.91Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiEditDetailed;
