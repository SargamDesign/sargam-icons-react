import * as React from "react";
const SvgSiBriefcaseMedical = ({ title, titleId, ...props }) => (
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
      d="M19.6 7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M9 14h6m-3 3v-6"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M15 7V4.8a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V7"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </svg>
);
export default SvgSiBriefcaseMedical;
