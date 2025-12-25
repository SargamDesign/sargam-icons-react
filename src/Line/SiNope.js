import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiNope = ({ title, titleId, ...props }, ref) => (
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
      d="M19.187 5.047 4.957 19.098M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
    />
  </svg>
);
SvgSiNope.displayName = "SvgSiNope";
const ForwardRef = forwardRef(SvgSiNope);
const Memo = memo(ForwardRef);
export default Memo;
