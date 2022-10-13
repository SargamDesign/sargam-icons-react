import * as React from "react";
const SvgSiGlobeDetailed = ({ title, titleId, ...props }) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M2 12h20m-10.73 9.69A15.938 15.938 0 0 1 8 12c0-3.64 1.24-7.07 3.34-9.78m1.39 0C14.78 4.91 16 8.27 16 11.91c0 3.64-1.24 7.07-3.34 9.78"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M19.14 19c-1.82-1.85-4.34-3-7.14-3s-5.33 1.15-7.14 3M19.14 5C17.33 6.85 14.8 8 12 8S6.68 6.85 4.86 5"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </svg>
);
export default SvgSiGlobeDetailed;
