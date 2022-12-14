import * as React from "react";
const SvgSiWalletAlt = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#si_Wallet_alt_svg__a)" fill="currentColor">
      <path d="M17.6 4H5a1 1 0 1 1 0-2h12.6C21.132 2 24 4.868 24 8.4V17a1 1 0 1 1-2 0V8.4C22 5.972 20.028 4 17.6 4Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6 6H4.4C3.075 6 2 7.164 2 8.6v9.8C2 19.836 3.075 21 4.4 21h13.2c1.325 0 2.4-1.164 2.4-2.6V8.6C20 7.164 18.925 6 17.6 6Zm-.6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </g>
    <defs>
      <clipPath id="si_Wallet_alt_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSiWalletAlt;
