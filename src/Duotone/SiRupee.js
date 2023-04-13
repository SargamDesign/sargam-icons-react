import * as React from "react";
const SvgSiRupee = ({ title, titleId, ...props }) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7 13h3.75c1.393 0 2.728-.474 3.713-1.318C15.447 10.838 16 9.693 16 8.5c0-1.193-.553-2.338-1.537-3.182C13.478 4.474 12.143 4 10.75 4H7m0 9 8.2 7M7 8.5h11M11 4h7"
    />
  </svg>
);
export default SvgSiRupee;
