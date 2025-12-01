import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiToggleOff = ({ title, titleId, ...props }, ref) => (
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
      fillRule="evenodd"
      d="M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6m3 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      clipRule="evenodd"
    />
  </svg>
);
SvgSiToggleOff.displayName = "SvgSiToggleOff";
const ForwardRef = forwardRef(SvgSiToggleOff);
const Memo = memo(ForwardRef);
export default Memo;
