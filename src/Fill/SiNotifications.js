import * as React from "react";
const SvgSiNotifications = ({ title, titleId, ...props }) => (
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
      d="M12 1.25a1.75 1.75 0 0 0-1.737 1.967A7.003 7.003 0 0 0 5 10v7H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-7a7.003 7.003 0 0 0-5.263-6.783A1.75 1.75 0 0 0 12 1.25ZM12 23a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiNotifications;
