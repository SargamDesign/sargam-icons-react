import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiDragHandle = ({ title, titleId, ...props }, ref) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M4 10h16M4 14h16"
    />
  </svg>
);
SvgSiDragHandle.displayName = "SvgSiDragHandle";
const ForwardRef = forwardRef(SvgSiDragHandle);
const Memo = memo(ForwardRef);
export default Memo;
