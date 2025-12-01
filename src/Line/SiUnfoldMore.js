import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiUnfoldMore = ({ title, titleId, ...props }, ref) => (
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
      d="m9 15 3 3 3-3M9 9l3-3 3 3"
    />
  </svg>
);
SvgSiUnfoldMore.displayName = "SvgSiUnfoldMore";
const ForwardRef = forwardRef(SvgSiUnfoldMore);
const Memo = memo(ForwardRef);
export default Memo;
