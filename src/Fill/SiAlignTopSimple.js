import * as React from "react";
const SvgSiAlignTopSimple = ({ title, titleId, ...props }) => (
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
      fill="currentColor"
      fillRule="evenodd"
      d="M2 2a1 1 0 0 0 0 2h20a1 1 0 1 0 0-2zm8.6 5h2.8A1.6 1.6 0 0 1 15 8.6v11.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 20.4V8.6A1.6 1.6 0 0 1 10.6 7"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiAlignTopSimple;
