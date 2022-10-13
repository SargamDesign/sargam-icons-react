import * as React from "react";
const SvgSiTrafficCone = ({ title, titleId, ...props }) => (
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
      d="M5 21 9.84 3.59c.1-.35.41-.59.77-.59h2.78c.36 0 .67.24.77.59L19 21"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M15.64 9.67c-1.18.22-2.4.33-3.64.33a20.35 20.35 0 0 1-3.77-.355"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="square"
    />
    <path
      d="M17.24 15.47c-1.69.35-3.44.53-5.24.53-1.8 0-3.63-.19-5.36-.55M2 21h20"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiTrafficCone;
