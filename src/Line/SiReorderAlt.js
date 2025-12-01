import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiReorderAlt = ({ title, titleId, ...props }, ref) => (
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
      d="M4 12h16M4 16h16M4 20h16M4 8h16M4 4h16"
    />
  </svg>
);
SvgSiReorderAlt.displayName = "SvgSiReorderAlt";
const ForwardRef = forwardRef(SvgSiReorderAlt);
const Memo = memo(ForwardRef);
export default Memo;
