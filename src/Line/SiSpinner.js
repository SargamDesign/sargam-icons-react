import * as React from "react";
const SvgSiSpinner = ({ title, titleId, ...props }) => (
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
      d="M12 2v4.167m0 11.666V22m10-10h-4.166M6.167 12H2m17.209-7.208-2.917 2.917m-8.584 8.583-2.917 2.916m14.418 0-2.917-2.916M7.708 7.709 4.791 4.792"
    />
  </svg>
);
export default SvgSiSpinner;
