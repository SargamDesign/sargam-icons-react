import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiRemoveCircle = ({ title, titleId, ...props }, ref) => (
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
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    />
  </svg>
);
SvgSiRemoveCircle.displayName = "SvgSiRemoveCircle";
const ForwardRef = forwardRef(SvgSiRemoveCircle);
const Memo = memo(ForwardRef);
export default Memo;
