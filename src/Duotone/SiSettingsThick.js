import * as React from "react";
const SvgSiSettingsThick = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.38 9.49h-1.87c-.05-.12-.09-.24-.14-.35l1.32-1.32c.62-.62.62-1.64 0-2.26l-1.27-1.27c-.62-.62-1.64-.62-2.26 0l-1.32 1.32c-.12-.05-.23-.1-.35-.14V3.6c0-.88-.72-1.6-1.6-1.6h-1.8c-.88 0-1.6.72-1.6 1.6v1.87c-.12.05-.24.09-.35.14L7.82 4.29c-.62-.62-1.64-.62-2.26 0L4.29 5.56c-.62.62-.62 1.64 0 2.26l1.32 1.32c-.05.12-.1.23-.14.35H3.6c-.88 0-1.6.72-1.6 1.6v1.8c0 .88.72 1.6 1.6 1.6h1.87c.05.12.09.24.14.35l-1.32 1.32c-.62.62-.62 1.64 0 2.26l1.27 1.27c.62.62 1.64.62 2.26 0l1.32-1.32c.12.05.23.1.35.14v1.87c0 .88.72 1.6 1.6 1.6h1.8c.88 0 1.6-.72 1.6-1.6v-1.87c.12-.05.24-.09.35-.14l1.32 1.32c.62.62 1.64.62 2.26 0l1.27-1.27c.62-.62.62-1.64 0-2.26l-1.32-1.32c.05-.12.1-.23.14-.35h1.87c.88 0 1.6-.72 1.6-1.6v-1.8c0-.88-.72-1.6-1.6-1.6Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </svg>
);
export default SvgSiSettingsThick;
