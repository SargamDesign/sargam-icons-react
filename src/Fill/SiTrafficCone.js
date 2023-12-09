import * as React from "react";
const SvgSiTrafficCone = ({ title, titleId, ...props }) => (
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
      d="M22 20h-3.278l-1.014-3.646a.972.972 0 0 1-.265.095A26.805 26.805 0 0 1 12 17c-1.868 0-3.767-.197-5.564-.571a.999.999 0 0 1-.153-.045L5.278 20H2a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2M6.817 14.466l.027.005A25.56 25.56 0 0 0 12 15c1.733 0 3.415-.173 5.037-.51a.995.995 0 0 1 .148-.019l-1.087-3.911a1.001 1.001 0 0 1-.275.093A20.875 20.875 0 0 1 12 11a21.351 21.351 0 0 1-4.108-.404zM8.43 8.665A19.33 19.33 0 0 0 12 9a18.9 18.9 0 0 0 3.457-.313 1.15 1.15 0 0 1 .116-.015L14.16 3.59a.801.801 0 0 0-.77-.59h-2.78c-.36 0-.67.24-.77.59z"
    />
  </svg>
);
export default SvgSiTrafficCone;
