import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiSwapVert = ({ title, titleId, ...props }, ref) => (
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
      d="m11 17-4 4m0 0-4-4m4 4V3m14 4-4-4m0 0-4 4m4-4v18"
    />
  </svg>
);
SvgSiSwapVert.displayName = "SvgSiSwapVert";
const ForwardRef = forwardRef(SvgSiSwapVert);
const Memo = memo(ForwardRef);
export default Memo;
