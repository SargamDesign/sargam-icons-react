import * as React from "react";
const SvgSiBin = ({ title, titleId, ...props }) => (
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
      d="M19 7a1 1 0 0 1 1 1v11.6a3.4 3.4 0 0 1-3.4 3.4H7.4a3.4 3.4 0 0 1-3.395-3.226L4 19.6V8l.005-.103A1 1 0 0 1 5 7zM8 11v6h2v-6zm3 0v6h2v-6zm3 0v6h2v-6zm1.024-9.988A2.204 2.204 0 0 1 17 3.2V4h4a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2h4v-.8C7 1.988 7.988 1 9.2 1h5.6zM9.2 3c-.108 0-.2.092-.2.2V4h6v-.8a.205.205 0 0 0-.16-.196L14.8 3z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiBin;
