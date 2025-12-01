import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiCrop = ({ title, titleId, ...props }, ref) => (
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
      d="M2 6h16v16m4-4H6V2"
    />
  </svg>
);
SvgSiCrop.displayName = "SvgSiCrop";
const ForwardRef = forwardRef(SvgSiCrop);
const Memo = memo(ForwardRef);
export default Memo;
