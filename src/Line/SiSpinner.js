import * as React from "react";
const SvgSiSpinner = ({ title, titleId, ...props }) => (
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
      d="M12 2v4.167m0 11.666V22m10-10h-4.166M6.167 12H2m17.209-7.208-2.917 2.917m-8.584 8.583-2.917 2.916m14.418 0-2.917-2.916M7.708 7.709 4.791 4.792"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgSiSpinner;
