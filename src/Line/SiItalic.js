import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiItalic = ({ title, titleId, ...props }, ref) => (
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
      d="M15 3 9 21m-4 0h8M11 3h8"
    />
  </svg>
);
SvgSiItalic.displayName = "SvgSiItalic";
const ForwardRef = forwardRef(SvgSiItalic);
const Memo = memo(ForwardRef);
export default Memo;
