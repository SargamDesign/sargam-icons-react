import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiSignInAlt = ({ title, titleId, ...props }, ref) => (
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
      d="m13 16 4-4m0 0-4-4m4 4H3m10.6-9h5A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H13"
    />
  </svg>
);
SvgSiSignInAlt.displayName = "SvgSiSignInAlt";
const ForwardRef = forwardRef(SvgSiSignInAlt);
const Memo = memo(ForwardRef);
export default Memo;
