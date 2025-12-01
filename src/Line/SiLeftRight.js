import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiLeftRight = ({ title, titleId, ...props }, ref) => (
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
      d="M21 12H3m18 0-4-4m4 4-4 4M3 12l4-4m-4 4 4 4"
    />
  </svg>
);
SvgSiLeftRight.displayName = "SvgSiLeftRight";
const ForwardRef = forwardRef(SvgSiLeftRight);
const Memo = memo(ForwardRef);
export default Memo;
