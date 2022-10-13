import * as React from "react";
const SvgSiSun = ({ title, titleId, ...props }) => (
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
    <g
      clipPath="url(#si_Sun_svg__a)"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    >
      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
      <path
        d="M3 12H1m22 0h-2m-9 9v2m0-22v2M5.636 18.364l-1.414 1.414M19.778 4.222l-1.414 1.414m-12.728 0L4.222 4.222m15.556 15.556-1.414-1.414"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="si_Sun_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSiSun;
