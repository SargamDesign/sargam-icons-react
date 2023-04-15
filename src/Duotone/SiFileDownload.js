import * as React from "react";
const SvgSiFileDownload = ({ title, titleId, ...props }) => (
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
      d="M8.53 11.47a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM12 16l-.53.53a.75.75 0 0 0 1.06 0L12 16Zm4.53-3.47a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM12.75 4a.75.75 0 0 0-1.5 0h1.5Zm7 13a.75.75 0 0 0-1.5 0h1.5Zm-14 0a.75.75 0 0 0-1.5 0h1.5Zm1.72-4.47 4 4 1.06-1.06-4-4-1.06 1.06Zm5.06 4 4-4-1.06-1.06-4 4 1.06 1.06Zm.22-.53V4h-1.5v12h1.5Zm5.5 1v.6h1.5V17h-1.5Zm0 .6c0 .916-.734 1.65-1.65 1.65v1.5a3.144 3.144 0 0 0 3.15-3.15h-1.5Zm-1.65 1.65H7.4v1.5h9.2v-1.5Zm-9.2 0c-.916 0-1.65-.734-1.65-1.65h-1.5a3.144 3.144 0 0 0 3.15 3.15v-1.5ZM5.75 17.6V17h-1.5v.6h1.5Z"
    />
  </svg>
);
export default SvgSiFileDownload;
