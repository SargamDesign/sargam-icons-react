import * as React from "react";
const SvgSiAlignLeftSimple = ({ title, titleId, ...props }) => (
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
      d="M2 2a1 1 0 0 1 2 0v20a1 1 0 1 1-2 0zm5 8.6v2.8A1.6 1.6 0 0 0 8.6 15h11.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 20.4 9H8.6A1.6 1.6 0 0 0 7 10.6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiAlignLeftSimple;
