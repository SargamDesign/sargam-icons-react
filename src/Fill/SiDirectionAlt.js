import * as React from "react";
const SvgSiDirectionAlt = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M2.293 2.293a1 1 0 0 1 1.11-.208l18 7.92a1 1 0 0 1-.15 1.883l-7.421 1.944-1.944 7.422a1 1 0 0 1-1.883.148l-7.92-18a1 1 0 0 1 .208-1.11"
    />
  </svg>
);
export default SvgSiDirectionAlt;
