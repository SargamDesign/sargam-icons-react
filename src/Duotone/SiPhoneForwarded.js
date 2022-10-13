import * as React from "react";
const SvgSiPhoneForwarded = ({ title, titleId, ...props }) => (
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
      d="m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <path
      d="m18 10 3-3-3-3"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 7h-8"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiPhoneForwarded;
