import * as React from "react";
const SvgSiGridView = ({ title, titleId, ...props }) => (
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
      d="M8.4 4H5.6A1.6 1.6 0 0 0 4 5.6v2.8A1.6 1.6 0 0 0 5.6 10h2.8A1.6 1.6 0 0 0 10 8.4V5.6A1.6 1.6 0 0 0 8.4 4Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M8.4 14H5.6A1.6 1.6 0 0 0 4 15.6v2.8A1.6 1.6 0 0 0 5.6 20h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 14Zm10-10h-2.8A1.6 1.6 0 0 0 14 5.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8A1.6 1.6 0 0 0 20 8.4V5.6A1.6 1.6 0 0 0 18.4 4Z"
      fill="#fff"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M18.4 14h-2.8a1.6 1.6 0 0 0-1.6 1.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8a1.6 1.6 0 0 0-1.6-1.6Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </svg>
);
export default SvgSiGridView;
