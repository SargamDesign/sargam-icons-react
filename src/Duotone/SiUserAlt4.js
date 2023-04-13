import * as React from "react";
const SvgSiUserAlt4 = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle
      cx={12}
      cy={6}
      r={4}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <path
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 13a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9Z"
    />
  </svg>
);
export default SvgSiUserAlt4;
