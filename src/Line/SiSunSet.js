import * as React from "react";
const SvgSiSunSet = ({ title, titleId, ...props }) => (
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
      d="M8.57 17.93A5.98 5.98 0 0 1 6 13c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.05-1.03 3.86-2.6 4.94M12 4V2M3 13H1m22 0h-2m-1.222-7.778-1.414 1.414m-12.728 0L4.222 5.222M4 18h16M8 21h8"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiSunSet;
