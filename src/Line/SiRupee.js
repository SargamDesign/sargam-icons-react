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
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7 4h3.75c1.393 0 2.728.474 3.713 1.318S16 7.307 16 8.5s-.553 2.338-1.537 3.182c-.985.844-2.32 1.318-3.712 1.318H7l8.2 7M7 8.5h11M11 4h7"
    />
  </svg>
);
export default SvgSiRupee;
