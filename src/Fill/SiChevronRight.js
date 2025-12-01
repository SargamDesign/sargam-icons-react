import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiChevronRight = ({ title, titleId, ...props }, ref) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden={!title}
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 0 1 0-1.414"
      clipRule="evenodd"
    />
  </svg>
);
SvgSiChevronRight.displayName = "SvgSiChevronRight";
const ForwardRef = forwardRef(SvgSiChevronRight);
const Memo = memo(ForwardRef);
export default Memo;
