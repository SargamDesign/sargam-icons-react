import * as React from "react";
const SvgSiSettingsThick = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.51 9.49h1.87c.88 0 1.6.72 1.6 1.6v1.8c0 .88-.72 1.6-1.6 1.6h-1.87c-.03.092-.068.179-.106.269l-.034.081 1.32 1.32c.62.62.62 1.64 0 2.26l-1.27 1.27c-.62.62-1.64.62-2.26 0l-1.32-1.32a2.777 2.777 0 0 1-.2.08l-.15.06v1.87c0 .88-.72 1.6-1.6 1.6h-1.8c-.88 0-1.6-.72-1.6-1.6v-1.87c-.092-.03-.179-.068-.269-.106l-.081-.034-1.32 1.32c-.62.62-1.64.62-2.26 0l-1.27-1.27c-.62-.62-.62-1.64 0-2.26l1.32-1.32a2.777 2.777 0 0 1-.08-.2l-.06-.15H3.6c-.88 0-1.6-.72-1.6-1.6v-1.8c0-.88.72-1.6 1.6-1.6h1.87c.03-.092.068-.179.106-.269l.034-.081-1.32-1.32c-.62-.62-.62-1.64 0-2.26l1.27-1.27c.62-.62 1.64-.62 2.26 0l1.32 1.32c.064-.029.131-.055.2-.08l.15-.06V3.6c0-.88.72-1.6 1.6-1.6h1.8c.88 0 1.6.72 1.6 1.6v1.87c.092.03.179.068.269.106l.081.034 1.32-1.32c.62-.62 1.64-.62 2.26 0l1.27 1.27c.62.62.62 1.64 0 2.26l-1.32 1.32c.029.064.055.131.08.2l.06.15ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSiSettingsThick;
