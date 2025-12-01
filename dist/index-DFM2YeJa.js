'use strict';

var _extends = require('@babel/runtime/helpers/extends');
var React = require('react');

function _interopNamespaceDefault(e) {
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const SvgSiAi = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m9.96 9.137.886-3.099c.332-1.16 1.976-1.16 2.308 0l.885 3.099a1.2 1.2 0 0 0 .824.824l3.099.885c1.16.332 1.16 1.976 0 2.308l-3.099.885a1.2 1.2 0 0 0-.824.824l-.885 3.099c-.332 1.16-1.976 1.16-2.308 0l-.885-3.099a1.2 1.2 0 0 0-.824-.824l-3.099-.885c-1.16-.332-1.16-1.976 0-2.308l3.099-.885a1.2 1.2 0 0 0 .824-.824"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m9.96 9.137.886-3.099c.332-1.16 1.976-1.16 2.308 0l.885 3.099a1.2 1.2 0 0 0 .824.824l3.099.885c1.16.332 1.16 1.976 0 2.308l-3.099.885a1.2 1.2 0 0 0-.824.824l-.885 3.099c-.332 1.16-1.976 1.16-2.308 0l-.885-3.099a1.2 1.2 0 0 0-.824-.824l-3.099-.885c-1.16-.332-1.16-1.976 0-2.308l3.099-.885a1.2 1.2 0 0 0 .824-.824M4.43 4.283l.376-1.507c.05-.202.338-.202.388 0l.377 1.507a.2.2 0 0 0 .145.146l1.508.377c.202.05.202.337 0 .388l-1.508.377a.2.2 0 0 0-.145.145l-.377 1.508c-.05.202-.338.202-.388 0l-.377-1.508a.2.2 0 0 0-.145-.145l-1.508-.377c-.202-.05-.202-.338 0-.388l1.508-.377a.2.2 0 0 0 .145-.146M18.43 18.284l.376-1.508c.05-.202.337-.202.388 0l.377 1.508a.2.2 0 0 0 .145.145l1.508.377c.202.05.202.337 0 .388l-1.508.377a.2.2 0 0 0-.145.145l-.377 1.508c-.05.202-.337.202-.388 0l-.377-1.508a.2.2 0 0 0-.145-.145l-1.508-.377c-.202-.05-.202-.338 0-.388l1.508-.377a.2.2 0 0 0 .145-.145"
}));
SvgSiAi.displayName = "SvgSiAi";
const ForwardRef$6C = /*#__PURE__*/React.forwardRef(SvgSiAi);
const Memo$6C = /*#__PURE__*/React.memo(ForwardRef$6C);

const SvgSiAiAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m9.96 9.137.886-3.099c.332-1.16 1.976-1.16 2.308 0l.885 3.099a1.2 1.2 0 0 0 .824.824l3.099.885c1.16.332 1.16 1.976 0 2.308l-3.099.885a1.2 1.2 0 0 0-.824.824l-.885 3.099c-.332 1.16-1.976 1.16-2.308 0l-.885-3.099a1.2 1.2 0 0 0-.824-.824l-3.099-.885c-1.16-.332-1.16-1.976 0-2.308l3.099-.885a1.2 1.2 0 0 0 .824-.824"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m9.96 14.863.886 3.099c.332 1.16 1.976 1.16 2.308 0l.885-3.099a1.2 1.2 0 0 1 .824-.824l3.099-.885c1.16-.332 1.16-1.976 0-2.308l-3.099-.885a1.2 1.2 0 0 1-.824-.824l-.885-3.099c-.332-1.16-1.976-1.16-2.308 0l-.885 3.099a1.2 1.2 0 0 1-.824.824l-3.099.885c-1.16.332-1.16 1.976 0 2.308l3.099.885a1.2 1.2 0 0 1 .824.824M4.43 19.716l.376 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.337 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0l-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.337 0 .388l1.508.377a.2.2 0 0 1 .145.145m14.001-14 .376 1.508c.05.202.337.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.337-.202-.388 0l-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145"
}));
SvgSiAiAlt1.displayName = "SvgSiAiAlt1";
const ForwardRef$6B = /*#__PURE__*/React.forwardRef(SvgSiAiAlt1);
const Memo$6B = /*#__PURE__*/React.memo(ForwardRef$6B);

const SvgSiAiAlt2 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M10 12V6.8a.8.8 0 0 0-.8-.8H4.8a.8.8 0 0 0-.8.8V12m6 0v6m0-6H4m0 6v-6m13 6V6m0 12h-3m3 0h3M17 6h-3m3 0h3"
}));
SvgSiAiAlt2.displayName = "SvgSiAiAlt2";
const ForwardRef$6A = /*#__PURE__*/React.forwardRef(SvgSiAiAlt2);
const Memo$6A = /*#__PURE__*/React.memo(ForwardRef$6A);

const SvgSiAiArchive = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m21 7-1 11.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3 7"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m21 7-1 11.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3 7m-.4-4h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3m9.206 8.776-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0"
}));
SvgSiAiArchive.displayName = "SvgSiAiArchive";
const ForwardRef$6z = /*#__PURE__*/React.forwardRef(SvgSiAiArchive);
const Memo$6z = /*#__PURE__*/React.memo(ForwardRef$6z);

const SvgSiAiBriefcase = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M15 7V4.8a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V7M4.4 7h15.2A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7m7.212 4.552-.354 1.415a.4.4 0 0 1-.29.291l-1.416.354c-.404.1-.404.675 0 .776l1.415.354a.4.4 0 0 1 .291.29l.354 1.416c.1.404.675.404.776 0l.354-1.415a.4.4 0 0 1 .29-.291l1.416-.354c.404-.1.404-.675 0-.776l-1.415-.354a.4.4 0 0 1-.291-.29l-.354-1.416c-.1-.404-.675-.404-.776 0"
}));
SvgSiAiBriefcase.displayName = "SvgSiAiBriefcase";
const ForwardRef$6y = /*#__PURE__*/React.forwardRef(SvgSiAiBriefcase);
const Memo$6y = /*#__PURE__*/React.memo(ForwardRef$6y);

const SvgSiAiChat = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m8.43 10.284.376-1.508c.05-.202.338-.202.388 0l.377 1.508a.2.2 0 0 0 .145.145l1.508.377c.202.05.202.338 0 .388l-1.508.377a.2.2 0 0 0-.145.145l-.377 1.508c-.05.202-.338.202-.388 0l-.377-1.508a.2.2 0 0 0-.145-.145l-1.508-.377c-.202-.05-.202-.338 0-.388l1.508-.377a.2.2 0 0 0 .145-.145M15.1 7.6l.4-1.6.4 1.6 1.6.4-1.6.4-.4 1.6-.4-1.6-1.6-.4z"
}));
SvgSiAiChat.displayName = "SvgSiAiChat";
const ForwardRef$6x = /*#__PURE__*/React.forwardRef(SvgSiAiChat);
const Memo$6x = /*#__PURE__*/React.memo(ForwardRef$6x);

const SvgSiAiChecklist = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 12h10M12 5h10M12 19h10M2 5l2 2 4-4M4.806 16.776l-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.337 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0m0-7-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0"
}));
SvgSiAiChecklist.displayName = "SvgSiAiChecklist";
const ForwardRef$6w = /*#__PURE__*/React.forwardRef(SvgSiAiChecklist);
const Memo$6w = /*#__PURE__*/React.memo(ForwardRef$6w);

const SvgSiAiEdit = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m14.829 6.343 2.828 2.829m.566-5.091 1.697 1.697a.8.8 0 0 1 0 1.131L8.464 18.364l-3.535.707.707-3.535L17.091 4.08a.8.8 0 0 1 1.132 0M4.806 2.776l-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0M19 17l-.4 1.6-1.6.4 1.6.4.4 1.6.4-1.6L21 19l-1.6-.4z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m4.929 19.071.707-3.535 9.192-9.193 2.829 2.829-9.193 9.192z"
}));
SvgSiAiEdit.displayName = "SvgSiAiEdit";
const ForwardRef$6v = /*#__PURE__*/React.forwardRef(SvgSiAiEdit);
const Memo$6v = /*#__PURE__*/React.memo(ForwardRef$6v);

const SvgSiAiEditAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M19.92 5.778 18.223 4.08a.8.8 0 0 0-1.132 0L5.636 15.536 4.93 19.07l3.535-.707L19.92 6.91a.8.8 0 0 0 0-1.131M4.43 4.284l.376-1.508c.05-.202.338-.202.388 0l.377 1.508a.2.2 0 0 0 .145.145l1.508.377c.202.05.202.338 0 .388l-1.508.377a.2.2 0 0 0-.145.145l-.377 1.508c-.05.202-.338.202-.388 0l-.377-1.508a.2.2 0 0 0-.145-.145l-1.508-.377c-.202-.05-.202-.338 0-.388l1.508-.377a.2.2 0 0 0 .145-.145M18.6 18.6 19 17l.4 1.6 1.6.4-1.6.4L19 21l-.4-1.6L17 19z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.92 5.777 18.222 4.08a.8.8 0 0 0-1.13 0L5.635 15.536 4.93 19.07l3.535-.707L19.92 6.909a.8.8 0 0 0 0-1.132"
}));
SvgSiAiEditAlt1.displayName = "SvgSiAiEditAlt1";
const ForwardRef$6u = /*#__PURE__*/React.forwardRef(SvgSiAiEditAlt1);
const Memo$6u = /*#__PURE__*/React.memo(ForwardRef$6u);

const SvgSiAiEditAlt2 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m4.929 19.071.707-3.535 9.192-9.193 2.829 2.829-9.193 9.192z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m17.657 9.172 1.414-1.415a2 2 0 0 0-2.828-2.828l-1.414 1.414m2.828 2.829-9.192 9.192-3.536.707.707-3.535 9.192-9.193m2.829 2.829-2.828-2.829M4.806 2.776l-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0M19 17l-.4 1.6-1.6.4 1.6.4.4 1.6.4-1.6L21 19l-1.6-.4z"
}));
SvgSiAiEditAlt2.displayName = "SvgSiAiEditAlt2";
const ForwardRef$6t = /*#__PURE__*/React.forwardRef(SvgSiAiEditAlt2);
const Memo$6t = /*#__PURE__*/React.memo(ForwardRef$6t);

const SvgSiAiFact = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M5 15h5m-5-3h5M5 9h5m5.806.776-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.337 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.146l-.377-1.507c-.05-.202-.337-.202-.388 0M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"
}));
SvgSiAiFact.displayName = "SvgSiAiFact";
const ForwardRef$6s = /*#__PURE__*/React.forwardRef(SvgSiAiFact);
const Memo$6s = /*#__PURE__*/React.memo(ForwardRef$6s);

const SvgSiAiFactAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M19 15h-5m5-3h-5m5-3h-5m6.6-5H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4M7.806 9.776l-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.337 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.146l-.377-1.507c-.05-.202-.338-.202-.388 0"
}));
SvgSiAiFactAlt1.displayName = "SvgSiAiFactAlt1";
const ForwardRef$6r = /*#__PURE__*/React.forwardRef(SvgSiAiFactAlt1);
const Memo$6r = /*#__PURE__*/React.memo(ForwardRef$6r);

const SvgSiAiInventory = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M21 7v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V7"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M21 7v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V7m-.4-4h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3m9.012 8.552-.354 1.415a.4.4 0 0 1-.29.291l-1.416.354c-.404.1-.404.675 0 .776l1.415.354a.4.4 0 0 1 .291.29l.354 1.416c.1.404.675.404.776 0l.354-1.415a.4.4 0 0 1 .29-.291l1.416-.354c.404-.1.404-.675 0-.776l-1.415-.354a.4.4 0 0 1-.291-.29l-.354-1.416c-.1-.404-.675-.404-.776 0"
}));
SvgSiAiInventory.displayName = "SvgSiAiInventory";
const ForwardRef$6q = /*#__PURE__*/React.forwardRef(SvgSiAiInventory);
const Memo$6q = /*#__PURE__*/React.memo(ForwardRef$6q);

const SvgSiAiLock = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M6.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3m-9.4 0h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6m5.206 3.276-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0"
}));
SvgSiAiLock.displayName = "SvgSiAiLock";
const ForwardRef$6p = /*#__PURE__*/React.forwardRef(SvgSiAiLock);
const Memo$6p = /*#__PURE__*/React.memo(ForwardRef$6p);

const SvgSiAiMonitor = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 4H4.4A2.4 2.4 0 0 0 2 6.4v8.2A2.4 2.4 0 0 0 4.4 17h15.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 19.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9 20h6M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v8.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 14.6V6.4A2.4 2.4 0 0 1 4.4 4m7.406 4.276-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0"
}));
SvgSiAiMonitor.displayName = "SvgSiAiMonitor";
const ForwardRef$6o = /*#__PURE__*/React.forwardRef(SvgSiAiMonitor);
const Memo$6o = /*#__PURE__*/React.memo(ForwardRef$6o);

const SvgSiAiNote = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M14 3a2 2 0 1 1-4 0H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M14 3a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h4.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H10M7 13h4m-4-3h10M7 16h2m5.306-2.224-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.337 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0"
}));
SvgSiAiNote.displayName = "SvgSiAiNote";
const ForwardRef$6n = /*#__PURE__*/React.forwardRef(SvgSiAiNote);
const Memo$6n = /*#__PURE__*/React.memo(ForwardRef$6n);

const SvgSiAiNoteAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M8 3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H16v1.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8M7 13h4m-4-3h10M7 16h2M8.8 1h6.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V1.8a.8.8 0 0 1 .8-.8m5.506 12.776-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.337 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0"
}));
SvgSiAiNoteAlt1.displayName = "SvgSiAiNoteAlt1";
const ForwardRef$6m = /*#__PURE__*/React.forwardRef(SvgSiAiNoteAlt1);
const Memo$6m = /*#__PURE__*/React.memo(ForwardRef$6m);

const SvgSiAiPhone = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27m9.077-4.303.354-1.415c.1-.404.675-.404.776 0l.354 1.415a.4.4 0 0 0 .29.291l1.416.354c.404.1.404.675 0 .776l-1.415.354a.4.4 0 0 0-.291.29l-.354 1.416c-.1.404-.675.404-.776 0l-.354-1.415a.4.4 0 0 0-.29-.291l-1.416-.354c-.404-.1-.404-.675 0-.776l1.415-.354a.4.4 0 0 0 .291-.29"
}));
SvgSiAiPhone.displayName = "SvgSiAiPhone";
const ForwardRef$6l = /*#__PURE__*/React.forwardRef(SvgSiAiPhone);
const Memo$6l = /*#__PURE__*/React.memo(ForwardRef$6l);

const SvgSiAiPhoneAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m16.82 10.27-6.504 6.46c-.697-.807-5.11-5.538-7.316.924 0 0 .232 3.346 4.994 3.346 3.367 0 6.851-4.038 9.29-6.346 2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m16.82 10.27-6.504 6.46c-.697-.807-5.11-5.538-7.316.924 0 0 .232 3.346 4.994 3.346 3.367 0 6.851-4.038 9.29-6.346 2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27M7.742 5.967l-.354-1.415c-.1-.404-.675-.404-.776 0l-.354 1.415a.4.4 0 0 1-.29.291l-1.416.354c-.404.1-.404.675 0 .776l1.415.354a.4.4 0 0 1 .291.29l.354 1.416c.1.404.675.404.776 0l.354-1.415a.4.4 0 0 1 .29-.291l1.416-.354c.404-.1.404-.675 0-.776l-1.415-.354a.4.4 0 0 1-.291-.29"
}));
SvgSiAiPhoneAlt1.displayName = "SvgSiAiPhoneAlt1";
const ForwardRef$6k = /*#__PURE__*/React.forwardRef(SvgSiAiPhoneAlt1);
const Memo$6k = /*#__PURE__*/React.memo(ForwardRef$6k);

const SvgSiAiScan = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7 21H5.4A2.4 2.4 0 0 1 3 18.6V17m14 4h1.6a2.4 2.4 0 0 0 2.4-2.4V17m0-10V5.4A2.4 2.4 0 0 0 18.6 3H17M7 3H5.4A2.4 2.4 0 0 0 3 5.4V7m5.806-.224-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0M15 13l-.4 1.6-1.6.4 1.6.4.4 1.6.4-1.6L17 15l-1.6-.4z"
}));
SvgSiAiScan.displayName = "SvgSiAiScan";
const ForwardRef$6j = /*#__PURE__*/React.forwardRef(SvgSiAiScan);
const Memo$6j = /*#__PURE__*/React.memo(ForwardRef$6j);

const SvgSiAiSearch = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m21 21-4-4m2-6a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8.194-2.224-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
}));
SvgSiAiSearch.displayName = "SvgSiAiSearch";
const ForwardRef$6i = /*#__PURE__*/React.forwardRef(SvgSiAiSearch);
const Memo$6i = /*#__PURE__*/React.memo(ForwardRef$6i);

const SvgSiAiShield = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m11.43 10.284.376-1.508c.05-.202.338-.202.388 0l.377 1.508a.2.2 0 0 0 .145.145l1.508.377c.202.05.202.337 0 .388l-1.508.377a.2.2 0 0 0-.145.145l-.377 1.508c-.05.202-.338.202-.388 0l-.377-1.508a.2.2 0 0 0-.145-.145l-1.508-.377c-.202-.05-.202-.338 0-.388l1.508-.377a.2.2 0 0 0 .145-.146"
}));
SvgSiAiShield.displayName = "SvgSiAiShield";
const ForwardRef$6h = /*#__PURE__*/React.forwardRef(SvgSiAiShield);
const Memo$6h = /*#__PURE__*/React.memo(ForwardRef$6h);

const SvgSiAiSmartphone = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M15.6 2H8.4A2.4 2.4 0 0 0 6 4.4v15.2A2.4 2.4 0 0 0 8.4 22h7.2a2.4 2.4 0 0 0 2.4-2.4V4.4A2.4 2.4 0 0 0 15.6 2"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M11 5h2M8.4 2h7.2A2.4 2.4 0 0 1 18 4.4v15.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 19.6V4.4A2.4 2.4 0 0 1 8.4 2m3.406 8.776-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0"
}));
SvgSiAiSmartphone.displayName = "SvgSiAiSmartphone";
const ForwardRef$6g = /*#__PURE__*/React.forwardRef(SvgSiAiSmartphone);
const Memo$6g = /*#__PURE__*/React.memo(ForwardRef$6g);

const SvgSiAiSort = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M15.6 3h3.8A1.6 1.6 0 0 1 21 4.6v3.8a1.6 1.6 0 0 1-1.6 1.6h-3.8A1.6 1.6 0 0 1 14 8.4V4.6A1.6 1.6 0 0 1 15.6 3m-11 11h3.8a1.6 1.6 0 0 1 1.6 1.6v3.8A1.6 1.6 0 0 1 8.4 21H4.6A1.6 1.6 0 0 1 3 19.4v-3.8A1.6 1.6 0 0 1 4.6 14"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8.4 3H4.6A1.6 1.6 0 0 0 3 4.6v3.8A1.6 1.6 0 0 0 4.6 10h3.8A1.6 1.6 0 0 0 10 8.4V4.6A1.6 1.6 0 0 0 8.4 3m11 0h-3.8A1.6 1.6 0 0 0 14 4.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8A1.6 1.6 0 0 0 21 8.4V4.6A1.6 1.6 0 0 0 19.4 3m-11 11H4.6A1.6 1.6 0 0 0 3 15.6v3.8A1.6 1.6 0 0 0 4.6 21h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8A1.6 1.6 0 0 0 8.4 14m8.43 2.684.476-1.908c.05-.202.337-.202.388 0l.477 1.908a.2.2 0 0 0 .145.145l1.908.477c.202.05.202.337 0 .388l-1.908.477a.2.2 0 0 0-.145.145l-.477 1.908c-.05.202-.337.202-.388 0l-.477-1.908a.2.2 0 0 0-.145-.145l-1.908-.477c-.202-.05-.202-.337 0-.388l1.908-.477a.2.2 0 0 0 .145-.145"
}));
SvgSiAiSort.displayName = "SvgSiAiSort";
const ForwardRef$6f = /*#__PURE__*/React.forwardRef(SvgSiAiSort);
const Memo$6f = /*#__PURE__*/React.memo(ForwardRef$6f);

const SvgSiAiSortAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8.4 21H4.6A1.6 1.6 0 0 1 3 19.4v-3.8A1.6 1.6 0 0 1 4.6 14h3.8a1.6 1.6 0 0 1 1.6 1.6v3.8A1.6 1.6 0 0 1 8.4 21m11 0h-3.8a1.6 1.6 0 0 1-1.6-1.6v-3.8a1.6 1.6 0 0 1 1.6-1.6h3.8a1.6 1.6 0 0 1 1.6 1.6v3.8a1.6 1.6 0 0 1-1.6 1.6m-11-11H4.6A1.6 1.6 0 0 1 3 8.4V4.6A1.6 1.6 0 0 1 4.6 3h3.8A1.6 1.6 0 0 1 10 4.6v3.8A1.6 1.6 0 0 1 8.4 10m8.43-2.684.476 1.908c.05.202.337.202.388 0l.477-1.908a.2.2 0 0 1 .145-.145l1.908-.477c.202-.05.202-.338 0-.388l-1.908-.477a.2.2 0 0 1-.145-.145l-.477-1.908c-.05-.202-.337-.202-.388 0l-.477 1.908a.2.2 0 0 1-.145.145l-1.908.477c-.202.05-.202.338 0 .388l1.908.477a.2.2 0 0 1 .145.145"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M8.4 3H4.6A1.6 1.6 0 0 0 3 4.6v3.8A1.6 1.6 0 0 0 4.6 10h3.8A1.6 1.6 0 0 0 10 8.4V4.6A1.6 1.6 0 0 0 8.4 3m11 11h-3.8a1.6 1.6 0 0 0-1.6 1.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8a1.6 1.6 0 0 0-1.6-1.6"
}));
SvgSiAiSortAlt1.displayName = "SvgSiAiSortAlt1";
const ForwardRef$6e = /*#__PURE__*/React.forwardRef(SvgSiAiSortAlt1);
const Memo$6e = /*#__PURE__*/React.memo(ForwardRef$6e);

const SvgSiAiSummarize = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 12h10M12 5h10M12 19h10M4.806 16.776l-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.337 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.337 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0m0-7-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0m0-7-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0"
}));
SvgSiAiSummarize.displayName = "SvgSiAiSummarize";
const ForwardRef$6d = /*#__PURE__*/React.forwardRef(SvgSiAiSummarize);
const Memo$6d = /*#__PURE__*/React.memo(ForwardRef$6d);

const SvgSiAiSummarizeAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 16h10M12 8h10M4.806 13.776l-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.337 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0m0-8-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0"
}));
SvgSiAiSummarizeAlt.displayName = "SvgSiAiSummarizeAlt";
const ForwardRef$6c = /*#__PURE__*/React.forwardRef(SvgSiAiSummarizeAlt);
const Memo$6c = /*#__PURE__*/React.memo(ForwardRef$6c);

const SvgSiAiUnlock = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M4.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-7c0-.88.72-1.6 1.6-1.6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M14 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3M4.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-7c0-.88.72-1.6 1.6-1.6m5.206 3.276-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145l.377 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0"
}));
SvgSiAiUnlock.displayName = "SvgSiAiUnlock";
const ForwardRef$6b = /*#__PURE__*/React.forwardRef(SvgSiAiUnlock);
const Memo$6b = /*#__PURE__*/React.memo(ForwardRef$6b);

const SvgSiActions = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5 0L9 7.5v9z",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m9 7.5 8 4.5-8 4.5z"
}));
SvgSiActions.displayName = "SvgSiActions";
const ForwardRef$6a = /*#__PURE__*/React.forwardRef(SvgSiActions);
const Memo$6a = /*#__PURE__*/React.memo(ForwardRef$6a);

const SvgSiActivity = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M1 12h4l4 9 7-18 3 9h4"
}));
SvgSiActivity.displayName = "SvgSiActivity";
const ForwardRef$69 = /*#__PURE__*/React.forwardRef(SvgSiActivity);
const Memo$69 = /*#__PURE__*/React.memo(ForwardRef$69);

const SvgSiAdd = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M6 12h12m-6 6V6"
}));
SvgSiAdd.displayName = "SvgSiAdd";
const ForwardRef$68 = /*#__PURE__*/React.forwardRef(SvgSiAdd);
const Memo$68 = /*#__PURE__*/React.memo(ForwardRef$68);

const SvgSiAddAlarm = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 13h8m-4 4V9m6-6 3 3M3 6l3-3m14 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
}));
SvgSiAddAlarm.displayName = "SvgSiAddAlarm";
const ForwardRef$67 = /*#__PURE__*/React.forwardRef(SvgSiAddAlarm);
const Memo$67 = /*#__PURE__*/React.memo(ForwardRef$67);

const SvgSiAddCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 12h8m-4 4V8m10 4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiAddCircle.displayName = "SvgSiAddCircle";
const ForwardRef$66 = /*#__PURE__*/React.forwardRef(SvgSiAddCircle);
const Memo$66 = /*#__PURE__*/React.memo(ForwardRef$66);

const SvgSiAddSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 12h8m-4 4V8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiAddSquare.displayName = "SvgSiAddSquare";
const ForwardRef$65 = /*#__PURE__*/React.forwardRef(SvgSiAddSquare);
const Memo$65 = /*#__PURE__*/React.memo(ForwardRef$65);

const SvgSiAddToLibrary = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M20 22H8.4C5.42 22 3 19.58 3 16.6V5m11 10V7m4 4h-8M8.4 3h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"
}));
SvgSiAddToLibrary.displayName = "SvgSiAddToLibrary";
const ForwardRef$64 = /*#__PURE__*/React.forwardRef(SvgSiAddToLibrary);
const Memo$64 = /*#__PURE__*/React.memo(ForwardRef$64);

const SvgSiAddToPlaylist = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M4 11h12m-1 4 2 2 4-4M4 7h12M4 15h8"
}));
SvgSiAddToPlaylist.displayName = "SvgSiAddToPlaylist";
const ForwardRef$63 = /*#__PURE__*/React.forwardRef(SvgSiAddToPlaylist);
const Memo$63 = /*#__PURE__*/React.memo(ForwardRef$63);

const SvgSiAirplane = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M10.292 7.043c0-3.478.424-5.043 1.698-5.043 1.273 0 1.708 1.565 1.708 5.043V8.74l6.238 3.957c.425.304.57.804.552 1.304v2l-6.532-2.62a.4.4 0 0 0-.548.345l-.304 4.753 2.376 1.348c.212.13.34.391.34.652L15.507 22l-3.517-1.174L8.483 22l-.313-1.522c0-.26.127-.522.34-.652l2.376-1.348-.304-4.753a.4.4 0 0 0-.548-.345L3.502 16v-2c-.019-.5.127-1 .551-1.304l6.239-3.957z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M10.292 7.043c0-3.478.424-5.043 1.698-5.043 1.273 0 1.708 1.565 1.708 5.043V8.74l6.238 3.957c.425.304.57.804.552 1.304v2l-6.532-2.62a.4.4 0 0 0-.548.345l-.304 4.753 2.376 1.348c.212.13.34.391.34.652L15.507 22l-3.517-1.174L8.483 22l-.313-1.522c0-.26.127-.522.34-.652l2.376-1.348-.304-4.753a.4.4 0 0 0-.548-.345L3.502 16v-2c-.019-.5.127-1 .551-1.304l6.239-3.957z"
}));
SvgSiAirplane.displayName = "SvgSiAirplane";
const ForwardRef$62 = /*#__PURE__*/React.forwardRef(SvgSiAirplane);
const Memo$62 = /*#__PURE__*/React.memo(ForwardRef$62);

const SvgSiAirplaneAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M15.296 6.291c2.46-2.46 3.866-3.266 4.766-2.366s.101 2.315-2.358 4.774l-1.2 1.2 1.614 7.208c.085.516-.165.972-.532 1.313l-1.414 1.414-2.766-6.472a.4.4 0 0 0-.632-.143l-3.576 3.146.727 2.633c.058.243-.036.517-.22.701l-1.298.855-1.657-3.317-3.31-1.65.855-1.297c.185-.184.46-.278.701-.22l2.634.727 3.146-3.576a.4.4 0 0 0-.143-.632L4.16 7.823l1.414-1.415c.34-.366.797-.617 1.312-.532l7.21 1.614z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M15.296 6.291c2.46-2.46 3.866-3.266 4.766-2.366s.101 2.315-2.358 4.774l-1.2 1.2 1.614 7.208c.085.516-.165.972-.532 1.313l-1.414 1.414-2.766-6.472a.4.4 0 0 0-.632-.143l-3.576 3.146.727 2.633c.058.243-.036.517-.22.702l-1.298.854-1.657-3.317-3.31-1.65.855-1.296c.185-.185.46-.28.701-.222l2.634.728 3.146-3.576a.4.4 0 0 0-.143-.632L4.16 7.823l1.414-1.414c.34-.367.797-.618 1.312-.533l7.21 1.614z"
}));
SvgSiAirplaneAlt.displayName = "SvgSiAirplaneAlt";
const ForwardRef$61 = /*#__PURE__*/React.forwardRef(SvgSiAirplaneAlt);
const Memo$61 = /*#__PURE__*/React.memo(ForwardRef$61);

const SvgSiAlbum = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-6 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
}));
SvgSiAlbum.displayName = "SvgSiAlbum";
const ForwardRef$60 = /*#__PURE__*/React.forwardRef(SvgSiAlbum);
const Memo$60 = /*#__PURE__*/React.memo(ForwardRef$60);

const SvgSiAlert = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M10.575 5.217 3.517 17a1.667 1.667 0 0 0 1.425 2.5h14.116a1.666 1.666 0 0 0 1.425-2.5L13.426 5.217a1.666 1.666 0 0 0-2.85 0"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 16h.008M12 10v3m-1.425-7.783L3.517 17a1.667 1.667 0 0 0 1.425 2.5h14.116a1.666 1.666 0 0 0 1.425-2.5L13.426 5.217a1.666 1.666 0 0 0-2.85 0"
}));
SvgSiAlert.displayName = "SvgSiAlert";
const ForwardRef$5$ = /*#__PURE__*/React.forwardRef(SvgSiAlert);
const Memo$5$ = /*#__PURE__*/React.memo(ForwardRef$5$);

const SvgSiAlignBottomDetailed = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M17.4 10h-1.8a1.6 1.6 0 0 0-1.6 1.6v4.8a1.6 1.6 0 0 0 1.6 1.6h1.8a1.6 1.6 0 0 0 1.6-1.6v-4.8a1.6 1.6 0 0 0-1.6-1.6m-9-8H6.6A1.6 1.6 0 0 0 5 3.6v12.8A1.6 1.6 0 0 0 6.6 18h1.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 8.4 2"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M2 22h20m-6.4-12h1.8a1.6 1.6 0 0 1 1.6 1.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6v-4.8a1.6 1.6 0 0 1 1.6-1.6m-9-8h1.8A1.6 1.6 0 0 1 10 3.6v12.8A1.6 1.6 0 0 1 8.4 18H6.6A1.6 1.6 0 0 1 5 16.4V3.6A1.6 1.6 0 0 1 6.6 2"
}));
SvgSiAlignBottomDetailed.displayName = "SvgSiAlignBottomDetailed";
const ForwardRef$5_ = /*#__PURE__*/React.forwardRef(SvgSiAlignBottomDetailed);
const Memo$5_ = /*#__PURE__*/React.memo(ForwardRef$5_);

const SvgSiAlignBottomSimple = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M13.4 2h-2.8A1.6 1.6 0 0 0 9 3.6v12.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 13.4 2"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M2 22h20M10.6 2h2.8A1.6 1.6 0 0 1 15 3.6v12.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 16.4V3.6A1.6 1.6 0 0 1 10.6 2"
}));
SvgSiAlignBottomSimple.displayName = "SvgSiAlignBottomSimple";
const ForwardRef$5Z = /*#__PURE__*/React.forwardRef(SvgSiAlignBottomSimple);
const Memo$5Z = /*#__PURE__*/React.memo(ForwardRef$5Z);

const SvgSiAlignCenter = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M6 10h12M3 6h18M3 14h18M6 18h12"
}));
SvgSiAlignCenter.displayName = "SvgSiAlignCenter";
const ForwardRef$5Y = /*#__PURE__*/React.forwardRef(SvgSiAlignCenter);
const Memo$5Y = /*#__PURE__*/React.memo(ForwardRef$5Y);

const SvgSiAlignHorizCenterDetailed = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M16 17.4v-1.8a1.6 1.6 0 0 0-1.6-1.6H9.6A1.6 1.6 0 0 0 8 15.6v1.8A1.6 1.6 0 0 0 9.6 19h4.8a1.6 1.6 0 0 0 1.6-1.6m4-9V6.6A1.6 1.6 0 0 0 18.4 5H5.6A1.6 1.6 0 0 0 4 6.6v1.8A1.6 1.6 0 0 0 5.6 10h12.8A1.6 1.6 0 0 0 20 8.4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 2v3m0 5v4m0 5v3m4-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6H9.6A1.6 1.6 0 0 1 8 17.4v-1.8A1.6 1.6 0 0 1 9.6 14h4.8a1.6 1.6 0 0 1 1.6 1.6m4-9v1.8a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 8.4V6.6A1.6 1.6 0 0 1 5.6 5h12.8A1.6 1.6 0 0 1 20 6.6"
}));
SvgSiAlignHorizCenterDetailed.displayName = "SvgSiAlignHorizCenterDetailed";
const ForwardRef$5X = /*#__PURE__*/React.forwardRef(SvgSiAlignHorizCenterDetailed);
const Memo$5X = /*#__PURE__*/React.memo(ForwardRef$5X);

const SvgSiAlignHorizCenterSimple = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20 13.4v-2.8A1.6 1.6 0 0 0 18.4 9H5.6A1.6 1.6 0 0 0 4 10.6v2.8A1.6 1.6 0 0 0 5.6 15h12.8a1.6 1.6 0 0 0 1.6-1.6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 2v7m0 6v7m8-11.4v2.8a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 13.4v-2.8A1.6 1.6 0 0 1 5.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6"
}));
SvgSiAlignHorizCenterSimple.displayName = "SvgSiAlignHorizCenterSimple";
const ForwardRef$5W = /*#__PURE__*/React.forwardRef(SvgSiAlignHorizCenterSimple);
const Memo$5W = /*#__PURE__*/React.memo(ForwardRef$5W);

const SvgSiAlignJustify = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M3 10h18M3 6h18M3 14h18M3 18h18"
}));
SvgSiAlignJustify.displayName = "SvgSiAlignJustify";
const ForwardRef$5V = /*#__PURE__*/React.forwardRef(SvgSiAlignJustify);
const Memo$5V = /*#__PURE__*/React.memo(ForwardRef$5V);

const SvgSiAlignLeft = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M3 10h12M3 6h18M3 14h18M3 18h12"
}));
SvgSiAlignLeft.displayName = "SvgSiAlignLeft";
const ForwardRef$5U = /*#__PURE__*/React.forwardRef(SvgSiAlignLeft);
const Memo$5U = /*#__PURE__*/React.memo(ForwardRef$5U);

const SvgSiAlignLeftDetailed = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M22 6.6v1.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 8.4V6.6A1.6 1.6 0 0 1 7.6 5h12.8A1.6 1.6 0 0 1 22 6.6m-8 9v1.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 17.4v-1.8A1.6 1.6 0 0 1 7.6 14h4.8a1.6 1.6 0 0 1 1.6 1.6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M2 2v20m12-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 17.4v-1.8A1.6 1.6 0 0 1 7.6 14h4.8a1.6 1.6 0 0 1 1.6 1.6m8-9v1.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 8.4V6.6A1.6 1.6 0 0 1 7.6 5h12.8A1.6 1.6 0 0 1 22 6.6"
}));
SvgSiAlignLeftDetailed.displayName = "SvgSiAlignLeftDetailed";
const ForwardRef$5T = /*#__PURE__*/React.forwardRef(SvgSiAlignLeftDetailed);
const Memo$5T = /*#__PURE__*/React.memo(ForwardRef$5T);

const SvgSiAlignLeftSimple = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M22 13.4v-2.8A1.6 1.6 0 0 0 20.4 9H7.6A1.6 1.6 0 0 0 6 10.6v2.8A1.6 1.6 0 0 0 7.6 15h12.8a1.6 1.6 0 0 0 1.6-1.6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M2 2v20m20-11.4v2.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 13.4v-2.8A1.6 1.6 0 0 1 7.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6"
}));
SvgSiAlignLeftSimple.displayName = "SvgSiAlignLeftSimple";
const ForwardRef$5S = /*#__PURE__*/React.forwardRef(SvgSiAlignLeftSimple);
const Memo$5S = /*#__PURE__*/React.memo(ForwardRef$5S);

const SvgSiAlignRight = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9 10h12M3 6h18M3 14h18M9 18h12"
}));
SvgSiAlignRight.displayName = "SvgSiAlignRight";
const ForwardRef$5R = /*#__PURE__*/React.forwardRef(SvgSiAlignRight);
const Memo$5R = /*#__PURE__*/React.memo(ForwardRef$5R);

const SvgSiAlignRightDetailed = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18 17.4v-1.8a1.6 1.6 0 0 0-1.6-1.6h-4.8a1.6 1.6 0 0 0-1.6 1.6v1.8a1.6 1.6 0 0 0 1.6 1.6h4.8a1.6 1.6 0 0 0 1.6-1.6m0-9V6.6A1.6 1.6 0 0 0 16.4 5H3.6A1.6 1.6 0 0 0 2 6.6v1.8A1.6 1.6 0 0 0 3.6 10h12.8A1.6 1.6 0 0 0 18 8.4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M22 2v20m-4-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6h-4.8a1.6 1.6 0 0 1-1.6-1.6v-1.8a1.6 1.6 0 0 1 1.6-1.6h4.8a1.6 1.6 0 0 1 1.6 1.6m0-9v1.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 8.4V6.6A1.6 1.6 0 0 1 3.6 5h12.8A1.6 1.6 0 0 1 18 6.6"
}));
SvgSiAlignRightDetailed.displayName = "SvgSiAlignRightDetailed";
const ForwardRef$5Q = /*#__PURE__*/React.forwardRef(SvgSiAlignRightDetailed);
const Memo$5Q = /*#__PURE__*/React.memo(ForwardRef$5Q);

const SvgSiAlignRightSimple = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M2 10.6v2.8A1.6 1.6 0 0 0 3.6 15h12.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 16.4 9H3.6A1.6 1.6 0 0 0 2 10.6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M22 22V2M2 13.4v-2.8A1.6 1.6 0 0 1 3.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 13.4"
}));
SvgSiAlignRightSimple.displayName = "SvgSiAlignRightSimple";
const ForwardRef$5P = /*#__PURE__*/React.forwardRef(SvgSiAlignRightSimple);
const Memo$5P = /*#__PURE__*/React.memo(ForwardRef$5P);

const SvgSiAlignTopDetailed = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M17.4 6h-1.8A1.6 1.6 0 0 0 14 7.6v4.8a1.6 1.6 0 0 0 1.6 1.6h1.8a1.6 1.6 0 0 0 1.6-1.6V7.6A1.6 1.6 0 0 0 17.4 6m-9 0H6.6A1.6 1.6 0 0 0 5 7.6v12.8A1.6 1.6 0 0 0 6.6 22h1.8a1.6 1.6 0 0 0 1.6-1.6V7.6A1.6 1.6 0 0 0 8.4 6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M2 2h20m-6.4 4h1.8A1.6 1.6 0 0 1 19 7.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6V7.6A1.6 1.6 0 0 1 15.6 6m-9 0h1.8A1.6 1.6 0 0 1 10 7.6v12.8A1.6 1.6 0 0 1 8.4 22H6.6A1.6 1.6 0 0 1 5 20.4V7.6A1.6 1.6 0 0 1 6.6 6"
}));
SvgSiAlignTopDetailed.displayName = "SvgSiAlignTopDetailed";
const ForwardRef$5O = /*#__PURE__*/React.forwardRef(SvgSiAlignTopDetailed);
const Memo$5O = /*#__PURE__*/React.memo(ForwardRef$5O);

const SvgSiAlignTopSimple = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M13.4 6h-2.8A1.6 1.6 0 0 0 9 7.6v12.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6V7.6A1.6 1.6 0 0 0 13.4 6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M2 2h20M10.6 6h2.8A1.6 1.6 0 0 1 15 7.6v12.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 20.4V7.6A1.6 1.6 0 0 1 10.6 6"
}));
SvgSiAlignTopSimple.displayName = "SvgSiAlignTopSimple";
const ForwardRef$5N = /*#__PURE__*/React.forwardRef(SvgSiAlignTopSimple);
const Memo$5N = /*#__PURE__*/React.memo(ForwardRef$5N);

const SvgSiAlignVertCenterDetailed = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M17.4 8h-1.8A1.6 1.6 0 0 0 14 9.6v4.8a1.6 1.6 0 0 0 1.6 1.6h1.8a1.6 1.6 0 0 0 1.6-1.6V9.6A1.6 1.6 0 0 0 17.4 8m-9-4H6.6A1.6 1.6 0 0 0 5 5.6v12.8A1.6 1.6 0 0 0 6.6 20h1.8a1.6 1.6 0 0 0 1.6-1.6V5.6A1.6 1.6 0 0 0 8.4 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M2 12h3m14 0h3m-12 0h4m1.6-4h1.8A1.6 1.6 0 0 1 19 9.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6V9.6A1.6 1.6 0 0 1 15.6 8m-9-4h1.8A1.6 1.6 0 0 1 10 5.6v12.8A1.6 1.6 0 0 1 8.4 20H6.6A1.6 1.6 0 0 1 5 18.4V5.6A1.6 1.6 0 0 1 6.6 4"
}));
SvgSiAlignVertCenterDetailed.displayName = "SvgSiAlignVertCenterDetailed";
const ForwardRef$5M = /*#__PURE__*/React.forwardRef(SvgSiAlignVertCenterDetailed);
const Memo$5M = /*#__PURE__*/React.memo(ForwardRef$5M);

const SvgSiAlignVertCenterSimple = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M13.4 4h-2.8A1.6 1.6 0 0 0 9 5.6v12.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6V5.6A1.6 1.6 0 0 0 13.4 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M2 12h7m6 0h7M10.6 4h2.8A1.6 1.6 0 0 1 15 5.6v12.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 18.4V5.6A1.6 1.6 0 0 1 10.6 4"
}));
SvgSiAlignVertCenterSimple.displayName = "SvgSiAlignVertCenterSimple";
const ForwardRef$5L = /*#__PURE__*/React.forwardRef(SvgSiAlignVertCenterSimple);
const Memo$5L = /*#__PURE__*/React.memo(ForwardRef$5L);

const SvgSiApple = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.764 8.819c-.116.09-2.165 1.244-2.165 3.81 0 2.968 2.607 4.019 2.685 4.045-.012.064-.414 1.438-1.374 2.838-.857 1.232-1.75 2.462-3.11 2.462-1.361 0-1.711-.79-3.281-.79-1.53 0-2.074.816-3.318.816s-2.113-1.14-3.11-2.54C4.933 17.816 4 15.26 4 12.837c0-3.888 2.528-5.95 5.017-5.95 1.322 0 2.424.868 3.254.868.79 0 2.022-.92 3.526-.92.57 0 2.618.051 3.967 1.984"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M19.764 8.819c-.116.09-2.165 1.244-2.165 3.81 0 2.968 2.607 4.019 2.685 4.045-.012.064-.414 1.438-1.374 2.838-.857 1.232-1.75 2.462-3.11 2.462-1.361 0-1.711-.79-3.281-.79-1.53 0-2.074.816-3.318.816s-2.113-1.14-3.11-2.54C4.933 17.816 4 15.26 4 12.837c0-3.888 2.528-5.95 5.017-5.95 1.322 0 2.424.868 3.254.868.79 0 2.022-.92 3.526-.92.57 0 2.618.051 3.967 1.984Zm-4.681-3.631c.622-.738 1.062-1.762 1.062-2.786A2 2 0 0 0 16.107 2c-1.012.038-2.216.674-2.942 1.516-.57.648-1.102 1.672-1.102 2.71 0 .156.026.312.038.362.064.012.168.026.272.026.908 0 2.05-.608 2.71-1.426Z"
}));
SvgSiApple.displayName = "SvgSiApple";
const ForwardRef$5K = /*#__PURE__*/React.forwardRef(SvgSiApple);
const Memo$5K = /*#__PURE__*/React.memo(ForwardRef$5K);

const SvgSiArchive = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M16 7H7.95v1.45c0 .856.694 1.55 1.55 1.55h4.95A1.55 1.55 0 0 0 16 8.45z",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m21 7-1 11.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3 7m13 0v2.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V7M2.6 3h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3"
}));
SvgSiArchive.displayName = "SvgSiArchive";
const ForwardRef$5J = /*#__PURE__*/React.forwardRef(SvgSiArchive);
const Memo$5J = /*#__PURE__*/React.memo(ForwardRef$5J);

const SvgSiArchiveAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m21 7-1 11.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3 7"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m21 7-1 11.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3 7m12 10-6-6m6 0-6 6M2.6 3h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3"
}));
SvgSiArchiveAlt.displayName = "SvgSiArchiveAlt";
const ForwardRef$5I = /*#__PURE__*/React.forwardRef(SvgSiArchiveAlt);
const Memo$5I = /*#__PURE__*/React.memo(ForwardRef$5I);

const SvgSiArrowDownward = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m8 14 4 4m0 0 4-4m-4 4V6"
}));
SvgSiArrowDownward.displayName = "SvgSiArrowDownward";
const ForwardRef$5H = /*#__PURE__*/React.forwardRef(SvgSiArrowDownward);
const Memo$5H = /*#__PURE__*/React.memo(ForwardRef$5H);

const SvgSiArrowDownwardCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "M8.53 11.47a.75.75 0 0 0-1.06 1.06zM12 16l-.53.53a.75.75 0 0 0 1.06 0zm4.53-3.47a.75.75 0 1 0-1.06-1.06zM12.75 8a.75.75 0 0 0-1.5 0zm8.5 4A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75zm-4.53 9.78 4 4 1.06-1.06-4-4zm5.06 4 4-4-1.06-1.06-4 4zm.22-.53V8h-1.5v8z"
}));
SvgSiArrowDownwardCircle.displayName = "SvgSiArrowDownwardCircle";
const ForwardRef$5G = /*#__PURE__*/React.forwardRef(SvgSiArrowDownwardCircle);
const Memo$5G = /*#__PURE__*/React.memo(ForwardRef$5G);

const SvgSiArrowDownwardSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m8 12 4 4m0 0 4-4m-4 4V8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiArrowDownwardSquare.displayName = "SvgSiArrowDownwardSquare";
const ForwardRef$5F = /*#__PURE__*/React.forwardRef(SvgSiArrowDownwardSquare);
const Memo$5F = /*#__PURE__*/React.memo(ForwardRef$5F);

const SvgSiArrowLeft = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m10 16-4-4m0 0 4-4m-4 4h12"
}));
SvgSiArrowLeft.displayName = "SvgSiArrowLeft";
const ForwardRef$5E = /*#__PURE__*/React.forwardRef(SvgSiArrowLeft);
const Memo$5E = /*#__PURE__*/React.memo(ForwardRef$5E);

const SvgSiArrowLeftCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m12 16-4-4m0 0 4-4m-4 4h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiArrowLeftCircle.displayName = "SvgSiArrowLeftCircle";
const ForwardRef$5D = /*#__PURE__*/React.forwardRef(SvgSiArrowLeftCircle);
const Memo$5D = /*#__PURE__*/React.memo(ForwardRef$5D);

const SvgSiArrowLeftSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m12 16-4-4m0 0 4-4m-4 4h8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiArrowLeftSquare.displayName = "SvgSiArrowLeftSquare";
const ForwardRef$5C = /*#__PURE__*/React.forwardRef(SvgSiArrowLeftSquare);
const Memo$5C = /*#__PURE__*/React.memo(ForwardRef$5C);

const SvgSiArrowRight = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m14 16 4-4m0 0-4-4m4 4H6"
}));
SvgSiArrowRight.displayName = "SvgSiArrowRight";
const ForwardRef$5B = /*#__PURE__*/React.forwardRef(SvgSiArrowRight);
const Memo$5B = /*#__PURE__*/React.memo(ForwardRef$5B);

const SvgSiArrowRightCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m12 16 4-4m0 0-4-4m4 4H8m14 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiArrowRightCircle.displayName = "SvgSiArrowRightCircle";
const ForwardRef$5A = /*#__PURE__*/React.forwardRef(SvgSiArrowRightCircle);
const Memo$5A = /*#__PURE__*/React.memo(ForwardRef$5A);

const SvgSiArrowRightSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m12 16 4-4m0 0-4-4m4 4H8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiArrowRightSquare.displayName = "SvgSiArrowRightSquare";
const ForwardRef$5z = /*#__PURE__*/React.forwardRef(SvgSiArrowRightSquare);
const Memo$5z = /*#__PURE__*/React.memo(ForwardRef$5z);

const SvgSiArrowUpward = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m8 10 4-4m0 0 4 4m-4-4v12"
}));
SvgSiArrowUpward.displayName = "SvgSiArrowUpward";
const ForwardRef$5y = /*#__PURE__*/React.forwardRef(SvgSiArrowUpward);
const Memo$5y = /*#__PURE__*/React.memo(ForwardRef$5y);

const SvgSiArrowUpwardCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m8 12 4-4m0 0 4 4m-4-4v8m10-4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiArrowUpwardCircle.displayName = "SvgSiArrowUpwardCircle";
const ForwardRef$5x = /*#__PURE__*/React.forwardRef(SvgSiArrowUpwardCircle);
const Memo$5x = /*#__PURE__*/React.memo(ForwardRef$5x);

const SvgSiArrowUpwardSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m8 12 4-4m0 0 4 4m-4-4v8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiArrowUpwardSquare.displayName = "SvgSiArrowUpwardSquare";
const ForwardRef$5w = /*#__PURE__*/React.forwardRef(SvgSiArrowUpwardSquare);
const Memo$5w = /*#__PURE__*/React.memo(ForwardRef$5w);

const SvgSiArticle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 4H4.4A2.4 2.4 0 0 0 2 6.4v11.2A2.4 2.4 0 0 0 4.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 19.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 12h8m-8 3h4M8 9h8M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 17.6V6.4A2.4 2.4 0 0 1 4.4 4"
}));
SvgSiArticle.displayName = "SvgSiArticle";
const ForwardRef$5v = /*#__PURE__*/React.forwardRef(SvgSiArticle);
const Memo$5v = /*#__PURE__*/React.memo(ForwardRef$5v);

const SvgSiAssignment = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M16 5.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V3h8z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7 14h10M7 11h10M7 17h6M10 3a2 2 0 1 1 4 0M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3M16 5.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V3h8z"
}));
SvgSiAssignment.displayName = "SvgSiAssignment";
const ForwardRef$5u = /*#__PURE__*/React.forwardRef(SvgSiAssignment);
const Memo$5u = /*#__PURE__*/React.memo(ForwardRef$5u);

const SvgSiAttachment = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m19.605 10.48.137-.136a4.31 4.31 0 0 0 0-6.086 4.307 4.307 0 0 0-6.086 0l-9.398 9.398a4.307 4.307 0 0 0 0 6.086 4.31 4.31 0 0 0 6.086 0l6.351-6.356a2.35 2.35 0 0 0-1.66-4.008 2.35 2.35 0 0 0-1.66.688l-6.657 6.656"
}));
SvgSiAttachment.displayName = "SvgSiAttachment";
const ForwardRef$5t = /*#__PURE__*/React.forwardRef(SvgSiAttachment);
const Memo$5t = /*#__PURE__*/React.memo(ForwardRef$5t);

const SvgSiBallot = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 15h5m-5-6h5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3ZM9 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
}));
SvgSiBallot.displayName = "SvgSiBallot";
const ForwardRef$5s = /*#__PURE__*/React.forwardRef(SvgSiBallot);
const Memo$5s = /*#__PURE__*/React.memo(ForwardRef$5s);

const SvgSiBarChart = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M13.4 2h-2.8A1.6 1.6 0 0 0 9 3.6V22h6V3.6A1.6 1.6 0 0 0 13.4 2"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M2 22h20M9 8.6A1.6 1.6 0 0 0 7.4 7H4.6A1.6 1.6 0 0 0 3 8.6V22m6 0V3.6A1.6 1.6 0 0 1 10.6 2h2.8A1.6 1.6 0 0 1 15 3.6V22m6 0v-8.4a1.6 1.6 0 0 0-1.6-1.6h-2.8a1.6 1.6 0 0 0-1.6 1.6"
}));
SvgSiBarChart.displayName = "SvgSiBarChart";
const ForwardRef$5r = /*#__PURE__*/React.forwardRef(SvgSiBarChart);
const Memo$5r = /*#__PURE__*/React.memo(ForwardRef$5r);

const SvgSiBarcode = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M6 22H4.4A2.4 2.4 0 0 1 2 19.6V18m16 4h1.6a2.4 2.4 0 0 0 2.4-2.4V18m0-12V4.4A2.4 2.4 0 0 0 19.6 2H18M6 2H4.4A2.4 2.4 0 0 0 2 4.4V6m16 3v6m-4-6v6m-4-6v6M6 9v6"
}));
SvgSiBarcode.displayName = "SvgSiBarcode";
const ForwardRef$5q = /*#__PURE__*/React.forwardRef(SvgSiBarcode);
const Memo$5q = /*#__PURE__*/React.memo(ForwardRef$5q);

const SvgSiBarcodeScan = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7 21H5.4A2.4 2.4 0 0 1 3 18.6V17m14 4h1.6a2.4 2.4 0 0 0 2.4-2.4V17m0-10V5.4A2.4 2.4 0 0 0 18.6 3H17M7 3H5.4A2.4 2.4 0 0 0 3 5.4V7m-2 5h22"
}));
SvgSiBarcodeScan.displayName = "SvgSiBarcodeScan";
const ForwardRef$5p = /*#__PURE__*/React.forwardRef(SvgSiBarcodeScan);
const Memo$5p = /*#__PURE__*/React.memo(ForwardRef$5p);

const SvgSiBarcodeScanAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
  clipPath: "url(#a)"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M5.6 4h2.8A1.6 1.6 0 0 1 10 5.6v2.8A1.6 1.6 0 0 1 8.4 10H5.6A1.6 1.6 0 0 1 4 8.4V5.6A1.6 1.6 0 0 1 5.6 4m10 10h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8a1.6 1.6 0 0 1-1.6-1.6v-2.8a1.6 1.6 0 0 1 1.6-1.6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M5 23H3.4A2.4 2.4 0 0 1 1 20.6V19m18 4h1.6a2.4 2.4 0 0 0 2.4-2.4V19m0-14V3.4A2.4 2.4 0 0 0 20.6 1H19M5 1H3.4A2.4 2.4 0 0 0 1 3.4V5m4.6-1h2.8A1.6 1.6 0 0 1 10 5.6v2.8A1.6 1.6 0 0 1 8.4 10H5.6A1.6 1.6 0 0 1 4 8.4V5.6A1.6 1.6 0 0 1 5.6 4m0 10h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8A1.6 1.6 0 0 1 8.4 20H5.6A1.6 1.6 0 0 1 4 18.4v-2.8A1.6 1.6 0 0 1 5.6 14m10-10h2.8A1.6 1.6 0 0 1 20 5.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 14 8.4V5.6A1.6 1.6 0 0 1 15.6 4m0 10h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8a1.6 1.6 0 0 1-1.6-1.6v-2.8a1.6 1.6 0 0 1 1.6-1.6"
})), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "#fff",
  d: "M0 0h24v24H0z"
}))));
SvgSiBarcodeScanAlt.displayName = "SvgSiBarcodeScanAlt";
const ForwardRef$5o = /*#__PURE__*/React.forwardRef(SvgSiBarcodeScanAlt);
const Memo$5o = /*#__PURE__*/React.memo(ForwardRef$5o);

const SvgSiBarn = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18 21h.6a2.4 2.4 0 0 0 2.4-2.412V9.332c0-.382-.18-.734-.48-.965L12.7 3.24a1.195 1.195 0 0 0-1.44 0L3.48 8.367c-.3.231-.48.583-.48.965v9.256A2.4 2.4 0 0 0 5.4 21H6v-5.2c0-.44.36-.8.8-.8h10.4c.44 0 .8.36.8.8z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "M.587 9.374a.75.75 0 1 0 .826 1.252L1 10zM11.26 3.24l.413.626.035-.024zm1.44 0-.448.602.037.025zm9.889 7.387a.75.75 0 1 0 .823-1.254L23 10zm-.839-1.94a.75.75 0 0 0-1.5 0zm-18-.005a.75.75 0 0 0-1.5 0zM11 11.25a.75.75 0 0 0 0 1.5zm2 1.5a.75.75 0 0 0 0-1.5zM17.25 21a.75.75 0 0 0 1.5 0zm-12 0a.75.75 0 0 0 1.5 0zm.94-1.183a.75.75 0 0 0 .62 1.366L6.5 20.5zm11.62-3.634a.75.75 0 0 0-.62-1.366l.31.683zm-.62 5a.75.75 0 0 0 .62-1.366l-.31.683zM6.81 14.817a.75.75 0 0 0-.62 1.366l.31-.683zM1 10l.413.626 10.26-6.76-.413-.626-.413-.626-10.26 6.76zm10.26-6.76.448.602a.45.45 0 0 1 .544 0l.448-.602.448-.602a1.95 1.95 0 0 0-2.336 0zm1.44 0-.411.627 10.3 6.76L23 10l.412-.627-10.3-6.76zM21 8.687h-.75V18.6h1.5V8.687zm0 9.913h-.75c0 .916-.734 1.65-1.65 1.65v1.5a3.144 3.144 0 0 0 3.15-3.15zM18.6 21v-.75H5.4v1.5h13.2zM5.4 21v-.75c-.916 0-1.65-.734-1.65-1.65h-1.5a3.144 3.144 0 0 0 3.15 3.15zM3 18.6h.75V8.682h-1.5V18.6zM15 21v-.75H9v1.5h6zm-4-9v.75h2v-1.5h-2zm-4.2 3v.75h10.4v-1.5H6.8zm10.4 0v.75a.05.05 0 0 1 .05.05h1.5a1.55 1.55 0 0 0-1.55-1.55zm.8.8h-.75V21h1.5v-5.2zM6 21h.75v-5.2h-1.5V21zm0-5.2h.75a.05.05 0 0 1 .05-.05v-1.5a1.55 1.55 0 0 0-1.55 1.55zm.5 4.7.31.683 11-5-.31-.683-.31-.683-11 5zm11 0 .31-.683-11-5-.31.683-.31.683 11 5z"
}));
SvgSiBarn.displayName = "SvgSiBarn";
const ForwardRef$5n = /*#__PURE__*/React.forwardRef(SvgSiBarn);
const Memo$5n = /*#__PURE__*/React.memo(ForwardRef$5n);

const SvgSiBin = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19 19.6V8H5v11.6A2.4 2.4 0 0 0 7.4 22h9.2a2.4 2.4 0 0 0 2.4-2.4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M19 8v11.6a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 19.6V8m11-3V3.2c0-.66-.54-1.2-1.2-1.2H9.2C8.54 2 8 2.54 8 3.2V5m8 0H8m8 0h5M8 5H3m9 6v6m3-6v6m-6-6v6"
}));
SvgSiBin.displayName = "SvgSiBin";
const ForwardRef$5m = /*#__PURE__*/React.forwardRef(SvgSiBin);
const Memo$5m = /*#__PURE__*/React.memo(ForwardRef$5m);

const SvgSiBluetooth = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m12 12 6 5-6 5V2l6 5z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m5 6 13 11-6 5V2l6 5L5 18"
}));
SvgSiBluetooth.displayName = "SvgSiBluetooth";
const ForwardRef$5l = /*#__PURE__*/React.forwardRef(SvgSiBluetooth);
const Memo$5l = /*#__PURE__*/React.memo(ForwardRef$5l);

const SvgSiBold = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.25 16c0-2.297-1.984-4.25-4.432-4.25H7.75v8.5h6.068c2.448 0 4.432-1.953 4.432-4.25m-3-9c0-1.755-1.52-3.25-3.5-3.25h-4v6.5h4c1.98 0 3.5-1.495 3.5-3.25"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7 3h4.75C14.1 3 16 4.788 16 7s-1.9 4-4.25 4H7h6.818C16.654 11 19 13.263 19 16s-2.346 5-5.182 5H7M7 3H5m2 0v18m0 0H5"
}));
SvgSiBold.displayName = "SvgSiBold";
const ForwardRef$5k = /*#__PURE__*/React.forwardRef(SvgSiBold);
const Memo$5k = /*#__PURE__*/React.memo(ForwardRef$5k);

const SvgSiBook = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 7.333C12 5.5 10.5 4 8.667 4H2v12h6.708C12 16 12 19.334 12 19.334S12 16 15.333 16H22V4h-6.667A3.343 3.343 0 0 0 12 7.333"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 7.333C12 5.5 10.5 4 8.667 4H2v12h6.708C12 16 12 19.334 12 19.334m0-12C12 5.5 13.5 4 15.333 4H22v12h-6.667C12 16 12 19.334 12 19.334m0-12v12m1.875 1.124A2.58 2.58 0 0 1 16.167 19H21m-10.875 1.458A2.54 2.54 0 0 0 7.833 19H3"
}));
SvgSiBook.displayName = "SvgSiBook";
const ForwardRef$5j = /*#__PURE__*/React.forwardRef(SvgSiBook);
const Memo$5j = /*#__PURE__*/React.memo(ForwardRef$5j);

const SvgSiBookmark = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M12 17.025c-.142 0-.341.072-.588.208a7 7 0 0 0-.835.56c-.614.464-1.317 1.085-1.983 1.706a62 62 0 0 0-2.455 2.43l-.04.041-.013.014a.05.05 0 0 1-.055.012A.05.05 0 0 1 6 21.95V4.438A2.43 2.43 0 0 1 8.43 2h7.14A2.43 2.43 0 0 1 18 4.438V21.95a.05.05 0 0 1-.085.034h-.001l-.013-.014-.04-.041-.151-.158a67 67 0 0 0-2.304-2.272c-.666-.621-1.37-1.242-1.983-1.707a7 7 0 0 0-.835-.56c-.247-.135-.446-.207-.588-.207",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 17.025c-.142 0-.341.072-.588.208a7 7 0 0 0-.835.56c-.614.464-1.317 1.085-1.983 1.706a62 62 0 0 0-2.455 2.43l-.04.041-.013.014a.05.05 0 0 1-.055.012A.05.05 0 0 1 6 21.95V4.438A2.43 2.43 0 0 1 8.43 2h7.14A2.43 2.43 0 0 1 18 4.438V21.95a.05.05 0 0 1-.085.034h-.001l-.013-.014-.04-.041-.151-.158a67 67 0 0 0-2.304-2.272c-.666-.621-1.37-1.242-1.983-1.707a7 7 0 0 0-.835-.56c-.247-.135-.446-.207-.588-.207Z",
  clipRule: "evenodd"
}));
SvgSiBookmark.displayName = "SvgSiBookmark";
const ForwardRef$5i = /*#__PURE__*/React.forwardRef(SvgSiBookmark);
const Memo$5i = /*#__PURE__*/React.memo(ForwardRef$5i);

const SvgSiBriefcase = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M15 21V4.8a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V21M4.4 7h15.2A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7"
}));
SvgSiBriefcase.displayName = "SvgSiBriefcase";
const ForwardRef$5h = /*#__PURE__*/React.forwardRef(SvgSiBriefcase);
const Memo$5h = /*#__PURE__*/React.memo(ForwardRef$5h);

const SvgSiBriefcaseDetailed = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M4.4 7h15.2A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7m6.4 5h2.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1-.8-.8v-2.4a.8.8 0 0 1 .8-.8",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M2 14h8m4 0h8m-7-7V4.8a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V7M4.4 7h15.2A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7m6.4 5h2.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1-.8-.8v-2.4a.8.8 0 0 1 .8-.8"
}));
SvgSiBriefcaseDetailed.displayName = "SvgSiBriefcaseDetailed";
const ForwardRef$5g = /*#__PURE__*/React.forwardRef(SvgSiBriefcaseDetailed);
const Memo$5g = /*#__PURE__*/React.memo(ForwardRef$5g);

const SvgSiBriefcaseMedical = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "M9 13.25a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zM11.25 17a.75.75 0 0 0 1.5 0zm1.5-6a.75.75 0 0 0-1.5 0zM4.4 7.75h15.2v-1.5H4.4zm15.2 0c.911 0 1.65.739 1.65 1.65h1.5a3.15 3.15 0 0 0-3.15-3.15zm1.65 1.65v9.2h1.5V9.4zm0 9.2a1.65 1.65 0 0 1-1.65 1.65v1.5a3.15 3.15 0 0 0 3.15-3.15zm-1.65 1.65H4.4v1.5h15.2zm-15.2 0a1.65 1.65 0 0 1-1.65-1.65h-1.5a3.15 3.15 0 0 0 3.15 3.15zM2.75 18.6V9.4h-1.5v9.2zm0-9.2c0-.911.739-1.65 1.65-1.65v-1.5A3.15 3.15 0 0 0 1.25 9.4zM9 14.75h6v-1.5H9zM12.75 17v-6h-1.5v6zM9.8 4.75h4.4v-1.5H9.8zm4.4 0a.05.05 0 0 1 .05.05h1.5a1.55 1.55 0 0 0-1.55-1.55zm.05.05V7h1.5V4.8zM9.75 7V4.8h-1.5V7zm0-2.2a.05.05 0 0 1 .05-.05v-1.5A1.55 1.55 0 0 0 8.25 4.8z"
}));
SvgSiBriefcaseMedical.displayName = "SvgSiBriefcaseMedical";
const ForwardRef$5f = /*#__PURE__*/React.forwardRef(SvgSiBriefcaseMedical);
const Memo$5f = /*#__PURE__*/React.memo(ForwardRef$5f);

const SvgSiBriefcases = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20.6 6H7.4A2.4 2.4 0 0 0 5 8.4v8.2A2.4 2.4 0 0 0 7.4 19h13.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 20.6 6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M19 22H7.4C4.42 22 2 19.58 2 16.6V11m15 8V3.8a.8.8 0 0 0-.8-.8h-4.4a.8.8 0 0 0-.8.8V19M7.4 6h13.2A2.4 2.4 0 0 1 23 8.4v8.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V8.4A2.4 2.4 0 0 1 7.4 6"
}));
SvgSiBriefcases.displayName = "SvgSiBriefcases";
const ForwardRef$5e = /*#__PURE__*/React.forwardRef(SvgSiBriefcases);
const Memo$5e = /*#__PURE__*/React.memo(ForwardRef$5e);

const SvgSiBuilding = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20 19.6V5H4v14.6A2.4 2.4 0 0 0 6.4 22H9v-3.2a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8V22h2.6a2.4 2.4 0 0 0 2.4-2.4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M20 5v14.6a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 19.6V5m11 17v-3.2a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V22m3-14v2m0 3v2m4-7v2m0 3v2M8 8v2m0 3v2M2.8 2h18.4a.8.8 0 0 1 .8.8v1.4a.8.8 0 0 1-.8.8H2.8a.8.8 0 0 1-.8-.8V2.8a.8.8 0 0 1 .8-.8"
}));
SvgSiBuilding.displayName = "SvgSiBuilding";
const ForwardRef$5d = /*#__PURE__*/React.forwardRef(SvgSiBuilding);
const Memo$5d = /*#__PURE__*/React.memo(ForwardRef$5d);

const SvgSiBuildingAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20 19.6V2H4v17.6A2.4 2.4 0 0 0 6.4 22H9v-3.2a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8V22h2.6a2.4 2.4 0 0 0 2.4-2.4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M20 2v17.6a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 19.6V2m11 20v-3.2a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V22M3 2h18M8 6h2m4 0h2m-8 4h2m4 0h2m-8 4h2m4 0h2"
}));
SvgSiBuildingAlt1.displayName = "SvgSiBuildingAlt1";
const ForwardRef$5c = /*#__PURE__*/React.forwardRef(SvgSiBuildingAlt1);
const Memo$5c = /*#__PURE__*/React.memo(ForwardRef$5c);

const SvgSiBuildingAlt2 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M17 19.6V2H3v17.6A2.4 2.4 0 0 0 5.4 22H8v-3.2a.8.8 0 0 1 .8-.8h2.4a.8.8 0 0 1 .8.8V22h2.6a2.4 2.4 0 0 0 2.4-2.4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M17 2v17.6a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 19.6V2m18 4v13.6a2.4 2.4 0 0 1-2.4 2.4h-4.2M12 22v-3.2a.8.8 0 0 0-.8-.8H8.8a.8.8 0 0 0-.8.8V22M2 2h16m-1 4h5M12 6v2M8 6v2m4 4v2m-4-2v2"
}));
SvgSiBuildingAlt2.displayName = "SvgSiBuildingAlt2";
const ForwardRef$5b = /*#__PURE__*/React.forwardRef(SvgSiBuildingAlt2);
const Memo$5b = /*#__PURE__*/React.memo(ForwardRef$5b);

const SvgSiBuildingAlt3 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18 19.6V2H6v17.6A2.4 2.4 0 0 0 8.4 22H10v-3.2a.8.8 0 0 1 .8-.8h2.4a.8.8 0 0 1 .8.8V22h1.6a2.4 2.4 0 0 0 2.4-2.4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18 2v4m0-4H6m12 0h1m-1 4v13.6a2.4 2.4 0 0 1-2.4 2.4M18 6h4m-6.4 16h4a2.4 2.4 0 0 0 2.4-2.4V6m-6.4 16H14m0 0h-4m4 0v-3.2a.8.8 0 0 0-.8-.8h-2.4a.8.8 0 0 0-.8.8V22m0 0H8.4m0 0A2.4 2.4 0 0 1 6 19.6V6m2.4 16H4.3C2.975 22 2 20.878 2 19.553V6m4 0V2m0 4H2m4-4H5m17 4h1M2 6H1m9 0h4m-4 4h4m-4 4h4"
}));
SvgSiBuildingAlt3.displayName = "SvgSiBuildingAlt3";
const ForwardRef$5a = /*#__PURE__*/React.forwardRef(SvgSiBuildingAlt3);
const Memo$5a = /*#__PURE__*/React.memo(ForwardRef$5a);

const SvgSiBus = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20 12H4v8.4A1.6 1.6 0 0 0 5.6 22h.8A1.6 1.6 0 0 0 8 20.4V19h8v1.4a1.6 1.6 0 0 0 1.6 1.6h.8a1.6 1.6 0 0 0 1.6-1.6z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M4 12h16M8 15.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m9 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M6.4 2h11.2A2.4 2.4 0 0 1 20 4.4v16a1.6 1.6 0 0 1-1.6 1.6h-.8a1.6 1.6 0 0 1-1.6-1.6V19H8v1.4A1.6 1.6 0 0 1 6.4 22h-.8A1.6 1.6 0 0 1 4 20.4v-16A2.4 2.4 0 0 1 6.4 2"
}));
SvgSiBus.displayName = "SvgSiBus";
const ForwardRef$59 = /*#__PURE__*/React.forwardRef(SvgSiBus);
const Memo$59 = /*#__PURE__*/React.memo(ForwardRef$59);

const SvgSiCancelPhoto = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M20 22H8.4C5.42 22 3 19.58 3 16.6V5m13.828 8.828-5.656-5.656m5.656 0-5.656 5.656M8.4 3h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"
}));
SvgSiCancelPhoto.displayName = "SvgSiCancelPhoto";
const ForwardRef$58 = /*#__PURE__*/React.forwardRef(SvgSiCancelPhoto);
const Memo$58 = /*#__PURE__*/React.memo(ForwardRef$58);

const SvgSiCancelPresentation = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m7.757 16.243 8.486-8.486m0 8.486L7.757 7.757M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4Z"
}));
SvgSiCancelPresentation.displayName = "SvgSiCancelPresentation";
const ForwardRef$57 = /*#__PURE__*/React.forwardRef(SvgSiCancelPresentation);
const Memo$57 = /*#__PURE__*/React.memo(ForwardRef$57);

const SvgSiCastle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18 10h4v9.6a2.4 2.4 0 0 1-2.4 2.4H15v-4a3 3 0 1 0-6 0v4H4.4A2.4 2.4 0 0 1 2 19.6V10h4V4h12z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M22 8.047V19.6a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 19.6V8m0 2h20M6 4h12m-3 18v-4a3 3 0 1 0-6 0v4M6 2v8m4-8v2m4-2v2m4-2v8m-7-3h2m-8 6h2m10 0h2"
}));
SvgSiCastle.displayName = "SvgSiCastle";
const ForwardRef$56 = /*#__PURE__*/React.forwardRef(SvgSiCastle);
const Memo$56 = /*#__PURE__*/React.memo(ForwardRef$56);

const SvgSiCastleAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18 8V2.8a.8.8 0 0 0-.8-.8h-2.4a.8.8 0 0 0-.8.8V6h-4V2.8a.8.8 0 0 0-.8-.8H6.8a.8.8 0 0 0-.8.8v16.8A2.4 2.4 0 0 0 8.4 22H10v-3.2a.8.8 0 0 1 .8-.8h2.4a.8.8 0 0 1 .8.8V22h1.6a2.4 2.4 0 0 0 2.4-2.4z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18 8V2.8a.8.8 0 0 0-.8-.8h-2.4a.8.8 0 0 0-.8.8V6h-4V2.8a.8.8 0 0 0-.8-.8H6.8a.8.8 0 0 0-.8.8V8m12 0v11.6a2.4 2.4 0 0 1-2.4 2.4M18 8h4m-6.4 14H14m1.6 0h4a2.4 2.4 0 0 0 2.4-2.4V8m-8 14h-4m4 0v-3.2a.8.8 0 0 0-.8-.8h-2.4a.8.8 0 0 0-.8.8V22m0 0H8.4m0 0A2.4 2.4 0 0 1 6 19.6V8m2.4 14H4.5C3.175 22 2 20.878 2 19.553V8m4 0H2m20 0h1M2 8H1m10 2h2m-3 4h4"
}));
SvgSiCastleAlt1.displayName = "SvgSiCastleAlt1";
const ForwardRef$55 = /*#__PURE__*/React.forwardRef(SvgSiCastleAlt1);
const Memo$55 = /*#__PURE__*/React.memo(ForwardRef$55);

const SvgSiChat = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3Z"
}));
SvgSiChat.displayName = "SvgSiChat";
const ForwardRef$54 = /*#__PURE__*/React.forwardRef(SvgSiChat);
const Memo$54 = /*#__PURE__*/React.memo(ForwardRef$54);

const SvgSiChatText = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 8h8m-8 3h8m3 5h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3"
}));
SvgSiChatText.displayName = "SvgSiChatText";
const ForwardRef$53 = /*#__PURE__*/React.forwardRef(SvgSiChatText);
const Memo$53 = /*#__PURE__*/React.memo(ForwardRef$53);

const SvgSiCheck = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m5 13 5 5 9-11"
}));
SvgSiCheck.displayName = "SvgSiCheck";
const ForwardRef$52 = /*#__PURE__*/React.forwardRef(SvgSiCheck);
const Memo$52 = /*#__PURE__*/React.memo(ForwardRef$52);

const SvgSiCheckAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m5 14 6 6 8-15"
}));
SvgSiCheckAlt.displayName = "SvgSiCheckAlt";
const ForwardRef$51 = /*#__PURE__*/React.forwardRef(SvgSiCheckAlt);
const Memo$51 = /*#__PURE__*/React.memo(ForwardRef$51);

const SvgSiCheckCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m8 13 3 3 5-7m6 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiCheckCircle.displayName = "SvgSiCheckCircle";
const ForwardRef$50 = /*#__PURE__*/React.forwardRef(SvgSiCheckCircle);
const Memo$50 = /*#__PURE__*/React.memo(ForwardRef$50);

const SvgSiCheckSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m8 13 3 3 5-7M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiCheckSquare.displayName = "SvgSiCheckSquare";
const ForwardRef$4$ = /*#__PURE__*/React.forwardRef(SvgSiCheckSquare);
const Memo$4$ = /*#__PURE__*/React.memo(ForwardRef$4$);

const SvgSiChecklist = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m2 8 2 2 4-4m4 2h10M2 16l2 2 4-4m4 2h10"
}));
SvgSiChecklist.displayName = "SvgSiChecklist";
const ForwardRef$4_ = /*#__PURE__*/React.forwardRef(SvgSiChecklist);
const Memo$4_ = /*#__PURE__*/React.memo(ForwardRef$4_);

const SvgSiChecklistAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m16 8 2 2 4-4M2 8h10m4 8 2 2 4-4M2 16h10"
}));
SvgSiChecklistAlt.displayName = "SvgSiChecklistAlt";
const ForwardRef$4Z = /*#__PURE__*/React.forwardRef(SvgSiChecklistAlt);
const Memo$4Z = /*#__PURE__*/React.memo(ForwardRef$4Z);

const SvgSiChevronLeft = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m14 16-4-4 4-4"
}));
SvgSiChevronLeft.displayName = "SvgSiChevronLeft";
const ForwardRef$4Y = /*#__PURE__*/React.forwardRef(SvgSiChevronLeft);
const Memo$4Y = /*#__PURE__*/React.memo(ForwardRef$4Y);

const SvgSiChevronLeftAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m16 20-8-8 8-8"
}));
SvgSiChevronLeftAlt.displayName = "SvgSiChevronLeftAlt";
const ForwardRef$4X = /*#__PURE__*/React.forwardRef(SvgSiChevronLeftAlt);
const Memo$4X = /*#__PURE__*/React.memo(ForwardRef$4X);

const SvgSiChevronLeftCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m14 16-4-4 4-4"
}));
SvgSiChevronLeftCircle.displayName = "SvgSiChevronLeftCircle";
const ForwardRef$4W = /*#__PURE__*/React.forwardRef(SvgSiChevronLeftCircle);
const Memo$4W = /*#__PURE__*/React.memo(ForwardRef$4W);

const SvgSiChevronLeftSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m14 16-4-4 4-4"
}));
SvgSiChevronLeftSquare.displayName = "SvgSiChevronLeftSquare";
const ForwardRef$4V = /*#__PURE__*/React.forwardRef(SvgSiChevronLeftSquare);
const Memo$4V = /*#__PURE__*/React.memo(ForwardRef$4V);

const SvgSiChevronRight = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m10 16 4-4-4-4"
}));
SvgSiChevronRight.displayName = "SvgSiChevronRight";
const ForwardRef$4U = /*#__PURE__*/React.forwardRef(SvgSiChevronRight);
const Memo$4U = /*#__PURE__*/React.memo(ForwardRef$4U);

const SvgSiChevronRightAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m8 20 8-8-8-8"
}));
SvgSiChevronRightAlt.displayName = "SvgSiChevronRightAlt";
const ForwardRef$4T = /*#__PURE__*/React.forwardRef(SvgSiChevronRightAlt);
const Memo$4T = /*#__PURE__*/React.memo(ForwardRef$4T);

const SvgSiChevronRightCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m10 16 4-4-4-4"
}));
SvgSiChevronRightCircle.displayName = "SvgSiChevronRightCircle";
const ForwardRef$4S = /*#__PURE__*/React.forwardRef(SvgSiChevronRightCircle);
const Memo$4S = /*#__PURE__*/React.memo(ForwardRef$4S);

const SvgSiChevronRightSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m10 16 4-4-4-4"
}));
SvgSiChevronRightSquare.displayName = "SvgSiChevronRightSquare";
const ForwardRef$4R = /*#__PURE__*/React.forwardRef(SvgSiChevronRightSquare);
const Memo$4R = /*#__PURE__*/React.memo(ForwardRef$4R);

const SvgSiCity = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M9 19.6V2H2v17.6A2.4 2.4 0 0 0 4.4 22h2.2A2.4 2.4 0 0 0 9 19.6m14 0V5h-7v14.6a2.4 2.4 0 0 0 2.4 2.4h2.2a2.4 2.4 0 0 0 2.4-2.4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M2 2v17.6A2.4 2.4 0 0 0 4.4 22h2.2A2.4 2.4 0 0 0 9 19.6V2H1m15 3v14.6a2.4 2.4 0 0 1-2.4 2.4H6.4m7 0h7.2a2.4 2.4 0 0 0 2.4-2.4V5h-8m-6 6h7M5 6h1M5 9h1m-1 3h1m-1 3h1m-1 3h1m13-6h1m-1-3h1m-1 6h1m-1 3h1m-8 0h1m-1-3h1"
}));
SvgSiCity.displayName = "SvgSiCity";
const ForwardRef$4Q = /*#__PURE__*/React.forwardRef(SvgSiCity);
const Memo$4Q = /*#__PURE__*/React.memo(ForwardRef$4Q);

const SvgSiClearAll = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M6 12h12M4 16h12M8 8h12"
}));
SvgSiClearAll.displayName = "SvgSiClearAll";
const ForwardRef$4P = /*#__PURE__*/React.forwardRef(SvgSiClearAll);
const Memo$4P = /*#__PURE__*/React.memo(ForwardRef$4P);

const SvgSiClearDay = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 4V2m0 20v-2m-8-8H2m20 0h-2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41m0 11.32 1.41 1.41M4.93 4.93l1.41 1.41M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
}));
SvgSiClearDay.displayName = "SvgSiClearDay";
const ForwardRef$4O = /*#__PURE__*/React.forwardRef(SvgSiClearDay);
const Memo$4O = /*#__PURE__*/React.memo(ForwardRef$4O);

const SvgSiClick = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m11 11 10 4.4-4.437 1.163L15.4 21z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 2v3m-6.995 6.995h-3m2.926-7.063 2.12 2.122m12.022-2.129L16.95 7.047m-9.9 9.9-2.12 2.12M11 11l10 4.4-4.437 1.163L15.4 21z"
}));
SvgSiClick.displayName = "SvgSiClick";
const ForwardRef$4N = /*#__PURE__*/React.forwardRef(SvgSiClick);
const Memo$4N = /*#__PURE__*/React.memo(ForwardRef$4N);

const SvgSiClipboard = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M8 3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H16v1.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8m.8-2h6.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V1.8a.8.8 0 0 1 .8-.8"
}));
SvgSiClipboard.displayName = "SvgSiClipboard";
const ForwardRef$4M = /*#__PURE__*/React.forwardRef(SvgSiClipboard);
const Memo$4M = /*#__PURE__*/React.memo(ForwardRef$4M);

const SvgSiClipboardAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M14 3a2 2 0 1 1-4 0H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M14 3a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h4.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H10"
}));
SvgSiClipboardAlt.displayName = "SvgSiClipboardAlt";
const ForwardRef$4L = /*#__PURE__*/React.forwardRef(SvgSiClipboardAlt);
const Memo$4L = /*#__PURE__*/React.memo(ForwardRef$4L);

const SvgSiClipboardCheck = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M8 3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H16v1.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8m0 11 3 3 5-7M8.8 1h6.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V1.8a.8.8 0 0 1 .8-.8"
}));
SvgSiClipboardCheck.displayName = "SvgSiClipboardCheck";
const ForwardRef$4K = /*#__PURE__*/React.forwardRef(SvgSiClipboardCheck);
const Memo$4K = /*#__PURE__*/React.memo(ForwardRef$4K);

const SvgSiClipboardCheckAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M14 3a2 2 0 1 1-4 0H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M14 3h4.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H10m4 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0M8 14l3 3 5-7"
}));
SvgSiClipboardCheckAlt.displayName = "SvgSiClipboardCheckAlt";
const ForwardRef$4J = /*#__PURE__*/React.forwardRef(SvgSiClipboardCheckAlt);
const Memo$4J = /*#__PURE__*/React.memo(ForwardRef$4J);

const SvgSiClipboardFilled = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M8 3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H16v1.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8M7 13h10M7 10h10M7 16h6M8.8 1h6.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V1.8a.8.8 0 0 1 .8-.8"
}));
SvgSiClipboardFilled.displayName = "SvgSiClipboardFilled";
const ForwardRef$4I = /*#__PURE__*/React.forwardRef(SvgSiClipboardFilled);
const Memo$4I = /*#__PURE__*/React.memo(ForwardRef$4I);

const SvgSiClipboardFilledAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M14 3a2 2 0 1 1-4 0H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M14 3h4.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H10m4 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0M7 13h10M7 10h10M7 16h6"
}));
SvgSiClipboardFilledAlt.displayName = "SvgSiClipboardFilledAlt";
const ForwardRef$4H = /*#__PURE__*/React.forwardRef(SvgSiClipboardFilledAlt);
const Memo$4H = /*#__PURE__*/React.memo(ForwardRef$4H);

const SvgSiClock = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 6v5.8a.2.2 0 0 1-.2.2H8m14 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiClock.displayName = "SvgSiClock";
const ForwardRef$4G = /*#__PURE__*/React.forwardRef(SvgSiClock);
const Memo$4G = /*#__PURE__*/React.memo(ForwardRef$4G);

const SvgSiClockAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 6v5.844a.2.2 0 0 0 .152.194L16 13m6-1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiClockAlt.displayName = "SvgSiClockAlt";
const ForwardRef$4F = /*#__PURE__*/React.forwardRef(SvgSiClockAlt);
const Memo$4F = /*#__PURE__*/React.memo(ForwardRef$4F);

const SvgSiClose = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m7.757 16.243 8.486-8.486m0 8.486L7.757 7.757"
}));
SvgSiClose.displayName = "SvgSiClose";
const ForwardRef$4E = /*#__PURE__*/React.forwardRef(SvgSiClose);
const Memo$4E = /*#__PURE__*/React.memo(ForwardRef$4E);

const SvgSiCloseCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m7.757 16.243 8.486-8.486m0 8.486L7.757 7.757M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiCloseCircle.displayName = "SvgSiCloseCircle";
const ForwardRef$4D = /*#__PURE__*/React.forwardRef(SvgSiCloseCircle);
const Memo$4D = /*#__PURE__*/React.memo(ForwardRef$4D);

const SvgSiCloseSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m7.757 16.243 8.486-8.486m0 8.486L7.757 7.757M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiCloseSquare.displayName = "SvgSiCloseSquare";
const ForwardRef$4C = /*#__PURE__*/React.forwardRef(SvgSiCloseSquare);
const Memo$4C = /*#__PURE__*/React.memo(ForwardRef$4C);

const SvgSiCloud = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M4.178 18.555H18.28a4.7 4.7 0 1 0 0-9.4 5 5 0 0 0-.783.07A6.267 6.267 0 0 0 5.87 11.042q-.123.617-.125 1.246v.446a3.133 3.133 0 1 0-1.567 5.82",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M4.178 18.555H18.28a4.7 4.7 0 1 0 0-9.4 5 5 0 0 0-.783.07A6.267 6.267 0 0 0 5.87 11.042q-.123.617-.125 1.246v.446a3.133 3.133 0 1 0-1.567 5.82Z",
  clipRule: "evenodd"
}));
SvgSiCloud.displayName = "SvgSiCloud";
const ForwardRef$4B = /*#__PURE__*/React.forwardRef(SvgSiCloud);
const Memo$4B = /*#__PURE__*/React.memo(ForwardRef$4B);

const SvgSiCode = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m8 6-6 6 6 6m8 0 6-6-6-6"
}));
SvgSiCode.displayName = "SvgSiCode";
const ForwardRef$4A = /*#__PURE__*/React.forwardRef(SvgSiCode);
const Memo$4A = /*#__PURE__*/React.memo(ForwardRef$4A);

const SvgSiCodeMuted = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m9 8-4 4 4 4m6 0 4-4-4-4"
}));
SvgSiCodeMuted.displayName = "SvgSiCodeMuted";
const ForwardRef$4z = /*#__PURE__*/React.forwardRef(SvgSiCodeMuted);
const Memo$4z = /*#__PURE__*/React.memo(ForwardRef$4z);

const SvgSiColumns = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 21V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiColumns.displayName = "SvgSiColumns";
const ForwardRef$4y = /*#__PURE__*/React.forwardRef(SvgSiColumns);
const Memo$4y = /*#__PURE__*/React.memo(ForwardRef$4y);

const SvgSiCopy = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 9h-7.2A2.4 2.4 0 0 0 9 11.4v7.2a2.4 2.4 0 0 0 2.4 2.4h7.2a2.4 2.4 0 0 0 2.4-2.4v-7.2A2.4 2.4 0 0 0 18.6 9"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M6 15h-.6C4.07 15 3 13.93 3 12.6V5.4C3 4.07 4.07 3 5.4 3h7.2C13.93 3 15 4.07 15 5.4V6m-3.6 3h7.2a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4h-7.2A2.4 2.4 0 0 1 9 18.6v-7.2A2.4 2.4 0 0 1 11.4 9"
}));
SvgSiCopy.displayName = "SvgSiCopy";
const ForwardRef$4x = /*#__PURE__*/React.forwardRef(SvgSiCopy);
const Memo$4x = /*#__PURE__*/React.memo(ForwardRef$4x);

const SvgSiCopyAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12.6 3H5.4A2.4 2.4 0 0 0 3 5.4v7.2A2.4 2.4 0 0 0 5.4 15h7.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 12.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18 9h.6c1.33 0 2.4 1.07 2.4 2.4v7.2c0 1.33-1.07 2.4-2.4 2.4h-7.2C10.07 21 9 19.93 9 18.6V18M5.4 3h7.2A2.4 2.4 0 0 1 15 5.4v7.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 12.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiCopyAlt.displayName = "SvgSiCopyAlt";
const ForwardRef$4w = /*#__PURE__*/React.forwardRef(SvgSiCopyAlt);
const Memo$4w = /*#__PURE__*/React.memo(ForwardRef$4w);

const SvgSiCopyright = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeWidth: 1.5,
  d: "M15.33 10.238C14.876 8.865 13.795 8 12.227 8 10.164 8 8.66 9.643 8.66 12s1.503 4 3.567 4c1.568 0 2.65-.865 3.103-2.238M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
}));
SvgSiCopyright.displayName = "SvgSiCopyright";
const ForwardRef$4v = /*#__PURE__*/React.forwardRef(SvgSiCopyright);
const Memo$4v = /*#__PURE__*/React.memo(ForwardRef$4v);

const SvgSiCopyrightAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M15.23 13.697C14.974 15.095 13.767 16 12.142 16c-2.076 0-3.373-1.535-3.373-3.992v-.01C8.77 9.534 10.062 8 12.137 8c1.61 0 2.865 1.011 3.092 2.478M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
}));
SvgSiCopyrightAlt.displayName = "SvgSiCopyrightAlt";
const ForwardRef$4u = /*#__PURE__*/React.forwardRef(SvgSiCopyrightAlt);
const Memo$4u = /*#__PURE__*/React.memo(ForwardRef$4u);

const SvgSiCreditCard = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M1 10h22M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"
}));
SvgSiCreditCard.displayName = "SvgSiCreditCard";
const ForwardRef$4t = /*#__PURE__*/React.forwardRef(SvgSiCreditCard);
const Memo$4t = /*#__PURE__*/React.memo(ForwardRef$4t);

const SvgSiCreditCardDetailed = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4V8H1V6.4A2.4 2.4 0 0 1 3.4 4M1 12v5.6A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V12z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M20 15h-3M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M1 8h22v4H1z"
}));
SvgSiCreditCardDetailed.displayName = "SvgSiCreditCardDetailed";
const ForwardRef$4s = /*#__PURE__*/React.forwardRef(SvgSiCreditCardDetailed);
const Memo$4s = /*#__PURE__*/React.memo(ForwardRef$4s);

const SvgSiCreditCardDetailedAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4V8H1V6.4A2.4 2.4 0 0 1 3.4 4M1 11v6.6A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V11z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M23 8H1v3h22z"
}));
SvgSiCreditCardDetailedAlt.displayName = "SvgSiCreditCardDetailedAlt";
const ForwardRef$4r = /*#__PURE__*/React.forwardRef(SvgSiCreditCardDetailedAlt);
const Memo$4r = /*#__PURE__*/React.memo(ForwardRef$4r);

const SvgSiCrop = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M6 6v12h12V6z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M2 6h16v16m4-4H6V2"
}));
SvgSiCrop.displayName = "SvgSiCrop";
const ForwardRef$4q = /*#__PURE__*/React.forwardRef(SvgSiCrop);
const Memo$4q = /*#__PURE__*/React.memo(ForwardRef$4q);

const SvgSiCrosshairDetailed = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M2 12h4m12 0h4M12 22v-4m0-12V2m8 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
}));
SvgSiCrosshairDetailed.displayName = "SvgSiCrosshairDetailed";
const ForwardRef$4p = /*#__PURE__*/React.forwardRef(SvgSiCrosshairDetailed);
const Memo$4p = /*#__PURE__*/React.memo(ForwardRef$4p);

const SvgSiCrosshairSimple = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10h-4m-6 10C6.477 22 2 17.523 2 12m10 10v-4M2 12C2 6.477 6.477 2 12 2M2 12h4m6-10v4"
}));
SvgSiCrosshairSimple.displayName = "SvgSiCrosshairSimple";
const ForwardRef$4o = /*#__PURE__*/React.forwardRef(SvgSiCrosshairSimple);
const Memo$4o = /*#__PURE__*/React.memo(ForwardRef$4o);

const SvgSiDangerous = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m15 15-3-3m0 0L9 9m3 3 3-3m-3 3-3 3M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"
}));
SvgSiDangerous.displayName = "SvgSiDangerous";
const ForwardRef$4n = /*#__PURE__*/React.forwardRef(SvgSiDangerous);
const Memo$4n = /*#__PURE__*/React.memo(ForwardRef$4n);

const SvgSiDashboard = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M8.4 15H5.6A1.6 1.6 0 0 0 4 16.6v2.8A1.6 1.6 0 0 0 5.6 21h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 15m10-12h-2.8A1.6 1.6 0 0 0 14 4.6v2.8A1.6 1.6 0 0 0 15.6 9h2.8A1.6 1.6 0 0 0 20 7.4V4.6A1.6 1.6 0 0 0 18.4 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8.4 3H5.6A1.6 1.6 0 0 0 4 4.6v4.8A1.6 1.6 0 0 0 5.6 11h2.8A1.6 1.6 0 0 0 10 9.4V4.6A1.6 1.6 0 0 0 8.4 3Zm0 12H5.6A1.6 1.6 0 0 0 4 16.6v2.8A1.6 1.6 0 0 0 5.6 21h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 15Zm10-12h-2.8A1.6 1.6 0 0 0 14 4.6v2.8A1.6 1.6 0 0 0 15.6 9h2.8A1.6 1.6 0 0 0 20 7.4V4.6A1.6 1.6 0 0 0 18.4 3Zm0 10h-2.8a1.6 1.6 0 0 0-1.6 1.6v4.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-4.8a1.6 1.6 0 0 0-1.6-1.6Z"
}));
SvgSiDashboard.displayName = "SvgSiDashboard";
const ForwardRef$4m = /*#__PURE__*/React.forwardRef(SvgSiDashboard);
const Memo$4m = /*#__PURE__*/React.memo(ForwardRef$4m);

const SvgSiDashboardCustomize = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M8.4 14H5.6A1.6 1.6 0 0 0 4 15.6v2.8A1.6 1.6 0 0 0 5.6 20h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 14m10-10h-2.8A1.6 1.6 0 0 0 14 5.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8A1.6 1.6 0 0 0 20 8.4V5.6A1.6 1.6 0 0 0 18.4 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M14 17h6m-3 3v-6M5.6 4h2.8A1.6 1.6 0 0 1 10 5.6v2.8A1.6 1.6 0 0 1 8.4 10H5.6A1.6 1.6 0 0 1 4 8.4V5.6A1.6 1.6 0 0 1 5.6 4m0 10h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8A1.6 1.6 0 0 1 8.4 20H5.6A1.6 1.6 0 0 1 4 18.4v-2.8A1.6 1.6 0 0 1 5.6 14m10-10h2.8A1.6 1.6 0 0 1 20 5.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 14 8.4V5.6A1.6 1.6 0 0 1 15.6 4"
}));
SvgSiDashboardCustomize.displayName = "SvgSiDashboardCustomize";
const ForwardRef$4l = /*#__PURE__*/React.forwardRef(SvgSiDashboardCustomize);
const Memo$4l = /*#__PURE__*/React.memo(ForwardRef$4l);

const SvgSiDashboardHorz = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M10 21v-9m-7 0h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiDashboardHorz.displayName = "SvgSiDashboardHorz";
const ForwardRef$4k = /*#__PURE__*/React.forwardRef(SvgSiDashboardHorz);
const Memo$4k = /*#__PURE__*/React.memo(ForwardRef$4k);

const SvgSiDashboardVert = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 21V3m0 7h9M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiDashboardVert.displayName = "SvgSiDashboardVert";
const ForwardRef$4j = /*#__PURE__*/React.forwardRef(SvgSiDashboardVert);
const Memo$4j = /*#__PURE__*/React.memo(ForwardRef$4j);

const SvgSiDeleteAlarm = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m9.172 15.828 5.656-5.656m0 5.656-5.656-5.656M18 3l3 3M3 6l3-3m14 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
}));
SvgSiDeleteAlarm.displayName = "SvgSiDeleteAlarm";
const ForwardRef$4i = /*#__PURE__*/React.forwardRef(SvgSiDeleteAlarm);
const Memo$4i = /*#__PURE__*/React.memo(ForwardRef$4i);

const SvgSiDiamondsFour = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
  clipPath: "url(#a)"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m3.798 8.889-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0m14.142 0-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.263 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.263 0"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m3.798 8.889-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0Zm7.071-7.071-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.263 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.263 0Zm0 14.142-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.263 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.263 0Zm7.071-7.071-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0Z"
})), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "#fff",
  d: "M0 0h24v24H0z"
}))));
SvgSiDiamondsFour.displayName = "SvgSiDiamondsFour";
const ForwardRef$4h = /*#__PURE__*/React.forwardRef(SvgSiDiamondsFour);
const Memo$4h = /*#__PURE__*/React.memo(ForwardRef$4h);

const SvgSiDirection = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m12 3 7 18-7-4.093L5 21z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m12 3 7 18-7-4.093L5 21z"
}));
SvgSiDirection.displayName = "SvgSiDirection";
const ForwardRef$4g = /*#__PURE__*/React.forwardRef(SvgSiDirection);
const Memo$4g = /*#__PURE__*/React.memo(ForwardRef$4g);

const SvgSiDirectionAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m3 3 18 7.92-7.987 2.093L10.92 21z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m3 3 18 7.92-7.987 2.093L10.92 21z"
}));
SvgSiDirectionAlt.displayName = "SvgSiDirectionAlt";
const ForwardRef$4f = /*#__PURE__*/React.forwardRef(SvgSiDirectionAlt);
const Memo$4f = /*#__PURE__*/React.memo(ForwardRef$4f);

const SvgSiDollar = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8.133 19.053a6.4 6.4 0 0 0 3.805.93c2.006-.147 4.214-1.58 4.054-3.989-.125-1.867-1.103-2.936-3.995-3.994S8.132 9.872 8.008 8.006c-.16-2.409 2.048-3.842 4.054-3.99a6.4 6.4 0 0 1 3.805.931M12 22V2"
}));
SvgSiDollar.displayName = "SvgSiDollar";
const ForwardRef$4e = /*#__PURE__*/React.forwardRef(SvgSiDollar);
const Memo$4e = /*#__PURE__*/React.memo(ForwardRef$4e);

const SvgSiDollarAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9.14 16.962a4.9 4.9 0 0 0 2.812.655c1.483-.104 3.116-1.112 2.997-2.807-.092-1.313-.815-2.066-2.953-2.81s-2.857-1.497-2.95-2.81c-.118-1.695 1.515-2.703 2.998-2.807.974-.068 1.97.16 2.813.655M12 5v14m10-7c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
}));
SvgSiDollarAlt1.displayName = "SvgSiDollarAlt1";
const ForwardRef$4d = /*#__PURE__*/React.forwardRef(SvgSiDollarAlt1);
const Memo$4d = /*#__PURE__*/React.memo(ForwardRef$4d);

const SvgSiDollarAlt2 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M22 12c0-1.395-.858-2.605-2.137-3.259.45-1.356.195-2.829-.79-3.814-.985-.986-2.458-1.24-3.815-.79C14.615 2.859 13.396 2 12 2s-2.605.859-3.249 2.137c-1.366-.45-2.839-.196-3.824.79-.986.985-1.23 2.458-.78 3.814C2.867 9.395 2 10.605 2 12s.868 2.605 2.146 3.258c-.448 1.357-.205 2.83.78 3.815.986.985 2.46 1.23 3.815.79C9.395 21.142 10.605 22 12 22s2.615-.858 3.258-2.137c1.357.44 2.83.195 3.815-.79s1.24-2.458.79-3.815C21.142 14.606 22 13.396 22 12"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M9.14 16.962a4.9 4.9 0 0 0 2.812.655c1.483-.104 3.116-1.112 2.997-2.807-.092-1.313-.815-2.066-2.953-2.81s-2.857-1.497-2.95-2.81c-.118-1.695 1.515-2.703 2.998-2.807.974-.068 1.97.16 2.813.655M12 5v14m10-7c0-1.395-.858-2.605-2.137-3.259.45-1.356.195-2.829-.79-3.814-.985-.986-2.458-1.24-3.815-.79C14.615 2.859 13.396 2 12 2s-2.605.859-3.249 2.137c-1.366-.45-2.839-.196-3.824.79-.986.985-1.23 2.458-.78 3.814C2.867 9.395 2 10.605 2 12s.868 2.605 2.146 3.258c-.448 1.357-.205 2.83.78 3.815.986.985 2.46 1.23 3.815.79C9.395 21.142 10.605 22 12 22s2.615-.858 3.258-2.137c1.357.44 2.83.195 3.815-.79s1.24-2.458.79-3.815C21.142 14.606 22 13.396 22 12"
}));
SvgSiDollarAlt2.displayName = "SvgSiDollarAlt2";
const ForwardRef$4c = /*#__PURE__*/React.forwardRef(SvgSiDollarAlt2);
const Memo$4c = /*#__PURE__*/React.memo(ForwardRef$4c);

const SvgSiDoubleArrowRight = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m13 16 4-4-4-4m-6 8 4-4-4-4"
}));
SvgSiDoubleArrowRight.displayName = "SvgSiDoubleArrowRight";
const ForwardRef$4b = /*#__PURE__*/React.forwardRef(SvgSiDoubleArrowRight);
const Memo$4b = /*#__PURE__*/React.memo(ForwardRef$4b);

const SvgSiDownLeft = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M5 15h9.6a4.4 4.4 0 0 0 4.4-4.4V5M5 15l4 4m-4-4 4-4"
}));
SvgSiDownLeft.displayName = "SvgSiDownLeft";
const ForwardRef$4a = /*#__PURE__*/React.forwardRef(SvgSiDownLeft);
const Memo$4a = /*#__PURE__*/React.memo(ForwardRef$4a);

const SvgSiDownRight = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M19 15H9.4A4.4 4.4 0 0 1 5 10.6V5m14 10-4 4m4-4-4-4"
}));
SvgSiDownRight.displayName = "SvgSiDownRight";
const ForwardRef$49 = /*#__PURE__*/React.forwardRef(SvgSiDownRight);
const Memo$49 = /*#__PURE__*/React.memo(ForwardRef$49);

const SvgSiDownTwoHeaded = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M12 4v16m0 0-4-4m4 4 4-4m-8-5 4 4 4-4"
}));
SvgSiDownTwoHeaded.displayName = "SvgSiDownTwoHeaded";
const ForwardRef$48 = /*#__PURE__*/React.forwardRef(SvgSiDownTwoHeaded);
const Memo$48 = /*#__PURE__*/React.memo(ForwardRef$48);

const SvgSiDownloadOffline = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m8 11 4 4m0 0 4-4m-4 4V6m4 12H8m14-6c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiDownloadOffline.displayName = "SvgSiDownloadOffline";
const ForwardRef$47 = /*#__PURE__*/React.forwardRef(SvgSiDownloadOffline);
const Memo$47 = /*#__PURE__*/React.memo(ForwardRef$47);

const SvgSiDragHandle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M4 10h16M4 14h16"
}));
SvgSiDragHandle.displayName = "SvgSiDragHandle";
const ForwardRef$46 = /*#__PURE__*/React.forwardRef(SvgSiDragHandle);
const Memo$46 = /*#__PURE__*/React.memo(ForwardRef$46);

const SvgSiDragIndicator = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-6 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
}));
SvgSiDragIndicator.displayName = "SvgSiDragIndicator";
const ForwardRef$45 = /*#__PURE__*/React.forwardRef(SvgSiDragIndicator);
const Memo$45 = /*#__PURE__*/React.memo(ForwardRef$45);

const SvgSiDragIndicatorAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M15 10h1m-1 4h1m-1-8h1m-7 4h1m-1 4h1m5 4h1m-7 0h1M9 6h1"
}));
SvgSiDragIndicatorAlt.displayName = "SvgSiDragIndicatorAlt";
const ForwardRef$44 = /*#__PURE__*/React.forwardRef(SvgSiDragIndicatorAlt);
const Memo$44 = /*#__PURE__*/React.memo(ForwardRef$44);

const SvgSiEditDetailed = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m4.929 19.071.707-3.535 9.192-9.193 2.829 2.829-9.193 9.192z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m14.828 6.343 2.829 2.829m.566-5.091 1.697 1.697a.8.8 0 0 1 0 1.13L8.464 18.365l-3.535.707.707-3.535L17.091 4.08a.8.8 0 0 1 1.132 0"
}));
SvgSiEditDetailed.displayName = "SvgSiEditDetailed";
const ForwardRef$43 = /*#__PURE__*/React.forwardRef(SvgSiEditDetailed);
const Memo$43 = /*#__PURE__*/React.memo(ForwardRef$43);

const SvgSiEditDetailedAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m4.929 19.071.707-3.536 9.192-9.192 2.829 2.829-9.193 9.192z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M19.071 7.757 8.464 18.364l-3.535.707.707-3.535L16.243 4.929m2.828 2.828a2 2 0 0 0-2.828-2.828m2.828 2.828-1.414 1.415-2.829-2.829 1.415-1.414"
}));
SvgSiEditDetailedAlt.displayName = "SvgSiEditDetailedAlt";
const ForwardRef$42 = /*#__PURE__*/React.forwardRef(SvgSiEditDetailedAlt);
const Memo$42 = /*#__PURE__*/React.memo(ForwardRef$42);

const SvgSiEditSimple = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.92 5.777 18.222 4.08a.8.8 0 0 0-1.13 0L5.635 15.536 4.93 19.07l3.535-.707L19.92 6.909a.8.8 0 0 0 0-1.132"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M19.92 5.777 18.222 4.08a.8.8 0 0 0-1.13 0L5.635 15.536 4.93 19.07l3.535-.707L19.92 6.909a.8.8 0 0 0 0-1.132Z"
}));
SvgSiEditSimple.displayName = "SvgSiEditSimple";
const ForwardRef$41 = /*#__PURE__*/React.forwardRef(SvgSiEditSimple);
const Memo$41 = /*#__PURE__*/React.memo(ForwardRef$41);

const SvgSiEject = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m5 13 7-10 7 10z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m5 13 7-10 7 10zm0 4.8v2.4a.8.8 0 0 0 .8.8h12.4a.8.8 0 0 0 .8-.8v-2.4a.8.8 0 0 0-.8-.8H5.8a.8.8 0 0 0-.8.8Z"
}));
SvgSiEject.displayName = "SvgSiEject";
const ForwardRef$40 = /*#__PURE__*/React.forwardRef(SvgSiEject);
const Memo$40 = /*#__PURE__*/React.memo(ForwardRef$40);

const SvgSiEmoji = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m16.583 14.083-.079.213A4.808 4.808 0 0 1 9.26 16.56a4.8 4.8 0 0 1-1.764-2.265l-.08-.213M9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 3c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
}));
SvgSiEmoji.displayName = "SvgSiEmoji";
const ForwardRef$3$ = /*#__PURE__*/React.forwardRef(SvgSiEmoji);
const Memo$3$ = /*#__PURE__*/React.memo(ForwardRef$3$);

const SvgSiEmojiAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m16.583 14.083-.079.213A4.808 4.808 0 0 1 9.26 16.56a4.8 4.8 0 0 1-1.764-2.265l-.08-.213M8 9v1m8-1v1m6 2c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
}));
SvgSiEmojiAlt.displayName = "SvgSiEmojiAlt";
const ForwardRef$3_ = /*#__PURE__*/React.forwardRef(SvgSiEmojiAlt);
const Memo$3_ = /*#__PURE__*/React.memo(ForwardRef$3_);

const SvgSiEqualizer = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M2 12h4m4 0h4m4 0h4M2 16h4m4 0h4m4 0h4M2 20h4m4 0h4m4 0h4M2 8h4m12 0h4m-4-4h4"
}));
SvgSiEqualizer.displayName = "SvgSiEqualizer";
const ForwardRef$3Z = /*#__PURE__*/React.forwardRef(SvgSiEqualizer);
const Memo$3Z = /*#__PURE__*/React.memo(ForwardRef$3Z);

const SvgSiError = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 16h.008M12 8v5M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"
}));
SvgSiError.displayName = "SvgSiError";
const ForwardRef$3Y = /*#__PURE__*/React.forwardRef(SvgSiError);
const Memo$3Y = /*#__PURE__*/React.memo(ForwardRef$3Y);

const SvgSiExpandLess = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m8 14 4-4 4 4"
}));
SvgSiExpandLess.displayName = "SvgSiExpandLess";
const ForwardRef$3X = /*#__PURE__*/React.forwardRef(SvgSiExpandLess);
const Memo$3X = /*#__PURE__*/React.memo(ForwardRef$3X);

const SvgSiExpandLessAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m4 16 8-8 8 8"
}));
SvgSiExpandLessAlt.displayName = "SvgSiExpandLessAlt";
const ForwardRef$3W = /*#__PURE__*/React.forwardRef(SvgSiExpandLessAlt);
const Memo$3W = /*#__PURE__*/React.memo(ForwardRef$3W);

const SvgSiExpandLessCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m8 14 4-4 4 4"
}));
SvgSiExpandLessCircle.displayName = "SvgSiExpandLessCircle";
const ForwardRef$3V = /*#__PURE__*/React.forwardRef(SvgSiExpandLessCircle);
const Memo$3V = /*#__PURE__*/React.memo(ForwardRef$3V);

const SvgSiExpandLessSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m8 14 4-4 4 4"
}));
SvgSiExpandLessSquare.displayName = "SvgSiExpandLessSquare";
const ForwardRef$3U = /*#__PURE__*/React.forwardRef(SvgSiExpandLessSquare);
const Memo$3U = /*#__PURE__*/React.memo(ForwardRef$3U);

const SvgSiExpandMore = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m8 10 4 4 4-4"
}));
SvgSiExpandMore.displayName = "SvgSiExpandMore";
const ForwardRef$3T = /*#__PURE__*/React.forwardRef(SvgSiExpandMore);
const Memo$3T = /*#__PURE__*/React.memo(ForwardRef$3T);

const SvgSiExpandMoreAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m4 8 8 8 8-8"
}));
SvgSiExpandMoreAlt.displayName = "SvgSiExpandMoreAlt";
const ForwardRef$3S = /*#__PURE__*/React.forwardRef(SvgSiExpandMoreAlt);
const Memo$3S = /*#__PURE__*/React.memo(ForwardRef$3S);

const SvgSiExpandMoreCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m8 10 4 4 4-4"
}));
SvgSiExpandMoreCircle.displayName = "SvgSiExpandMoreCircle";
const ForwardRef$3R = /*#__PURE__*/React.forwardRef(SvgSiExpandMoreCircle);
const Memo$3R = /*#__PURE__*/React.memo(ForwardRef$3R);

const SvgSiExpandMoreSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m8 10 4 4 4-4"
}));
SvgSiExpandMoreSquare.displayName = "SvgSiExpandMoreSquare";
const ForwardRef$3Q = /*#__PURE__*/React.forwardRef(SvgSiExpandMoreSquare);
const Memo$3Q = /*#__PURE__*/React.memo(ForwardRef$3Q);

const SvgSiFactCheck = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M5 15h5m-5-3h5M5 9h5m3 3 2 2 4-4M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"
}));
SvgSiFactCheck.displayName = "SvgSiFactCheck";
const ForwardRef$3P = /*#__PURE__*/React.forwardRef(SvgSiFactCheck);
const Memo$3P = /*#__PURE__*/React.memo(ForwardRef$3P);

const SvgSiFeaturedPlaylist = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M6 9h8m-8 3h8M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4Z"
}));
SvgSiFeaturedPlaylist.displayName = "SvgSiFeaturedPlaylist";
const ForwardRef$3O = /*#__PURE__*/React.forwardRef(SvgSiFeaturedPlaylist);
const Memo$3O = /*#__PURE__*/React.memo(ForwardRef$3O);

const SvgSiFileDownload = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "M8.53 11.47a.75.75 0 0 0-1.06 1.06zM12 16l-.53.53a.75.75 0 0 0 1.06 0zm4.53-3.47a.75.75 0 1 0-1.06-1.06zM12.75 4a.75.75 0 0 0-1.5 0zm7 13a.75.75 0 0 0-1.5 0zm-14 0a.75.75 0 0 0-1.5 0zm1.72-4.47 4 4 1.06-1.06-4-4zm5.06 4 4-4-1.06-1.06-4 4zm.22-.53V4h-1.5v12zm5.5 1v.6h1.5V17zm0 .6c0 .916-.734 1.65-1.65 1.65v1.5a3.144 3.144 0 0 0 3.15-3.15zm-1.65 1.65H7.4v1.5h9.2zm-9.2 0c-.916 0-1.65-.734-1.65-1.65h-1.5a3.144 3.144 0 0 0 3.15 3.15zM5.75 17.6V17h-1.5v.6z"
}));
SvgSiFileDownload.displayName = "SvgSiFileDownload";
const ForwardRef$3N = /*#__PURE__*/React.forwardRef(SvgSiFileDownload);
const Memo$3N = /*#__PURE__*/React.memo(ForwardRef$3N);

const SvgSiFileUpload = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "M7.47 7.47a.75.75 0 0 0 1.06 1.06zM12 4l.53-.53a.75.75 0 0 0-1.06 0zm3.47 4.53a.75.75 0 1 0 1.06-1.06zM11.25 16a.75.75 0 0 0 1.5 0zm8.5 1a.75.75 0 0 0-1.5 0zm-14 0a.75.75 0 0 0-1.5 0zm2.78-8.47 4-4-1.06-1.06-4 4zm2.94-4 4 4 1.06-1.06-4-4zM11.25 4v12h1.5V4zm7 13v.6h1.5V17zm0 .6c0 .916-.734 1.65-1.65 1.65v1.5a3.144 3.144 0 0 0 3.15-3.15zm-1.65 1.65H7.4v1.5h9.2zm-9.2 0c-.916 0-1.65-.734-1.65-1.65h-1.5a3.144 3.144 0 0 0 3.15 3.15zM5.75 17.6V17h-1.5v.6z"
}));
SvgSiFileUpload.displayName = "SvgSiFileUpload";
const ForwardRef$3M = /*#__PURE__*/React.forwardRef(SvgSiFileUpload);
const Memo$3M = /*#__PURE__*/React.memo(ForwardRef$3M);

const SvgSiFilterList = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M6 12h12M4 8h16M8 16h8"
}));
SvgSiFilterList.displayName = "SvgSiFilterList";
const ForwardRef$3L = /*#__PURE__*/React.forwardRef(SvgSiFilterList);
const Memo$3L = /*#__PURE__*/React.memo(ForwardRef$3L);

const SvgSiFilterListAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M6 10h12M8 14h8m-6 4h4M4 6h16"
}));
SvgSiFilterListAlt.displayName = "SvgSiFilterListAlt";
const ForwardRef$3K = /*#__PURE__*/React.forwardRef(SvgSiFilterListAlt);
const Memo$3K = /*#__PURE__*/React.memo(ForwardRef$3K);

const SvgSiFilterNone = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M20 22H8.4C5.42 22 3 19.58 3 16.6V5m5.4-2h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"
}));
SvgSiFilterNone.displayName = "SvgSiFilterNone";
const ForwardRef$3J = /*#__PURE__*/React.forwardRef(SvgSiFilterNone);
const Memo$3J = /*#__PURE__*/React.memo(ForwardRef$3J);

const SvgSiFlag = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M21 10 4 4v11z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M4 15V4l17 6zm0 0v5"
}));
SvgSiFlag.displayName = "SvgSiFlag";
const ForwardRef$3I = /*#__PURE__*/React.forwardRef(SvgSiFlag);
const Memo$3I = /*#__PURE__*/React.memo(ForwardRef$3I);

const SvgSiFlagAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.8 4c.66 0 1.2.517 1.2 1.149v5.553C21 11.966 19.92 13 18.6 13H4.2c-.66 0-1.2-.517-1.2-1.149V6.298C3 5.034 4.08 4 5.4 4z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M3 11.851C3 12.483 3.54 13 4.2 13h14.4c1.32 0 2.4-1.034 2.4-2.298V5.15C21 4.517 20.46 4 19.8 4H5.4C4.08 4 3 5.034 3 6.298zm0 0V20"
}));
SvgSiFlagAlt1.displayName = "SvgSiFlagAlt1";
const ForwardRef$3H = /*#__PURE__*/React.forwardRef(SvgSiFlagAlt1);
const Memo$3H = /*#__PURE__*/React.memo(ForwardRef$3H);

const SvgSiFlagAlt2 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M21 4H3l4.613 9.802L21 14l-5-5z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m11 21-3.387-7.198m0 0L3 4h18l-5 5 5 5z"
}));
SvgSiFlagAlt2.displayName = "SvgSiFlagAlt2";
const ForwardRef$3G = /*#__PURE__*/React.forwardRef(SvgSiFlagAlt2);
const Memo$3G = /*#__PURE__*/React.memo(ForwardRef$3G);

const SvgSiFlagAlt3 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19 3 8 14 4 4z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 14 19 3 4 4zm0 0 3 8"
}));
SvgSiFlagAlt3.displayName = "SvgSiFlagAlt3";
const ForwardRef$3F = /*#__PURE__*/React.forwardRef(SvgSiFlagAlt3);
const Memo$3F = /*#__PURE__*/React.memo(ForwardRef$3F);

const SvgSiFlagAlt4 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m3 15.044 2.727-.668a9.03 9.03 0 0 1 6.11.657l.107.052a9.03 9.03 0 0 0 5.99.684L21 15.064l-.005-10.116-3.061.705a9.03 9.03 0 0 1-5.99-.685l-.106-.052a9.03 9.03 0 0 0-6.111-.657L3 4.927m0 10.117V4.927z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M3 3v18M3 4.927l2.727-.668a9.03 9.03 0 0 1 6.11.657l.107.052a9.03 9.03 0 0 0 5.99.685l3.061-.705L21 15.064l-3.065.705a9.03 9.03 0 0 1-5.991-.684l-.106-.052a9.03 9.03 0 0 0-6.111-.657L3 15.044z"
}));
SvgSiFlagAlt4.displayName = "SvgSiFlagAlt4";
const ForwardRef$3E = /*#__PURE__*/React.forwardRef(SvgSiFlagAlt4);
const Memo$3E = /*#__PURE__*/React.memo(ForwardRef$3E);

const SvgSiFlare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
  clipPath: "url(#a)"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7 12H1m22 0h-6m-5 5v6m3.536-7.464 1.414 1.414m-9.9-9.9 1.414 1.414m7.072 0L16.95 7.05m-9.9 9.9 1.414-1.414M12 1v6m2 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
})), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "#fff",
  d: "M0 0h24v24H0z"
}))));
SvgSiFlare.displayName = "SvgSiFlare";
const ForwardRef$3D = /*#__PURE__*/React.forwardRef(SvgSiFlare);
const Memo$3D = /*#__PURE__*/React.memo(ForwardRef$3D);

const SvgSiFlowLine = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
}));
SvgSiFlowLine.displayName = "SvgSiFlowLine";
const ForwardRef$3C = /*#__PURE__*/React.forwardRef(SvgSiFlowLine);
const Memo$3C = /*#__PURE__*/React.memo(ForwardRef$3C);

const SvgSiFlowParallel = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m10 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
}));
SvgSiFlowParallel.displayName = "SvgSiFlowParallel";
const ForwardRef$3B = /*#__PURE__*/React.forwardRef(SvgSiFlowParallel);
const Memo$3B = /*#__PURE__*/React.memo(ForwardRef$3B);

const SvgSiGarage = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18 21h.6a2.4 2.4 0 0 0 2.4-2.412V9.332c0-.382-.18-.734-.48-.965L12.7 3.24a1.195 1.195 0 0 0-1.44 0L3.48 8.367c-.3.231-.48.583-.48.965v9.256A2.4 2.4 0 0 0 5.4 21H6v-5.2c0-.44.36-.8.8-.8h10.4c.44 0 .8.36.8.8z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "M.587 9.374a.75.75 0 1 0 .826 1.252L1 10zM11.26 3.24l.413.626.035-.024zm1.44 0-.448.602.037.025zm9.889 7.387a.75.75 0 1 0 .823-1.254L23 10zm-.839-1.94a.75.75 0 0 0-1.5 0zm-18-.005a.75.75 0 0 0-1.5 0zM17.25 21a.75.75 0 0 0 1.5 0zm-12 0a.75.75 0 0 0 1.5 0zM6 17.25a.75.75 0 0 0 0 1.5zm12 1.5a.75.75 0 0 0 0-1.5zM12.75 15a.75.75 0 0 0-1.5 0zm-1.5 6a.75.75 0 0 0 1.5 0zM11 11.25a.75.75 0 0 0 0 1.5zm2 1.5a.75.75 0 0 0 0-1.5zM1 10l.413.626 10.26-6.76-.413-.626-.413-.626-10.26 6.76zm10.26-6.76.448.602a.45.45 0 0 1 .544 0l.448-.602.448-.602a1.95 1.95 0 0 0-2.336 0zm1.44 0-.411.627 10.3 6.76L23 10l.412-.627-10.3-6.76zM21 8.687h-.75V18.6h1.5V8.687zm0 9.913h-.75c0 .916-.734 1.65-1.65 1.65v1.5a3.144 3.144 0 0 0 3.15-3.15zM18.6 21v-.75H5.4v1.5h13.2zM5.4 21v-.75c-.916 0-1.65-.734-1.65-1.65h-1.5a3.144 3.144 0 0 0 3.15 3.15zM3 18.6h.75V8.682h-1.5V18.6zM15 21v-.75H9v1.5h6zm-8.2-6v.75h10.4v-1.5H6.8zm10.4 0v.75a.05.05 0 0 1 .05.05h1.5a1.55 1.55 0 0 0-1.55-1.55zm.8.8h-.75V21h1.5v-5.2zM6 21h.75v-5.2h-1.5V21zm0-5.2h.75a.05.05 0 0 1 .05-.05v-1.5a1.55 1.55 0 0 0-1.55 1.55zM6 18v.75h12v-1.5H6zm6-3h-.75v6h1.5v-6zm-1-3v.75h2v-1.5h-2z"
}));
SvgSiGarage.displayName = "SvgSiGarage";
const ForwardRef$3A = /*#__PURE__*/React.forwardRef(SvgSiGarage);
const Memo$3A = /*#__PURE__*/React.memo(ForwardRef$3A);

const SvgSiGlobeDetailed = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10H2m10 10C6.477 22 2 17.523 2 12m10 10 .66-.31c2.1-2.71 3.34-6.14 3.34-9.78s-1.22-7-3.27-9.69L12 2m0 20-.73-.31A15.94 15.94 0 0 1 8 12c0-3.64 1.24-7.07 3.34-9.78L12 2M2 12C2 6.477 6.477 2 12 2m7.14 17c-1.82-1.85-4.34-3-7.14-3s-5.33 1.15-7.14 3M19.14 5C17.33 6.85 14.8 8 12 8S6.68 6.85 4.86 5"
}));
SvgSiGlobeDetailed.displayName = "SvgSiGlobeDetailed";
const ForwardRef$3z = /*#__PURE__*/React.forwardRef(SvgSiGlobeDetailed);
const Memo$3z = /*#__PURE__*/React.memo(ForwardRef$3z);

const SvgSiGrid = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M8.4 3H4.6A1.6 1.6 0 0 0 3 4.6v3.8A1.6 1.6 0 0 0 4.6 10h3.8A1.6 1.6 0 0 0 10 8.4V4.6A1.6 1.6 0 0 0 8.4 3m11 11h-3.8a1.6 1.6 0 0 0-1.6 1.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8a1.6 1.6 0 0 0-1.6-1.6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8.4 3H4.6A1.6 1.6 0 0 0 3 4.6v3.8A1.6 1.6 0 0 0 4.6 10h3.8A1.6 1.6 0 0 0 10 8.4V4.6A1.6 1.6 0 0 0 8.4 3Zm11 0h-3.8A1.6 1.6 0 0 0 14 4.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8A1.6 1.6 0 0 0 21 8.4V4.6A1.6 1.6 0 0 0 19.4 3Zm-11 11H4.6A1.6 1.6 0 0 0 3 15.6v3.8A1.6 1.6 0 0 0 4.6 21h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8A1.6 1.6 0 0 0 8.4 14Zm11 0h-3.8a1.6 1.6 0 0 0-1.6 1.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8a1.6 1.6 0 0 0-1.6-1.6Z"
}));
SvgSiGrid.displayName = "SvgSiGrid";
const ForwardRef$3y = /*#__PURE__*/React.forwardRef(SvgSiGrid);
const Memo$3y = /*#__PURE__*/React.memo(ForwardRef$3y);

const SvgSiGridOn = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M3 15h18M3 9h18M9 21V3m6 18V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiGridOn.displayName = "SvgSiGridOn";
const ForwardRef$3x = /*#__PURE__*/React.forwardRef(SvgSiGridOn);
const Memo$3x = /*#__PURE__*/React.memo(ForwardRef$3x);

const SvgSiGridView = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M8.4 4H5.6A1.6 1.6 0 0 0 4 5.6v2.8A1.6 1.6 0 0 0 5.6 10h2.8A1.6 1.6 0 0 0 10 8.4V5.6A1.6 1.6 0 0 0 8.4 4m10 10h-2.8a1.6 1.6 0 0 0-1.6 1.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8a1.6 1.6 0 0 0-1.6-1.6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8.4 4H5.6A1.6 1.6 0 0 0 4 5.6v2.8A1.6 1.6 0 0 0 5.6 10h2.8A1.6 1.6 0 0 0 10 8.4V5.6A1.6 1.6 0 0 0 8.4 4Zm0 10H5.6A1.6 1.6 0 0 0 4 15.6v2.8A1.6 1.6 0 0 0 5.6 20h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 14Zm10-10h-2.8A1.6 1.6 0 0 0 14 5.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8A1.6 1.6 0 0 0 20 8.4V5.6A1.6 1.6 0 0 0 18.4 4Zm0 10h-2.8a1.6 1.6 0 0 0-1.6 1.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8a1.6 1.6 0 0 0-1.6-1.6Z"
}));
SvgSiGridView.displayName = "SvgSiGridView";
const ForwardRef$3w = /*#__PURE__*/React.forwardRef(SvgSiGridView);
const Memo$3w = /*#__PURE__*/React.memo(ForwardRef$3w);

const SvgSiHammer = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "m14.657 11.586.53-.53a.75.75 0 0 0-1.06 0zm-2.121 2.121.53.53zm-9.617 7.354-.53.53zm-.566-.566.53-.53zm0-2.262.53.53zm7.354-7.354-.53-.53zm2.122-2.122.53.53a.75.75 0 0 0 0-1.06zm9.475 2.405.53-.53zm-3.536 3.535-.53.53zm-2.404-9.475.53-.53zM3.52 4.692a.75.75 0 0 0 1.06 1.06zm10.607 6.363-2.122 2.122 1.061 1.06 2.121-2.121zm-2.122 2.122L4.651 20.53l1.061 1.06 7.354-7.354zM4.651 20.53a.85.85 0 0 1-1.202 0l-1.06 1.06a2.35 2.35 0 0 0 3.323 0zm-1.202 0-.565-.566-1.06 1.06.565.566zm-.565-.566a.85.85 0 0 1 0-1.202l-1.06-1.06a2.35 2.35 0 0 0 0 3.323zm0-1.202 7.354-7.354-1.061-1.06-7.354 7.353zm7.354-7.354 2.121-2.121-1.06-1.061-2.122 2.121zm10.535.283a.85.85 0 0 1 0 1.202l1.061 1.06a2.35 2.35 0 0 0 0-3.323zm0 1.202-1.272 1.273 1.06 1.06 1.273-1.272zm-1.272 1.273a.85.85 0 0 1-1.202 0l-1.061 1.06a2.35 2.35 0 0 0 3.323 0zm-4.667-8.415 4.95 4.95 1.06-1.06-4.95-4.95zm4.95 4.95.99.99 1.06-1.06-.99-.99zm-1.485 3.465-.99-.99-1.06 1.06.989.99zm-.99-.99-2.122-2.122-1.06 1.061 2.121 2.121zm0 1.06 3.535-3.535-1.06-1.06-3.536 3.535zm-4.95-6.01-4.95-4.95-1.06 1.06 4.95 4.95zm.707 4.95-2.828-2.829-1.061 1.061 2.828 2.828zM4.581 5.752a7.25 7.25 0 0 1 10.253 0l1.06-1.06a8.75 8.75 0 0 0-12.374 0z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M21.304 13.424a1.6 1.6 0 0 0 0-2.262l-.99-.99-3.536 3.535.99.99a1.6 1.6 0 0 0 2.263 0zM5.182 21.061l7.354-7.354-2.829-2.828-7.354 7.354a1.6 1.6 0 0 0 0 2.262l.566.566a1.6 1.6 0 0 0 2.263 0"
}));
SvgSiHammer.displayName = "SvgSiHammer";
const ForwardRef$3v = /*#__PURE__*/React.forwardRef(SvgSiHammer);
const Memo$3v = /*#__PURE__*/React.memo(ForwardRef$3v);

const SvgSiHammerAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m13.707 11.607-8.061 9.475a1.6 1.6 0 0 1-2.263 0l-.565-.566a1.6 1.6 0 0 1 0-2.262l9.475-8.062-2.121-2.12 3.535-3.536 5.657 5.656-3.536 3.536z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m18.657 6.657-1.414-1.414m-3.536 6.364-8.06 9.475a1.6 1.6 0 0 1-2.264 0l-.565-.566a1.6 1.6 0 0 1 0-2.262l9.475-8.062m3.536 3.536 3.535-3.536m-9.192-2.12 3.535-3.536m-5.09.848L11.02 2.98a.8.8 0 0 1 1.132 0l8.768 8.768a.8.8 0 0 1 0 1.131l-2.404 2.405a.8.8 0 0 1-1.132 0L8.616 6.515a.8.8 0 0 1 0-1.13"
}));
SvgSiHammerAlt.displayName = "SvgSiHammerAlt";
const ForwardRef$3u = /*#__PURE__*/React.forwardRef(SvgSiHammerAlt);
const Memo$3u = /*#__PURE__*/React.memo(ForwardRef$3u);

const SvgSiHeart = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M16.696 3C14.652 3 12.887 4.197 12 5.943 11.113 4.197 9.348 3 7.304 3 4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M16.696 3C14.652 3 12.887 4.197 12 5.943 11.113 4.197 9.348 3 7.304 3 4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3"
}));
SvgSiHeart.displayName = "SvgSiHeart";
const ForwardRef$3t = /*#__PURE__*/React.forwardRef(SvgSiHeart);
const Memo$3t = /*#__PURE__*/React.memo(ForwardRef$3t);

const SvgSiHeartAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M16.55 3.084a5.452 5.452 0 0 1 3.852 9.307l-.648.654-.86.854-6.852 6.852L5.19 13.9l-.86-.854-.648-.654a5.453 5.453 0 1 1 7.706-7.712l.654.654.655-.654a5.45 5.45 0 0 1 3.852-1.595",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M16.55 3.084a5.452 5.452 0 0 1 3.852 9.307l-.648.654-.86.854-6.852 6.852L5.19 13.9l-.86-.854-.648-.654a5.453 5.453 0 1 1 7.706-7.712l.654.654.655-.654a5.45 5.45 0 0 1 3.852-1.595",
  clipRule: "evenodd"
}));
SvgSiHeartAlt.displayName = "SvgSiHeartAlt";
const ForwardRef$3s = /*#__PURE__*/React.forwardRef(SvgSiHeartAlt);
const Memo$3s = /*#__PURE__*/React.memo(ForwardRef$3s);

const SvgSiHelp = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M11.83 14v-.621a2.33 2.33 0 0 1 1.164-2.02c1.126-.66 1.514-2.057.854-3.183s-2.057-1.514-3.183-.854C9.965 7.75 9.5 8.487 9.5 9.341M12 17h-.008M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
}));
SvgSiHelp.displayName = "SvgSiHelp";
const ForwardRef$3r = /*#__PURE__*/React.forwardRef(SvgSiHelp);
const Memo$3r = /*#__PURE__*/React.memo(ForwardRef$3r);

const SvgSiHome = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M15 22h3.6a2.4 2.4 0 0 0 2.4-2.412V8.332c0-.382-.18-.734-.48-.965L12.7 2.24a1.195 1.195 0 0 0-1.44 0L3.48 7.367c-.3.231-.48.583-.48.965v11.256A2.4 2.4 0 0 0 5.4 22H9v-9.2c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18.6 22H5.4A2.4 2.4 0 0 1 3 19.588V8.332c0-.382.18-.734.48-.965l7.78-5.126a1.195 1.195 0 0 1 1.44 0l7.82 5.126c.3.231.48.583.48.965v11.256A2.4 2.4 0 0 1 18.6 22Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9.8 12h4.4c.44 0 .8.36.8.8V22H9v-9.2c0-.44.36-.8.8-.8Z"
}));
SvgSiHome.displayName = "SvgSiHome";
const ForwardRef$3q = /*#__PURE__*/React.forwardRef(SvgSiHome);
const Memo$3q = /*#__PURE__*/React.memo(ForwardRef$3q);

const SvgSiHomeDetailed = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M15 22h3.6a2.4 2.4 0 0 0 2.4-2.412V8.332c0-.382-.18-.734-.48-.965L12.7 2.24a1.195 1.195 0 0 0-1.44 0L3.48 7.367c-.3.231-.48.583-.48.965v11.256A2.4 2.4 0 0 0 5.4 22H9v-9.2c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m1 9 10.26-6.76a1.2 1.2 0 0 1 1.44 0L23 9m-2-1.313V19.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 22 3 20.93 3 19.6V7.682M18 3v2.718M15 8H9m.8 4h4.4c.44 0 .8.36.8.8V22H9v-9.2c0-.44.36-.8.8-.8"
}));
SvgSiHomeDetailed.displayName = "SvgSiHomeDetailed";
const ForwardRef$3p = /*#__PURE__*/React.forwardRef(SvgSiHomeDetailed);
const Memo$3p = /*#__PURE__*/React.memo(ForwardRef$3p);

const SvgSiHospital = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M17 19.6V2H3v17.6A2.4 2.4 0 0 0 5.4 22H8v-3.2a.8.8 0 0 1 .8-.8h2.4a.8.8 0 0 1 .8.8V22h2.6a2.4 2.4 0 0 0 2.4-2.4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M17 2v17.6a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 19.6V2m18 4v13.6a2.4 2.4 0 0 1-2.4 2.4h-4.2M12 22v-3.2a.8.8 0 0 0-.8-.8H8.8a.8.8 0 0 0-.8.8V22M2 2h16m-1 4h5m-12 .5v6m-3-3h6"
}));
SvgSiHospital.displayName = "SvgSiHospital";
const ForwardRef$3o = /*#__PURE__*/React.forwardRef(SvgSiHospital);
const Memo$3o = /*#__PURE__*/React.memo(ForwardRef$3o);

const SvgSiHospitalAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18 19.6V2H6v17.6A2.4 2.4 0 0 0 8.4 22H10v-3.2a.8.8 0 0 1 .8-.8h2.4a.8.8 0 0 1 .8.8V22h1.6a2.4 2.4 0 0 0 2.4-2.4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18 2v4m0-4H6m12 0h1m-1 4v13.6a2.4 2.4 0 0 1-2.4 2.4M18 6h4m-6.4 16h4a2.4 2.4 0 0 0 2.4-2.4V6m-6.4 16H14m0 0h-4m4 0v-3.2a.8.8 0 0 0-.8-.8h-2.4a.8.8 0 0 0-.8.8V22m0 0H8.4q-.244 0-.474-.047m0 0A2.4 2.4 0 0 1 6 19.6V6m1.926 15.953H4.4a2.4 2.4 0 0 1-2.4-2.4V6m5.926 15.953H8.6M6 6V2m0 4H2m4-4H5m17 4h1M2 6H1m11 .5v3m0 0v3m0-3H9m3 0h3"
}));
SvgSiHospitalAlt1.displayName = "SvgSiHospitalAlt1";
const ForwardRef$3n = /*#__PURE__*/React.forwardRef(SvgSiHospitalAlt1);
const Memo$3n = /*#__PURE__*/React.memo(ForwardRef$3n);

const SvgSiHourglass = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M7 22v-4l5-1 5 1v4z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m12 12 3.136-2.391C16.318 8.7 17 7.265 17 5.735V2H7v3.735c0 1.53.682 2.965 1.864 3.874zm0 0-3.136 2.391C7.682 15.3 7 16.735 7 18.265V22h10v-3.735c0-1.53-.682-2.965-1.864-3.874zm-5 6 5-1 5 1M5 2h14M5 22h14"
}));
SvgSiHourglass.displayName = "SvgSiHourglass";
const ForwardRef$3m = /*#__PURE__*/React.forwardRef(SvgSiHourglass);
const Memo$3m = /*#__PURE__*/React.memo(ForwardRef$3m);

const SvgSiInflight = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.925 10.74 15.5 11l-5.482-4.578A2.2 2.2 0 0 0 8.825 6l-1.29.006L11 11H5.5L4.377 9.898a2 2 0 0 0-1.4-.638L2 9.25l1.985 3.699L10 15h12l-.032-2.165c.002-1.124-.907-2.082-2.043-2.095q.052.03 0 0"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M19.925 10.74 15.5 11l-5.482-4.578A2.2 2.2 0 0 0 8.825 6l-1.29.006L11 11H5.5L4.377 9.898a2 2 0 0 0-1.4-.638L2 9.25l1.985 3.699L10 15h12l-.032-2.165c.002-1.124-.907-2.082-2.043-2.095m0 0q.052.03 0 0M6 19h12"
}));
SvgSiInflight.displayName = "SvgSiInflight";
const ForwardRef$3l = /*#__PURE__*/React.forwardRef(SvgSiInflight);
const Memo$3l = /*#__PURE__*/React.memo(ForwardRef$3l);

const SvgSiInfo = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 8h.008M12 16v-5m10 1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiInfo.displayName = "SvgSiInfo";
const ForwardRef$3k = /*#__PURE__*/React.forwardRef(SvgSiInfo);
const Memo$3k = /*#__PURE__*/React.memo(ForwardRef$3k);

const SvgSiInput = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M1 9V6.4A2.4 2.4 0 0 1 3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V15m12 1 4-4m0 0-4-4m4 4H1"
}));
SvgSiInput.displayName = "SvgSiInput";
const ForwardRef$3j = /*#__PURE__*/React.forwardRef(SvgSiInput);
const Memo$3j = /*#__PURE__*/React.memo(ForwardRef$3j);

const SvgSiInsights = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M21 21H3.8a.8.8 0 0 1-.8-.8V3m3 11 4-4 4 4 7-7"
}));
SvgSiInsights.displayName = "SvgSiInsights";
const ForwardRef$3i = /*#__PURE__*/React.forwardRef(SvgSiInsights);
const Memo$3i = /*#__PURE__*/React.memo(ForwardRef$3i);

const SvgSiInventory = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M21 7v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V7"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M21 7v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V7m5 4h8M2.6 3h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3"
}));
SvgSiInventory.displayName = "SvgSiInventory";
const ForwardRef$3h = /*#__PURE__*/React.forwardRef(SvgSiInventory);
const Memo$3h = /*#__PURE__*/React.memo(ForwardRef$3h);

const SvgSiItalic = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M15 3 9 21m-4 0h8M11 3h8"
}));
SvgSiItalic.displayName = "SvgSiItalic";
const ForwardRef$3g = /*#__PURE__*/React.forwardRef(SvgSiItalic);
const Memo$3g = /*#__PURE__*/React.memo(ForwardRef$3g);

const SvgSiJson = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M9 16v-1m3 1v-1m3 1v-1M6.835 4q-.747.022-1.297.242a1.86 1.86 0 0 0-.857.66q-.285.438-.285 1.164V9.23q0 1.12-.594 1.802-.593.66-1.802.88v.131q1.23.22 1.802.901.594.66.594 1.78v3.231q0 .704.285 1.143.286.461.835.66.55.219 1.32.241M17.164 4q.747.022 1.297.242.55.219.857.66.285.438.285 1.164V9.23q0 1.12.594 1.802.593.66 1.802.88v.131q-1.23.22-1.802.901-.594.66-.594 1.78v3.231q0 .704-.285 1.143-.286.461-.835.66-.55.219-1.32.241"
}));
SvgSiJson.displayName = "SvgSiJson";
const ForwardRef$3f = /*#__PURE__*/React.forwardRef(SvgSiJson);
const Memo$3f = /*#__PURE__*/React.memo(ForwardRef$3f);

const SvgSiJsonAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M7 20h-.184c-1.626-.009-2.408-.306-2.408-2.01v-4.172c0-1.215-1.45-1.774-2.408-1.862v-.166c.967-.087 2.408-.69 2.408-1.887V6.01c0-1.695.782-2.001 2.408-2.01H7m10 16h.184c1.626-.009 2.408-.306 2.408-2.01v-4.172c0-1.215 1.45-1.774 2.408-1.862v-.166c-.967-.087-2.408-.69-2.408-1.887V6.01c0-1.695-.782-2.001-2.408-2.01H17M9 16v-1m3 1v-1m3 1v-1"
}));
SvgSiJsonAlt1.displayName = "SvgSiJsonAlt1";
const ForwardRef$3e = /*#__PURE__*/React.forwardRef(SvgSiJsonAlt1);
const Memo$3e = /*#__PURE__*/React.memo(ForwardRef$3e);

const SvgSiJsonAlt2 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M8.2 3h-.99q-.864 0-1.494.321-.63.304-.954.911-.306.59-.252 1.447l.27 3.535q.09.983-.306 1.393Q4.096 11 2.98 11H2v2h.98q1.116 0 1.494.393.396.41.306 1.393l-.27 3.535q-.054.858.252 1.447.324.607.954.91.63.322 1.494.322h.99M16 3h.99q.864 0 1.494.321.63.304.954.911.306.59.252 1.447l-.27 3.535q-.09.983.306 1.393.378.393 1.494.393h.98v2h-.98q-1.116 0-1.494.393-.396.41-.306 1.393l.27 3.535q.054.858-.252 1.447a2.07 2.07 0 0 1-.954.91q-.63.322-1.494.322H16m-7-5v-1m3 1v-1m3 1v-1"
}));
SvgSiJsonAlt2.displayName = "SvgSiJsonAlt2";
const ForwardRef$3d = /*#__PURE__*/React.forwardRef(SvgSiJsonAlt2);
const Memo$3d = /*#__PURE__*/React.memo(ForwardRef$3d);

const SvgSiJsonAlt3 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M11.998 15a22 22 0 0 1-.492 1.624q-.3.876-.662 1.73A39 39 0 0 1 10.16 20M6.835 4q-.747.022-1.297.242a1.86 1.86 0 0 0-.857.66q-.285.438-.285 1.164V9.23q0 1.12-.594 1.802-.593.66-1.802.88v.131q1.23.22 1.802.901.594.66.594 1.78v3.231q0 .704.285 1.143.286.461.835.66.55.219 1.32.241M17.164 4q.747.022 1.297.242.55.219.857.66.285.438.285 1.164V9.23q0 1.12.594 1.802.593.66 1.802.88v.131q-1.23.22-1.802.901-.594.66-.594 1.78v3.231q0 .704-.285 1.143-.286.461-.835.66-.55.219-1.32.241M13 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
}));
SvgSiJsonAlt3.displayName = "SvgSiJsonAlt3";
const ForwardRef$3c = /*#__PURE__*/React.forwardRef(SvgSiJsonAlt3);
const Memo$3c = /*#__PURE__*/React.memo(ForwardRef$3c);

const SvgSiJsonAlt4 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7 20h-.184c-1.626-.009-2.408-.306-2.408-2.01v-4.172c0-1.215-1.45-1.774-2.408-1.862v-.166c.967-.087 2.408-.69 2.408-1.887V6.01c0-1.695.782-2.001 2.408-2.01H7m10 16h.184c1.626-.009 2.408-.306 2.408-2.01v-4.172c0-1.215 1.45-1.774 2.408-1.862v-.166c-.967-.087-2.408-.69-2.408-1.887V6.01c0-1.695-.782-2.001-2.408-2.01H17m-5.002 11a22 22 0 0 1-.492 1.624q-.3.876-.662 1.73A39 39 0 0 1 10.16 20M13 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
}));
SvgSiJsonAlt4.displayName = "SvgSiJsonAlt4";
const ForwardRef$3b = /*#__PURE__*/React.forwardRef(SvgSiJsonAlt4);
const Memo$3b = /*#__PURE__*/React.memo(ForwardRef$3b);

const SvgSiJsonAlt5 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "M2 11v-.75a.75.75 0 0 0-.75.75zm2.474-.393-.54-.52zm.306-1.393-.748.057.001.012zM4.51 5.68l-.749.047.001.01zm.252-1.447L4.1 3.88l-.004.008zm.954-.91.326.675.015-.007zM8.2 3.75a.75.75 0 0 0 0-1.5zM2 13h-.75c0 .414.336.75.75.75zm2.474.393-.54.52zm.306 1.393-.747-.069v.012zm-.27 3.535-.748-.057v.01zm.252 1.447-.666.345.004.008zm.954.91.34-.668-.014-.007zM8.2 21.75a.75.75 0 0 0 0-1.5zM22.2 11h.75a.75.75 0 0 0-.75-.75zm-2.474-.393.54-.52zm-.306-1.393.747.069V9.27zm.27-3.535.748.057v-.01zm-.252-1.447.666-.346-.004-.007zm-.954-.91-.34.668.014.007zM16 2.25a.75.75 0 0 0 0 1.5zM22.2 13v.75a.75.75 0 0 0 .75-.75zm-2.474.393.54.52zm-.306 1.393.748-.057-.001-.012zm.27 3.535.749-.047-.001-.01zm-.252 1.447.662.353.004-.008zm-.954.91-.326-.675-.015.008zM16 20.25a.75.75 0 0 0 0 1.5zm-3.276-6.063a.75.75 0 0 0-1.453-.374zm-1.88 3.168-.69-.294-.005.01-.004.011zm-1.37 1.34a.75.75 0 0 0 1.371.61zM2 11.75h.98v-1.5H2zm.98 0c.41 0 .79-.036 1.122-.123.33-.087.66-.237.912-.5l-1.08-1.04c0-.001-.045.045-.213.09a3 3 0 0 1-.741.073zm2.034-.622c.496-.514.579-1.26.513-1.982l-1.494.137c.054.588-.067.77-.099.804zm.514-1.97-.27-3.537-1.496.115.27 3.535zm-.27-3.527c-.03-.474.044-.812.17-1.053l-1.332-.691c-.282.544-.377 1.17-.335 1.839zm.166-1.046c.14-.262.339-.453.618-.588L5.39 2.646c-.56.27-.997.685-1.29 1.233zm.633-.595c.293-.15.67-.24 1.153-.24v-1.5c-.669 0-1.288.125-1.835.403zm1.153-.24h.99v-1.5h-.99zM2 13.75h.98v-1.5H2zm.98 0c.333 0 .575.03.74.074.17.044.215.09.214.089l1.08-1.04c-.253-.263-.582-.413-.912-.5a4.5 4.5 0 0 0-1.122-.123zm.954.163c.032.034.153.216.1.804l1.493.137c.066-.721-.017-1.468-.513-1.982zm.098.816-.27 3.535 1.496.114.27-3.535zm-.27 3.545c-.043.669.052 1.295.334 1.84l1.332-.692c-.126-.241-.2-.579-.17-1.053zm.338 1.847c.293.548.73.963 1.29 1.233l.652-1.351a1.32 1.32 0 0 1-.618-.588zm1.275 1.226c.547.278 1.166.403 1.835.403v-1.5c-.483 0-.86-.09-1.153-.24zm1.835.403h.99v-1.5h-.99zM2.75 13v-2h-1.5v2zm19.45-2.75h-.98v1.5h.98zm-.98 0c-.333 0-.575-.03-.74-.074-.17-.044-.215-.09-.213-.089l-1.081 1.04c.253.263.582.413.912.5a4.5 4.5 0 0 0 1.122.123zm-.954-.163c-.032-.034-.153-.216-.1-.804l-1.493-.137c-.066.721.018 1.468.513 1.982zm-.098-.816.27-3.535-1.496-.115-.27 3.536zm.27-3.545c.043-.669-.052-1.295-.334-1.84l-1.332.692c.126.241.2.579.17 1.053zM20.1 3.879a2.82 2.82 0 0 0-1.29-1.233l-.652 1.351c.28.135.479.326.618.588zm-1.275-1.226c-.546-.278-1.166-.403-1.835-.403v1.5c.483 0 .86.09 1.153.24zM16.99 2.25H16v1.5h.99zm5.21 10h-.98v1.5h.98zm-.98 0c-.41 0-.79.036-1.122.123-.33.087-.66.237-.912.5l1.08 1.04c0 .001.045-.045.213-.09.166-.043.408-.073.741-.073zm-2.034.622c-.495.514-.579 1.26-.513 1.982l1.494-.137c-.054-.588.066-.77.099-.804zm-.514 1.97.27 3.536 1.496-.114-.27-3.535zm.27 3.527c.03.474-.044.812-.17 1.053l1.332.691c.282-.544.377-1.17.335-1.839zm-.166 1.046c-.14.262-.338.454-.618.588l.652 1.351c.56-.27.997-.685 1.29-1.233zm-.633.596c-.293.15-.67.239-1.153.239v1.5c.669 0 1.289-.125 1.835-.403zm-1.153.239H16v1.5h.99zM22.95 13v-2h-1.5v2zm-11.679.813q-.183.716-.475 1.569l1.42.484q.307-.899.508-1.68zm-.475 1.569a25 25 0 0 1-.643 1.68l1.38.586q.375-.879.683-1.782zm-.651 1.7a38 38 0 0 1-.67 1.613l1.37.61a40 40 0 0 0 .697-1.678zM12.25 9a.25.25 0 0 1-.25.25v1.5A1.75 1.75 0 0 0 13.75 9zm-.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75zM11.75 9a.25.25 0 0 1 .25-.25v-1.5A1.75 1.75 0 0 0 10.25 9zm.25-.25a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 12 7.25z"
}));
SvgSiJsonAlt5.displayName = "SvgSiJsonAlt5";
const ForwardRef$3a = /*#__PURE__*/React.forwardRef(SvgSiJsonAlt5);
const Memo$3a = /*#__PURE__*/React.memo(ForwardRef$3a);

const SvgSiKey = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M15 3a6 6 0 1 1-2.001 11.658l-5.76 5.764a1.994 1.994 0 0 1-2.817 0L3 19l1.458-1.458 1.85-.184.227-1.893 1.895-.228.227-1.894 1.219-1.219A6 6 0 0 1 15 3m0 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M15 15a6 6 0 1 0-5.124-2.876l-1.22 1.22-.226 1.893-1.894.227-.228 1.894-1.85.184L3 19l1.422 1.422a1.99 1.99 0 0 0 2.817 0l5.76-5.764c.626.222 1.3.342 2.001.342"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M15 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
}));
SvgSiKey.displayName = "SvgSiKey";
const ForwardRef$39 = /*#__PURE__*/React.forwardRef(SvgSiKey);
const Memo$39 = /*#__PURE__*/React.memo(ForwardRef$39);

const SvgSiKeypad = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m7-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
}));
SvgSiKeypad.displayName = "SvgSiKeypad";
const ForwardRef$38 = /*#__PURE__*/React.forwardRef(SvgSiKeypad);
const Memo$38 = /*#__PURE__*/React.memo(ForwardRef$38);

const SvgSiKnob = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M16.95 10.05 12 15m7 0a7 7 0 1 1-14 0 7 7 0 0 1 14 0M13 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
}));
SvgSiKnob.displayName = "SvgSiKnob";
const ForwardRef$37 = /*#__PURE__*/React.forwardRef(SvgSiKnob);
const Memo$37 = /*#__PURE__*/React.memo(ForwardRef$37);

const SvgSiLamp = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 2c5.523 0 10 4.477 10 10v1H2v-1C2 6.477 6.477 2 12 2"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 13v6m10-7c0-5.523-4.477-10-10-10S2 6.477 2 12v1h20zM8.818 19h6.364c1 0 1.818.9 1.818 2v1H7v-1c0-1.1.818-2 1.818-2"
}));
SvgSiLamp.displayName = "SvgSiLamp";
const ForwardRef$36 = /*#__PURE__*/React.forwardRef(SvgSiLamp);
const Memo$36 = /*#__PURE__*/React.memo(ForwardRef$36);

const SvgSiLanding = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m19.813 11.376-4.25-.641-4.786-5.106a2.3 2.3 0 0 0-1.104-.601l-1.27-.218 2.643 5.037-5.443-.897-.947-1.057a2.04 2.04 0 0 0-1.271-.837l-.96-.18L3.77 10.67l5.578 2.958 11.813 2.032.317-1.976c.186-1.048-.55-2.1-1.665-2.31q.045.039 0 0"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m19.813 11.376-4.25-.641-4.786-5.106a2.3 2.3 0 0 0-1.104-.601l-1.27-.218 2.643 5.037-5.443-.897-.947-1.057a2.04 2.04 0 0 0-1.271-.837l-.96-.18L3.77 10.67l5.578 2.958 11.813 2.032.317-1.976c.186-1.048-.55-2.1-1.665-2.31m0 0q.045.037 0 0M6 19h12"
}));
SvgSiLanding.displayName = "SvgSiLanding";
const ForwardRef$35 = /*#__PURE__*/React.forwardRef(SvgSiLanding);
const Memo$35 = /*#__PURE__*/React.memo(ForwardRef$35);

const SvgSiLayers = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 3 3 8l9 5 9-5z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m3 12 9 5 9-5M3 16l9 5 9-5M3 8l9-5 9 5-9 5z"
}));
SvgSiLayers.displayName = "SvgSiLayers";
const ForwardRef$34 = /*#__PURE__*/React.forwardRef(SvgSiLayers);
const Memo$34 = /*#__PURE__*/React.memo(ForwardRef$34);

const SvgSiLeftDown = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M9 19V9.4A4.4 4.4 0 0 1 13.4 5H19M9 19l-4-4m4 4 4-4"
}));
SvgSiLeftDown.displayName = "SvgSiLeftDown";
const ForwardRef$33 = /*#__PURE__*/React.forwardRef(SvgSiLeftDown);
const Memo$33 = /*#__PURE__*/React.memo(ForwardRef$33);

const SvgSiLeftRight = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M21 12H3m18 0-4-4m4 4-4 4M3 12l4-4m-4 4 4 4"
}));
SvgSiLeftRight.displayName = "SvgSiLeftRight";
const ForwardRef$32 = /*#__PURE__*/React.forwardRef(SvgSiLeftRight);
const Memo$32 = /*#__PURE__*/React.memo(ForwardRef$32);

const SvgSiLeftTwoHeaded = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M20 12H4m0 0 4-4m-4 4 4 4m5-8-4 4 4 4"
}));
SvgSiLeftTwoHeaded.displayName = "SvgSiLeftTwoHeaded";
const ForwardRef$31 = /*#__PURE__*/React.forwardRef(SvgSiLeftTwoHeaded);
const Memo$31 = /*#__PURE__*/React.memo(ForwardRef$31);

const SvgSiLeftUp = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeWidth: 1.5,
  d: "M9 5v9.6a4.4 4.4 0 0 0 4.4 4.4H19M9 5 5 9m4-4 4 4"
}));
SvgSiLeftUp.displayName = "SvgSiLeftUp";
const ForwardRef$30 = /*#__PURE__*/React.forwardRef(SvgSiLeftUp);
const Memo$30 = /*#__PURE__*/React.memo(ForwardRef$30);

const SvgSiLibraryBooks = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M10 11h8m-8 3h4m-4-6h8m2 14H8.4C5.42 22 3 19.58 3 16.6V5m5.4-2h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"
}));
SvgSiLibraryBooks.displayName = "SvgSiLibraryBooks";
const ForwardRef$2$ = /*#__PURE__*/React.forwardRef(SvgSiLibraryBooks);
const Memo$2$ = /*#__PURE__*/React.memo(ForwardRef$2$);

const SvgSiLightMode = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
  clipPath: "url(#a)"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M5 12H1m22 0h-4M7.05 7.05 4.222 4.222m15.556 15.556L16.95 16.95m-9.9 0-2.828 2.828M19.778 4.222 16.95 7.05M12 19v4m0-22v4m4 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
})), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "#fff",
  d: "M0 0h24v24H0z"
}))));
SvgSiLightMode.displayName = "SvgSiLightMode";
const ForwardRef$2_ = /*#__PURE__*/React.forwardRef(SvgSiLightMode);
const Memo$2_ = /*#__PURE__*/React.memo(ForwardRef$2_);

const SvgSiLightning = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "m12.667 10.5 1.25-7.5L6 13h5l-1.25 7.5 7.917-10z",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m12.667 10.5 1.25-7.5L6 13h5l-1.25 7.5 7.917-10z",
  clipRule: "evenodd"
}));
SvgSiLightning.displayName = "SvgSiLightning";
const ForwardRef$2Z = /*#__PURE__*/React.forwardRef(SvgSiLightning);
const Memo$2Z = /*#__PURE__*/React.memo(ForwardRef$2Z);

const SvgSiLock = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M6.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3m-4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 0v3m-5.4-8h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"
}));
SvgSiLock.displayName = "SvgSiLock";
const ForwardRef$2Y = /*#__PURE__*/React.forwardRef(SvgSiLock);
const Memo$2Y = /*#__PURE__*/React.memo(ForwardRef$2Y);

const SvgSiLockAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 11V7c0-2.21 1.79-4 4-4s4 1.79 4 4v4M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6m8.4 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
}));
SvgSiLockAlt.displayName = "SvgSiLockAlt";
const ForwardRef$2X = /*#__PURE__*/React.forwardRef(SvgSiLockAlt);
const Memo$2X = /*#__PURE__*/React.memo(ForwardRef$2X);

const SvgSiLockMuted = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M6.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3m-9.4 0h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"
}));
SvgSiLockMuted.displayName = "SvgSiLockMuted";
const ForwardRef$2W = /*#__PURE__*/React.forwardRef(SvgSiLockMuted);
const Memo$2W = /*#__PURE__*/React.memo(ForwardRef$2W);

const SvgSiMail = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M3.2 4h17.6c.66 0 1.2.54 1.2 1.2v12.4c0 1.32-1.08 2.4-2.4 2.4H4.4C3.08 20 2 18.92 2 17.6V5.2C2 4.54 2.54 4 3.2 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m5 7.06 6.87 5.89c.07.06.19.06.26 0L19 7.06M3.2 4h17.6c.66 0 1.2.54 1.2 1.2v12.4c0 1.32-1.08 2.4-2.4 2.4H4.4C3.08 20 2 18.92 2 17.6V5.2C2 4.54 2.54 4 3.2 4"
}));
SvgSiMail.displayName = "SvgSiMail";
const ForwardRef$2V = /*#__PURE__*/React.forwardRef(SvgSiMail);
const Memo$2V = /*#__PURE__*/React.memo(ForwardRef$2V);

const SvgSiMap = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M9 19V3l6 2v16z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9 3v16M9 3 2 5v16l7-2M9 3l6 2M9 19l6 2m0-16v16m0-16 7-2v16l-7 2"
}));
SvgSiMap.displayName = "SvgSiMap";
const ForwardRef$2U = /*#__PURE__*/React.forwardRef(SvgSiMap);
const Memo$2U = /*#__PURE__*/React.memo(ForwardRef$2U);

const SvgSiMemory = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M7.4 5h9.2A2.4 2.4 0 0 1 19 7.4v9.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V7.4A2.4 2.4 0 0 1 7.4 5m3.2 4h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 13.4v-2.8A1.6 1.6 0 0 1 10.6 9",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M14 5V3m-4 2V3m4 18v-2m-4 2v-2m11-5h-2m2-4h-2M5 14H3m2-4H3m4.4-5h9.2A2.4 2.4 0 0 1 19 7.4v9.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V7.4A2.4 2.4 0 0 1 7.4 5m3.2 4h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 13.4v-2.8A1.6 1.6 0 0 1 10.6 9"
}));
SvgSiMemory.displayName = "SvgSiMemory";
const ForwardRef$2T = /*#__PURE__*/React.forwardRef(SvgSiMemory);
const Memo$2T = /*#__PURE__*/React.memo(ForwardRef$2T);

const SvgSiMeter = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M19.806 20a9.77 9.77 0 0 0 2.13-5.037 9.7 9.7 0 0 0-.922-5.38 9.9 9.9 0 0 0-3.69-4.071A10.1 10.1 0 0 0 12 4c-1.884 0-3.73.524-5.324 1.512a9.9 9.9 0 0 0-3.69 4.07 9.7 9.7 0 0 0-.921 5.38A9.77 9.77 0 0 0 4.194 20z",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M12.707 15.293 18 10m1.806 10a9.77 9.77 0 0 0 2.13-5.037 9.7 9.7 0 0 0-.922-5.38 9.9 9.9 0 0 0-3.69-4.071A10.1 10.1 0 0 0 12 4c-1.884 0-3.73.524-5.324 1.512a9.9 9.9 0 0 0-3.69 4.07 9.7 9.7 0 0 0-.921 5.38A9.77 9.77 0 0 0 4.194 20zM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
}));
SvgSiMeter.displayName = "SvgSiMeter";
const ForwardRef$2S = /*#__PURE__*/React.forwardRef(SvgSiMeter);
const Memo$2S = /*#__PURE__*/React.memo(ForwardRef$2S);

const SvgSiMic = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 17c-2.75 0-5-2.172-5-4.828V5.828C7 3.172 9.25 1 12 1s5 2.172 5 4.828v6.344C17 14.828 14.75 17 12 17"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M12 23v-3m0 0a8 8 0 0 1-8-8m8 8a8 8 0 0 0 8-8m-8 5c-2.75 0-5-2.172-5-4.828V5.828C7 3.172 9.25 1 12 1s5 2.172 5 4.828v6.344C17 14.828 14.75 17 12 17"
}));
SvgSiMic.displayName = "SvgSiMic";
const ForwardRef$2R = /*#__PURE__*/React.forwardRef(SvgSiMic);
const Memo$2R = /*#__PURE__*/React.memo(ForwardRef$2R);

const SvgSiMicDetailed = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 1a6 6 0 0 0-6 6v6a6 6 0 0 0 12 0V7a6 6 0 0 0-6-6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M6 23h12m-6 0v-4m0 0a6 6 0 0 0 6-6V7A6 6 0 0 0 6 7v6a6 6 0 0 0 6 6m0-9h.1m2.9 0h.1M9 10h.1M12 7h.1M15 7h.1M9 7h.1m2.9 6h.1m-.1 3h.1M12 4h.1m2.9 9h.1M9 13h.1"
}));
SvgSiMicDetailed.displayName = "SvgSiMicDetailed";
const ForwardRef$2Q = /*#__PURE__*/React.forwardRef(SvgSiMicDetailed);
const Memo$2Q = /*#__PURE__*/React.memo(ForwardRef$2Q);

const SvgSiMoney = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.2 9H2.8a.8.8 0 0 0-.8.8v8.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V9.8a.8.8 0 0 0-.8-.8"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M5 9V6.8c0-.44.36-.8.8-.8h16.4c.44 0 .8.36.8.8v8.4c0 .44-.36.8-.8.8H20M2.8 9h16.4a.8.8 0 0 1 .8.8v8.4a.8.8 0 0 1-.8.8H2.8a.8.8 0 0 1-.8-.8V9.8a.8.8 0 0 1 .8-.8Zm9.2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
}));
SvgSiMoney.displayName = "SvgSiMoney";
const ForwardRef$2P = /*#__PURE__*/React.forwardRef(SvgSiMoney);
const Memo$2P = /*#__PURE__*/React.memo(ForwardRef$2P);

const SvgSiMonitor = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 4H4.4A2.4 2.4 0 0 0 2 6.4v8.2A2.4 2.4 0 0 0 4.4 17h15.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 19.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9 20h6M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v8.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 14.6V6.4A2.4 2.4 0 0 1 4.4 4"
}));
SvgSiMonitor.displayName = "SvgSiMonitor";
const ForwardRef$2O = /*#__PURE__*/React.forwardRef(SvgSiMonitor);
const Memo$2O = /*#__PURE__*/React.memo(ForwardRef$2O);

const SvgSiMonitorCheck = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 4H4.4A2.4 2.4 0 0 0 2 6.4v8.2A2.4 2.4 0 0 0 4.4 17h15.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 19.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9 20h6m-6-9.5 2 2 4-4M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v8.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 14.6V6.4A2.4 2.4 0 0 1 4.4 4"
}));
SvgSiMonitorCheck.displayName = "SvgSiMonitorCheck";
const ForwardRef$2N = /*#__PURE__*/React.forwardRef(SvgSiMonitorCheck);
const Memo$2N = /*#__PURE__*/React.memo(ForwardRef$2N);

const SvgSiMonitorClose = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 4H4.4A2.4 2.4 0 0 0 2 6.4v8.2A2.4 2.4 0 0 0 4.4 17h15.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 19.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9 20h6m-5-7.5 2-2m0 0 2-2m-2 2 2 2m-2-2-2-2M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v8.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 14.6V6.4A2.4 2.4 0 0 1 4.4 4"
}));
SvgSiMonitorClose.displayName = "SvgSiMonitorClose";
const ForwardRef$2M = /*#__PURE__*/React.forwardRef(SvgSiMonitorClose);
const Memo$2M = /*#__PURE__*/React.memo(ForwardRef$2M);

const SvgSiMonitorDown = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 4H4.4A2.4 2.4 0 0 0 2 6.4v8.2A2.4 2.4 0 0 0 4.4 17h15.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 19.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9 20h6m-5-9 2 2m0 0 2-2m-2 2V8M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v8.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 14.6V6.4A2.4 2.4 0 0 1 4.4 4"
}));
SvgSiMonitorDown.displayName = "SvgSiMonitorDown";
const ForwardRef$2L = /*#__PURE__*/React.forwardRef(SvgSiMonitorDown);
const Memo$2L = /*#__PURE__*/React.memo(ForwardRef$2L);

const SvgSiMonitorPause = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 4H4.4A2.4 2.4 0 0 0 2 6.4v8.2A2.4 2.4 0 0 0 4.4 17h15.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 19.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9 20h6m-1-7V8m-4 5V8M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v8.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 14.6V6.4A2.4 2.4 0 0 1 4.4 4"
}));
SvgSiMonitorPause.displayName = "SvgSiMonitorPause";
const ForwardRef$2K = /*#__PURE__*/React.forwardRef(SvgSiMonitorPause);
const Memo$2K = /*#__PURE__*/React.memo(ForwardRef$2K);

const SvgSiMonitorPlay = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M19.6 4A2.4 2.4 0 0 1 22 6.4v8.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 14.6V6.4A2.4 2.4 0 0 1 4.4 4zM10 13l5-2.5L10 8z",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9 20h6M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v8.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 14.6V6.4A2.4 2.4 0 0 1 4.4 4m5.6 9V8l5 2.5z"
}));
SvgSiMonitorPlay.displayName = "SvgSiMonitorPlay";
const ForwardRef$2J = /*#__PURE__*/React.forwardRef(SvgSiMonitorPlay);
const Memo$2J = /*#__PURE__*/React.memo(ForwardRef$2J);

const SvgSiMonitorStop = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M19.6 4A2.4 2.4 0 0 1 22 6.4v8.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 14.6V6.4A2.4 2.4 0 0 1 4.4 4zm-9.3 4a.8.8 0 0 0-.8.8v3.4a.8.8 0 0 0 .8.8h3.4a.8.8 0 0 0 .8-.8V8.8a.8.8 0 0 0-.8-.8z",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9 20h6M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v8.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 14.6V6.4A2.4 2.4 0 0 1 4.4 4m5.9 4h3.4a.8.8 0 0 1 .8.8v3.4a.8.8 0 0 1-.8.8h-3.4a.8.8 0 0 1-.8-.8V8.8a.8.8 0 0 1 .8-.8"
}));
SvgSiMonitorStop.displayName = "SvgSiMonitorStop";
const ForwardRef$2I = /*#__PURE__*/React.forwardRef(SvgSiMonitorStop);
const Memo$2I = /*#__PURE__*/React.memo(ForwardRef$2I);

const SvgSiMonitorUp = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 4H4.4A2.4 2.4 0 0 0 2 6.4v8.2A2.4 2.4 0 0 0 4.4 17h15.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 19.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9 20h6m-5-10 2-2m0 0 2 2m-2-2v5M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v8.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 14.6V6.4A2.4 2.4 0 0 1 4.4 4"
}));
SvgSiMonitorUp.displayName = "SvgSiMonitorUp";
const ForwardRef$2H = /*#__PURE__*/React.forwardRef(SvgSiMonitorUp);
const Memo$2H = /*#__PURE__*/React.memo(ForwardRef$2H);

const SvgSiMoon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.4 10.4 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205 1.026-1.026 1.846-2.051 2.256-3.282-3.896 1.436-8.409.82-11.486-2.256"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.4 10.4 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205 1.026-1.026 1.846-2.051 2.256-3.282-3.896 1.436-8.409.82-11.486-2.256"
}));
SvgSiMoon.displayName = "SvgSiMoon";
const ForwardRef$2G = /*#__PURE__*/React.forwardRef(SvgSiMoon);
const Memo$2G = /*#__PURE__*/React.memo(ForwardRef$2G);

const SvgSiMoreHoriz = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
}));
SvgSiMoreHoriz.displayName = "SvgSiMoreHoriz";
const ForwardRef$2F = /*#__PURE__*/React.forwardRef(SvgSiMoreHoriz);
const Memo$2F = /*#__PURE__*/React.memo(ForwardRef$2F);

const SvgSiMoreHorizCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
}));
SvgSiMoreHorizCircle.displayName = "SvgSiMoreHorizCircle";
const ForwardRef$2E = /*#__PURE__*/React.forwardRef(SvgSiMoreHorizCircle);
const Memo$2E = /*#__PURE__*/React.memo(ForwardRef$2E);

const SvgSiMoreHorizSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
}));
SvgSiMoreHorizSquare.displayName = "SvgSiMoreHorizSquare";
const ForwardRef$2D = /*#__PURE__*/React.forwardRef(SvgSiMoreHorizSquare);
const Memo$2D = /*#__PURE__*/React.memo(ForwardRef$2D);

const SvgSiMoreMutedHoriz = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M12 12v1m-6-1v1m12-1v1"
}));
SvgSiMoreMutedHoriz.displayName = "SvgSiMoreMutedHoriz";
const ForwardRef$2C = /*#__PURE__*/React.forwardRef(SvgSiMoreMutedHoriz);
const Memo$2C = /*#__PURE__*/React.memo(ForwardRef$2C);

const SvgSiMoreMutedHorizCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M12 12v.1M8 12v.1m8-.1v.1m6-.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiMoreMutedHorizCircle.displayName = "SvgSiMoreMutedHorizCircle";
const ForwardRef$2B = /*#__PURE__*/React.forwardRef(SvgSiMoreMutedHorizCircle);
const Memo$2B = /*#__PURE__*/React.memo(ForwardRef$2B);

const SvgSiMoreMutedHorizSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeWidth: 1.5,
  d: "M12 12v.1M8 12v.1m8-.1v.1M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
}));
SvgSiMoreMutedHorizSquare.displayName = "SvgSiMoreMutedHorizSquare";
const ForwardRef$2A = /*#__PURE__*/React.forwardRef(SvgSiMoreMutedHorizSquare);
const Memo$2A = /*#__PURE__*/React.memo(ForwardRef$2A);

const SvgSiMoreMutedVert = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M12 12h1m-1 6h1M12 6h1"
}));
SvgSiMoreMutedVert.displayName = "SvgSiMoreMutedVert";
const ForwardRef$2z = /*#__PURE__*/React.forwardRef(SvgSiMoreMutedVert);
const Memo$2z = /*#__PURE__*/React.memo(ForwardRef$2z);

const SvgSiMoreMutedVertCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M11.95 12.05h.1m-.1 4h.1m-.1-8h.1M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiMoreMutedVertCircle.displayName = "SvgSiMoreMutedVertCircle";
const ForwardRef$2y = /*#__PURE__*/React.forwardRef(SvgSiMoreMutedVertCircle);
const Memo$2y = /*#__PURE__*/React.memo(ForwardRef$2y);

const SvgSiMoreMutedVertSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M11.95 12.05h.1m-.1 4h.1m-.1-8h.1M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiMoreMutedVertSquare.displayName = "SvgSiMoreMutedVertSquare";
const ForwardRef$2x = /*#__PURE__*/React.forwardRef(SvgSiMoreMutedVertSquare);
const Memo$2x = /*#__PURE__*/React.memo(ForwardRef$2x);

const SvgSiMoreSquareHoriz = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533m7 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533m-14 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 6 12.467v-.934A.533.533 0 0 0 5.467 11"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm7 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm-14 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 6 12.467v-.934A.533.533 0 0 0 5.467 11Z"
}));
SvgSiMoreSquareHoriz.displayName = "SvgSiMoreSquareHoriz";
const ForwardRef$2w = /*#__PURE__*/React.forwardRef(SvgSiMoreSquareHoriz);
const Memo$2w = /*#__PURE__*/React.memo(ForwardRef$2w);

const SvgSiMoreSquareVert = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533m0 7h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533m0-14h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 13 5.467v-.934A.533.533 0 0 0 12.467 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0 7h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0-14h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 13 5.467v-.934A.533.533 0 0 0 12.467 4Z"
}));
SvgSiMoreSquareVert.displayName = "SvgSiMoreSquareVert";
const ForwardRef$2v = /*#__PURE__*/React.forwardRef(SvgSiMoreSquareVert);
const Memo$2v = /*#__PURE__*/React.memo(ForwardRef$2v);

const SvgSiMoreVert = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
}));
SvgSiMoreVert.displayName = "SvgSiMoreVert";
const ForwardRef$2u = /*#__PURE__*/React.forwardRef(SvgSiMoreVert);
const Memo$2u = /*#__PURE__*/React.memo(ForwardRef$2u);

const SvgSiMoreVertCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
}));
SvgSiMoreVertCircle.displayName = "SvgSiMoreVertCircle";
const ForwardRef$2t = /*#__PURE__*/React.forwardRef(SvgSiMoreVertCircle);
const Memo$2t = /*#__PURE__*/React.memo(ForwardRef$2t);

const SvgSiMoreVertSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
}));
SvgSiMoreVertSquare.displayName = "SvgSiMoreVertSquare";
const ForwardRef$2s = /*#__PURE__*/React.forwardRef(SvgSiMoreVertSquare);
const Memo$2s = /*#__PURE__*/React.memo(ForwardRef$2s);

const SvgSiMove = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m19 15 3-3m0 0-3-3m3 3H2m0 0 3 3m-3-3 3-3m10-4-3-3m0 0L9 5m3-3v20m0 0 3-3m-3 3-3-3"
}));
SvgSiMove.displayName = "SvgSiMove";
const ForwardRef$2r = /*#__PURE__*/React.forwardRef(SvgSiMove);
const Memo$2r = /*#__PURE__*/React.memo(ForwardRef$2r);

const SvgSiMovie = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M23 9H1v9.6A2.4 2.4 0 0 0 3.4 21h17.2a2.4 2.4 0 0 0 2.4-2.4z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "M14.289 8.763a.75.75 0 1 0 1.422.474zm3.423-5.526a.75.75 0 1 0-1.424-.474zM6.288 8.763a.75.75 0 1 0 1.424.474zm3.424-5.526a.75.75 0 1 0-1.424-.474zM3.4 3.75h17.2v-1.5H3.4zm17.2 0c.911 0 1.65.739 1.65 1.65h1.5a3.15 3.15 0 0 0-3.15-3.15zm1.65 1.65v13.2h1.5V5.4zm0 13.2a1.65 1.65 0 0 1-1.65 1.65v1.5a3.15 3.15 0 0 0 3.15-3.15zm-1.65 1.65H3.4v1.5h17.2zm-17.2 0a1.65 1.65 0 0 1-1.65-1.65H.25a3.15 3.15 0 0 0 3.15 3.15zM1.75 18.6V5.4H.25v13.2zm0-13.2c0-.911.739-1.65 1.65-1.65v-1.5A3.15 3.15 0 0 0 .25 5.4zM1 9.75h22v-1.5H1zm14.712-.513 2-6-1.424-.474-2 6zm-8 0 2-6-1.424-.474-2 6z"
}));
SvgSiMovie.displayName = "SvgSiMovie";
const ForwardRef$2q = /*#__PURE__*/React.forwardRef(SvgSiMovie);
const Memo$2q = /*#__PURE__*/React.memo(ForwardRef$2q);

const SvgSiNorthEast = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m8 16 8-8m0 0v5m0-5h-5"
}));
SvgSiNorthEast.displayName = "SvgSiNorthEast";
const ForwardRef$2p = /*#__PURE__*/React.forwardRef(SvgSiNorthEast);
const Memo$2p = /*#__PURE__*/React.memo(ForwardRef$2p);

const SvgSiNorthEastCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m8 16 8-8m0 0v5m0-5h-5m11 4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiNorthEastCircle.displayName = "SvgSiNorthEastCircle";
const ForwardRef$2o = /*#__PURE__*/React.forwardRef(SvgSiNorthEastCircle);
const Memo$2o = /*#__PURE__*/React.memo(ForwardRef$2o);

const SvgSiNorthEastEscape = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M9 7h-.6C7.07 7 6 8.07 6 9.4v6.2C6 16.93 7.07 18 8.4 18h6.2c1.33 0 2.4-1.07 2.4-2.4V15m-7-1 8-8m0 0h-4m4 0v4"
}));
SvgSiNorthEastEscape.displayName = "SvgSiNorthEastEscape";
const ForwardRef$2n = /*#__PURE__*/React.forwardRef(SvgSiNorthEastEscape);
const Memo$2n = /*#__PURE__*/React.memo(ForwardRef$2n);

const SvgSiNorthEastEscapeAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m10 14 8-8m0 0v4m0-4h-4M9 9h-.6C7.07 9 6 10.07 6 11.4v4.2C6 16.93 7.07 18 8.4 18h4.2c1.33 0 2.4-1.07 2.4-2.4V15"
}));
SvgSiNorthEastEscapeAlt.displayName = "SvgSiNorthEastEscapeAlt";
const ForwardRef$2m = /*#__PURE__*/React.forwardRef(SvgSiNorthEastEscapeAlt);
const Memo$2m = /*#__PURE__*/React.memo(ForwardRef$2m);

const SvgSiNorthEastSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m8 16 8-8m0 0v5m0-5h-5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiNorthEastSquare.displayName = "SvgSiNorthEastSquare";
const ForwardRef$2l = /*#__PURE__*/React.forwardRef(SvgSiNorthEastSquare);
const Memo$2l = /*#__PURE__*/React.memo(ForwardRef$2l);

const SvgSiNorthWest = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M16 16 8 8m0 0v5m0-5h5"
}));
SvgSiNorthWest.displayName = "SvgSiNorthWest";
const ForwardRef$2k = /*#__PURE__*/React.forwardRef(SvgSiNorthWest);
const Memo$2k = /*#__PURE__*/React.memo(ForwardRef$2k);

const SvgSiNorthWestCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M16 16 8 8m0 0v5m0-5h5m9 4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiNorthWestCircle.displayName = "SvgSiNorthWestCircle";
const ForwardRef$2j = /*#__PURE__*/React.forwardRef(SvgSiNorthWestCircle);
const Memo$2j = /*#__PURE__*/React.memo(ForwardRef$2j);

const SvgSiNorthWestEscape = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M15 7h.6C16.93 7 18 8.07 18 9.4v6.2c0 1.33-1.07 2.4-2.4 2.4H9.4C8.07 18 7 16.93 7 15.6V15m7-1L6 6m0 0h4M6 6v4"
}));
SvgSiNorthWestEscape.displayName = "SvgSiNorthWestEscape";
const ForwardRef$2i = /*#__PURE__*/React.forwardRef(SvgSiNorthWestEscape);
const Memo$2i = /*#__PURE__*/React.memo(ForwardRef$2i);

const SvgSiNorthWestEscapeAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M14 14 6 6m0 0v4m0-4h4m5 3h.6c1.33 0 2.4 1.07 2.4 2.4v4.2c0 1.33-1.07 2.4-2.4 2.4h-4.2C10.07 18 9 16.93 9 15.6V15"
}));
SvgSiNorthWestEscapeAlt.displayName = "SvgSiNorthWestEscapeAlt";
const ForwardRef$2h = /*#__PURE__*/React.forwardRef(SvgSiNorthWestEscapeAlt);
const Memo$2h = /*#__PURE__*/React.memo(ForwardRef$2h);

const SvgSiNorthWestSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M16 16 8 8m0 0v5m0-5h5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiNorthWestSquare.displayName = "SvgSiNorthWestSquare";
const ForwardRef$2g = /*#__PURE__*/React.forwardRef(SvgSiNorthWestSquare);
const Memo$2g = /*#__PURE__*/React.memo(ForwardRef$2g);

const SvgSiNortheastSouthwest = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M18.364 5.636 5.636 18.364M18.364 5.636h-5.657m5.657 0v5.657m-12.728 7.07v-5.656m0 5.657h5.657"
}));
SvgSiNortheastSouthwest.displayName = "SvgSiNortheastSouthwest";
const ForwardRef$2f = /*#__PURE__*/React.forwardRef(SvgSiNortheastSouthwest);
const Memo$2f = /*#__PURE__*/React.memo(ForwardRef$2f);

const SvgSiNorthwestSoutheast = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M18.364 18.364 5.636 5.636m12.728 12.728h-5.657m5.657 0v-5.657M5.636 5.636v5.657m0-5.657h5.657"
}));
SvgSiNorthwestSoutheast.displayName = "SvgSiNorthwestSoutheast";
const ForwardRef$2e = /*#__PURE__*/React.forwardRef(SvgSiNorthwestSoutheast);
const Memo$2e = /*#__PURE__*/React.memo(ForwardRef$2e);

const SvgSiNotifications = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6m0 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m8 14H4m10 2a2 2 0 1 1-4 0"
}));
SvgSiNotifications.displayName = "SvgSiNotifications";
const ForwardRef$2d = /*#__PURE__*/React.forwardRef(SvgSiNotifications);
const Memo$2d = /*#__PURE__*/React.memo(ForwardRef$2d);

const SvgSiNotificationsAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M5 18a1 1 0 0 1-.894-1.447L6 12.764V10c0-3.728 2.55-6.86 6-7.748 3.45.888 6 4.02 6 7.748v2.764l1.894 3.789A1 1 0 0 1 19 18z",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M16 18a4 4 0 0 1-8 0m-3 0a1 1 0 0 1-.894-1.447L6 12.763V10c0-3.728 2.55-6.86 6-7.748 3.45.888 6 4.02 6 7.748v2.764l1.894 3.789A1 1 0 0 1 19 18z"
}));
SvgSiNotificationsAlt.displayName = "SvgSiNotificationsAlt";
const ForwardRef$2c = /*#__PURE__*/React.forwardRef(SvgSiNotificationsAlt);
const Memo$2c = /*#__PURE__*/React.memo(ForwardRef$2c);

const SvgSiNotificationsAlt2 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M6.043 18a2.03 2.03 0 0 1-1.718-.95 2.08 2.08 0 0 1-.142-1.972l.545-1.212A13.5 13.5 0 0 0 5.882 9.23l.031-.473A6.2 6.2 0 0 1 7.83 4.666 6.07 6.07 0 0 1 11.998 3a6.07 6.07 0 0 1 4.168 1.666 6.2 6.2 0 0 1 1.917 4.09l.031.474a13.5 13.5 0 0 0 1.154 4.636l.546 1.211a2.08 2.08 0 0 1-.138 1.976 2.03 2.03 0 0 1-1.723.947z",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M15 18a3 3 0 1 1-6 0m-2.957 0a2.03 2.03 0 0 1-1.718-.95 2.08 2.08 0 0 1-.142-1.972l.545-1.212A13.5 13.5 0 0 0 5.882 9.23l.031-.473A6.2 6.2 0 0 1 7.83 4.666 6.07 6.07 0 0 1 11.998 3a6.07 6.07 0 0 1 4.168 1.666 6.2 6.2 0 0 1 1.917 4.09l.031.474a13.5 13.5 0 0 0 1.154 4.636l.546 1.211a2.08 2.08 0 0 1-.138 1.976 2.03 2.03 0 0 1-1.723.947z"
}));
SvgSiNotificationsAlt2.displayName = "SvgSiNotificationsAlt2";
const ForwardRef$2b = /*#__PURE__*/React.forwardRef(SvgSiNotificationsAlt2);
const Memo$2b = /*#__PURE__*/React.memo(ForwardRef$2b);

const SvgSiNotificationsThick = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M3 18h18a1 1 0 0 0 .894-1.447L20 12.763V10a8 8 0 1 0-16 0v2.764l-1.894 3.789A1 1 0 0 0 3 18"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M8 18H3a1 1 0 0 1-.894-1.447L4 12.763V10a8 8 0 1 1 16 0v2.764l1.894 3.789A1 1 0 0 1 21 18h-5m-8 0h8m-8 0a4 4 0 0 0 8 0"
}));
SvgSiNotificationsThick.displayName = "SvgSiNotificationsThick";
const ForwardRef$2a = /*#__PURE__*/React.forwardRef(SvgSiNotificationsThick);
const Memo$2a = /*#__PURE__*/React.memo(ForwardRef$2a);

const SvgSiOctagon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"
}));
SvgSiOctagon.displayName = "SvgSiOctagon";
const ForwardRef$29 = /*#__PURE__*/React.forwardRef(SvgSiOctagon);
const Memo$29 = /*#__PURE__*/React.memo(ForwardRef$29);

const SvgSiOctagonCheck = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m8 13 3 3 5-7M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"
}));
SvgSiOctagonCheck.displayName = "SvgSiOctagonCheck";
const ForwardRef$28 = /*#__PURE__*/React.forwardRef(SvgSiOctagonCheck);
const Memo$28 = /*#__PURE__*/React.memo(ForwardRef$28);

const SvgSiPause = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20.2 3h-4.4a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8m-12 0H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M20.2 3h-4.4a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Zm-12 0H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Z"
}));
SvgSiPause.displayName = "SvgSiPause";
const ForwardRef$27 = /*#__PURE__*/React.forwardRef(SvgSiPause);
const Memo$27 = /*#__PURE__*/React.memo(ForwardRef$27);

const SvgSiPausePresentation = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M14 16V8m-4 8V8M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"
}));
SvgSiPausePresentation.displayName = "SvgSiPausePresentation";
const ForwardRef$26 = /*#__PURE__*/React.forwardRef(SvgSiPausePresentation);
const Memo$26 = /*#__PURE__*/React.memo(ForwardRef$26);

const SvgSiPentagon = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m12 2 10 7.249L18.173 21H5.827L2 9.249z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m12 2 10 7.249L18.173 21H5.827L2 9.249z"
}));
SvgSiPentagon.displayName = "SvgSiPentagon";
const ForwardRef$25 = /*#__PURE__*/React.forwardRef(SvgSiPentagon);
const Memo$25 = /*#__PURE__*/React.memo(ForwardRef$25);

const SvgSiPhone = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27Z"
}));
SvgSiPhone.displayName = "SvgSiPhone";
const ForwardRef$24 = /*#__PURE__*/React.forwardRef(SvgSiPhone);
const Memo$24 = /*#__PURE__*/React.memo(ForwardRef$24);

const SvgSiPhoneAddCall = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "m7.18 10.27-.44-.607-.713.518.625.62zm6.504 6.46-.529.533.571.567.526-.61zm7.316.924.748.052a.8.8 0 0 0-.038-.294zm-14.284-3 .516-.545-.003-.002zM6.252 3l.242-.71-.13-.044-.139.004zM20 7.75a.75.75 0 0 0 0-1.5zm-6-1.5a.75.75 0 0 0 0 1.5zM17.75 4a.75.75 0 0 0-1.5 0zm-1.5 6a.75.75 0 0 0 1.5 0zm-9.598.801 6.503 6.462 1.058-1.064-6.504-6.462zm7.6 6.42a9 9 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021.586-.19 1.125-.178 1.624.129.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38-.97-.598-1.992-.564-2.873-.278-.862.28-1.633.812-2.214 1.297-.588.49-1.023.97-1.214 1.19zm6.748.433a54 54 0 0 1-.748-.053v-.007.01l-.01.067a2 2 0 0 1-.07.286 2.8 2.8 0 0 1-.474.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962.394-.505.61-1.01.726-1.392a4 4 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075 1.617 1.315 3.506 2.476 5.467 2.476zM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602.316-.24.63-.365.864-.43a2 2 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22l-.068.005-.144.016a4 4 0 0 0-.465.098 4.1 4.1 0 0 0-1.372.684C3.14 3.838 2.25 5.288 2.25 7.846zM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855.284.522.237 1.087-.05 1.706-.293.63-.8 1.227-1.267 1.683a9 9 0 0 1-.816.708l-.001.001.442.606c.44.607.441.607.441.606h.001l.002-.002.005-.003.018-.014a6 6 0 0 0 .274-.216c.176-.145.418-.354.683-.614.521-.51 1.175-1.254 1.578-2.123.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29zM20 6.25h-6v1.5h6zM16.25 4v6h1.5V4z"
}));
SvgSiPhoneAddCall.displayName = "SvgSiPhoneAddCall";
const ForwardRef$23 = /*#__PURE__*/React.forwardRef(SvgSiPhoneAddCall);
const Memo$23 = /*#__PURE__*/React.memo(ForwardRef$23);

const SvgSiPhoneCallback = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "m7.18 10.27-.44-.607-.713.518.625.62zm6.504 6.46-.529.533.571.567.526-.61zm7.316.924.748.052a.8.8 0 0 0-.038-.294zm-14.284-3 .516-.545-.003-.002zM6.252 3l.242-.71-.13-.044-.139.004zm8.67 2.586a.75.75 0 0 0-1.5 0zm-.75 4.242h-.75v.75h.75zm4.242.75a.75.75 0 0 0 0-1.5zm1.945-5.876a.75.75 0 0 0-1.06-1.06zm-13.707 6.1 6.503 6.46 1.058-1.063-6.504-6.462zm7.6 6.419a9 9 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021.586-.19 1.125-.178 1.624.129.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38-.97-.598-1.992-.564-2.873-.278-.862.28-1.633.812-2.214 1.297-.588.49-1.023.97-1.214 1.19zm6.748.433a54 54 0 0 1-.748-.053v-.007.01l-.01.067a2 2 0 0 1-.07.286 2.8 2.8 0 0 1-.474.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962.394-.505.61-1.01.726-1.392a4 4 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075 1.617 1.315 3.506 2.476 5.467 2.476zM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602.316-.24.63-.365.864-.43a2 2 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22l-.068.005-.144.016a4 4 0 0 0-.465.098 4.1 4.1 0 0 0-1.372.684C3.14 3.838 2.25 5.288 2.25 7.846zM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855.284.522.237 1.087-.05 1.706-.293.63-.8 1.227-1.267 1.683a9 9 0 0 1-.816.708l-.001.001.442.606c.44.607.441.607.441.606h.001l.002-.002.005-.003.018-.014a6 6 0 0 0 .274-.216c.176-.145.418-.354.683-.614.521-.51 1.175-1.254 1.578-2.123.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29zm7.412 1.876v4.242h1.5V5.586zm.75 4.992h4.242v-1.5h-4.242zm.53-.22 5.657-5.656-1.06-1.06-5.658 5.656z"
}));
SvgSiPhoneCallback.displayName = "SvgSiPhoneCallback";
const ForwardRef$22 = /*#__PURE__*/React.forwardRef(SvgSiPhoneCallback);
const Memo$22 = /*#__PURE__*/React.memo(ForwardRef$22);

const SvgSiPhoneEnabled = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m16.82 10.27-6.504 6.46c-.697-.807-5.11-5.538-7.316.924 0 0 .232 3.346 4.994 3.346 3.367 0 6.851-4.038 9.29-6.346 2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m16.82 10.27-6.504 6.46c-.697-.807-5.11-5.538-7.316.924 0 0 .232 3.346 4.994 3.346 3.367 0 6.851-4.038 9.29-6.346 2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27Z"
}));
SvgSiPhoneEnabled.displayName = "SvgSiPhoneEnabled";
const ForwardRef$21 = /*#__PURE__*/React.forwardRef(SvgSiPhoneEnabled);
const Memo$21 = /*#__PURE__*/React.memo(ForwardRef$21);

const SvgSiPhoneForwarded = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "m7.18 10.27-.44-.607-.713.518.625.62zm6.504 6.46-.529.533.571.567.526-.61zm7.316.924.748.052a.8.8 0 0 0-.038-.294zm-14.284-3 .516-.545-.003-.002zM6.252 3l.242-.71-.13-.044-.139.004zM17.47 9.47a.75.75 0 1 0 1.06 1.06zM21 7l.53.53.53-.53-.53-.53zm-2.47-3.53a.75.75 0 1 0-1.06 1.06zM13 6.25a.75.75 0 0 0 0 1.5zm-6.348 4.551 6.503 6.462 1.058-1.064-6.504-6.462zm7.6 6.42a9 9 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021.586-.19 1.125-.178 1.624.129.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38-.97-.598-1.992-.564-2.873-.278-.862.28-1.633.812-2.214 1.297-.588.49-1.023.97-1.214 1.19zm6.748.433a54 54 0 0 1-.748-.053v-.007.01l-.01.067a2 2 0 0 1-.07.286 2.8 2.8 0 0 1-.474.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962.394-.505.61-1.01.726-1.392a4 4 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075 1.617 1.315 3.506 2.476 5.467 2.476zM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602.316-.24.63-.365.864-.43a2 2 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22l-.068.005-.144.016a4 4 0 0 0-.465.098 4.1 4.1 0 0 0-1.372.684C3.14 3.838 2.25 5.288 2.25 7.846zM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855.284.522.237 1.087-.05 1.706-.293.63-.8 1.227-1.267 1.683a9 9 0 0 1-.816.708l-.001.001.442.606c.44.607.441.607.441.606h.001l.002-.002.005-.003.018-.014a6 6 0 0 0 .274-.216c.176-.145.418-.354.683-.614.521-.51 1.175-1.254 1.578-2.123.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29zm12.52 6.82 3-3-1.06-1.06-3 3zm3-4.06-3-3-1.06 1.06 3 3zM21 6.25h-8v1.5h8z"
}));
SvgSiPhoneForwarded.displayName = "SvgSiPhoneForwarded";
const ForwardRef$20 = /*#__PURE__*/React.forwardRef(SvgSiPhoneForwarded);
const Memo$20 = /*#__PURE__*/React.memo(ForwardRef$20);

const SvgSiPhoneLocked = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "m7.18 10.27-.44-.607-.713.518.625.62zm6.504 6.46-.529.533.571.567.526-.61zm7.316.924.748.052a.8.8 0 0 0-.038-.294zm-14.284-3 .516-.545-.003-.002zM6.252 3l.242-.71-.13-.044-.139.004zm8.498 4a.75.75 0 1 0 1.5 0zm4 0a.75.75 0 1 0 1.5 0zM7.18 10.27l-.528.531 6.503 6.462.529-.532.529-.532-6.504-6.462zm6.504 6.46.568.49a9 9 0 0 1 1.04-1.019c.511-.427 1.112-.825 1.715-1.021.586-.19 1.125-.178 1.624.129.526.324 1.136 1.054 1.66 2.587l.709-.242.71-.242c-.58-1.698-1.35-2.8-2.293-3.38-.97-.598-1.992-.565-2.873-.279-.862.28-1.633.812-2.214 1.297-.588.49-1.023.97-1.214 1.19zm7.316.924a54 54 0 0 1-.748-.053v-.007.01l-.01.067a2 2 0 0 1-.07.286 2.8 2.8 0 0 1-.474.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962.394-.505.61-1.01.726-1.392a4 4 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001zM16.006 21v-.75c-1.407 0-2.944-.858-4.52-2.14-1.57-1.276-2.985-2.8-4.254-4l-.516.544-.515.545c1.17 1.106 2.715 2.755 4.339 4.075 1.617 1.315 3.506 2.476 5.467 2.476zm-9.29-6.346.513-.547C5.191 12.194 3.75 9.842 3.75 7.847h-1.5c0 2.619 1.81 5.343 3.953 7.354zM3 7.846h.75c0-2.173.734-3.146 1.33-3.6.316-.24.63-.366.864-.431a2 2 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22l-.068.005-.144.016a4 4 0 0 0-.465.098 4.1 4.1 0 0 0-1.372.684C3.14 3.838 2.25 5.288 2.25 7.846zM6.252 3l-.243.71c1.784.609 2.56 1.296 2.864 1.855.284.522.237 1.087-.05 1.706-.293.63-.8 1.227-1.267 1.683a9 9 0 0 1-.816.708l-.001.001.442.606c.44.607.441.607.441.606h.001l.002-.002.005-.003.018-.014a6 6 0 0 0 .274-.216c.176-.145.418-.354.683-.614.521-.51 1.175-1.254 1.578-2.123.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29zM14.8 7v.75h5.4v-1.5h-5.4zm5.4 0v.75q.017 0 .035.015a.05.05 0 0 1 .015.035h1.5c0-.854-.696-1.55-1.55-1.55zm.8.8h-.75v2h1.5v-2zm0 2h-.75c0 .246-.204.45-.45.45v1.5c1.074 0 1.95-.876 1.95-1.95zM19.8 11v-.75h-4.6v1.5h4.6zm-4.6 0v-.75a.454.454 0 0 1-.45-.45h-1.5c0 1.074.876 1.95 1.95 1.95zM14 9.8h.75v-2h-1.5v2zm0-2h.75q0-.017.015-.035a.05.05 0 0 1 .035-.015v-1.5c-.854 0-1.55.696-1.55 1.55zM17.5 3v-.75A2.75 2.75 0 0 0 14.75 5h1.5c0-.69.56-1.25 1.25-1.25zm-2 2h-.75v2h1.5V5zm4 2h.75V5h-1.5v2zm0-2h.75a2.75 2.75 0 0 0-2.75-2.75v1.5c.69 0 1.25.56 1.25 1.25z"
}));
SvgSiPhoneLocked.displayName = "SvgSiPhoneLocked";
const ForwardRef$1$ = /*#__PURE__*/React.forwardRef(SvgSiPhoneLocked);
const Memo$1$ = /*#__PURE__*/React.memo(ForwardRef$1$);

const SvgSiPhonePaused = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "m7.18 10.27-.44-.607-.713.518.625.62zm6.504 6.46-.529.533.571.567.526-.61zm7.316.924.748.052a.8.8 0 0 0-.038-.294zm-14.284-3 .516-.545-.003-.002zM6.252 3l.242-.71-.13-.044-.139.004zM19.25 9a.75.75 0 0 0 1.5 0zm1.5-6a.75.75 0 0 0-1.5 0zm-5.5 6a.75.75 0 0 0 1.5 0zm1.5-6a.75.75 0 0 0-1.5 0zM6.652 10.801l6.503 6.462 1.058-1.064-6.504-6.462zm7.6 6.42a9 9 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021.586-.19 1.125-.178 1.624.129.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38-.97-.598-1.992-.564-2.873-.278-.862.28-1.633.812-2.214 1.297-.588.49-1.023.97-1.214 1.19zm6.748.433a54 54 0 0 1-.748-.053v-.007.01l-.01.067a2 2 0 0 1-.07.286 2.8 2.8 0 0 1-.474.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962.394-.505.61-1.01.726-1.392a4 4 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075 1.617 1.315 3.506 2.476 5.467 2.476zM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602.316-.24.63-.365.864-.43a2 2 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22l-.068.005-.144.016a4 4 0 0 0-.465.098 4.1 4.1 0 0 0-1.372.684C3.14 3.838 2.25 5.288 2.25 7.846zM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855.284.522.237 1.087-.05 1.706-.293.63-.8 1.227-1.267 1.683a9 9 0 0 1-.816.708l-.001.001.442.606c.44.607.441.607.441.606h.001l.002-.002.005-.003.018-.014a6 6 0 0 0 .274-.216c.176-.145.418-.354.683-.614.521-.51 1.175-1.254 1.578-2.123.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29zM20.75 9V3h-1.5v6zm-4 0V3h-1.5v6z"
}));
SvgSiPhonePaused.displayName = "SvgSiPhonePaused";
const ForwardRef$1_ = /*#__PURE__*/React.forwardRef(SvgSiPhonePaused);
const Memo$1_ = /*#__PURE__*/React.memo(ForwardRef$1_);

const SvgSiPieChart = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M2 12C2 6.477 6.477 2 12 2v10h10c0 5.523-4.477 10-10 10S2 17.523 2 12"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "M12 12h-.75c0 .414.336.75.75.75zm4.971-8.432a.75.75 0 1 0-1.06-1.06l.53.53zm-5.501 3.38a.75.75 0 0 0 1.06 1.06l-.53-.53zm10.066 1.23a.75.75 0 0 0-1.061-1.062l.53.53zm-5.414 3.292a.75.75 0 0 0 1.06 1.06l-.53-.53zM22 12h.75c0-5.937-4.813-10.75-10.75-10.75v1.5A9.25 9.25 0 0 1 21.25 12zM12 2v-.75C6.063 1.25 1.25 6.063 1.25 12h1.5A9.25 9.25 0 0 1 12 2.75zM2 12h-.75c0 5.937 4.813 10.75 10.75 10.75v-1.5A9.25 9.25 0 0 1 2.75 12zm10 10v.75c5.937 0 10.75-4.813 10.75-10.75h-1.5A9.25 9.25 0 0 1 12 21.25zm-7.071-2.929.53.53L19.601 5.46l-.53-.53-.53-.53L4.399 18.54zM12 12v.75h10v-1.5H12zm0 0h.75V2h-1.5v10zm4.44-8.962-.53-.53-4.44 4.44.53.53.53.53 4.441-4.44zm4.565 4.609-.53-.53-4.353 4.353.53.53.53.53 4.354-4.353z"
}));
SvgSiPieChart.displayName = "SvgSiPieChart";
const ForwardRef$1Z = /*#__PURE__*/React.forwardRef(SvgSiPieChart);
const Memo$1Z = /*#__PURE__*/React.memo(ForwardRef$1Z);

const SvgSiPin = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M6.374 4.809a8.017 8.017 0 0 1 11.258 0c3.15 3.098 3.15 8.056.041 11.113l-5.67 5.578-5.671-5.578a7.74 7.74 0 0 1 0-11.072zM12 7.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M17.632 4.809c3.15 3.098 3.15 8.056.042 11.113L12.003 21.5 6.33 15.922a7.74 7.74 0 0 1 0-11.072l.042-.041a8.017 8.017 0 0 1 11.259 0m0 0q-.063-.063 0 0M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
}));
SvgSiPin.displayName = "SvgSiPin";
const ForwardRef$1Y = /*#__PURE__*/React.forwardRef(SvgSiPin);
const Memo$1Y = /*#__PURE__*/React.memo(ForwardRef$1Y);

const SvgSiPinAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M7.077 4.065a6.905 6.905 0 0 1 9.85 0c2.758 2.773 2.758 7.21.038 9.945L12.002 19 7.04 14.01a7.034 7.034 0 0 1 0-9.907zM12 6.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M17.455 16.986c2.736.487 4.545 1.33 4.545 2.287C22 20.779 17.523 22 12 22S2 20.78 2 19.273c0-.958 1.81-1.8 4.545-2.287m10.383-12.92c2.757 2.772 2.757 7.208.037 9.944L12.002 19 7.04 14.01a7.034 7.034 0 0 1 0-9.908l.037-.036a6.906 6.906 0 0 1 9.85 0m0 0q-.055-.055 0 0M14 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
}));
SvgSiPinAlt1.displayName = "SvgSiPinAlt1";
const ForwardRef$1X = /*#__PURE__*/React.forwardRef(SvgSiPinAlt1);
const Memo$1X = /*#__PURE__*/React.memo(ForwardRef$1X);

const SvgSiPinAlt2 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 12.91A5.455 5.455 0 1 0 12 2a5.455 5.455 0 0 0 0 10.91"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 12.91A5.455 5.455 0 1 0 12 2a5.455 5.455 0 0 0 0 10.91m0 0v5.454m3.636-1.632c3.725.396 6.364 1.384 6.364 2.54C22 20.78 17.523 22 12 22S2 20.78 2 19.273c0-1.157 2.64-2.145 6.364-2.541"
}));
SvgSiPinAlt2.displayName = "SvgSiPinAlt2";
const ForwardRef$1W = /*#__PURE__*/React.forwardRef(SvgSiPinAlt2);
const Memo$1W = /*#__PURE__*/React.memo(ForwardRef$1W);

const SvgSiPlay = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m5 3 16 9-16 9z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m5 3 16 9-16 9z"
}));
SvgSiPlay.displayName = "SvgSiPlay";
const ForwardRef$1V = /*#__PURE__*/React.forwardRef(SvgSiPlay);
const Memo$1V = /*#__PURE__*/React.memo(ForwardRef$1V);

const SvgSiPlayForward = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m4 5 10 7-10 7z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "m21 12 .43.614a.75.75 0 0 0 0-1.228zM11 5l.43-.614A.75.75 0 0 0 10.25 5zm0 14h-.75a.75.75 0 0 0 1.18.614zm.75-4.867a.75.75 0 0 0-1.5 0zM14 12l.43.614a.75.75 0 0 0 0-1.228zM4 5l.43-.614A.75.75 0 0 0 3.25 5zm0 14h-.75a.75.75 0 0 0 1.18.614zm17.43-7.614-10-7-.86 1.228 10 7zm-10 8.228 10-7-.86-1.228-10 7zM10.25 5v4.688h1.5V5zm0 9.133V19h1.5v-4.867zm4.18-2.747-10-7-.86 1.228 10 7zM3.25 5v14h1.5V5zm1.18 14.614 10-7-.86-1.228-10 7z"
}));
SvgSiPlayForward.displayName = "SvgSiPlayForward";
const ForwardRef$1U = /*#__PURE__*/React.forwardRef(SvgSiPlayForward);
const Memo$1U = /*#__PURE__*/React.memo(ForwardRef$1U);

const SvgSiPlayNext = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m3 5 10 7-10 7z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m3 5 10 7-10 7zm17.2 0h-2.4a.8.8 0 0 0-.8.8v12.4a.8.8 0 0 0 .8.8h2.4a.8.8 0 0 0 .8-.8V5.8a.8.8 0 0 0-.8-.8Z"
}));
SvgSiPlayNext.displayName = "SvgSiPlayNext";
const ForwardRef$1T = /*#__PURE__*/React.forwardRef(SvgSiPlayNext);
const Memo$1T = /*#__PURE__*/React.memo(ForwardRef$1T);

const SvgSiPlayPrevious = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m21 5-10 7 10 7z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m21 5-10 7 10 7zM3.8 5h2.4a.8.8 0 0 1 .8.8v12.4a.8.8 0 0 1-.8.8H3.8a.8.8 0 0 1-.8-.8V5.8a.8.8 0 0 1 .8-.8Z"
}));
SvgSiPlayPrevious.displayName = "SvgSiPlayPrevious";
const ForwardRef$1S = /*#__PURE__*/React.forwardRef(SvgSiPlayPrevious);
const Memo$1S = /*#__PURE__*/React.memo(ForwardRef$1S);

const SvgSiPlayRewind = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m20 5-10 7 10 7z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "m3 12-.43-.614a.75.75 0 0 0 0 1.228zm10-7h.75a.75.75 0 0 0-1.18-.614zm0 14-.43.614A.75.75 0 0 0 13.75 19zm.75-4.867a.75.75 0 0 0-1.5 0zM10 12l-.43-.614a.75.75 0 0 0 0 1.228zm10-7h.75a.75.75 0 0 0-1.18-.614zm0 14-.43.614A.75.75 0 0 0 20.75 19zM3.43 12.614l10-7-.86-1.228-10 7zm10 5.772-10-7-.86 1.228 10 7zM12.25 5v4.688h1.5V5zm0 9.133V19h1.5v-4.867zm-1.82-1.519 10-7-.86-1.228-10 7zM19.25 5v14h1.5V5zm1.18 13.386-10-7-.86 1.228 10 7z"
}));
SvgSiPlayRewind.displayName = "SvgSiPlayRewind";
const ForwardRef$1R = /*#__PURE__*/React.forwardRef(SvgSiPlayRewind);
const Memo$1R = /*#__PURE__*/React.memo(ForwardRef$1R);

const SvgSiProjects = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M10 21V3m-7 7h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiProjects.displayName = "SvgSiProjects";
const ForwardRef$1Q = /*#__PURE__*/React.forwardRef(SvgSiProjects);
const Memo$1Q = /*#__PURE__*/React.memo(ForwardRef$1Q);

const SvgSiProjectsAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 12V6m-5 8V6m10 10V6M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiProjectsAlt.displayName = "SvgSiProjectsAlt";
const ForwardRef$1P = /*#__PURE__*/React.forwardRef(SvgSiProjectsAlt);
const Memo$1P = /*#__PURE__*/React.memo(ForwardRef$1P);

const SvgSiPullRequest = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18 16v-5.6A4.4 4.4 0 0 0 13.6 6H11m7 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4M11 6l2-2m-2 2 2 2m-7 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
}));
SvgSiPullRequest.displayName = "SvgSiPullRequest";
const ForwardRef$1O = /*#__PURE__*/React.forwardRef(SvgSiPullRequest);
const Memo$1O = /*#__PURE__*/React.memo(ForwardRef$1O);

const SvgSiQuote = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M10.99 9.449c.178 3.09-1.998 7.444-6.88 9.551L3 17.08c1.997-1.123 3.507-2.95 4.306-5.15-2.886-.234-3.729-2.013-3.729-3.464 0-1.967 1.51-3.512 3.374-3.465 1.775-.047 3.817 1.311 4.039 4.448m10 0c.178 3.09-1.997 7.444-6.88 9.551L13 17.08c1.998-1.123 3.507-2.95 4.306-5.15-2.886-.234-3.729-2.013-3.729-3.464 0-1.967 1.51-3.512 3.374-3.465 1.775-.047 3.817 1.311 4.039 4.448"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M10.99 9.449c.178 3.09-1.998 7.444-6.88 9.551L3 17.08c1.997-1.123 3.507-2.95 4.306-5.15-2.886-.234-3.729-2.013-3.729-3.464 0-1.967 1.51-3.512 3.374-3.465 1.775-.047 3.817 1.311 4.039 4.448m10 0c.178 3.09-1.997 7.444-6.88 9.551L13 17.08c1.998-1.123 3.507-2.95 4.306-5.15-2.886-.234-3.729-2.013-3.729-3.464 0-1.967 1.51-3.512 3.374-3.465 1.775-.047 3.817 1.311 4.039 4.448"
}));
SvgSiQuote.displayName = "SvgSiQuote";
const ForwardRef$1N = /*#__PURE__*/React.forwardRef(SvgSiQuote);
const Memo$1N = /*#__PURE__*/React.memo(ForwardRef$1N);

const SvgSiRecord = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
}));
SvgSiRecord.displayName = "SvgSiRecord";
const ForwardRef$1M = /*#__PURE__*/React.forwardRef(SvgSiRecord);
const Memo$1M = /*#__PURE__*/React.memo(ForwardRef$1M);

const SvgSiReleaseNotes = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M4 3.4v17.2A2.4 2.4 0 0 0 6.4 23h11.2a2.4 2.4 0 0 0 2.4-2.4V3.4A2.4 2.4 0 0 0 17.6 1H6.4A2.4 2.4 0 0 0 4 3.4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m9 8 2 2 4-4M9 16l2 2 4-4M4 20.6V3.4A2.4 2.4 0 0 1 6.4 1h11.2A2.4 2.4 0 0 1 20 3.4v17.2a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 20.6"
}));
SvgSiReleaseNotes.displayName = "SvgSiReleaseNotes";
const ForwardRef$1L = /*#__PURE__*/React.forwardRef(SvgSiReleaseNotes);
const Memo$1L = /*#__PURE__*/React.memo(ForwardRef$1L);

const SvgSiRemove = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M6 12h12"
}));
SvgSiRemove.displayName = "SvgSiRemove";
const ForwardRef$1K = /*#__PURE__*/React.forwardRef(SvgSiRemove);
const Memo$1K = /*#__PURE__*/React.memo(ForwardRef$1K);

const SvgSiRemoveAlarm = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 13h8m2-10 3 3M3 6l3-3m14 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
}));
SvgSiRemoveAlarm.displayName = "SvgSiRemoveAlarm";
const ForwardRef$1J = /*#__PURE__*/React.forwardRef(SvgSiRemoveAlarm);
const Memo$1J = /*#__PURE__*/React.memo(ForwardRef$1J);

const SvgSiRemoveCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 12h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiRemoveCircle.displayName = "SvgSiRemoveCircle";
const ForwardRef$1I = /*#__PURE__*/React.forwardRef(SvgSiRemoveCircle);
const Memo$1I = /*#__PURE__*/React.memo(ForwardRef$1I);

const SvgSiRemoveFromLibrary = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M10 11h8m2 11H8.4C5.42 22 3 19.58 3 16.6V5m5.4-2h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3"
}));
SvgSiRemoveFromLibrary.displayName = "SvgSiRemoveFromLibrary";
const ForwardRef$1H = /*#__PURE__*/React.forwardRef(SvgSiRemoveFromLibrary);
const Memo$1H = /*#__PURE__*/React.memo(ForwardRef$1H);

const SvgSiRemoveSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 12h8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiRemoveSquare.displayName = "SvgSiRemoveSquare";
const ForwardRef$1G = /*#__PURE__*/React.forwardRef(SvgSiRemoveSquare);
const Memo$1G = /*#__PURE__*/React.memo(ForwardRef$1G);

const SvgSiReorder = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M4 12h16M4 15h16M4 18h16M4 9h16M4 6h16"
}));
SvgSiReorder.displayName = "SvgSiReorder";
const ForwardRef$1F = /*#__PURE__*/React.forwardRef(SvgSiReorder);
const Memo$1F = /*#__PURE__*/React.memo(ForwardRef$1F);

const SvgSiReorderAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M4 12h16M4 16h16M4 20h16M4 8h16M4 4h16"
}));
SvgSiReorderAlt.displayName = "SvgSiReorderAlt";
const ForwardRef$1E = /*#__PURE__*/React.forwardRef(SvgSiReorderAlt);
const Memo$1E = /*#__PURE__*/React.memo(ForwardRef$1E);

const SvgSiRightTwoHeaded = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M4 12h16m0 0-4-4m4 4-4 4m-5-8 4 4-4 4"
}));
SvgSiRightTwoHeaded.displayName = "SvgSiRightTwoHeaded";
const ForwardRef$1D = /*#__PURE__*/React.forwardRef(SvgSiRightTwoHeaded);
const Memo$1D = /*#__PURE__*/React.memo(ForwardRef$1D);

const SvgSiRocket = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M9.198 6.59c0-2.336 1.563-4.549 2.805-4.59 1.242.041 2.802 2.254 2.802 4.59v1.148c0 2.54 3.346 4.221 4.187 5.328.378.475.372 1.913.401 2.541a.38.38 0 0 1-.39.393h-3.906l-.684.819a.4.4 0 0 1-.337.181H9.927a.4.4 0 0 1-.337-.181L8.906 16H5a.38.38 0 0 1-.39-.393c.029-.628.023-2.066.4-2.541.842-1.107 4.188-2.787 4.188-5.328z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 22s1-1.425 1-2.137c0-.713-.533-.863-1-.863s-1 .15-1 .863C11 20.575 12 22 12 22ZM9.198 6.59c0-2.336 1.563-4.549 2.805-4.59 1.242.041 2.802 2.254 2.802 4.59v1.148c0 2.54 3.346 4.221 4.187 5.328.378.475.372 1.913.401 2.541a.38.38 0 0 1-.39.393h-3.906l-.684.819a.4.4 0 0 1-.337.181H9.927a.4.4 0 0 1-.337-.181L8.906 16H5a.38.38 0 0 1-.39-.393c.029-.628.023-2.066.4-2.541.842-1.107 4.188-2.787 4.188-5.328z"
}));
SvgSiRocket.displayName = "SvgSiRocket";
const ForwardRef$1C = /*#__PURE__*/React.forwardRef(SvgSiRocket);
const Memo$1C = /*#__PURE__*/React.memo(ForwardRef$1C);

const SvgSiRupee = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7 4h3.75c1.393 0 2.728.474 3.713 1.318S16 7.307 16 8.5s-.553 2.338-1.537 3.182c-.985.844-2.32 1.318-3.712 1.318H7l8.2 7M7 8.5h11M11 4h7"
}));
SvgSiRupee.displayName = "SvgSiRupee";
const ForwardRef$1B = /*#__PURE__*/React.forwardRef(SvgSiRupee);
const Memo$1B = /*#__PURE__*/React.memo(ForwardRef$1B);

const SvgSiSearch = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m21 21-4-4m2-6a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
}));
SvgSiSearch.displayName = "SvgSiSearch";
const ForwardRef$1A = /*#__PURE__*/React.forwardRef(SvgSiSearch);
const Memo$1A = /*#__PURE__*/React.memo(ForwardRef$1A);

const SvgSiSearchAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M9 15A6 6 0 1 0 9 3a6 6 0 0 0 0 12"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m21 21-7.5-7.5M15 9A6 6 0 1 1 3 9a6 6 0 0 1 12 0"
}));
SvgSiSearchAlt.displayName = "SvgSiSearchAlt";
const ForwardRef$1z = /*#__PURE__*/React.forwardRef(SvgSiSearchAlt);
const Memo$1z = /*#__PURE__*/React.memo(ForwardRef$1z);

const SvgSiSegment = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 12h8M4 8h16m-8 8h8"
}));
SvgSiSegment.displayName = "SvgSiSegment";
const ForwardRef$1y = /*#__PURE__*/React.forwardRef(SvgSiSegment);
const Memo$1y = /*#__PURE__*/React.memo(ForwardRef$1y);

const SvgSiSettings = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
  fill: "currentColor",
  clipPath: "url(#a)"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M18.71 10H21v-.02c1.1 0 2 .9 2 2s-.9 2-2 2h-2.29c-.07.23-.15.46-.24.68-.1.22-.2.44-.31.65l1.62 1.62c.78.78.78 2.05 0 2.83s-2.05.78-2.83 0l-1.62-1.62c-.21.12-.43.22-.65.31s-.45.17-.68.24v2.29c0 1.1-.9 2-2 2s-2-.9-2-2v-2.29c-.23-.07-.46-.15-.68-.24-.22-.1-.44-.2-.65-.31l-1.62 1.62c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83l1.62-1.62c-.12-.21-.22-.43-.31-.65s-.17-.45-.24-.68H3c-1.1 0-2-.9-2-2s.9-2 2-2h2.33a7.5 7.5 0 0 1 .54-1.32L4.25 7.04c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0L8.7 5.83c.21-.11.42-.21.64-.3h.01c.22-.09.44-.17.67-.24V3c0-1.1.9-2 2-2s2 .9 2 2v2.31c.23.07.45.15.67.24h.01c.22.09.43.19.64.3l1.62-1.62c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83l-1.62 1.62a7.5 7.5 0 0 1 .54 1.32M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  d: "M21 10v.75a.75.75 0 0 0 .75-.75zm-2.29 0-.718.218a.75.75 0 0 0 .718.532zm-.54-1.32-.53-.53a.75.75 0 0 0-.134.878zm1.62-1.62.53.53zm-2.83-2.83-.53-.53zm-1.62 1.62-.348.664a.75.75 0 0 0 .878-.134zm-.64-.3.284-.694A.8.8 0 0 0 14.7 4.8zm-.01 0-.284.694a.8.8 0 0 0 .284.056zm-.67-.24h-.75c0 .33.216.621.532.718zm-4-.02.218.718a.75.75 0 0 0 .532-.718zm-.67.24v.75a.8.8 0 0 0 .284-.056zm-.01 0v-.75a.8.8 0 0 0-.284.056zm-.64.3-.53.53a.75.75 0 0 0 .878.134zM5.87 8.66l.664.348A.75.75 0 0 0 6.4 8.13zm-.54 1.32v.75a.75.75 0 0 0 .718-.532zm-.04 4 .718-.218a.75.75 0 0 0-.718-.532zm.55 1.33.53.53a.75.75 0 0 0 .121-.902zm-1.62 1.62-.53-.53zm2.83 2.83.53.53zm1.62-1.62.348-.664a.75.75 0 0 0-.878.134zm.65.31-.31.683.026.011zm.68.24h.75a.75.75 0 0 0-.532-.718zm4 0-.218-.718a.75.75 0 0 0-.532.718zm1.33-.55.53-.53a.75.75 0 0 0-.902-.121zm4.45-1.21.53-.53zm-1.62-1.62-.664-.348a.75.75 0 0 0 .134.878zm.31-.65.683.31.011-.026zm.24-.68v-.75a.75.75 0 0 0-.718.532zm2.29-4v-.75a.75.75 0 0 0-.75.75zm0-.73h-2.29v1.5H21zm-1.573.532a9 9 0 0 0-.263-.746l-1.388.568c.08.195.152.403.216.614zm-.263-.746a8 8 0 0 0-.33-.704l-1.328.696c.1.193.19.382.27.576zm-.464.174 1.62-1.62-1.06-1.06-1.62 1.62zm1.62-1.62a2.754 2.754 0 0 0 0-3.89l-1.06 1.06a1.254 1.254 0 0 1 0 1.77zm0-3.89a2.754 2.754 0 0 0-3.89 0l1.06 1.06a1.254 1.254 0 0 1 1.77 0zm-3.89 0-1.62 1.62 1.06 1.06 1.62-1.62zm-.742 1.486a8 8 0 0 0-.704-.33l-.568 1.388c.194.08.383.17.576.27zm-.988.364V4.8h-.01v1.5h.01zm.274-.694a8 8 0 0 0-.736-.264l-.436 1.436c.204.062.402.134.604.216zm-.204.454V3h-1.5v2.31zm0-2.31A2.756 2.756 0 0 0 12.02.25v1.5c.686 0 1.25.564 1.25 1.25zM12.02.25A2.756 2.756 0 0 0 9.27 3h1.5c0-.686.564-1.25 1.25-1.25zM9.27 3v2.29h1.5V3zm.532 1.572a8 8 0 0 0-.736.264l.568 1.388c.202-.082.4-.154.604-.216zm-.452.958v-.75h-.01v1.5h.01zm-.294-.694c-.246.1-.477.21-.704.33l.696 1.328c.193-.1.382-.19.576-.27zm.174.464L7.61 3.68 6.55 4.74l1.62 1.62zM7.61 3.68a2.754 2.754 0 0 0-3.89 0l1.06 1.06a1.254 1.254 0 0 1 1.77 0zm-3.89 0a2.754 2.754 0 0 0 0 3.89l1.06-1.06a1.254 1.254 0 0 1 0-1.77zm0 3.89 1.62 1.62L6.4 8.13 4.78 6.51zm1.486.742c-.12.227-.23.458-.33.704l1.388.568c.08-.194.17-.383.27-.576zm-.33.704c-.1.245-.188.497-.264.746l1.436.436c.064-.211.136-.419.216-.614zm.454.214H3v1.5h2.33zM3 9.23a2.756 2.756 0 0 0-2.75 2.75h1.5c0-.686.564-1.25 1.25-1.25zM.25 11.98A2.756 2.756 0 0 0 3 14.73v-1.5c-.686 0-1.25-.564-1.25-1.25zM3 14.73h2.29v-1.5H3zm1.572-.532c.076.249.164.501.264.746l1.388-.568a7 7 0 0 1-.216-.614zm.264.746c.097.237.21.49.353.738l1.302-.744a5 5 0 0 1-.267-.562zm.474-.164L3.69 16.4l1.06 1.06 1.62-1.62zM3.69 16.4a2.754 2.754 0 0 0 0 3.89l1.06-1.06a1.254 1.254 0 0 1 0-1.77zm0 3.89a2.754 2.754 0 0 0 3.89 0l-1.06-1.06a1.254 1.254 0 0 1-1.77 0zm3.89 0 1.62-1.62-1.06-1.06-1.62 1.62zm.742-1.486c.232.122.471.23.688.329l.62-1.366a12 12 0 0 1-.612-.291zm.714.34c.245.1.497.188.746.264l.436-1.436a7 7 0 0 1-.614-.216zm.214-.454v2.29h1.5v-2.29zm0 2.29A2.756 2.756 0 0 0 12 23.73v-1.5c-.686 0-1.25-.564-1.25-1.25zM12 23.73a2.756 2.756 0 0 0 2.75-2.75h-1.5c0 .686-.564 1.25-1.25 1.25zm2.75-2.75v-2.29h-1.5v2.29zm-.532-1.573c.249-.075.501-.163.746-.263l-.568-1.388c-.195.08-.403.152-.614.216zm.746-.263c.237-.097.49-.21.738-.353l-.744-1.302a5 5 0 0 1-.562.267zm-.164-.474 1.62 1.62 1.06-1.06-1.62-1.62zm1.62 1.62a2.754 2.754 0 0 0 3.89 0l-1.06-1.06a1.254 1.254 0 0 1-1.77 0zm3.89 0a2.754 2.754 0 0 0 0-3.89l-1.06 1.06a1.254 1.254 0 0 1 0 1.77zm0-3.89-1.62-1.62-1.06 1.06 1.62 1.62zm-1.486-.742c.122-.232.23-.471.329-.688l-1.366-.62a12 12 0 0 1-.291.612zm.34-.714c.1-.245.188-.497.263-.746l-1.434-.436a7 7 0 0 1-.217.614zm-.454-.214H21v-1.5h-2.29zm2.29 0a2.756 2.756 0 0 0 2.75-2.75h-1.5c0 .686-.564 1.25-1.25 1.25zm2.75-2.75A2.756 2.756 0 0 0 21 9.23v1.5c.686 0 1.25.564 1.25 1.25zm-3.5-2V10h1.5v-.02zm-5 2.02A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25z"
})), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "#fff",
  d: "M0 0h24v24H0z"
}))));
SvgSiSettings.displayName = "SvgSiSettings";
const ForwardRef$1x = /*#__PURE__*/React.forwardRef(SvgSiSettings);
const Memo$1x = /*#__PURE__*/React.memo(ForwardRef$1x);

const SvgSiSettingsAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
  fill: "currentColor",
  clipPath: "url(#a)"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M18.71 10h2.69c.88 0 1.6.72 1.6 1.6v.8c0 .88-.72 1.6-1.6 1.6h-2.69c-.14.47-.32.91-.55 1.33l1.9 1.9c.62.62.62 1.64 0 2.26l-.57.57c-.62.62-1.64.62-2.26 0l-1.9-1.9c-.42.23-.86.41-1.33.55v2.69c0 .88-.72 1.6-1.6 1.6h-.8c-.88 0-1.6-.72-1.6-1.6v-2.69a6.8 6.8 0 0 1-1.33-.55l-1.9 1.9c-.62.62-1.64.62-2.26 0l-.57-.57c-.62-.62-.62-1.64 0-2.26l1.9-1.9A6.8 6.8 0 0 1 5.29 14H2.6c-.88 0-1.6-.72-1.6-1.6v-.8c0-.88.72-1.6 1.6-1.6h2.69c.14-.47.32-.91.55-1.33l-1.9-1.9c-.62-.62-.62-1.64 0-2.26l.57-.57c.62-.62 1.64-.62 2.26 0l1.9 1.9c.42-.23.86-.41 1.33-.55V2.6c0-.88.72-1.6 1.6-1.6h.8c.88 0 1.6.72 1.6 1.6v2.69c.47.14.91.32 1.33.55l1.9-1.9c.62-.62 1.64-.62 2.26 0l.57.57c.62.62.62 1.64 0 2.26l-1.9 1.9c.23.42.41.86.55 1.33M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  d: "m18.71 10-.719.214a.75.75 0 0 0 .719.536zm-.55-1.33-.53-.53a.75.75 0 0 0-.128.89zm1.9-1.9-.53-.53zm0-2.26-.53.53zm-.57-.57.53-.53zm-2.26 0-.53-.53zm-1.9 1.9-.36.658a.75.75 0 0 0 .89-.128zM14 5.29h-.75a.75.75 0 0 0 .536.719zm-4 0 .214.719a.75.75 0 0 0 .536-.719zm-1.33.55-.53.53a.75.75 0 0 0 .89.128zM5.84 8.67l.658.36a.75.75 0 0 0-.128-.89zM5.29 10v.75a.75.75 0 0 0 .719-.536zm0 4 .719-.214a.75.75 0 0 0-.719-.536zm.55 1.33.53.53a.75.75 0 0 0 .128-.89zm-1.9 1.9-.53-.53zm0 2.26-.53.53zm.57.57.53-.53zm2.26 0-.53-.53zm1.9-1.9.36-.658a.75.75 0 0 0-.89.128zm1.33.55h.75a.75.75 0 0 0-.536-.719zm4 0-.214-.719a.75.75 0 0 0-.536.719zm1.33-.55.53-.53a.75.75 0 0 0-.89-.128zm2.83-2.83-.658-.36a.75.75 0 0 0 .128.89zm.55-1.33v-.75a.75.75 0 0 0-.719.536zm2.69-4.75h-2.69v1.5h2.69zm-1.971.536a7.5 7.5 0 0 0-.611-1.476l-1.316.72c.203.37.363.76.49 1.184zM18.69 9.2l1.9-1.9-1.06-1.06-1.9 1.9zm1.9-1.9a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2zm0-3.32-.57-.57-1.06 1.06.57.57zm-.57-.57a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0zm-3.32 0-1.9 1.9 1.06 1.06 1.9-1.9zm-1.01 1.772a7.5 7.5 0 0 0-1.476-.61l-.428 1.437a6 6 0 0 1 1.184.489zm-.94.108V2.6h-1.5v2.69zm0-2.69A2.355 2.355 0 0 0 12.4.25v1.5c.466 0 .85.384.85.85zM12.4.25h-.8v1.5h.8zm-.8 0A2.355 2.355 0 0 0 9.25 2.6h1.5c0-.466.384-.85.85-.85zM9.25 2.6v2.69h1.5V2.6zm.536 1.971a7.5 7.5 0 0 0-1.476.611l.72 1.316a6 6 0 0 1 1.184-.49zM9.2 5.31l-1.9-1.9-1.06 1.06 1.9 1.9zm-1.9-1.9a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0zm-3.32 0-.57.57 1.06 1.06.57-.57zm-.57.57a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2zm0 3.32 1.9 1.9 1.06-1.06-1.9-1.9zm1.772 1.01a7.5 7.5 0 0 0-.61 1.476l1.437.428a6 6 0 0 1 .489-1.184zm.108.94H2.6v1.5h2.69zm-2.69 0A2.355 2.355 0 0 0 .25 11.6h1.5c0-.466.384-.85.85-.85zM.25 11.6v.8h1.5v-.8zm0 .8a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85zm2.35 2.35h2.69v-1.5H2.6zm1.971-.536a7.5 7.5 0 0 0 .611 1.476l1.316-.72a6 6 0 0 1-.49-1.184zm.739.586-1.9 1.9 1.06 1.06 1.9-1.9zm-1.9 1.9a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2zm0 3.32.57.57 1.06-1.06-.57-.57zm.57.57a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0zm3.32 0 1.9-1.9-1.06-1.06-1.9 1.9zm1.01-1.772a7.5 7.5 0 0 0 1.476.61l.428-1.437a6 6 0 0 1-1.184-.489zm.94-.108v2.69h1.5v-2.69zm0 2.69a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85zm2.35 2.35h.8v-1.5h-.8zm.8 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85zm2.35-2.35v-2.69h-1.5v2.69zm-.536-1.971a7.5 7.5 0 0 0 1.476-.611l-.72-1.316c-.37.203-.76.363-1.184.49zm.586-.739 1.9 1.9 1.06-1.06-1.9-1.9zm1.9 1.9a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0zm3.32 0 .57-.57-1.06-1.06-.57.57zm.57-.57a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2zm0-3.32-1.9-1.9-1.06 1.06 1.9 1.9zm-1.772-1.01a7.5 7.5 0 0 0 .61-1.476l-1.437-.428a6 6 0 0 1-.489 1.184zm-.108-.94h2.69v-1.5h-2.69zm2.69 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85zm2.35-2.35v-.8h-1.5v.8zm0-.8a2.355 2.355 0 0 0-2.35-2.35v1.5c.466 0 .85.384.85.85zm-8.5.4A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25z"
})), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "#fff",
  d: "M0 0h24v24H0z"
}))));
SvgSiSettingsAlt.displayName = "SvgSiSettingsAlt";
const ForwardRef$1w = /*#__PURE__*/React.forwardRef(SvgSiSettingsAlt);
const Memo$1w = /*#__PURE__*/React.memo(ForwardRef$1w);

const SvgSiSettingsAlt2 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "m13.487 2 .144 1.722A1.81 1.81 0 0 0 14.77 5.27h.021a1.85 1.85 0 0 0 1.922-.31l1.305-1.139 2.117 2.122-1.139 1.305a1.85 1.85 0 0 0-.31 1.922v.021a1.85 1.85 0 0 0 1.575 1.14l1.739.125v2.979l-1.74.13a1.85 1.85 0 0 0-1.604 1.17v.022a1.85 1.85 0 0 0 .309 1.922l1.14 1.303L18 20.091l-1.305-1.135a1.85 1.85 0 0 0-1.922-.304h-.021a1.87 1.87 0 0 0-1.139 1.587L13.487 22H10.51l-.153-1.787a1.89 1.89 0 0 0-1.138-1.605h-.023a1.85 1.85 0 0 0-1.922.309l-1.303 1.14-2.105-2.105 1.139-1.305a1.85 1.85 0 0 0 .31-1.92v-.023a1.85 1.85 0 0 0-1.575-1.139L2 13.435v-2.979l1.74-.126a1.85 1.85 0 0 0 1.58-1.19 1.85 1.85 0 0 0-.308-1.921L3.874 5.913l2.144-2.087L7.32 4.965a1.86 1.86 0 0 0 1.922.308 1.83 1.83 0 0 0 1.14-1.56L10.509 2zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M22 13.435v-2.979l-1.74-.126a1.85 1.85 0 0 1-1.573-1.139V9.17a1.85 1.85 0 0 1 .309-1.922l1.139-1.305-2.118-2.121-1.304 1.139a1.85 1.85 0 0 1-1.922.309h-.021a1.81 1.81 0 0 1-1.14-1.548L13.487 2h-2.978l-.126 1.713a1.83 1.83 0 0 1-1.14 1.56 1.85 1.85 0 0 1-1.921-.308L6.017 3.826 3.874 5.913l1.139 1.304a1.85 1.85 0 0 1 .309 1.922 1.85 1.85 0 0 1-1.583 1.191L2 10.457v2.978l1.74.13a1.85 1.85 0 0 1 1.573 1.14v.021a1.85 1.85 0 0 1-.309 1.922l-1.139 1.304 2.105 2.104 1.304-1.139a1.85 1.85 0 0 1 1.922-.308h.021a1.89 1.89 0 0 1 1.14 1.604L10.509 22h2.978l.126-1.76a1.87 1.87 0 0 1 1.14-1.588h.02a1.85 1.85 0 0 1 1.923.304L18 20.092l2.104-2.108-1.139-1.305a1.85 1.85 0 0 1-.308-1.921v-.022a1.85 1.85 0 0 1 1.604-1.17z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
}));
SvgSiSettingsAlt2.displayName = "SvgSiSettingsAlt2";
const ForwardRef$1v = /*#__PURE__*/React.forwardRef(SvgSiSettingsAlt2);
const Memo$1v = /*#__PURE__*/React.memo(ForwardRef$1v);

const SvgSiSettingsApplications = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
  fill: "currentColor",
  clipPath: "url(#a)"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M16.75 10.5h1.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-1.75c-.09.28-.2.55-.33.8l1.24 1.24c.59.58.59 1.53 0 2.12-.58.59-1.53.59-2.12 0l-1.24-1.24c-.26.13-.52.24-.8.33v1.75c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-1.75c-.28-.09-.55-.2-.8-.33l-1.24 1.24c-.58.59-1.53.59-2.12 0a1.49 1.49 0 0 1 0-2.12l1.24-1.24c-.13-.26-.24-.52-.33-.8H5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h1.75c.09-.28.2-.55.33-.8L6.34 8.46c-.59-.58-.58-1.53 0-2.12a1.49 1.49 0 0 1 2.12 0L9.7 7.58c.26-.13.52-.24.8-.33V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1.75c.28.09.55.2.8.33l1.24-1.24c.58-.59 1.53-.58 2.12 0s.59 1.53 0 2.12L16.42 9.7c.13.26.24.52.33.8M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  d: "m16.75 10.5-.714.23c.1.31.388.52.714.52zm-.33-.8-.53-.53a.75.75 0 0 0-.14.865zm-.88-3.36.53.53.005-.004zM14.3 7.58l-.346.665a.75.75 0 0 0 .876-.135zm-.8-.33h-.75c0 .326.21.614.52.714zm-3 0 .23.714a.75.75 0 0 0 .52-.714zm-.8.33-.53.53a.75.75 0 0 0 .865.14zm-3.36.88.53-.53-.004-.005zM7.58 9.7l.665.346a.75.75 0 0 0-.135-.876zm-.33.8v.75a.75.75 0 0 0 .714-.52zm0 3 .714-.23a.75.75 0 0 0-.714-.52zm.33.8.53.53a.75.75 0 0 0 .14-.865zm-1.24 3.36.53-.53-.004-.005zm2.12 0-.53-.53-.005.004zm1.24-1.24.346-.665a.75.75 0 0 0-.876.135zm.8.33h.75a.75.75 0 0 0-.52-.714zm3 0-.23-.714a.75.75 0 0 0-.52.714zm.8-.33.53-.53a.75.75 0 0 0-.865-.14zm3.36 1.24-.53-.53-.005.004zm0-2.12-.53.53.004.005zm-1.24-1.24-.665-.346a.75.75 0 0 0 .135.876zm.33-.8v-.75a.75.75 0 0 0-.714.52zM3.933 1.75h16.134V.25H3.933zm16.134 0c1.206 0 2.183.978 2.183 2.183h1.5A3.683 3.683 0 0 0 20.067.25zm2.183 2.183v16.134h1.5V3.933zm0 16.134a2.183 2.183 0 0 1-2.183 2.183v1.5a3.683 3.683 0 0 0 3.683-3.683zm-2.183 2.183H3.933v1.5h16.134zm-16.134 0a2.183 2.183 0 0 1-2.183-2.183H.25a3.683 3.683 0 0 0 3.683 3.683zM1.75 20.067V3.933H.25v16.134zm0-16.134c0-1.205.978-2.183 2.183-2.183V.25A3.683 3.683 0 0 0 .25 3.933zM18.5 9.75h-1.75v1.5h1.75zm-1.036.52a6.4 6.4 0 0 0-.373-.905l-1.342.67c.116.232.21.457.287.694zm-.514-.04 1.24-1.24-1.06-1.06-1.24 1.24zm1.24-1.24a2.24 2.24 0 0 0-.004-3.185l-1.052 1.07a.74.74 0 0 1-.004 1.055zm-.004-3.185c-.874-.858-2.299-.888-3.18.01l1.069 1.05a.75.75 0 0 1 1.06.01zm-3.176.005-1.24 1.24 1.06 1.06 1.24-1.24zm-.364 1.105a6 6 0 0 0-.917-.379l-.458 1.428c.244.079.475.173.683.281zm-.396.335V5.5h-1.5v1.75zm0-1.75A2.25 2.25 0 0 0 12 3.25v1.5c.416 0 .75.334.75.75zM12 3.25A2.25 2.25 0 0 0 9.75 5.5h1.5c0-.416.334-.75.75-.75zM9.75 5.5v1.75h1.5V5.5zm.52 1.036a6.4 6.4 0 0 0-.905.373l.67 1.342a5 5 0 0 1 .694-.287zm-.04.514L8.99 5.81 7.93 6.87l1.24 1.24zM8.99 5.81a2.24 2.24 0 0 0-3.185.004l1.07 1.052a.74.74 0 0 1 1.055.004zm-3.185.004c-.858.874-.888 2.299.01 3.18l1.05-1.069a.75.75 0 0 1 .01-1.06zM5.81 8.99l1.24 1.24 1.06-1.06-1.24-1.24zm1.105.364a6 6 0 0 0-.379.917l1.428.458c.079-.244.173-.475.281-.683zm.335.396H5.5v1.5h1.75zm-1.75 0A2.25 2.25 0 0 0 3.25 12h1.5c0-.416.334-.75.75-.75zM3.25 12a2.25 2.25 0 0 0 2.25 2.25v-1.5a.75.75 0 0 1-.75-.75zm2.25 2.25h1.75v-1.5H5.5zm1.036-.52c.103.322.229.617.373.905l1.342-.67a5 5 0 0 1-.287-.694zm.514.04-1.24 1.24 1.06 1.06 1.24-1.24zm-1.24 1.24a2.24 2.24 0 0 0 .004 3.185l1.052-1.07a.74.74 0 0 1 .004-1.055zm0 3.18a2.24 2.24 0 0 0 3.185-.004l-1.07-1.052a.74.74 0 0 1-1.055-.004zm3.18 0 1.24-1.24-1.06-1.06-1.24 1.24zm.364-1.105c.292.152.601.278.917.379l.458-1.428a4.4 4.4 0 0 1-.683-.281zm.396-.335v1.75h1.5v-1.75zm0 1.75A2.25 2.25 0 0 0 12 20.75v-1.5a.75.75 0 0 1-.75-.75zM12 20.75a2.25 2.25 0 0 0 2.25-2.25h-1.5c0 .416-.334.75-.75.75zm2.25-2.25v-1.75h-1.5v1.75zm-.52-1.036c.322-.104.617-.229.905-.373l-.67-1.342a5 5 0 0 1-.694.287zm.04-.514 1.24 1.24 1.06-1.06-1.24-1.24zm1.24 1.24a2.24 2.24 0 0 0 3.185-.004l-1.07-1.052a.74.74 0 0 1-1.055-.004zm3.18 0a2.24 2.24 0 0 0-.004-3.185l-1.052 1.07a.74.74 0 0 1-.004 1.055zm0-3.18-1.24-1.24-1.06 1.06 1.24 1.24zm-1.105-.364a6 6 0 0 0 .379-.917l-1.428-.458a4.4 4.4 0 0 1-.281.683zm-.335-.396h1.75v-1.5h-1.75zm1.75 0A2.25 2.25 0 0 0 20.75 12h-1.5c0 .416-.334.75-.75.75zM20.75 12a2.25 2.25 0 0 0-2.25-2.25v1.5c.416 0 .75.334.75.75zm-7.5 0c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 12zM12 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 14.75zM10.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 12zM12 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 9.25z"
})), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "#fff",
  d: "M0 0h24v24H0z"
}))));
SvgSiSettingsApplications.displayName = "SvgSiSettingsApplications";
const ForwardRef$1u = /*#__PURE__*/React.forwardRef(SvgSiSettingsApplications);
const Memo$1u = /*#__PURE__*/React.memo(ForwardRef$1u);

const SvgSiSettingsCute = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
  fill: "currentColor",
  clipPath: "url(#a)"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M20 9c1.66 0 3 1.34 3 3s-1.34 3-3 3h-.76l.54.54a3 3 0 0 1 0 4.24 3 3 0 0 1-4.24 0l-.54-.54V20c0 1.66-1.34 3-3 3s-3-1.34-3-3v-.76l-.54.54a3 3 0 0 1-4.24 0 3 3 0 0 1 0-4.24l.54-.54H4c-1.66 0-3-1.34-3-3s1.34-3 3-3h.76l-.54-.54a3 3 0 0 1 0-4.24 3 3 0 0 1 4.24 0l.54.54V4c0-1.66 1.34-3 3-3s3 1.34 3 3v.76l.54-.54a3 3 0 0 1 4.24 0 3 3 0 0 1 0 4.24l-.54.54zm-4 3a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  d: "m19.24 9-.53-.53a.75.75 0 0 0 .53 1.28zm.54-.54.53.53zm-4.24-4.24-.53-.53zm-.54.54h-.75a.75.75 0 0 0 1.28.53zm-6 0-.53.53a.75.75 0 0 0 1.28-.53zm-.54-.54.53-.53zM4.22 8.46l-.53.53zm.54.54v.75a.75.75 0 0 0 .53-1.28zm0 6 .53.53a.75.75 0 0 0-.53-1.28zm-.54.54-.53-.53zm4.24 4.24.53.53zm.54-.54h.75a.75.75 0 0 0-1.28-.53zm6 0 .53-.53a.75.75 0 0 0-1.28.53zm.54.54-.53.53zm4.24-4.24.53-.53zm-.54-.54v-.75a.75.75 0 0 0-.53 1.28zm4.51-3A3.746 3.746 0 0 0 20 8.25v1.5A2.246 2.246 0 0 1 22.25 12zM20 8.25h-.76v1.5H20zm-.23 1.28.54-.54-1.06-1.06-.54.54zm.54-.54a3.75 3.75 0 0 0 0-5.3l-1.06 1.06a2.25 2.25 0 0 1 0 3.18zm0-5.3a3.75 3.75 0 0 0-5.3 0l1.06 1.06a2.25 2.25 0 0 1 3.18 0zm-5.3 0-.54.54 1.06 1.06.54-.54zm.74 1.07V4h-1.5v.76zm0-.76A3.746 3.746 0 0 0 12 .25v1.5A2.246 2.246 0 0 1 14.25 4zM12 .25A3.746 3.746 0 0 0 8.25 4h1.5A2.246 2.246 0 0 1 12 1.75zM8.25 4v.76h1.5V4zm1.28.23-.54-.54-1.06 1.06.54.54zm-.54-.54a3.75 3.75 0 0 0-5.3 0l1.06 1.06a2.25 2.25 0 0 1 3.18 0zm-5.3 0a3.75 3.75 0 0 0 0 5.3l1.06-1.06a2.25 2.25 0 0 1 0-3.18zm0 5.3.54.54 1.06-1.06-.54-.54zm1.07-.74H4v1.5h.76zm-.76 0A3.746 3.746 0 0 0 .25 12h1.5A2.246 2.246 0 0 1 4 9.75zM.25 12A3.746 3.746 0 0 0 4 15.75v-1.5A2.246 2.246 0 0 1 1.75 12zM4 15.75h.76v-1.5H4zm.23-1.28-.54.54 1.06 1.06.54-.54zm-.54.54a3.75 3.75 0 0 0 0 5.3l1.06-1.06a2.25 2.25 0 0 1 0-3.18zm0 5.3a3.75 3.75 0 0 0 5.3 0l-1.06-1.06a2.25 2.25 0 0 1-3.18 0zm5.3 0 .54-.54-1.06-1.06-.54.54zm-.74-1.07V20h1.5v-.76zm0 .76A3.746 3.746 0 0 0 12 23.75v-1.5A2.246 2.246 0 0 1 9.75 20zM12 23.75A3.746 3.746 0 0 0 15.75 20h-1.5A2.246 2.246 0 0 1 12 22.25zM15.75 20v-.76h-1.5V20zm-1.28-.23.54.54 1.06-1.06-.54-.54zm.54.54a3.75 3.75 0 0 0 5.3 0l-1.06-1.06a2.25 2.25 0 0 1-3.18 0zm5.3 0a3.75 3.75 0 0 0 0-5.3l-1.06 1.06a2.25 2.25 0 0 1 0 3.18zm0-5.3-.54-.54-1.06 1.06.54.54zm-1.07.74H20v-1.5h-.76zm.76 0A3.746 3.746 0 0 0 23.75 12h-1.5A2.246 2.246 0 0 1 20 14.25zM15.25 12A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25z"
})), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "#fff",
  d: "M0 0h24v24H0z"
}))));
SvgSiSettingsCute.displayName = "SvgSiSettingsCute";
const ForwardRef$1t = /*#__PURE__*/React.forwardRef(SvgSiSettingsCute);
const Memo$1t = /*#__PURE__*/React.memo(ForwardRef$1t);

const SvgSiSettingsThick = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M18.51 9.49h1.87c.88 0 1.6.72 1.6 1.6v1.8c0 .88-.72 1.6-1.6 1.6h-1.87q-.047.136-.106.269l-.034.081 1.32 1.32c.62.62.62 1.64 0 2.26l-1.27 1.27c-.62.62-1.64.62-2.26 0l-1.32-1.32q-.096.043-.2.08l-.15.06v1.87c0 .88-.72 1.6-1.6 1.6h-1.8c-.88 0-1.6-.72-1.6-1.6v-1.87q-.136-.047-.269-.106l-.081-.034-1.32 1.32c-.62.62-1.64.62-2.26 0l-1.27-1.27c-.62-.62-.62-1.64 0-2.26l1.32-1.32q-.043-.096-.08-.2l-.06-.15H3.6c-.88 0-1.6-.72-1.6-1.6v-1.8c0-.88.72-1.6 1.6-1.6h1.87q.047-.136.106-.269l.034-.081-1.32-1.32c-.62-.62-.62-1.64 0-2.26l1.27-1.27c.62-.62 1.64-.62 2.26 0l1.32 1.32q.096-.043.2-.08l.15-.06V3.6c0-.88.72-1.6 1.6-1.6h1.8c.88 0 1.6.72 1.6 1.6v1.87q.136.047.269.106l.081.034 1.32-1.32c.62-.62 1.64-.62 2.26 0l1.27 1.27c.62.62.62 1.64 0 2.26l-1.32 1.32q.043.096.08.2zM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  d: "m18.51 9.49-.692.288a.75.75 0 0 0 .692.462zm-.14-.35-.53-.53a.75.75 0 0 0-.153.84zm1.32-1.32-.53-.53zm0-2.26-.53.53zm-1.27-1.27.53-.53zm-2.26 0-.53-.53zm-1.32 1.32-.288.692a.75.75 0 0 0 .818-.162zm-.35-.14h-.75c0 .323.207.61.513.712zm-5 0 .288.692a.75.75 0 0 0 .462-.692zm-.35.14-.53.53a.75.75 0 0 0 .84.153zM7.82 4.29l.53-.53zm-2.26 0-.53-.53zM4.29 5.56l.53.53zm0 2.26.53-.53zm1.32 1.32.692.288a.75.75 0 0 0-.162-.818zm-.14.35v.75a.75.75 0 0 0 .712-.513zm0 5 .692-.289a.75.75 0 0 0-.692-.461zm.14.35.53.53a.75.75 0 0 0 .153-.84zm-1.32 1.32-.53-.53zm0 2.26.53-.53zm1.27 1.27-.53.53zm2.26 0 .53.53zm1.32-1.32.288-.692a.75.75 0 0 0-.818.162zm.35.14h.75a.75.75 0 0 0-.513-.712zm5 0-.289-.692a.75.75 0 0 0-.461.692zm.35-.14.53-.53a.75.75 0 0 0-.84-.153zm1.32 1.32-.53.53zm2.26 0 .53.53zm1.27-1.27-.53-.53zm-1.32-3.58-.692-.288a.75.75 0 0 0 .162.818zm.14-.35v-.75a.75.75 0 0 0-.712.513zm1.87-5.75h-1.87v1.5h1.87zm-1.178.462c-.02-.048-.037-.093-.062-.159a4 4 0 0 0-.087-.213l-1.366.62c.015.033.03.072.053.13.02.051.047.126.078.198zm-.302.468 1.32-1.32-1.06-1.06-1.32 1.32zm1.32-1.32a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2zm0-3.32-1.27-1.27-1.06 1.06 1.27 1.27zm-1.27-1.27a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0zm-3.32 0-1.32 1.32 1.06 1.06 1.32-1.32zm-.502 1.158c-.091-.039-.246-.108-.4-.16l-.475 1.424c.085.028.15.059.299.12zm.112.552V3.6h-1.5v1.87zm0-1.87a2.355 2.355 0 0 0-2.35-2.35v1.5c.466 0 .85.384.85.85zm-2.35-2.35h-1.8v1.5h1.8zm-1.8 0A2.355 2.355 0 0 0 8.74 3.6h1.5c0-.466.384-.85.85-.85zM8.74 3.6v1.87h1.5V3.6zm.462 1.178c-.048.02-.093.037-.159.062-.06.022-.136.052-.213.087l.62 1.366c.033-.015.072-.03.13-.053.051-.02.126-.047.198-.078zm.468.302L8.35 3.76 7.29 4.82l1.32 1.32zM8.35 3.76a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0zm-3.32 0L3.76 5.03l1.06 1.06 1.27-1.27zM3.76 5.03a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2zm0 3.32 1.32 1.32 1.06-1.06-1.32-1.32zm1.158.502c-.039.091-.108.246-.16.4l1.424.475c.028-.085.059-.15.12-.299zm.552-.112H3.6v1.5h1.87zm-1.87 0a2.355 2.355 0 0 0-2.35 2.35h1.5c0-.466.384-.85.85-.85zm-2.35 2.35v1.8h1.5v-1.8zm0 1.8a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85zm2.35 2.35h1.87v-1.5H3.6zm1.178-.462c.02.047.037.093.062.159.022.06.052.136.087.213l1.366-.62a2 2 0 0 1-.053-.13c-.02-.051-.047-.126-.078-.199zm.302-.468-1.32 1.32 1.06 1.06 1.32-1.32zm-1.32 1.32a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2zm0 3.32 1.27 1.27 1.06-1.06-1.27-1.27zm1.27 1.27a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0zm3.32 0 1.32-1.32-1.06-1.06-1.32 1.32zm.502-1.158c.091.039.246.108.4.16l.475-1.424c-.085-.028-.15-.059-.299-.12zm-.112-.552v1.87h1.5v-1.87zm0 1.87a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85zm2.35 2.35h1.8v-1.5h-1.8zm1.8 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85zm2.35-2.35v-1.87h-1.5v1.87zm-.462-1.178c.047-.02.093-.037.159-.062.06-.023.136-.052.213-.087l-.62-1.366c-.033.015-.072.03-.13.053-.051.02-.126.047-.199.078zm-.468-.302 1.32 1.32 1.06-1.06-1.32-1.32zm1.32 1.32a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0zm3.32 0 1.27-1.27-1.06-1.06-1.27 1.27zm1.27-1.27a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2zm0-3.32-1.32-1.32-1.06 1.06 1.32 1.32zm-1.158-.502c.039-.091.108-.246.16-.4l-1.424-.475c-.028.085-.059.15-.12.299zm-.552.112h1.87v-1.5h-1.87zm1.87 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85zm2.35-2.35v-1.8h-1.5v1.8zm0-1.8a2.355 2.355 0 0 0-2.35-2.35v1.5c.466 0 .85.384.85.85zm-7.48.91A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12zM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75zM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12zM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25z"
}));
SvgSiSettingsThick.displayName = "SvgSiSettingsThick";
const ForwardRef$1s = /*#__PURE__*/React.forwardRef(SvgSiSettingsThick);
const Memo$1s = /*#__PURE__*/React.memo(ForwardRef$1s);

const SvgSiShield = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"
}));
SvgSiShield.displayName = "SvgSiShield";
const ForwardRef$1r = /*#__PURE__*/React.forwardRef(SvgSiShield);
const Memo$1r = /*#__PURE__*/React.memo(ForwardRef$1r);

const SvgSiShieldAlert = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 15h.008M12 7v5m-8-.748c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"
}));
SvgSiShieldAlert.displayName = "SvgSiShieldAlert";
const ForwardRef$1q = /*#__PURE__*/React.forwardRef(SvgSiShieldAlert);
const Memo$1q = /*#__PURE__*/React.memo(ForwardRef$1q);

const SvgSiShieldBad = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9.172 13.828 12 11m0 0 2.828-2.828M12 11l2.828 2.828M12 11 9.172 8.172M4 11.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"
}));
SvgSiShieldBad.displayName = "SvgSiShieldBad";
const ForwardRef$1p = /*#__PURE__*/React.forwardRef(SvgSiShieldBad);
const Memo$1p = /*#__PURE__*/React.memo(ForwardRef$1p);

const SvgSiShieldHealthSafety = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9 11h6m-3 3V8m-8 3.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"
}));
SvgSiShieldHealthSafety.displayName = "SvgSiShieldHealthSafety";
const ForwardRef$1o = /*#__PURE__*/React.forwardRef(SvgSiShieldHealthSafety);
const Memo$1o = /*#__PURE__*/React.memo(ForwardRef$1o);

const SvgSiShieldPolice = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728m2.334-10.045 2.652-2.147c.063-.126.126-.252.126-.379-.063-.126-.19-.252-.316-.252H13.4l-1.073-2.904c-.063-.127-.19-.253-.316-.253s-.252.126-.315.253l-1.01 2.904H7.34c-.126 0-.252.126-.315.252a.304.304 0 0 0 .126.38L9.74 11.87l-.821 3.157a.304.304 0 0 0 .126.379.4.4 0 0 0 .379 0l2.652-1.894 2.588 1.894c.063.063.126.063.19.063.063 0 .126 0 .189-.063a.304.304 0 0 0 .126-.379z",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m16.874 9.788-2.652 2.147.947 3.093a.304.304 0 0 1-.126.379c-.063.063-.126.063-.19.063-.063 0-.126 0-.189-.063l-2.588-1.894-2.652 1.894a.4.4 0 0 1-.379 0 .304.304 0 0 1-.126-.379l.82-3.157-2.588-2.083a.304.304 0 0 1-.126-.379c.063-.126.19-.252.315-.252h3.347l1.01-2.904c.063-.127.19-.253.315-.253.127 0 .253.126.316.253l1.073 2.904h3.283c.127 0 .253.126.316.252 0 .127-.063.253-.126.38Z"
}));
SvgSiShieldPolice.displayName = "SvgSiShieldPolice";
const ForwardRef$1n = /*#__PURE__*/React.forwardRef(SvgSiShieldPolice);
const Memo$1n = /*#__PURE__*/React.memo(ForwardRef$1n);

const SvgSiShieldSecurity = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M4 11h16m-8 10V2m-8 9.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"
}));
SvgSiShieldSecurity.displayName = "SvgSiShieldSecurity";
const ForwardRef$1m = /*#__PURE__*/React.forwardRef(SvgSiShieldSecurity);
const Memo$1m = /*#__PURE__*/React.memo(ForwardRef$1m);

const SvgSiShieldTip = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12.008 7H12m.008 8v-5M4 11.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"
}));
SvgSiShieldTip.displayName = "SvgSiShieldTip";
const ForwardRef$1l = /*#__PURE__*/React.forwardRef(SvgSiShieldTip);
const Memo$1l = /*#__PURE__*/React.memo(ForwardRef$1l);

const SvgSiShieldVerified = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m8 12 3 3 5-7M4 11.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"
}));
SvgSiShieldVerified.displayName = "SvgSiShieldVerified";
const ForwardRef$1k = /*#__PURE__*/React.forwardRef(SvgSiShieldVerified);
const Memo$1k = /*#__PURE__*/React.memo(ForwardRef$1k);

const SvgSiSignIn = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m14 15 3-3m0 0-3-3m3 3H3m7-4V5.4A2.4 2.4 0 0 1 12.4 3h6.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4h-6.2a2.4 2.4 0 0 1-2.4-2.4V16"
}));
SvgSiSignIn.displayName = "SvgSiSignIn";
const ForwardRef$1j = /*#__PURE__*/React.forwardRef(SvgSiSignIn);
const Memo$1j = /*#__PURE__*/React.memo(ForwardRef$1j);

const SvgSiSignInAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m13 16 4-4m0 0-4-4m4 4H3m10.6-9h5A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H13"
}));
SvgSiSignInAlt.displayName = "SvgSiSignInAlt";
const ForwardRef$1i = /*#__PURE__*/React.forwardRef(SvgSiSignInAlt);
const Memo$1i = /*#__PURE__*/React.memo(ForwardRef$1i);

const SvgSiSignOut = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m18 15 3-3m0 0-3-3m3 3H7m7 4v2.6a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3h6.2A2.4 2.4 0 0 1 14 5.4V8"
}));
SvgSiSignOut.displayName = "SvgSiSignOut";
const ForwardRef$1h = /*#__PURE__*/React.forwardRef(SvgSiSignOut);
const Memo$1h = /*#__PURE__*/React.memo(ForwardRef$1h);

const SvgSiSignOutAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m17 16 4-4m0 0-4-4m4 4H7m4 9H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3H11"
}));
SvgSiSignOutAlt.displayName = "SvgSiSignOutAlt";
const ForwardRef$1g = /*#__PURE__*/React.forwardRef(SvgSiSignOutAlt);
const Memo$1g = /*#__PURE__*/React.memo(ForwardRef$1g);

const SvgSiSmartPhone = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M15.6 2H8.4A2.4 2.4 0 0 0 6 4.4v15.2A2.4 2.4 0 0 0 8.4 22h7.2a2.4 2.4 0 0 0 2.4-2.4V4.4A2.4 2.4 0 0 0 15.6 2"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M11 5h2M8.4 2h7.2A2.4 2.4 0 0 1 18 4.4v15.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 19.6V4.4A2.4 2.4 0 0 1 8.4 2"
}));
SvgSiSmartPhone.displayName = "SvgSiSmartPhone";
const ForwardRef$1f = /*#__PURE__*/React.forwardRef(SvgSiSmartPhone);
const Memo$1f = /*#__PURE__*/React.memo(ForwardRef$1f);

const SvgSiSort = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M4 12h12M4 8h16M4 16h8"
}));
SvgSiSort.displayName = "SvgSiSort";
const ForwardRef$1e = /*#__PURE__*/React.forwardRef(SvgSiSort);
const Memo$1e = /*#__PURE__*/React.memo(ForwardRef$1e);

const SvgSiSortAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M4 10h12M4 6h16M4 14h8m-8 4h4"
}));
SvgSiSortAlt.displayName = "SvgSiSortAlt";
const ForwardRef$1d = /*#__PURE__*/React.forwardRef(SvgSiSortAlt);
const Memo$1d = /*#__PURE__*/React.memo(ForwardRef$1d);

const SvgSiSouthEast = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m8 8 8 8m0 0v-5m0 5h-5"
}));
SvgSiSouthEast.displayName = "SvgSiSouthEast";
const ForwardRef$1c = /*#__PURE__*/React.forwardRef(SvgSiSouthEast);
const Memo$1c = /*#__PURE__*/React.memo(ForwardRef$1c);

const SvgSiSouthEastCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m8 8 8 8m0 0v-5m0 5h-5m11-4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiSouthEastCircle.displayName = "SvgSiSouthEastCircle";
const ForwardRef$1b = /*#__PURE__*/React.forwardRef(SvgSiSouthEastCircle);
const Memo$1b = /*#__PURE__*/React.memo(ForwardRef$1b);

const SvgSiSouthEastEscape = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M9 17h-.6C7.07 17 6 15.93 6 14.6V8.4C6 7.07 7.07 6 8.4 6h6.2C15.93 6 17 7.07 17 8.4V9m-7 1 8 8m0 0h-4m4 0v-4"
}));
SvgSiSouthEastEscape.displayName = "SvgSiSouthEastEscape";
const ForwardRef$1a = /*#__PURE__*/React.forwardRef(SvgSiSouthEastEscape);
const Memo$1a = /*#__PURE__*/React.memo(ForwardRef$1a);

const SvgSiSouthEastEscapeAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m10 10 8 8m0 0v-4m0 4h-4m-5-3h-.6C7.07 15 6 13.93 6 12.6V8.4C6 7.07 7.07 6 8.4 6h4.2C13.93 6 15 7.07 15 8.4V9"
}));
SvgSiSouthEastEscapeAlt.displayName = "SvgSiSouthEastEscapeAlt";
const ForwardRef$19 = /*#__PURE__*/React.forwardRef(SvgSiSouthEastEscapeAlt);
const Memo$19 = /*#__PURE__*/React.memo(ForwardRef$19);

const SvgSiSouthEastSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m8 8 8 8m0 0v-5m0 5h-5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiSouthEastSquare.displayName = "SvgSiSouthEastSquare";
const ForwardRef$18 = /*#__PURE__*/React.forwardRef(SvgSiSouthEastSquare);
const Memo$18 = /*#__PURE__*/React.memo(ForwardRef$18);

const SvgSiSouthWest = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m16 8-8 8m0 0v-5m0 5h5"
}));
SvgSiSouthWest.displayName = "SvgSiSouthWest";
const ForwardRef$17 = /*#__PURE__*/React.forwardRef(SvgSiSouthWest);
const Memo$17 = /*#__PURE__*/React.memo(ForwardRef$17);

const SvgSiSouthWestCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m16 8-8 8m0 0v-5m0 5h5m9-4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
}));
SvgSiSouthWestCircle.displayName = "SvgSiSouthWestCircle";
const ForwardRef$16 = /*#__PURE__*/React.forwardRef(SvgSiSouthWestCircle);
const Memo$16 = /*#__PURE__*/React.memo(ForwardRef$16);

const SvgSiSouthWestEscape = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M15 17h.6c1.33 0 2.4-1.07 2.4-2.4V8.4C18 7.07 16.93 6 15.6 6H9.4C8.07 6 7 7.07 7 8.4V9m7 1-8 8m0 0h4m-4 0v-4"
}));
SvgSiSouthWestEscape.displayName = "SvgSiSouthWestEscape";
const ForwardRef$15 = /*#__PURE__*/React.forwardRef(SvgSiSouthWestEscape);
const Memo$15 = /*#__PURE__*/React.memo(ForwardRef$15);

const SvgSiSouthWestEscapeAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m14 10-8 8m0 0v-4m0 4h4m5-3h.6c1.33 0 2.4-1.07 2.4-2.4V8.4C18 7.07 16.93 6 15.6 6h-4.2C10.07 6 9 7.07 9 8.4V9"
}));
SvgSiSouthWestEscapeAlt.displayName = "SvgSiSouthWestEscapeAlt";
const ForwardRef$14 = /*#__PURE__*/React.forwardRef(SvgSiSouthWestEscapeAlt);
const Memo$14 = /*#__PURE__*/React.memo(ForwardRef$14);

const SvgSiSouthWestSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m16 8-8 8m0 0v-5m0 5h5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiSouthWestSquare.displayName = "SvgSiSouthWestSquare";
const ForwardRef$13 = /*#__PURE__*/React.forwardRef(SvgSiSouthWestSquare);
const Memo$13 = /*#__PURE__*/React.memo(ForwardRef$13);

const SvgSiSpark = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M3 12h18m-9.005 9.005v-18m-6.362 15.36L18.36 5.637m0 12.735L5.632 5.644"
}));
SvgSiSpark.displayName = "SvgSiSpark";
const ForwardRef$12 = /*#__PURE__*/React.forwardRef(SvgSiSpark);
const Memo$12 = /*#__PURE__*/React.memo(ForwardRef$12);

const SvgSiSpinner = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 2v4m0 12v4m-9.995-9.995h4m12 0h4M4.931 4.932l2.828 2.829m8.485 8.485 2.829 2.829m-14.136 0 2.829-2.829m8.485-8.485 2.829-2.829"
}));
SvgSiSpinner.displayName = "SvgSiSpinner";
const ForwardRef$11 = /*#__PURE__*/React.forwardRef(SvgSiSpinner);
const Memo$11 = /*#__PURE__*/React.memo(ForwardRef$11);

const SvgSiSquare = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
}));
SvgSiSquare.displayName = "SvgSiSquare";
const ForwardRef$10 = /*#__PURE__*/React.forwardRef(SvgSiSquare);
const Memo$10 = /*#__PURE__*/React.memo(ForwardRef$10);

const SvgSiStar = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m12 2 2.4 7.619 7.6-.005-6.114 4.181 2.29 7.253L12 16.624l-6.181 4.424 2.29-7.253L2 9.615l7.595.004z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m12 2 2.4 7.619 7.6-.005-6.114 4.181 2.29 7.253L12 16.624l-6.181 4.424 2.29-7.253L2 9.615l7.595.004z"
}));
SvgSiStar.displayName = "SvgSiStar";
const ForwardRef$$ = /*#__PURE__*/React.forwardRef(SvgSiStar);
const Memo$$ = /*#__PURE__*/React.memo(ForwardRef$$);

const SvgSiStarAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m21.748 10.576-5.304 4.293 1.894 6.187c.127.253 0 .632-.252.758-.127.126-.253.126-.38.126-.125 0-.252 0-.378-.126l-5.177-3.788-5.303 3.788a.8.8 0 0 1-.758 0c-.252-.126-.379-.505-.252-.758l1.641-6.313-5.177-4.167c-.252-.126-.379-.505-.252-.757.126-.253.378-.506.63-.506h6.693l2.02-5.808c.127-.252.38-.505.632-.505s.505.253.631.505l2.147 5.808h6.566c.252 0 .505.253.631.506 0 .252-.126.505-.253.757"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m21.748 10.576-5.304 4.293 1.894 6.187c.127.253 0 .632-.252.758-.127.126-.253.126-.38.126-.125 0-.252 0-.378-.126l-5.177-3.788-5.303 3.788a.8.8 0 0 1-.758 0c-.252-.126-.379-.505-.252-.758l1.641-6.313-5.177-4.167c-.252-.126-.379-.505-.252-.757.126-.253.378-.506.63-.506h6.693l2.02-5.808c.127-.252.38-.505.632-.505s.505.253.631.505l2.147 5.808h6.566c.252 0 .505.253.631.506 0 .252-.126.505-.253.757Z"
}));
SvgSiStarAlt.displayName = "SvgSiStarAlt";
const ForwardRef$_ = /*#__PURE__*/React.forwardRef(SvgSiStarAlt);
const Memo$_ = /*#__PURE__*/React.memo(ForwardRef$_);

const SvgSiStop = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20.2 3H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M20.2 3H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Z"
}));
SvgSiStop.displayName = "SvgSiStop";
const ForwardRef$Z = /*#__PURE__*/React.forwardRef(SvgSiStop);
const Memo$Z = /*#__PURE__*/React.memo(ForwardRef$Z);

const SvgSiStopCircle = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M9 9.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v4.4a.8.8 0 0 1-.8.8H9.8a.8.8 0 0 1-.8-.8z",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M14.2 9H9.8a.8.8 0 0 0-.8.8v4.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V9.8a.8.8 0 0 0-.8-.8Z"
}));
SvgSiStopCircle.displayName = "SvgSiStopCircle";
const ForwardRef$Y = /*#__PURE__*/React.forwardRef(SvgSiStopCircle);
const Memo$Y = /*#__PURE__*/React.memo(ForwardRef$Y);

const SvgSiStreetSign = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M6 9 2 6l4-3h12v6zm12 9 4-3-4-3H6v6z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 1v2m0 15v5m0-14v3M6 9 2 6l4-3h12v6zm12 9 4-3-4-3H6v6z"
}));
SvgSiStreetSign.displayName = "SvgSiStreetSign";
const ForwardRef$X = /*#__PURE__*/React.forwardRef(SvgSiStreetSign);
const Memo$X = /*#__PURE__*/React.memo(ForwardRef$X);

const SvgSiStrikethrough = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M16.619 4.33A8.6 8.6 0 0 0 12.333 3c-2.38 0-4.571 1.947-4.571 3.894 0 2.043 1.524 3.658 4.571 4.94C15.857 13.306 17 14.588 17 16.774 17 19.527 14.143 21 11.667 21 10 21 8.38 20.525 7 19.575M4 12h16"
}));
SvgSiStrikethrough.displayName = "SvgSiStrikethrough";
const ForwardRef$W = /*#__PURE__*/React.forwardRef(SvgSiStrikethrough);
const Memo$W = /*#__PURE__*/React.memo(ForwardRef$W);

const SvgSiSun = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
  clipPath: "url(#a)"
}, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M3 12H1m22 0h-2m-9 9v2m0-22v2M5.636 18.364l-1.414 1.414M19.778 4.222l-1.414 1.414m-12.728 0L4.222 4.222m15.556 15.556-1.414-1.414M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
})), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "#fff",
  d: "M0 0h24v24H0z"
}))));
SvgSiSun.displayName = "SvgSiSun";
const ForwardRef$V = /*#__PURE__*/React.forwardRef(SvgSiSun);
const Memo$V = /*#__PURE__*/React.memo(ForwardRef$V);

const SvgSiSunSet = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M8.57 17.93A5.98 5.98 0 0 1 6 13c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.05-1.03 3.86-2.6 4.94"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 4V2M3 13H1m22 0h-2m-1.222-7.778-1.414 1.414m-12.728 0L4.222 5.222M4 18h16M8 21h8m-7.43-3.07A5.98 5.98 0 0 1 6 13c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.05-1.03 3.86-2.6 4.94z"
}));
SvgSiSunSet.displayName = "SvgSiSunSet";
const ForwardRef$U = /*#__PURE__*/React.forwardRef(SvgSiSunSet);
const Memo$U = /*#__PURE__*/React.memo(ForwardRef$U);

const SvgSiSunnySnowing = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M8 13c0-2.21 1.79-4 4-4s4 1.79 4 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M5 13H1m22 0h-4M12 2v4M7.05 8.05 4.222 5.222m15.556 0L16.95 8.05M12 16h.1m3.9 0h.1m3.9 0h.1M8 16h.1m3.9 3h.1m-.1 3h.1m3.9-3h.1M8 19h.1M4 16h.1M8 13c0-2.21 1.79-4 4-4s4 1.79 4 4z"
}));
SvgSiSunnySnowing.displayName = "SvgSiSunnySnowing";
const ForwardRef$T = /*#__PURE__*/React.forwardRef(SvgSiSunnySnowing);
const Memo$T = /*#__PURE__*/React.memo(ForwardRef$T);

const SvgSiSwapHoriz = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7 11 3 7m0 0 4-4M3 7h18m-4 14 4-4m0 0-4-4m4 4H3"
}));
SvgSiSwapHoriz.displayName = "SvgSiSwapHoriz";
const ForwardRef$S = /*#__PURE__*/React.forwardRef(SvgSiSwapHoriz);
const Memo$S = /*#__PURE__*/React.memo(ForwardRef$S);

const SvgSiSwapVert = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m11 17-4 4m0 0-4-4m4 4V3m14 4-4-4m0 0-4 4m4-4v18"
}));
SvgSiSwapVert.displayName = "SvgSiSwapVert";
const ForwardRef$R = /*#__PURE__*/React.forwardRef(SvgSiSwapVert);
const Memo$R = /*#__PURE__*/React.memo(ForwardRef$R);

const SvgSiSwatch = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M3 6a3 3 0 0 1 6 0v12c0 .7-.24 1.346-.643 1.856A3 3 0 0 1 3 18z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M6 18h-.008M6 21h12a3 3 0 1 0 0-6h-4.787M6 21a3 3 0 0 1-3-3V6a3 3 0 0 1 6 0v12c0 .7-.24 1.346-.643 1.856M6 21c.956 0 1.808-.447 2.357-1.144M9 10.728l3.607-3.607a3 3 0 1 1 4.242 4.243l-8.492 8.492"
}));
SvgSiSwatch.displayName = "SvgSiSwatch";
const ForwardRef$Q = /*#__PURE__*/React.forwardRef(SvgSiSwatch);
const Memo$Q = /*#__PURE__*/React.memo(ForwardRef$Q);

const SvgSiTable = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M3 15h18M3 9h18M9 21V3m6 18V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiTable.displayName = "SvgSiTable";
const ForwardRef$P = /*#__PURE__*/React.forwardRef(SvgSiTable);
const Memo$P = /*#__PURE__*/React.memo(ForwardRef$P);

const SvgSiTableColumns = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9 21V3m6 18V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiTableColumns.displayName = "SvgSiTableColumns";
const ForwardRef$O = /*#__PURE__*/React.forwardRef(SvgSiTableColumns);
const Memo$O = /*#__PURE__*/React.memo(ForwardRef$O);

const SvgSiTableRows = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M3 15h18M3 9h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiTableRows.displayName = "SvgSiTableRows";
const ForwardRef$N = /*#__PURE__*/React.forwardRef(SvgSiTableRows);
const Memo$N = /*#__PURE__*/React.memo(ForwardRef$N);

const SvgSiTakeoff = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "m18.212 6.271-3.668 2.241-6.947-.835a2.3 2.3 0 0 0-1.232.249l-1.113.649 5.262 2.16-4.746 2.811-1.404-.2a2.04 2.04 0 0 0-1.513.175L2 14l3.47 2.044 6.174-1.32L22 8.687 20.972 6.97c-.53-.923-1.77-1.255-2.76-.699q.06 0 0 0"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m18.212 6.271-3.668 2.241-6.947-.835a2.3 2.3 0 0 0-1.232.249l-1.113.649 5.262 2.16-4.746 2.811-1.404-.2a2.04 2.04 0 0 0-1.513.175L2 14l3.47 2.044 6.174-1.32L22 8.687 20.972 6.97c-.53-.923-1.77-1.255-2.76-.699m0 0q.06 0 0 0M6 19h12"
}));
SvgSiTakeoff.displayName = "SvgSiTakeoff";
const ForwardRef$M = /*#__PURE__*/React.forwardRef(SvgSiTakeoff);
const Memo$M = /*#__PURE__*/React.memo(ForwardRef$M);

const SvgSiTarget = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-4 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
}));
SvgSiTarget.displayName = "SvgSiTarget";
const ForwardRef$L = /*#__PURE__*/React.forwardRef(SvgSiTarget);
const Memo$L = /*#__PURE__*/React.memo(ForwardRef$L);

const SvgSiTaxiing = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.925 10.74 15.5 11l-5.482-4.578A2.2 2.2 0 0 0 8.825 6l-1.29.006L11 11H5.5L4.377 9.898a2 2 0 0 0-1.4-.638L2 9.25l1.985 3.699L10 15h12l-.032-2.165c.002-1.124-.907-2.082-2.043-2.095q.052.03 0 0"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M19.925 10.74 15.5 11l-5.482-4.578A2.2 2.2 0 0 0 8.825 6l-1.29.006L11 11H5.5L4.377 9.898a2 2 0 0 0-1.4-.638L2 9.25l1.985 3.699L10 15h12l-.032-2.165c.002-1.124-.907-2.082-2.043-2.095m0 0q.052.03 0 0M12 17.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m8 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
}));
SvgSiTaxiing.displayName = "SvgSiTaxiing";
const ForwardRef$K = /*#__PURE__*/React.forwardRef(SvgSiTaxiing);
const Memo$K = /*#__PURE__*/React.memo(ForwardRef$K);

const SvgSiTerminal = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m4 18 6-6-6-6m8 12h8"
}));
SvgSiTerminal.displayName = "SvgSiTerminal";
const ForwardRef$J = /*#__PURE__*/React.forwardRef(SvgSiTerminal);
const Memo$J = /*#__PURE__*/React.memo(ForwardRef$J);

const SvgSiTerminalAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m5 16 4-4-4-4m6 8h8M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4"
}));
SvgSiTerminalAlt.displayName = "SvgSiTerminalAlt";
const ForwardRef$I = /*#__PURE__*/React.forwardRef(SvgSiTerminalAlt);
const Memo$I = /*#__PURE__*/React.memo(ForwardRef$I);

const SvgSiText = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 21h8m-4 0V3M4 7V3h16v4"
}));
SvgSiText.displayName = "SvgSiText";
const ForwardRef$H = /*#__PURE__*/React.forwardRef(SvgSiText);
const Memo$H = /*#__PURE__*/React.memo(ForwardRef$H);

const SvgSiThumbDown = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.756 14.174c.628 0 3.408-.192 3.236-4.304C21.836 6.293 18.866 4 18.272 4H6.066L6 14.174h2.665L13.798 22c2.136-1.049 2.32-3.209 1.36-4.938l-.64-1.174c-.476-.978-.034-1.734 1.001-1.714z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M6 14.174h2.665L13.798 22c2.136-1.049 2.32-3.209 1.36-4.938l-.64-1.174c-.476-.978-.034-1.734 1.001-1.714h3.237c.628 0 3.408-.192 3.236-4.304C21.836 6.293 18.866 4 18.272 4H6.066M2.8 16h2.4a.8.8 0 0 0 .8-.8V2.8a.8.8 0 0 0-.8-.8H2.8a.8.8 0 0 0-.8.8v12.4a.8.8 0 0 0 .8.8"
}));
SvgSiThumbDown.displayName = "SvgSiThumbDown";
const ForwardRef$G = /*#__PURE__*/React.forwardRef(SvgSiThumbDown);
const Memo$G = /*#__PURE__*/React.memo(ForwardRef$G);

const SvgSiThumbDownAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M7.895 16.31A4.4 4.4 0 0 0 7 15.6V3.266l8.509-1.223a4.1 4.1 0 0 1 2.82.616 4.25 4.25 0 0 1 1.756 2.335l1.763 5.753a3.48 3.48 0 0 1-.497 3.04c-.31.43-.716.781-1.183 1.023a3.3 3.3 0 0 1-1.509.367h-3.633q.326.83.496 1.706a9 9 0 0 1 .164 1.706c0 .904-.352 1.772-.979 2.412-.626.64-1.476.999-2.362.999s-1.736-.36-2.362-1a3.45 3.45 0 0 1-.979-2.411c0-.598-.324-1.478-1.109-2.28"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7.895 16.31A4.4 4.4 0 0 0 7 15.6V3.266l8.509-1.223a4.1 4.1 0 0 1 2.82.616 4.25 4.25 0 0 1 1.756 2.335l1.763 5.753a3.48 3.48 0 0 1-.497 3.04c-.31.43-.716.781-1.183 1.023a3.3 3.3 0 0 1-1.509.367h-3.633q.326.83.496 1.706a9 9 0 0 1 .164 1.706c0 .904-.352 1.772-.979 2.412-.626.64-1.476.999-2.362.999s-1.736-.36-2.362-1a3.45 3.45 0 0 1-.979-2.411c0-.598-.324-1.478-1.109-2.28ZM6.2 17H2.8a.8.8 0 0 1-.8-.8V2.8a.8.8 0 0 1 .8-.8h3.4a.8.8 0 0 1 .8.8v13.4a.8.8 0 0 1-.8.8Z"
}));
SvgSiThumbDownAlt1.displayName = "SvgSiThumbDownAlt1";
const ForwardRef$F = /*#__PURE__*/React.forwardRef(SvgSiThumbDownAlt1);
const Memo$F = /*#__PURE__*/React.memo(ForwardRef$F);

const SvgSiThumbDownAlt2 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M7 3h11.025c.357 0 .704.118.99.337s.499.527.604.88l2.307 7.756a1.78 1.78 0 0 1-.252 1.53 1.7 1.7 0 0 1-.59.515 1.6 1.6 0 0 1-.75.185h-5.833v3.448c0 2.044-1.043 3.01-2.304 3.326a.81.81 0 0 1-.712-.164.9.9 0 0 1-.234-.302.9.9 0 0 1-.084-.378V16.79L7 11.618"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7 3h11.025c.357 0 .704.118.99.337s.499.527.604.88l2.307 7.756a1.78 1.78 0 0 1-.252 1.53 1.7 1.7 0 0 1-.59.515 1.6 1.6 0 0 1-.75.185h-5.833v3.448c0 2.044-1.043 3.01-2.304 3.326a.81.81 0 0 1-.712-.164.9.9 0 0 1-.234-.302.9.9 0 0 1-.084-.378V16.79L7 11.618M2.8 14h3.4a.8.8 0 0 0 .8-.8V2.8a.8.8 0 0 0-.8-.8H2.8a.8.8 0 0 0-.8.8v10.4a.8.8 0 0 0 .8.8Z"
}));
SvgSiThumbDownAlt2.displayName = "SvgSiThumbDownAlt2";
const ForwardRef$E = /*#__PURE__*/React.forwardRef(SvgSiThumbDownAlt2);
const Memo$E = /*#__PURE__*/React.memo(ForwardRef$E);

const SvgSiThumbUp = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.756 9.826c.628 0 3.408.192 3.236 4.304-.156 3.577-3.126 5.87-3.72 5.87H6.066L6 9.826h2.665L13.798 2c2.136 1.049 2.32 3.209 1.36 4.938l-.64 1.174c-.476.978-.034 1.734 1.001 1.714z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M6 9.826h2.665L13.798 2c2.136 1.049 2.32 3.209 1.36 4.938l-.64 1.174c-.476.978-.034 1.734 1.001 1.714h3.237c.628 0 3.408.192 3.236 4.304-.156 3.577-3.126 5.87-3.72 5.87H6.066M2.8 8h2.4a.8.8 0 0 1 .8.8v12.4a.8.8 0 0 1-.8.8H2.8a.8.8 0 0 1-.8-.8V8.8a.8.8 0 0 1 .8-.8"
}));
SvgSiThumbUp.displayName = "SvgSiThumbUp";
const ForwardRef$D = /*#__PURE__*/React.forwardRef(SvgSiThumbUp);
const Memo$D = /*#__PURE__*/React.memo(ForwardRef$D);

const SvgSiThumbUpAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M7.895 7.69c-.294.3-.598.534-.895.71v12.334l8.509 1.223a4.1 4.1 0 0 0 2.82-.616 4.26 4.26 0 0 0 1.756-2.335l1.763-5.753a3.48 3.48 0 0 0-.497-3.04 3.36 3.36 0 0 0-1.183-1.023 3.3 3.3 0 0 0-1.509-.367h-3.633a9.7 9.7 0 0 0 .496-1.706 9 9 0 0 0 .164-1.706c0-.904-.352-1.772-.979-2.412C14.081 2.36 13.231 2 12.345 2s-1.736.36-2.362 1a3.45 3.45 0 0 0-.979 2.411c0 .597-.324 1.478-1.109 2.28"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7.895 7.69c-.294.3-.598.534-.895.71v12.334l8.509 1.223a4.1 4.1 0 0 0 2.82-.616 4.26 4.26 0 0 0 1.756-2.335l1.763-5.753a3.48 3.48 0 0 0-.497-3.04 3.36 3.36 0 0 0-1.183-1.023 3.3 3.3 0 0 0-1.509-.367h-3.633a9.7 9.7 0 0 0 .496-1.706 9 9 0 0 0 .164-1.706c0-.904-.352-1.772-.979-2.412C14.081 2.36 13.231 2 12.345 2s-1.736.36-2.362 1a3.45 3.45 0 0 0-.979 2.411c0 .597-.324 1.478-1.109 2.28ZM6.2 7H2.8a.8.8 0 0 0-.8.8v13.4a.8.8 0 0 0 .8.8h3.4a.8.8 0 0 0 .8-.8V7.8a.8.8 0 0 0-.8-.8Z"
}));
SvgSiThumbUpAlt1.displayName = "SvgSiThumbUpAlt1";
const ForwardRef$C = /*#__PURE__*/React.forwardRef(SvgSiThumbUpAlt1);
const Memo$C = /*#__PURE__*/React.memo(ForwardRef$C);

const SvgSiThumbUpAlt2 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M7 20h11.025c.357 0 .704-.118.99-.337s.499-.527.604-.88l2.307-7.756a1.78 1.78 0 0 0-.252-1.53 1.7 1.7 0 0 0-.59-.515 1.6 1.6 0 0 0-.75-.185h-5.833V5.349c0-2.045-1.043-3.01-2.304-3.326a.81.81 0 0 0-.712.164.9.9 0 0 0-.234.302.9.9 0 0 0-.084.378V6.21L7 11.382"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7 20h11.025c.357 0 .704-.118.99-.337s.499-.527.604-.88l2.307-7.756a1.78 1.78 0 0 0-.252-1.53 1.7 1.7 0 0 0-.59-.515 1.6 1.6 0 0 0-.75-.185h-5.833V5.349c0-2.045-1.043-3.01-2.304-3.326a.81.81 0 0 0-.712.164.9.9 0 0 0-.234.302.9.9 0 0 0-.084.378V6.21L7 11.382M2.8 9h3.4a.8.8 0 0 1 .8.8v10.4a.8.8 0 0 1-.8.8H2.8a.8.8 0 0 1-.8-.8V9.8a.8.8 0 0 1 .8-.8Z"
}));
SvgSiThumbUpAlt2.displayName = "SvgSiThumbUpAlt2";
const ForwardRef$B = /*#__PURE__*/React.forwardRef(SvgSiThumbUpAlt2);
const Memo$B = /*#__PURE__*/React.memo(ForwardRef$B);

const SvgSiTicket = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M22 9a3 3 0 1 0 0 6v4H2v-4a3 3 0 1 0 0-6V5h20zM8 9v6h8V9z",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M2 15a3 3 0 1 0 0-6V6.2A1.2 1.2 0 0 1 3.2 5h17.6A1.2 1.2 0 0 1 22 6.2V9a3 3 0 1 0 0 6v2.8a1.2 1.2 0 0 1-1.2 1.2H3.2A1.2 1.2 0 0 1 2 17.8z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 15V9h8v6z"
}));
SvgSiTicket.displayName = "SvgSiTicket";
const ForwardRef$A = /*#__PURE__*/React.forwardRef(SvgSiTicket);
const Memo$A = /*#__PURE__*/React.memo(ForwardRef$A);

const SvgSiTicketAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19 12a3 3 0 0 1 3-3V5H9v14h13v-4a3 3 0 0 1-3-3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9 5h11.8A1.2 1.2 0 0 1 22 6.2V9a3 3 0 1 0 0 6v2.8a1.2 1.2 0 0 1-1.2 1.2H9M9 5H3.2A1.2 1.2 0 0 0 2 6.2V9a3 3 0 1 1 0 6v2.8A1.2 1.2 0 0 0 3.2 19H9M9 5v14"
}));
SvgSiTicketAlt1.displayName = "SvgSiTicketAlt1";
const ForwardRef$z = /*#__PURE__*/React.forwardRef(SvgSiTicketAlt1);
const Memo$z = /*#__PURE__*/React.memo(ForwardRef$z);

const SvgSiToggleOff = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6m3 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M17 6H7a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
}));
SvgSiToggleOff.displayName = "SvgSiToggleOff";
const ForwardRef$y = /*#__PURE__*/React.forwardRef(SvgSiToggleOff);
const Memo$y = /*#__PURE__*/React.memo(ForwardRef$y);

const SvgSiToggleOn = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6m13 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M17 6H7a6 6 0 1 0 0 12h10a6 6 0 0 0 0-12Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M17 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
}));
SvgSiToggleOn.displayName = "SvgSiToggleOn";
const ForwardRef$x = /*#__PURE__*/React.forwardRef(SvgSiToggleOn);
const Memo$x = /*#__PURE__*/React.memo(ForwardRef$x);

const SvgSiTrafficCone = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M5 21 9.84 3.59c.1-.35.41-.59.77-.59h2.78c.36 0 .67.24.77.59L19 21"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M5 21 9.84 3.59c.1-.35.41-.59.77-.59h2.78c.36 0 .67.24.77.59L19 21M15.64 9.67c-1.18.22-2.4.33-3.64.33-1.32 0-2.6-.13-3.85-.37m9.09 5.84c-1.69.35-3.44.53-5.24.53s-3.63-.19-5.36-.55M2 21h20"
}));
SvgSiTrafficCone.displayName = "SvgSiTrafficCone";
const ForwardRef$w = /*#__PURE__*/React.forwardRef(SvgSiTrafficCone);
const Memo$w = /*#__PURE__*/React.memo(ForwardRef$w);

const SvgSiTrain = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 19a2.4 2.4 0 0 0 2.4-2.4V11H3v5.6A2.4 2.4 0 0 0 5.4 19z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 22h8M3 11h18M5.4 2h13.2A2.4 2.4 0 0 1 21 4.4v12.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 16.6V4.4A2.4 2.4 0 0 1 5.4 2M8 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
}));
SvgSiTrain.displayName = "SvgSiTrain";
const ForwardRef$v = /*#__PURE__*/React.forwardRef(SvgSiTrain);
const Memo$v = /*#__PURE__*/React.memo(ForwardRef$v);

const SvgSiTwitter = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M7.91 20.889c8.302 0 12.845-6.885 12.845-12.845 0-.193 0-.387-.009-.58A9.2 9.2 0 0 0 23 5.121a9.2 9.2 0 0 1-2.597.713 4.54 4.54 0 0 0 1.99-2.5 9 9 0 0 1-2.87 1.091A4.5 4.5 0 0 0 16.23 3a4.52 4.52 0 0 0-4.516 4.516c0 .352.044.696.114 1.03a12.82 12.82 0 0 1-9.305-4.718 4.526 4.526 0 0 0 1.4 6.03 4.6 4.6 0 0 1-2.043-.563v.061a4.524 4.524 0 0 0 3.62 4.428 4.4 4.4 0 0 1-1.189.159q-.435 0-.845-.08a4.51 4.51 0 0 0 4.217 3.135 9.05 9.05 0 0 1-5.608 1.936A9 9 0 0 1 1 18.873a12.84 12.84 0 0 0 6.91 2.016"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7.91 20.889c8.302 0 12.845-6.885 12.845-12.845 0-.193 0-.387-.009-.58A9.2 9.2 0 0 0 23 5.121a9.2 9.2 0 0 1-2.597.713 4.54 4.54 0 0 0 1.99-2.5 9 9 0 0 1-2.87 1.091A4.5 4.5 0 0 0 16.23 3a4.52 4.52 0 0 0-4.516 4.516c0 .352.044.696.114 1.03a12.82 12.82 0 0 1-9.305-4.718 4.526 4.526 0 0 0 1.4 6.03 4.6 4.6 0 0 1-2.043-.563v.061a4.524 4.524 0 0 0 3.62 4.428 4.4 4.4 0 0 1-1.189.159q-.435 0-.845-.08a4.51 4.51 0 0 0 4.217 3.135 9.05 9.05 0 0 1-5.608 1.936A9 9 0 0 1 1 18.873a12.84 12.84 0 0 0 6.91 2.016Z"
}));
SvgSiTwitter.displayName = "SvgSiTwitter";
const ForwardRef$u = /*#__PURE__*/React.forwardRef(SvgSiTwitter);
const Memo$u = /*#__PURE__*/React.memo(ForwardRef$u);

const SvgSiUnderline = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M18 3v9c0 3.3-2.7 6-6 6s-6-2.7-6-6V3M4 21h16M4 3h4m8 0h4"
}));
SvgSiUnderline.displayName = "SvgSiUnderline";
const ForwardRef$t = /*#__PURE__*/React.forwardRef(SvgSiUnderline);
const Memo$t = /*#__PURE__*/React.memo(ForwardRef$t);

const SvgSiUnfoldMore = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m9 15 3 3 3-3M9 9l3-3 3 3"
}));
SvgSiUnfoldMore.displayName = "SvgSiUnfoldMore";
const ForwardRef$s = /*#__PURE__*/React.forwardRef(SvgSiUnfoldMore);
const Memo$s = /*#__PURE__*/React.memo(ForwardRef$s);

const SvgSiUnlock = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M6.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 10V7a4 4 0 0 1 7.874-1M12 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 0v3m-5.4-8h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6"
}));
SvgSiUnlock.displayName = "SvgSiUnlock";
const ForwardRef$r = /*#__PURE__*/React.forwardRef(SvgSiUnlock);
const Memo$r = /*#__PURE__*/React.memo(ForwardRef$r);

const SvgSiUnlockAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  stroke: "currentColor",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M8 7c0-2.21 1.79-4 4-4s4 1.79 4 4v4M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6m8.4 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
}));
SvgSiUnlockAlt.displayName = "SvgSiUnlockAlt";
const ForwardRef$q = /*#__PURE__*/React.forwardRef(SvgSiUnlockAlt);
const Memo$q = /*#__PURE__*/React.memo(ForwardRef$q);

const SvgSiUnlockMuted = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M4.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-7c0-.88.72-1.6 1.6-1.6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M14 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3M4.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-7c0-.88.72-1.6 1.6-1.6"
}));
SvgSiUnlockMuted.displayName = "SvgSiUnlockMuted";
const ForwardRef$p = /*#__PURE__*/React.forwardRef(SvgSiUnlockMuted);
const Memo$p = /*#__PURE__*/React.memo(ForwardRef$p);

const SvgSiUpDown = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M12 3v18m0-18L8 7m4-4 4 4m-4 14-4-4m4 4 4-4"
}));
SvgSiUpDown.displayName = "SvgSiUpDown";
const ForwardRef$o = /*#__PURE__*/React.forwardRef(SvgSiUpDown);
const Memo$o = /*#__PURE__*/React.memo(ForwardRef$o);

const SvgSiUpTwoHeaded = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M12 20V4m0 0L8 8m4-4 4 4m-8 5 4-4 4 4"
}));
SvgSiUpTwoHeaded.displayName = "SvgSiUpTwoHeaded";
const ForwardRef$n = /*#__PURE__*/React.forwardRef(SvgSiUpTwoHeaded);
const Memo$n = /*#__PURE__*/React.memo(ForwardRef$n);

const SvgSiUser = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.523 21.99H4.488c-1.503 0-2.663-1.134-2.466-2.624l.114-.869c.207-1.2 1.305-1.955 2.497-2.214L11.928 15h.144l7.295 1.283c1.212.28 2.29.993 2.497 2.214l.114.88c.197 1.49-.963 2.623-2.466 2.623z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M19.523 21.99H4.488c-1.503 0-2.663-1.134-2.466-2.624l.114-.869c.207-1.2 1.305-1.955 2.497-2.214L11.928 15h.144l7.295 1.283c1.212.28 2.29.993 2.497 2.214l.114.88c.197 1.49-.963 2.623-2.466 2.623zM17 7A5 5 0 1 1 7 7a5 5 0 0 1 10 0"
}));
SvgSiUser.displayName = "SvgSiUser";
const ForwardRef$m = /*#__PURE__*/React.forwardRef(SvgSiUser);
const Memo$m = /*#__PURE__*/React.memo(ForwardRef$m);

const SvgSiUserAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20.4 22H3.6c-.88 0-1.6-.72-1.6-1.6v-4.65c0-.25 0-.38.12-.62.38-.88 1.5-1.62 3.25-2.25 1.25 2.38 3.75 4 6.62 4s5.38-1.62 6.62-4c1.75.62 2.88 1.38 3.25 2.25.12.12.12.38.12.62v4.65c0 .88-.72 1.6-1.6 1.6z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M20.4 22H3.6c-.88 0-1.6-.72-1.6-1.6v-4.65c0-.25 0-.38.12-.62.38-.88 1.5-1.62 3.25-2.25 1.25 2.38 3.75 4 6.62 4s5.38-1.62 6.62-4c1.75.62 2.88 1.38 3.25 2.25.12.12.12.38.12.62v4.65c0 .88-.72 1.6-1.6 1.6z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5"
}));
SvgSiUserAlt.displayName = "SvgSiUserAlt";
const ForwardRef$l = /*#__PURE__*/React.forwardRef(SvgSiUserAlt);
const Memo$l = /*#__PURE__*/React.memo(ForwardRef$l);

const SvgSiUserAlt2 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M8 6a4 4 0 1 1 8 0v1a4 4 0 0 1-8 0z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M21 22c0-4.418-3.626-8-8.1-8h-1.8C6.626 14 3 17.582 3 22m9-11a4 4 0 0 1-4-4V6a4 4 0 1 1 8 0v1a4 4 0 0 1-4 4"
}));
SvgSiUserAlt2.displayName = "SvgSiUserAlt2";
const ForwardRef$k = /*#__PURE__*/React.forwardRef(SvgSiUserAlt2);
const Memo$k = /*#__PURE__*/React.memo(ForwardRef$k);

const SvgSiUserAlt3 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("circle", {
  cx: 12,
  cy: 7,
  r: 4,
  fill: "currentColor",
  fillOpacity: 0.16
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M20 21v-4.6a2.4 2.4 0 0 0-2.4-2.4H6.4A2.4 2.4 0 0 0 4 16.4V21M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
}));
SvgSiUserAlt3.displayName = "SvgSiUserAlt3";
const ForwardRef$j = /*#__PURE__*/React.forwardRef(SvgSiUserAlt3);
const Memo$j = /*#__PURE__*/React.memo(ForwardRef$j);

const SvgSiUserAlt4 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 13a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M12 13a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9m4-7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
}));
SvgSiUserAlt4.displayName = "SvgSiUserAlt4";
const ForwardRef$i = /*#__PURE__*/React.forwardRef(SvgSiUserAlt4);
const Memo$i = /*#__PURE__*/React.memo(ForwardRef$i);

const SvgSiUserAlt5 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M20.4 22h-.02m0 0H3.6c-.88 0-1.6-.72-1.6-1.6v-3.65c0-.25 0-.38.12-.62.38-.88 1.5-1.62 3.25-2.25M20.38 22c.88 0 1.6-.72 1.6-1.6v-3.65c0-.24 0-.5-.12-.62-.37-.87-1.5-1.63-3.25-2.25M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5"
}));
SvgSiUserAlt5.displayName = "SvgSiUserAlt5";
const ForwardRef$h = /*#__PURE__*/React.forwardRef(SvgSiUserAlt5);
const Memo$h = /*#__PURE__*/React.memo(ForwardRef$h);

const SvgSiUserAlt6 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M5.4 21h13.2c.636 0 1.247-.24 1.697-.67.45-.428.703-1.01.703-1.616a5.58 5.58 0 0 0-1.757-4.04A6.16 6.16 0 0 0 15 13H9a6.16 6.16 0 0 0-4.243 1.674A5.58 5.58 0 0 0 3 18.714c0 .607.253 1.188.703 1.617.45.428 1.06.669 1.697.669",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M5.4 21h13.2c.636 0 1.247-.24 1.697-.67.45-.428.703-1.01.703-1.616a5.58 5.58 0 0 0-1.757-4.04A6.16 6.16 0 0 0 15 13H9a6.16 6.16 0 0 0-4.243 1.674A5.58 5.58 0 0 0 3 18.714c0 .607.253 1.188.703 1.617.45.428 1.06.669 1.697.669",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
}));
SvgSiUserAlt6.displayName = "SvgSiUserAlt6";
const ForwardRef$g = /*#__PURE__*/React.forwardRef(SvgSiUserAlt6);
const Memo$g = /*#__PURE__*/React.memo(ForwardRef$g);

const SvgSiVerified = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M22 12c0-1.395-.858-2.605-2.137-3.259.45-1.356.195-2.829-.79-3.814-.985-.986-2.458-1.24-3.815-.79C14.615 2.859 13.396 2 12 2s-2.605.859-3.249 2.137c-1.366-.45-2.839-.196-3.824.79-.986.985-1.23 2.458-.78 3.814C2.867 9.395 2 10.605 2 12s.868 2.605 2.146 3.258c-.448 1.357-.205 2.83.78 3.815.986.985 2.46 1.23 3.815.79C9.395 21.142 10.605 22 12 22s2.615-.858 3.258-2.137c1.357.44 2.83.195 3.815-.79s1.24-2.458.79-3.815C21.142 14.606 22 13.396 22 12"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m8 13 3 3 5-7m6 3c0-1.395-.858-2.605-2.137-3.259.45-1.356.195-2.829-.79-3.814-.985-.986-2.458-1.24-3.815-.79C14.615 2.859 13.396 2 12 2s-2.605.859-3.249 2.137c-1.366-.45-2.839-.196-3.824.79-.986.985-1.23 2.458-.78 3.814C2.867 9.395 2 10.605 2 12s.868 2.605 2.146 3.258c-.448 1.357-.205 2.83.78 3.815.986.985 2.46 1.23 3.815.79C9.395 21.142 10.605 22 12 22s2.615-.858 3.258-2.137c1.357.44 2.83.195 3.815-.79s1.24-2.458.79-3.815C21.142 14.606 22 13.396 22 12"
}));
SvgSiVerified.displayName = "SvgSiVerified";
const ForwardRef$f = /*#__PURE__*/React.forwardRef(SvgSiVerified);
const Memo$f = /*#__PURE__*/React.memo(ForwardRef$f);

const SvgSiVideo = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M11.6 6H3.4A2.4 2.4 0 0 0 1 8.4v7.2A2.4 2.4 0 0 0 3.4 18h8.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 11.6 6"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M11.6 6H3.4A2.4 2.4 0 0 0 1 8.4v7.2A2.4 2.4 0 0 0 3.4 18h8.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 11.6 6ZM23 6l-6 6 6 6z"
}));
SvgSiVideo.displayName = "SvgSiVideo";
const ForwardRef$e = /*#__PURE__*/React.forwardRef(SvgSiVideo);
const Memo$e = /*#__PURE__*/React.memo(ForwardRef$e);

const SvgSiViewCompact = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M19.6 5H4.4A2.4 2.4 0 0 0 2 7.4v10.2A2.4 2.4 0 0 0 4.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V7.4A2.4 2.4 0 0 0 19.6 5"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M7 19V4m5 15V4m5 15V4M2 9h20M2 14h20M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v10.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 16.6V6.4A2.4 2.4 0 0 1 4.4 4"
}));
SvgSiViewCompact.displayName = "SvgSiViewCompact";
const ForwardRef$d = /*#__PURE__*/React.forwardRef(SvgSiViewCompact);
const Memo$d = /*#__PURE__*/React.memo(ForwardRef$d);

const SvgSiViewStream = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M1 12h22M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4Z"
}));
SvgSiViewStream.displayName = "SvgSiViewStream";
const ForwardRef$c = /*#__PURE__*/React.forwardRef(SvgSiViewStream);
const Memo$c = /*#__PURE__*/React.memo(ForwardRef$c);

const SvgSiWallet = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V15h-4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4V6.4A2.4 2.4 0 0 0 18.6 4"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M21 9V6.4c0-1.325-.88-2.4-1.964-2.4H2.964C1.879 4 1 5.075 1 6.4v11.2c0 1.325.88 2.4 1.964 2.4h16.072C20.121 20 21 18.925 21 17.6V15m-1-3h.01M16.6 9h4.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-4.8a1.6 1.6 0 0 1-1.6-1.6v-2.8A1.6 1.6 0 0 1 16.6 9"
}));
SvgSiWallet.displayName = "SvgSiWallet";
const ForwardRef$b = /*#__PURE__*/React.forwardRef(SvgSiWallet);
const Memo$b = /*#__PURE__*/React.memo(ForwardRef$b);

const SvgSiWalletAlt = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M4.4 6h13.2C18.925 6 20 7.164 20 8.6v9.8c0 1.436-1.075 2.6-2.4 2.6H4.4C3.075 21 2 19.836 2 18.4V8.6C2 7.164 3.075 6 4.4 6M17 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M5 3h12.6C20.58 3 23 5.42 23 8.4V17M4.4 6h13.2C18.925 6 20 7.164 20 8.6v9.8c0 1.436-1.075 2.6-2.4 2.6H4.4C3.075 21 2 19.836 2 18.4V8.6C2 7.164 3.075 6 4.4 6M17 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
}));
SvgSiWalletAlt.displayName = "SvgSiWalletAlt";
const ForwardRef$a = /*#__PURE__*/React.forwardRef(SvgSiWalletAlt);
const Memo$a = /*#__PURE__*/React.memo(ForwardRef$a);

const SvgSiWalletDetailed = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 7H4.2C3.54 7 3 7.54 3 8.2v10.4C3 19.92 4.08 21 5.4 21h13.2c1.32 0 2.4-1.08 2.4-2.4V17h-6.286C13.767 17 13 16.284 13 15.4v-2.8c0-.884.768-1.6 1.714-1.6H21V9.4C21 8.08 19.92 7 18.6 7"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M3 8.5v-3m0 0C3 4.67 3.67 4 4.5 4l11.99-1C17.88 3 19 4.06 19 5.38V7H4.5C3.67 7 3 6.33 3 5.5M16 14h.01M4.2 7h14.4C19.92 7 21 8.08 21 9.4v9.2c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6V8.2C3 7.54 3.54 7 4.2 7m10.514 4H21v6h-6.286C13.767 17 13 16.284 13 15.4v-2.8c0-.884.768-1.6 1.714-1.6"
}));
SvgSiWalletDetailed.displayName = "SvgSiWalletDetailed";
const ForwardRef$9 = /*#__PURE__*/React.forwardRef(SvgSiWalletDetailed);
const Memo$9 = /*#__PURE__*/React.memo(ForwardRef$9);

const SvgSiWarning = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 16h.008M12 8v5m10-1c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
}));
SvgSiWarning.displayName = "SvgSiWarning";
const ForwardRef$8 = /*#__PURE__*/React.forwardRef(SvgSiWarning);
const Memo$8 = /*#__PURE__*/React.memo(ForwardRef$8);

const SvgSiWebcam = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M20 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 0v4m-6 0h12m-4-12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
}));
SvgSiWebcam.displayName = "SvgSiWebcam";
const ForwardRef$7 = /*#__PURE__*/React.forwardRef(SvgSiWebcam);
const Memo$7 = /*#__PURE__*/React.memo(ForwardRef$7);

const SvgSiWidget = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M9.2 14H3.8a.8.8 0 0 0-.8.8v5.4a.8.8 0 0 0 .8.8h5.4a.8.8 0 0 0 .8-.8v-5.4a.8.8 0 0 0-.8-.8m.938-7.566L7.027 3.323a.8.8 0 0 0-1.131 0L2.784 6.434a.8.8 0 0 0 0 1.132l3.112 3.11a.8.8 0 0 0 1.131 0l3.111-3.11a.8.8 0 0 0 0-1.132M17.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9.2 14H3.8a.8.8 0 0 0-.8.8v5.4a.8.8 0 0 0 .8.8h5.4a.8.8 0 0 0 .8-.8v-5.4a.8.8 0 0 0-.8-.8m.938-7.566L7.027 3.323a.8.8 0 0 0-1.131 0L2.784 6.434a.8.8 0 0 0 0 1.132l3.112 3.11a.8.8 0 0 0 1.131 0l3.111-3.11a.8.8 0 0 0 0-1.132M17.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.775-17.5c-.795 0-1.481.466-1.826 1.144-.345-.679-1.032-1.144-1.826-1.144-1.14 0-2.063.955-2.063 2.132 0 1.176.707 2.254 1.62 3.139s2.269 1.729 2.269 1.729 1.312-.83 2.269-1.729c1.021-.959 1.62-1.96 1.62-3.14 0-1.179-.923-2.131-2.063-2.131"
}));
SvgSiWidget.displayName = "SvgSiWidget";
const ForwardRef$6 = /*#__PURE__*/React.forwardRef(SvgSiWidget);
const Memo$6 = /*#__PURE__*/React.memo(ForwardRef$6);

const SvgSiWidgetAlt1 = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M6.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m13.7-7h-5.4a.8.8 0 0 0-.8.8v5.4a.8.8 0 0 0 .8.8h5.4a.8.8 0 0 0 .8-.8v-5.4a.8.8 0 0 0-.8-.8M2.5 10l4-7 4 7z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M19.275 3.5c-.795 0-1.481.466-1.826 1.144-.345-.679-1.032-1.144-1.826-1.144-1.14 0-2.063.955-2.063 2.132 0 1.176.707 2.254 1.62 3.139s2.269 1.729 2.269 1.729 1.312-.83 2.269-1.729c1.021-.959 1.62-1.96 1.62-3.14 0-1.179-.923-2.131-2.063-2.131M6.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m13.7-7h-5.4a.8.8 0 0 0-.8.8v5.4a.8.8 0 0 0 .8.8h5.4a.8.8 0 0 0 .8-.8v-5.4a.8.8 0 0 0-.8-.8M2.5 10l4-7 4 7z"
}));
SvgSiWidgetAlt1.displayName = "SvgSiWidgetAlt1";
const ForwardRef$5 = /*#__PURE__*/React.forwardRef(SvgSiWidgetAlt1);
const Memo$5 = /*#__PURE__*/React.memo(ForwardRef$5);

const SvgSiWindow = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M3 12h18m-9 9V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3"
}));
SvgSiWindow.displayName = "SvgSiWindow";
const ForwardRef$4 = /*#__PURE__*/React.forwardRef(SvgSiWindow);
const Memo$4 = /*#__PURE__*/React.memo(ForwardRef$4);

const SvgSiWrench = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M21.764 7.035c-.076-.282-.425-.36-.631-.154l-3.082 3.08a1.2 1.2 0 0 1-1.697 0l-2.32-2.32a1.2 1.2 0 0 1 0-1.698l3.08-3.075c.206-.207.129-.556-.153-.632a6.8 6.8 0 0 0-6.589 1.748c-2.04 2.04-2.502 5.044-1.416 7.536L3.7 16.768a2.4 2.4 0 0 0 0 3.396l.14.14a2.4 2.4 0 0 0 3.393 0l5.263-5.258c2.49 1.074 5.484.606 7.518-1.43 1.787-1.783 2.362-4.307 1.75-6.581"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M21.764 7.035c-.076-.282-.425-.36-.631-.154l-3.082 3.08a1.2 1.2 0 0 1-1.697 0l-2.32-2.32a1.2 1.2 0 0 1 0-1.698l3.08-3.075c.206-.207.129-.556-.153-.632a6.8 6.8 0 0 0-6.589 1.748c-2.04 2.04-2.502 5.044-1.416 7.536L3.7 16.768a2.4 2.4 0 0 0 0 3.396l.14.14a2.4 2.4 0 0 0 3.393 0l5.263-5.258c2.49 1.074 5.484.606 7.518-1.43 1.787-1.783 2.362-4.307 1.75-6.581"
}));
SvgSiWrench.displayName = "SvgSiWrench";
const ForwardRef$3 = /*#__PURE__*/React.forwardRef(SvgSiWrench);
const Memo$3 = /*#__PURE__*/React.memo(ForwardRef$3);

const SvgSiYouTube = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  fillRule: "evenodd",
  d: "M22.54 6.42a2.77 2.77 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.77 2.77 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.77 2.77 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.77 2.77 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33M9.75 8.479v6.542l5.75-3.271z",
  clipRule: "evenodd"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M20.595 4.463A2.77 2.77 0 0 1 22.54 6.42c.46 1.728.46 5.33.46 5.33s0 3.604-.46 5.33a2.77 2.77 0 0 1-1.945 1.958C18.88 19.5 12 19.5 12 19.5s-6.879 0-8.595-.462A2.77 2.77 0 0 1 1.46 17.08C1 15.353 1 11.75 1 11.75s0-3.602.46-5.33a2.77 2.77 0 0 1 1.945-1.957C5.12 4 12 4 12 4s6.88 0 8.595.463Z"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "M9.75 15.021V8.48l5.75 3.271z"
}));
SvgSiYouTube.displayName = "SvgSiYouTube";
const ForwardRef$2 = /*#__PURE__*/React.forwardRef(SvgSiYouTube);
const Memo$2 = /*#__PURE__*/React.memo(ForwardRef$2);

const SvgSiZoomIn = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m21 21-4-4m-9-6h6m-3 3V8m8 3a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
}));
SvgSiZoomIn.displayName = "SvgSiZoomIn";
const ForwardRef$1 = /*#__PURE__*/React.forwardRef(SvgSiZoomIn);
const Memo$1 = /*#__PURE__*/React.memo(ForwardRef$1);

const SvgSiZoomOut = ({
  title,
  titleId,
  ...props
}, ref) => /*#__PURE__*/React__namespace.createElement("svg", _extends({
  width: "1em",
  height: "1em",
  fill: "none",
  viewBox: "0 0 24 24",
  "aria-hidden": !title,
  ref: ref,
  "aria-labelledby": titleId
}, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
  id: titleId
}, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
  fill: "currentColor",
  fillOpacity: 0.16,
  d: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
}), /*#__PURE__*/React__namespace.createElement("path", {
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeWidth: 1.5,
  d: "m21 21-4-4m-9-6h6m5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
}));
SvgSiZoomOut.displayName = "SvgSiZoomOut";
const ForwardRef = /*#__PURE__*/React.forwardRef(SvgSiZoomOut);
const Memo = /*#__PURE__*/React.memo(ForwardRef);

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SiActions: Memo$6a,
  SiActivity: Memo$69,
  SiAdd: Memo$68,
  SiAddAlarm: Memo$67,
  SiAddCircle: Memo$66,
  SiAddSquare: Memo$65,
  SiAddToLibrary: Memo$64,
  SiAddToPlaylist: Memo$63,
  SiAi: Memo$6C,
  SiAiAlt1: Memo$6B,
  SiAiAlt2: Memo$6A,
  SiAiArchive: Memo$6z,
  SiAiBriefcase: Memo$6y,
  SiAiChat: Memo$6x,
  SiAiChecklist: Memo$6w,
  SiAiEdit: Memo$6v,
  SiAiEditAlt1: Memo$6u,
  SiAiEditAlt2: Memo$6t,
  SiAiFact: Memo$6s,
  SiAiFactAlt1: Memo$6r,
  SiAiInventory: Memo$6q,
  SiAiLock: Memo$6p,
  SiAiMonitor: Memo$6o,
  SiAiNote: Memo$6n,
  SiAiNoteAlt1: Memo$6m,
  SiAiPhone: Memo$6l,
  SiAiPhoneAlt1: Memo$6k,
  SiAiScan: Memo$6j,
  SiAiSearch: Memo$6i,
  SiAiShield: Memo$6h,
  SiAiSmartphone: Memo$6g,
  SiAiSort: Memo$6f,
  SiAiSortAlt1: Memo$6e,
  SiAiSummarize: Memo$6d,
  SiAiSummarizeAlt: Memo$6c,
  SiAiUnlock: Memo$6b,
  SiAirplane: Memo$62,
  SiAirplaneAlt: Memo$61,
  SiAlbum: Memo$60,
  SiAlert: Memo$5$,
  SiAlignBottomDetailed: Memo$5_,
  SiAlignBottomSimple: Memo$5Z,
  SiAlignCenter: Memo$5Y,
  SiAlignHorizCenterDetailed: Memo$5X,
  SiAlignHorizCenterSimple: Memo$5W,
  SiAlignJustify: Memo$5V,
  SiAlignLeft: Memo$5U,
  SiAlignLeftDetailed: Memo$5T,
  SiAlignLeftSimple: Memo$5S,
  SiAlignRight: Memo$5R,
  SiAlignRightDetailed: Memo$5Q,
  SiAlignRightSimple: Memo$5P,
  SiAlignTopDetailed: Memo$5O,
  SiAlignTopSimple: Memo$5N,
  SiAlignVertCenterDetailed: Memo$5M,
  SiAlignVertCenterSimple: Memo$5L,
  SiApple: Memo$5K,
  SiArchive: Memo$5J,
  SiArchiveAlt: Memo$5I,
  SiArrowDownward: Memo$5H,
  SiArrowDownwardCircle: Memo$5G,
  SiArrowDownwardSquare: Memo$5F,
  SiArrowLeft: Memo$5E,
  SiArrowLeftCircle: Memo$5D,
  SiArrowLeftSquare: Memo$5C,
  SiArrowRight: Memo$5B,
  SiArrowRightCircle: Memo$5A,
  SiArrowRightSquare: Memo$5z,
  SiArrowUpward: Memo$5y,
  SiArrowUpwardCircle: Memo$5x,
  SiArrowUpwardSquare: Memo$5w,
  SiArticle: Memo$5v,
  SiAssignment: Memo$5u,
  SiAttachment: Memo$5t,
  SiBallot: Memo$5s,
  SiBarChart: Memo$5r,
  SiBarcode: Memo$5q,
  SiBarcodeScan: Memo$5p,
  SiBarcodeScanAlt: Memo$5o,
  SiBarn: Memo$5n,
  SiBin: Memo$5m,
  SiBluetooth: Memo$5l,
  SiBold: Memo$5k,
  SiBook: Memo$5j,
  SiBookmark: Memo$5i,
  SiBriefcase: Memo$5h,
  SiBriefcaseDetailed: Memo$5g,
  SiBriefcaseMedical: Memo$5f,
  SiBriefcases: Memo$5e,
  SiBuilding: Memo$5d,
  SiBuildingAlt1: Memo$5c,
  SiBuildingAlt2: Memo$5b,
  SiBuildingAlt3: Memo$5a,
  SiBus: Memo$59,
  SiCancelPhoto: Memo$58,
  SiCancelPresentation: Memo$57,
  SiCastle: Memo$56,
  SiCastleAlt1: Memo$55,
  SiChat: Memo$54,
  SiChatText: Memo$53,
  SiCheck: Memo$52,
  SiCheckAlt: Memo$51,
  SiCheckCircle: Memo$50,
  SiCheckSquare: Memo$4$,
  SiChecklist: Memo$4_,
  SiChecklistAlt: Memo$4Z,
  SiChevronLeft: Memo$4Y,
  SiChevronLeftAlt: Memo$4X,
  SiChevronLeftCircle: Memo$4W,
  SiChevronLeftSquare: Memo$4V,
  SiChevronRight: Memo$4U,
  SiChevronRightAlt: Memo$4T,
  SiChevronRightCircle: Memo$4S,
  SiChevronRightSquare: Memo$4R,
  SiCity: Memo$4Q,
  SiClearAll: Memo$4P,
  SiClearDay: Memo$4O,
  SiClick: Memo$4N,
  SiClipboard: Memo$4M,
  SiClipboardAlt: Memo$4L,
  SiClipboardCheck: Memo$4K,
  SiClipboardCheckAlt: Memo$4J,
  SiClipboardFilled: Memo$4I,
  SiClipboardFilledAlt: Memo$4H,
  SiClock: Memo$4G,
  SiClockAlt: Memo$4F,
  SiClose: Memo$4E,
  SiCloseCircle: Memo$4D,
  SiCloseSquare: Memo$4C,
  SiCloud: Memo$4B,
  SiCode: Memo$4A,
  SiCodeMuted: Memo$4z,
  SiColumns: Memo$4y,
  SiCopy: Memo$4x,
  SiCopyAlt: Memo$4w,
  SiCopyright: Memo$4v,
  SiCopyrightAlt: Memo$4u,
  SiCreditCard: Memo$4t,
  SiCreditCardDetailed: Memo$4s,
  SiCreditCardDetailedAlt: Memo$4r,
  SiCrop: Memo$4q,
  SiCrosshairDetailed: Memo$4p,
  SiCrosshairSimple: Memo$4o,
  SiDangerous: Memo$4n,
  SiDashboard: Memo$4m,
  SiDashboardCustomize: Memo$4l,
  SiDashboardHorz: Memo$4k,
  SiDashboardVert: Memo$4j,
  SiDeleteAlarm: Memo$4i,
  SiDiamondsFour: Memo$4h,
  SiDirection: Memo$4g,
  SiDirectionAlt: Memo$4f,
  SiDollar: Memo$4e,
  SiDollarAlt1: Memo$4d,
  SiDollarAlt2: Memo$4c,
  SiDoubleArrowRight: Memo$4b,
  SiDownLeft: Memo$4a,
  SiDownRight: Memo$49,
  SiDownTwoHeaded: Memo$48,
  SiDownloadOffline: Memo$47,
  SiDragHandle: Memo$46,
  SiDragIndicator: Memo$45,
  SiDragIndicatorAlt: Memo$44,
  SiEditDetailed: Memo$43,
  SiEditDetailedAlt: Memo$42,
  SiEditSimple: Memo$41,
  SiEject: Memo$40,
  SiEmoji: Memo$3$,
  SiEmojiAlt: Memo$3_,
  SiEqualizer: Memo$3Z,
  SiError: Memo$3Y,
  SiExpandLess: Memo$3X,
  SiExpandLessAlt: Memo$3W,
  SiExpandLessCircle: Memo$3V,
  SiExpandLessSquare: Memo$3U,
  SiExpandMore: Memo$3T,
  SiExpandMoreAlt: Memo$3S,
  SiExpandMoreCircle: Memo$3R,
  SiExpandMoreSquare: Memo$3Q,
  SiFactCheck: Memo$3P,
  SiFeaturedPlaylist: Memo$3O,
  SiFileDownload: Memo$3N,
  SiFileUpload: Memo$3M,
  SiFilterList: Memo$3L,
  SiFilterListAlt: Memo$3K,
  SiFilterNone: Memo$3J,
  SiFlag: Memo$3I,
  SiFlagAlt1: Memo$3H,
  SiFlagAlt2: Memo$3G,
  SiFlagAlt3: Memo$3F,
  SiFlagAlt4: Memo$3E,
  SiFlare: Memo$3D,
  SiFlowLine: Memo$3C,
  SiFlowParallel: Memo$3B,
  SiGarage: Memo$3A,
  SiGlobeDetailed: Memo$3z,
  SiGrid: Memo$3y,
  SiGridOn: Memo$3x,
  SiGridView: Memo$3w,
  SiHammer: Memo$3v,
  SiHammerAlt: Memo$3u,
  SiHeart: Memo$3t,
  SiHeartAlt: Memo$3s,
  SiHelp: Memo$3r,
  SiHome: Memo$3q,
  SiHomeDetailed: Memo$3p,
  SiHospital: Memo$3o,
  SiHospitalAlt1: Memo$3n,
  SiHourglass: Memo$3m,
  SiInflight: Memo$3l,
  SiInfo: Memo$3k,
  SiInput: Memo$3j,
  SiInsights: Memo$3i,
  SiInventory: Memo$3h,
  SiItalic: Memo$3g,
  SiJson: Memo$3f,
  SiJsonAlt1: Memo$3e,
  SiJsonAlt2: Memo$3d,
  SiJsonAlt3: Memo$3c,
  SiJsonAlt4: Memo$3b,
  SiJsonAlt5: Memo$3a,
  SiKey: Memo$39,
  SiKeypad: Memo$38,
  SiKnob: Memo$37,
  SiLamp: Memo$36,
  SiLanding: Memo$35,
  SiLayers: Memo$34,
  SiLeftDown: Memo$33,
  SiLeftRight: Memo$32,
  SiLeftTwoHeaded: Memo$31,
  SiLeftUp: Memo$30,
  SiLibraryBooks: Memo$2$,
  SiLightMode: Memo$2_,
  SiLightning: Memo$2Z,
  SiLock: Memo$2Y,
  SiLockAlt: Memo$2X,
  SiLockMuted: Memo$2W,
  SiMail: Memo$2V,
  SiMap: Memo$2U,
  SiMemory: Memo$2T,
  SiMeter: Memo$2S,
  SiMic: Memo$2R,
  SiMicDetailed: Memo$2Q,
  SiMoney: Memo$2P,
  SiMonitor: Memo$2O,
  SiMonitorCheck: Memo$2N,
  SiMonitorClose: Memo$2M,
  SiMonitorDown: Memo$2L,
  SiMonitorPause: Memo$2K,
  SiMonitorPlay: Memo$2J,
  SiMonitorStop: Memo$2I,
  SiMonitorUp: Memo$2H,
  SiMoon: Memo$2G,
  SiMoreHoriz: Memo$2F,
  SiMoreHorizCircle: Memo$2E,
  SiMoreHorizSquare: Memo$2D,
  SiMoreMutedHoriz: Memo$2C,
  SiMoreMutedHorizCircle: Memo$2B,
  SiMoreMutedHorizSquare: Memo$2A,
  SiMoreMutedVert: Memo$2z,
  SiMoreMutedVertCircle: Memo$2y,
  SiMoreMutedVertSquare: Memo$2x,
  SiMoreSquareHoriz: Memo$2w,
  SiMoreSquareVert: Memo$2v,
  SiMoreVert: Memo$2u,
  SiMoreVertCircle: Memo$2t,
  SiMoreVertSquare: Memo$2s,
  SiMove: Memo$2r,
  SiMovie: Memo$2q,
  SiNorthEast: Memo$2p,
  SiNorthEastCircle: Memo$2o,
  SiNorthEastEscape: Memo$2n,
  SiNorthEastEscapeAlt: Memo$2m,
  SiNorthEastSquare: Memo$2l,
  SiNorthWest: Memo$2k,
  SiNorthWestCircle: Memo$2j,
  SiNorthWestEscape: Memo$2i,
  SiNorthWestEscapeAlt: Memo$2h,
  SiNorthWestSquare: Memo$2g,
  SiNortheastSouthwest: Memo$2f,
  SiNorthwestSoutheast: Memo$2e,
  SiNotifications: Memo$2d,
  SiNotificationsAlt: Memo$2c,
  SiNotificationsAlt2: Memo$2b,
  SiNotificationsThick: Memo$2a,
  SiOctagon: Memo$29,
  SiOctagonCheck: Memo$28,
  SiPause: Memo$27,
  SiPausePresentation: Memo$26,
  SiPentagon: Memo$25,
  SiPhone: Memo$24,
  SiPhoneAddCall: Memo$23,
  SiPhoneCallback: Memo$22,
  SiPhoneEnabled: Memo$21,
  SiPhoneForwarded: Memo$20,
  SiPhoneLocked: Memo$1$,
  SiPhonePaused: Memo$1_,
  SiPieChart: Memo$1Z,
  SiPin: Memo$1Y,
  SiPinAlt1: Memo$1X,
  SiPinAlt2: Memo$1W,
  SiPlay: Memo$1V,
  SiPlayForward: Memo$1U,
  SiPlayNext: Memo$1T,
  SiPlayPrevious: Memo$1S,
  SiPlayRewind: Memo$1R,
  SiProjects: Memo$1Q,
  SiProjectsAlt: Memo$1P,
  SiPullRequest: Memo$1O,
  SiQuote: Memo$1N,
  SiRecord: Memo$1M,
  SiReleaseNotes: Memo$1L,
  SiRemove: Memo$1K,
  SiRemoveAlarm: Memo$1J,
  SiRemoveCircle: Memo$1I,
  SiRemoveFromLibrary: Memo$1H,
  SiRemoveSquare: Memo$1G,
  SiReorder: Memo$1F,
  SiReorderAlt: Memo$1E,
  SiRightTwoHeaded: Memo$1D,
  SiRocket: Memo$1C,
  SiRupee: Memo$1B,
  SiSearch: Memo$1A,
  SiSearchAlt: Memo$1z,
  SiSegment: Memo$1y,
  SiSettings: Memo$1x,
  SiSettingsAlt: Memo$1w,
  SiSettingsAlt2: Memo$1v,
  SiSettingsApplications: Memo$1u,
  SiSettingsCute: Memo$1t,
  SiSettingsThick: Memo$1s,
  SiShield: Memo$1r,
  SiShieldAlert: Memo$1q,
  SiShieldBad: Memo$1p,
  SiShieldHealthSafety: Memo$1o,
  SiShieldPolice: Memo$1n,
  SiShieldSecurity: Memo$1m,
  SiShieldTip: Memo$1l,
  SiShieldVerified: Memo$1k,
  SiSignIn: Memo$1j,
  SiSignInAlt: Memo$1i,
  SiSignOut: Memo$1h,
  SiSignOutAlt: Memo$1g,
  SiSmartPhone: Memo$1f,
  SiSort: Memo$1e,
  SiSortAlt: Memo$1d,
  SiSouthEast: Memo$1c,
  SiSouthEastCircle: Memo$1b,
  SiSouthEastEscape: Memo$1a,
  SiSouthEastEscapeAlt: Memo$19,
  SiSouthEastSquare: Memo$18,
  SiSouthWest: Memo$17,
  SiSouthWestCircle: Memo$16,
  SiSouthWestEscape: Memo$15,
  SiSouthWestEscapeAlt: Memo$14,
  SiSouthWestSquare: Memo$13,
  SiSpark: Memo$12,
  SiSpinner: Memo$11,
  SiSquare: Memo$10,
  SiStar: Memo$$,
  SiStarAlt: Memo$_,
  SiStop: Memo$Z,
  SiStopCircle: Memo$Y,
  SiStreetSign: Memo$X,
  SiStrikethrough: Memo$W,
  SiSun: Memo$V,
  SiSunSet: Memo$U,
  SiSunnySnowing: Memo$T,
  SiSwapHoriz: Memo$S,
  SiSwapVert: Memo$R,
  SiSwatch: Memo$Q,
  SiTable: Memo$P,
  SiTableColumns: Memo$O,
  SiTableRows: Memo$N,
  SiTakeoff: Memo$M,
  SiTarget: Memo$L,
  SiTaxiing: Memo$K,
  SiTerminal: Memo$J,
  SiTerminalAlt: Memo$I,
  SiText: Memo$H,
  SiThumbDown: Memo$G,
  SiThumbDownAlt1: Memo$F,
  SiThumbDownAlt2: Memo$E,
  SiThumbUp: Memo$D,
  SiThumbUpAlt1: Memo$C,
  SiThumbUpAlt2: Memo$B,
  SiTicket: Memo$A,
  SiTicketAlt1: Memo$z,
  SiToggleOff: Memo$y,
  SiToggleOn: Memo$x,
  SiTrafficCone: Memo$w,
  SiTrain: Memo$v,
  SiTwitter: Memo$u,
  SiUnderline: Memo$t,
  SiUnfoldMore: Memo$s,
  SiUnlock: Memo$r,
  SiUnlockAlt: Memo$q,
  SiUnlockMuted: Memo$p,
  SiUpDown: Memo$o,
  SiUpTwoHeaded: Memo$n,
  SiUser: Memo$m,
  SiUserAlt: Memo$l,
  SiUserAlt2: Memo$k,
  SiUserAlt3: Memo$j,
  SiUserAlt4: Memo$i,
  SiUserAlt5: Memo$h,
  SiUserAlt6: Memo$g,
  SiVerified: Memo$f,
  SiVideo: Memo$e,
  SiViewCompact: Memo$d,
  SiViewStream: Memo$c,
  SiWallet: Memo$b,
  SiWalletAlt: Memo$a,
  SiWalletDetailed: Memo$9,
  SiWarning: Memo$8,
  SiWebcam: Memo$7,
  SiWidget: Memo$6,
  SiWidgetAlt1: Memo$5,
  SiWindow: Memo$4,
  SiWrench: Memo$3,
  SiYouTube: Memo$2,
  SiZoomIn: Memo$1,
  SiZoomOut: Memo
});

exports.Memo = Memo$6C;
exports.Memo$1 = Memo$6B;
exports.Memo$10 = Memo$6s;
exports.Memo$100 = Memo$52;
exports.Memo$101 = Memo$51;
exports.Memo$102 = Memo$50;
exports.Memo$103 = Memo$4$;
exports.Memo$104 = Memo$4_;
exports.Memo$105 = Memo$4Z;
exports.Memo$106 = Memo$4Y;
exports.Memo$107 = Memo$4X;
exports.Memo$108 = Memo$4W;
exports.Memo$109 = Memo$4V;
exports.Memo$11 = Memo$6r;
exports.Memo$110 = Memo$4U;
exports.Memo$111 = Memo$4T;
exports.Memo$112 = Memo$4S;
exports.Memo$113 = Memo$4R;
exports.Memo$114 = Memo$4Q;
exports.Memo$115 = Memo$4P;
exports.Memo$116 = Memo$4O;
exports.Memo$117 = Memo$4N;
exports.Memo$118 = Memo$4M;
exports.Memo$119 = Memo$4L;
exports.Memo$12 = Memo$6q;
exports.Memo$120 = Memo$4K;
exports.Memo$121 = Memo$4J;
exports.Memo$122 = Memo$4I;
exports.Memo$123 = Memo$4H;
exports.Memo$124 = Memo$4G;
exports.Memo$125 = Memo$4F;
exports.Memo$126 = Memo$4E;
exports.Memo$127 = Memo$4D;
exports.Memo$128 = Memo$4C;
exports.Memo$129 = Memo$4B;
exports.Memo$13 = Memo$6p;
exports.Memo$130 = Memo$4A;
exports.Memo$131 = Memo$4z;
exports.Memo$132 = Memo$4y;
exports.Memo$133 = Memo$4x;
exports.Memo$134 = Memo$4w;
exports.Memo$135 = Memo$4v;
exports.Memo$136 = Memo$4u;
exports.Memo$137 = Memo$4t;
exports.Memo$138 = Memo$4s;
exports.Memo$139 = Memo$4r;
exports.Memo$14 = Memo$6o;
exports.Memo$140 = Memo$4q;
exports.Memo$141 = Memo$4p;
exports.Memo$142 = Memo$4o;
exports.Memo$143 = Memo$4n;
exports.Memo$144 = Memo$4m;
exports.Memo$145 = Memo$4l;
exports.Memo$146 = Memo$4k;
exports.Memo$147 = Memo$4j;
exports.Memo$148 = Memo$4i;
exports.Memo$149 = Memo$4h;
exports.Memo$15 = Memo$6n;
exports.Memo$150 = Memo$4g;
exports.Memo$151 = Memo$4f;
exports.Memo$152 = Memo$4e;
exports.Memo$153 = Memo$4d;
exports.Memo$154 = Memo$4c;
exports.Memo$155 = Memo$4b;
exports.Memo$156 = Memo$4a;
exports.Memo$157 = Memo$49;
exports.Memo$158 = Memo$48;
exports.Memo$159 = Memo$47;
exports.Memo$16 = Memo$6m;
exports.Memo$160 = Memo$46;
exports.Memo$161 = Memo$45;
exports.Memo$162 = Memo$44;
exports.Memo$163 = Memo$43;
exports.Memo$164 = Memo$42;
exports.Memo$165 = Memo$41;
exports.Memo$166 = Memo$40;
exports.Memo$167 = Memo$3$;
exports.Memo$168 = Memo$3_;
exports.Memo$169 = Memo$3Z;
exports.Memo$17 = Memo$6l;
exports.Memo$170 = Memo$3Y;
exports.Memo$171 = Memo$3X;
exports.Memo$172 = Memo$3W;
exports.Memo$173 = Memo$3V;
exports.Memo$174 = Memo$3U;
exports.Memo$175 = Memo$3T;
exports.Memo$176 = Memo$3S;
exports.Memo$177 = Memo$3R;
exports.Memo$178 = Memo$3Q;
exports.Memo$179 = Memo$3P;
exports.Memo$18 = Memo$6k;
exports.Memo$180 = Memo$3O;
exports.Memo$181 = Memo$3N;
exports.Memo$182 = Memo$3M;
exports.Memo$183 = Memo$3L;
exports.Memo$184 = Memo$3K;
exports.Memo$185 = Memo$3J;
exports.Memo$186 = Memo$3I;
exports.Memo$187 = Memo$3H;
exports.Memo$188 = Memo$3G;
exports.Memo$189 = Memo$3F;
exports.Memo$19 = Memo$6j;
exports.Memo$190 = Memo$3E;
exports.Memo$191 = Memo$3D;
exports.Memo$192 = Memo$3C;
exports.Memo$193 = Memo$3B;
exports.Memo$194 = Memo$3A;
exports.Memo$195 = Memo$3z;
exports.Memo$196 = Memo$3y;
exports.Memo$197 = Memo$3x;
exports.Memo$198 = Memo$3w;
exports.Memo$199 = Memo$3v;
exports.Memo$2 = Memo$6A;
exports.Memo$20 = Memo$6i;
exports.Memo$200 = Memo$3u;
exports.Memo$201 = Memo$3t;
exports.Memo$202 = Memo$3s;
exports.Memo$203 = Memo$3r;
exports.Memo$204 = Memo$3q;
exports.Memo$205 = Memo$3p;
exports.Memo$206 = Memo$3o;
exports.Memo$207 = Memo$3n;
exports.Memo$208 = Memo$3m;
exports.Memo$209 = Memo$3l;
exports.Memo$21 = Memo$6h;
exports.Memo$210 = Memo$3k;
exports.Memo$211 = Memo$3j;
exports.Memo$212 = Memo$3i;
exports.Memo$213 = Memo$3h;
exports.Memo$214 = Memo$3g;
exports.Memo$215 = Memo$3f;
exports.Memo$216 = Memo$3e;
exports.Memo$217 = Memo$3d;
exports.Memo$218 = Memo$3c;
exports.Memo$219 = Memo$3b;
exports.Memo$22 = Memo$6g;
exports.Memo$220 = Memo$3a;
exports.Memo$221 = Memo$39;
exports.Memo$222 = Memo$38;
exports.Memo$223 = Memo$37;
exports.Memo$224 = Memo$36;
exports.Memo$225 = Memo$35;
exports.Memo$226 = Memo$34;
exports.Memo$227 = Memo$33;
exports.Memo$228 = Memo$32;
exports.Memo$229 = Memo$31;
exports.Memo$23 = Memo$6f;
exports.Memo$230 = Memo$30;
exports.Memo$231 = Memo$2$;
exports.Memo$232 = Memo$2_;
exports.Memo$233 = Memo$2Z;
exports.Memo$234 = Memo$2Y;
exports.Memo$235 = Memo$2X;
exports.Memo$236 = Memo$2W;
exports.Memo$237 = Memo$2V;
exports.Memo$238 = Memo$2U;
exports.Memo$239 = Memo$2T;
exports.Memo$24 = Memo$6e;
exports.Memo$240 = Memo$2S;
exports.Memo$241 = Memo$2R;
exports.Memo$242 = Memo$2Q;
exports.Memo$243 = Memo$2P;
exports.Memo$244 = Memo$2O;
exports.Memo$245 = Memo$2N;
exports.Memo$246 = Memo$2M;
exports.Memo$247 = Memo$2L;
exports.Memo$248 = Memo$2K;
exports.Memo$249 = Memo$2J;
exports.Memo$25 = Memo$6d;
exports.Memo$250 = Memo$2I;
exports.Memo$251 = Memo$2H;
exports.Memo$252 = Memo$2G;
exports.Memo$253 = Memo$2F;
exports.Memo$254 = Memo$2E;
exports.Memo$255 = Memo$2D;
exports.Memo$256 = Memo$2C;
exports.Memo$257 = Memo$2B;
exports.Memo$258 = Memo$2A;
exports.Memo$259 = Memo$2z;
exports.Memo$26 = Memo$6c;
exports.Memo$260 = Memo$2y;
exports.Memo$261 = Memo$2x;
exports.Memo$262 = Memo$2w;
exports.Memo$263 = Memo$2v;
exports.Memo$264 = Memo$2u;
exports.Memo$265 = Memo$2t;
exports.Memo$266 = Memo$2s;
exports.Memo$267 = Memo$2r;
exports.Memo$268 = Memo$2q;
exports.Memo$269 = Memo$2p;
exports.Memo$27 = Memo$6b;
exports.Memo$270 = Memo$2o;
exports.Memo$271 = Memo$2n;
exports.Memo$272 = Memo$2m;
exports.Memo$273 = Memo$2l;
exports.Memo$274 = Memo$2k;
exports.Memo$275 = Memo$2j;
exports.Memo$276 = Memo$2i;
exports.Memo$277 = Memo$2h;
exports.Memo$278 = Memo$2g;
exports.Memo$279 = Memo$2f;
exports.Memo$28 = Memo$6a;
exports.Memo$280 = Memo$2e;
exports.Memo$281 = Memo$2d;
exports.Memo$282 = Memo$2c;
exports.Memo$283 = Memo$2b;
exports.Memo$284 = Memo$2a;
exports.Memo$285 = Memo$29;
exports.Memo$286 = Memo$28;
exports.Memo$287 = Memo$27;
exports.Memo$288 = Memo$26;
exports.Memo$289 = Memo$25;
exports.Memo$29 = Memo$69;
exports.Memo$290 = Memo$24;
exports.Memo$291 = Memo$23;
exports.Memo$292 = Memo$22;
exports.Memo$293 = Memo$21;
exports.Memo$294 = Memo$20;
exports.Memo$295 = Memo$1$;
exports.Memo$296 = Memo$1_;
exports.Memo$297 = Memo$1Z;
exports.Memo$298 = Memo$1Y;
exports.Memo$299 = Memo$1X;
exports.Memo$3 = Memo$6z;
exports.Memo$30 = Memo$68;
exports.Memo$300 = Memo$1W;
exports.Memo$301 = Memo$1V;
exports.Memo$302 = Memo$1U;
exports.Memo$303 = Memo$1T;
exports.Memo$304 = Memo$1S;
exports.Memo$305 = Memo$1R;
exports.Memo$306 = Memo$1Q;
exports.Memo$307 = Memo$1P;
exports.Memo$308 = Memo$1O;
exports.Memo$309 = Memo$1N;
exports.Memo$31 = Memo$67;
exports.Memo$310 = Memo$1M;
exports.Memo$311 = Memo$1L;
exports.Memo$312 = Memo$1K;
exports.Memo$313 = Memo$1J;
exports.Memo$314 = Memo$1I;
exports.Memo$315 = Memo$1H;
exports.Memo$316 = Memo$1G;
exports.Memo$317 = Memo$1F;
exports.Memo$318 = Memo$1E;
exports.Memo$319 = Memo$1D;
exports.Memo$32 = Memo$66;
exports.Memo$320 = Memo$1C;
exports.Memo$321 = Memo$1B;
exports.Memo$322 = Memo$1A;
exports.Memo$323 = Memo$1z;
exports.Memo$324 = Memo$1y;
exports.Memo$325 = Memo$1x;
exports.Memo$326 = Memo$1w;
exports.Memo$327 = Memo$1v;
exports.Memo$328 = Memo$1u;
exports.Memo$329 = Memo$1t;
exports.Memo$33 = Memo$65;
exports.Memo$330 = Memo$1s;
exports.Memo$331 = Memo$1r;
exports.Memo$332 = Memo$1q;
exports.Memo$333 = Memo$1p;
exports.Memo$334 = Memo$1o;
exports.Memo$335 = Memo$1n;
exports.Memo$336 = Memo$1m;
exports.Memo$337 = Memo$1l;
exports.Memo$338 = Memo$1k;
exports.Memo$339 = Memo$1j;
exports.Memo$34 = Memo$64;
exports.Memo$340 = Memo$1i;
exports.Memo$341 = Memo$1h;
exports.Memo$342 = Memo$1g;
exports.Memo$343 = Memo$1f;
exports.Memo$344 = Memo$1e;
exports.Memo$345 = Memo$1d;
exports.Memo$346 = Memo$1c;
exports.Memo$347 = Memo$1b;
exports.Memo$348 = Memo$1a;
exports.Memo$349 = Memo$19;
exports.Memo$35 = Memo$63;
exports.Memo$350 = Memo$18;
exports.Memo$351 = Memo$17;
exports.Memo$352 = Memo$16;
exports.Memo$353 = Memo$15;
exports.Memo$354 = Memo$14;
exports.Memo$355 = Memo$13;
exports.Memo$356 = Memo$12;
exports.Memo$357 = Memo$11;
exports.Memo$358 = Memo$10;
exports.Memo$359 = Memo$$;
exports.Memo$36 = Memo$62;
exports.Memo$360 = Memo$_;
exports.Memo$361 = Memo$Z;
exports.Memo$362 = Memo$Y;
exports.Memo$363 = Memo$X;
exports.Memo$364 = Memo$W;
exports.Memo$365 = Memo$V;
exports.Memo$366 = Memo$U;
exports.Memo$367 = Memo$T;
exports.Memo$368 = Memo$S;
exports.Memo$369 = Memo$R;
exports.Memo$37 = Memo$61;
exports.Memo$370 = Memo$Q;
exports.Memo$371 = Memo$P;
exports.Memo$372 = Memo$O;
exports.Memo$373 = Memo$N;
exports.Memo$374 = Memo$M;
exports.Memo$375 = Memo$L;
exports.Memo$376 = Memo$K;
exports.Memo$377 = Memo$J;
exports.Memo$378 = Memo$I;
exports.Memo$379 = Memo$H;
exports.Memo$38 = Memo$60;
exports.Memo$380 = Memo$G;
exports.Memo$381 = Memo$F;
exports.Memo$382 = Memo$E;
exports.Memo$383 = Memo$D;
exports.Memo$384 = Memo$C;
exports.Memo$385 = Memo$B;
exports.Memo$386 = Memo$A;
exports.Memo$387 = Memo$z;
exports.Memo$388 = Memo$y;
exports.Memo$389 = Memo$x;
exports.Memo$39 = Memo$5$;
exports.Memo$390 = Memo$w;
exports.Memo$391 = Memo$v;
exports.Memo$392 = Memo$u;
exports.Memo$393 = Memo$t;
exports.Memo$394 = Memo$s;
exports.Memo$395 = Memo$r;
exports.Memo$396 = Memo$q;
exports.Memo$397 = Memo$p;
exports.Memo$398 = Memo$o;
exports.Memo$399 = Memo$n;
exports.Memo$4 = Memo$6y;
exports.Memo$40 = Memo$5_;
exports.Memo$400 = Memo$m;
exports.Memo$401 = Memo$l;
exports.Memo$402 = Memo$k;
exports.Memo$403 = Memo$j;
exports.Memo$404 = Memo$i;
exports.Memo$405 = Memo$h;
exports.Memo$406 = Memo$g;
exports.Memo$407 = Memo$f;
exports.Memo$408 = Memo$e;
exports.Memo$409 = Memo$d;
exports.Memo$41 = Memo$5Z;
exports.Memo$410 = Memo$c;
exports.Memo$411 = Memo$b;
exports.Memo$412 = Memo$a;
exports.Memo$413 = Memo$9;
exports.Memo$414 = Memo$8;
exports.Memo$415 = Memo$7;
exports.Memo$416 = Memo$6;
exports.Memo$417 = Memo$5;
exports.Memo$418 = Memo$4;
exports.Memo$419 = Memo$3;
exports.Memo$42 = Memo$5Y;
exports.Memo$420 = Memo$2;
exports.Memo$421 = Memo$1;
exports.Memo$422 = Memo;
exports.Memo$43 = Memo$5X;
exports.Memo$44 = Memo$5W;
exports.Memo$45 = Memo$5V;
exports.Memo$46 = Memo$5U;
exports.Memo$47 = Memo$5T;
exports.Memo$48 = Memo$5S;
exports.Memo$49 = Memo$5R;
exports.Memo$5 = Memo$6x;
exports.Memo$50 = Memo$5Q;
exports.Memo$51 = Memo$5P;
exports.Memo$52 = Memo$5O;
exports.Memo$53 = Memo$5N;
exports.Memo$54 = Memo$5M;
exports.Memo$55 = Memo$5L;
exports.Memo$56 = Memo$5K;
exports.Memo$57 = Memo$5J;
exports.Memo$58 = Memo$5I;
exports.Memo$59 = Memo$5H;
exports.Memo$6 = Memo$6w;
exports.Memo$60 = Memo$5G;
exports.Memo$61 = Memo$5F;
exports.Memo$62 = Memo$5E;
exports.Memo$63 = Memo$5D;
exports.Memo$64 = Memo$5C;
exports.Memo$65 = Memo$5B;
exports.Memo$66 = Memo$5A;
exports.Memo$67 = Memo$5z;
exports.Memo$68 = Memo$5y;
exports.Memo$69 = Memo$5x;
exports.Memo$7 = Memo$6v;
exports.Memo$70 = Memo$5w;
exports.Memo$71 = Memo$5v;
exports.Memo$72 = Memo$5u;
exports.Memo$73 = Memo$5t;
exports.Memo$74 = Memo$5s;
exports.Memo$75 = Memo$5r;
exports.Memo$76 = Memo$5q;
exports.Memo$77 = Memo$5p;
exports.Memo$78 = Memo$5o;
exports.Memo$79 = Memo$5n;
exports.Memo$8 = Memo$6u;
exports.Memo$80 = Memo$5m;
exports.Memo$81 = Memo$5l;
exports.Memo$82 = Memo$5k;
exports.Memo$83 = Memo$5j;
exports.Memo$84 = Memo$5i;
exports.Memo$85 = Memo$5h;
exports.Memo$86 = Memo$5g;
exports.Memo$87 = Memo$5f;
exports.Memo$88 = Memo$5e;
exports.Memo$89 = Memo$5d;
exports.Memo$9 = Memo$6t;
exports.Memo$90 = Memo$5c;
exports.Memo$91 = Memo$5b;
exports.Memo$92 = Memo$5a;
exports.Memo$93 = Memo$59;
exports.Memo$94 = Memo$58;
exports.Memo$95 = Memo$57;
exports.Memo$96 = Memo$56;
exports.Memo$97 = Memo$55;
exports.Memo$98 = Memo$54;
exports.Memo$99 = Memo$53;
exports.index = index;
