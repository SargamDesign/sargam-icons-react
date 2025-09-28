import * as React from "react";
const SvgSiRocket = ({ title, titleId, ...props }) => (
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
      d="M9.198 6.59c0-2.336 1.563-4.549 2.805-4.59 1.242.041 2.802 2.254 2.802 4.59v1.148c0 2.54 3.346 4.221 4.187 5.328.378.475.372 1.913.401 2.541a.38.38 0 0 1-.39.393h-3.906l-.684.819a.4.4 0 0 1-.337.181H9.927a.4.4 0 0 1-.337-.181L8.906 16H5a.38.38 0 0 1-.39-.393c.029-.628.023-2.066.4-2.541.842-1.107 4.188-2.787 4.188-5.328z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 22s1-1.425 1-2.137c0-.713-.533-.863-1-.863s-1 .15-1 .863C11 20.575 12 22 12 22ZM9.198 6.59c0-2.336 1.563-4.549 2.805-4.59 1.242.041 2.802 2.254 2.802 4.59v1.148c0 2.54 3.346 4.221 4.187 5.328.378.475.372 1.913.401 2.541a.38.38 0 0 1-.39.393h-3.906l-.684.819a.4.4 0 0 1-.337.181H9.927a.4.4 0 0 1-.337-.181L8.906 16H5a.38.38 0 0 1-.39-.393c.029-.628.023-2.066.4-2.541.842-1.107 4.188-2.787 4.188-5.328z"
    />
  </svg>
);
export default SvgSiRocket;
