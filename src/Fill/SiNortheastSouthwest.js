import * as React from "react";
const SvgSiNortheastSouthwest = ({ title, titleId, ...props }) => (
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
      d="M19.364 11.293a1 1 0 0 1-2 0V8.05L8.05 17.363h3.243a1 1 0 0 1 0 2H5.636a1 1 0 0 1-1-1v-5.656a1 1 0 1 1 2 0v3.242l9.314-9.313h-3.243a1 1 0 1 1 0-2h5.656a1 1 0 0 1 1 1z"
    />
  </svg>
);
export default SvgSiNortheastSouthwest;
