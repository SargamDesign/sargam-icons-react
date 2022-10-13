import * as React from "react";
const SvgSiMoreSquareVert = ({ title, titleId, ...props }) => (
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
      d="M10 11.533c0-.846.687-1.533 1.533-1.533h.934c.846 0 1.533.687 1.533 1.533v.934c0 .846-.687 1.533-1.533 1.533h-.934A1.533 1.533 0 0 1 10 12.467v-.934Zm0 7c0-.847.687-1.533 1.533-1.533h.934c.846 0 1.533.686 1.533 1.533v.934c0 .847-.687 1.533-1.533 1.533h-.934A1.533 1.533 0 0 1 10 19.467v-.934Zm0-14C10 3.686 10.687 3 11.533 3h.934C13.313 3 14 3.687 14 4.533v.934C14 6.314 13.313 7 12.467 7h-.934A1.533 1.533 0 0 1 10 5.467v-.934Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiMoreSquareVert;
