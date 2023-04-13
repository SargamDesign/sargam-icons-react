import * as React from "react";
const SvgSiEditSimple = ({ title, titleId, ...props }) => (
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
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M19.92 5.777 18.223 4.08a.8.8 0 0 0-1.132 0L5.636 15.536 4.93 19.07l3.535-.707L19.92 6.909a.8.8 0 0 0 0-1.132Z"
    />
  </svg>
);
export default SvgSiEditSimple;
