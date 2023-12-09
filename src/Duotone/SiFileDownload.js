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
      d="M8.53 11.47a.75.75 0 0 0-1.06 1.06zM12 16l-.53.53a.75.75 0 0 0 1.06 0zm4.53-3.47a.75.75 0 1 0-1.06-1.06zM12.75 4a.75.75 0 0 0-1.5 0zm7 13a.75.75 0 0 0-1.5 0zm-14 0a.75.75 0 0 0-1.5 0zm1.72-4.47 4 4 1.06-1.06-4-4zm5.06 4 4-4-1.06-1.06-4 4zm.22-.53V4h-1.5v12zm5.5 1v.6h1.5V17zm0 .6c0 .916-.734 1.65-1.65 1.65v1.5a3.144 3.144 0 0 0 3.15-3.15zm-1.65 1.65H7.4v1.5h9.2zm-9.2 0c-.916 0-1.65-.734-1.65-1.65h-1.5a3.144 3.144 0 0 0 3.15 3.15zM5.75 17.6V17h-1.5v.6z"
    />
  </svg>
);
export default SvgSiFileDownload;
