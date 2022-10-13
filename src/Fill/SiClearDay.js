import * as React from "react";
const SvgSiClearDay = ({ title, titleId, ...props }) => (
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
      d="M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Zm0 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM1 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Zm18 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM7.047 16.953a1 1 0 0 1 0 1.414l-1.41 1.41a1 1 0 1 1-1.414-1.414l1.41-1.41a1 1 0 0 1 1.414 0Zm12.73-12.73a1 1 0 0 1 0 1.414l-1.41 1.41a1 1 0 1 1-1.414-1.414l1.41-1.41a1 1 0 0 1 1.414 0Zm-2.824 12.73a1 1 0 0 1 1.414 0l1.41 1.41a1 1 0 1 1-1.414 1.414l-1.41-1.41a1 1 0 0 1 0-1.414ZM4.223 4.223a1 1 0 0 1 1.414 0l1.41 1.41a1 1 0 0 1-1.414 1.414l-1.41-1.41a1 1 0 0 1 0-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiClearDay;
