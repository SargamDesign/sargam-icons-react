import * as React from "react";
const SvgSiHammerAlt = ({ title, titleId, ...props }) => (
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
      d="m13.766 13.08 2.91 2.91a1.8 1.8 0 0 0 2.547 0l2.404-2.404a1.8 1.8 0 0 0 0-2.545L17.95 7.364a1 1 0 1 0 1.414-1.414L17.95 4.536a1 1 0 0 0-1.415 1.413l-3.677-3.676a1.8 1.8 0 0 0-2.545 0L7.909 4.677a1.8 1.8 0 0 0 0 2.546l2.91 2.91-8.65 7.359-.059.054a2.6 2.6 0 0 0 0 3.677l.566.566a2.6 2.6 0 0 0 3.732-.06zm-1.418-1.419-.11-.11-8.735 7.432a.6.6 0 0 0 .022.826l.565.566a.6.6 0 0 0 .827.02z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiHammerAlt;
