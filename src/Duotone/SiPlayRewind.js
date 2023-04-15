import * as React from "react";
const SvgSiPlayRewind = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill="currentColor" fillOpacity={0.16} d="m20 5-10 7 10 7V5Z" />
    <path
      fill="currentColor"
      d="m3 12-.43-.614a.75.75 0 0 0 0 1.228L3 12Zm10-7h.75a.75.75 0 0 0-1.18-.614L13 5Zm0 14-.43.614A.75.75 0 0 0 13.75 19H13Zm.75-4.867a.75.75 0 0 0-1.5 0h1.5ZM10 12l-.43-.614a.75.75 0 0 0 0 1.228L10 12Zm10-7h.75a.75.75 0 0 0-1.18-.614L20 5Zm0 14-.43.614A.75.75 0 0 0 20.75 19H20ZM3.43 12.614l10-7-.86-1.228-10 7 .86 1.228Zm10 5.772-10-7-.86 1.228 10 7 .86-1.228ZM12.25 5v4.688h1.5V5h-1.5Zm0 9.133V19h1.5v-4.867h-1.5Zm-1.82-1.519 10-7-.86-1.228-10 7 .86 1.228ZM19.25 5v14h1.5V5h-1.5Zm1.18 13.386-10-7-.86 1.228 10 7 .86-1.228Z"
    />
  </svg>
);
export default SvgSiPlayRewind;
