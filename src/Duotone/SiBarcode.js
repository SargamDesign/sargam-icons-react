import * as React from "react";
const SvgSiBarcode = ({ title, titleId, ...props }) => (
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
      d="M6 22H4.4A2.4 2.4 0 0 1 2 19.6V18m16 4h1.6a2.4 2.4 0 0 0 2.4-2.4V18m0-12V4.4A2.4 2.4 0 0 0 19.6 2H18M6 2H4.4A2.4 2.4 0 0 0 2 4.4V6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 9v6m-4-6v6m-4-6v6M6 9v6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiBarcode;
