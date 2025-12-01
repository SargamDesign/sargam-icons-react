import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiRightTwoHeaded = ({ title, titleId, ...props }, ref) => (
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
      d="M4 12h16m0 0-4-4m4 4-4 4m-5-8 4 4-4 4"
    />
  </svg>
);
SvgSiRightTwoHeaded.displayName = "SvgSiRightTwoHeaded";
const ForwardRef = forwardRef(SvgSiRightTwoHeaded);
const Memo = memo(ForwardRef);
export default Memo;
