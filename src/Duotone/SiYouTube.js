import * as React from "react";
const SvgSiYouTube = ({ title, titleId, ...props }) => (
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
      d="M20.595 4.463A2.765 2.765 0 0 1 22.54 6.42c.46 1.728.46 5.33.46 5.33s0 3.604-.46 5.33a2.765 2.765 0 0 1-1.945 1.958C18.88 19.5 12 19.5 12 19.5s-6.879 0-8.595-.462A2.765 2.765 0 0 1 1.46 17.08C1 15.353 1 11.75 1 11.75s0-3.602.46-5.33a2.765 2.765 0 0 1 1.945-1.957C5.12 4 12 4 12 4s6.88 0 8.595.463Z"
      fill="currentColor"
      fillOpacity={0.16}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
    <path
      d="M9.75 15.021V8.48l5.75 3.271-5.75 3.271Z"
      fill="#fff"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSiYouTube;
