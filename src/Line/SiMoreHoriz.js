import * as React from "react";
const SvgSiMoreHoriz = ({ title, titleId, ...props }) => (
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
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </svg>
);
export default SvgSiMoreHoriz;
