import * as React from "react";
const SvgSiUser = ({ title, titleId, ...props }) => (
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
      d="M6.25 7a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0Zm5.547 7.261a.755.755 0 0 1 .13-.011h.144c.044 0 .088.004.131.011l7.295 1.283a.64.64 0 0 1 .038.008c1.343.31 2.787 1.163 3.068 2.82a.73.73 0 0 1 .005.029l.113.877v.002c.265 2.009-1.328 3.47-3.21 3.47a.753.753 0 0 1-.123-.01h-14.9c-1.882 0-3.475-1.462-3.21-3.472l.114-.869a.753.753 0 0 1 .005-.03c.28-1.627 1.735-2.528 3.077-2.819a.719.719 0 0 1 .029-.006l7.294-1.283Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiUser;
