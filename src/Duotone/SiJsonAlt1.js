import * as React from "react";
const SvgSiJsonAlt1 = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 20h-.184c-1.626-.009-2.408-.306-2.408-2.01v-4.172c0-1.215-1.45-1.774-2.408-1.862v-.166c.967-.087 2.408-.69 2.408-1.887V6.01c0-1.695.782-2.001 2.408-2.01H7m10 16h.184c1.626-.009 2.408-.306 2.408-2.01v-4.172c0-1.215 1.45-1.774 2.408-1.862v-.166c-.967-.087-2.408-.69-2.408-1.887V6.01c0-1.695-.782-2.001-2.408-2.01H17M9 16v-1m3 1v-1m3 1v-1"
    />
  </svg>
);
export default SvgSiJsonAlt1;
