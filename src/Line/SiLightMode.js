import * as React from "react";
const SvgSiLightMode = ({ title, titleId, ...props }) => (
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
      clipPath="url(#si_Light_mode_svg__a)"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    >
      <path
        d="M5 12H1m22 0h-4M7.05 7.05 4.222 4.222m15.556 15.556L16.95 16.95m-9.9 0-2.828 2.828M19.778 4.222 16.95 7.05"
        strokeLinecap="round"
      />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M12 19v4m0-22v4" strokeLinecap="round" />
    </g>
    <defs>
      <clipPath id="si_Light_mode_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSiLightMode;
