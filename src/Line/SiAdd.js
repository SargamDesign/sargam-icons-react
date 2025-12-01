import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiAdd = ({ title, titleId, ...props }, ref) => (
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
      d="M6 12h12m-6 6V6"
    />
  </svg>
);
SvgSiAdd.displayName = "SvgSiAdd";
const ForwardRef = forwardRef(SvgSiAdd);
const Memo = memo(ForwardRef);
export default Memo;
