import * as React from "react";
const SvgSiJson = ({ title, titleId, ...props }) => (
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
      d="M9 16v-1m3 1v-1m3 1v-1M6.835 4q-.747.022-1.297.242a1.86 1.86 0 0 0-.857.66q-.285.438-.285 1.164V9.23q0 1.12-.594 1.802-.593.66-1.802.88v.131q1.23.22 1.802.901.594.66.594 1.78v3.231q0 .704.285 1.143.286.461.835.66.55.219 1.32.241M17.164 4q.747.022 1.297.242.55.219.857.66.285.438.285 1.164V9.23q0 1.12.594 1.802.593.66 1.802.88v.131q-1.23.22-1.802.901-.594.66-.594 1.78v3.231q0 .704-.285 1.143-.286.461-.835.66-.55.219-1.32.241"
    />
  </svg>
);
export default SvgSiJson;
