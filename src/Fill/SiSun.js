import * as React from "react";
const SvgSiSun = ({ title, titleId, ...props }) => (
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
    <g fill="currentColor" clipPath="url(#si_Sun_svg__a)">
      <path d="M12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1M0 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1m21-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-8 10a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm-6.657-3.343a1 1 0 0 1 0 1.414L4.93 20.485a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0M20.485 3.515a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0m-16.97 0a1 1 0 0 1 1.414 0l1.414 1.414A1 1 0 1 1 4.93 6.343L3.515 4.93a1 1 0 0 1 0-1.414m14.142 14.141a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0" />
    </g>
    <defs>
      <clipPath id="si_Sun_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSiSun;
