import * as React from "react";
const SvgSiAttachment = ({ title, titleId, ...props }) => (
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
      d="M20 7.3c0-.875-.347-1.714-.965-2.334a3.31 3.31 0 0 0-4.673-.001h.001l-9.397 9.398h-.001a3.31 3.31 0 0 0 0 4.671l.119.113a3.31 3.31 0 0 0 4.554-.113l6.35-6.354a1.35 1.35 0 0 0 0-1.907l-.098-.09a1.35 1.35 0 0 0-1.809.09L7.425 17.43a1 1 0 0 1-1.414-1.414l6.656-6.658a3.35 3.35 0 0 1 4.614-.114l.12.114.001.001a3.35 3.35 0 0 1 0 4.734l-6.352 6.356a5.31 5.31 0 0 1-7.498 0H3.55a5.31 5.31 0 0 1 0-7.499l9.4-9.4a5.31 5.31 0 0 1 7.306-.18l.191.18.001.002a5.31 5.31 0 0 1 0 7.498l-.138.137a1 1 0 1 1-1.413-1.414l.136-.136c.619-.62.966-1.46.966-2.336"
    />
  </svg>
);
export default SvgSiAttachment;
