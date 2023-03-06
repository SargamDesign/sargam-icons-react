import * as React from "react";
const SvgSiNotificationsThick = ({ title, titleId, ...props }) => (
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
      d="M3 18a1 1 0 0 1-.894-1.447L4 12.763V10a8 8 0 1 1 16 0v2.764l1.894 3.789A1 1 0 0 1 21 18H3Zm9 4a4.002 4.002 0 0 1-3.874-3h7.748A4.002 4.002 0 0 1 12 22Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiNotificationsThick;
