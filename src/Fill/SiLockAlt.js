import * as React from "react";
const SvgSiLockAlt = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v4h2.4c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6H7V7Zm8 0v4H9V7c0-1.658 1.342-3 3-3s3 1.342 3 3Zm-5 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiLockAlt;
