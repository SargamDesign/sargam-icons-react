import * as React from "react";
const SvgSiHeartAlt = ({ title, titleId, ...props }) => (
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
      d="M16.55 3.084a5.452 5.452 0 0 1 3.852 9.307l-.648.654-.86.854-6.852 6.852L5.19 13.9l-.86-.854-.648-.654a5.453 5.453 0 1 1 7.706-7.712l.654.654.655-.654a5.45 5.45 0 0 1 3.852-1.595"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.55 3.084a5.452 5.452 0 0 1 3.852 9.307l-.648.654-.86.854-6.852 6.852L5.19 13.9l-.86-.854-.648-.654a5.453 5.453 0 1 1 7.706-7.712l.654.654.655-.654a5.45 5.45 0 0 1 3.852-1.595"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiHeartAlt;
