import * as React from "react";
const SvgSiArrowDownwardCircle = ({ title, titleId, ...props }) => (
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
      fillOpacity={0.16}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <path
      fill="currentColor"
      d="M8.53 11.47a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM12 16l-.53.53a.75.75 0 0 0 1.06 0L12 16Zm4.53-3.47a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM12.75 8a.75.75 0 0 0-1.5 0h1.5Zm8.5 4A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5Zm-4.53 9.78 4 4 1.06-1.06-4-4-1.06 1.06Zm5.06 4 4-4-1.06-1.06-4 4 1.06 1.06Zm.22-.53V8h-1.5v8h1.5Z"
    />
  </svg>
);
export default SvgSiArrowDownwardCircle;
