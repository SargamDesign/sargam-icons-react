import * as React from "react";
const SvgSiDangerous = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.91 3.23 3.23 7.913v-.01a.81.81 0 0 0-.23.57v7.054c0 .22.08.42.23.57L7.9 20.77c.15.15.36.23.57.23h7.06c.22 0 .42-.08.57-.23l4.67-4.673a.81.81 0 0 0 .23-.57V8.473c0-.22-.08-.42-.23-.57L16.1 3.23a.81.81 0 0 0-.57-.23H8.48c-.22 0-.42.08-.57.23Zm7.454 5.063a1 1 0 0 1 0 1.414l-2.121 2.121 2.121 2.122a1 1 0 0 1-1.414 1.414l-2.122-2.121-2.12 2.121a1 1 0 0 1-1.415-1.414l2.121-2.122-2.121-2.12a1 1 0 0 1 1.414-1.415l2.121 2.121 2.122-2.121a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiDangerous;
