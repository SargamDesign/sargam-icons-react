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
      d="M5.4 22h13.2a2.4 2.4 0 0 0 2.4-2.412V8.332c0-.382-.18-.734-.48-.965L12.7 2.24a1.195 1.195 0 0 0-1.44 0L3.48 7.367c-.3.231-.48.583-.48.965v11.256A2.4 2.4 0 0 0 5.4 22Zm4.6-1v-8h4v8h2v-8.2c0-.992-.808-1.8-1.8-1.8H9.8c-.992 0-1.8.808-1.8 1.8V21h2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiHome;
