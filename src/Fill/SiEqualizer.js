import * as React from "react";
const SvgSiEqualizer = ({ title, titleId, ...props }) => (
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
      d="M18 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4ZM2 7a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H2Zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H2Zm8 0a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Zm7 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM2 15a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H2Zm7 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm9-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4ZM1 20a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Zm9-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Zm7 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm0-12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiEqualizer;
