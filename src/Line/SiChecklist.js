import * as React from "react";
const SvgSiChecklist = ({ title, titleId, ...props }) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m2 8 2 2 4-4m4 2h10M2 16l2 2 4-4m4 2h10"
    />
  </svg>
);
export default SvgSiChecklist;
