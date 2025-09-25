import * as React from "react";
const SvgSiPin = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M6.374 4.809a8.017 8.017 0 0 1 11.258 0c3.15 3.098 3.15 8.056.041 11.113l-5.67 5.578-5.671-5.578a7.74 7.74 0 0 1 0-11.072zM12 7.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M17.632 4.809c3.15 3.098 3.15 8.056.042 11.113L12.003 21.5 6.33 15.922a7.74 7.74 0 0 1 0-11.072l.042-.041a8.017 8.017 0 0 1 11.259 0m0 0q-.063-.063 0 0M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
);
export default SvgSiPin;
