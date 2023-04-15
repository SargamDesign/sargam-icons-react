import * as React from "react";
const SvgSiBookmark = ({ title, titleId, ...props }) => (
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
      d="M12 17.025c-.142 0-.341.072-.588.208a7.187 7.187 0 0 0-.835.56c-.614.464-1.317 1.085-1.983 1.706a62.283 62.283 0 0 0-2.455 2.43l-.04.041-.013.014a.05.05 0 0 1-.055.012A.05.05 0 0 1 6 21.95V4.438A2.428 2.428 0 0 1 8.43 2h7.14A2.428 2.428 0 0 1 18 4.438V21.95a.05.05 0 0 1-.085.034h-.001l-.013-.014-.04-.041a66.594 66.594 0 0 0-2.455-2.43c-.666-.621-1.37-1.242-1.983-1.707a7.187 7.187 0 0 0-.835-.56c-.247-.135-.446-.207-.588-.207Z"
      clipRule="evenodd"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 17.025c-.142 0-.341.072-.588.208a7.187 7.187 0 0 0-.835.56c-.614.464-1.317 1.085-1.983 1.706a62.283 62.283 0 0 0-2.455 2.43l-.04.041-.013.014a.05.05 0 0 1-.055.012A.05.05 0 0 1 6 21.95V4.438A2.428 2.428 0 0 1 8.43 2h7.14A2.428 2.428 0 0 1 18 4.438V21.95a.05.05 0 0 1-.085.034h-.001l-.013-.014-.04-.041a66.594 66.594 0 0 0-2.455-2.43c-.666-.621-1.37-1.242-1.983-1.707a7.187 7.187 0 0 0-.835-.56c-.247-.135-.446-.207-.588-.207Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSiBookmark;
