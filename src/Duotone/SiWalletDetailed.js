import * as React from "react";
const SvgSiWalletDetailed = ({ title, titleId, ...props }) => (
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
      fill="currentColor"
      fillOpacity={0.16}
      d="M18.6 7H4.2C3.54 7 3 7.54 3 8.2v10.4C3 19.92 4.08 21 5.4 21h13.2c1.32 0 2.4-1.08 2.4-2.4V17h-6.286C13.767 17 13 16.284 13 15.4v-2.8c0-.884.768-1.6 1.714-1.6H21V9.4C21 8.08 19.92 7 18.6 7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 8.5v-3m0 0C3 4.67 3.67 4 4.5 4l11.99-1C17.88 3 19 4.06 19 5.38V7H4.5C3.67 7 3 6.33 3 5.5M16 14h.01M4.2 7h14.4C19.92 7 21 8.08 21 9.4v9.2c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6V8.2C3 7.54 3.54 7 4.2 7m10.514 4H21v6h-6.286C13.767 17 13 16.284 13 15.4v-2.8c0-.884.768-1.6 1.714-1.6"
    />
  </svg>
);
export default SvgSiWalletDetailed;
