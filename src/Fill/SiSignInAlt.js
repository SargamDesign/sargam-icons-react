import * as React from "react";
const SvgSiSignInAlt = ({ title, titleId, ...props }) => (
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
      d="M13.6 2a1 1 0 0 0 0 2h5A1.4 1.4 0 0 1 20 5.4v13.2a1.4 1.4 0 0 1-1.4 1.4H13a1 1 0 1 0 0 2h5.6a3.4 3.4 0 0 0 3.4-3.4V5.4A3.4 3.4 0 0 0 18.6 2z"
    />
    <path
      fill="currentColor"
      d="M12.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L14.586 13H3a1 1 0 1 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414"
    />
  </svg>
);
export default SvgSiSignInAlt;
