import * as React from "react";
const SvgSiMic = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 23v-3m0 0a8 8 0 0 1-8-8m8 8a8 8 0 0 0 8-8m-8 5c-2.75 0-5-2.172-5-4.828V5.828C7 3.172 9.25 1 12 1s5 2.172 5 4.828v6.344C17 14.828 14.75 17 12 17"
    />
  </svg>
);
export default SvgSiMic;
