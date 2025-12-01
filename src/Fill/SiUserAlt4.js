import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiUserAlt4 = ({ title, titleId, ...props }, ref) => (
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
      d="M7.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m-5 16c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75"
    />
  </svg>
);
SvgSiUserAlt4.displayName = "SvgSiUserAlt4";
const ForwardRef = forwardRef(SvgSiUserAlt4);
const Memo = memo(ForwardRef);
export default Memo;
