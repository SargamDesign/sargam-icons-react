import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiChecklist = ({ title, titleId, ...props }, ref) => (
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
      d="m2 8 2 2 4-4m4 2h10M2 16l2 2 4-4m4 2h10"
    />
  </svg>
);
SvgSiChecklist.displayName = "SvgSiChecklist";
const ForwardRef = forwardRef(SvgSiChecklist);
const Memo = memo(ForwardRef);
export default Memo;
