import * as React from "react";
const SvgSiTwitter = ({ title, titleId, ...props }) => (
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
      d="M7.91 20.889c8.302 0 12.845-6.885 12.845-12.845 0-.193 0-.387-.009-.58A9.195 9.195 0 0 0 23 5.121a9.15 9.15 0 0 1-2.597.713 4.542 4.542 0 0 0 1.99-2.5 8.98 8.98 0 0 1-2.87 1.091A4.506 4.506 0 0 0 16.23 3a4.52 4.52 0 0 0-4.516 4.516c0 .352.044.696.114 1.03a12.822 12.822 0 0 1-9.305-4.718 4.526 4.526 0 0 0 1.4 6.03 4.566 4.566 0 0 1-2.043-.563v.061a4.524 4.524 0 0 0 3.62 4.428 4.399 4.399 0 0 1-1.189.159c-.29 0-.572-.027-.845-.08a4.514 4.514 0 0 0 4.217 3.135 9.054 9.054 0 0 1-5.608 1.936A8.69 8.69 0 0 1 1 18.873a12.841 12.841 0 0 0 6.91 2.016Z"
    />
  </svg>
);
export default SvgSiTwitter;
