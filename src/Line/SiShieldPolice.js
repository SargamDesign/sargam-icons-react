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
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.113 21.98a.333.333 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m16.874 9.788-2.652 2.147.947 3.093a.304.304 0 0 1-.126.379c-.063.063-.126.063-.19.063-.063 0-.126 0-.189-.063l-2.588-1.894-2.652 1.894a.402.402 0 0 1-.379 0 .304.304 0 0 1-.126-.379l.82-3.157-2.588-2.083a.304.304 0 0 1-.126-.379c.063-.126.19-.252.315-.252h3.347l1.01-2.904c.063-.127.19-.253.315-.253.127 0 .253.126.316.253l1.073 2.904h3.283c.127 0 .253.126.316.252 0 .127-.063.253-.126.38Z"
    />
  </svg>
);
export default SvgSiShieldPolice;
