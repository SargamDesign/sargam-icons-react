import * as React from "react";
const SvgSiAiSearch = ({ title, titleId, ...props }) => (
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
      d="M18 11a7 7 0 1 0-14 0 7 7 0 0 0 14 0m2 0a8.96 8.96 0 0 1-1.97 5.616l3.677 3.677a1 1 0 1 1-1.414 1.414l-3.677-3.677A9 9 0 1 1 20 11"
    />
    <path
      fill="currentColor"
      d="M10.104 8.507c.298-.871 1.585-.842 1.818.087l.296 1.188 1.188.297c.96.24.96 1.603 0 1.842l-1.188.297-.296 1.188c-.24.96-1.603.96-1.843 0l-.297-1.188-1.188-.296c-.96-.24-.96-1.603 0-1.843l1.188-.297.297-1.188zm.896 2.29a1 1 0 0 1-.203.203 1 1 0 0 1 .203.203 1 1 0 0 1 .203-.203 1 1 0 0 1-.203-.203"
    />
  </svg>
);
export default SvgSiAiSearch;
