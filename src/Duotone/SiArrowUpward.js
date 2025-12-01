import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiArrowUpward = ({ title, titleId, ...props }, ref) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m8 10 4-4m0 0 4 4m-4-4v12"
    />
  </svg>
);
SvgSiArrowUpward.displayName = "SvgSiArrowUpward";
const ForwardRef = forwardRef(SvgSiArrowUpward);
const Memo = memo(ForwardRef);
export default Memo;
