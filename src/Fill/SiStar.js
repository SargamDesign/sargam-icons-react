import * as React from "react";
const SvgSiStar = ({ title, titleId, ...props }) => (
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
      d="M12.954 1.7a1 1 0 0 0-1.908-.001l-2.184 6.92-6.861-.005a1 1 0 0 0-.566 1.825l5.498 3.762-2.067 6.546A1 1 0 0 0 6.4 21.86l5.6-4.006 5.594 4.007a1 1 0 0 0 1.536-1.114l-2.067-6.545 5.502-3.762a1 1 0 0 0-.566-1.826l-6.866.005-2.18-6.92Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiStar;
