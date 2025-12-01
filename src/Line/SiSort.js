import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiSort = ({ title, titleId, ...props }, ref) => (
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
      d="M4 12h12M4 8h16M4 16h8"
    />
  </svg>
);
SvgSiSort.displayName = "SvgSiSort";
const ForwardRef = forwardRef(SvgSiSort);
const Memo = memo(ForwardRef);
export default Memo;
