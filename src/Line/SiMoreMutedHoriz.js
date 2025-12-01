import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiMoreMutedHoriz = ({ title, titleId, ...props }, ref) => (
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
      d="M12 12v1m-6-1v1m12-1v1"
    />
  </svg>
);
SvgSiMoreMutedHoriz.displayName = "SvgSiMoreMutedHoriz";
const ForwardRef = forwardRef(SvgSiMoreMutedHoriz);
const Memo = memo(ForwardRef);
export default Memo;
