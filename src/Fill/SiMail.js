import * as React from "react";
const SvgSiMail = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M20.8 4H3.2C2.54 4 2 4.54 2 5.2v12.4C2 18.92 3.08 20 4.4 20h15.2c1.32 0 2.4-1.08 2.4-2.4V5.2c0-.66-.54-1.2-1.2-1.2M5.65 6.3a1 1 0 1 0-1.3 1.52l6.87 5.89a1.2 1.2 0 0 0 .78.285 1.2 1.2 0 0 0 .78-.286l6.87-5.89a1 1 0 1 0-1.3-1.518L12 11.744z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiMail;
