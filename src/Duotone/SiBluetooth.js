import * as React from "react";
const SvgSiBluetooth = ({ title, titleId, ...props }) => (
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
    <path fill="currentColor" fillOpacity={0.16} d="m12 12 6 5-6 5V2l6 5z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m5 6 13 11-6 5V2l6 5L5 18"
    />
  </svg>
);
export default SvgSiBluetooth;
