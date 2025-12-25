import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiFlow = ({ title, titleId, ...props }, ref) => (
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
      d="M12 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V6m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
  </svg>
);
SvgSiFlow.displayName = "SvgSiFlow";
const ForwardRef = forwardRef(SvgSiFlow);
const Memo = memo(ForwardRef);
export default Memo;
