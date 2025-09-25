import * as React from "react";
const SvgSiHourglass = ({ title, titleId, ...props }) => (
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
    <path fill="currentColor" fillOpacity={0.16} d="M7 22v-4l5-1 5 1v4z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m12 12 3.136-2.391C16.318 8.7 17 7.265 17 5.735V2H7v3.735c0 1.53.682 2.965 1.864 3.874zm0 0-3.136 2.391C7.682 15.3 7 16.735 7 18.265V22h10v-3.735c0-1.53-.682-2.965-1.864-3.874zm-5 6 5-1 5 1M5 2h14M5 22h14"
    />
  </svg>
);
export default SvgSiHourglass;
