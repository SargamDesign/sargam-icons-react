import * as React from "react";
const SvgSiAiNote = ({ title, titleId, ...props }) => (
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
      d="M14.905 15.79a1 1 0 0 0 .203.202 1 1 0 0 0-.203.203 1 1 0 0 0-.203-.203 1 1 0 0 0 .203-.203"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 0a3 3 0 0 1 3 3h3.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H9a3 3 0 0 1 3-3m3.827 13.587c-.232-.93-1.52-.959-1.817-.087l-.026.087-.296 1.187-1.188.297c-.96.24-.96 1.603 0 1.843l1.188.297.296 1.187c.24.96 1.603.96 1.843 0l.297-1.187 1.188-.297c.958-.24.958-1.603 0-1.843l-1.188-.297zM7 15a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0-3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm5-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiAiNote;
