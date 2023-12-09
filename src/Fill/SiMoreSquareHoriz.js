import * as React from "react";
const SvgSiMoreSquareHoriz = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M11.533 14A1.533 1.533 0 0 1 10 12.467v-.934c0-.846.687-1.533 1.533-1.533h.934c.846 0 1.533.687 1.533 1.533v.934c0 .846-.687 1.533-1.533 1.533zm7 0A1.533 1.533 0 0 1 17 12.467v-.934c0-.846.686-1.533 1.533-1.533h.934c.847 0 1.533.687 1.533 1.533v.934c0 .846-.686 1.533-1.533 1.533zm-14 0A1.533 1.533 0 0 1 3 12.467v-.934C3 10.687 3.687 10 4.533 10h.934C6.314 10 7 10.687 7 11.533v.934C7 13.313 6.314 14 5.467 14z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiMoreSquareHoriz;
