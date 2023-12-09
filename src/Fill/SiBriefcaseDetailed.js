import * as React from "react";
const SvgSiBriefcaseDetailed = ({ title, titleId, ...props }) => (
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
      d="M8 4.8V7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7H16V4.8A1.8 1.8 0 0 0 14.2 3H9.8A1.8 1.8 0 0 0 8 4.8m2 .2v2h4V5zm.8 6.5a1.3 1.3 0 0 0-1.3 1.3v.2H3v2h6.5v.2a1.3 1.3 0 0 0 1.3 1.3h2.4a1.3 1.3 0 0 0 1.3-1.3V15H21v-2h-6.5v-.2a1.3 1.3 0 0 0-1.3-1.3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiBriefcaseDetailed;
