import * as React from "react";
const SvgSiMovie = ({ title, titleId, ...props }) => (
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
      fillOpacity={0.16}
      d="M23 9H1v9.6A2.4 2.4 0 0 0 3.4 21h17.2a2.4 2.4 0 0 0 2.4-2.4V9Z"
    />
    <path
      fill="currentColor"
      d="M14.289 8.763a.75.75 0 1 0 1.422.474l-1.422-.474Zm3.423-5.526a.75.75 0 1 0-1.424-.474l1.424.474ZM6.288 8.763a.75.75 0 1 0 1.424.474l-1.424-.474Zm3.424-5.526a.75.75 0 1 0-1.424-.474l1.424.474ZM3.4 3.75h17.2v-1.5H3.4v1.5Zm17.2 0c.911 0 1.65.739 1.65 1.65h1.5a3.15 3.15 0 0 0-3.15-3.15v1.5Zm1.65 1.65v13.2h1.5V5.4h-1.5Zm0 13.2a1.65 1.65 0 0 1-1.65 1.65v1.5a3.15 3.15 0 0 0 3.15-3.15h-1.5Zm-1.65 1.65H3.4v1.5h17.2v-1.5Zm-17.2 0a1.65 1.65 0 0 1-1.65-1.65H.25a3.15 3.15 0 0 0 3.15 3.15v-1.5ZM1.75 18.6V5.4H.25v13.2h1.5Zm0-13.2c0-.911.739-1.65 1.65-1.65v-1.5A3.15 3.15 0 0 0 .25 5.4h1.5ZM1 9.75h22v-1.5H1v1.5Zm14.711-.513 2-6-1.422-.474-2 6 1.422.474Zm-8 0 2-6-1.423-.474-2 6 1.424.474Z"
    />
  </svg>
);
export default SvgSiMovie;
