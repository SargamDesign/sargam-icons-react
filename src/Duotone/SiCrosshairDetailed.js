import * as React from "react";
const SvgSiCrosshairDetailed = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M2 12h4m12 0h4M12 22v-4m0-12V2"
    />
  </svg>
);
export default SvgSiCrosshairDetailed;
