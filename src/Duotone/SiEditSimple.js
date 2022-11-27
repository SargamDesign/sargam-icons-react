import * as React from "react";
const SvgSiEditSimple = ({ title, titleId, ...props }) => (
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
      d="M19.92 5.777 18.221 4.08a.8.8 0 0 0-1.13 0L5.635 15.536l-.707 3.535 3.535-.707L19.92 6.909a.8.8 0 0 0 0-1.132Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSiEditSimple;
