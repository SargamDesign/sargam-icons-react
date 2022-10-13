import * as React from "react";
const SvgSiShieldTip = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.887 21.98c.076.026.15.027.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728ZM13.008 7a1 1 0 0 1-1 1H12a1 1 0 1 1 0-2h.008a1 1 0 0 1 1 1Zm-1 9a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiShieldTip;
