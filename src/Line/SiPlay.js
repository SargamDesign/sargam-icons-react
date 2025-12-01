import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiPlay = ({ title, titleId, ...props }, ref) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5 3 16 9-16 9z"
    />
  </svg>
);
SvgSiPlay.displayName = "SvgSiPlay";
const ForwardRef = forwardRef(SvgSiPlay);
const Memo = memo(ForwardRef);
export default Memo;
