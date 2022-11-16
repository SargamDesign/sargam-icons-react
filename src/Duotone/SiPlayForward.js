import * as React from "react";
const SvgSiPlayForward = ({ title, titleId, ...props }) => (
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
    <path d="m11 5 10 7-10 7v-4.867L13 12l-2-2.313V5Z" fill="#fff" />
    <path
      d="M11 9.688V5l10 7-10 7v-4.867"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m4 5 10 7-10 7V5Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSiPlayForward;
