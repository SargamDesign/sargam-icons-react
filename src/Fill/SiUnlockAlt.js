import * as React from "react";
const SvgSiUnlockAlt = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v4h2.4c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6H15V7c0-1.658-1.342-3-3-3S9 5.342 9 7a1 1 0 0 1-2 0Zm3 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiUnlockAlt;
