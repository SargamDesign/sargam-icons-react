import * as React from "react";
const SvgSiEditDetailedAlt = ({ title, titleId, ...props }) => (
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
      d="M19.424 4.575a2.5 2.5 0 0 0-3.535 0l-1.06 1.061 3.535 3.536-.354.353-.353.354-3.536-3.536-8.839 8.839a.5.5 0 0 0-.136.255l-.708 3.536a.5.5 0 0 0 .589.588l3.535-.707a.5.5 0 0 0 .256-.137L19.424 8.111a2.5 2.5 0 0 0 0-3.536Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiEditDetailedAlt;
