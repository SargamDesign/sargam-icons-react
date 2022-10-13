import * as React from "react";
const SvgSiFlare = ({ title, titleId, ...props }) => (
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
      clipPath="url(#si_Flare_svg__a)"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    >
      <path
        d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        fill="currentColor"
        fillOpacity={0.16}
      />
      <path
        d="M7 12H1m22 0h-6m-5 5v6m3.536-7.464 1.414 1.414m-9.9-9.9 1.415 1.414m7.071 0L16.95 7.05m-9.9 9.9 1.415-1.414M12 1v6"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="si_Flare_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSiFlare;
