import * as React from "react";
const SvgSiSunnySnowing = ({ title, titleId, ...props }) => (
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
      d="M12 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM1 12a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1Zm17 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM4.929 4.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 4.515Zm15.556 1.414a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM7 13c0-2.762 2.238-5 5-5s5 2.238 5 5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1Zm-3 2a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2H4Zm3 1a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm5-1a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2H12Zm3 1a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1Zm4 0a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H20a1 1 0 0 1-1-1Zm-7 2a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2H12Zm0 3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2H12Zm4-3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2H16Zm-8 0a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2H8Z"
    />
  </svg>
);
export default SvgSiSunnySnowing;
