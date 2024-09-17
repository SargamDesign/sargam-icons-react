import * as React from "react";
const SvgSiSettingsApplications = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#si_Settings_applications_svg__a)"
    >
      <path d="M20.067 1H3.933A2.933 2.933 0 0 0 1 3.933v16.134A2.933 2.933 0 0 0 3.933 23h16.134A2.933 2.933 0 0 0 23 20.067V3.933A2.933 2.933 0 0 0 20.067 1Z" />
      <path d="M18.5 10.5h-1.75c-.09-.28-.2-.54-.33-.8l1.24-1.24c.59-.59.59-1.54 0-2.12s-1.54-.59-2.12 0L14.3 7.58c-.25-.13-.52-.24-.8-.33V5.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.75c-.28.09-.54.2-.8.33L8.46 6.34a1.49 1.49 0 0 0-2.12 0c-.58.59-.59 1.54 0 2.12L7.58 9.7c-.13.25-.24.52-.33.8H5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h1.75c.09.28.2.54.33.8l-1.24 1.24a1.49 1.49 0 0 0 0 2.12c.59.59 1.54.59 2.12 0l1.24-1.24c.25.13.52.24.8.33v1.75c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-1.75c.28-.09.54-.2.8-.33l1.24 1.24c.59.59 1.54.59 2.12 0 .59-.59.59-1.54 0-2.12l-1.24-1.24c.13-.25.24-.52.33-.8h1.75c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </g>
    <defs>
      <clipPath id="si_Settings_applications_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSiSettingsApplications;
