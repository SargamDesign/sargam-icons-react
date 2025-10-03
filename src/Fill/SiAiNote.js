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
      d="M16 11.796a1 1 0 0 0 .203.203 1 1 0 0 0-.203.203 1 1 0 0 0-.203-.203 1 1 0 0 0 .203-.203"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.6 4A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4zM5 14a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm11.922-4.406c-.233-.93-1.52-.958-1.818-.087l-.025.087-.297 1.187-1.187.297c-.96.24-.96 1.603 0 1.843l1.187.297.297 1.187c.24.96 1.603.96 1.843 0l.297-1.187 1.187-.297c.959-.24.96-1.603 0-1.843l-1.187-.297zM5 11a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm0-3a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiAiNote;
