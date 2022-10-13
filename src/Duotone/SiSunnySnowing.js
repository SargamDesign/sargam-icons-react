import * as React from "react";
const SvgSiSunnySnowing = ({ title, titleId, ...props }) => (
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
      d="M5 13H1m22 0h-4M12 2v4M7.05 8.05 4.222 5.222m15.556 0L16.95 8.05"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M8 13c0-2.21 1.79-4 4-4s4 1.79 4 4"
      fill="currentColor"
      fillOpacity={0.16}
    />
    <path
      d="M8 13c0-2.21 1.79-4 4-4s4 1.79 4 4m0 0H8"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M12 16h.1m3.9 0h.1m3.9 0h.1M8 16h.1m3.9 3h.1m-.1 3h.1m3.9-3h.1M8 19h.1M4 16h.1"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSiSunnySnowing;
