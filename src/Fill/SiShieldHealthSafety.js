import * as React from "react";
const SvgSiShieldHealthSafety = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728M12 7a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2V8a1 1 0 0 1 1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiShieldHealthSafety;
