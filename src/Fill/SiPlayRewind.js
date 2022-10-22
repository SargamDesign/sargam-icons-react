import * as React from "react";
const SvgSiPlayRewind = ({ title, titleId, ...props }) => (
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
      d="M14 5a1 1 0 0 0-1.573-.82l-10 7a1 1 0 0 0 0 1.64l10 7A1 1 0 0 0 14 19v-2.98l5.427 3.8A1 1 0 0 0 21 19V5a1 1 0 0 0-1.573-.82L14 7.98V5Zm-2 4.38V6.92L4.744 12 12 17.08v-2.46l-2.573-1.8a1 1 0 0 1 0-1.64L12 9.38Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiPlayRewind;
