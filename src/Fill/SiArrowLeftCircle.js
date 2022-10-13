import * as React from "react";
const SvgSiArrowLeftCircle = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-.707-14.707-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 13H16a1 1 0 1 0 0-2h-5.586l2.293-2.293a1 1 0 0 0-1.414-1.414Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiArrowLeftCircle;
