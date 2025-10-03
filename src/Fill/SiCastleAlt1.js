import * as React from "react";
const SvgSiCastleAlt1 = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M9.2 1A1.8 1.8 0 0 1 11 2.8V5h2V2.8A1.8 1.8 0 0 1 14.8 1h2.4A1.8 1.8 0 0 1 19 2.8V7h4a1 1 0 1 1 0 2v10.6a3.4 3.4 0 0 1-3.4 3.4H4.5C2.65 23 1 21.458 1 19.553V9a1 1 0 0 1 0-2h4V2.8A1.8 1.8 0 0 1 6.8 1zM3 19.553C3 20.298 3.699 21 4.5 21h.802A3.4 3.4 0 0 1 5 19.6V9H3zM10.8 17A1.8 1.8 0 0 0 9 18.8V21h2v-2h2v2h2v-2.2a1.8 1.8 0 0 0-1.8-1.8zm8.2 2.6c0 .499-.108.973-.302 1.4h.902a1.4 1.4 0 0 0 1.4-1.4V9h-2zM10 13a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm1-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiCastleAlt1;
