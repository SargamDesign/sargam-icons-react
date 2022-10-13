import * as React from "react";
const SvgSiApple = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M16.145 2.402c0 1.024-.44 2.048-1.062 2.786-.66.818-1.802 1.426-2.71 1.426-.104 0-.208-.014-.272-.026a1.837 1.837 0 0 1-.038-.362c0-1.038.532-2.062 1.102-2.71.726-.842 1.93-1.478 2.942-1.516.026.116.038.26.038.402Zm3.569 6.45.05-.033c-1.349-1.933-3.397-1.985-3.967-1.985-.872 0-1.653.31-2.309.57-.475.188-.885.35-1.217.35-.367 0-.787-.17-1.256-.358-.592-.24-1.26-.51-1.998-.51C6.528 6.886 4 8.95 4 12.837c0 2.424.934 4.979 2.09 6.623C7.088 20.86 7.956 22 9.2 22c.59 0 1.023-.183 1.478-.376.504-.214 1.036-.44 1.84-.44.814 0 1.3.212 1.768.416.437.19.857.374 1.513.374 1.36 0 2.254-1.23 3.11-2.462.96-1.4 1.363-2.774 1.375-2.838-.078-.026-2.685-1.077-2.685-4.045 0-2.39 1.777-3.555 2.115-3.777Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiApple;