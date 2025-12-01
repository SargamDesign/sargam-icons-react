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
      fill="currentColor"
      d="M6 11a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m7 1a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z"
    />
  </svg>
);
SvgSiMoreMutedHoriz.displayName = "SvgSiMoreMutedHoriz";
const ForwardRef = forwardRef(SvgSiMoreMutedHoriz);
const Memo = memo(ForwardRef);
export default Memo;
