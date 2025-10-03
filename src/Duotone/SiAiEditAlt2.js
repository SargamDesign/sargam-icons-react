import * as React from "react";
const SvgSiAiEditAlt2 = ({ title, titleId, ...props }) => (
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
      fillOpacity={0.16}
      d="m4.929 19.071.707-3.535 9.192-9.193 2.829 2.829-9.193 9.192z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m17.657 9.172 1.414-1.415a2 2 0 0 0-2.828-2.828l-1.414 1.414m2.828 2.829-9.192 9.192-3.536.707.707-3.535 9.192-9.193m2.829 2.829-2.828-2.829M4.806 2.776l-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0M19 17l-.4 1.6-1.6.4 1.6.4.4 1.6.4-1.6L21 19l-1.6-.4z"
    />
  </svg>
);
export default SvgSiAiEditAlt2;
