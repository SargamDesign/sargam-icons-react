import * as React from "react";
const SvgSiPullRequest = ({ title, titleId, ...props }) => (
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
      d="M8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18 16v-5.6A4.4 4.4 0 0 0 13.6 6H11m7 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4M11 6l2-2m-2 2 2 2m-7 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
  </svg>
);
export default SvgSiPullRequest;
