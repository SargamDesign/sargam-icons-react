import * as React from "react";
const SvgSiWalletAlt = ({ title, titleId, ...props }) => (
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
      d="M17.6 6H4.4C3.075 6 2 7.164 2 8.6v9.8C2 19.836 3.075 21 4.4 21h13.2c1.325 0 2.4-1.164 2.4-2.6V8.6C20 7.164 18.925 6 17.6 6Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M5 3h12.6C20.58 3 23 5.42 23 8.4V17"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M15.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </svg>
);
export default SvgSiWalletAlt;
