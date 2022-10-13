import * as React from "react";
const SvgSiUnlockMuted = ({ title, titleId, ...props }) => (
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
      d="M18 2a5 5 0 0 0-5 5v3H4.6c-.88 0-1.6.72-1.6 1.6v7C3 19.92 4.08 21 5.4 21h9.2c1.32 0 2.4-1.08 2.4-2.4v-7c0-.88-.72-1.6-1.6-1.6H15V7c0-1.658 1.342-3 3-3s3 1.342 3 3v3a1 1 0 1 0 2 0V7a5 5 0 0 0-5-5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiUnlockMuted;
