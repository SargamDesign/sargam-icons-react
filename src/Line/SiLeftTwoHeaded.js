import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiLeftTwoHeaded = ({ title, titleId, ...props }, ref) => (
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
      d="M20 12H4m0 0 4-4m-4 4 4 4m5-8-4 4 4 4"
    />
  </svg>
);
SvgSiLeftTwoHeaded.displayName = "SvgSiLeftTwoHeaded";
const ForwardRef = forwardRef(SvgSiLeftTwoHeaded);
const Memo = memo(ForwardRef);
export default Memo;
