import * as React from "react";
const SvgSiSettingsAlt = ({ title, titleId, ...props }) => (
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
    <g
      clipPath="url(#si_Settings_alt_svg__a)"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        d="M21.4 10h-2.69a6.77 6.77 0 0 0-.55-1.33l1.9-1.9c.62-.62.62-1.64 0-2.26l-.57-.57c-.62-.62-1.64-.62-2.26 0l-1.9 1.9A6.77 6.77 0 0 0 14 5.29V2.6c0-.88-.72-1.6-1.6-1.6h-.8c-.88 0-1.6.72-1.6 1.6v2.69c-.47.14-.91.32-1.33.55l-1.9-1.9c-.62-.62-1.64-.62-2.26 0l-.57.57c-.62.62-.62 1.64 0 2.26l1.9 1.9c-.23.42-.41.86-.55 1.33H2.6c-.88 0-1.6.72-1.6 1.6v.8c0 .88.72 1.6 1.6 1.6h2.69c.14.47.32.91.55 1.33l-1.9 1.9c-.62.62-.62 1.64 0 2.26l.57.57c.62.62 1.64.62 2.26 0l1.9-1.9c.42.23.86.41 1.33.55v2.69c0 .88.72 1.6 1.6 1.6h.8c.88 0 1.6-.72 1.6-1.6v-2.69c.47-.14.91-.32 1.33-.55l1.9 1.9c.62.62 1.64.62 2.26 0l.57-.57c.62-.62.62-1.64 0-2.26l-1.9-1.9c.23-.42.41-.86.55-1.33h2.69c.88 0 1.6-.72 1.6-1.6v-.8c0-.88-.72-1.6-1.6-1.6Z"
        fill="currentColor"
        fillOpacity={0.16}
        strokeLinejoin="round"
      />
      <path
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="#fff"
        strokeMiterlimit={10}
      />
    </g>
    <defs>
      <clipPath id="si_Settings_alt_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSiSettingsAlt;
