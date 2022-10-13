import * as React from "react";
const SvgSiMoney = ({ title, titleId, ...props }) => (
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
      d="M5 9V6.8c0-.44.36-.8.8-.8h16.4c.44 0 .8.36.8.8v8.4c0 .44-.36.8-.8.8H20"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M19.2 9H2.8a.8.8 0 0 0-.8.8v8.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V9.8a.8.8 0 0 0-.8-.8Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M11 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </svg>
);
export default SvgSiMoney;
