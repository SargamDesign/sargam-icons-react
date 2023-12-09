import * as React from "react";
const SvgSiShieldPolice = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      d="M11.888 21.98c.075.026.15.027.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728m2.334-10.045 2.652-2.147c.063-.126.126-.252.126-.379-.063-.126-.19-.252-.316-.252H13.4l-1.073-2.904c-.063-.127-.19-.253-.316-.253s-.252.126-.315.253l-1.01 2.904H7.34c-.126 0-.252.126-.315.252a.304.304 0 0 0 .126.38L9.74 11.87l-.821 3.157a.304.304 0 0 0 .126.379.402.402 0 0 0 .379 0l2.652-1.894 2.588 1.894c.063.063.126.063.19.063.063 0 .126 0 .189-.063a.304.304 0 0 0 .126-.379z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiShieldPolice;
