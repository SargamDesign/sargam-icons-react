import * as React from "react";
const SvgSiDiamondsFour = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#si_Diamonds_four_svg__a)" fill="currentColor">
      <path d="M13.838 1.11a2.6 2.6 0 0 0-3.676 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.677l1.98 1.98a2.6 2.6 0 0 0 3.676 0l1.98-1.98a2.6 2.6 0 0 0 0-3.677l-1.98-1.98Zm-7.07 7.072a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.676l1.98 1.98a2.6 2.6 0 0 0 3.676 0l1.98-1.98a2.6 2.6 0 0 0 0-3.676l-1.98-1.98Zm7.07 7.071a2.6 2.6 0 0 0-3.676 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.677l1.98 1.98a2.6 2.6 0 0 0 3.676 0l1.98-1.98a2.6 2.6 0 0 0 0-3.677l-1.98-1.98Zm7.072-7.071a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.676l1.98 1.98a2.6 2.6 0 0 0 3.677 0l1.98-1.98a2.6 2.6 0 0 0 0-3.676l-1.98-1.98Z" />
    </g>
    <defs>
      <clipPath id="si_Diamonds_four_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSiDiamondsFour;
