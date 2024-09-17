import * as React from "react";
const SvgSiStarAlt = ({ title, titleId, ...props }) => (
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
      d="M12.025 2c-.455 0-.805.22-1.014.399-.22.189-.395.424-.512.659a1 1 0 0 0-.05.119L8.662 8.313H2.681c-.455 0-.805.22-1.014.399a2.1 2.1 0 0 0-.512.66c-.209.416-.18.858-.07 1.189.1.297.305.627.65.842l4.614 3.714-1.46 5.615c-.148.38-.115.769-.016 1.067.11.33.353.7.77.91a1.8 1.8 0 0 0 1.652 0 1 1 0 0 0 .134-.081l4.715-3.368 4.548 3.328c.404.355.847.353.999.352h.032c.146.001.561.003.952-.313.331-.215.53-.537.628-.828a1.58 1.58 0 0 0-.026-1.093l-1.68-5.484 4.78-3.869a1 1 0 0 0 .265-.33l.021-.043c.11-.215.337-.663.337-1.161a1 1 0 0 0-.106-.448 2.1 2.1 0 0 0-.512-.659c-.209-.18-.559-.399-1.013-.399h-5.87l-1.905-5.155a1 1 0 0 0-.043-.1 2.1 2.1 0 0 0-.512-.66c-.21-.179-.56-.398-1.014-.398"
    />
  </svg>
);
export default SvgSiStarAlt;
