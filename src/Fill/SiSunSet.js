import * as React from "react";
const SvgSiSunSet = ({ title, titleId, ...props }) => (
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
      d="M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM0 13a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm20 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm.485-8.485a1 1 0 0 1 0 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414l1.414-1.414a1 1 0 0 1 1.414 0Zm-16.97 0a1 1 0 0 1 1.414 0l1.414 1.414A1 1 0 1 1 4.93 7.343L3.515 5.93a1 1 0 0 1 0-1.414ZM7 21a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm13-4h-2.257A6.96 6.96 0 0 0 19 13c0-3.862-3.138-7-7-7s-7 3.138-7 7c0 1.483.459 2.865 1.247 4H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiSunSet;
