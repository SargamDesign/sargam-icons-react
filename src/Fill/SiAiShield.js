import * as React from "react";
const SvgSiAiShield = ({ title, titleId, ...props }) => (
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
      d="M12 10.797a1 1 0 0 0 .203.203 1 1 0 0 0-.203.203 1 1 0 0 0-.203-.203 1 1 0 0 0 .203-.203"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m12.097 2.012 7.6 1.903a.4.4 0 0 1 .303.389v6.949c0 7.764-6.916 10.397-7.888 10.728a.33.33 0 0 1-.224 0C10.918 21.64 4 18.938 4 11.252v-6.95a.4.4 0 0 1 .303-.388l7.6-1.903a.4.4 0 0 1 .194 0m.825 6.583c-.232-.93-1.52-.96-1.818-.087l-.025.087-.297 1.187-1.187.297c-.96.24-.96 1.603 0 1.843l1.187.297.297 1.187c.24.959 1.603.959 1.843 0l.297-1.187 1.187-.297c.96-.24.959-1.603 0-1.843l-1.187-.297z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiAiShield;
