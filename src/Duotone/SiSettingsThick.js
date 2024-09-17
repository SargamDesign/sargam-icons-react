import * as React from "react";
const SvgSiSettingsThick = ({ title, titleId, ...props }) => (
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
      d="M18.51 9.49h1.87c.88 0 1.6.72 1.6 1.6v1.8c0 .88-.72 1.6-1.6 1.6h-1.87q-.047.136-.106.269l-.034.081 1.32 1.32c.62.62.62 1.64 0 2.26l-1.27 1.27c-.62.62-1.64.62-2.26 0l-1.32-1.32q-.096.043-.2.08l-.15.06v1.87c0 .88-.72 1.6-1.6 1.6h-1.8c-.88 0-1.6-.72-1.6-1.6v-1.87q-.136-.047-.269-.106l-.081-.034-1.32 1.32c-.62.62-1.64.62-2.26 0l-1.27-1.27c-.62-.62-.62-1.64 0-2.26l1.32-1.32q-.043-.096-.08-.2l-.06-.15H3.6c-.88 0-1.6-.72-1.6-1.6v-1.8c0-.88.72-1.6 1.6-1.6h1.87q.047-.136.106-.269l.034-.081-1.32-1.32c-.62-.62-.62-1.64 0-2.26l1.27-1.27c.62-.62 1.64-.62 2.26 0l1.32 1.32q.096-.043.2-.08l.15-.06V3.6c0-.88.72-1.6 1.6-1.6h1.8c.88 0 1.6.72 1.6 1.6v1.87q.136.047.269.106l.081.034 1.32-1.32c.62-.62 1.64-.62 2.26 0l1.27 1.27c.62.62.62 1.64 0 2.26l-1.32 1.32q.043.096.08.2zM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="m18.51 9.49-.692.288a.75.75 0 0 0 .692.462zm-.14-.35-.53-.53a.75.75 0 0 0-.153.84zm1.32-1.32-.53-.53zm0-2.26-.53.53zm-1.27-1.27.53-.53zm-2.26 0-.53-.53zm-1.32 1.32-.288.692a.75.75 0 0 0 .818-.162zm-.35-.14h-.75c0 .323.207.61.513.712zm-5 0 .288.692a.75.75 0 0 0 .462-.692zm-.35.14-.53.53a.75.75 0 0 0 .84.153zM7.82 4.29l.53-.53zm-2.26 0-.53-.53zM4.29 5.56l.53.53zm0 2.26.53-.53zm1.32 1.32.692.288a.75.75 0 0 0-.162-.818zm-.14.35v.75a.75.75 0 0 0 .712-.513zm0 5 .692-.289a.75.75 0 0 0-.692-.461zm.14.35.53.53a.75.75 0 0 0 .153-.84zm-1.32 1.32-.53-.53zm0 2.26.53-.53zm1.27 1.27-.53.53zm2.26 0 .53.53zm1.32-1.32.288-.692a.75.75 0 0 0-.818.162zm.35.14h.75a.75.75 0 0 0-.513-.712zm5 0-.289-.692a.75.75 0 0 0-.461.692zm.35-.14.53-.53a.75.75 0 0 0-.84-.153zm1.32 1.32-.53.53zm2.26 0 .53.53zm1.27-1.27-.53-.53zm-1.32-3.58-.692-.288a.75.75 0 0 0 .162.818zm.14-.35v-.75a.75.75 0 0 0-.712.513zm1.87-5.75h-1.87v1.5h1.87zm-1.178.462c-.02-.048-.037-.093-.062-.159a4 4 0 0 0-.087-.213l-1.366.62c.015.033.03.072.053.13.02.051.047.126.078.198zm-.302.468 1.32-1.32-1.06-1.06-1.32 1.32zm1.32-1.32a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2zm0-3.32-1.27-1.27-1.06 1.06 1.27 1.27zm-1.27-1.27a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0zm-3.32 0-1.32 1.32 1.06 1.06 1.32-1.32zm-.502 1.158c-.091-.039-.246-.108-.4-.16l-.475 1.424c.085.028.15.059.299.12zm.112.552V3.6h-1.5v1.87zm0-1.87a2.355 2.355 0 0 0-2.35-2.35v1.5c.466 0 .85.384.85.85zm-2.35-2.35h-1.8v1.5h1.8zm-1.8 0A2.355 2.355 0 0 0 8.74 3.6h1.5c0-.466.384-.85.85-.85zM8.74 3.6v1.87h1.5V3.6zm.462 1.178c-.048.02-.093.037-.159.062-.06.022-.136.052-.213.087l.62 1.366c.033-.015.072-.03.13-.053.051-.02.126-.047.198-.078zm.468.302L8.35 3.76 7.29 4.82l1.32 1.32zM8.35 3.76a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0zm-3.32 0L3.76 5.03l1.06 1.06 1.27-1.27zM3.76 5.03a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2zm0 3.32 1.32 1.32 1.06-1.06-1.32-1.32zm1.158.502c-.039.091-.108.246-.16.4l1.424.475c.028-.085.059-.15.12-.299zm.552-.112H3.6v1.5h1.87zm-1.87 0a2.355 2.355 0 0 0-2.35 2.35h1.5c0-.466.384-.85.85-.85zm-2.35 2.35v1.8h1.5v-1.8zm0 1.8a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85zm2.35 2.35h1.87v-1.5H3.6zm1.178-.462c.02.047.037.093.062.159.022.06.052.136.087.213l1.366-.62a2 2 0 0 1-.053-.13c-.02-.051-.047-.126-.078-.199zm.302-.468-1.32 1.32 1.06 1.06 1.32-1.32zm-1.32 1.32a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2zm0 3.32 1.27 1.27 1.06-1.06-1.27-1.27zm1.27 1.27a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0zm3.32 0 1.32-1.32-1.06-1.06-1.32 1.32zm.502-1.158c.091.039.246.108.4.16l.475-1.424c-.085-.028-.15-.059-.299-.12zm-.112-.552v1.87h1.5v-1.87zm0 1.87a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85zm2.35 2.35h1.8v-1.5h-1.8zm1.8 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85zm2.35-2.35v-1.87h-1.5v1.87zm-.462-1.178c.047-.02.093-.037.159-.062.06-.023.136-.052.213-.087l-.62-1.366c-.033.015-.072.03-.13.053-.051.02-.126.047-.199.078zm-.468-.302 1.32 1.32 1.06-1.06-1.32-1.32zm1.32 1.32a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0zm3.32 0 1.27-1.27-1.06-1.06-1.27 1.27zm1.27-1.27a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2zm0-3.32-1.32-1.32-1.06 1.06 1.32 1.32zm-1.158-.502c.039-.091.108-.246.16-.4l-1.424-.475c-.028.085-.059.15-.12.299zm-.552.112h1.87v-1.5h-1.87zm1.87 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85zm2.35-2.35v-1.8h-1.5v1.8zm0-1.8a2.355 2.355 0 0 0-2.35-2.35v1.5c.466 0 .85.384.85.85zm-7.48.91A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25z"
    />
  </svg>
);
export default SvgSiSettingsThick;
