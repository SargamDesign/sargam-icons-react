import * as React from "react";
const SvgSiJsonAlt3 = ({ title, titleId, ...props }) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 15a22.02 22.02 0 0 1-.492 1.624c-.2.584-.42 1.16-.662 1.73A38.705 38.705 0 0 1 10.16 20M6.835 4c-.498.015-.93.095-1.297.242a1.857 1.857 0 0 0-.857.66c-.19.292-.285.68-.285 1.164V9.23c0 .747-.198 1.348-.594 1.802-.395.44-.996.733-1.802.88v.131c.82.146 1.421.447 1.802.901.396.44.594 1.033.594 1.78v3.231c0 .469.095.85.285 1.143.19.308.47.527.835.66.367.146.806.226 1.32.241M17.164 4c.498.015.93.095 1.297.242.366.146.652.366.857.66.19.292.285.68.285 1.164V9.23c0 .747.198 1.348.594 1.802.395.44.996.733 1.802.88v.131c-.82.146-1.421.447-1.802.901-.396.44-.594 1.033-.594 1.78v3.231c0 .469-.095.85-.285 1.143-.19.308-.47.527-.835.66-.367.146-.806.226-1.32.241M13 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
);
export default SvgSiJsonAlt3;
