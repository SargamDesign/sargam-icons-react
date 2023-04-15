import * as React from "react";
const SvgSiCopyrightAlt = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Zm-9.863-5c-1.303 0-2.436.493-3.227 1.431-.773.92-1.14 2.17-1.14 3.566v.01c0 1.396.369 2.646 1.144 3.564.792.937 1.925 1.429 3.229 1.429 2.012 0 3.713-1.162 4.07-3.124l-1.968-.358c-.151.833-.864 1.482-2.102 1.482-.773 0-1.325-.275-1.701-.72-.392-.464-.672-1.21-.672-2.272v-.01c0-1.066.28-1.814.67-2.278.375-.445.925-.72 1.697-.72 1.174 0 1.96.706 2.104 1.631l1.977-.307C15.906 8.316 14.183 7 12.138 7Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiCopyrightAlt;
