import * as React from "react";
const SvgSiAiInventory = ({ title, titleId, ...props }) => (
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
      d="M12.014 12.65c.103.411.425.733.837.836l.056.014-.056.015a1.15 1.15 0 0 0-.837.837l-.015.056-.014-.056a1.15 1.15 0 0 0-.837-.837l-.056-.015.056-.014a1.15 1.15 0 0 0 .837-.837l.014-.056z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.4 2A2.6 2.6 0 0 1 24 4.6v.8A2.6 2.6 0 0 1 21.4 8H21v10.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V8h-.4A2.6 2.6 0 0 1 0 5.4v-.8A2.6 2.6 0 0 1 2.6 2zm-8.316 8.766c-.35-1.021-1.82-1.021-2.169 0l-.031.105-.303 1.211-1.21.303c-1.162.29-1.162 1.94 0 2.231l1.21.302.303 1.213c.29 1.16 1.94 1.16 2.231 0l.303-1.212 1.212-.303c1.16-.29 1.16-1.94 0-2.231l-1.213-.304-.302-1.21zM2.6 4a.6.6 0 0 0-.6.6v.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6v-.8a.6.6 0 0 0-.6-.6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiAiInventory;
