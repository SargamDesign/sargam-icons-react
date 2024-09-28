import * as React from "react";
const SvgSiAlignBottomSimple = ({ title, titleId, ...props }) => (
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
      d="M2 22a1 1 0 1 1 0-2h20a1 1 0 1 1 0 2zm8.6-5h2.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 13.4 2h-2.8A1.6 1.6 0 0 0 9 3.6v11.8a1.6 1.6 0 0 0 1.6 1.6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiAlignBottomSimple;
