import * as React from "react";
const SvgSiPhoneCallback = ({ title, titleId, ...props }) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14.172 5.586v4.242m0 0h4.242m-4.242 0 5.656-5.656M7.181 10.269l6.503 6.462c.697-.808 5.11-5.539 7.316.923 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"
    />
  </svg>
);
export default SvgSiPhoneCallback;
