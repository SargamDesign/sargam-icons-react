import * as React from "react";
const SvgSiInsights = ({ title, titleId, ...props }) => (
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
      d="M21 21H3.8a.8.8 0 0 1-.8-.8V3"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M5.47 13.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM10 10l.53-.53a.75.75 0 0 0-1.06 0L10 10Zm4 4-.53.53a.75.75 0 0 0 1.06 0L14 14Zm7.53-6.47a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-15 7 4-4-1.06-1.06-4 4 1.06 1.06Zm2.94-4 4 4 1.06-1.06-4-4-1.06 1.06Zm5.06 4 7-7-1.06-1.06-7 7 1.06 1.06Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiInsights;
