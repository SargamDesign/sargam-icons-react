import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiMoreVert = ({ title, titleId, ...props }, ref) => (
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
      d="M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-2 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
    />
  </svg>
);
SvgSiMoreVert.displayName = "SvgSiMoreVert";
const ForwardRef = forwardRef(SvgSiMoreVert);
const Memo = memo(ForwardRef);
export default Memo;
