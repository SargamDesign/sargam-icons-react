import * as React from "react";
const SvgSiVerified = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8 13 3 3 5-7m6 3c0-1.395-.858-2.605-2.137-3.259.45-1.356.195-2.829-.79-3.814-.985-.986-2.458-1.24-3.815-.79C14.615 2.859 13.396 2 12 2s-2.605.859-3.249 2.137c-1.366-.45-2.839-.196-3.824.79-.986.985-1.23 2.458-.78 3.814C2.867 9.395 2 10.605 2 12c0 1.395.868 2.605 2.146 3.258-.448 1.357-.205 2.83.78 3.815.986.985 2.46 1.23 3.815.79C9.395 21.142 10.605 22 12 22c1.395 0 2.615-.858 3.258-2.137 1.357.44 2.83.195 3.815-.79.985-.985 1.24-2.458.79-3.815C21.142 14.606 22 13.396 22 12"
    />
  </svg>
);
export default SvgSiVerified;
