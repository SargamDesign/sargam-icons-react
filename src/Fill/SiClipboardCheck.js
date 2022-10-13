import * as React from "react";
const SvgSiClipboardCheck = ({ title, titleId, ...props }) => (
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
      d="M7 1.8V3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H17V1.8A1.8 1.8 0 0 0 15.2 0H8.8A1.8 1.8 0 0 0 7 1.8Zm8 .2H9v2h6V2Zm1.814 8.581a1 1 0 1 0-1.628-1.162l-4.314 6.04-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126l5-7Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiClipboardCheck;
