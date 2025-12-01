import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiChevronLeft = ({ title, titleId, ...props }, ref) => (
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
      d="M14.707 7.293a1 1 0 0 1 0 1.414L11.414 12l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0"
      clipRule="evenodd"
    />
  </svg>
);
SvgSiChevronLeft.displayName = "SvgSiChevronLeft";
const ForwardRef = forwardRef(SvgSiChevronLeft);
const Memo = memo(ForwardRef);
export default Memo;
