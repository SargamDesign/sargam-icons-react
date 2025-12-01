import * as React from "react";
import { forwardRef, memo } from "react";
const SvgSiFilterListAlt = ({ title, titleId, ...props }, ref) => (
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
      d="M6 10h12M8 14h8m-6 4h4M4 6h16"
    />
  </svg>
);
SvgSiFilterListAlt.displayName = "SvgSiFilterListAlt";
const ForwardRef = forwardRef(SvgSiFilterListAlt);
const Memo = memo(ForwardRef);
export default Memo;
