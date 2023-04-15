import * as React from "react";
const SvgSiYouTube = ({ title, titleId, ...props }) => (
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
      fillOpacity={0.16}
      fillRule="evenodd"
      d="M22.54 6.42a2.765 2.765 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.765 2.765 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.765 2.765 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.765 2.765 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33ZM9.75 8.479v6.542l5.75-3.271-5.75-3.271Z"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M20.595 4.463A2.765 2.765 0 0 1 22.54 6.42c.46 1.728.46 5.33.46 5.33s0 3.604-.46 5.33a2.765 2.765 0 0 1-1.945 1.958C18.88 19.5 12 19.5 12 19.5s-6.879 0-8.595-.462A2.765 2.765 0 0 1 1.46 17.08C1 15.353 1 11.75 1 11.75s0-3.602.46-5.33a2.765 2.765 0 0 1 1.945-1.957C5.12 4 12 4 12 4s6.88 0 8.595.463Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.75 15.021V8.48l5.75 3.271-5.75 3.271Z"
    />
  </svg>
);
export default SvgSiYouTube;
