import * as React from "react";
const SvgSiInput = ({ title, titleId, ...props }) => (
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
      d="M3.4 5A1.4 1.4 0 0 0 2 6.4V9a1 1 0 0 1-2 0V6.4A3.4 3.4 0 0 1 3.4 3h17.2A3.4 3.4 0 0 1 24 6.4v11.2a3.4 3.4 0 0 1-3.4 3.4H3.4A3.4 3.4 0 0 1 0 17.6V15a1 1 0 1 1 2 0v2.6A1.4 1.4 0 0 0 3.4 19h17.2a1.4 1.4 0 0 0 1.4-1.4V6.4A1.4 1.4 0 0 0 20.6 5H3.4Z"
    />
    <path
      fill="currentColor"
      d="M12.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L14.586 13H1a1 1 0 1 1 0-2h13.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
    />
  </svg>
);
export default SvgSiInput;
