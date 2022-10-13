import * as React from "react";
const SvgSiWalletDetailed = ({ title, titleId, ...props }) => (
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
      d="M15.995 13A.998.998 0 0 0 15 14c0 .552.445 1 .995 1h.01c.55 0 .995-.448.995-1s-.445-1-.995-1h-.01Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.448 2h.042C18.38 2 20 3.458 20 5.38v.923c1.178.535 2 1.723 2 3.097v9.2c0 1.872-1.528 3.4-3.4 3.4H5.4A3.407 3.407 0 0 1 2 18.6V5.5A2.498 2.498 0 0 1 4.453 3l11.995-1ZM18 5.38V6H4.5a.498.498 0 0 1-.5-.5c0-.278.222-.5.5-.5h.042l11.985-1c.87.018 1.473.672 1.473 1.38ZM21 11h-6.286c-.947 0-1.714.716-1.714 1.6v2.8c0 .884.768 1.6 1.714 1.6H21v-6Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiWalletDetailed;
