import * as React from "react";
const SvgSiMoney = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M5 9V6.8c0-.44.36-.8.8-.8h16.4c.44 0 .8.36.8.8v8.4c0 .44-.36.8-.8.8H20M2.8 9h16.4a.8.8 0 0 1 .8.8v8.4a.8.8 0 0 1-.8.8H2.8a.8.8 0 0 1-.8-.8V9.8a.8.8 0 0 1 .8-.8Zm9.2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </svg>
);
export default SvgSiMoney;
