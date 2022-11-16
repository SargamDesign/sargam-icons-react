import * as React from "react";
const SvgSiMicDetailed = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M6 23h12m-6 0v-4"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M12 1a6 6 0 0 0-6 6v6a6 6 0 0 0 12 0V7a6 6 0 0 0-6-6Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <path
      d="M12 10h.1m2.9 0h.1M9 10h.1M12 7h.1M15 7h.1M9 7h.1m2.9 6h.1m-.1 3h.1M12 4h.1m2.9 9h.1M9 13h.1"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSiMicDetailed;
