import * as React from "react";
const SvgSiMoreSquareVert = ({ title, titleId, ...props }) => (
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
      d="M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0 7h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0-14h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 13 5.467v-.934A.533.533 0 0 0 12.467 4Z"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0 7h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0-14h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 13 5.467v-.934A.533.533 0 0 0 12.467 4Z"
    />
  </svg>
);
export default SvgSiMoreSquareVert;
