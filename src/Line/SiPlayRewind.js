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
    <path
      fill="currentColor"
      d="m3 12-.43-.614a.75.75 0 0 0 0 1.228zm10-7h.75a.75.75 0 0 0-1.18-.614zm0 14-.43.614A.75.75 0 0 0 13.75 19zm.75-4.867a.75.75 0 0 0-1.5 0zM10 12l-.43-.614a.75.75 0 0 0 0 1.228zm10-7h.75a.75.75 0 0 0-1.18-.614zm0 14-.43.614A.75.75 0 0 0 20.75 19zM3.43 12.614l10-7-.86-1.228-10 7zm10 5.772-10-7-.86 1.228 10 7zM12.25 5v4.688h1.5V5zm0 9.133V19h1.5v-4.867zm-1.82-1.519 10-7-.86-1.228-10 7zM19.25 5v14h1.5V5zm1.18 13.386-10-7-.86 1.228 10 7z"
    />
  </svg>
);
export default SvgSiPlayRewind;
