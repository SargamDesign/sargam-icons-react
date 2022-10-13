import * as React from "react";
const SvgSiAlignLeftDetailed = ({ title, titleId, ...props }) => (
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
      d="M14 17.4v-1.8a1.6 1.6 0 0 0-1.6-1.6H7.6A1.6 1.6 0 0 0 6 15.6v1.8A1.6 1.6 0 0 0 7.6 19h4.8a1.6 1.6 0 0 0 1.6-1.6Zm8-9V6.6A1.6 1.6 0 0 0 20.4 5H7.6A1.6 1.6 0 0 0 6 6.6v1.8A1.6 1.6 0 0 0 7.6 10h12.8A1.6 1.6 0 0 0 22 8.4Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M2 2v20"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiAlignLeftDetailed;
