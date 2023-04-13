import * as React from "react";
const SvgSiPlayForward = ({ title, titleId, ...props }) => (
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
      d="M4.573 4.18A1 1 0 0 0 3 5v14a1 1 0 0 0 1.573.82L10 16.02V19a1 1 0 0 0 1.573.82l10-7a1 1 0 0 0 0-1.64l-10-7A1 1 0 0 0 10 5v2.98l-5.427-3.8ZM12 9.38l2.573 1.8a1 1 0 0 1 0 1.64L12 14.62v2.46L19.256 12 12 6.92v2.46Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiPlayForward;
