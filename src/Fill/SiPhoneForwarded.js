import * as React from "react";
const SvgSiPhoneForwarded = ({ title, titleId, ...props }) => (
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
      d="M17.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 8H13a1 1 0 1 1 0-2h5.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
    />
    <path
      fill="currentColor"
      d="M13.684 16.73 7.18 10.27S13.684 5.537 6.25 3C6.252 3 3 3.115 3 7.846c0 2.308 1.626 4.846 3.716 6.808.368.348.76.735 1.17 1.142 2.317 2.292 5.26 5.204 8.12 5.204C20.768 21 21 17.654 21 17.654c-2.206-6.462-6.62-1.73-7.316-.923Z"
    />
  </svg>
);
export default SvgSiPhoneForwarded;
