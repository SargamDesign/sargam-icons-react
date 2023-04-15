import * as React from "react";
const SvgSiBriefcaseMedical = ({ title, titleId, ...props }) => (
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
      d="M19.6 7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7Z"
    />
    <path
      fill="currentColor"
      d="M9 13.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5ZM11.25 17a.75.75 0 0 0 1.5 0h-1.5Zm1.5-6a.75.75 0 0 0-1.5 0h1.5ZM4.4 7.75h15.2v-1.5H4.4v1.5Zm15.2 0c.911 0 1.65.739 1.65 1.65h1.5a3.15 3.15 0 0 0-3.15-3.15v1.5Zm1.65 1.65v9.2h1.5V9.4h-1.5Zm0 9.2a1.65 1.65 0 0 1-1.65 1.65v1.5a3.15 3.15 0 0 0 3.15-3.15h-1.5Zm-1.65 1.65H4.4v1.5h15.2v-1.5Zm-15.2 0a1.65 1.65 0 0 1-1.65-1.65h-1.5a3.15 3.15 0 0 0 3.15 3.15v-1.5ZM2.75 18.6V9.4h-1.5v9.2h1.5Zm0-9.2c0-.911.739-1.65 1.65-1.65v-1.5A3.15 3.15 0 0 0 1.25 9.4h1.5ZM9 14.75h6v-1.5H9v1.5ZM12.75 17v-6h-1.5v6h1.5ZM9.8 4.75h4.4v-1.5H9.8v1.5Zm4.4 0a.05.05 0 0 1 .05.05h1.5a1.55 1.55 0 0 0-1.55-1.55v1.5Zm.05.05V7h1.5V4.8h-1.5ZM9.75 7V4.8h-1.5V7h1.5Zm0-2.2a.05.05 0 0 1 .05-.05v-1.5A1.55 1.55 0 0 0 8.25 4.8h1.5Z"
    />
  </svg>
);
export default SvgSiBriefcaseMedical;
