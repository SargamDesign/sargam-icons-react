import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiAlignRight = ({ title, titleId, ...props }, ref) => (
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
      d="M9 10h12M3 6h18M3 14h18M9 18h12"
    />
  </svg>
);
SvgSiAlignRight.displayName = "SvgSiAlignRight";
const ForwardRef = forwardRef(SvgSiAlignRight);
const Memo = memo(ForwardRef);
export default Memo;
