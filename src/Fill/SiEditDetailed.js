import * as React from "react";
const SvgSiEditDetailed = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M16.738 3.727a1.3 1.3 0 0 1 1.838 0l1.697 1.697a1.3 1.3 0 0 1 0 1.838L8.818 18.718a.5.5 0 0 1-.255.136l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.535a.5.5 0 0 1 .137-.256l8.838-8.839 3.536 3.536.707-.707-3.536-3.536 1.91-1.91Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiEditDetailed;
