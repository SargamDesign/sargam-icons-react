import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiUpTwoHeaded = ({ title, titleId, ...props }, ref) => (
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
      d="M12 20V4m0 0L8 8m4-4 4 4m-8 5 4-4 4 4"
    />
  </svg>
);
SvgSiUpTwoHeaded.displayName = "SvgSiUpTwoHeaded";
const ForwardRef = forwardRef(SvgSiUpTwoHeaded);
const Memo = memo(ForwardRef);
export default Memo;
