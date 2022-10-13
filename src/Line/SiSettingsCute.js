import * as React from "react";
const SvgSiSettingsCute = ({ title, titleId, ...props }) => (
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
      clipPath="url(#si_Settings_cute_svg__a)"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        d="M23 12c0-1.66-1.34-3-3-3h-.76l.54-.54a3 3 0 0 0 0-4.24 3 3 0 0 0-4.24 0l-.54.54V4c0-1.66-1.34-3-3-3S9 2.34 9 4v.76l-.54-.54a3 3 0 0 0-4.24 0 3 3 0 0 0 0 4.24l.54.54H4c-1.66 0-3 1.34-3 3s1.34 3 3 3h.76l-.54.54a3 3 0 0 0 0 4.24 3 3 0 0 0 4.24 0l.54-.54V20c0 1.66 1.34 3 3 3s3-1.34 3-3v-.76l.54.54a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24l-.54-.54H20c1.66 0 3-1.34 3-3Z"
        strokeLinejoin="round"
      />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" strokeMiterlimit={10} />
    </g>
    <defs>
      <clipPath id="si_Settings_cute_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSiSettingsCute;
