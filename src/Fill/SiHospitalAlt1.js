import * as React from "react";
const SvgSiHospitalAlt1 = ({ title, titleId, ...props }) => (
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
      d="M19 1a1 1 0 1 1 0 2v2h4a1 1 0 1 1 0 2v12.6a3.4 3.4 0 0 1-3.4 3.4H8.4q-.284-.001-.557-.047H4.4a3.4 3.4 0 0 1-3.4-3.4V7a1 1 0 0 1 0-2h4V3a1 1 0 0 1 0-2zm-8.2 17A1.8 1.8 0 0 0 9 19.8V22h2v-2h2v2h2v-2.2a1.8 1.8 0 0 0-1.8-1.8zm8.2 1.6c0 .499-.108.973-.302 1.4h.902a1.4 1.4 0 0 0 1.4-1.4V7h-2zm-16-.047a1.4 1.4 0 0 0 1.4 1.4h.883A3.4 3.4 0 0 1 5 19.6V7H3zM12 5.5a1 1 0 0 0-1 1v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiHospitalAlt1;
