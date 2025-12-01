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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 16 4-4-4-4"
    />
  </svg>
);
SvgSiChevronRight.displayName = "SvgSiChevronRight";
const ForwardRef = forwardRef(SvgSiChevronRight);
const Memo = memo(ForwardRef);
export default Memo;
