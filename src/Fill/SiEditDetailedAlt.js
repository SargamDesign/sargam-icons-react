import * as React from "react";
const SvgSiEditDetailedAlt = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.425 4.575a2.5 2.5 0 0 0-3.536 0l-1.06 1.061 3.535 3.536-.354.353-.353.354-3.536-3.536-8.838 8.839a.5.5 0 0 0-.137.255l-.707 3.536a.5.5 0 0 0 .588.588l3.536-.707a.5.5 0 0 0 .255-.137L19.425 8.111a2.5 2.5 0 0 0 0-3.536Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiEditDetailedAlt;
