import * as React from "react";
const SvgSiFlare = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#si_Flare_svg__a)" fill="currentColor">
      <path d="M12 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM7.757 6.343a1 1 0 1 0-1.414 1.414l1.414 1.415a1 1 0 1 0 1.415-1.415L7.757 6.343ZM1 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H1Zm15 1a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Zm-4 4a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm2.828-1.172a1 1 0 0 1 1.415 0l1.414 1.415a1 1 0 1 1-1.414 1.414l-1.415-1.414a1 1 0 0 1 0-1.415Zm2.829-7.071a1 1 0 1 0-1.414-1.414l-1.415 1.414a1 1 0 0 0 1.415 1.415l1.414-1.415Zm-8.485 8.486a1 1 0 1 0-1.415-1.415l-1.414 1.415a1 1 0 1 0 1.414 1.414l1.415-1.414ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </g>
    <defs>
      <clipPath id="si_Flare_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSiFlare;
