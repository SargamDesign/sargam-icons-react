import * as React from "react";
const SvgSiWalletAlt = ({ title, titleId, ...props }) => (
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
      fillOpacity={0.16}
      fillRule="evenodd"
      d="M4.4 6h13.2C18.925 6 20 7.164 20 8.6v9.8c0 1.436-1.075 2.6-2.4 2.6H4.4C3.075 21 2 19.836 2 18.4V8.6C2 7.164 3.075 6 4.4 6M17 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M5 3h12.6C20.58 3 23 5.42 23 8.4V17M4.4 6h13.2C18.925 6 20 7.164 20 8.6v9.8c0 1.436-1.075 2.6-2.4 2.6H4.4C3.075 21 2 19.836 2 18.4V8.6C2 7.164 3.075 6 4.4 6M17 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
    />
  </svg>
);
export default SvgSiWalletAlt;
