import * as React from "react";
const SvgSiArchiveAlt = ({ title, titleId, ...props }) => (
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
      d="M0 4.6A2.6 2.6 0 0 1 2.6 2h18.8A2.6 2.6 0 0 1 24 4.6v.8A2.6 2.6 0 0 1 21.4 8h-.486L20 18.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3.086 8H2.6A2.6 2.6 0 0 1 0 5.4zM2.6 4a.6.6 0 0 0-.6.6v.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6v-.8a.6.6 0 0 0-.6-.6zm5.693 6.293a1 1 0 0 1 1.414 0L12 12.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13.414 14l2.293 2.293a1 1 0 0 1-1.414 1.414L12 15.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 14l-2.293-2.293a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiArchiveAlt;
