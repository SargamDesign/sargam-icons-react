import * as React from "react";
const SvgSiPlayForward = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 9.688V5l10 7-10 7v-4.867"
    />
    <path
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4 5 10 7-10 7V5Z"
    />
  </svg>
);
export default SvgSiPlayForward;
