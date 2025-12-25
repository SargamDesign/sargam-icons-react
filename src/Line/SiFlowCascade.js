import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiFlowCascade = ({ title, titleId, ...props }, ref) => (
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
      d="M7 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0v10c0 2.2 1.694 4 3.765 4H15M7 6v3c0 2.2 1.694 4 3.765 4H15m0 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0-7a2 2 0 1 0 4 0 2 2 0 0 0-4 0"
    />
  </svg>
);
SvgSiFlowCascade.displayName = "SvgSiFlowCascade";
const ForwardRef = forwardRef(SvgSiFlowCascade);
const Memo = memo(ForwardRef);
export default Memo;
