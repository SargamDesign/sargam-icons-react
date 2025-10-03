import * as React from "react";
const SvgSiAiBriefcase = ({ title, titleId, ...props }) => (
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
      d="M12.014 13.148c.103.412.425.734.837.837l.056.014-.056.015a1.15 1.15 0 0 0-.837.837l-.015.056-.014-.056a1.15 1.15 0 0 0-.837-.837l-.056-.015.056-.014a1.15 1.15 0 0 0 .837-.837l.014-.056z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.2 3A1.8 1.8 0 0 1 16 4.8V7h3.6A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7H8V4.8A1.8 1.8 0 0 1 9.8 3zm-1.116 8.265c-.35-1.02-1.82-1.021-2.169 0l-.031.105-.303 1.211-1.21.303c-1.162.29-1.162 1.94 0 2.231l1.21.302.303 1.213c.29 1.16 1.94 1.16 2.231 0l.303-1.212 1.212-.303c1.16-.29 1.16-1.94 0-2.231l-1.213-.304-.302-1.21zM10 7h4V5h-4z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiAiBriefcase;
