import * as React from "react";
const SvgSiWalletDetailed = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M4.2 7h14.4C19.92 7 21 8.08 21 9.4v9.2c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6V8.2C3 7.54 3.54 7 4.2 7Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M3 8.5v-3"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.49 3 4.5 4C3.67 4 3 4.67 3 5.5S3.67 7 4.5 7H19V5.38C19 4.06 17.88 3 16.49 3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M21 11h-6.286c-.947 0-1.714.716-1.714 1.6v2.8c0 .884.768 1.6 1.714 1.6H21v-6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 14h.01"
    />
  </svg>
);
export default SvgSiWalletDetailed;
