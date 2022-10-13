import * as React from "react";
const SvgSiWebcam = ({ title, titleId, ...props }) => (
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
    <path d="M12 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1a9 9 0 0 0-1 17.945V21H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-5v-2.055A9.001 9.001 0 0 0 12 1Zm-3 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiWebcam;
