import * as React from "react";
const SvgSiFlare = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#si_Flare_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M7 12H1m22 0h-6m-5 5v6m3.536-7.464 1.414 1.414m-9.9-9.9 1.414 1.414m7.072 0L16.95 7.05m-9.9 9.9 1.414-1.414M12 1v6m2 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
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
