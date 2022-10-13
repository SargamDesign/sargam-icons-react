import * as React from "react";
const SvgSiAlignHorizCenterSimple = ({ title, titleId, ...props }) => (
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
      d="M20 13.4v-2.8A1.6 1.6 0 0 0 18.4 9H5.6A1.6 1.6 0 0 0 4 10.6v2.8A1.6 1.6 0 0 0 5.6 15h12.8a1.6 1.6 0 0 0 1.6-1.6Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M12 2v7m0 6v7"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiAlignHorizCenterSimple;
