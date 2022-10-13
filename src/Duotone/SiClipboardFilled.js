import * as React from "react";
const SvgSiClipboardFilled = ({ title, titleId, ...props }) => (
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
      d="M21 5.4A2.4 2.4 0 0 0 18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M15.2 1H8.8a.8.8 0 0 0-.8.8v2.4a.8.8 0 0 0 .8.8h6.4a.8.8 0 0 0 .8-.8V1.8a.8.8 0 0 0-.8-.8Z"
      fill="#fff"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M7 13h10M7 10h10M7 16h6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiClipboardFilled;
