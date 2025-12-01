import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiExpandLess = ({ title, titleId, ...props }, ref) => (
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
      d="M11.293 9.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L12 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414z"
      clipRule="evenodd"
    />
  </svg>
);
SvgSiExpandLess.displayName = "SvgSiExpandLess";
const ForwardRef = forwardRef(SvgSiExpandLess);
const Memo = memo(ForwardRef);
export default Memo;
