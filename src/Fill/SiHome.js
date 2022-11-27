import * as React from "react";
const SvgSiHome = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="m21.1 6.551.03.024c.537.413.87 1.053.87 1.757v11.256A3.4 3.4 0 0 1 18.6 23H5.4A3.4 3.4 0 0 1 2 19.588V8.332c0-.704.333-1.344.87-1.757l.029-.023 7.79-5.132a2.195 2.195 0 0 1 2.581 0l7.83 5.13ZM10 13v8H8v-8.2c0-.992.808-1.8 1.8-1.8h4.4c.992 0 1.8.808 1.8 1.8V21h-2v-8h-4Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiHome;
