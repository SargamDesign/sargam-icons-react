import * as React from "react";
const SvgSiPinAlt2 = ({ title, titleId, ...props }) => (
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
    <path
      fill="currentColor"
      fillOpacity={0.16}
      d="M12 12.91A5.455 5.455 0 1 0 12 2a5.455 5.455 0 0 0 0 10.91"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 12.91A5.455 5.455 0 1 0 12 2a5.455 5.455 0 0 0 0 10.91m0 0v5.454m3.636-1.632c3.725.396 6.364 1.384 6.364 2.54C22 20.78 17.523 22 12 22S2 20.78 2 19.273c0-1.157 2.64-2.145 6.364-2.541"
    />
  </svg>
);
export default SvgSiPinAlt2;
