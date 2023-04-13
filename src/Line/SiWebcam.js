import * as React from "react";
const SvgSiWebcam = ({ title, titleId, ...props }) => (
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
      d="M11.25 22a.75.75 0 0 0 1.5 0h-1.5ZM6 22.75h12v-1.5H6v1.5Zm6.75-.75v-4h-1.5v4h1.5Zm6.5-12A7.25 7.25 0 0 1 12 17.25v1.5A8.75 8.75 0 0 0 20.75 10h-1.5ZM12 17.25A7.25 7.25 0 0 1 4.75 10h-1.5A8.75 8.75 0 0 0 12 18.75v-1.5ZM4.75 10A7.25 7.25 0 0 1 12 2.75v-1.5A8.75 8.75 0 0 0 3.25 10h1.5ZM12 2.75A7.25 7.25 0 0 1 19.25 10h1.5A8.75 8.75 0 0 0 12 1.25v1.5ZM13.25 10c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 10h-1.5ZM12 11.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 12.75v-1.5ZM10.75 10c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 10h1.5ZM12 8.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 7.25v1.5Z"
    />
  </svg>
);
export default SvgSiWebcam;
