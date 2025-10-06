import * as React from "react";
const SvgSiReleaseNotes = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9 8 2 2 4-4M9 16l2 2 4-4M4 20.6V3.4A2.4 2.4 0 0 1 6.4 1h11.2A2.4 2.4 0 0 1 20 3.4v17.2a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 20.6"
    />
  </svg>
);
export default SvgSiReleaseNotes;
