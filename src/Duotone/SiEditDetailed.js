import * as React from "react";
const SvgSiEditDetailed = ({ title, titleId, ...props }) => (
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
      d="m4.929 19.071.707-3.535 9.192-9.193 2.829 2.829-9.193 9.192z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m14.828 6.343 2.829 2.829m.566-5.091 1.697 1.697a.8.8 0 0 1 0 1.13L8.464 18.365l-3.535.707.707-3.535L17.091 4.08a.8.8 0 0 1 1.132 0"
    />
  </svg>
);
export default SvgSiEditDetailed;
