import * as React from "react";
const SvgSiSpinner = ({ title, titleId, ...props }) => (
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
      d="M13 2a1 1 0 0 0-2 0v4.167a1 1 0 1 0 2 0V2Zm0 15.833a1 1 0 0 0-2 0V22a1 1 0 1 0 2 0v-4.167ZM16.834 12a1 1 0 0 1 1-1H22a1 1 0 0 1 0 2h-4.166a1 1 0 0 1-1-1ZM2 11a1 1 0 0 0 0 2h4.167a1 1 0 1 0 0-2H2Zm17.916-6.915a1 1 0 0 1 0 1.414l-2.917 2.917A1 1 0 1 1 15.585 7l2.917-2.916a1 1 0 0 1 1.414 0ZM8.415 16.999a1 1 0 0 0-1.414-1.414L4.084 18.5A1 1 0 1 0 5.5 19.916l2.916-2.917Zm7.17-1.414a1 1 0 0 1 1.414 0l2.917 2.916a1 1 0 1 1-1.414 1.415l-2.917-2.917a1 1 0 0 1 0-1.414ZM5.499 4.085a1 1 0 0 0-1.415 1.414l2.917 2.917A1 1 0 0 0 8.415 7L5.5 4.085Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiSpinner;
