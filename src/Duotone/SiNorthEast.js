import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiNorthEast = ({ title, titleId, ...props }, ref) => (
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
      d="m8 16 8-8m0 0v5m0-5h-5"
    />
  </svg>
);
SvgSiNorthEast.displayName = "SvgSiNorthEast";
const ForwardRef = forwardRef(SvgSiNorthEast);
const Memo = memo(ForwardRef);
export default Memo;
