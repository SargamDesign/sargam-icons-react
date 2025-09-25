import * as React from "react";
const SvgSiFlagAlt4 = ({ title, titleId, ...props }) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M3 3v18M3 4.927l2.727-.668a9.03 9.03 0 0 1 6.11.657l.107.052a9.03 9.03 0 0 0 5.99.685l3.061-.705L21 15.064l-3.065.705a9.03 9.03 0 0 1-5.991-.684l-.106-.052a9.03 9.03 0 0 0-6.111-.657L3 15.044z"
    />
  </svg>
);
export default SvgSiFlagAlt4;
