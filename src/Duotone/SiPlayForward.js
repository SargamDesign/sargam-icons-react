import * as React from "react";
const SvgSiPlayForward = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="currentColor" fillOpacity={0.16} d="m4 5 10 7-10 7V5Z" />
    <path
      fill="currentColor"
      d="m21 12 .43.614a.75.75 0 0 0 0-1.228L21 12ZM11 5l.43-.614A.75.75 0 0 0 10.25 5H11Zm0 14h-.75a.75.75 0 0 0 1.18.614L11 19Zm.75-4.867a.75.75 0 0 0-1.5 0h1.5ZM14 12l.43.614a.75.75 0 0 0 0-1.228L14 12ZM4 5l.43-.614A.75.75 0 0 0 3.25 5H4Zm0 14h-.75a.75.75 0 0 0 1.18.614L4 19Zm17.43-7.614-10-7-.86 1.228 10 7 .86-1.228Zm-10 8.228 10-7-.86-1.228-10 7 .86 1.228ZM10.25 5v4.688h1.5V5h-1.5Zm0 9.133V19h1.5v-4.867h-1.5Zm4.18-2.747-10-7-.86 1.228 10 7 .86-1.228ZM3.25 5v14h1.5V5h-1.5Zm1.18 14.614 10-7-.86-1.228-10 7 .86 1.228Z"
    />
  </svg>
);
export default SvgSiPlayForward;
