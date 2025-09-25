import * as React from "react";
const SvgSiLamp = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 13v6m10-7c0-5.523-4.477-10-10-10S2 6.477 2 12v1h20zM8.818 19h6.364c1 0 1.818.9 1.818 2v1H7v-1c0-1.1.818-2 1.818-2"
    />
  </svg>
);
export default SvgSiLamp;
