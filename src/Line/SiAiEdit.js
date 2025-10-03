import * as React from "react";
const SvgSiAiEdit = ({ title, titleId, ...props }) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m14.829 6.343 2.828 2.829m.566-5.091 1.697 1.697a.8.8 0 0 1 0 1.131L8.464 18.364l-3.535.707.707-3.535L17.091 4.08a.8.8 0 0 1 1.132 0M4.806 2.776l-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0M19 17l-.4 1.6-1.6.4 1.6.4.4 1.6.4-1.6L21 19l-1.6-.4z"
    />
  </svg>
);
export default SvgSiAiEdit;
