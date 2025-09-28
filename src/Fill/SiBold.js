import * as React from "react";
const SvgSiBold = ({ title, titleId, ...props }) => (
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
      d="M18 16c0-2.151-1.864-4-4.182-4H8v8h5.818C16.136 20 18 18.151 18 16m-3-9c0-1.603-1.394-3-3.25-3H8v6h3.75C13.606 10 15 8.603 15 7m2 0c0 1.276-.494 2.42-1.297 3.291C18.168 11.069 20 13.325 20 16c0 3.322-2.827 6-6.182 6H5a1 1 0 1 1 0-2h1V4H5a1 1 0 0 1 0-2h6.75C14.594 2 17 4.18 17 7"
    />
  </svg>
);
export default SvgSiBold;
