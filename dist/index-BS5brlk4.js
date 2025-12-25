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
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m9.96 9.137.886-3.099c.332-1.16 1.976-1.16 2.308 0l.885 3.099a1.2 1.2 0 0 0 .824.824l3.099.885c1.16.332 1.16 1.976 0 2.308l-3.099.885a1.2 1.2 0 0 0-.824.824l-.885 3.099c-.332 1.16-1.976 1.16-2.308 0l-.885-3.099a1.2 1.2 0 0 0-.824-.824l-3.099-.885c-1.16-.332-1.16-1.976 0-2.308l3.099-.885a1.2 1.2 0 0 0 .824-.824m8.143 7.37c.289-.843 1.504-.844 1.792 0l.026.087.296 1.188 1.188.297c.96.24.96 1.602 0 1.842l-1.188.297-.296 1.188c-.24.959-1.603.959-1.843 0l-.297-1.188-1.188-.297c-.96-.24-.96-1.603 0-1.842l1.188-.297.297-1.188zm.896 2.29a1 1 0 0 1-.203.203 1 1 0 0 1 .203.203 1 1 0 0 1 .203-.203 1 1 0 0 1-.203-.204M4.104 2.506c.298-.871 1.585-.842 1.818.087l.296 1.188 1.188.297c.96.24.96 1.602 0 1.842l-1.188.297-.296 1.188c-.24.959-1.603.959-1.843 0l-.297-1.188-1.188-.297c-.96-.24-.96-1.603 0-1.842l1.188-.297.297-1.188zM5 4.797a1 1 0 0 1-.203.202A1 1 0 0 1 5 5.203a1 1 0 0 1 .203-.204A1 1 0 0 1 5 4.796"
  }));
};
SvgSiAi.displayName = "SvgSiAi";
const ForwardRef$6M = /*#__PURE__*/React.forwardRef(SvgSiAi);
const Memo$6M = /*#__PURE__*/React.memo(ForwardRef$6M);

const SvgSiAiAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m14.04 9.137-.886-3.099c-.332-1.16-1.976-1.16-2.308 0l-.885 3.099a1.2 1.2 0 0 1-.824.824l-3.099.885c-1.16.332-1.16 1.976 0 2.308l3.099.885a1.2 1.2 0 0 1 .824.824l.885 3.099c.332 1.16 1.976 1.16 2.308 0l.885-3.099a1.2 1.2 0 0 1 .824-.824l3.099-.885c1.16-.332 1.16-1.976 0-2.308l-3.099-.885a1.2 1.2 0 0 1-.824-.824m-8.143 7.37c-.289-.844-1.504-.844-1.792 0l-.025.087-.297 1.188-1.188.296c-.959.24-.96 1.603 0 1.843l1.188.297.297 1.188c.24.959 1.602.959 1.842 0l.297-1.188 1.188-.297c.96-.24.96-1.603 0-1.843l-1.188-.296-.297-1.188zM5 18.797a1 1 0 0 0 .204.202 1 1 0 0 0-.204.204 1 1 0 0 0-.203-.204A1 1 0 0 0 5 18.796m14.896-16.29c-.298-.871-1.585-.842-1.817.087l-.297 1.188-1.188.297c-.959.24-.96 1.602 0 1.842l1.188.297.297 1.188c.24.959 1.602.959 1.842 0l.297-1.188 1.188-.297c.96-.24.96-1.603 0-1.842l-1.188-.297-.297-1.188zM19 4.797a1 1 0 0 0 .204.202 1 1 0 0 0-.204.204 1 1 0 0 0-.203-.204A1 1 0 0 0 19 4.796"
  }));
};
SvgSiAiAlt1.displayName = "SvgSiAiAlt1";
const ForwardRef$6L = /*#__PURE__*/React.forwardRef(SvgSiAiAlt1);
const Memo$6L = /*#__PURE__*/React.memo(ForwardRef$6L);

const SvgSiAiAlt2 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M20 5a1 1 0 1 1 0 2h-2v10h2a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2h2V7h-2a1 1 0 1 1 0-2zM5 11h4V7H5zm6 7a1 1 0 1 1-2 0v-5H5v5a1 1 0 1 1-2 0V6.8A1.8 1.8 0 0 1 4.8 5h4.4A1.8 1.8 0 0 1 11 6.8z"
  }));
};
SvgSiAiAlt2.displayName = "SvgSiAiAlt2";
const ForwardRef$6K = /*#__PURE__*/React.forwardRef(SvgSiAiAlt2);
const Memo$6K = /*#__PURE__*/React.memo(ForwardRef$6K);

const SvgSiAiArchive = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 12.797a1 1 0 0 0 .203.203 1 1 0 0 0-.203.203 1 1 0 0 0-.203-.203 1 1 0 0 0 .203-.203"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M21.4 2A2.6 2.6 0 0 1 24 4.6v.8A2.6 2.6 0 0 1 21.4 8h-.486L20 18.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3.086 8H2.6A2.6 2.6 0 0 1 0 5.4v-.8A2.6 2.6 0 0 1 2.6 2zm-8.478 8.595c-.232-.93-1.52-.959-1.818-.087l-.025.087-.297 1.187-1.187.297c-.96.24-.96 1.603 0 1.843l1.187.297.297 1.187c.24.959 1.603.96 1.843 0l.297-1.187 1.187-.297c.96-.24.959-1.603 0-1.843l-1.187-.297zM2.6 4a.6.6 0 0 0-.6.6v.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6v-.8a.6.6 0 0 0-.6-.6z",
    clipRule: "evenodd"
  }));
};
SvgSiAiArchive.displayName = "SvgSiAiArchive";
const ForwardRef$6J = /*#__PURE__*/React.forwardRef(SvgSiAiArchive);
const Memo$6J = /*#__PURE__*/React.memo(ForwardRef$6J);

const SvgSiAiBriefcase = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.014 13.148c.103.412.425.734.837.837l.056.014-.056.015a1.15 1.15 0 0 0-.837.837l-.015.056-.014-.056a1.15 1.15 0 0 0-.837-.837l-.056-.015.056-.014a1.15 1.15 0 0 0 .837-.837l.014-.056z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14.2 3A1.8 1.8 0 0 1 16 4.8V7h3.6A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7H8V4.8A1.8 1.8 0 0 1 9.8 3zm-1.116 8.265c-.35-1.02-1.82-1.021-2.169 0l-.031.105-.303 1.211-1.21.303c-1.162.29-1.162 1.94 0 2.231l1.21.302.303 1.213c.29 1.16 1.94 1.16 2.231 0l.303-1.212 1.212-.303c1.16-.29 1.16-1.94 0-2.231l-1.213-.304-.302-1.21zM10 7h4V5h-4z",
    clipRule: "evenodd"
  }));
};
SvgSiAiBriefcase.displayName = "SvgSiAiBriefcase";
const ForwardRef$6I = /*#__PURE__*/React.forwardRef(SvgSiAiBriefcase);
const Memo$6I = /*#__PURE__*/React.memo(ForwardRef$6I);

const SvgSiAiChat = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M9 10.797a1 1 0 0 0 .204.203 1 1 0 0 0-.204.202A1 1 0 0 0 8.796 11 1 1 0 0 0 9 10.797"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19 3c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.926-3.65A.99.99 0 0 0 7.513 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3zM9.922 8.594c-.233-.93-1.52-.958-1.818-.087l-.025.087-.297 1.187-1.187.297c-.96.24-.96 1.604 0 1.844l1.187.297.297 1.187c.24.959 1.603.959 1.843 0l.297-1.187 1.187-.297c.96-.24.96-1.604 0-1.844l-1.187-.297zM15.5 5.25a.75.75 0 0 0-.727.568L14.48 6.98l-1.163.292a.75.75 0 0 0 0 1.456l1.163.29.292 1.164a.75.75 0 0 0 1.454 0l.292-1.163 1.164-.291a.75.75 0 0 0 0-1.456l-1.164-.292-.291-1.162a.75.75 0 0 0-.728-.568",
    clipRule: "evenodd"
  }));
};
SvgSiAiChat.displayName = "SvgSiAiChat";
const ForwardRef$6H = /*#__PURE__*/React.forwardRef(SvgSiAiChat);
const Memo$6H = /*#__PURE__*/React.memo(ForwardRef$6H);

const SvgSiAiChecklist = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M22 18a1 1 0 1 1 0 2H12a1 1 0 0 1 0-2zm0-7a1 1 0 1 1 0 2H12a1 1 0 0 1 0-2zM7.293 2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L4 5.586zM22 4a1 1 0 1 1 0 2H12a1 1 0 0 1 0-2zM4.104 16.507c.288-.843 1.504-.844 1.792 0l.025.087.297 1.188 1.188.297c.959.24.96 1.603 0 1.843l-1.188.296-.297 1.188c-.24.959-1.602.959-1.842 0l-.297-1.188-1.188-.296c-.96-.24-.96-1.603 0-1.843l1.187-.297.298-1.188zM5 18.797a1 1 0 0 1-.205.203 1 1 0 0 1 .205.202A1 1 0 0 1 5.204 19 1 1 0 0 1 5 18.797m-.896-9.29c.298-.871 1.585-.842 1.817.087l.297 1.188 1.188.297c.96.24.96 1.603 0 1.842l-1.188.297-.297 1.188c-.24.96-1.602.96-1.842 0l-.297-1.188-1.188-.296c-.96-.24-.96-1.603 0-1.843l1.188-.297.297-1.188zM5 11.797a1 1 0 0 1-.204.203 1 1 0 0 1 .204.203A1 1 0 0 1 5.203 12 1 1 0 0 1 5 11.797"
  }));
};
SvgSiAiChecklist.displayName = "SvgSiAiChecklist";
const ForwardRef$6G = /*#__PURE__*/React.forwardRef(SvgSiAiChecklist);
const Memo$6G = /*#__PURE__*/React.memo(ForwardRef$6G);

const SvgSiAiEdit = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M19 16.25a.75.75 0 0 1 .727.568l.291 1.163 1.164.291a.75.75 0 0 1 0 1.455l-1.164.291-.29 1.164a.75.75 0 0 1-1.456 0l-.29-1.164-1.164-.29a.75.75 0 0 1 0-1.456l1.163-.29.291-1.164A.75.75 0 0 1 19 16.25M4.104 2.507c.298-.871 1.585-.842 1.818.087l.296 1.188 1.188.297c.96.24.96 1.603 0 1.842l-1.188.297-.296 1.188c-.24.96-1.603.96-1.843 0l-.297-1.188-1.188-.297c-.96-.24-.96-1.602 0-1.842l1.188-.297.297-1.188zM5 4.797A1 1 0 0 1 4.797 5 1 1 0 0 1 5 5.203 1 1 0 0 1 5.203 5 1 1 0 0 1 5 4.796m11.738-1.069a1.3 1.3 0 0 1 1.838 0l1.697 1.697a1.3 1.3 0 0 1 0 1.838l-1.909 1.91-3.536-3.536zm-7.92 14.991a.5.5 0 0 1-.255.136l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.535a.5.5 0 0 1 .137-.256l8.838-8.839 3.536 3.536z"
  }));
};
SvgSiAiEdit.displayName = "SvgSiAiEdit";
const ForwardRef$6F = /*#__PURE__*/React.forwardRef(SvgSiAiEdit);
const Memo$6F = /*#__PURE__*/React.memo(ForwardRef$6F);

const SvgSiAiEditAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M19 16.25a.75.75 0 0 1 .727.568l.291 1.163 1.164.291a.75.75 0 0 1 0 1.455l-1.164.291-.29 1.164a.75.75 0 0 1-1.456 0l-.29-1.164-1.164-.29a.75.75 0 0 1 0-1.456l1.163-.29.291-1.164A.75.75 0 0 1 19 16.25M4.104 2.507c.298-.871 1.585-.842 1.818.087l.296 1.188 1.188.297c.96.24.96 1.603 0 1.842l-1.188.297-.296 1.188c-.24.96-1.603.96-1.843 0l-.297-1.188-1.188-.297c-.96-.24-.96-1.602 0-1.842l1.188-.297.297-1.188zM5 4.797A1 1 0 0 1 4.797 5 1 1 0 0 1 5 5.203 1 1 0 0 1 5.203 5 1 1 0 0 1 5 4.796m11.738-1.069a1.3 1.3 0 0 1 1.838 0l1.697 1.697a1.3 1.3 0 0 1 0 1.838L8.818 18.718a.5.5 0 0 1-.255.136l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.535a.5.5 0 0 1 .136-.256z"
  }));
};
SvgSiAiEditAlt1.displayName = "SvgSiAiEditAlt1";
const ForwardRef$6E = /*#__PURE__*/React.forwardRef(SvgSiAiEditAlt1);
const Memo$6E = /*#__PURE__*/React.memo(ForwardRef$6E);

const SvgSiAiEditAlt2 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M19.425 4.575a2.5 2.5 0 0 0-3.536 0l-1.06 1.061 3.535 3.536 1.06-1.061a2.5 2.5 0 0 0 0-3.536m-5.303 1.768 3.536 3.536-8.839 8.839a.5.5 0 0 1-.255.136l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.535a.5.5 0 0 1 .137-.256zM19 16.25a.75.75 0 0 1 .727.568l.291 1.163 1.164.291a.75.75 0 0 1 0 1.455l-1.164.291-.29 1.164a.75.75 0 0 1-1.456 0l-.29-1.164-1.164-.29a.75.75 0 0 1 0-1.456l1.163-.29.291-1.164A.75.75 0 0 1 19 16.25M4.104 2.507c.298-.871 1.585-.842 1.818.087l.296 1.188 1.188.297c.96.24.96 1.603 0 1.843l-1.188.296-.296 1.188c-.24.96-1.603.96-1.843 0l-.297-1.188-1.188-.296c-.96-.24-.96-1.603 0-1.843l1.188-.297.297-1.188zM5 4.797A1 1 0 0 1 4.797 5 1 1 0 0 1 5 5.203 1 1 0 0 1 5.203 5 1 1 0 0 1 5 4.797"
  }));
};
SvgSiAiEditAlt2.displayName = "SvgSiAiEditAlt2";
const ForwardRef$6D = /*#__PURE__*/React.forwardRef(SvgSiAiEditAlt2);
const Memo$6D = /*#__PURE__*/React.memo(ForwardRef$6D);

const SvgSiAiFact = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16 11.796a1 1 0 0 0 .203.203 1 1 0 0 0-.203.203 1 1 0 0 0-.203-.203 1 1 0 0 0 .203-.203"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M20.6 4A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4zM5 14a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm11.922-4.406c-.233-.93-1.52-.958-1.818-.087l-.025.087-.297 1.187-1.187.297c-.96.24-.96 1.603 0 1.843l1.187.297.297 1.187c.24.96 1.603.96 1.843 0l.297-1.187 1.187-.297c.959-.24.96-1.603 0-1.843l-1.187-.297zM5 11a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm0-3a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiAiFact.displayName = "SvgSiAiFact";
const ForwardRef$6C = /*#__PURE__*/React.forwardRef(SvgSiAiFact);
const Memo$6C = /*#__PURE__*/React.memo(ForwardRef$6C);

const SvgSiAiFactAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M8 11.796a1 1 0 0 1-.203.203 1 1 0 0 1 .203.203A1 1 0 0 1 8.203 12 1 1 0 0 1 8 11.796"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3.4 4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4zM19 14a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2zM7.078 9.594c.233-.93 1.52-.958 1.818-.087l.025.087.297 1.187 1.187.297c.96.24.96 1.603 0 1.843l-1.187.297-.297 1.187c-.24.96-1.603.96-1.843 0l-.297-1.187-1.187-.297c-.959-.24-.96-1.603 0-1.843l1.187-.297zM19 11a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2zm0-3a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiAiFactAlt1.displayName = "SvgSiAiFactAlt1";
const ForwardRef$6B = /*#__PURE__*/React.forwardRef(SvgSiAiFactAlt1);
const Memo$6B = /*#__PURE__*/React.memo(ForwardRef$6B);

const SvgSiAiInventory = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.014 12.65c.103.411.425.733.837.836l.056.014-.056.015a1.15 1.15 0 0 0-.837.837l-.015.056-.014-.056a1.15 1.15 0 0 0-.837-.837l-.056-.015.056-.014a1.15 1.15 0 0 0 .837-.837l.014-.056z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M21.4 2A2.6 2.6 0 0 1 24 4.6v.8A2.6 2.6 0 0 1 21.4 8H21v10.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V8h-.4A2.6 2.6 0 0 1 0 5.4v-.8A2.6 2.6 0 0 1 2.6 2zm-8.316 8.766c-.35-1.021-1.82-1.021-2.169 0l-.031.105-.303 1.211-1.21.303c-1.162.29-1.162 1.94 0 2.231l1.21.302.303 1.213c.29 1.16 1.94 1.16 2.231 0l.303-1.212 1.212-.303c1.16-.29 1.16-1.94 0-2.231l-1.213-.304-.302-1.21zM2.6 4a.6.6 0 0 0-.6.6v.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6v-.8a.6.6 0 0 0-.6-.6z",
    clipRule: "evenodd"
  }));
};
SvgSiAiInventory.displayName = "SvgSiAiInventory";
const ForwardRef$6A = /*#__PURE__*/React.forwardRef(SvgSiAiInventory);
const Memo$6A = /*#__PURE__*/React.memo(ForwardRef$6A);

const SvgSiAiLock = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 15.297a1 1 0 0 0 .203.203 1 1 0 0 0-.203.203 1 1 0 0 0-.203-.203 1 1 0 0 0 .203-.203"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 2a5 5 0 0 1 5 5v3h.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6H7V7a5 5 0 0 1 5-5m.922 11.095c-.232-.93-1.52-.959-1.818-.087l-.025.087-.297 1.187-1.187.297c-.96.24-.96 1.603 0 1.843l1.187.297.297 1.187c.24.959 1.603.96 1.843 0l.297-1.187 1.187-.297c.96-.24.959-1.603 0-1.843l-1.187-.297zM12 4c-1.658 0-3 1.342-3 3v3h6V7c0-1.658-1.342-3-3-3",
    clipRule: "evenodd"
  }));
};
SvgSiAiLock.displayName = "SvgSiAiLock";
const ForwardRef$6z = /*#__PURE__*/React.forwardRef(SvgSiAiLock);
const Memo$6z = /*#__PURE__*/React.memo(ForwardRef$6z);

const SvgSiAiMonitor = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zm-3-8.703a1 1 0 0 0 .203.203 1 1 0 0 0-.203.203 1 1 0 0 0-.203-.203 1 1 0 0 0 .203-.203"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.775 3.005A3.4 3.4 0 0 1 23 6.4v8.2a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 14.6V6.4A3.4 3.4 0 0 1 4.4 3h15.2zm-6.853 5.09c-.232-.93-1.52-.959-1.818-.087l-.025.087-.297 1.187-1.187.297c-.96.24-.96 1.603 0 1.843l1.187.297.297 1.187c.24.959 1.603.96 1.843 0l.297-1.187 1.187-.297c.96-.24.959-1.603 0-1.843l-1.187-.297z",
    clipRule: "evenodd"
  }));
};
SvgSiAiMonitor.displayName = "SvgSiAiMonitor";
const ForwardRef$6y = /*#__PURE__*/React.forwardRef(SvgSiAiMonitor);
const Memo$6y = /*#__PURE__*/React.memo(ForwardRef$6y);

const SvgSiAiNote = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M14.905 15.79a1 1 0 0 0 .203.202 1 1 0 0 0-.203.203 1 1 0 0 0-.203-.203 1 1 0 0 0 .203-.203"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 0a3 3 0 0 1 3 3h3.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H9a3 3 0 0 1 3-3m3.827 13.587c-.232-.93-1.52-.959-1.817-.087l-.026.087-.296 1.187-1.188.297c-.96.24-.96 1.603 0 1.843l1.188.297.296 1.187c.24.96 1.603.96 1.843 0l.297-1.187 1.188-.297c.958-.24.958-1.603 0-1.843l-1.188-.297zM7 15a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0-3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm5-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
    clipRule: "evenodd"
  }));
};
SvgSiAiNote.displayName = "SvgSiAiNote";
const ForwardRef$6x = /*#__PURE__*/React.forwardRef(SvgSiAiNote);
const Memo$6x = /*#__PURE__*/React.memo(ForwardRef$6x);

const SvgSiAiNoteAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.2 0A1.8 1.8 0 0 1 17 1.8V3h1.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H7V1.8A1.8 1.8 0 0 1 8.8 0zm.627 13.587c-.232-.93-1.52-.959-1.817-.087l-.026.087-.296 1.187-1.188.297c-.96.24-.96 1.603 0 1.843l1.188.297.296 1.187c.24.96 1.603.96 1.843 0l.297-1.187 1.188-.297c.958-.24.958-1.603 0-1.843l-1.188-.297zM7 15a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0-3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm2-7v2h6V2z",
    clipRule: "evenodd"
  }));
};
SvgSiAiNoteAlt1.displayName = "SvgSiAiNoteAlt1";
const ForwardRef$6w = /*#__PURE__*/React.forwardRef(SvgSiAiNoteAlt1);
const Memo$6w = /*#__PURE__*/React.memo(ForwardRef$6w);

const SvgSiAiPhone = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15.915 4.265c.35-1.021 1.82-1.02 2.17 0l.03.105.302 1.21 1.213.304c1.161.29 1.161 1.94 0 2.231l-1.212.303-.302 1.212c-.291 1.161-1.941 1.161-2.232 0l-.304-1.213-1.21-.302c-1.161-.29-1.161-1.94 0-2.231l1.211-.303.303-1.21zm1.07 1.884a1.15 1.15 0 0 1-.836.837l-.057.013.057.015c.412.103.733.425.837.837l.013.056.015-.056a1.15 1.15 0 0 1 .837-.837l.056-.015-.056-.013a1.15 1.15 0 0 1-.837-.837l-.015-.057zM7.18 10.27l6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"
  }));
};
SvgSiAiPhone.displayName = "SvgSiAiPhone";
const ForwardRef$6v = /*#__PURE__*/React.forwardRef(SvgSiAiPhone);
const Memo$6v = /*#__PURE__*/React.memo(ForwardRef$6v);

const SvgSiAiPhoneAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M8.085 4.265c-.35-1.021-1.82-1.02-2.17 0l-.03.105-.302 1.21-1.213.304c-1.161.29-1.161 1.94 0 2.231l1.212.303.303 1.212c.29 1.161 1.94 1.161 2.231 0l.304-1.213 1.21-.302c1.161-.29 1.161-1.94 0-2.231l-1.211-.303-.303-1.21zm-1.07 1.884c.102.412.424.734.836.837l.057.013-.057.015a1.15 1.15 0 0 0-.837.837l-.013.056-.015-.056a1.15 1.15 0 0 0-.837-.837l-.056-.015.056-.013a1.15 1.15 0 0 0 .837-.837l.015-.057zm9.805 4.121-6.504 6.46c-.697-.807-5.11-5.538-7.316.924 0 0 .232 3.346 4.994 3.346 3.367 0 6.851-4.038 9.29-6.346 2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27"
  }));
};
SvgSiAiPhoneAlt1.displayName = "SvgSiAiPhoneAlt1";
const ForwardRef$6u = /*#__PURE__*/React.forwardRef(SvgSiAiPhoneAlt1);
const Memo$6u = /*#__PURE__*/React.memo(ForwardRef$6u);

const SvgSiAiScan = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M2 18.6V17a1 1 0 1 1 2 0v1.6A1.4 1.4 0 0 0 5.4 20H7a1 1 0 1 1 0 2H5.4A3.4 3.4 0 0 1 2 18.6m18 0V17a1 1 0 1 1 2 0v1.6a3.4 3.4 0 0 1-3.4 3.4H17a1 1 0 1 1 0-2h1.6a1.4 1.4 0 0 0 1.4-1.4M2 7V5.4A3.4 3.4 0 0 1 5.4 2H7a1 1 0 0 1 0 2H5.4A1.4 1.4 0 0 0 4 5.4V7a1 1 0 0 1-2 0m18 0V5.4A1.4 1.4 0 0 0 18.6 4H17a1 1 0 1 1 0-2h1.6A3.4 3.4 0 0 1 22 5.4V7a1 1 0 1 1-2 0m-5 5.25a.75.75 0 0 1 .727.568l.291 1.163 1.164.291a.75.75 0 0 1 0 1.455l-1.164.291-.29 1.164a.75.75 0 0 1-1.456 0l-.29-1.164-1.164-.29a.75.75 0 0 1 0-1.456l1.163-.29.291-1.164A.75.75 0 0 1 15 12.25M8.104 6.507c.298-.871 1.585-.842 1.818.087l.296 1.188 1.188.297c.96.24.96 1.603 0 1.843l-1.188.296-.296 1.188c-.24.96-1.603.96-1.843 0l-.297-1.188-1.188-.296c-.96-.24-.96-1.603 0-1.843l1.188-.297.297-1.188zM9 8.797A1 1 0 0 1 8.797 9 1 1 0 0 1 9 9.203 1 1 0 0 1 9.203 9 1 1 0 0 1 9 8.797"
  }));
};
SvgSiAiScan.displayName = "SvgSiAiScan";
const ForwardRef$6t = /*#__PURE__*/React.forwardRef(SvgSiAiScan);
const Memo$6t = /*#__PURE__*/React.memo(ForwardRef$6t);

const SvgSiAiSearch = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M18 11a7 7 0 1 0-14 0 7 7 0 0 0 14 0m2 0a8.96 8.96 0 0 1-1.97 5.616l3.677 3.677a1 1 0 1 1-1.414 1.414l-3.677-3.677A9 9 0 1 1 20 11"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M10.104 8.507c.298-.871 1.585-.842 1.818.087l.296 1.188 1.188.297c.96.24.96 1.603 0 1.842l-1.188.297-.296 1.188c-.24.96-1.603.96-1.843 0l-.297-1.188-1.188-.296c-.96-.24-.96-1.603 0-1.843l1.188-.297.297-1.188zm.896 2.29a1 1 0 0 1-.203.203 1 1 0 0 1 .203.203 1 1 0 0 1 .203-.203 1 1 0 0 1-.203-.203"
  }));
};
SvgSiAiSearch.displayName = "SvgSiAiSearch";
const ForwardRef$6s = /*#__PURE__*/React.forwardRef(SvgSiAiSearch);
const Memo$6s = /*#__PURE__*/React.memo(ForwardRef$6s);

const SvgSiAiShield = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 10.797a1 1 0 0 0 .203.203 1 1 0 0 0-.203.203 1 1 0 0 0-.203-.203 1 1 0 0 0 .203-.203"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m12.097 2.012 7.6 1.903a.4.4 0 0 1 .303.389v6.949c0 7.764-6.916 10.397-7.888 10.728a.33.33 0 0 1-.224 0C10.918 21.64 4 18.938 4 11.252v-6.95a.4.4 0 0 1 .303-.388l7.6-1.903a.4.4 0 0 1 .194 0m.825 6.583c-.232-.93-1.52-.96-1.818-.087l-.025.087-.297 1.187-1.187.297c-.96.24-.96 1.603 0 1.843l1.187.297.297 1.187c.24.959 1.603.959 1.843 0l.297-1.187 1.187-.297c.96-.24.959-1.603 0-1.843l-1.187-.297z",
    clipRule: "evenodd"
  }));
};
SvgSiAiShield.displayName = "SvgSiAiShield";
const ForwardRef$6r = /*#__PURE__*/React.forwardRef(SvgSiAiShield);
const Memo$6r = /*#__PURE__*/React.memo(ForwardRef$6r);

const SvgSiAiSmartphone = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 12.797a1 1 0 0 0 .203.203 1 1 0 0 0-.203.203 1 1 0 0 0-.203-.203 1 1 0 0 0 .203-.203"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.6 1A3.4 3.4 0 0 1 19 4.4v15.2a3.4 3.4 0 0 1-3.4 3.4H8.4a3.4 3.4 0 0 1-3.395-3.225L5 19.6V4.4A3.4 3.4 0 0 1 8.4 1zm-2.678 9.595c-.232-.93-1.52-.959-1.818-.087l-.025.087-.297 1.187-1.187.297c-.96.24-.96 1.603 0 1.843l1.187.297.297 1.187c.24.959 1.603.96 1.843 0l.297-1.187 1.187-.297c.96-.24.959-1.603 0-1.843l-1.187-.297zM11 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiAiSmartphone.displayName = "SvgSiAiSmartphone";
const ForwardRef$6q = /*#__PURE__*/React.forwardRef(SvgSiAiSmartphone);
const Memo$6q = /*#__PURE__*/React.memo(ForwardRef$6q);

const SvgSiAiSort = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4.6 2A2.6 2.6 0 0 0 2 4.6v3.8A2.6 2.6 0 0 0 4.6 11h3.8A2.6 2.6 0 0 0 11 8.4V4.6A2.6 2.6 0 0 0 8.4 2zm11 0A2.6 2.6 0 0 0 13 4.6v3.8a2.6 2.6 0 0 0 2.6 2.6h3.8A2.6 2.6 0 0 0 22 8.4V4.6A2.6 2.6 0 0 0 19.4 2zm-11 11A2.6 2.6 0 0 0 2 15.6v3.8A2.6 2.6 0 0 0 4.6 22h3.8a2.6 2.6 0 0 0 2.6-2.6v-3.8A2.6 2.6 0 0 0 8.4 13zm12.004 1.508c.298-.872 1.585-.843 1.818.086l.396 1.586 1.588.399c.96.24.96 1.603 0 1.843l-1.588.396-.396 1.588c-.24.96-1.603.96-1.843 0l-.399-1.588-1.586-.396c-.96-.24-.96-1.603 0-1.843l1.587-.398.398-1.587zm.896 2.515a.95.95 0 0 1-.477.477.95.95 0 0 1 .477.476.95.95 0 0 1 .476-.476.95.95 0 0 1-.476-.477"
  }));
};
SvgSiAiSort.displayName = "SvgSiAiSort";
const ForwardRef$6p = /*#__PURE__*/React.forwardRef(SvgSiAiSort);
const Memo$6p = /*#__PURE__*/React.memo(ForwardRef$6p);

const SvgSiAiSortAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16.604 3.507c.298-.871 1.585-.842 1.818.087l.396 1.586 1.588.399c.96.24.96 1.603 0 1.843l-1.588.396-.396 1.588c-.24.96-1.603.96-1.843 0l-.399-1.588-1.586-.396c-.96-.24-.96-1.603 0-1.843l1.587-.398.398-1.587zm.896 2.516a.95.95 0 0 1-.477.477.95.95 0 0 1 .477.476.95.95 0 0 1 .476-.476.95.95 0 0 1-.476-.477M4.6 2A2.6 2.6 0 0 0 2 4.6v3.8A2.6 2.6 0 0 0 4.6 11h3.8A2.6 2.6 0 0 0 11 8.4V4.6A2.6 2.6 0 0 0 8.4 2zm0 11A2.6 2.6 0 0 0 2 15.6v3.8A2.6 2.6 0 0 0 4.6 22h3.8a2.6 2.6 0 0 0 2.6-2.6v-3.8A2.6 2.6 0 0 0 8.4 13zm11 0a2.6 2.6 0 0 0-2.6 2.6v3.8a2.6 2.6 0 0 0 2.6 2.6h3.8a2.6 2.6 0 0 0 2.6-2.6v-3.8a2.6 2.6 0 0 0-2.6-2.6z"
  }));
};
SvgSiAiSortAlt1.displayName = "SvgSiAiSortAlt1";
const ForwardRef$6o = /*#__PURE__*/React.forwardRef(SvgSiAiSortAlt1);
const Memo$6o = /*#__PURE__*/React.memo(ForwardRef$6o);

const SvgSiAiSummarize = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M22 18a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2zm0-7a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2zm0-7a1 1 0 1 1 0 2H12a1 1 0 1 1 0-2zM4.104 16.507c.289-.843 1.504-.844 1.792 0l.026.087.296 1.188 1.188.297c.96.24.96 1.602 0 1.842l-1.188.297-.296 1.188c-.24.959-1.603.959-1.843 0l-.297-1.188-1.188-.297c-.96-.24-.96-1.603 0-1.842l1.188-.297.297-1.188zM5 18.797a1 1 0 0 1-.203.203 1 1 0 0 1 .203.203A1 1 0 0 1 5.203 19 1 1 0 0 1 5 18.796m-.896-9.29c.289-.843 1.504-.843 1.792 0l.026.087.296 1.188 1.188.297c.96.24.96 1.602 0 1.842l-1.188.297-.296 1.188c-.24.959-1.603.959-1.843 0l-.297-1.188-1.188-.297c-.96-.24-.96-1.603 0-1.842l1.188-.297.297-1.188zM5 11.797a1 1 0 0 1-.203.202 1 1 0 0 1 .203.204A1 1 0 0 1 5.203 12 1 1 0 0 1 5 11.795m-.896-9.29c.298-.871 1.585-.842 1.818.087l.296 1.188 1.188.297c.96.24.96 1.602 0 1.842l-1.188.297-.296 1.188c-.24.959-1.603.959-1.843 0l-.297-1.188-1.188-.297c-.96-.24-.96-1.603 0-1.842l1.188-.297.297-1.188zM5 4.797a1 1 0 0 1-.203.202A1 1 0 0 1 5 5.203a1 1 0 0 1 .203-.204A1 1 0 0 1 5 4.796"
  }));
};
SvgSiAiSummarize.displayName = "SvgSiAiSummarize";
const ForwardRef$6n = /*#__PURE__*/React.forwardRef(SvgSiAiSummarize);
const Memo$6n = /*#__PURE__*/React.memo(ForwardRef$6n);

const SvgSiAiSummarizeAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M22 15a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2zm0-8a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2zM4.104 13.507c.289-.843 1.504-.843 1.792 0l.026.087.296 1.188 1.188.297c.96.24.96 1.602 0 1.842l-1.188.297-.296 1.188c-.24.959-1.603.959-1.843 0l-.297-1.188-1.188-.297c-.96-.24-.96-1.603 0-1.842l1.188-.297.297-1.188zM5 15.797a1 1 0 0 1-.203.202 1 1 0 0 1 .203.204A1 1 0 0 1 5.203 16 1 1 0 0 1 5 15.795m-.896-10.29c.298-.871 1.585-.842 1.818.087l.296 1.188 1.188.297c.96.24.96 1.602 0 1.842l-1.188.297-.296 1.188c-.24.959-1.603.959-1.843 0l-.297-1.188-1.188-.297c-.96-.24-.96-1.603 0-1.842l1.188-.297.297-1.188zM5 7.797a1 1 0 0 1-.203.202A1 1 0 0 1 5 8.203a1 1 0 0 1 .203-.204A1 1 0 0 1 5 7.796"
  }));
};
SvgSiAiSummarizeAlt.displayName = "SvgSiAiSummarizeAlt";
const ForwardRef$6m = /*#__PURE__*/React.forwardRef(SvgSiAiSummarizeAlt);
const Memo$6m = /*#__PURE__*/React.memo(ForwardRef$6m);

const SvgSiAiUnlock = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M10 15.297a1 1 0 0 0 .203.203 1 1 0 0 0-.203.203 1 1 0 0 0-.203-.203 1 1 0 0 0 .203-.203"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M18 2a5 5 0 0 1 5 5v3a1 1 0 1 1-2 0V7c0-1.658-1.342-3-3-3s-3 1.342-3 3v3h.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-7c0-.88.72-1.6 1.6-1.6H13V7a5 5 0 0 1 5-5m-7.078 11.095c-.232-.93-1.52-.959-1.818-.087l-.025.087-.297 1.187-1.187.297c-.96.24-.96 1.603 0 1.843l1.187.297.297 1.187c.24.959 1.603.96 1.843 0l.297-1.187 1.187-.297c.96-.24.959-1.603 0-1.843l-1.187-.297z",
    clipRule: "evenodd"
  }));
};
SvgSiAiUnlock.displayName = "SvgSiAiUnlock";
const ForwardRef$6l = /*#__PURE__*/React.forwardRef(SvgSiAiUnlock);
const Memo$6l = /*#__PURE__*/React.memo(ForwardRef$6l);

const SvgSiActions = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5 0L9 7.5v9z",
    clipRule: "evenodd"
  }));
};
SvgSiActions.displayName = "SvgSiActions";
const ForwardRef$6k = /*#__PURE__*/React.forwardRef(SvgSiActions);
const Memo$6k = /*#__PURE__*/React.memo(ForwardRef$6k);

const SvgSiActivity = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16.024 2a1 1 0 0 1 .924.684L19.721 11H23a1 1 0 1 1 0 2h-4a1 1 0 0 1-.948-.684l-2.125-6.373-5.995 15.42a1 1 0 0 1-1.846.043L4.35 13H1a1 1 0 1 1 0-2h4a1 1 0 0 1 .914.594l3.024 6.805 6.13-15.761.068-.14A1 1 0 0 1 16.024 2"
  }));
};
SvgSiActivity.displayName = "SvgSiActivity";
const ForwardRef$6j = /*#__PURE__*/React.forwardRef(SvgSiActivity);
const Memo$6j = /*#__PURE__*/React.memo(ForwardRef$6j);

const SvgSiAdd = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"
  }));
};
SvgSiAdd.displayName = "SvgSiAdd";
const ForwardRef$6i = /*#__PURE__*/React.forwardRef(SvgSiAdd);
const Memo$6i = /*#__PURE__*/React.memo(ForwardRef$6i);

const SvgSiAddAlarm = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-8-5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V9a1 1 0 0 1 1-1m5.293-5.707a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414m-10.586 0a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0",
    clipRule: "evenodd"
  }));
};
SvgSiAddAlarm.displayName = "SvgSiAddAlarm";
const ForwardRef$6h = /*#__PURE__*/React.forwardRef(SvgSiAddAlarm);
const Memo$6h = /*#__PURE__*/React.memo(ForwardRef$6h);

const SvgSiAddCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M12 7a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1",
    clipRule: "evenodd"
  }));
};
SvgSiAddCircle.displayName = "SvgSiAddCircle";
const ForwardRef$6g = /*#__PURE__*/React.forwardRef(SvgSiAddCircle);
const Memo$6g = /*#__PURE__*/React.memo(ForwardRef$6g);

const SvgSiAddSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M12 7a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1",
    clipRule: "evenodd"
  }));
};
SvgSiAddSquare.displayName = "SvgSiAddSquare";
const ForwardRef$6f = /*#__PURE__*/React.forwardRef(SvgSiAddSquare);
const Memo$6f = /*#__PURE__*/React.memo(ForwardRef$6f);

const SvgSiAddToLibrary = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.4 2h11.2A2.4 2.4 0 0 1 22 4.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 15.6V4.4A2.4 2.4 0 0 1 8.4 2M14 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4 4a1 1 0 0 0-2 0v11.6C2 19.132 4.868 22 8.4 22H20a1 1 0 1 0 0-2H8.4A4.403 4.403 0 0 1 4 15.6z"
  }));
};
SvgSiAddToLibrary.displayName = "SvgSiAddToLibrary";
const ForwardRef$6e = /*#__PURE__*/React.forwardRef(SvgSiAddToLibrary);
const Memo$6e = /*#__PURE__*/React.memo(ForwardRef$6e);

const SvgSiAddToPlaylist = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3 7a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2zm17.707 3.707a1 1 0 0 0-1.414-1.414L17 15.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0zM4 14a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
  }));
};
SvgSiAddToPlaylist.displayName = "SvgSiAddToPlaylist";
const ForwardRef$6d = /*#__PURE__*/React.forwardRef(SvgSiAddToPlaylist);
const Memo$6d = /*#__PURE__*/React.memo(ForwardRef$6d);

const SvgSiAirplane = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M11.989 1.5c.432 0 .822.137 1.142.43.307.28.517.675.666 1.133.294.908.4 2.24.4 3.98v1.42l6.007 3.81.023.016c.604.433.778 1.119.76 1.711l.001 2a.5.5 0 0 1-.686.464l-6.406-2.57-.274 4.303 2.104 1.195.016.008c.383.236.577.673.577 1.079a.5.5 0 0 1-.01.1l-.313 1.522a.502.502 0 0 1-.648.374l-3.36-1.123-3.347 1.123a.5.5 0 0 1-.648-.374l-.313-1.522a.5.5 0 0 1-.01-.1c0-.406.194-.843.578-1.079l.014-.008 2.105-1.195-.275-4.302-6.405 2.569A.5.5 0 0 1 3.002 16v-2c-.018-.592.156-1.278.76-1.71l.023-.017 6.007-3.81V7.044c0-1.741.104-3.072.395-3.98.147-.458.355-.852.661-1.133.32-.294.71-.43 1.141-.431"
  }));
};
SvgSiAirplane.displayName = "SvgSiAirplane";
const ForwardRef$6c = /*#__PURE__*/React.forwardRef(SvgSiAirplane);
const Memo$6c = /*#__PURE__*/React.memo(ForwardRef$6c);

const SvgSiAirplaneAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M19.305 3.07c.433.018.806.197 1.111.502s.484.678.503 1.111c.018.416-.112.843-.33 1.272-.435.85-1.3 1.866-2.532 3.097l-1.005 1.005 1.555 6.94.005.03c.12.732-.242 1.339-.673 1.745v.001l-1.413 1.414a.5.5 0 0 1-.814-.156L13 13.685l-3.237 2.848.644 2.332.005.018c.105.437-.068.884-.354 1.17a.5.5 0 0 1-.078.064l-1.298.854a.5.5 0 0 1-.722-.193L6.377 17.61l-3.159-1.574a.5.5 0 0 1-.195-.722l.855-1.298.064-.078c.286-.286.733-.459 1.17-.354l.018.005 2.331.643 2.848-3.237-6.345-2.711a.5.5 0 0 1-.157-.814l1.401-1.4c.381-.411.944-.761 1.623-.703l.138.017.027.005 6.94 1.554 1.006-1.005c1.23-1.23 2.246-2.098 3.093-2.534.428-.22.855-.35 1.27-.333"
  }));
};
SvgSiAirplaneAlt.displayName = "SvgSiAirplaneAlt";
const ForwardRef$6b = /*#__PURE__*/React.forwardRef(SvgSiAirplaneAlt);
const Memo$6b = /*#__PURE__*/React.memo(ForwardRef$6b);

const SvgSiAlbum = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-6a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
    clipRule: "evenodd"
  }));
};
SvgSiAlbum.displayName = "SvgSiAlbum";
const ForwardRef$6a = /*#__PURE__*/React.forwardRef(SvgSiAlbum);
const Memo$6a = /*#__PURE__*/React.memo(ForwardRef$6a);

const SvgSiAlert = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m3.517 17 7.058-11.783a1.667 1.667 0 0 1 2.85 0L20.483 17a1.667 1.667 0 0 1-1.425 2.5H4.942A1.666 1.666 0 0 1 3.517 17M12 9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-1 7a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiAlert.displayName = "SvgSiAlert";
const ForwardRef$69 = /*#__PURE__*/React.forwardRef(SvgSiAlert);
const Memo$69 = /*#__PURE__*/React.memo(ForwardRef$69);

const SvgSiAlignBottomDetailed = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M17.4 17h-1.8a1.6 1.6 0 0 1-1.6-1.6v-3.8a1.6 1.6 0 0 1 1.6-1.6h1.8a1.6 1.6 0 0 1 1.6 1.6v3.8a1.6 1.6 0 0 1-1.6 1.6m-9 0H6.6A1.6 1.6 0 0 1 5 15.4V3.6A1.6 1.6 0 0 1 6.6 2h1.8A1.6 1.6 0 0 1 10 3.6v11.8A1.6 1.6 0 0 1 8.4 17"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M1 21a1 1 0 0 0 1 1h20a1 1 0 1 0 0-2H2a1 1 0 0 0-1 1",
    clipRule: "evenodd"
  }));
};
SvgSiAlignBottomDetailed.displayName = "SvgSiAlignBottomDetailed";
const ForwardRef$68 = /*#__PURE__*/React.forwardRef(SvgSiAlignBottomDetailed);
const Memo$68 = /*#__PURE__*/React.memo(ForwardRef$68);

const SvgSiAlignBottomSimple = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2 22a1 1 0 1 1 0-2h20a1 1 0 1 1 0 2zm8.6-5h2.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 13.4 2h-2.8A1.6 1.6 0 0 0 9 3.6v11.8a1.6 1.6 0 0 0 1.6 1.6",
    clipRule: "evenodd"
  }));
};
SvgSiAlignBottomSimple.displayName = "SvgSiAlignBottomSimple";
const ForwardRef$67 = /*#__PURE__*/React.forwardRef(SvgSiAlignBottomSimple);
const Memo$67 = /*#__PURE__*/React.memo(ForwardRef$67);

const SvgSiAlignCenter = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm3 4a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-4 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m4 3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"
  }));
};
SvgSiAlignCenter.displayName = "SvgSiAlignCenter";
const ForwardRef$66 = /*#__PURE__*/React.forwardRef(SvgSiAlignCenter);
const Memo$66 = /*#__PURE__*/React.memo(ForwardRef$66);

const SvgSiAlignHorizCenterDetailed = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 1a1 1 0 0 1 1 1v3h6.4A1.6 1.6 0 0 1 21 6.6v1.8a1.6 1.6 0 0 1-1.6 1.6H13v4h2.4a1.6 1.6 0 0 1 1.6 1.6v1.8a1.6 1.6 0 0 1-1.6 1.6H13v3a1 1 0 1 1-2 0v-3H8.6A1.6 1.6 0 0 1 7 17.4v-1.8A1.6 1.6 0 0 1 8.6 14H11v-4H4.6A1.6 1.6 0 0 1 3 8.4V6.6A1.6 1.6 0 0 1 4.6 5H11V2a1 1 0 0 1 1-1",
    clipRule: "evenodd"
  }));
};
SvgSiAlignHorizCenterDetailed.displayName = "SvgSiAlignHorizCenterDetailed";
const ForwardRef$65 = /*#__PURE__*/React.forwardRef(SvgSiAlignHorizCenterDetailed);
const Memo$65 = /*#__PURE__*/React.memo(ForwardRef$65);

const SvgSiAlignHorizCenterSimple = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 1a1 1 0 0 1 1 1v7h6.4a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6H13v7a1 1 0 1 1-2 0v-7H4.6A1.6 1.6 0 0 1 3 13.4v-2.8A1.6 1.6 0 0 1 4.6 9H11V2a1 1 0 0 1 1-1",
    clipRule: "evenodd"
  }));
};
SvgSiAlignHorizCenterSimple.displayName = "SvgSiAlignHorizCenterSimple";
const ForwardRef$64 = /*#__PURE__*/React.forwardRef(SvgSiAlignHorizCenterSimple);
const Memo$64 = /*#__PURE__*/React.memo(ForwardRef$64);

const SvgSiAlignJustify = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"
  }));
};
SvgSiAlignJustify.displayName = "SvgSiAlignJustify";
const ForwardRef$63 = /*#__PURE__*/React.forwardRef(SvgSiAlignJustify);
const Memo$63 = /*#__PURE__*/React.memo(ForwardRef$63);

const SvgSiAlignLeft = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"
  }));
};
SvgSiAlignLeft.displayName = "SvgSiAlignLeft";
const ForwardRef$62 = /*#__PURE__*/React.forwardRef(SvgSiAlignLeft);
const Memo$62 = /*#__PURE__*/React.memo(ForwardRef$62);

const SvgSiAlignLeftDetailed = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M7 17.4v-1.8A1.6 1.6 0 0 1 8.6 14h3.8a1.6 1.6 0 0 1 1.6 1.6v1.8a1.6 1.6 0 0 1-1.6 1.6H8.6A1.6 1.6 0 0 1 7 17.4m0-9V6.6A1.6 1.6 0 0 1 8.6 5h11.8A1.6 1.6 0 0 1 22 6.6v1.8a1.6 1.6 0 0 1-1.6 1.6H8.6A1.6 1.6 0 0 1 7 8.4"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3 1a1 1 0 0 0-1 1v20a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiAlignLeftDetailed.displayName = "SvgSiAlignLeftDetailed";
const ForwardRef$61 = /*#__PURE__*/React.forwardRef(SvgSiAlignLeftDetailed);
const Memo$61 = /*#__PURE__*/React.memo(ForwardRef$61);

const SvgSiAlignLeftSimple = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2 2a1 1 0 0 1 2 0v20a1 1 0 1 1-2 0zm5 8.6v2.8A1.6 1.6 0 0 0 8.6 15h11.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 20.4 9H8.6A1.6 1.6 0 0 0 7 10.6",
    clipRule: "evenodd"
  }));
};
SvgSiAlignLeftSimple.displayName = "SvgSiAlignLeftSimple";
const ForwardRef$60 = /*#__PURE__*/React.forwardRef(SvgSiAlignLeftSimple);
const Memo$60 = /*#__PURE__*/React.memo(ForwardRef$60);

const SvgSiAlignRight = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3 5a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2zm6 4a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-7 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m7 3a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"
  }));
};
SvgSiAlignRight.displayName = "SvgSiAlignRight";
const ForwardRef$5$ = /*#__PURE__*/React.forwardRef(SvgSiAlignRight);
const Memo$5$ = /*#__PURE__*/React.memo(ForwardRef$5$);

const SvgSiAlignRightDetailed = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M17 17.4v-1.8a1.6 1.6 0 0 0-1.6-1.6h-3.8a1.6 1.6 0 0 0-1.6 1.6v1.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6m0-9V6.6A1.6 1.6 0 0 0 15.4 5H3.6A1.6 1.6 0 0 0 2 6.6v1.8A1.6 1.6 0 0 0 3.6 10h11.8A1.6 1.6 0 0 0 17 8.4"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M21 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1",
    clipRule: "evenodd"
  }));
};
SvgSiAlignRightDetailed.displayName = "SvgSiAlignRightDetailed";
const ForwardRef$5_ = /*#__PURE__*/React.forwardRef(SvgSiAlignRightDetailed);
const Memo$5_ = /*#__PURE__*/React.memo(ForwardRef$5_);

const SvgSiAlignRightSimple = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 2a1 1 0 1 0-2 0v20a1 1 0 1 0 2 0zm-5 8.6v2.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 13.4v-2.8A1.6 1.6 0 0 1 3.6 9h11.8a1.6 1.6 0 0 1 1.6 1.6",
    clipRule: "evenodd"
  }));
};
SvgSiAlignRightSimple.displayName = "SvgSiAlignRightSimple";
const ForwardRef$5Z = /*#__PURE__*/React.forwardRef(SvgSiAlignRightSimple);
const Memo$5Z = /*#__PURE__*/React.memo(ForwardRef$5Z);

const SvgSiAlignTopDetailed = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M17.4 7h-1.8A1.6 1.6 0 0 0 14 8.6v3.8a1.6 1.6 0 0 0 1.6 1.6h1.8a1.6 1.6 0 0 0 1.6-1.6V8.6A1.6 1.6 0 0 0 17.4 7m-9 0H6.6A1.6 1.6 0 0 0 5 8.6v11.8A1.6 1.6 0 0 0 6.6 22h1.8a1.6 1.6 0 0 0 1.6-1.6V8.6A1.6 1.6 0 0 0 8.4 7"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M1 3a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiAlignTopDetailed.displayName = "SvgSiAlignTopDetailed";
const ForwardRef$5Y = /*#__PURE__*/React.forwardRef(SvgSiAlignTopDetailed);
const Memo$5Y = /*#__PURE__*/React.memo(ForwardRef$5Y);

const SvgSiAlignTopSimple = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2 2a1 1 0 0 0 0 2h20a1 1 0 1 0 0-2zm8.6 5h2.8A1.6 1.6 0 0 1 15 8.6v11.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 20.4V8.6A1.6 1.6 0 0 1 10.6 7",
    clipRule: "evenodd"
  }));
};
SvgSiAlignTopSimple.displayName = "SvgSiAlignTopSimple";
const ForwardRef$5X = /*#__PURE__*/React.forwardRef(SvgSiAlignTopSimple);
const Memo$5X = /*#__PURE__*/React.memo(ForwardRef$5X);

const SvgSiAlignVertCenterDetailed = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M1 12a1 1 0 0 1 1-1h3V4.6A1.6 1.6 0 0 1 6.6 3h1.8A1.6 1.6 0 0 1 10 4.6V11h4V8.6A1.6 1.6 0 0 1 15.6 7h1.8A1.6 1.6 0 0 1 19 8.6V11h3a1 1 0 1 1 0 2h-3v2.4a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6V13h-4v6.4A1.6 1.6 0 0 1 8.4 21H6.6A1.6 1.6 0 0 1 5 19.4V13H2a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiAlignVertCenterDetailed.displayName = "SvgSiAlignVertCenterDetailed";
const ForwardRef$5W = /*#__PURE__*/React.forwardRef(SvgSiAlignVertCenterDetailed);
const Memo$5W = /*#__PURE__*/React.memo(ForwardRef$5W);

const SvgSiAlignVertCenterSimple = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M1 12a1 1 0 0 1 1-1h7V4.6A1.6 1.6 0 0 1 10.6 3h2.8A1.6 1.6 0 0 1 15 4.6V11h7a1 1 0 1 1 0 2h-7v6.4a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 19.4V13H2a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiAlignVertCenterSimple.displayName = "SvgSiAlignVertCenterSimple";
const ForwardRef$5V = /*#__PURE__*/React.forwardRef(SvgSiAlignVertCenterSimple);
const Memo$5V = /*#__PURE__*/React.memo(ForwardRef$5V);

const SvgSiApple = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16.145 2.402c0 1.024-.44 2.048-1.062 2.786-.66.818-1.802 1.426-2.71 1.426-.104 0-.208-.014-.272-.026a2 2 0 0 1-.038-.362c0-1.038.532-2.062 1.102-2.71.726-.842 1.93-1.478 2.942-1.516.026.116.038.26.038.402m3.569 6.45.05-.033c-1.349-1.933-3.397-1.985-3.967-1.985-.872 0-1.653.31-2.309.57-.475.188-.885.35-1.217.35-.367 0-.787-.17-1.256-.358-.592-.24-1.26-.51-1.998-.51C6.528 6.886 4 8.95 4 12.837c0 2.424.934 4.979 2.09 6.623C7.088 20.86 7.956 22 9.2 22c.59 0 1.023-.183 1.478-.376.504-.214 1.036-.44 1.84-.44.814 0 1.3.212 1.768.416.437.19.857.374 1.513.374 1.36 0 2.254-1.23 3.11-2.462.96-1.4 1.363-2.774 1.375-2.838-.078-.026-2.685-1.077-2.685-4.045 0-2.39 1.777-3.555 2.115-3.777"
  }));
};
SvgSiApple.displayName = "SvgSiApple";
const ForwardRef$5U = /*#__PURE__*/React.forwardRef(SvgSiApple);
const Memo$5U = /*#__PURE__*/React.memo(ForwardRef$5U);

const SvgSiArchive = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M0 4.6A2.6 2.6 0 0 1 2.6 2h18.8A2.6 2.6 0 0 1 24 4.6v.8A2.6 2.6 0 0 1 21.4 8h-.486L20 18.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3.086 8H2.6A2.6 2.6 0 0 1 0 5.4zM2.6 4a.6.6 0 0 0-.6.6v.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6v-.8a.6.6 0 0 0-.6-.6zM15 9H9V7H7v2.2A1.8 1.8 0 0 0 8.8 11h6.4A1.8 1.8 0 0 0 17 9.2V7h-2z",
    clipRule: "evenodd"
  }));
};
SvgSiArchive.displayName = "SvgSiArchive";
const ForwardRef$5T = /*#__PURE__*/React.forwardRef(SvgSiArchive);
const Memo$5T = /*#__PURE__*/React.memo(ForwardRef$5T);

const SvgSiArchiveAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M0 4.6A2.6 2.6 0 0 1 2.6 2h18.8A2.6 2.6 0 0 1 24 4.6v.8A2.6 2.6 0 0 1 21.4 8h-.486L20 18.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3.086 8H2.6A2.6 2.6 0 0 1 0 5.4zM2.6 4a.6.6 0 0 0-.6.6v.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6v-.8a.6.6 0 0 0-.6-.6zm5.693 6.293a1 1 0 0 1 1.414 0L12 12.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13.414 14l2.293 2.293a1 1 0 0 1-1.414 1.414L12 15.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 14l-2.293-2.293a1 1 0 0 1 0-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiArchiveAlt.displayName = "SvgSiArchiveAlt";
const ForwardRef$5S = /*#__PURE__*/React.forwardRef(SvgSiArchiveAlt);
const Memo$5S = /*#__PURE__*/React.memo(ForwardRef$5S);

const SvgSiArrowDownward = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13 6a1 1 0 1 0-2 0v9.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 15.586z"
  }));
};
SvgSiArrowDownward.displayName = "SvgSiArrowDownward";
const ForwardRef$5R = /*#__PURE__*/React.forwardRef(SvgSiArrowDownward);
const Memo$5R = /*#__PURE__*/React.memo(ForwardRef$5R);

const SvgSiArrowDownwardCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m14.707.707-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V8a1 1 0 1 1 2 0v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414",
    clipRule: "evenodd"
  }));
};
SvgSiArrowDownwardCircle.displayName = "SvgSiArrowDownwardCircle";
const ForwardRef$5Q = /*#__PURE__*/React.forwardRef(SvgSiArrowDownwardCircle);
const Memo$5Q = /*#__PURE__*/React.memo(ForwardRef$5Q);

const SvgSiArrowDownwardSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21m5.893-4.293a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 13.586V8a1 1 0 1 0-2 0v5.586l-2.293-2.293a1 1 0 0 0-1.414 1.414z",
    clipRule: "evenodd"
  }));
};
SvgSiArrowDownwardSquare.displayName = "SvgSiArrowDownwardSquare";
const ForwardRef$5P = /*#__PURE__*/React.forwardRef(SvgSiArrowDownwardSquare);
const Memo$5P = /*#__PURE__*/React.memo(ForwardRef$5P);

const SvgSiArrowLeft = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M10.707 8.707a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L8.414 13H18a1 1 0 1 0 0-2H8.414z"
  }));
};
SvgSiArrowLeft.displayName = "SvgSiArrowLeft";
const ForwardRef$5O = /*#__PURE__*/React.forwardRef(SvgSiArrowLeft);
const Memo$5O = /*#__PURE__*/React.memo(ForwardRef$5O);

const SvgSiArrowLeftCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-.707-14.707-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 13H16a1 1 0 1 0 0-2h-5.586l2.293-2.293a1 1 0 0 0-1.414-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiArrowLeftCircle.displayName = "SvgSiArrowLeftCircle";
const ForwardRef$5N = /*#__PURE__*/React.forwardRef(SvgSiArrowLeftCircle);
const Memo$5N = /*#__PURE__*/React.memo(ForwardRef$5N);

const SvgSiArrowLeftSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H5.4A2.4 2.4 0 0 0 3 5.4m4.293 5.893a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 13H16a1 1 0 1 0 0-2h-5.586l2.293-2.293a1 1 0 0 0-1.414-1.414z",
    clipRule: "evenodd"
  }));
};
SvgSiArrowLeftSquare.displayName = "SvgSiArrowLeftSquare";
const ForwardRef$5M = /*#__PURE__*/React.forwardRef(SvgSiArrowLeftSquare);
const Memo$5M = /*#__PURE__*/React.memo(ForwardRef$5M);

const SvgSiArrowRight = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M14.707 7.293a1 1 0 1 0-1.414 1.414L15.586 11H6a1 1 0 1 0 0 2h9.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414z"
  }));
};
SvgSiArrowRight.displayName = "SvgSiArrowRight";
const ForwardRef$5L = /*#__PURE__*/React.forwardRef(SvgSiArrowRight);
const Memo$5L = /*#__PURE__*/React.memo(ForwardRef$5L);

const SvgSiArrowRightCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m.707-14.707 4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L13.586 13H8a1 1 0 1 1 0-2h5.586l-2.293-2.293a1 1 0 0 1 1.414-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiArrowRightCircle.displayName = "SvgSiArrowRightCircle";
const ForwardRef$5K = /*#__PURE__*/React.forwardRef(SvgSiArrowRightCircle);
const Memo$5K = /*#__PURE__*/React.memo(ForwardRef$5K);

const SvgSiArrowRightSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3h13.2A2.4 2.4 0 0 1 21 5.4m-4.293 5.893a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L13.586 13H8a1 1 0 1 1 0-2h5.586l-2.293-2.293a1 1 0 0 1 1.414-1.414z",
    clipRule: "evenodd"
  }));
};
SvgSiArrowRightSquare.displayName = "SvgSiArrowRightSquare";
const ForwardRef$5J = /*#__PURE__*/React.forwardRef(SvgSiArrowRightSquare);
const Memo$5J = /*#__PURE__*/React.memo(ForwardRef$5J);

const SvgSiArrowUpward = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.707 5.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11 8.414V18a1 1 0 1 0 2 0V8.414l2.293 2.293a1 1 0 0 0 1.414-1.414z"
  }));
};
SvgSiArrowUpward.displayName = "SvgSiArrowUpward";
const ForwardRef$5I = /*#__PURE__*/React.forwardRef(SvgSiArrowUpward);
const Memo$5I = /*#__PURE__*/React.memo(ForwardRef$5I);

const SvgSiArrowUpwardCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-14.707-.707 4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 10.414V16a1 1 0 1 1-2 0v-5.586l-2.293 2.293a1 1 0 0 1-1.414-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiArrowUpwardCircle.displayName = "SvgSiArrowUpwardCircle";
const ForwardRef$5H = /*#__PURE__*/React.forwardRef(SvgSiArrowUpwardCircle);
const Memo$5H = /*#__PURE__*/React.memo(ForwardRef$5H);

const SvgSiArrowUpwardSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m5.893 4.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 10.414V16a1 1 0 1 1-2 0v-5.586l-2.293 2.293a1 1 0 0 1-1.414-1.414z",
    clipRule: "evenodd"
  }));
};
SvgSiArrowUpwardSquare.displayName = "SvgSiArrowUpwardSquare";
const ForwardRef$5G = /*#__PURE__*/React.forwardRef(SvgSiArrowUpwardSquare);
const Memo$5G = /*#__PURE__*/React.memo(ForwardRef$5G);

const SvgSiArticle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.4 3h15.2A3.4 3.4 0 0 1 23 6.4v11.2a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 17.6V6.4A3.4 3.4 0 0 1 4.4 3M7 9a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m1 2a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiArticle.displayName = "SvgSiArticle";
const ForwardRef$5F = /*#__PURE__*/React.forwardRef(SvgSiArticle);
const Memo$5F = /*#__PURE__*/React.memo(ForwardRef$5F);

const SvgSiAssignment = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M11 3a1 1 0 1 1 2 0h2a3 3 0 1 0-6 0z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8v1.2a.8.8 0 0 0 .8.8h6.4a.8.8 0 0 0 .8-.8zm-9 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiAssignment.displayName = "SvgSiAssignment";
const ForwardRef$5E = /*#__PURE__*/React.forwardRef(SvgSiAssignment);
const Memo$5E = /*#__PURE__*/React.memo(ForwardRef$5E);

const SvgSiAttachment = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M20 7.3c0-.875-.347-1.714-.965-2.334a3.31 3.31 0 0 0-4.673-.001h.001l-9.397 9.398h-.001a3.31 3.31 0 0 0 0 4.671l.119.113a3.31 3.31 0 0 0 4.554-.113l6.35-6.354a1.35 1.35 0 0 0 0-1.907l-.098-.09a1.35 1.35 0 0 0-1.809.09L7.425 17.43a1 1 0 0 1-1.414-1.414l6.656-6.658a3.35 3.35 0 0 1 4.614-.114l.12.114.001.001a3.35 3.35 0 0 1 0 4.734l-6.352 6.356a5.31 5.31 0 0 1-7.498 0H3.55a5.31 5.31 0 0 1 0-7.499l9.4-9.4a5.31 5.31 0 0 1 7.306-.18l.191.18.001.002a5.31 5.31 0 0 1 0 7.498l-.138.137a1 1 0 1 1-1.413-1.414l.136-.136c.619-.62.966-1.46.966-2.336"
  }));
};
SvgSiAttachment.displayName = "SvgSiAttachment";
const ForwardRef$5D = /*#__PURE__*/React.forwardRef(SvgSiAttachment);
const Memo$5D = /*#__PURE__*/React.memo(ForwardRef$5D);

const SvgSiBallot = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M8 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4m5 1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0 6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm-7 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
    clipRule: "evenodd"
  }));
};
SvgSiBallot.displayName = "SvgSiBallot";
const ForwardRef$5C = /*#__PURE__*/React.forwardRef(SvgSiBallot);
const Memo$5C = /*#__PURE__*/React.memo(ForwardRef$5C);

const SvgSiBarChart = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13.4 2A1.6 1.6 0 0 1 15 3.6V21h1v-7.4a1.6 1.6 0 0 1 1.6-1.6h2.8a1.6 1.6 0 0 1 1.6 1.6V21a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2V8.6A1.6 1.6 0 0 1 3.6 7h2.8A1.6 1.6 0 0 1 8 8.6V21h1V3.6A1.6 1.6 0 0 1 10.6 2z"
  }));
};
SvgSiBarChart.displayName = "SvgSiBarChart";
const ForwardRef$5B = /*#__PURE__*/React.forwardRef(SvgSiBarChart);
const Memo$5B = /*#__PURE__*/React.memo(ForwardRef$5B);

const SvgSiBarcode = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4.4 3A1.4 1.4 0 0 0 3 4.4V6a1 1 0 0 1-2 0V4.4A3.4 3.4 0 0 1 4.4 1H6a1 1 0 0 1 0 2zM17 2a1 1 0 0 1 1-1h1.6A3.4 3.4 0 0 1 23 4.4V6a1 1 0 1 1-2 0V4.4A1.4 1.4 0 0 0 19.6 3H18a1 1 0 0 1-1-1M2 17a1 1 0 0 1 1 1v1.6A1.4 1.4 0 0 0 4.4 21H6a1 1 0 1 1 0 2H4.4A3.4 3.4 0 0 1 1 19.6V18a1 1 0 0 1 1-1m20 0a1 1 0 0 1 1 1v1.6a3.4 3.4 0 0 1-3.4 3.4H18a1 1 0 1 1 0-2h1.6a1.4 1.4 0 0 0 1.4-1.4V18a1 1 0 0 1 1-1m-4-9a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m-3 1a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm-5-1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M7 9a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z"
  }));
};
SvgSiBarcode.displayName = "SvgSiBarcode";
const ForwardRef$5A = /*#__PURE__*/React.forwardRef(SvgSiBarcode);
const Memo$5A = /*#__PURE__*/React.memo(ForwardRef$5A);

const SvgSiBarcodeScan = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4 5.4A1.4 1.4 0 0 1 5.4 4H7a1 1 0 0 0 0-2H5.4A3.4 3.4 0 0 0 2 5.4V7a1 1 0 0 0 2 0zM17 2a1 1 0 1 0 0 2h1.6A1.4 1.4 0 0 1 20 5.4V7a1 1 0 1 0 2 0V5.4A3.4 3.4 0 0 0 18.6 2zM4 17a1 1 0 1 0-2 0v1.6A3.4 3.4 0 0 0 5.4 22H7a1 1 0 1 0 0-2H5.4A1.4 1.4 0 0 1 4 18.6zm18 0a1 1 0 1 0-2 0v1.6a1.4 1.4 0 0 1-1.4 1.4H17a1 1 0 1 0 0 2h1.6a3.4 3.4 0 0 0 3.4-3.4zM1 11a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2z"
  }));
};
SvgSiBarcodeScan.displayName = "SvgSiBarcodeScan";
const ForwardRef$5z = /*#__PURE__*/React.forwardRef(SvgSiBarcodeScan);
const Memo$5z = /*#__PURE__*/React.memo(ForwardRef$5z);

const SvgSiBarcodeScanAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    fill: "currentColor",
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3.4 2A1.4 1.4 0 0 0 2 3.4V5a1 1 0 0 1-2 0V3.4A3.4 3.4 0 0 1 3.4 0H5a1 1 0 0 1 0 2zM18 1a1 1 0 0 1 1-1h1.6A3.4 3.4 0 0 1 24 3.4V5a1 1 0 1 1-2 0V3.4A1.4 1.4 0 0 0 20.6 2H19a1 1 0 0 1-1-1M1 18a1 1 0 0 1 1 1v1.6A1.4 1.4 0 0 0 3.4 22H5a1 1 0 1 1 0 2H3.4A3.4 3.4 0 0 1 0 20.6V19a1 1 0 0 1 1-1m22 0a1 1 0 0 1 1 1v1.6a3.4 3.4 0 0 1-3.4 3.4H19a1 1 0 1 1 0-2h1.6a1.4 1.4 0 0 0 1.4-1.4V19a1 1 0 0 1 1-1M9.4 5H6.6A1.6 1.6 0 0 0 5 6.6v2.8A1.6 1.6 0 0 0 6.6 11h2.8A1.6 1.6 0 0 0 11 9.4V6.6A1.6 1.6 0 0 0 9.4 5m-2.8 8h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8A1.6 1.6 0 0 1 9.4 19H6.6A1.6 1.6 0 0 1 5 17.4v-2.8A1.6 1.6 0 0 1 6.6 13m10.8-8h-2.8A1.6 1.6 0 0 0 13 6.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8A1.6 1.6 0 0 0 19 9.4V6.6A1.6 1.6 0 0 0 17.4 5m-2.8 8h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8a1.6 1.6 0 0 1-1.6-1.6v-2.8a1.6 1.6 0 0 1 1.6-1.6"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};
SvgSiBarcodeScanAlt.displayName = "SvgSiBarcodeScanAlt";
const ForwardRef$5y = /*#__PURE__*/React.forwardRef(SvgSiBarcodeScanAlt);
const Memo$5y = /*#__PURE__*/React.memo(ForwardRef$5y);

const SvgSiBarn = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10.69 3.418a2.2 2.2 0 0 1 2.58 0l10.279 6.746a1 1 0 0 1-1.098 1.672L21 10.884v7.704A2.4 2.4 0 0 1 18.6 21H5.4A2.4 2.4 0 0 1 3 18.588V10.88l-1.45.955a1 1 0 0 1-1.1-1.67zM7.95 20h8.1L12 18.312zM6 19.188l4.05-1.688L6 15.812zm7.95-1.688L18 19.188v-3.376zM12 16.688 16.05 15h-8.1zM11 11a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiBarn.displayName = "SvgSiBarn";
const ForwardRef$5x = /*#__PURE__*/React.forwardRef(SvgSiBarn);
const Memo$5x = /*#__PURE__*/React.memo(ForwardRef$5x);

const SvgSiBin = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19 7a1 1 0 0 1 1 1v11.6a3.4 3.4 0 0 1-3.4 3.4H7.4a3.4 3.4 0 0 1-3.395-3.226L4 19.6V8l.005-.103A1 1 0 0 1 5 7zM8 12v6h2v-6zm3 0v6h2v-6zm3 0v6h2v-6zm1.024-10.988A2.204 2.204 0 0 1 17 3.2V4h4a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2h4v-.8C7 1.988 7.988 1 9.2 1h5.6zM9.2 3c-.108 0-.2.092-.2.2V4h6v-.8a.205.205 0 0 0-.16-.196L14.8 3z",
    clipRule: "evenodd"
  }));
};
SvgSiBin.displayName = "SvgSiBin";
const ForwardRef$5w = /*#__PURE__*/React.forwardRef(SvgSiBin);
const Memo$5w = /*#__PURE__*/React.memo(ForwardRef$5w);

const SvgSiBluetooth = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M11.576 1.095a1 1 0 0 1 1.065.136l6 5a1 1 0 0 1 .005 1.533L13.639 12l5.007 4.236a1.002 1.002 0 0 1-.005 1.532l-6 5A1 1 0 0 1 11 22v-7.768l-5.355 4.532a1 1 0 0 1-1.291-1.528L10.542 12 4.355 6.764a1 1 0 0 1 1.29-1.528L11 9.766V2a1 1 0 0 1 .576-.905"
  }));
};
SvgSiBluetooth.displayName = "SvgSiBluetooth";
const ForwardRef$5v = /*#__PURE__*/React.forwardRef(SvgSiBluetooth);
const Memo$5v = /*#__PURE__*/React.memo(ForwardRef$5v);

const SvgSiBold = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M18 16c0-2.151-1.864-4-4.182-4H8v8h5.818C16.136 20 18 18.151 18 16m-3-9c0-1.603-1.394-3-3.25-3H8v6h3.75C13.606 10 15 8.603 15 7m2 0c0 1.276-.494 2.42-1.297 3.291C18.168 11.069 20 13.325 20 16c0 3.322-2.827 6-6.182 6H5a1 1 0 1 1 0-2h1V4H5a1 1 0 0 1 0-2h6.75C14.594 2 17 4.18 17 7"
  }));
};
SvgSiBold.displayName = "SvgSiBold";
const ForwardRef$5u = /*#__PURE__*/React.forwardRef(SvgSiBold);
const Memo$5u = /*#__PURE__*/React.memo(ForwardRef$5u);

const SvgSiBook = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M7.833 18c1.4 0 2.62.819 3.195 2.028a1 1 0 0 1-1.806.86A1.54 1.54 0 0 0 7.833 20H3a1 1 0 1 1 0-2zM21 18a1 1 0 1 1 0 2h-4.833c-.567 0-1.135.357-1.389.889a1 1 0 0 1-1.806-.86A3.58 3.58 0 0 1 16.167 18z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.889 3.006a4.33 4.33 0 0 1 3.11 1.564A4.33 4.33 0 0 1 15.333 3H22a1 1 0 0 1 1 1v12.001a1 1 0 0 1-1 1L15.333 17c-.658 0-1.085.162-1.372.354a1.93 1.93 0 0 0-.65.76A3.1 3.1 0 0 0 13 19.33v.009l-.005.097a1 1 0 0 1-1.99 0L11 19.334v-.005l-.004-.068a3.1 3.1 0 0 0-.305-1.151 1.9 1.9 0 0 0-.64-.76c-.28-.19-.698-.35-1.343-.35H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6.667zM11 5v12.334h2V5z",
    clipRule: "evenodd"
  }));
};
SvgSiBook.displayName = "SvgSiBook";
const ForwardRef$5t = /*#__PURE__*/React.forwardRef(SvgSiBook);
const Memo$5t = /*#__PURE__*/React.memo(ForwardRef$5t);

const SvgSiBookmark = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 17.025c-.142 0-.341.072-.588.208a7 7 0 0 0-.835.56c-.614.464-1.317 1.085-1.983 1.706a62 62 0 0 0-2.455 2.43l-.04.041-.013.014a.05.05 0 0 1-.055.012A.05.05 0 0 1 6 21.95V4.438A2.43 2.43 0 0 1 8.43 2h7.14A2.43 2.43 0 0 1 18 4.438V21.95a.05.05 0 0 1-.085.034h-.001l-.013-.014-.04-.041-.151-.158a67 67 0 0 0-2.304-2.272c-.666-.621-1.37-1.242-1.983-1.707a7 7 0 0 0-.835-.56c-.247-.135-.446-.207-.588-.207",
    clipRule: "evenodd"
  }));
};
SvgSiBookmark.displayName = "SvgSiBookmark";
const ForwardRef$5s = /*#__PURE__*/React.forwardRef(SvgSiBookmark);
const Memo$5s = /*#__PURE__*/React.memo(ForwardRef$5s);

const SvgSiBriefcase = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7H16V4.8A1.8 1.8 0 0 0 14.2 3H9.8A1.8 1.8 0 0 0 8 4.8zm2 0V5h4v2zm0 1v12H8V8zm6 0v12h-2V8z",
    clipRule: "evenodd"
  }));
};
SvgSiBriefcase.displayName = "SvgSiBriefcase";
const ForwardRef$5r = /*#__PURE__*/React.forwardRef(SvgSiBriefcase);
const Memo$5r = /*#__PURE__*/React.memo(ForwardRef$5r);

const SvgSiBriefcaseDetailed = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 4.8V7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7H16V4.8A1.8 1.8 0 0 0 14.2 3H9.8A1.8 1.8 0 0 0 8 4.8m2 .2v2h4V5zm.8 6.5a1.3 1.3 0 0 0-1.3 1.3v.2H3v2h6.5v.2a1.3 1.3 0 0 0 1.3 1.3h2.4a1.3 1.3 0 0 0 1.3-1.3V15H21v-2h-6.5v-.2a1.3 1.3 0 0 0-1.3-1.3z",
    clipRule: "evenodd"
  }));
};
SvgSiBriefcaseDetailed.displayName = "SvgSiBriefcaseDetailed";
const ForwardRef$5q = /*#__PURE__*/React.forwardRef(SvgSiBriefcaseDetailed);
const Memo$5q = /*#__PURE__*/React.memo(ForwardRef$5q);

const SvgSiBriefcaseMedical = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 4.8V7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7H16V4.8A1.8 1.8 0 0 0 14.2 3H9.8A1.8 1.8 0 0 0 8 4.8m2 .2v2h4V5zm2 5a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1",
    clipRule: "evenodd"
  }));
};
SvgSiBriefcaseMedical.displayName = "SvgSiBriefcaseMedical";
const ForwardRef$5p = /*#__PURE__*/React.forwardRef(SvgSiBriefcaseMedical);
const Memo$5p = /*#__PURE__*/React.memo(ForwardRef$5p);

const SvgSiBriefcases = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10 6V3.8A1.8 1.8 0 0 1 11.8 2h4.4A1.8 1.8 0 0 1 18 3.8V6h2.6A2.4 2.4 0 0 1 23 8.4v8.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V8.4A2.4 2.4 0 0 1 7.4 6zm2 0V4h4v2zm0 1v11h-2V7zm6 0v11h-2V7z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3 11a1 1 0 1 0-2 0v5.6C1 20.132 3.868 23 7.4 23H19a1 1 0 1 0 0-2H7.4A4.403 4.403 0 0 1 3 16.6z"
  }));
};
SvgSiBriefcases.displayName = "SvgSiBriefcases";
const ForwardRef$5o = /*#__PURE__*/React.forwardRef(SvgSiBriefcases);
const Memo$5o = /*#__PURE__*/React.memo(ForwardRef$5o);

const SvgSiBuilding = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M21.2 1A1.8 1.8 0 0 1 23 2.8v1.4A1.8 1.8 0 0 1 21.2 6H21v13.6a3.4 3.4 0 0 1-3.4 3.4H6.4A3.4 3.4 0 0 1 3 19.6V6h-.2A1.8 1.8 0 0 1 1 4.2V2.8A1.8 1.8 0 0 1 2.8 1zM9.8 18A1.8 1.8 0 0 0 8 19.8V22h2v-2h4v2h2v-2.2a1.8 1.8 0 0 0-1.8-1.8zM8 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1M8 7a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1M3 4h18V3H3z",
    clipRule: "evenodd"
  }));
};
SvgSiBuilding.displayName = "SvgSiBuilding";
const ForwardRef$5n = /*#__PURE__*/React.forwardRef(SvgSiBuilding);
const Memo$5n = /*#__PURE__*/React.memo(ForwardRef$5n);

const SvgSiBuildingAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M21 1a1 1 0 1 1 0 2v16.6a3.4 3.4 0 0 1-3.4 3.4H6.4A3.4 3.4 0 0 1 3 19.6V3a1 1 0 0 1 0-2zM9.8 18A1.8 1.8 0 0 0 8 19.8V22h2v-2h4v2h2v-2.2a1.8 1.8 0 0 0-1.8-1.8zM8 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM8 9a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM8 5a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiBuildingAlt1.displayName = "SvgSiBuildingAlt1";
const ForwardRef$5m = /*#__PURE__*/React.forwardRef(SvgSiBuildingAlt1);
const Memo$5m = /*#__PURE__*/React.memo(ForwardRef$5m);

const SvgSiBuildingAlt2 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M18 1a1 1 0 1 1 0 2v2h4a1 1 0 1 1 0 2v12.6a3.4 3.4 0 0 1-3.4 3.4H5.4A3.4 3.4 0 0 1 2 19.6V3a1 1 0 0 1 0-2zM8.8 18A1.8 1.8 0 0 0 7 19.8V22h2v-2h2v2h2v-2.2a1.8 1.8 0 0 0-1.8-1.8zm9.2 1.6c0 .499-.108.973-.302 1.4h.902a1.4 1.4 0 0 0 1.4-1.4V7h-2zM8 11a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1M8 5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiBuildingAlt2.displayName = "SvgSiBuildingAlt2";
const ForwardRef$5l = /*#__PURE__*/React.forwardRef(SvgSiBuildingAlt2);
const Memo$5l = /*#__PURE__*/React.memo(ForwardRef$5l);

const SvgSiBuildingAlt3 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19 1a1 1 0 1 1 0 2v2h4a1 1 0 1 1 0 2v12.6a3.4 3.4 0 0 1-3.4 3.4H4.3C2.343 23 1 21.348 1 19.553V7a1 1 0 0 1 0-2h4V3a1 1 0 0 1 0-2zm-8.2 17A1.8 1.8 0 0 0 9 19.8V22h2v-2h2v2h2v-2.2a1.8 1.8 0 0 0-1.8-1.8zM3 19.553C3 20.408 3.606 21 4.3 21h1.002A3.4 3.4 0 0 1 5 19.6V7H3zm16 .047c0 .499-.108.973-.302 1.4h.902a1.4 1.4 0 0 0 1.4-1.4V7h-2zM10 13a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiBuildingAlt3.displayName = "SvgSiBuildingAlt3";
const ForwardRef$5k = /*#__PURE__*/React.forwardRef(SvgSiBuildingAlt3);
const Memo$5k = /*#__PURE__*/React.memo(ForwardRef$5k);

const SvgSiBus = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M6.5 15a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m11 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M18.6 2A2.4 2.4 0 0 1 21 4.4v16a1.6 1.6 0 0 1-1.6 1.6h-.8a1.6 1.6 0 0 1-1.6-1.6V19H7v1.4A1.6 1.6 0 0 1 5.4 22h-.8A1.6 1.6 0 0 1 3 20.4v-16A2.4 2.4 0 0 1 5.4 2zM6.5 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M5.4 4a.4.4 0 0 0-.4.4V12h14V4.4a.4.4 0 0 0-.4-.4z",
    clipRule: "evenodd"
  }));
};
SvgSiBus.displayName = "SvgSiBus";
const ForwardRef$5j = /*#__PURE__*/React.forwardRef(SvgSiBus);
const Memo$5j = /*#__PURE__*/React.memo(ForwardRef$5j);

const SvgSiCancelPhoto = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.4 2h11.2A2.4 2.4 0 0 1 22 4.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 15.6V4.4A2.4 2.4 0 0 1 8.4 2m3.479 4.464a1 1 0 1 0-1.415 1.415L12.587 10l-2.122 2.121a1 1 0 0 0 1.415 1.415L14 11.414l2.121 2.122a1 1 0 1 0 1.415-1.415L15.414 10l2.122-2.121a1 1 0 0 0-1.415-1.415l-2.12 2.122z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4 4a1 1 0 0 0-2 0v11.6C2 19.132 4.868 22 8.4 22H20a1 1 0 1 0 0-2H8.4A4.403 4.403 0 0 1 4 15.6z"
  }));
};
SvgSiCancelPhoto.displayName = "SvgSiCancelPhoto";
const ForwardRef$5i = /*#__PURE__*/React.forwardRef(SvgSiCancelPhoto);
const Memo$5i = /*#__PURE__*/React.memo(ForwardRef$5i);

const SvgSiCancelPresentation = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4m13.55 3.05a1 1 0 0 1 0 1.414L13.414 12l3.536 3.536a1 1 0 0 1-1.414 1.414L12 13.414 8.464 16.95a1 1 0 0 1-1.414-1.414L10.586 12 7.05 8.464A1 1 0 1 1 8.464 7.05L12 10.586l3.536-3.536a1 1 0 0 1 1.414 0",
    clipRule: "evenodd"
  }));
};
SvgSiCancelPresentation.displayName = "SvgSiCancelPresentation";
const ForwardRef$5h = /*#__PURE__*/React.forwardRef(SvgSiCancelPresentation);
const Memo$5h = /*#__PURE__*/React.memo(ForwardRef$5h);

const SvgSiCastle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M18 1a1 1 0 0 1 1 1v7h2v-.953a1 1 0 1 1 2 0V19.6a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 19.6V8a1 1 0 0 1 2 0v1h2V2a1 1 0 0 1 2 0v1h2V2a1 1 0 1 1 2 0v1h2V2a1 1 0 1 1 2 0v1h2V2a1 1 0 0 1 1-1m-6 13a4 4 0 0 0-4 4v4h2v-4a2 2 0 0 1 4 0v4h2v-4a4 4 0 0 0-4-4m-7-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm12 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-6-6a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiCastle.displayName = "SvgSiCastle";
const ForwardRef$5g = /*#__PURE__*/React.forwardRef(SvgSiCastle);
const Memo$5g = /*#__PURE__*/React.memo(ForwardRef$5g);

const SvgSiCastleAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9.2 1A1.8 1.8 0 0 1 11 2.8V5h2V2.8A1.8 1.8 0 0 1 14.8 1h2.4A1.8 1.8 0 0 1 19 2.8V7h4a1 1 0 1 1 0 2v10.6a3.4 3.4 0 0 1-3.4 3.4H4.5C2.65 23 1 21.458 1 19.553V9a1 1 0 0 1 0-2h4V2.8A1.8 1.8 0 0 1 6.8 1zm1.6 16A1.8 1.8 0 0 0 9 18.8V22h2v-3h2v3h2v-3.2a1.8 1.8 0 0 0-1.8-1.8zm-.8-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm1-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM8 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
    clipRule: "evenodd"
  }));
};
SvgSiCastleAlt1.displayName = "SvgSiCastleAlt1";
const ForwardRef$5f = /*#__PURE__*/React.forwardRef(SvgSiCastleAlt1);
const Memo$5f = /*#__PURE__*/React.memo(ForwardRef$5f);

const SvgSiChat = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65a1 1 0 0 1-1.562 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.662 0-3-1.338-3-3V6c0-1.662 1.338-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3"
  }));
};
SvgSiChat.displayName = "SvgSiChat";
const ForwardRef$5e = /*#__PURE__*/React.forwardRef(SvgSiChat);
const Memo$5e = /*#__PURE__*/React.memo(ForwardRef$5e);

const SvgSiChatText = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M16.475 16H19c1.663 0 3-1.338 3-3V6c0-1.662-1.337-3-3-3H5C3.338 3 2 4.338 2 6v7c0 1.662 1.338 3 3 3h2.513c.3 0 .587.137.774.375l2.925 3.65c.4.5 1.163.5 1.563 0l2.925-3.65a.99.99 0 0 1 .775-.375M7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiChatText.displayName = "SvgSiChatText";
const ForwardRef$5d = /*#__PURE__*/React.forwardRef(SvgSiChatText);
const Memo$5d = /*#__PURE__*/React.memo(ForwardRef$5d);

const SvgSiCheck = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.633 6.226a1 1 0 0 1 .141 1.407l-9 11a1 1 0 0 1-1.481.074l-5-5a1 1 0 1 1 1.414-1.414l4.219 4.219 8.3-10.145a1 1 0 0 1 1.407-.141",
    clipRule: "evenodd"
  }));
};
SvgSiCheck.displayName = "SvgSiCheck";
const ForwardRef$5c = /*#__PURE__*/React.forwardRef(SvgSiCheck);
const Memo$5c = /*#__PURE__*/React.memo(ForwardRef$5c);

const SvgSiCheckAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.47 4.118a1 1 0 0 1 .412 1.353l-8 15a1 1 0 0 1-1.59.236l-6-6a1 1 0 1 1 1.415-1.414l5.046 5.046 7.365-13.81a1 1 0 0 1 1.353-.411",
    clipRule: "evenodd"
  }));
};
SvgSiCheckAlt.displayName = "SvgSiCheckAlt";
const ForwardRef$5b = /*#__PURE__*/React.forwardRef(SvgSiCheckAlt);
const Memo$5b = /*#__PURE__*/React.memo(ForwardRef$5b);

const SvgSiCheckCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.186-2.419a1 1 0 1 0-1.628-1.162l-4.314 6.04-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z",
    clipRule: "evenodd"
  }));
};
SvgSiCheckCircle.displayName = "SvgSiCheckCircle";
const ForwardRef$5a = /*#__PURE__*/React.forwardRef(SvgSiCheckCircle);
const Memo$5a = /*#__PURE__*/React.memo(ForwardRef$5a);

const SvgSiCheckSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m11.414 6.581a1 1 0 1 0-1.628-1.162l-4.314 6.04-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z",
    clipRule: "evenodd"
  }));
};
SvgSiCheckSquare.displayName = "SvgSiCheckSquare";
const ForwardRef$59 = /*#__PURE__*/React.forwardRef(SvgSiCheckSquare);
const Memo$59 = /*#__PURE__*/React.memo(ForwardRef$59);

const SvgSiChecklist = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M8.707 6.707a1 1 0 0 0-1.414-1.414L4 8.586 2.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0zM12 7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zm-3.293 6.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L4 16.586l3.293-3.293a1 1 0 0 1 1.414 0M12 15a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"
  }));
};
SvgSiChecklist.displayName = "SvgSiChecklist";
const ForwardRef$58 = /*#__PURE__*/React.forwardRef(SvgSiChecklist);
const Memo$58 = /*#__PURE__*/React.memo(ForwardRef$58);

const SvgSiChecklistAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M22.707 6.707a1 1 0 0 0-1.414-1.414L18 8.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0zM2 7a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2zm20.707 6.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L18 16.586l3.293-3.293a1 1 0 0 1 1.414 0M2 15a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"
  }));
};
SvgSiChecklistAlt.displayName = "SvgSiChecklistAlt";
const ForwardRef$57 = /*#__PURE__*/React.forwardRef(SvgSiChecklistAlt);
const Memo$57 = /*#__PURE__*/React.memo(ForwardRef$57);

const SvgSiChevronLeft = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14.707 7.293a1 1 0 0 1 0 1.414L11.414 12l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0",
    clipRule: "evenodd"
  }));
};
SvgSiChevronLeft.displayName = "SvgSiChevronLeft";
const ForwardRef$56 = /*#__PURE__*/React.forwardRef(SvgSiChevronLeft);
const Memo$56 = /*#__PURE__*/React.memo(ForwardRef$56);

const SvgSiChevronLeftAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M16.707 3.293a1 1 0 0 1 0 1.414L9.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 0",
    clipRule: "evenodd"
  }));
};
SvgSiChevronLeftAlt.displayName = "SvgSiChevronLeftAlt";
const ForwardRef$55 = /*#__PURE__*/React.forwardRef(SvgSiChevronLeftAlt);
const Memo$55 = /*#__PURE__*/React.memo(ForwardRef$55);

const SvgSiChevronLeftCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-7.793-3.293a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.914 12z",
    clipRule: "evenodd"
  }));
};
SvgSiChevronLeftCircle.displayName = "SvgSiChevronLeftCircle";
const ForwardRef$54 = /*#__PURE__*/React.forwardRef(SvgSiChevronLeftCircle);
const Memo$54 = /*#__PURE__*/React.memo(ForwardRef$54);

const SvgSiChevronLeftSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m8.807 5.707a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.914 12z",
    clipRule: "evenodd"
  }));
};
SvgSiChevronLeftSquare.displayName = "SvgSiChevronLeftSquare";
const ForwardRef$53 = /*#__PURE__*/React.forwardRef(SvgSiChevronLeftSquare);
const Memo$53 = /*#__PURE__*/React.memo(ForwardRef$53);

const SvgSiChevronRight = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 0 1 0-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiChevronRight.displayName = "SvgSiChevronRight";
const ForwardRef$52 = /*#__PURE__*/React.forwardRef(SvgSiChevronRight);
const Memo$52 = /*#__PURE__*/React.memo(ForwardRef$52);

const SvgSiChevronRightAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7.293 3.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414L14.586 12 7.293 4.707a1 1 0 0 1 0-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiChevronRightAlt.displayName = "SvgSiChevronRightAlt";
const ForwardRef$51 = /*#__PURE__*/React.forwardRef(SvgSiChevronRightAlt);
const Memo$51 = /*#__PURE__*/React.memo(ForwardRef$51);

const SvgSiChevronRightCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M11.207 7.293a1 1 0 0 0-1.414 1.414L13.086 12l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414z",
    clipRule: "evenodd"
  }));
};
SvgSiChevronRightCircle.displayName = "SvgSiChevronRightCircle";
const ForwardRef$50 = /*#__PURE__*/React.forwardRef(SvgSiChevronRightCircle);
const Memo$50 = /*#__PURE__*/React.memo(ForwardRef$50);

const SvgSiChevronRightSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m5.807 4.293a1 1 0 0 0-1.414 1.414L13.086 12l-3.293 3.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414z",
    clipRule: "evenodd"
  }));
};
SvgSiChevronRightSquare.displayName = "SvgSiChevronRightSquare";
const ForwardRef$4$ = /*#__PURE__*/React.forwardRef(SvgSiChevronRightSquare);
const Memo$4$ = /*#__PURE__*/React.memo(ForwardRef$4$);

const SvgSiCity = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9 1a1 1 0 0 1 1 1v8h5V6a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1v14.6a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 19.6V3a1 1 0 0 1 0-2zM5 17a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm7 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm7 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM5 14a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm7 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm7 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM5 11a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm14 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM5 8a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2zm14 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM5 5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiCity.displayName = "SvgSiCity";
const ForwardRef$4_ = /*#__PURE__*/React.forwardRef(SvgSiCity);
const Memo$4_ = /*#__PURE__*/React.memo(ForwardRef$4_);

const SvgSiClearAll = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M8 7a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m-2 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
  }));
};
SvgSiClearAll.displayName = "SvgSiClearAll";
const ForwardRef$4Z = /*#__PURE__*/React.forwardRef(SvgSiClearAll);
const Memo$4Z = /*#__PURE__*/React.memo(ForwardRef$4Z);

const SvgSiClearDay = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m0 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M1 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m18 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M7.047 16.953a1 1 0 0 1 0 1.414l-1.41 1.41a1 1 0 1 1-1.414-1.414l1.41-1.41a1 1 0 0 1 1.414 0m12.73-12.73a1 1 0 0 1 0 1.414l-1.41 1.41a1 1 0 1 1-1.414-1.414l1.41-1.41a1 1 0 0 1 1.414 0m-2.824 12.73a1 1 0 0 1 1.414 0l1.41 1.41a1 1 0 1 1-1.414 1.414l-1.41-1.41a1 1 0 0 1 0-1.414M4.223 4.223a1 1 0 0 1 1.414 0l1.41 1.41a1 1 0 0 1-1.414 1.414l-1.41-1.41a1 1 0 0 1 0-1.414M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
  }));
};
SvgSiClearDay.displayName = "SvgSiClearDay";
const ForwardRef$4Y = /*#__PURE__*/React.forwardRef(SvgSiClearDay);
const Memo$4Y = /*#__PURE__*/React.memo(ForwardRef$4Y);

const SvgSiClick = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M10.293 10.293a1 1 0 0 1 1.11-.208l10 4.4a1.001 1.001 0 0 1-.15 1.882l-3.87 1.015-1.016 3.872a1 1 0 0 1-1.882.148l-4.4-10a1 1 0 0 1 .208-1.109m-3.948 5.946a1 1 0 1 1 1.414 1.414l-2.121 2.121a1 1 0 0 1-1.414-1.414zm-1.34-5.244a1 1 0 1 1 0 2h-3a1 1 0 0 1 0-2zm-.781-6.77a1 1 0 0 1 1.414 0l2.121 2.122A1 1 0 0 1 6.345 7.76L4.224 5.64a1 1 0 0 1 0-1.414m14.142-.006a1 1 0 1 1 1.413 1.414l-2.12 2.12a1 1 0 0 1-1.415-1.413zM11 5V2a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0"
  }));
};
SvgSiClick.displayName = "SvgSiClick";
const ForwardRef$4X = /*#__PURE__*/React.forwardRef(SvgSiClick);
const Memo$4X = /*#__PURE__*/React.memo(ForwardRef$4X);

const SvgSiClipboard = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7 3V1.8A1.8 1.8 0 0 1 8.8 0h6.4A1.8 1.8 0 0 1 17 1.8V3h1.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3zm2-1h6v2H9z",
    clipRule: "evenodd"
  }));
};
SvgSiClipboard.displayName = "SvgSiClipboard";
const ForwardRef$4W = /*#__PURE__*/React.forwardRef(SvgSiClipboard);
const Memo$4W = /*#__PURE__*/React.memo(ForwardRef$4W);

const SvgSiClipboardAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 0a3 3 0 0 0-3 3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H15a3 3 0 0 0-3-3m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
    clipRule: "evenodd"
  }));
};
SvgSiClipboardAlt.displayName = "SvgSiClipboardAlt";
const ForwardRef$4V = /*#__PURE__*/React.forwardRef(SvgSiClipboardAlt);
const Memo$4V = /*#__PURE__*/React.memo(ForwardRef$4V);

const SvgSiClipboardCheck = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7 1.8V3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H17V1.8A1.8 1.8 0 0 0 15.2 0H8.8A1.8 1.8 0 0 0 7 1.8m8 .2H9v2h6zm1.814 8.581a1 1 0 1 0-1.628-1.162l-4.314 6.04-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z",
    clipRule: "evenodd"
  }));
};
SvgSiClipboardCheck.displayName = "SvgSiClipboardCheck";
const ForwardRef$4U = /*#__PURE__*/React.forwardRef(SvgSiClipboardCheck);
const Memo$4U = /*#__PURE__*/React.memo(ForwardRef$4U);

const SvgSiClipboardCheckAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9 3a3 3 0 1 1 6 0h3.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m4.814 8.581a1 1 0 1 0-1.628-1.162l-4.314 6.04-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z",
    clipRule: "evenodd"
  }));
};
SvgSiClipboardCheckAlt.displayName = "SvgSiClipboardCheckAlt";
const ForwardRef$4T = /*#__PURE__*/React.forwardRef(SvgSiClipboardCheckAlt);
const Memo$4T = /*#__PURE__*/React.memo(ForwardRef$4T);

const SvgSiClipboardFilled = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7 1.8V3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H17V1.8A1.8 1.8 0 0 0 15.2 0H8.8A1.8 1.8 0 0 0 7 1.8m8 .2H9v2h6zm-9 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiClipboardFilled.displayName = "SvgSiClipboardFilled";
const ForwardRef$4S = /*#__PURE__*/React.forwardRef(SvgSiClipboardFilled);
const Memo$4S = /*#__PURE__*/React.memo(ForwardRef$4S);

const SvgSiClipboardFilledAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 0a3 3 0 0 0-3 3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H15a3 3 0 0 0-3-3m-1 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-5 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiClipboardFilledAlt.displayName = "SvgSiClipboardFilledAlt";
const ForwardRef$4R = /*#__PURE__*/React.forwardRef(SvgSiClipboardFilledAlt);
const Memo$4R = /*#__PURE__*/React.memo(ForwardRef$4R);

const SvgSiClock = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-9-6a1 1 0 1 0-2 0v5H8a1 1 0 1 0 0 2h3.8a1.2 1.2 0 0 0 1.2-1.2z",
    clipRule: "evenodd"
  }));
};
SvgSiClock.displayName = "SvgSiClock";
const ForwardRef$4Q = /*#__PURE__*/React.forwardRef(SvgSiClock);
const Memo$4Q = /*#__PURE__*/React.memo(ForwardRef$4Q);

const SvgSiClockAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-9-6a1 1 0 1 0-2 0v5.844c0 .55.375 1.03.909 1.164l3.848.962a1 1 0 1 0 .486-1.94L13 11.22z",
    clipRule: "evenodd"
  }));
};
SvgSiClockAlt.displayName = "SvgSiClockAlt";
const ForwardRef$4P = /*#__PURE__*/React.forwardRef(SvgSiClockAlt);
const Memo$4P = /*#__PURE__*/React.memo(ForwardRef$4P);

const SvgSiClose = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16.95 8.464a1 1 0 0 0-1.414-1.414L12 10.586 8.464 7.05A1 1 0 1 0 7.05 8.464L10.586 12 7.05 15.536a1 1 0 1 0 1.414 1.414L12 13.414l3.536 3.536a1 1 0 1 0 1.414-1.414L13.414 12z"
  }));
};
SvgSiClose.displayName = "SvgSiClose";
const ForwardRef$4O = /*#__PURE__*/React.forwardRef(SvgSiClose);
const Memo$4O = /*#__PURE__*/React.memo(ForwardRef$4O);

const SvgSiCloseCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.05-4.95a1 1 0 0 1 0 1.414L13.414 12l3.536 3.536a1 1 0 0 1-1.414 1.414L12 13.414 8.464 16.95a1 1 0 1 1-1.414-1.414L10.586 12 7.05 8.464A1 1 0 1 1 8.464 7.05L12 10.586l3.536-3.536a1 1 0 0 1 1.414 0",
    clipRule: "evenodd"
  }));
};
SvgSiCloseCircle.displayName = "SvgSiCloseCircle";
const ForwardRef$4N = /*#__PURE__*/React.forwardRef(SvgSiCloseCircle);
const Memo$4N = /*#__PURE__*/React.memo(ForwardRef$4N);

const SvgSiCloseSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m11.55 4.05a1 1 0 0 1 0 1.414L13.414 12l3.536 3.536a1 1 0 0 1-1.414 1.414L12 13.414 8.464 16.95a1 1 0 1 1-1.414-1.414L10.586 12 7.05 8.464A1 1 0 1 1 8.464 7.05L12 10.586l3.536-3.536a1 1 0 0 1 1.414 0",
    clipRule: "evenodd"
  }));
};
SvgSiCloseSquare.displayName = "SvgSiCloseSquare";
const ForwardRef$4M = /*#__PURE__*/React.forwardRef(SvgSiCloseSquare);
const Memo$4M = /*#__PURE__*/React.memo(ForwardRef$4M);

const SvgSiCloud = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.178 18.555H18.28a4.7 4.7 0 1 0 0-9.4 5 5 0 0 0-.783.07A6.267 6.267 0 0 0 5.87 11.042q-.123.617-.125 1.246v.446a3.133 3.133 0 1 0-1.567 5.82",
    clipRule: "evenodd"
  }));
};
SvgSiCloud.displayName = "SvgSiCloud";
const ForwardRef$4L = /*#__PURE__*/React.forwardRef(SvgSiCloud);
const Memo$4L = /*#__PURE__*/React.memo(ForwardRef$4L);

const SvgSiCode = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M8.707 6.707a1 1 0 0 0-1.414-1.414l-6 6a1 1 0 0 0 0 1.414l6 6a1 1 0 0 0 1.414-1.414L3.414 12zm8-1.414a1 1 0 1 0-1.414 1.414L20.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414z"
  }));
};
SvgSiCode.displayName = "SvgSiCode";
const ForwardRef$4K = /*#__PURE__*/React.forwardRef(SvgSiCode);
const Memo$4K = /*#__PURE__*/React.memo(ForwardRef$4K);

const SvgSiCodeMuted = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15.707 7.293a1 1 0 1 0-1.414 1.414L17.586 12l-3.293 3.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414zm-6 1.414a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L6.414 12z"
  }));
};
SvgSiCodeMuted.displayName = "SvgSiCodeMuted";
const ForwardRef$4J = /*#__PURE__*/React.forwardRef(SvgSiCodeMuted);
const Memo$4J = /*#__PURE__*/React.memo(ForwardRef$4J);

const SvgSiColumns = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M13 20V4h-2v16z",
    clipRule: "evenodd"
  }));
};
SvgSiColumns.displayName = "SvgSiColumns";
const ForwardRef$4I = /*#__PURE__*/React.forwardRef(SvgSiColumns);
const Memo$4I = /*#__PURE__*/React.memo(ForwardRef$4I);

const SvgSiCopy = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4 5.4C4 4.622 4.622 4 5.4 4h7.2c.778 0 1.4.622 1.4 1.4V6a1 1 0 1 0 2 0v-.6C16 3.518 14.482 2 12.6 2H5.4A3.394 3.394 0 0 0 2 5.4v7.2C2 14.482 3.518 16 5.4 16H6a1 1 0 1 0 0-2h-.6c-.778 0-1.4-.622-1.4-1.4z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M9 11.4A2.4 2.4 0 0 1 11.4 9h7.2a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4h-7.2A2.4 2.4 0 0 1 9 18.6z"
  }));
};
SvgSiCopy.displayName = "SvgSiCopy";
const ForwardRef$4H = /*#__PURE__*/React.forwardRef(SvgSiCopy);
const Memo$4H = /*#__PURE__*/React.memo(ForwardRef$4H);

const SvgSiCopyAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M5.4 3h7.2A2.4 2.4 0 0 1 15 5.4v7.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 12.6V5.4A2.4 2.4 0 0 1 5.4 3"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M18 10h.6c.778 0 1.4.622 1.4 1.4v7.2c0 .778-.622 1.4-1.4 1.4h-7.2c-.778 0-1.4-.622-1.4-1.4V18a1 1 0 1 0-2 0v.6c0 1.882 1.518 3.4 3.4 3.4h7.2c1.882 0 3.4-1.518 3.4-3.4v-7.2C22 9.518 20.482 8 18.6 8H18a1 1 0 1 0 0 2"
  }));
};
SvgSiCopyAlt.displayName = "SvgSiCopyAlt";
const ForwardRef$4G = /*#__PURE__*/React.forwardRef(SvgSiCopyAlt);
const Memo$4G = /*#__PURE__*/React.memo(ForwardRef$4G);

const SvgSiCopyright = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10m-9.772-5C9.511 7 7.66 9.194 7.66 12s1.852 5 4.567 5c.975 0 1.851-.271 2.565-.8.711-.528 1.205-1.27 1.488-2.124a1 1 0 1 0-1.9-.628c-.17.52-.444.896-.78 1.145-.331.246-.779.407-1.373.407-1.414 0-2.567-1.092-2.567-3s1.153-3 2.567-3c.594 0 1.042.161 1.374.407.335.249.608.626.78 1.145a1 1 0 1 0 1.899-.628c-.283-.854-.777-1.596-1.488-2.123-.714-.53-1.59-.801-2.565-.801",
    clipRule: "evenodd"
  }));
};
SvgSiCopyright.displayName = "SvgSiCopyright";
const ForwardRef$4F = /*#__PURE__*/React.forwardRef(SvgSiCopyright);
const Memo$4F = /*#__PURE__*/React.memo(ForwardRef$4F);

const SvgSiCopyrightAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10m-9.863-5c-1.303 0-2.436.493-3.227 1.431-.773.92-1.14 2.17-1.14 3.566v.01c0 1.396.369 2.646 1.144 3.564.792.937 1.925 1.429 3.229 1.429 2.012 0 3.713-1.162 4.07-3.124l-1.968-.358c-.151.833-.864 1.482-2.102 1.482-.773 0-1.325-.275-1.701-.72-.392-.464-.672-1.21-.672-2.272v-.01c0-1.066.28-1.814.67-2.278.375-.445.925-.72 1.697-.72 1.174 0 1.96.706 2.104 1.631l1.977-.307C15.906 8.316 14.183 7 12.138 7",
    clipRule: "evenodd"
  }));
};
SvgSiCopyrightAlt.displayName = "SvgSiCopyrightAlt";
const ForwardRef$4E = /*#__PURE__*/React.forwardRef(SvgSiCopyrightAlt);
const Memo$4E = /*#__PURE__*/React.memo(ForwardRef$4E);

const SvgSiCreditCard = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M22 9H2v2h20z",
    clipRule: "evenodd"
  }));
};
SvgSiCreditCard.displayName = "SvgSiCreditCard";
const ForwardRef$4D = /*#__PURE__*/React.forwardRef(SvgSiCreditCard);
const Memo$4D = /*#__PURE__*/React.memo(ForwardRef$4D);

const SvgSiCreditCardDetailed = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M22 9H2v2h20zm-6 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiCreditCardDetailed.displayName = "SvgSiCreditCardDetailed";
const ForwardRef$4C = /*#__PURE__*/React.forwardRef(SvgSiCreditCardDetailed);
const Memo$4C = /*#__PURE__*/React.memo(ForwardRef$4C);

const SvgSiCreditCardDetailedAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M2 8h20v3H2z",
    clipRule: "evenodd"
  }));
};
SvgSiCreditCardDetailedAlt.displayName = "SvgSiCreditCardDetailedAlt";
const ForwardRef$4B = /*#__PURE__*/React.forwardRef(SvgSiCreditCardDetailedAlt);
const Memo$4B = /*#__PURE__*/React.memo(ForwardRef$4B);

const SvgSiCrop = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M17 22v-3H6a1 1 0 0 1-1-1V7H2a1 1 0 0 1 0-2h3V2a1 1 0 0 1 2 0v3h11a1 1 0 0 1 1 1v11h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0M7 17h10V7H7z"
  }));
};
SvgSiCrop.displayName = "SvgSiCrop";
const ForwardRef$4A = /*#__PURE__*/React.forwardRef(SvgSiCrop);
const Memo$4A = /*#__PURE__*/React.memo(ForwardRef$4A);

const SvgSiCrosshairDetailed = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13 2a1 1 0 1 0-2 0v1h2zm-3 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13 3.055V5a1 1 0 1 1-2 0V3.055A9.004 9.004 0 0 0 3.055 11H5a1 1 0 1 1 0 2H3.055A9.004 9.004 0 0 0 11 20.945V19a1 1 0 1 1 2 0v1.945A9.004 9.004 0 0 0 20.945 13H19a1 1 0 1 1 0-2h1.945A9.004 9.004 0 0 0 13 3.055M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M21 11v2h1a1 1 0 1 0 0-2zm-8 10h-2v1a1 1 0 1 0 2 0zM3 13v-2H2a1 1 0 1 0 0 2z"
  }));
};
SvgSiCrosshairDetailed.displayName = "SvgSiCrosshairDetailed";
const ForwardRef$4z = /*#__PURE__*/React.forwardRef(SvgSiCrosshairDetailed);
const Memo$4z = /*#__PURE__*/React.memo(ForwardRef$4z);

const SvgSiCrosshairSimple = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12M13 2v4a1 1 0 1 1-2 0V2zM2 11h4a1 1 0 1 1 0 2H2zm16 0a1 1 0 1 0 0 2h4v-2zm-5 7a1 1 0 1 0-2 0v4h2z",
    clipRule: "evenodd"
  }));
};
SvgSiCrosshairSimple.displayName = "SvgSiCrosshairSimple";
const ForwardRef$4y = /*#__PURE__*/React.forwardRef(SvgSiCrosshairSimple);
const Memo$4y = /*#__PURE__*/React.memo(ForwardRef$4y);

const SvgSiDangerous = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7.91 3.23 3.23 7.913v-.01a.8.8 0 0 0-.23.57v7.054c0 .22.08.42.23.57L7.9 20.77c.15.15.36.23.57.23h7.06c.22 0 .42-.08.57-.23l4.67-4.673a.8.8 0 0 0 .23-.57V8.473c0-.22-.08-.42-.23-.57L16.1 3.23a.8.8 0 0 0-.57-.23H8.48c-.22 0-.42.08-.57.23m1.797 5.063a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586z",
    clipRule: "evenodd"
  }));
};
SvgSiDangerous.displayName = "SvgSiDangerous";
const ForwardRef$4x = /*#__PURE__*/React.forwardRef(SvgSiDangerous);
const Memo$4x = /*#__PURE__*/React.memo(ForwardRef$4x);

const SvgSiDashboard = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M5.6 2A2.6 2.6 0 0 0 3 4.6v4.8A2.6 2.6 0 0 0 5.6 12h2.8A2.6 2.6 0 0 0 11 9.4V4.6A2.6 2.6 0 0 0 8.4 2zm0 12A2.6 2.6 0 0 0 3 16.6v2.8A2.6 2.6 0 0 0 5.6 22h2.8a2.6 2.6 0 0 0 2.6-2.6v-2.8A2.6 2.6 0 0 0 8.4 14zm10-12A2.6 2.6 0 0 0 13 4.6v2.8a2.6 2.6 0 0 0 2.6 2.6h2.8A2.6 2.6 0 0 0 21 7.4V4.6A2.6 2.6 0 0 0 18.4 2zm0 10a2.6 2.6 0 0 0-2.6 2.6v4.8a2.6 2.6 0 0 0 2.6 2.6h2.8a2.6 2.6 0 0 0 2.6-2.6v-4.8a2.6 2.6 0 0 0-2.6-2.6z"
  }));
};
SvgSiDashboard.displayName = "SvgSiDashboard";
const ForwardRef$4w = /*#__PURE__*/React.forwardRef(SvgSiDashboard);
const Memo$4w = /*#__PURE__*/React.memo(ForwardRef$4w);

const SvgSiDashboardCustomize = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3 5.6A2.6 2.6 0 0 1 5.6 3h2.8A2.6 2.6 0 0 1 11 5.6v2.8A2.6 2.6 0 0 1 8.4 11H5.6A2.6 2.6 0 0 1 3 8.4zm0 10A2.6 2.6 0 0 1 5.6 13h2.8a2.6 2.6 0 0 1 2.6 2.6v2.8A2.6 2.6 0 0 1 8.4 21H5.6A2.6 2.6 0 0 1 3 18.4zm10-10A2.6 2.6 0 0 1 15.6 3h2.8A2.6 2.6 0 0 1 21 5.6v2.8a2.6 2.6 0 0 1-2.6 2.6h-2.8A2.6 2.6 0 0 1 13 8.4zm4 7.4a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1"
  }));
};
SvgSiDashboardCustomize.displayName = "SvgSiDashboardCustomize";
const ForwardRef$4v = /*#__PURE__*/React.forwardRef(SvgSiDashboardCustomize);
const Memo$4v = /*#__PURE__*/React.memo(ForwardRef$4v);

const SvgSiDashboardHorz = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M4 13v-2h16v2h-9v7H9v-7z",
    clipRule: "evenodd"
  }));
};
SvgSiDashboardHorz.displayName = "SvgSiDashboardHorz";
const ForwardRef$4u = /*#__PURE__*/React.forwardRef(SvgSiDashboardHorz);
const Memo$4u = /*#__PURE__*/React.memo(ForwardRef$4u);

const SvgSiDashboardVert = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M13 4v5h7v2h-7v9h-2V4z",
    clipRule: "evenodd"
  }));
};
SvgSiDashboardVert.displayName = "SvgSiDashboardVert";
const ForwardRef$4t = /*#__PURE__*/React.forwardRef(SvgSiDashboardVert);
const Memo$4t = /*#__PURE__*/React.memo(ForwardRef$4t);

const SvgSiDeleteAlarm = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M6.707 2.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0m10.586 0a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16m3.536-10.121a1 1 0 1 0-1.415-1.414L12 11.585l-2.121-2.12a1 1 0 0 0-1.415 1.414L10.586 13l-2.122 2.121a1 1 0 1 0 1.415 1.415L12 14.414l2.121 2.122a1 1 0 0 0 1.415-1.415l-2.122-2.12z",
    clipRule: "evenodd"
  }));
};
SvgSiDeleteAlarm.displayName = "SvgSiDeleteAlarm";
const ForwardRef$4s = /*#__PURE__*/React.forwardRef(SvgSiDeleteAlarm);
const Memo$4s = /*#__PURE__*/React.memo(ForwardRef$4s);

const SvgSiDiamondsFour = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    fill: "currentColor",
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M13.839 1.11a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.677l1.98 1.98a2.6 2.6 0 0 0 3.676 0l1.98-1.98a2.6 2.6 0 0 0 0-3.677zM6.768 8.182a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.676l1.98 1.98a2.6 2.6 0 0 0 3.677 0l1.98-1.98a2.6 2.6 0 0 0 0-3.676zm7.071 7.071a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.677l1.98 1.98a2.6 2.6 0 0 0 3.676 0l1.98-1.98a2.6 2.6 0 0 0 0-3.677zm7.071-7.071a2.6 2.6 0 0 0-3.677 0l-1.98 1.98a2.6 2.6 0 0 0 0 3.676l1.98 1.98a2.6 2.6 0 0 0 3.677 0l1.98-1.98a2.6 2.6 0 0 0 0-3.676z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};
SvgSiDiamondsFour.displayName = "SvgSiDiamondsFour";
const ForwardRef$4r = /*#__PURE__*/React.forwardRef(SvgSiDiamondsFour);
const Memo$4r = /*#__PURE__*/React.memo(ForwardRef$4r);

const SvgSiDirection = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.437 1.225L12 18.065l-6.495 3.798a1 1 0 0 1-1.437-1.225l7-18 .066-.138A1 1 0 0 1 12 2"
  }));
};
SvgSiDirection.displayName = "SvgSiDirection";
const ForwardRef$4q = /*#__PURE__*/React.forwardRef(SvgSiDirection);
const Memo$4q = /*#__PURE__*/React.memo(ForwardRef$4q);

const SvgSiDirectionAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M2.293 2.293a1 1 0 0 1 1.11-.208l18 7.92a1 1 0 0 1-.15 1.883l-7.421 1.944-1.944 7.422a1 1 0 0 1-1.883.148l-7.92-18a1 1 0 0 1 .208-1.11"
  }));
};
SvgSiDirectionAlt.displayName = "SvgSiDirectionAlt";
const ForwardRef$4p = /*#__PURE__*/React.forwardRef(SvgSiDirectionAlt);
const Memo$4p = /*#__PURE__*/React.memo(ForwardRef$4p);

const SvgSiDollar = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M11 22v-1.019a7.4 7.4 0 0 1-3.392-1.077 1 1 0 0 1 1.05-1.703c.712.439 1.52.702 2.342.776v-6.292c-1.172-.477-2.09-1.006-2.749-1.68-.82-.837-1.166-1.814-1.24-2.933-.104-1.561.573-2.813 1.557-3.665A5.86 5.86 0 0 1 11 3.177V2a1 1 0 1 1 2 0v1.018a7.4 7.4 0 0 1 3.392 1.078 1 1 0 0 1-1.05 1.703A5.4 5.4 0 0 0 13 5.02v6.295c1.17.478 2.086 1.005 2.746 1.677.822.837 1.169 1.815 1.243 2.935.104 1.561-.573 2.813-1.557 3.665-.7.605-1.557 1.015-2.432 1.23V22a1 1 0 0 1-2 0m2-3.269a3.7 3.7 0 0 0 1.123-.65c.582-.503.928-1.173.871-2.02-.05-.747-.254-1.238-.675-1.666-.288-.294-.707-.587-1.319-.89zM11 5.268a3.7 3.7 0 0 0-1.123.65c-.582.504-.928 1.174-.871 2.021.05.748.253 1.24.673 1.667.288.295.707.588 1.321.891z"
  }));
};
SvgSiDollar.displayName = "SvgSiDollar";
const ForwardRef$4o = /*#__PURE__*/React.forwardRef(SvgSiDollar);
const Memo$4o = /*#__PURE__*/React.memo(ForwardRef$4o);

const SvgSiDollarAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13 13.52c.24.136.415.265.544.39.252.244.376.513.408.97.033.468-.16.848-.536 1.158-.123.102-.265.19-.416.268zm-2-3.038a2.7 2.7 0 0 1-.549-.391c-.25-.243-.374-.512-.406-.97-.033-.47.16-.85.536-1.16q.188-.153.419-.27z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a1 1 0 0 0-1 1v.556a4.6 4.6 0 0 0-1.691.862c-.781.643-1.345 1.615-1.26 2.84.06.856.342 1.62 1.009 2.267.488.474 1.142.842 1.942 1.166v3.89a3.9 3.9 0 0 1-1.354-.481 1 1 0 0 0-1.012 1.724 5.9 5.9 0 0 0 2.366.77V19a1 1 0 0 0 2 0v-.559a4.6 4.6 0 0 0 1.688-.859c.78-.643 1.345-1.616 1.26-2.842-.06-.856-.344-1.62-1.011-2.266-.488-.473-1.14-.84-1.937-1.164V7.42c.476.076.939.238 1.352.48a1 1 0 0 0 1.011-1.725A5.9 5.9 0 0 0 13 5.405V5a1 1 0 0 0-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiDollarAlt1.displayName = "SvgSiDollarAlt1";
const ForwardRef$4n = /*#__PURE__*/React.forwardRef(SvgSiDollarAlt1);
const Memo$4n = /*#__PURE__*/React.memo(ForwardRef$4n);

const SvgSiDollarAlt2 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13 13.52c.24.136.415.265.544.39.252.244.376.513.408.97.033.468-.16.848-.536 1.158-.123.102-.265.19-.416.268zm-2-3.038a2.7 2.7 0 0 1-.549-.391c-.25-.243-.374-.512-.406-.97-.033-.47.16-.85.536-1.16q.188-.153.419-.27z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 1c1.545 0 2.88.802 3.732 1.992 1.442-.24 2.956.136 4.048 1.228s1.467 2.608 1.227 4.05C22.194 9.125 23 10.45 23 12s-.806 2.876-1.993 3.73c.24 1.442-.134 2.958-1.227 4.05-1.095 1.095-2.61 1.46-4.046 1.225C14.883 22.196 13.546 23 12 23c-1.55 0-2.878-.808-3.731-1.996-1.438.235-2.954-.128-4.05-1.224-1.094-1.095-1.459-2.611-1.217-4.05C1.815 14.878 1 13.552 1 12s.815-2.878 2.002-3.73c-.242-1.439.123-2.955 1.218-4.05 1.093-1.094 2.609-1.467 4.056-1.227C9.125 1.805 10.453 1 12 1m0 3a1 1 0 0 0-1 1v.556a4.6 4.6 0 0 0-1.691.862c-.781.643-1.345 1.615-1.26 2.84.06.856.342 1.62 1.009 2.267.488.474 1.142.842 1.942 1.166v3.89a3.9 3.9 0 0 1-1.354-.481 1 1 0 0 0-1.012 1.724 5.9 5.9 0 0 0 2.366.77V19a1 1 0 0 0 2 0v-.559a4.6 4.6 0 0 0 1.688-.859c.78-.643 1.345-1.616 1.26-2.842-.06-.856-.344-1.62-1.011-2.266-.488-.473-1.14-.84-1.937-1.164V7.42c.476.076.939.238 1.352.48a1 1 0 0 0 1.011-1.725A5.9 5.9 0 0 0 13 5.405V5a1 1 0 0 0-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiDollarAlt2.displayName = "SvgSiDollarAlt2";
const ForwardRef$4m = /*#__PURE__*/React.forwardRef(SvgSiDollarAlt2);
const Memo$4m = /*#__PURE__*/React.memo(ForwardRef$4m);

const SvgSiDoubleArrowRight = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L15.586 12l-3.293-3.293a1 1 0 0 1 0-1.414",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L9.586 12 6.293 8.707a1 1 0 0 1 0-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiDoubleArrowRight.displayName = "SvgSiDoubleArrowRight";
const ForwardRef$4l = /*#__PURE__*/React.forwardRef(SvgSiDoubleArrowRight);
const Memo$4l = /*#__PURE__*/React.memo(ForwardRef$4l);

const SvgSiDownLeft = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M20 5a1 1 0 1 0-2 0v5.6a3.4 3.4 0 0 1-3.4 3.4H7.414l2.293-2.293a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L7.414 16H14.6a5.4 5.4 0 0 0 5.4-5.4z"
  }));
};
SvgSiDownLeft.displayName = "SvgSiDownLeft";
const ForwardRef$4k = /*#__PURE__*/React.forwardRef(SvgSiDownLeft);
const Memo$4k = /*#__PURE__*/React.memo(ForwardRef$4k);

const SvgSiDownRight = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M6 5a1 1 0 0 0-2 0v5.6A5.4 5.4 0 0 0 9.4 16h7.186l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L16.586 14H9.4A3.4 3.4 0 0 1 6 10.6z"
  }));
};
SvgSiDownRight.displayName = "SvgSiDownRight";
const ForwardRef$4j = /*#__PURE__*/React.forwardRef(SvgSiDownRight);
const Memo$4j = /*#__PURE__*/React.memo(ForwardRef$4j);

const SvgSiDownTwoHeaded = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M11 4a1 1 0 1 1 2 0v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13 15.414v2.172l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 17.586v-2.172l-3.707-3.707a1 1 0 1 1 1.414-1.414L11 12.586z"
  }));
};
SvgSiDownTwoHeaded.displayName = "SvgSiDownTwoHeaded";
const ForwardRef$4i = /*#__PURE__*/React.forwardRef(SvgSiDownTwoHeaded);
const Memo$4i = /*#__PURE__*/React.memo(ForwardRef$4i);

const SvgSiDownloadOffline = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m12-6a1 1 0 1 0-2 0v6.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 12.586zM7 18a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiDownloadOffline.displayName = "SvgSiDownloadOffline";
const ForwardRef$4h = /*#__PURE__*/React.forwardRef(SvgSiDownloadOffline);
const Memo$4h = /*#__PURE__*/React.memo(ForwardRef$4h);

const SvgSiDragHandle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4 9a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"
  }));
};
SvgSiDragHandle.displayName = "SvgSiDragHandle";
const ForwardRef$4g = /*#__PURE__*/React.forwardRef(SvgSiDragHandle);
const Memo$4g = /*#__PURE__*/React.memo(ForwardRef$4g);

const SvgSiDragIndicator = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-6-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4M9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
  }));
};
SvgSiDragIndicator.displayName = "SvgSiDragIndicator";
const ForwardRef$4f = /*#__PURE__*/React.forwardRef(SvgSiDragIndicator);
const Memo$4f = /*#__PURE__*/React.memo(ForwardRef$4f);

const SvgSiDragIndicatorAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M14 6a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM9 9a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m7 3a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm-7 1a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1M9 5a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2z"
  }));
};
SvgSiDragIndicatorAlt.displayName = "SvgSiDragIndicatorAlt";
const ForwardRef$4e = /*#__PURE__*/React.forwardRef(SvgSiDragIndicatorAlt);
const Memo$4e = /*#__PURE__*/React.memo(ForwardRef$4e);

const SvgSiEditDetailed = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16.738 3.727a1.3 1.3 0 0 1 1.838 0l1.697 1.697a1.3 1.3 0 0 1 0 1.838l-1.909 1.91-3.536-3.536zm-7.92 14.991a.5.5 0 0 1-.255.136l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.535a.5.5 0 0 1 .137-.256l8.838-8.839 3.536 3.536z"
  }));
};
SvgSiEditDetailed.displayName = "SvgSiEditDetailed";
const ForwardRef$4d = /*#__PURE__*/React.forwardRef(SvgSiEditDetailed);
const Memo$4d = /*#__PURE__*/React.memo(ForwardRef$4d);

const SvgSiEditDetailedAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M19.425 4.575a2.5 2.5 0 0 0-3.536 0l-1.06 1.061 3.535 3.536 1.06-1.061a2.5 2.5 0 0 0 0-3.536m-5.303 1.768 3.536 3.536-8.839 8.838a.5.5 0 0 1-.255.137l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.536a.5.5 0 0 1 .137-.255z"
  }));
};
SvgSiEditDetailedAlt.displayName = "SvgSiEditDetailedAlt";
const ForwardRef$4c = /*#__PURE__*/React.forwardRef(SvgSiEditDetailedAlt);
const Memo$4c = /*#__PURE__*/React.memo(ForwardRef$4c);

const SvgSiEditSimple = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16.738 3.727a1.3 1.3 0 0 1 1.838 0l1.697 1.697a1.3 1.3 0 0 1 0 1.838L8.818 18.718a.5.5 0 0 1-.255.136l-3.536.707a.5.5 0 0 1-.588-.588l.707-3.535a.5.5 0 0 1 .137-.256z"
  }));
};
SvgSiEditSimple.displayName = "SvgSiEditSimple";
const ForwardRef$4b = /*#__PURE__*/React.forwardRef(SvgSiEditSimple);
const Memo$4b = /*#__PURE__*/React.memo(ForwardRef$4b);

const SvgSiEject = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4.18 13.427A1 1 0 0 0 5 15h14a1 1 0 0 0 .82-1.573l-7-10a1 1 0 0 0-1.64 0zM4 19.2A1.8 1.8 0 0 0 5.8 21h12.4a1.8 1.8 0 0 0 1.8-1.8v-.4a1.8 1.8 0 0 0-1.8-1.8H5.8A1.8 1.8 0 0 0 4 18.8z"
  }));
};
SvgSiEject.displayName = "SvgSiEject";
const ForwardRef$4a = /*#__PURE__*/React.forwardRef(SvgSiEject);
const Memo$4a = /*#__PURE__*/React.memo(ForwardRef$4a);

const SvgSiEmoji = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m4.933 11.147a1 1 0 0 0-1.287.587l-.079.21a3.81 3.81 0 0 1-3.277 2.461l-.29.012a3.81 3.81 0 0 1-3.568-2.473l-.078-.21a1 1 0 1 0-1.875.699l.08.212v.002A5.81 5.81 0 0 0 12 18.417l.22-.005a5.81 5.81 0 0 0 5.22-3.765l.001-.002.08-.212a1 1 0 0 0-.588-1.287M8 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
    clipRule: "evenodd"
  }));
};
SvgSiEmoji.displayName = "SvgSiEmoji";
const ForwardRef$49 = /*#__PURE__*/React.forwardRef(SvgSiEmoji);
const Memo$49 = /*#__PURE__*/React.memo(ForwardRef$49);

const SvgSiEmojiAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m4.933 11.147a1 1 0 0 0-1.287.587l-.079.21a3.81 3.81 0 0 1-3.277 2.461l-.29.012a3.81 3.81 0 0 1-3.568-2.473l-.078-.21a1 1 0 1 0-1.875.699l.08.212v.002A5.81 5.81 0 0 0 12 18.417l.22-.005a5.81 5.81 0 0 0 5.22-3.765l.001-.002.08-.212a1 1 0 0 0-.588-1.287M8 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1m8 0a1 1 0 0 0-1 1v1a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiEmojiAlt.displayName = "SvgSiEmojiAlt";
const ForwardRef$48 = /*#__PURE__*/React.forwardRef(SvgSiEmojiAlt);
const Memo$48 = /*#__PURE__*/React.memo(ForwardRef$48);

const SvgSiEqualizer = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M18 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM2 7a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm8 0a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm7 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M2 15a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm7 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m9-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM1 20a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m9-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm7 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m0-12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"
  }));
};
SvgSiEqualizer.displayName = "SvgSiEqualizer";
const ForwardRef$47 = /*#__PURE__*/React.forwardRef(SvgSiEqualizer);
const Memo$47 = /*#__PURE__*/React.memo(ForwardRef$47);

const SvgSiError = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7.91 3.23 3.23 7.913v-.01a.8.8 0 0 0-.23.57v7.054c0 .22.08.42.23.57L7.9 20.77c.15.15.36.23.57.23h7.06c.22 0 .42-.08.57-.23l4.67-4.673a.8.8 0 0 0 .23-.57V8.473c0-.22-.08-.42-.23-.57L16.1 3.23a.8.8 0 0 0-.57-.23H8.48c-.22 0-.42.08-.57.23M12 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiError.displayName = "SvgSiError";
const ForwardRef$46 = /*#__PURE__*/React.forwardRef(SvgSiError);
const Memo$46 = /*#__PURE__*/React.memo(ForwardRef$46);

const SvgSiExpandLess = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.293 9.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L12 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414z",
    clipRule: "evenodd"
  }));
};
SvgSiExpandLess.displayName = "SvgSiExpandLess";
const ForwardRef$45 = /*#__PURE__*/React.forwardRef(SvgSiExpandLess);
const Memo$45 = /*#__PURE__*/React.memo(ForwardRef$45);

const SvgSiExpandLessAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.293 7.293a1 1 0 0 1 1.414 0l8 8a1 1 0 0 1-1.414 1.414L12 9.414l-7.293 7.293a1 1 0 0 1-1.414-1.414z",
    clipRule: "evenodd"
  }));
};
SvgSiExpandLessAlt.displayName = "SvgSiExpandLessAlt";
const ForwardRef$44 = /*#__PURE__*/React.forwardRef(SvgSiExpandLessAlt);
const Memo$44 = /*#__PURE__*/React.memo(ForwardRef$44);

const SvgSiExpandLessCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.293.793-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L12 10.914l3.293 3.293a1 1 0 0 0 1.414-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiExpandLessCircle.displayName = "SvgSiExpandLessCircle";
const ForwardRef$43 = /*#__PURE__*/React.forwardRef(SvgSiExpandLessCircle);
const Memo$43 = /*#__PURE__*/React.memo(ForwardRef$43);

const SvgSiExpandLessSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m7.307 5.793a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L12 10.914l3.293 3.293a1 1 0 0 0 1.414-1.414z",
    clipRule: "evenodd"
  }));
};
SvgSiExpandLessSquare.displayName = "SvgSiExpandLessSquare";
const ForwardRef$42 = /*#__PURE__*/React.forwardRef(SvgSiExpandLessSquare);
const Memo$42 = /*#__PURE__*/React.memo(ForwardRef$42);

const SvgSiExpandMore = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7.293 9.293a1 1 0 0 1 1.414 0L12 12.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiExpandMore.displayName = "SvgSiExpandMore";
const ForwardRef$41 = /*#__PURE__*/React.forwardRef(SvgSiExpandMore);
const Memo$41 = /*#__PURE__*/React.memo(ForwardRef$41);

const SvgSiExpandMoreAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3.293 7.293a1 1 0 0 1 1.414 0L12 14.586l7.293-7.293a1 1 0 1 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 0-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiExpandMoreAlt.displayName = "SvgSiExpandMoreAlt";
const ForwardRef$40 = /*#__PURE__*/React.forwardRef(SvgSiExpandMoreAlt);
const Memo$40 = /*#__PURE__*/React.memo(ForwardRef$40);

const SvgSiExpandMoreCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8.707 9.793a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L12 13.086z",
    clipRule: "evenodd"
  }));
};
SvgSiExpandMoreCircle.displayName = "SvgSiExpandMoreCircle";
const ForwardRef$3$ = /*#__PURE__*/React.forwardRef(SvgSiExpandMoreCircle);
const Memo$3$ = /*#__PURE__*/React.memo(ForwardRef$3$);

const SvgSiExpandMoreSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m3.307 6.793a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L12 13.086z",
    clipRule: "evenodd"
  }));
};
SvgSiExpandMoreSquare.displayName = "SvgSiExpandMoreSquare";
const ForwardRef$3_ = /*#__PURE__*/React.forwardRef(SvgSiExpandMoreSquare);
const Memo$3_ = /*#__PURE__*/React.memo(ForwardRef$3_);

const SvgSiEye = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 5c6.074 0 11 7 11 7-.001.002-4.927 7-11 7S1 12 1 12s4.926-7 11-7m0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
    clipRule: "evenodd"
  }));
};
SvgSiEye.displayName = "SvgSiEye";
const ForwardRef$3Z = /*#__PURE__*/React.forwardRef(SvgSiEye);
const Memo$3Z = /*#__PURE__*/React.memo(ForwardRef$3Z);

const SvgSiFactCheck = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M4 9a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 2a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zm10.707.707 4-4a1 1 0 0 0-1.414-1.414L15 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0",
    clipRule: "evenodd"
  }));
};
SvgSiFactCheck.displayName = "SvgSiFactCheck";
const ForwardRef$3Y = /*#__PURE__*/React.forwardRef(SvgSiFactCheck);
const Memo$3Y = /*#__PURE__*/React.memo(ForwardRef$3Y);

const SvgSiFeaturedPlaylist = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M5 9a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiFeaturedPlaylist.displayName = "SvgSiFeaturedPlaylist";
const ForwardRef$3X = /*#__PURE__*/React.forwardRef(SvgSiFeaturedPlaylist);
const Memo$3X = /*#__PURE__*/React.memo(ForwardRef$3X);

const SvgSiFileDownload = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4z"
  }));
};
SvgSiFileDownload.displayName = "SvgSiFileDownload";
const ForwardRef$3W = /*#__PURE__*/React.forwardRef(SvgSiFileDownload);
const Memo$3W = /*#__PURE__*/React.memo(ForwardRef$3W);

const SvgSiFileUpload = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M11.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 6.414V16a1 1 0 1 1-2 0V6.414L8.707 8.707a1 1 0 0 1-1.414-1.414z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M6 17a1 1 0 1 0-2 0v.6C4 19.482 5.518 21 7.4 21h9.2c1.882 0 3.4-1.518 3.4-3.4V17a1 1 0 1 0-2 0v.6c0 .778-.622 1.4-1.4 1.4H7.4c-.778 0-1.4-.622-1.4-1.4z"
  }));
};
SvgSiFileUpload.displayName = "SvgSiFileUpload";
const ForwardRef$3V = /*#__PURE__*/React.forwardRef(SvgSiFileUpload);
const Memo$3V = /*#__PURE__*/React.memo(ForwardRef$3V);

const SvgSiFilterList = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m4 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiFilterList.displayName = "SvgSiFilterList";
const ForwardRef$3U = /*#__PURE__*/React.forwardRef(SvgSiFilterList);
const Memo$3U = /*#__PURE__*/React.memo(ForwardRef$3U);

const SvgSiFilterListAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5 10a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiFilterListAlt.displayName = "SvgSiFilterListAlt";
const ForwardRef$3T = /*#__PURE__*/React.forwardRef(SvgSiFilterListAlt);
const Memo$3T = /*#__PURE__*/React.memo(ForwardRef$3T);

const SvgSiFilterNone = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M8.4 2h11.2A2.4 2.4 0 0 1 22 4.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 15.6V4.4A2.4 2.4 0 0 1 8.4 2"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4 4a1 1 0 0 0-2 0v11.6C2 19.132 4.868 22 8.4 22H20a1 1 0 1 0 0-2H8.4A4.403 4.403 0 0 1 4 15.6z"
  }));
};
SvgSiFilterNone.displayName = "SvgSiFilterNone";
const ForwardRef$3S = /*#__PURE__*/React.forwardRef(SvgSiFilterNone);
const Memo$3S = /*#__PURE__*/React.memo(ForwardRef$3S);

const SvgSiFlag = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3 20V4a1 1 0 0 1 1.333-.943l17 6a1 1 0 0 1-.05 1.902L5 15.747V20a1 1 0 1 1-2 0"
  }));
};
SvgSiFlag.displayName = "SvgSiFlag";
const ForwardRef$3R = /*#__PURE__*/React.forwardRef(SvgSiFlag);
const Memo$3R = /*#__PURE__*/React.memo(ForwardRef$3R);

const SvgSiFlagAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M22 10.702C22 12.56 20.43 14 18.6 14H4.2q-.1-.001-.2-.01V20a1 1 0 1 1-2 0V6.298C2 4.44 3.57 3 5.4 3h14.4c1.17 0 2.2.925 2.2 2.15z"
  }));
};
SvgSiFlagAlt1.displayName = "SvgSiFlagAlt1";
const ForwardRef$3Q = /*#__PURE__*/React.forwardRef(SvgSiFlagAlt1);
const Memo$3Q = /*#__PURE__*/React.memo(ForwardRef$3Q);

const SvgSiFlagAlt2 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M21 3a1 1 0 0 1 .707 1.707L17.414 9l4.293 4.293A1 1 0 0 1 20.985 15L9.2 14.825l2.706 5.75a1.001 1.001 0 0 1-1.81.85l-8-17A1 1 0 0 1 3 3z"
  }));
};
SvgSiFlagAlt2.displayName = "SvgSiFlagAlt2";
const ForwardRef$3P = /*#__PURE__*/React.forwardRef(SvgSiFlagAlt2);
const Memo$3P = /*#__PURE__*/React.memo(ForwardRef$3P);

const SvgSiFlagAlt3 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M18.934 2.002a1 1 0 0 1 .773 1.705L9.162 14.251l2.774 7.397a1 1 0 0 1-1.873.704l-2.992-7.98-4-10a1 1 0 0 1 .863-1.37z"
  }));
};
SvgSiFlagAlt3.displayName = "SvgSiFlagAlt3";
const ForwardRef$3O = /*#__PURE__*/React.forwardRef(SvgSiFlagAlt3);
const Memo$3O = /*#__PURE__*/React.memo(ForwardRef$3O);

const SvgSiFlagAlt4 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M2 21V3a1 1 0 0 1 2 0v.651l1.49-.364.428-.095c2.15-.427 4.388-.14 6.36.826l.106.051a8.03 8.03 0 0 0 5.325.61l3.061-.705a1 1 0 0 1 1.225.973L22 15.063a1 1 0 0 1-.775.975l-3.066.706c-2.24.516-4.594.247-6.654-.76l-.107-.052a8.04 8.04 0 0 0-5.434-.585L4 15.828V21a1 1 0 1 1-2 0"
  }));
};
SvgSiFlagAlt4.displayName = "SvgSiFlagAlt4";
const ForwardRef$3N = /*#__PURE__*/React.forwardRef(SvgSiFlagAlt4);
const Memo$3N = /*#__PURE__*/React.memo(ForwardRef$3N);

const SvgSiFlare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    fill: "currentColor",
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1M7.757 6.343a1 1 0 1 0-1.414 1.414l1.414 1.415a1 1 0 1 0 1.415-1.415zM1 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm15 1a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m-4 4a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m2.828-1.172a1 1 0 0 1 1.415 0l1.414 1.415a1 1 0 1 1-1.414 1.414l-1.415-1.414a1 1 0 0 1 0-1.415m2.829-7.071a1 1 0 1 0-1.414-1.414l-1.415 1.414a1 1 0 0 0 1.415 1.415zm-8.485 8.486a1 1 0 1 0-1.415-1.415l-1.414 1.415a1 1 0 1 0 1.414 1.414zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};
SvgSiFlare.displayName = "SvgSiFlare";
const ForwardRef$3M = /*#__PURE__*/React.forwardRef(SvgSiFlare);
const Memo$3M = /*#__PURE__*/React.memo(ForwardRef$3M);

const SvgSiFlow = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13 20a1 1 0 1 0-2 0 1 1 0 0 0 2 0m0-16a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2 0a3 3 0 0 1-2 2.825v10.349A2.998 2.998 0 0 1 12 23a3 3 0 0 1-1-5.826V6.825A2.998 2.998 0 0 1 12 1a3 3 0 0 1 3 3"
  }));
};
SvgSiFlow.displayName = "SvgSiFlow";
const ForwardRef$3L = /*#__PURE__*/React.forwardRef(SvgSiFlow);
const Memo$3L = /*#__PURE__*/React.memo(ForwardRef$3L);

const SvgSiFlowBranch = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M8 20a1 1 0 1 0-2 0 1 1 0 0 0 2 0M8 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m10 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2 0a3 3 0 0 1-2 2.825v2.33c0 2.19-1.705 4.076-3.91 4.076H9.91c-.996 0-1.91.883-1.91 2.077v1.866A2.998 2.998 0 0 1 7 23a3 3 0 0 1-1-5.826V6.825A2.998 2.998 0 0 1 7 1a2.998 2.998 0 0 1 1 5.825v4.925c.56-.33 1.21-.52 1.91-.52h4.18c.996 0 1.91-.882 1.91-2.076V6.825A2.998 2.998 0 0 1 17 1a3 3 0 0 1 3 3"
  }));
};
SvgSiFlowBranch.displayName = "SvgSiFlowBranch";
const ForwardRef$3K = /*#__PURE__*/React.forwardRef(SvgSiFlowBranch);
const Memo$3K = /*#__PURE__*/React.memo(ForwardRef$3K);

const SvgSiFlowCascade = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M18 20a1 1 0 1 0-2 0 1 1 0 0 0 2 0m0-7a1 1 0 1 0-2 0 1 1 0 0 0 2 0M8 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2 0a3 3 0 0 1-2 2.825V9c0 1.706 1.303 3 2.765 3h3.409A2.998 2.998 0 0 1 20 13a3 3 0 0 1-5.826 1h-3.41c-1.04 0-1.99-.35-2.764-.933V16c0 1.706 1.303 3 2.765 3h3.409A2.998 2.998 0 0 1 20 20a3 3 0 0 1-5.826 1h-3.41C8.087 21 6 18.694 6 16V6.825A2.998 2.998 0 0 1 7 1a3 3 0 0 1 3 3"
  }));
};
SvgSiFlowCascade.displayName = "SvgSiFlowCascade";
const ForwardRef$3J = /*#__PURE__*/React.forwardRef(SvgSiFlowCascade);
const Memo$3J = /*#__PURE__*/React.memo(ForwardRef$3J);

const SvgSiFlowLine = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13 8.83a3.001 3.001 0 1 0-2 0v6.34a3.001 3.001 0 1 0 2 0zM12 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
    clipRule: "evenodd"
  }));
};
SvgSiFlowLine.displayName = "SvgSiFlowLine";
const ForwardRef$3I = /*#__PURE__*/React.forwardRef(SvgSiFlowLine);
const Memo$3I = /*#__PURE__*/React.memo(ForwardRef$3I);

const SvgSiFlowParallel = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M8 20a1 1 0 1 0-2 0 1 1 0 0 0 2 0m10 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0M8 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m10 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-8 0a3 3 0 0 1-2 2.825v10.349A2.998 2.998 0 0 1 7 23a3 3 0 0 1-1-5.826V6.825A2.998 2.998 0 0 1 7 1a3 3 0 0 1 3 3m10 0a3 3 0 0 1-2 2.825v10.349A2.998 2.998 0 0 1 17 23a3 3 0 0 1-1-5.826V6.825A2.998 2.998 0 0 1 17 1a3 3 0 0 1 3 3"
  }));
};
SvgSiFlowParallel.displayName = "SvgSiFlowParallel";
const ForwardRef$3H = /*#__PURE__*/React.forwardRef(SvgSiFlowParallel);
const Memo$3H = /*#__PURE__*/React.memo(ForwardRef$3H);

const SvgSiFlowTree = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M5 20a1 1 0 1 0-2 0 1 1 0 0 0 2 0m8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0M13 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2 0a3 3 0 0 1-2 2.825V11h4.333C19.366 11 21 12.68 21 14.707v2.467A2.998 2.998 0 0 1 20 23a3 3 0 0 1-1-5.826v-2.467c0-.95-.767-1.707-1.667-1.707H13v4.174A2.998 2.998 0 0 1 12 23a3 3 0 0 1-1-5.826V13H6.667C5.767 13 5 13.757 5 14.707v2.467A2.998 2.998 0 0 1 4 23a3 3 0 0 1-1-5.826v-2.467C3 12.68 4.634 11 6.667 11H11V6.825A2.998 2.998 0 0 1 12 1a3 3 0 0 1 3 3"
  }));
};
SvgSiFlowTree.displayName = "SvgSiFlowTree";
const ForwardRef$3G = /*#__PURE__*/React.forwardRef(SvgSiFlowTree);
const Memo$3G = /*#__PURE__*/React.memo(ForwardRef$3G);

const SvgSiGarage = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10.69 3.418a2.2 2.2 0 0 1 2.58 0l10.279 6.746a1 1 0 0 1-1.098 1.672L21 10.884v7.704A2.4 2.4 0 0 1 18.6 21H5.4A2.4 2.4 0 0 1 3 18.588V10.88l-1.45.955a1 1 0 0 1-1.1-1.67zM6 18v2h5v-2zm7 0v2h5v-2zm-7-3v2h5v-2zm7 0v2h5v-2zm-2-4a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiGarage.displayName = "SvgSiGarage";
const ForwardRef$3F = /*#__PURE__*/React.forwardRef(SvgSiGarage);
const Memo$3F = /*#__PURE__*/React.memo(ForwardRef$3F);

const SvgSiGlobeDetailed = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M14.973 11a15 15 0 0 0-.323-2.321C13.802 8.889 12.914 9 12 9c-.907 0-1.787-.11-2.629-.316A15 15 0 0 0 9.033 11zm-5.94 2q.08 1.186.336 2.317A11 11 0 0 1 12 15c.9 0 1.773.108 2.609.312q.264-1.131.351-2.312zm4.992 4.229A9 9 0 0 0 12 17c-.709 0-1.398.082-2.059.236.5 1.34 1.185 2.589 2.025 3.716a15 15 0 0 0 2.059-3.723"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M12 3c-.927 0-1.822.14-2.664.4A17 17 0 0 0 8.06 6.093a9 9 0 0 1-1.716-1.094 9 9 0 0 0-1.411 1.428A11 11 0 0 0 7.47 8.026c-.23.966-.38 1.96-.44 2.974H3.055a9 9 0 0 0 0 2h3.974q.091 1.528.44 2.974a11 11 0 0 0-2.537 1.598A9 9 0 0 0 6.342 19a9 9 0 0 1 1.715-1.093c.348.94.777 1.84 1.278 2.692A9 9 0 0 0 12 21a9 9 0 0 0 2.599-.38 17 17 0 0 0 1.313-2.727 9 9 0 0 1 1.744 1.108 9 9 0 0 0 1.411-1.428c-.77-.646-1.63-1.19-2.558-1.608.237-.962.391-1.954.456-2.965h3.98a9 9 0 0 0 0-2h-3.969a17 17 0 0 0-.425-2.983c.913-.415 1.76-.952 2.518-1.589A9 9 0 0 0 17.657 5a9 9 0 0 1-1.685 1.08 17 17 0 0 0-1.243-2.659 9 9 0 0 0-2.664-.42 15 15 0 0 1 2.025 3.756 9 9 0 0 1-4.146.007A15 15 0 0 1 12.003 3z",
    clipRule: "evenodd"
  }));
};
SvgSiGlobeDetailed.displayName = "SvgSiGlobeDetailed";
const ForwardRef$3E = /*#__PURE__*/React.forwardRef(SvgSiGlobeDetailed);
const Memo$3E = /*#__PURE__*/React.memo(ForwardRef$3E);

const SvgSiGrid = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4.6 2A2.6 2.6 0 0 0 2 4.6v3.8A2.6 2.6 0 0 0 4.6 11h3.8A2.6 2.6 0 0 0 11 8.4V4.6A2.6 2.6 0 0 0 8.4 2zm11 0A2.6 2.6 0 0 0 13 4.6v3.8a2.6 2.6 0 0 0 2.6 2.6h3.8A2.6 2.6 0 0 0 22 8.4V4.6A2.6 2.6 0 0 0 19.4 2zm-11 11A2.6 2.6 0 0 0 2 15.6v3.8A2.6 2.6 0 0 0 4.6 22h3.8a2.6 2.6 0 0 0 2.6-2.6v-3.8A2.6 2.6 0 0 0 8.4 13zm11 0a2.6 2.6 0 0 0-2.6 2.6v3.8a2.6 2.6 0 0 0 2.6 2.6h3.8a2.6 2.6 0 0 0 2.6-2.6v-3.8a2.6 2.6 0 0 0-2.6-2.6z"
  }));
};
SvgSiGrid.displayName = "SvgSiGrid";
const ForwardRef$3D = /*#__PURE__*/React.forwardRef(SvgSiGrid);
const Memo$3D = /*#__PURE__*/React.memo(ForwardRef$3D);

const SvgSiGridOn = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M14 10v4h-4v-4z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M10 8V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4z",
    clipRule: "evenodd"
  }));
};
SvgSiGridOn.displayName = "SvgSiGridOn";
const ForwardRef$3C = /*#__PURE__*/React.forwardRef(SvgSiGridOn);
const Memo$3C = /*#__PURE__*/React.memo(ForwardRef$3C);

const SvgSiGridView = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M5.6 3A2.6 2.6 0 0 0 3 5.6v2.8A2.6 2.6 0 0 0 5.6 11h2.8A2.6 2.6 0 0 0 11 8.4V5.6A2.6 2.6 0 0 0 8.4 3zm0 10A2.6 2.6 0 0 0 3 15.6v2.8A2.6 2.6 0 0 0 5.6 21h2.8a2.6 2.6 0 0 0 2.6-2.6v-2.8A2.6 2.6 0 0 0 8.4 13zm10-10A2.6 2.6 0 0 0 13 5.6v2.8a2.6 2.6 0 0 0 2.6 2.6h2.8A2.6 2.6 0 0 0 21 8.4V5.6A2.6 2.6 0 0 0 18.4 3zm0 10a2.6 2.6 0 0 0-2.6 2.6v2.8a2.6 2.6 0 0 0 2.6 2.6h2.8a2.6 2.6 0 0 0 2.6-2.6v-2.8a2.6 2.6 0 0 0-2.6-2.6z"
  }));
};
SvgSiGridView.displayName = "SvgSiGridView";
const ForwardRef$3B = /*#__PURE__*/React.forwardRef(SvgSiGridView);
const Memo$3B = /*#__PURE__*/React.memo(ForwardRef$3B);

const SvgSiHammer = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.377 4.72a7 7 0 0 0-1.62 1.209 1 1 0 1 1-1.414-1.414 9 9 0 0 1 12.728 0l5.94 5.94a2.6 2.6 0 0 1 0 3.676l-1.273 1.273a2.6 2.6 0 0 1-3.677 0L14.657 13 5.89 21.768a2.6 2.6 0 0 1-3.677 0l-.566-.566a2.6 2.6 0 0 1 0-3.677l8.769-8.768zm13.937 6.866-2.121 2.121.282.283a.6.6 0 0 0 .849 0l1.273-1.273a.6.6 0 0 0 0-.848zm-9.192 2.121-1.415-1.414L3.06 18.94a.6.6 0 0 0 0 .848l.566.566a.6.6 0 0 0 .849 0z",
    clipRule: "evenodd"
  }));
};
SvgSiHammer.displayName = "SvgSiHammer";
const ForwardRef$3A = /*#__PURE__*/React.forwardRef(SvgSiHammer);
const Memo$3A = /*#__PURE__*/React.memo(ForwardRef$3A);

const SvgSiHammerAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m13.766 13.08 2.91 2.91a1.8 1.8 0 0 0 2.547 0l2.404-2.404a1.8 1.8 0 0 0 0-2.545L17.95 7.364a1 1 0 1 0 1.414-1.414L17.95 4.536a1 1 0 0 0-1.415 1.413l-3.677-3.676a1.8 1.8 0 0 0-2.545 0L7.909 4.677a1.8 1.8 0 0 0 0 2.546l2.91 2.91-8.65 7.359-.059.054a2.6 2.6 0 0 0 0 3.677l.566.566a2.6 2.6 0 0 0 3.732-.06zm-1.418-1.419-.11-.11-8.735 7.432a.6.6 0 0 0 .022.826l.565.566a.6.6 0 0 0 .827.02z",
    clipRule: "evenodd"
  }));
};
SvgSiHammerAlt.displayName = "SvgSiHammerAlt";
const ForwardRef$3z = /*#__PURE__*/React.forwardRef(SvgSiHammerAlt);
const Memo$3z = /*#__PURE__*/React.memo(ForwardRef$3z);

const SvgSiHeart = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16.696 3C14.652 3 12.887 4.197 12 5.943 11.113 4.197 9.348 3 7.304 3 4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3"
  }));
};
SvgSiHeart.displayName = "SvgSiHeart";
const ForwardRef$3y = /*#__PURE__*/React.forwardRef(SvgSiHeart);
const Memo$3y = /*#__PURE__*/React.memo(ForwardRef$3y);

const SvgSiHeartAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M7.519 2A6.452 6.452 0 0 0 2.98 13.104l.639.645.863.857.003.003 6.85 6.85a1 1 0 0 0 1.413 0l6.85-6.85.002-.002.858-.852.65-.657.002-.002a6.452 6.452 0 0 0-9.068-9.177A6.45 6.45 0 0 0 7.52 2"
  }));
};
SvgSiHeartAlt.displayName = "SvgSiHeartAlt";
const ForwardRef$3x = /*#__PURE__*/React.forwardRef(SvgSiHeartAlt);
const Memo$3x = /*#__PURE__*/React.memo(ForwardRef$3x);

const SvgSiHelp = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m-.009 14a1 1 0 0 0 0 2H12a1 1 0 0 0 0-2zm2.72-8.33c-.93-1.586-2.934-2.16-4.552-1.211l-.015.01C9.178 7.059 8.5 8.104 8.5 9.34a1 1 0 0 0 2 0c0-.47.253-.899.683-1.163.631-.362 1.415-.157 1.802.504.371.632.17 1.421-.492 1.812a3.33 3.33 0 0 0-1.664 2.885V14a1 1 0 0 0 2 0v-.621c0-.467.244-.91.666-1.153l.005-.003c1.586-.93 2.16-2.934 1.21-4.552",
    clipRule: "evenodd"
  }));
};
SvgSiHelp.displayName = "SvgSiHelp";
const ForwardRef$3w = /*#__PURE__*/React.forwardRef(SvgSiHelp);
const Memo$3w = /*#__PURE__*/React.memo(ForwardRef$3w);

const SvgSiHome = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m21.1 6.551.03.024c.537.413.87 1.053.87 1.757v11.256A3.4 3.4 0 0 1 18.6 23H5.4A3.4 3.4 0 0 1 2 19.588V8.332c0-.704.333-1.344.87-1.757l.029-.023 7.79-5.132a2.195 2.195 0 0 1 2.581 0zM10 13v8H8v-8.2c0-.992.808-1.8 1.8-1.8h4.4c.992 0 1.8.808 1.8 1.8V21h-2v-8z",
    clipRule: "evenodd"
  }));
};
SvgSiHome.displayName = "SvgSiHome";
const ForwardRef$3v = /*#__PURE__*/React.forwardRef(SvgSiHome);
const Memo$3v = /*#__PURE__*/React.memo(ForwardRef$3v);

const SvgSiHomeDetailed = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M21 19.588V8.884l1.451.952a1 1 0 1 0 1.098-1.672L19 5.179V3a1 1 0 1 0-2 0v.866l-3.73-2.448a2.2 2.2 0 0 0-2.58 0L.45 8.165a1 1 0 1 0 1.1 1.67L3 8.88v10.708A2.4 2.4 0 0 0 5.4 22h13.2a2.4 2.4 0 0 0 2.4-2.412M8 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m2 5v8H8v-8.2c0-.992.808-1.8 1.8-1.8h4.4c.992 0 1.8.808 1.8 1.8V21h-2v-8z",
    clipRule: "evenodd"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};
SvgSiHomeDetailed.displayName = "SvgSiHomeDetailed";
const ForwardRef$3u = /*#__PURE__*/React.forwardRef(SvgSiHomeDetailed);
const Memo$3u = /*#__PURE__*/React.memo(ForwardRef$3u);

const SvgSiHospital = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M18 1a1 1 0 1 1 0 2v2h4a1 1 0 1 1 0 2v12.6a3.4 3.4 0 0 1-3.4 3.4H5.4A3.4 3.4 0 0 1 2 19.6V3a1 1 0 0 1 0-2zM8.8 18A1.8 1.8 0 0 0 7 19.8V22h2v-2h2v2h2v-2.2a1.8 1.8 0 0 0-1.8-1.8zm9.2 1.6c0 .499-.108.973-.302 1.4h.902a1.4 1.4 0 0 0 1.4-1.4V7h-2zM10 5.5a1 1 0 0 0-1 1v2H7a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiHospital.displayName = "SvgSiHospital";
const ForwardRef$3t = /*#__PURE__*/React.forwardRef(SvgSiHospital);
const Memo$3t = /*#__PURE__*/React.memo(ForwardRef$3t);

const SvgSiHospitalAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19 1a1 1 0 1 1 0 2v2h4a1 1 0 1 1 0 2v12.6a3.4 3.4 0 0 1-3.4 3.4H8.4q-.284-.001-.557-.047H4.4a3.4 3.4 0 0 1-3.4-3.4V7a1 1 0 0 1 0-2h4V3a1 1 0 0 1 0-2zm-8.2 17A1.8 1.8 0 0 0 9 19.8V22h2v-2h2v2h2v-2.2a1.8 1.8 0 0 0-1.8-1.8zm8.2 1.6c0 .499-.108.973-.302 1.4h.902a1.4 1.4 0 0 0 1.4-1.4V7h-2zm-16-.047a1.4 1.4 0 0 0 1.4 1.4h.883A3.4 3.4 0 0 1 5 19.6V7H3zM12 5.5a1 1 0 0 0-1 1v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiHospitalAlt1.displayName = "SvgSiHospitalAlt1";
const ForwardRef$3s = /*#__PURE__*/React.forwardRef(SvgSiHospitalAlt1);
const Memo$3s = /*#__PURE__*/React.memo(ForwardRef$3s);

const SvgSiHourglass = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19 1a1 1 0 1 1 0 2h-1v2.734c0 1.825-.814 3.56-2.254 4.667l-.003.003L13.65 12l2.094 1.596.003.003c1.317 1.012 2.107 2.549 2.234 4.2q.03.143.015.296.004.085.005.17V21h1a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h1v-2.734q.001-.086.005-.171-.014-.152.016-.296c.126-1.651.916-3.188 2.233-4.2l.003-.003L10.35 12l-2.093-1.596-.003-.003C6.814 9.294 6 7.56 6 5.734V3H5a1 1 0 0 1 0-2zm-6.804 15.02a1 1 0 0 0-.392 0l-5 1 .392 1.96L12 18.02l4.804.96.392-1.96z",
    clipRule: "evenodd"
  }));
};
SvgSiHourglass.displayName = "SvgSiHourglass";
const ForwardRef$3r = /*#__PURE__*/React.forwardRef(SvgSiHourglass);
const Memo$3r = /*#__PURE__*/React.memo(ForwardRef$3r);

const SvgSiInflight = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M18 18a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2zM8.855 5.501c.468.028.892.158 1.288.403l.167.113.029.022 5.329 4.45 4.227-.249h.037c1.416.017 2.535 1.203 2.537 2.587l.031 2.166a.5.5 0 0 1-.5.507H9.999a.5.5 0 0 1-.161-.026L3.824 13.42a.5.5 0 0 1-.28-.236l-1.984-3.7a.5.5 0 0 1 .446-.736l.977.012h.006a2.5 2.5 0 0 1 1.738.78l.977.959h4.34L7.124 6.29a.501.501 0 0 1 .408-.785l1.29-.006z"
  }));
};
SvgSiInflight.displayName = "SvgSiInflight";
const ForwardRef$3q = /*#__PURE__*/React.forwardRef(SvgSiInflight);
const Memo$3q = /*#__PURE__*/React.memo(ForwardRef$3q);

const SvgSiInfo = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M11 8a1 1 0 0 0 1 1h.008a1 1 0 1 0 0-2H12a1 1 0 0 0-1 1m1 9a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1",
    clipRule: "evenodd"
  }));
};
SvgSiInfo.displayName = "SvgSiInfo";
const ForwardRef$3p = /*#__PURE__*/React.forwardRef(SvgSiInfo);
const Memo$3p = /*#__PURE__*/React.memo(ForwardRef$3p);

const SvgSiInput = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3.4 5A1.4 1.4 0 0 0 2 6.4V9a1 1 0 0 1-2 0V6.4A3.4 3.4 0 0 1 3.4 3h17.2A3.4 3.4 0 0 1 24 6.4v11.2a3.4 3.4 0 0 1-3.4 3.4H3.4A3.4 3.4 0 0 1 0 17.6V15a1 1 0 1 1 2 0v2.6A1.4 1.4 0 0 0 3.4 19h17.2a1.4 1.4 0 0 0 1.4-1.4V6.4A1.4 1.4 0 0 0 20.6 5z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L14.586 13H1a1 1 0 1 1 0-2h13.586l-2.293-2.293a1 1 0 0 1 0-1.414"
  }));
};
SvgSiInput.displayName = "SvgSiInput";
const ForwardRef$3o = /*#__PURE__*/React.forwardRef(SvgSiInput);
const Memo$3o = /*#__PURE__*/React.memo(ForwardRef$3o);

const SvgSiInsights = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 3a1 1 0 0 0-2 0v17.2A1.8 1.8 0 0 0 3.8 22H21a1 1 0 1 0 0-2H4zm17.707 4.707a1 1 0 0 0-1.414-1.414L14 12.586l-3.293-3.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L10 11.414l3.293 3.293a1 1 0 0 0 1.414 0z",
    clipRule: "evenodd"
  }));
};
SvgSiInsights.displayName = "SvgSiInsights";
const ForwardRef$3n = /*#__PURE__*/React.forwardRef(SvgSiInsights);
const Memo$3n = /*#__PURE__*/React.memo(ForwardRef$3n);

const SvgSiInventory = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M0 4.6A2.6 2.6 0 0 1 2.6 2h18.8A2.6 2.6 0 0 1 24 4.6v.8A2.6 2.6 0 0 1 21.4 8H21v10.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V8h-.4A2.6 2.6 0 0 1 0 5.4zM2.6 4a.6.6 0 0 0-.6.6v.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6v-.8a.6.6 0 0 0-.6-.6zM8 10a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiInventory.displayName = "SvgSiInventory";
const ForwardRef$3m = /*#__PURE__*/React.forwardRef(SvgSiInventory);
const Memo$3m = /*#__PURE__*/React.memo(ForwardRef$3m);

const SvgSiItalic = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M19 2a1 1 0 1 1 0 2h-3.278l-5.334 16H13a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h3.28l5.333-16H11a1 1 0 1 1 0-2z"
  }));
};
SvgSiItalic.displayName = "SvgSiItalic";
const ForwardRef$3l = /*#__PURE__*/React.forwardRef(SvgSiItalic);
const Memo$3l = /*#__PURE__*/React.memo(ForwardRef$3l);

const SvgSiJson = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7.835 3.97A1 1 0 0 1 6.865 5c-.41.012-.722.077-.955.17a.87.87 0 0 0-.398.29c-.051.085-.116.263-.116.606V9.23c0 .928-.25 1.782-.84 2.459l-.01.012q-.136.15-.288.281.159.141.3.306c.592.666.838 1.515.838 2.436v3.231c0 .34.07.514.124.598l.012.019c.062.1.152.183.323.244l.033.013c.23.092.547.158.976.17a1 1 0 0 1-.057 2c-.591-.017-1.147-.11-1.646-.307a2.57 2.57 0 0 1-1.324-1.059c-.322-.5-.441-1.084-.441-1.678v-3.23c0-.568-.147-.9-.337-1.112l-.023-.026c-.18-.214-.53-.438-1.212-.56A1 1 0 0 1 1 12.044v-.132a1 1 0 0 1 .821-.984c.665-.12 1.032-.338 1.233-.558.198-.231.342-.578.342-1.14V6.067c0-.605.118-1.204.447-1.71l.02-.028a2.86 2.86 0 0 1 1.304-1.015c.5-.2 1.053-.295 1.639-.313a1 1 0 0 1 1.029.97m8.33 0a1 1 0 0 1 1.03-.97c.585.018 1.138.113 1.638.313a2.86 2.86 0 0 1 1.324 1.043c.33.506.447 1.105.447 1.71V9.23c0 .56.144.908.343 1.139.2.22.567.437 1.232.558a1 1 0 0 1 .821.984v.132a1 1 0 0 1-.824.984c-.682.122-1.033.346-1.212.56l-.023.026c-.19.211-.337.544-.337 1.111v3.231c0 .594-.12 1.179-.44 1.678a2.57 2.57 0 0 1-1.325 1.06c-.499.196-1.055.289-1.646.306a1 1 0 1 1-.057-2c.429-.012.746-.078.976-.17l.029-.011.004-.002a.58.58 0 0 0 .323-.244l.012-.02c.055-.083.124-.257.124-.597v-3.23c0-.922.246-1.771.839-2.437q.14-.165.3-.306a3 3 0 0 1-.288-.281l-.011-.012c-.59-.677-.84-1.53-.84-2.46V6.067c0-.343-.065-.521-.116-.607a.87.87 0 0 0-.398-.289c-.233-.093-.544-.158-.955-.17a1 1 0 0 1-.97-1.03M9 14a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1",
    clipRule: "evenodd"
  }));
};
SvgSiJson.displayName = "SvgSiJson";
const ForwardRef$3k = /*#__PURE__*/React.forwardRef(SvgSiJson);
const Memo$3k = /*#__PURE__*/React.memo(ForwardRef$3k);

const SvgSiJsonAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.816 3H7a1 1 0 0 1 0 2h-.18c-.825.005-1.12.101-1.23.182h-.001c-.022.016-.18.124-.18.828v3.893c0 .88-.45 1.526-.972 1.96.523.428.971 1.07.971 1.955v4.172c0 .71.16.816.18.83.11.08.404.175 1.231.18H7a1 1 0 1 1 0 2h-.189c-.797-.004-1.707-.062-2.394-.559-.786-.568-1.009-1.476-1.009-2.451v-4.172c0-.142-.065-.312-.376-.507-.321-.201-.763-.326-1.123-.359A1 1 0 0 1 1 11.956v-.166a1 1 0 0 1 .91-.996c.35-.031.79-.162 1.113-.371.318-.205.385-.383.385-.52V6.01c0-.972.224-1.878 1.007-2.447.687-.498 1.596-.559 2.396-.563zM16 4a1 1 0 0 1 1-1h.189c.8.004 1.71.065 2.396.563.784.569 1.007 1.475 1.007 2.447v3.893c0 .137.067.315.385.52.323.209.763.34 1.113.371a1 1 0 0 1 .91.996v.166a1 1 0 0 1-.91.996c-.359.033-.801.158-1.122.36-.31.194-.376.364-.376.506v4.172c0 .975-.223 1.883-1.009 2.451-.687.497-1.597.555-2.394.559H17a1 1 0 1 1 0-2h.18c.828-.005 1.121-.1 1.232-.18.02-.014.18-.12.18-.83v-4.172c0-.884.448-1.527.971-1.956-.521-.433-.971-1.08-.971-1.96V6.01c0-.704-.159-.812-.18-.827l-.002-.001c-.11-.08-.405-.177-1.23-.182H17a1 1 0 0 1-1-1M9 14a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1",
    clipRule: "evenodd"
  }));
};
SvgSiJsonAlt1.displayName = "SvgSiJsonAlt1";
const ForwardRef$3j = /*#__PURE__*/React.forwardRef(SvgSiJsonAlt1);
const Memo$3j = /*#__PURE__*/React.memo(ForwardRef$3j);

const SvgSiJsonAlt2 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M2 14a1 1 0 0 1-1-1v-1c3.2-.4 4.13.3 4.195.7.57.591.648 1.428.582 2.169l-.27 3.521c-.026.436.043.722.14.912.114.212.273.365.503.476l.02.01c.252.128.587.212 1.04.212h.99a1 1 0 1 1 0 2h-.99c-.695 0-1.352-.129-1.938-.425a3.07 3.07 0 0 1-1.392-1.336l-.005-.01c-.31-.595-.407-1.27-.363-1.97v-.014l.27-3.535.002-.016a1.8 1.8 0 0 0-.012-.533l-.018-.064a1 1 0 0 0-.097-.032A2.8 2.8 0 0 0 2.98 14z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M2 9.88a1 1 0 0 0-1 1v1c3.2.4 4.13-.3 4.195-.699.57-.592.648-1.428.582-2.17l-.27-3.521c-.026-.435.043-.722.14-.912.114-.211.273-.364.503-.475l.02-.01c.252-.129.587-.212 1.04-.212h.99a1 1 0 1 0 0-2h-.99c-.695 0-1.352.128-1.938.425A3.07 3.07 0 0 0 3.88 3.642l-.005.01c-.31.595-.407 1.27-.363 1.97v.013l.27 3.536.002.015c.024.261.01.432-.012.534l-.018.064a1 1 0 0 1-.097.031 2.8 2.8 0 0 1-.677.066zm20 0a1 1 0 0 1 1 1v1c-3.2.4-4.13-.3-4.195-.699-.57-.592-.648-1.428-.582-2.17l.27-3.521c.026-.435-.043-.722-.14-.912a1.07 1.07 0 0 0-.503-.475l-.02-.01c-.252-.129-.587-.212-1.04-.212h-.99a1 1 0 1 1 0-2h.99c.695 0 1.352.128 1.938.425a3.07 3.07 0 0 1 1.392 1.336l.005.01c.31.595.407 1.27.363 1.97v.013l-.27 3.536-.002.015c-.024.261-.01.432.012.534q.01.043.018.064.028.012.097.031c.138.037.356.066.677.066z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M22 14a1 1 0 0 0 1-1v-1c-3.2-.4-4.13.3-4.195.7-.57.591-.648 1.428-.582 2.169l.27 3.521c.026.436-.043.722-.14.912a1.07 1.07 0 0 1-.503.476l-.02.01c-.252.128-.587.212-1.04.212h-.99a1 1 0 1 0 0 2h.99c.695 0 1.352-.129 1.938-.425a3.07 3.07 0 0 0 1.392-1.336l.005-.01c.31-.595.407-1.27.363-1.97v-.014l-.27-3.535-.002-.016a1.8 1.8 0 0 1 .012-.533l.018-.064q.028-.013.097-.032A2.8 2.8 0 0 1 21.02 14z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9 14a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1",
    clipRule: "evenodd"
  }));
};
SvgSiJsonAlt2.displayName = "SvgSiJsonAlt2";
const ForwardRef$3i = /*#__PURE__*/React.forwardRef(SvgSiJsonAlt2);
const Memo$3i = /*#__PURE__*/React.memo(ForwardRef$3i);

const SvgSiJsonAlt3 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7.835 3.97A1 1 0 0 1 6.865 5c-.41.012-.722.077-.955.17a.87.87 0 0 0-.398.29c-.051.085-.116.263-.116.606V9.23c0 .928-.25 1.782-.84 2.459l-.01.012q-.136.15-.288.281.159.141.3.306c.592.666.838 1.515.838 2.436v3.231c0 .34.07.514.124.598l.012.019c.062.1.152.183.323.244l.033.013c.23.092.547.158.976.17a1 1 0 0 1-.057 2c-.591-.017-1.147-.11-1.646-.307a2.57 2.57 0 0 1-1.324-1.059c-.322-.5-.441-1.084-.441-1.678v-3.23c0-.568-.147-.9-.337-1.112l-.023-.026c-.18-.214-.53-.438-1.212-.56A1 1 0 0 1 1 12.044v-.132a1 1 0 0 1 .821-.984c.665-.12 1.032-.338 1.233-.558.198-.231.342-.578.342-1.14V6.067c0-.605.118-1.204.447-1.71l.02-.028a2.86 2.86 0 0 1 1.304-1.015c.5-.2 1.053-.295 1.639-.313a1 1 0 0 1 1.029.97m8.33 0a1 1 0 0 1 1.03-.97c.585.018 1.138.113 1.638.313a2.86 2.86 0 0 1 1.324 1.043c.33.506.447 1.105.447 1.71V9.23c0 .56.144.908.343 1.139.2.22.567.437 1.232.558a1 1 0 0 1 .821.984v.132a1 1 0 0 1-.824.984c-.682.122-1.033.346-1.212.56l-.023.026c-.19.211-.337.544-.337 1.111v3.231c0 .594-.12 1.179-.44 1.678a2.57 2.57 0 0 1-1.325 1.06c-.499.196-1.055.289-1.646.306a1 1 0 1 1-.057-2c.429-.012.746-.078.976-.17l.029-.011.004-.002a.58.58 0 0 0 .323-.244l.012-.02c.055-.083.124-.257.124-.597v-3.23c0-.922.246-1.771.839-2.437q.14-.165.3-.306a3 3 0 0 1-.288-.281l-.011-.012c-.59-.677-.84-1.53-.84-2.46V6.067c0-.343-.065-.521-.116-.607a.87.87 0 0 0-.398-.289c-.233-.093-.544-.158-.955-.17a1 1 0 0 1-.97-1.03M10 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2.247 4.031a1 1 0 0 1 .72 1.218 23 23 0 0 1-.514 1.698 26 26 0 0 1-.683 1.785q-.346.888-.696 1.674a1 1 0 0 1-1.828-.812 38 38 0 0 0 .677-1.63q.35-.822.637-1.663.287-.846.47-1.55a1 1 0 0 1 1.217-.72",
    clipRule: "evenodd"
  }));
};
SvgSiJsonAlt3.displayName = "SvgSiJsonAlt3";
const ForwardRef$3h = /*#__PURE__*/React.forwardRef(SvgSiJsonAlt3);
const Memo$3h = /*#__PURE__*/React.memo(ForwardRef$3h);

const SvgSiJsonAlt4 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.816 3H7a1 1 0 0 1 0 2h-.18c-.825.005-1.12.101-1.23.182h-.001c-.022.016-.18.124-.18.828v3.893c0 .88-.45 1.526-.972 1.96.523.428.971 1.07.971 1.955v4.172c0 .71.16.816.18.83.11.08.404.175 1.231.18H7a1 1 0 1 1 0 2h-.189c-.797-.004-1.707-.062-2.394-.559-.786-.568-1.009-1.476-1.009-2.451v-4.172c0-.142-.065-.312-.376-.507-.321-.201-.763-.326-1.123-.359A1 1 0 0 1 1 11.956v-.166a1 1 0 0 1 .91-.996c.35-.031.79-.162 1.113-.371.318-.205.385-.383.385-.52V6.01c0-.972.224-1.878 1.007-2.447.687-.498 1.596-.559 2.396-.563zM16 4a1 1 0 0 1 1-1h.189c.8.004 1.71.065 2.396.563.784.569 1.007 1.475 1.007 2.447v3.893c0 .137.067.315.385.52.323.209.763.34 1.113.371a1 1 0 0 1 .91.996v.166a1 1 0 0 1-.91.996c-.359.033-.801.158-1.122.36-.31.194-.376.364-.376.506v4.172c0 .975-.223 1.883-1.009 2.451-.687.497-1.597.555-2.394.559H17a1 1 0 1 1 0-2h.18c.828-.005 1.121-.1 1.232-.18.02-.014.18-.12.18-.83v-4.172c0-.884.448-1.527.971-1.956-.521-.433-.971-1.08-.971-1.96V6.01c0-.704-.159-.812-.18-.827l-.002-.001c-.11-.08-.405-.177-1.23-.182H17a1 1 0 0 1-1-1m-6 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2.247 4.031a1 1 0 0 1 .72 1.218 23 23 0 0 1-.514 1.698 26 26 0 0 1-.683 1.785q-.346.888-.696 1.674a1 1 0 0 1-1.828-.812 38 38 0 0 0 .677-1.63q.35-.822.637-1.663.287-.846.47-1.55a1 1 0 0 1 1.217-.72",
    clipRule: "evenodd"
  }));
};
SvgSiJsonAlt4.displayName = "SvgSiJsonAlt4";
const ForwardRef$3g = /*#__PURE__*/React.forwardRef(SvgSiJsonAlt4);
const Memo$3g = /*#__PURE__*/React.memo(ForwardRef$3g);

const SvgSiJsonAlt5 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2.247 4.031a1 1 0 0 1 .719 1.218 23 23 0 0 1-.514 1.698 27 27 0 0 1-.682 1.785q-.346.888-.696 1.674a1 1 0 1 1-1.828-.812 38 38 0 0 0 .666-1.603l.006-.014.005-.013a25 25 0 0 0 .637-1.663q.288-.846.469-1.55a1 1 0 0 1 1.218-.72",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M2 14a1 1 0 0 1-1-1v-1c3.2-.4 4.13.3 4.195.7.57.591.648 1.428.582 2.17l-.27 3.52c-.026.436.043.722.14.912.114.212.273.365.503.476l.02.01c.252.128.587.212 1.04.212h.99a1 1 0 1 1 0 2h-.99c-.695 0-1.352-.129-1.938-.425a3.07 3.07 0 0 1-1.392-1.336l-.005-.01c-.31-.595-.407-1.27-.363-1.97v-.014l.27-3.535.002-.016a1.8 1.8 0 0 0-.012-.533l-.018-.064a1 1 0 0 0-.097-.032A2.8 2.8 0 0 0 2.98 14z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M2 9.88a1 1 0 0 0-1 1v1c3.2.4 4.13-.3 4.195-.699.57-.592.648-1.428.582-2.17l-.27-3.52c-.026-.436.043-.723.14-.913.114-.211.273-.364.503-.475l.02-.01c.252-.128.587-.212 1.04-.212h.99a1 1 0 0 0 0-2h-.99c-.695 0-1.352.129-1.938.425A3.07 3.07 0 0 0 3.88 3.642l-.005.01c-.31.595-.407 1.27-.363 1.97v.013l.27 3.536.002.015c.024.261.01.432-.012.534l-.018.064a1 1 0 0 1-.097.031 2.8 2.8 0 0 1-.677.066zm20 0a1 1 0 0 1 1 1v1c-3.2.4-4.13-.3-4.195-.699-.57-.592-.648-1.428-.582-2.17l.27-3.52c.026-.436-.043-.723-.14-.913a1.07 1.07 0 0 0-.503-.475l-.02-.01c-.252-.128-.587-.212-1.04-.212h-.99a1 1 0 1 1 0-2h.99c.695 0 1.352.129 1.938.425a3.07 3.07 0 0 1 1.392 1.336l.005.01c.31.595.407 1.27.363 1.97v.013l-.27 3.536-.002.015c-.024.261-.01.432.012.534q.01.043.018.064.028.013.097.031c.138.037.356.066.677.066z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M22 14a1 1 0 0 0 1-1v-1c-3.2-.4-4.13.3-4.195.7-.57.591-.648 1.428-.582 2.17l.27 3.52c.026.436-.043.722-.14.912a1.07 1.07 0 0 1-.503.476l-.02.01c-.252.128-.587.212-1.04.212h-.99a1 1 0 1 0 0 2h.99c.695 0 1.352-.129 1.938-.425a3.07 3.07 0 0 0 1.392-1.336l.005-.01c.31-.595.407-1.27.363-1.97v-.014l-.27-3.535-.002-.016a1.8 1.8 0 0 1 .012-.533l.018-.064q.028-.013.097-.032A2.8 2.8 0 0 1 21.02 14z"
  }));
};
SvgSiJsonAlt5.displayName = "SvgSiJsonAlt5";
const ForwardRef$3f = /*#__PURE__*/React.forwardRef(SvgSiJsonAlt5);
const Memo$3f = /*#__PURE__*/React.memo(ForwardRef$3f);

const SvgSiKey = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15 2a7 7 0 1 1-1.716 13.786L7.946 21.13a2.993 2.993 0 0 1-4.231 0l-1.422-1.422a1 1 0 0 1 0-1.414l1.458-1.458.132-.111a1 1 0 0 1 .477-.177l1.051-.105.132-1.096.034-.167a1 1 0 0 1 .84-.707l1.112-.135.135-1.113.033-.164c.047-.159.135-.305.253-.424l.697-.697A7 7 0 0 1 15 2m0 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
    clipRule: "evenodd"
  }));
};
SvgSiKey.displayName = "SvgSiKey";
const ForwardRef$3e = /*#__PURE__*/React.forwardRef(SvgSiKey);
const Memo$3e = /*#__PURE__*/React.memo(ForwardRef$3e);

const SvgSiKeypad = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m9-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m12 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-9 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m16-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
  }));
};
SvgSiKeypad.displayName = "SvgSiKeypad";
const ForwardRef$3d = /*#__PURE__*/React.forwardRef(SvgSiKeypad);
const Memo$3d = /*#__PURE__*/React.memo(ForwardRef$3d);

const SvgSiKnob = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 7a8 8 0 1 1 0 16 8 8 0 0 1 0-16m4.707 3.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4m14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-7-3a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
  }));
};
SvgSiKnob.displayName = "SvgSiKnob";
const ForwardRef$3c = /*#__PURE__*/React.forwardRef(SvgSiKnob);
const Memo$3c = /*#__PURE__*/React.memo(ForwardRef$3c);

const SvgSiLamp = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16 21c0-.64-.458-1-.818-1H8.818c-.36 0-.818.36-.818 1zm7-8a1 1 0 0 1-1 1h-9v4h2.182C16.822 18 18 19.44 18 21v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1c0-1.56 1.179-3 2.818-3H11v-4H2a1 1 0 0 1-1-1v-1C1 5.925 5.925 1 12 1s11 4.925 11 11z"
  }));
};
SvgSiLamp.displayName = "SvgSiLamp";
const ForwardRef$3b = /*#__PURE__*/React.forwardRef(SvgSiLamp);
const Memo$3b = /*#__PURE__*/React.memo(ForwardRef$3b);

const SvgSiLanding = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m8.488 4.316 1.27.22q.015.001.03.005c.451.107.844.3 1.192.597l.146.133.016.016 4.666 4.979 4.08.615.017.004c1.37.257 2.303 1.555 2.065 2.888l-.315 1.967a.5.5 0 0 1-.578.413l-11.814-2.03a.5.5 0 0 1-.15-.052l-5.577-2.958a.5.5 0 0 1-.238-.275L1.954 7.042a.5.5 0 0 1 .564-.658l.959.18.006.001a2.54 2.54 0 0 1 1.554 1.003l.82.916 4.28.705L7.96 5.042a.5.5 0 0 1 .528-.726M18 18a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2z"
  }));
};
SvgSiLanding.displayName = "SvgSiLanding";
const ForwardRef$3a = /*#__PURE__*/React.forwardRef(SvgSiLanding);
const Memo$3a = /*#__PURE__*/React.memo(ForwardRef$3a);

const SvgSiLayers = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M20.515 15.126a1 1 0 1 1 .97 1.748l-9 5a1 1 0 0 1-.97 0l-9-5a1 1 0 1 1 .97-1.748L12 19.856zm0-4a1 1 0 1 1 .97 1.748l-9 5a1 1 0 0 1-.97 0l-9-5a1 1 0 1 1 .97-1.748L12 15.856zM11.63 2.07a1 1 0 0 1 .854.056l9 5a1 1 0 0 1 0 1.748l-9 5a1 1 0 0 1-.97 0l-9-5a1 1 0 0 1 0-1.748l9-5z"
  }));
};
SvgSiLayers.displayName = "SvgSiLayers";
const ForwardRef$39 = /*#__PURE__*/React.forwardRef(SvgSiLayers);
const Memo$39 = /*#__PURE__*/React.memo(ForwardRef$39);

const SvgSiLeftDown = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M10 9.4A3.4 3.4 0 0 1 13.4 6H19a1 1 0 1 0 0-2h-5.6A5.4 5.4 0 0 0 8 9.4v7.186l-2.293-2.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L10 16.586z"
  }));
};
SvgSiLeftDown.displayName = "SvgSiLeftDown";
const ForwardRef$38 = /*#__PURE__*/React.forwardRef(SvgSiLeftDown);
const Memo$38 = /*#__PURE__*/React.memo(ForwardRef$38);

const SvgSiLeftRight = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 13H5.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L5.414 11h13.172l-2.293-2.293a1 1 0 0 1 0-1.414"
  }));
};
SvgSiLeftRight.displayName = "SvgSiLeftRight";
const ForwardRef$37 = /*#__PURE__*/React.forwardRef(SvgSiLeftRight);
const Memo$37 = /*#__PURE__*/React.memo(ForwardRef$37);

const SvgSiLeftTwoHeaded = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.293 7.293a1 1 0 1 1 1.414 1.414L11.414 11H20a1 1 0 1 1 0 2h-8.586l2.293 2.293a1 1 0 1 1-1.414 1.414L8.586 13H6.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L6.414 11h2.172z"
  }));
};
SvgSiLeftTwoHeaded.displayName = "SvgSiLeftTwoHeaded";
const ForwardRef$36 = /*#__PURE__*/React.forwardRef(SvgSiLeftTwoHeaded);
const Memo$36 = /*#__PURE__*/React.memo(ForwardRef$36);

const SvgSiLeftUp = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M9.707 4.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L8 7.414V14.6a5.4 5.4 0 0 0 5.4 5.4H19a1 1 0 1 0 0-2h-5.6a3.4 3.4 0 0 1-3.4-3.4V7.414l2.293 2.293a1 1 0 0 0 1.414-1.414z"
  }));
};
SvgSiLeftUp.displayName = "SvgSiLeftUp";
const ForwardRef$35 = /*#__PURE__*/React.forwardRef(SvgSiLeftUp);
const Memo$35 = /*#__PURE__*/React.memo(ForwardRef$35);

const SvgSiLibraryBooks = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.6 2H8.4A2.4 2.4 0 0 0 6 4.4v11.2A2.4 2.4 0 0 0 8.4 18h11.2a2.4 2.4 0 0 0 2.4-2.4V4.4A2.4 2.4 0 0 0 19.6 2M9 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 2a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm-1 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4 4a1 1 0 0 0-2 0v11.6C2 19.132 4.868 22 8.4 22H20a1 1 0 1 0 0-2H8.4A4.403 4.403 0 0 1 4 15.6z"
  }));
};
SvgSiLibraryBooks.displayName = "SvgSiLibraryBooks";
const ForwardRef$34 = /*#__PURE__*/React.forwardRef(SvgSiLibraryBooks);
const Memo$34 = /*#__PURE__*/React.memo(ForwardRef$34);

const SvgSiLightMode = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    fill: "currentColor",
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1M4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414zM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm17 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m-.343 4.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414zm-9.9 1.414a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414zM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414zM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm-1-3a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};
SvgSiLightMode.displayName = "SvgSiLightMode";
const ForwardRef$33 = /*#__PURE__*/React.forwardRef(SvgSiLightMode);
const Memo$33 = /*#__PURE__*/React.memo(ForwardRef$33);

const SvgSiLightning = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13.133 2.379a1 1 0 0 1 1.77.785L13.848 9.5h3.819a1 1 0 0 1 .784 1.621l-7.917 10a1 1 0 0 1-1.77-.785L9.819 14H6a1 1 0 0 1-.783-1.621z"
  }));
};
SvgSiLightning.displayName = "SvgSiLightning";
const ForwardRef$32 = /*#__PURE__*/React.forwardRef(SvgSiLightning);
const Memo$32 = /*#__PURE__*/React.memo(ForwardRef$32);

const SvgSiLink = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13.241 13.281c0-.722-.282-1.416-.785-1.934a1 1 0 0 1 1.436-1.393 4.78 4.78 0 0 1 0 6.654l-.003.004-3.913 3.992a4.62 4.62 0 0 1-6.618 0 4.78 4.78 0 0 1-.008-6.664l2.607-2.74a1 1 0 1 1 1.448 1.38L4.8 15.317l-.009.01a2.78 2.78 0 0 0-.18 3.678l.18.202v.001a2.62 2.62 0 0 0 3.754 0l.002-.002 3.914-3.995c.5-.518.781-1.21.781-1.93M20 6.732a2.78 2.78 0 0 0-.79-1.94v-.001a2.62 2.62 0 0 0-3.754 0l-.003.003-4.049 4.12a2.78 2.78 0 0 0-.232 3.612 1 1 0 0 1-1.6 1.2 4.78 4.78 0 0 1 .4-6.207l.004-.003 4.05-4.123a4.62 4.62 0 0 1 6.615.002 4.777 4.777 0 0 1 .019 6.654l-2.71 2.931a1 1 0 0 1-1.469-1.359l2.71-2.93.018-.02a2.78 2.78 0 0 0 .79-1.94"
  }));
};
SvgSiLink.displayName = "SvgSiLink";
const ForwardRef$31 = /*#__PURE__*/React.forwardRef(SvgSiLink);
const Memo$31 = /*#__PURE__*/React.memo(ForwardRef$31);

const SvgSiLock = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v3h.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6H7zm8 0v3H9V7c0-1.658 1.342-3 3-3s3 1.342 3 3m-3 5.25a1.75 1.75 0 0 0-.75 3.332V18a.75.75 0 0 0 1.5 0v-2.418A1.75 1.75 0 0 0 12 12.25",
    clipRule: "evenodd"
  }));
};
SvgSiLock.displayName = "SvgSiLock";
const ForwardRef$30 = /*#__PURE__*/React.forwardRef(SvgSiLock);
const Memo$30 = /*#__PURE__*/React.memo(ForwardRef$30);

const SvgSiLockAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v4h2.4c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6H7zm8 0v4H9V7c0-1.658 1.342-3 3-3s3 1.342 3 3m-5 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
    clipRule: "evenodd"
  }));
};
SvgSiLockAlt.displayName = "SvgSiLockAlt";
const ForwardRef$2$ = /*#__PURE__*/React.forwardRef(SvgSiLockAlt);
const Memo$2$ = /*#__PURE__*/React.memo(ForwardRef$2$);

const SvgSiLockMuted = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 2a5 5 0 0 0-5 5v3h-.4c-.88 0-1.6.72-1.6 1.6v7C5 19.92 6.08 21 7.4 21h9.2c1.32 0 2.4-1.08 2.4-2.4v-7c0-.88-.72-1.6-1.6-1.6H17V7a5 5 0 0 0-5-5m3 8V7c0-1.658-1.342-3-3-3S9 5.342 9 7v3z",
    clipRule: "evenodd"
  }));
};
SvgSiLockMuted.displayName = "SvgSiLockMuted";
const ForwardRef$2_ = /*#__PURE__*/React.forwardRef(SvgSiLockMuted);
const Memo$2_ = /*#__PURE__*/React.memo(ForwardRef$2_);

const SvgSiMail = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M20.8 4H3.2C2.54 4 2 4.54 2 5.2v12.4C2 18.92 3.08 20 4.4 20h15.2c1.32 0 2.4-1.08 2.4-2.4V5.2c0-.66-.54-1.2-1.2-1.2M5.65 6.3a1 1 0 1 0-1.3 1.52l6.87 5.89a1.2 1.2 0 0 0 .78.285 1.2 1.2 0 0 0 .78-.286l6.87-5.89a1 1 0 1 0-1.3-1.518L12 11.744z",
    clipRule: "evenodd"
  }));
};
SvgSiMail.displayName = "SvgSiMail";
const ForwardRef$2Z = /*#__PURE__*/React.forwardRef(SvgSiMail);
const Memo$2Z = /*#__PURE__*/React.memo(ForwardRef$2Z);

const SvgSiMap = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.872 2.007c.149-.019.301-.003.444.044l5.705 1.902 6.705-1.915A1 1 0 0 1 23 3v16a1 1 0 0 1-.726.962l-7 2a1 1 0 0 1-.59-.014l-5.706-1.902-6.704 1.916A1 1 0 0 1 1 21V5a1 1 0 0 1 .726-.962l7-2zM14 5v16h2V5zM8 3v16h2V3z",
    clipRule: "evenodd"
  }));
};
SvgSiMap.displayName = "SvgSiMap";
const ForwardRef$2Y = /*#__PURE__*/React.forwardRef(SvgSiMap);
const Memo$2Y = /*#__PURE__*/React.memo(ForwardRef$2Y);

const SvgSiMemory = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10 2a1 1 0 0 1 1 1v2h2V3a1 1 0 1 1 2 0v2h1.6A2.4 2.4 0 0 1 19 7.4V9h2a1 1 0 1 1 0 2h-2v2h2a1 1 0 1 1 0 2h-2v1.6a2.4 2.4 0 0 1-2.4 2.4H15v2a1 1 0 1 1-2 0v-2h-2v2a1 1 0 1 1-2 0v-2H7.4A2.4 2.4 0 0 1 5 16.6V15H3a1 1 0 1 1 0-2h2v-2H3a1 1 0 1 1 0-2h2V7.4A2.4 2.4 0 0 1 7.4 5H9V3a1 1 0 0 1 1-1m3.4 7h-2.8A1.6 1.6 0 0 0 9 10.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 13.4 9",
    clipRule: "evenodd"
  }));
};
SvgSiMemory.displayName = "SvgSiMemory";
const ForwardRef$2X = /*#__PURE__*/React.forwardRef(SvgSiMemory);
const Memo$2X = /*#__PURE__*/React.memo(ForwardRef$2X);

const SvgSiMeter = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.388 3.007a11.1 11.1 0 0 1 5.463 1.654 10.9 10.9 0 0 1 4.061 4.484l.162.347a10.7 10.7 0 0 1 .855 5.586 10.77 10.77 0 0 1-2.346 5.553c-.19.233-.475.369-.776.369H4.193a1 1 0 0 1-.775-.37 10.77 10.77 0 0 1-2.347-5.552 10.7 10.7 0 0 1 1.017-5.933l.174-.342A10.9 10.9 0 0 1 6.149 4.66 11.1 11.1 0 0 1 12 3zm6.32 6.286a1 1 0 0 0-1.415 0l-4.777 4.776a2 2 0 1 0 1.414 1.414l4.777-4.776a1 1 0 0 0 0-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiMeter.displayName = "SvgSiMeter";
const ForwardRef$2W = /*#__PURE__*/React.forwardRef(SvgSiMeter);
const Memo$2W = /*#__PURE__*/React.memo(ForwardRef$2W);

const SvgSiMic = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 2C9.769 2 8 3.757 8 5.828v6.344C8 14.242 9.769 16 12 16s4-1.758 4-3.828V5.828C16 3.758 14.231 2 12 2",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13 20.945V23a1 1 0 1 1-2 0v-2.055A9 9 0 0 1 3 12a1 1 0 1 1 2 0 7 7 0 1 0 14 0 1 1 0 1 1 2 0 9 9 0 0 1-8 8.945"
  }));
};
SvgSiMic.displayName = "SvgSiMic";
const ForwardRef$2V = /*#__PURE__*/React.forwardRef(SvgSiMic);
const Memo$2V = /*#__PURE__*/React.memo(ForwardRef$2V);

const SvgSiMicDetailed = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5 7a7 7 0 0 1 14 0v6a7 7 0 0 1-6 6.93V22h5a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2h5v-2.07A7 7 0 0 1 5 13zm7-4a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm-1 4a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m-3 3a1 1 0 0 1 1-1h.1a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1m3 0a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4-1a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm0-3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zM9 6a1 1 0 0 0 0 2h.1a1 1 0 0 0 0-2zm3 6a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm2-2a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1m-6 0a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiMicDetailed.displayName = "SvgSiMicDetailed";
const ForwardRef$2U = /*#__PURE__*/React.forwardRef(SvgSiMicDetailed);
const Memo$2U = /*#__PURE__*/React.memo(ForwardRef$2U);

const SvgSiMoney = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 6.8V8H2.8A1.8 1.8 0 0 0 1 9.8v8.4A1.8 1.8 0 0 0 2.8 20h16.4a1.8 1.8 0 0 0 1.8-1.8V17h1.2c.992 0 1.8-.808 1.8-1.8V6.8c0-.992-.808-1.8-1.8-1.8H5.8C4.808 5 4 5.808 4 6.8M6 7v1h13.2A1.8 1.8 0 0 1 21 9.8V15h1V7zm3 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
    clipRule: "evenodd"
  }));
};
SvgSiMoney.displayName = "SvgSiMoney";
const ForwardRef$2T = /*#__PURE__*/React.forwardRef(SvgSiMoney);
const Memo$2T = /*#__PURE__*/React.memo(ForwardRef$2T);

const SvgSiMonitor = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zm8-4.4a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 14.6V6.4A3.4 3.4 0 0 1 4.4 3h15.2l.175.005A3.4 3.4 0 0 1 23 6.4z"
  }));
};
SvgSiMonitor.displayName = "SvgSiMonitor";
const ForwardRef$2S = /*#__PURE__*/React.forwardRef(SvgSiMonitor);
const Memo$2S = /*#__PURE__*/React.memo(ForwardRef$2S);

const SvgSiMonitorCheck = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.775 3.005A3.4 3.4 0 0 1 23 6.4v8.2a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 14.6V6.4A3.4 3.4 0 0 1 4.4 3h15.2zm-4.068 4.788a1 1 0 0 0-1.414 0L11 11.086 9.707 9.793a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiMonitorCheck.displayName = "SvgSiMonitorCheck";
const ForwardRef$2R = /*#__PURE__*/React.forwardRef(SvgSiMonitorCheck);
const Memo$2R = /*#__PURE__*/React.memo(ForwardRef$2R);

const SvgSiMonitorClose = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.775 3.005A3.4 3.4 0 0 1 23 6.4v8.2a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 14.6V6.4A3.4 3.4 0 0 1 4.4 3h15.2zm-5.068 4.788a1 1 0 0 0-1.414 0L12 9.086l-1.293-1.293a1 1 0 1 0-1.414 1.414l1.293 1.293-1.293 1.293a1 1 0 1 0 1.414 1.414L12 11.914l1.293 1.293a1 1 0 1 0 1.414-1.414L13.414 10.5l1.293-1.293a1 1 0 0 0 0-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiMonitorClose.displayName = "SvgSiMonitorClose";
const ForwardRef$2Q = /*#__PURE__*/React.forwardRef(SvgSiMonitorClose);
const Memo$2Q = /*#__PURE__*/React.memo(ForwardRef$2Q);

const SvgSiMonitorDown = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.775 3.005A3.4 3.4 0 0 1 23 6.4v8.2a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 14.6V6.4A3.4 3.4 0 0 1 4.4 3h15.2zM12 7a1 1 0 0 0-1 1v2.586l-.293-.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2a1 1 0 1 0-1.414-1.414l-.293.293V8a1 1 0 0 0-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiMonitorDown.displayName = "SvgSiMonitorDown";
const ForwardRef$2P = /*#__PURE__*/React.forwardRef(SvgSiMonitorDown);
const Memo$2P = /*#__PURE__*/React.memo(ForwardRef$2P);

const SvgSiMonitorPause = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.775 3.005A3.4 3.4 0 0 1 23 6.4v8.2a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 14.6V6.4A3.4 3.4 0 0 1 4.4 3h15.2zM10 7a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiMonitorPause.displayName = "SvgSiMonitorPause";
const ForwardRef$2O = /*#__PURE__*/React.forwardRef(SvgSiMonitorPause);
const Memo$2O = /*#__PURE__*/React.memo(ForwardRef$2O);

const SvgSiMonitorPlay = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.775 3.005A3.4 3.4 0 0 1 23 6.4v8.2a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 14.6V6.4A3.4 3.4 0 0 1 4.4 3h15.2zm-9.328 4.1A1 1 0 0 0 9 8v5a1 1 0 0 0 1.447.895l5-2.5a1 1 0 0 0 0-1.79z",
    clipRule: "evenodd"
  }));
};
SvgSiMonitorPlay.displayName = "SvgSiMonitorPlay";
const ForwardRef$2N = /*#__PURE__*/React.forwardRef(SvgSiMonitorPlay);
const Memo$2N = /*#__PURE__*/React.memo(ForwardRef$2N);

const SvgSiMonitorStop = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM13.5 9v3h-3V9z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.775 3.005A3.4 3.4 0 0 1 23 6.4v8.2a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 14.6V6.4A3.4 3.4 0 0 1 4.4 3h15.2zM10.3 7a1.8 1.8 0 0 0-1.8 1.8v3.4a1.8 1.8 0 0 0 1.8 1.8h3.4a1.8 1.8 0 0 0 1.8-1.8V8.8A1.8 1.8 0 0 0 13.7 7z",
    clipRule: "evenodd"
  }));
};
SvgSiMonitorStop.displayName = "SvgSiMonitorStop";
const ForwardRef$2M = /*#__PURE__*/React.forwardRef(SvgSiMonitorStop);
const Memo$2M = /*#__PURE__*/React.memo(ForwardRef$2M);

const SvgSiMonitorUp = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.775 3.005A3.4 3.4 0 0 1 23 6.4v8.2a3.4 3.4 0 0 1-3.4 3.4H4.4A3.4 3.4 0 0 1 1 14.6V6.4A3.4 3.4 0 0 1 4.4 3h15.2zm-7.068 4.288a1 1 0 0 0-1.338-.068l-.076.068-2 2a1 1 0 1 0 1.414 1.414l.293-.293V13a1 1 0 1 0 2 0v-2.586l.293.293a1 1 0 1 0 1.414-1.414z",
    clipRule: "evenodd"
  }));
};
SvgSiMonitorUp.displayName = "SvgSiMonitorUp";
const ForwardRef$2L = /*#__PURE__*/React.forwardRef(SvgSiMonitorUp);
const Memo$2L = /*#__PURE__*/React.memo(ForwardRef$2L);

const SvgSiMoon = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M9.272 2.406a1 1 0 0 0-1.23-1.355C6.59 1.535 5.432 2.488 4.37 3.55a11.4 11.4 0 0 0 0 16.182c4.518 4.519 11.51 4.261 15.976-.205 1.062-1.062 2.014-2.22 2.498-3.673A1 1 0 0 0 21.55 14.6c-3.59 1.322-7.675.734-10.433-2.025C8.35 9.808 7.788 5.744 9.272 2.406"
  }));
};
SvgSiMoon.displayName = "SvgSiMoon";
const ForwardRef$2K = /*#__PURE__*/React.forwardRef(SvgSiMoon);
const Memo$2K = /*#__PURE__*/React.memo(ForwardRef$2K);

const SvgSiMoreHoriz = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0m9 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4m7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
  }));
};
SvgSiMoreHoriz.displayName = "SvgSiMoreHoriz";
const ForwardRef$2J = /*#__PURE__*/React.forwardRef(SvgSiMoreHoriz);
const Memo$2J = /*#__PURE__*/React.memo(ForwardRef$2J);

const SvgSiMoreHorizCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M5 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m5 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
    clipRule: "evenodd"
  }));
};
SvgSiMoreHorizCircle.displayName = "SvgSiMoreHorizCircle";
const ForwardRef$2I = /*#__PURE__*/React.forwardRef(SvgSiMoreHorizCircle);
const Memo$2I = /*#__PURE__*/React.memo(ForwardRef$2I);

const SvgSiMoreHorizSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M5 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0m5 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0m7-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4",
    clipRule: "evenodd"
  }));
};
SvgSiMoreHorizSquare.displayName = "SvgSiMoreHorizSquare";
const ForwardRef$2H = /*#__PURE__*/React.forwardRef(SvgSiMoreHorizSquare);
const Memo$2H = /*#__PURE__*/React.memo(ForwardRef$2H);

const SvgSiMoreMutedHoriz = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M6 11a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m7 1a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0z"
  }));
};
SvgSiMoreMutedHoriz.displayName = "SvgSiMoreMutedHoriz";
const ForwardRef$2G = /*#__PURE__*/React.forwardRef(SvgSiMoreMutedHoriz);
const Memo$2G = /*#__PURE__*/React.memo(ForwardRef$2G);

const SvgSiMoreMutedHorizCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8 11a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1",
    clipRule: "evenodd"
  }));
};
SvgSiMoreMutedHorizCircle.displayName = "SvgSiMoreMutedHorizCircle";
const ForwardRef$2F = /*#__PURE__*/React.forwardRef(SvgSiMoreMutedHorizCircle);
const Memo$2F = /*#__PURE__*/React.memo(ForwardRef$2F);

const SvgSiMoreMutedHorizSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M8 11a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v.1a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1",
    clipRule: "evenodd"
  }));
};
SvgSiMoreMutedHorizSquare.displayName = "SvgSiMoreMutedHorizSquare";
const ForwardRef$2E = /*#__PURE__*/React.forwardRef(SvgSiMoreMutedHorizSquare);
const Memo$2E = /*#__PURE__*/React.memo(ForwardRef$2E);

const SvgSiMoreMutedVert = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 7h1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2m1 6h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2m0 6h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2"
  }));
};
SvgSiMoreMutedVert.displayName = "SvgSiMoreMutedVert";
const ForwardRef$2D = /*#__PURE__*/React.forwardRef(SvgSiMoreMutedVert);
const Memo$2D = /*#__PURE__*/React.memo(ForwardRef$2D);

const SvgSiMoreMutedVertCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M10.95 8.05a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiMoreMutedVertCircle.displayName = "SvgSiMoreMutedVertCircle";
const ForwardRef$2C = /*#__PURE__*/React.forwardRef(SvgSiMoreMutedVertCircle);
const Memo$2C = /*#__PURE__*/React.memo(ForwardRef$2C);

const SvgSiMoreMutedVertSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m6.55 4.05a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2h-.1a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiMoreMutedVertSquare.displayName = "SvgSiMoreMutedVertSquare";
const ForwardRef$2B = /*#__PURE__*/React.forwardRef(SvgSiMoreMutedVertSquare);
const Memo$2B = /*#__PURE__*/React.memo(ForwardRef$2B);

const SvgSiMoreSquareHoriz = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.533 14A1.533 1.533 0 0 1 10 12.467v-.934c0-.846.687-1.533 1.533-1.533h.934c.846 0 1.533.687 1.533 1.533v.934c0 .846-.687 1.533-1.533 1.533zm7 0A1.533 1.533 0 0 1 17 12.467v-.934c0-.846.686-1.533 1.533-1.533h.934c.847 0 1.533.687 1.533 1.533v.934c0 .846-.686 1.533-1.533 1.533zm-14 0A1.533 1.533 0 0 1 3 12.467v-.934C3 10.687 3.687 10 4.533 10h.934C6.314 10 7 10.687 7 11.533v.934C7 13.313 6.314 14 5.467 14z",
    clipRule: "evenodd"
  }));
};
SvgSiMoreSquareHoriz.displayName = "SvgSiMoreSquareHoriz";
const ForwardRef$2A = /*#__PURE__*/React.forwardRef(SvgSiMoreSquareHoriz);
const Memo$2A = /*#__PURE__*/React.memo(ForwardRef$2A);

const SvgSiMoreSquareVert = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10 11.533c0-.846.687-1.533 1.533-1.533h.934c.846 0 1.533.687 1.533 1.533v.934c0 .846-.687 1.533-1.533 1.533h-.934A1.533 1.533 0 0 1 10 12.467zm0 7c0-.847.687-1.533 1.533-1.533h.934c.846 0 1.533.686 1.533 1.533v.934c0 .847-.687 1.533-1.533 1.533h-.934A1.533 1.533 0 0 1 10 19.467zm0-14C10 3.686 10.687 3 11.533 3h.934C13.313 3 14 3.687 14 4.533v.934C14 6.314 13.313 7 12.467 7h-.934A1.533 1.533 0 0 1 10 5.467z",
    clipRule: "evenodd"
  }));
};
SvgSiMoreSquareVert.displayName = "SvgSiMoreSquareVert";
const ForwardRef$2z = /*#__PURE__*/React.forwardRef(SvgSiMoreSquareVert);
const Memo$2z = /*#__PURE__*/React.memo(ForwardRef$2z);

const SvgSiMoreVert = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-2 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
  }));
};
SvgSiMoreVert.displayName = "SvgSiMoreVert";
const ForwardRef$2y = /*#__PURE__*/React.forwardRef(SvgSiMoreVert);
const Memo$2y = /*#__PURE__*/React.memo(ForwardRef$2y);

const SvgSiMoreVertCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M10 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4",
    clipRule: "evenodd"
  }));
};
SvgSiMoreVertCircle.displayName = "SvgSiMoreVertCircle";
const ForwardRef$2x = /*#__PURE__*/React.forwardRef(SvgSiMoreVertCircle);
const Memo$2x = /*#__PURE__*/React.memo(ForwardRef$2x);

const SvgSiMoreVertSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M10 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4",
    clipRule: "evenodd"
  }));
};
SvgSiMoreVertSquare.displayName = "SvgSiMoreVertSquare";
const ForwardRef$2w = /*#__PURE__*/React.forwardRef(SvgSiMoreVertSquare);
const Memo$2w = /*#__PURE__*/React.memo(ForwardRef$2w);

const SvgSiMove = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.707 1.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L11 4.414V11H4.414l1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L4.414 13H11v6.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L13 19.586V13h6.586l-1.293 1.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L19.586 11H13V4.414l1.293 1.293a1 1 0 1 0 1.414-1.414z"
  }));
};
SvgSiMove.displayName = "SvgSiMove";
const ForwardRef$2v = /*#__PURE__*/React.forwardRef(SvgSiMove);
const Memo$2v = /*#__PURE__*/React.memo(ForwardRef$2v);

const SvgSiMovie = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M10.054 3 8.387 8h5.892l1.667-5z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M7.946 3 6.279 8H2v2h20V8h-5.613l1.667-5H20.6A2.4 2.4 0 0 1 23 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 18.6V5.4A2.4 2.4 0 0 1 3.4 3z"
  }));
};
SvgSiMovie.displayName = "SvgSiMovie";
const ForwardRef$2u = /*#__PURE__*/React.forwardRef(SvgSiMovie);
const Memo$2u = /*#__PURE__*/React.memo(ForwardRef$2u);

const SvgSiNope = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 1a10.96 10.96 0 0 1 7.65 3.099 1 1 0 0 1 .477.488A10.96 10.96 0 0 1 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M4.297 18.332l1.406 1.423L19.92 5.712l-1.405-1.424z",
    clipRule: "evenodd"
  }));
};
SvgSiNope.displayName = "SvgSiNope";
const ForwardRef$2t = /*#__PURE__*/React.forwardRef(SvgSiNope);
const Memo$2t = /*#__PURE__*/React.memo(ForwardRef$2t);

const SvgSiNorthEast = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M10 8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-2.586l-6.293 6.293a1 1 0 0 1-1.414-1.414L13.586 9H11a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiNorthEast.displayName = "SvgSiNorthEast";
const ForwardRef$2s = /*#__PURE__*/React.forwardRef(SvgSiNorthEast);
const Memo$2s = /*#__PURE__*/React.memo(ForwardRef$2s);

const SvgSiNorthEastCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M11 7a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 10.414V13a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1z",
    clipRule: "evenodd"
  }));
};
SvgSiNorthEastCircle.displayName = "SvgSiNorthEastCircle";
const ForwardRef$2r = /*#__PURE__*/React.forwardRef(SvgSiNorthEastCircle);
const Memo$2r = /*#__PURE__*/React.memo(ForwardRef$2r);

const SvgSiNorthEastEscape = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L15.586 7H14a1 1 0 0 1-1-1M5 9.4C5 7.518 6.518 6 8.4 6H9a1 1 0 0 1 0 2h-.6C7.622 8 7 8.622 7 9.4v6.2c0 .778.622 1.4 1.4 1.4h6.2c.778 0 1.4-.622 1.4-1.4V15a1 1 0 1 1 2 0v.6c0 1.882-1.518 3.4-3.4 3.4H8.4A3.394 3.394 0 0 1 5 15.6z",
    clipRule: "evenodd"
  }));
};
SvgSiNorthEastEscape.displayName = "SvgSiNorthEastEscape";
const ForwardRef$2q = /*#__PURE__*/React.forwardRef(SvgSiNorthEastEscape);
const Memo$2q = /*#__PURE__*/React.memo(ForwardRef$2q);

const SvgSiNorthEastEscapeAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13 6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L15.586 7H14a1 1 0 0 1-1-1m-8 5.4C5 9.518 6.518 8 8.4 8H9a1 1 0 0 1 0 2h-.6c-.778 0-1.4.622-1.4 1.4v4.2c0 .778.622 1.4 1.4 1.4h4.2c.778 0 1.4-.622 1.4-1.4V15a1 1 0 1 1 2 0v.6c0 1.882-1.518 3.4-3.4 3.4H8.4A3.394 3.394 0 0 1 5 15.6z",
    clipRule: "evenodd"
  }));
};
SvgSiNorthEastEscapeAlt.displayName = "SvgSiNorthEastEscapeAlt";
const ForwardRef$2p = /*#__PURE__*/React.forwardRef(SvgSiNorthEastEscapeAlt);
const Memo$2p = /*#__PURE__*/React.memo(ForwardRef$2p);

const SvgSiNorthEastSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M11 7a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 1 0 1.414 1.414L15 10.414V13a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1z",
    clipRule: "evenodd"
  }));
};
SvgSiNorthEastSquare.displayName = "SvgSiNorthEastSquare";
const ForwardRef$2o = /*#__PURE__*/React.forwardRef(SvgSiNorthEastSquare);
const Memo$2o = /*#__PURE__*/React.memo(ForwardRef$2o);

const SvgSiNorthWest = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9 10.414V13a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-2.586l6.293 6.293a1 1 0 1 1-1.414 1.414z",
    clipRule: "evenodd"
  }));
};
SvgSiNorthWest.displayName = "SvgSiNorthWest";
const ForwardRef$2n = /*#__PURE__*/React.forwardRef(SvgSiNorthWest);
const Memo$2n = /*#__PURE__*/React.memo(ForwardRef$2n);

const SvgSiNorthWestCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M9 13v-2.586l6.293 6.293a1 1 0 0 0 1.414-1.414L10.414 9H13a1 1 0 0 0 0-2H8a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0",
    clipRule: "evenodd"
  }));
};
SvgSiNorthWestCircle.displayName = "SvgSiNorthWestCircle";
const ForwardRef$2m = /*#__PURE__*/React.forwardRef(SvgSiNorthWestCircle);
const Memo$2m = /*#__PURE__*/React.memo(ForwardRef$2m);

const SvgSiNorthWestEscape = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6 5h4a1 1 0 1 1 0 2H8.414l6.293 6.293a1 1 0 0 1-1.414 1.414L7 8.414V10a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m8 2a1 1 0 0 1 1-1h.6C17.482 6 19 7.518 19 9.4v6.2c0 1.882-1.518 3.4-3.4 3.4H9.4A3.394 3.394 0 0 1 6 15.6V15a1 1 0 1 1 2 0v.6c0 .778.622 1.4 1.4 1.4h6.2c.778 0 1.4-.622 1.4-1.4V9.4c0-.778-.622-1.4-1.4-1.4H15a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiNorthWestEscape.displayName = "SvgSiNorthWestEscape";
const ForwardRef$2l = /*#__PURE__*/React.forwardRef(SvgSiNorthWestEscape);
const Memo$2l = /*#__PURE__*/React.memo(ForwardRef$2l);

const SvgSiNorthWestEscapeAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7 8.414V10a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8.414l6.293 6.293a1 1 0 1 1-1.414 1.414zM14 9a1 1 0 0 1 1-1h.6c1.882 0 3.4 1.518 3.4 3.4v4.2c0 1.882-1.518 3.4-3.4 3.4h-4.2A3.394 3.394 0 0 1 8 15.6V15a1 1 0 1 1 2 0v.6c0 .778.622 1.4 1.4 1.4h4.2c.778 0 1.4-.622 1.4-1.4v-4.2c0-.778-.622-1.4-1.4-1.4H15a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiNorthWestEscapeAlt.displayName = "SvgSiNorthWestEscapeAlt";
const ForwardRef$2k = /*#__PURE__*/React.forwardRef(SvgSiNorthWestEscapeAlt);
const Memo$2k = /*#__PURE__*/React.memo(ForwardRef$2k);

const SvgSiNorthWestSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M9 13v-2.586l6.293 6.293a1 1 0 0 0 1.414-1.414L10.414 9H13a1 1 0 1 0 0-2H8a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0",
    clipRule: "evenodd"
  }));
};
SvgSiNorthWestSquare.displayName = "SvgSiNorthWestSquare";
const ForwardRef$2j = /*#__PURE__*/React.forwardRef(SvgSiNorthWestSquare);
const Memo$2j = /*#__PURE__*/React.memo(ForwardRef$2j);

const SvgSiNortheastSouthwest = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M19.364 11.293a1 1 0 0 1-2 0V8.05L8.05 17.363h3.243a1 1 0 0 1 0 2H5.636a1 1 0 0 1-1-1v-5.656a1 1 0 1 1 2 0v3.242l9.314-9.313h-3.243a1 1 0 1 1 0-2h5.656a1 1 0 0 1 1 1z"
  }));
};
SvgSiNortheastSouthwest.displayName = "SvgSiNortheastSouthwest";
const ForwardRef$2i = /*#__PURE__*/React.forwardRef(SvgSiNortheastSouthwest);
const Memo$2i = /*#__PURE__*/React.memo(ForwardRef$2i);

const SvgSiNorthwestSoutheast = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4.636 11.293V5.636a1 1 0 0 1 1-1h5.657a1 1 0 0 1 0 2H8.05l9.313 9.314v-3.243a1 1 0 0 1 2 0v5.656a1 1 0 0 1-1 1h-5.656a1 1 0 1 1 0-2h3.242L6.637 8.05v3.243a1 1 0 0 1-2 0"
  }));
};
SvgSiNorthwestSoutheast.displayName = "SvgSiNorthwestSoutheast";
const ForwardRef$2h = /*#__PURE__*/React.forwardRef(SvgSiNorthwestSoutheast);
const Memo$2h = /*#__PURE__*/React.memo(ForwardRef$2h);

const SvgSiNotifications = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 1.25a1.75 1.75 0 0 0-1.737 1.967A7 7 0 0 0 5 10v7H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-7a7 7 0 0 0-5.263-6.783q.012-.106.013-.217A1.75 1.75 0 0 0 12 1.25M12 23a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3"
  }));
};
SvgSiNotifications.displayName = "SvgSiNotifications";
const ForwardRef$2g = /*#__PURE__*/React.forwardRef(SvgSiNotifications);
const Memo$2g = /*#__PURE__*/React.memo(ForwardRef$2g);

const SvgSiNotificationsAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5 18a1 1 0 0 1-.894-1.447L6 12.764V10c0-3.728 2.55-6.86 6-7.748 3.45.888 6 4.02 6 7.748v2.764l1.894 3.789A1 1 0 0 1 19 18zm3.126 1a4.002 4.002 0 0 0 7.748 0z",
    clipRule: "evenodd"
  }));
};
SvgSiNotificationsAlt.displayName = "SvgSiNotificationsAlt";
const ForwardRef$2f = /*#__PURE__*/React.forwardRef(SvgSiNotificationsAlt);
const Memo$2f = /*#__PURE__*/React.memo(ForwardRef$2f);

const SvgSiNotificationsAlt2 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.998 3a6.07 6.07 0 0 1 4.168 1.665 6.2 6.2 0 0 1 1.917 4.092l.03.472a13.5 13.5 0 0 0 1.155 4.637l.546 1.211a2.08 2.08 0 0 1-.138 1.976c-.185.29-.441.53-.742.696a2 2 0 0 1-.982.251H16l-.006.206a4 4 0 0 1-7.989 0L8 18H6.043a2 2 0 0 1-.978-.254 2.06 2.06 0 0 1-.74-.695 2.08 2.08 0 0 1-.142-1.973l.545-1.212A13.5 13.5 0 0 0 5.882 9.23l.031-.472A6.2 6.2 0 0 1 7.83 4.665 6.07 6.07 0 0 1 12 3m-2 15 .01.204A2 2 0 0 0 14 18z",
    clipRule: "evenodd"
  }));
};
SvgSiNotificationsAlt2.displayName = "SvgSiNotificationsAlt2";
const ForwardRef$2e = /*#__PURE__*/React.forwardRef(SvgSiNotificationsAlt2);
const Memo$2e = /*#__PURE__*/React.memo(ForwardRef$2e);

const SvgSiNotificationsThick = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3 18a1 1 0 0 1-.894-1.447L4 12.763V10a8 8 0 1 1 16 0v2.764l1.894 3.789A1 1 0 0 1 21 18zm9 4a4 4 0 0 1-3.874-3h7.748A4 4 0 0 1 12 22"
  }));
};
SvgSiNotificationsThick.displayName = "SvgSiNotificationsThick";
const ForwardRef$2d = /*#__PURE__*/React.forwardRef(SvgSiNotificationsThick);
const Memo$2d = /*#__PURE__*/React.memo(ForwardRef$2d);

const SvgSiOctagon = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.8.8 0 0 1-.57-.23l-4.67-4.673a.8.8 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57z"
  }));
};
SvgSiOctagon.displayName = "SvgSiOctagon";
const ForwardRef$2c = /*#__PURE__*/React.forwardRef(SvgSiOctagon);
const Memo$2c = /*#__PURE__*/React.memo(ForwardRef$2c);

const SvgSiOctagonCheck = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7.91 3.23 3.23 7.913v-.01a.8.8 0 0 0-.23.57v7.054c0 .22.08.42.23.57L7.9 20.77c.15.15.36.23.57.23h7.06c.22 0 .42-.08.57-.23l4.67-4.673a.8.8 0 0 0 .23-.57V8.473c0-.22-.08-.42-.23-.57L16.1 3.23a.8.8 0 0 0-.57-.23H8.48c-.22 0-.42.08-.57.23m8.904 6.351a1 1 0 1 0-1.628-1.162l-4.314 6.04-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z",
    clipRule: "evenodd"
  }));
};
SvgSiOctagonCheck.displayName = "SvgSiOctagonCheck";
const ForwardRef$2b = /*#__PURE__*/React.forwardRef(SvgSiOctagonCheck);
const Memo$2b = /*#__PURE__*/React.memo(ForwardRef$2b);

const SvgSiPause = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4.8 3h4.4a.8.8 0 0 1 .8.8v16.4a.8.8 0 0 1-.8.8H4.8a.8.8 0 0 1-.8-.8V3.8a.8.8 0 0 1 .8-.8m10 0h4.4a.8.8 0 0 1 .8.8v16.4a.8.8 0 0 1-.8.8h-4.4a.8.8 0 0 1-.8-.8V3.8a.8.8 0 0 1 .8-.8"
  }));
};
SvgSiPause.displayName = "SvgSiPause";
const ForwardRef$2a = /*#__PURE__*/React.forwardRef(SvgSiPause);
const Memo$2a = /*#__PURE__*/React.memo(ForwardRef$2a);

const SvgSiPausePresentation = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M10 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1",
    clipRule: "evenodd"
  }));
};
SvgSiPausePresentation.displayName = "SvgSiPausePresentation";
const ForwardRef$29 = /*#__PURE__*/React.forwardRef(SvgSiPausePresentation);
const Memo$29 = /*#__PURE__*/React.memo(ForwardRef$29);

const SvgSiPentagon = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m12 2 10 7.249L18.173 21H5.827L2 9.249z"
  }));
};
SvgSiPentagon.displayName = "SvgSiPentagon";
const ForwardRef$28 = /*#__PURE__*/React.forwardRef(SvgSiPentagon);
const Memo$28 = /*#__PURE__*/React.memo(ForwardRef$28);

const SvgSiPhone = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27"
  }));
};
SvgSiPhone.displayName = "SvgSiPhone";
const ForwardRef$27 = /*#__PURE__*/React.forwardRef(SvgSiPhone);
const Memo$27 = /*#__PURE__*/React.memo(ForwardRef$27);

const SvgSiPhoneAddCall = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13.684 16.73 7.18 10.27S13.684 5.537 6.25 3C6.252 3 3 3.115 3 7.846c0 2.308 1.626 4.846 3.716 6.808.368.348.76.735 1.17 1.142 2.317 2.292 5.26 5.204 8.12 5.204C20.769 21 21 17.654 21 17.654c-2.206-6.462-6.62-1.73-7.316-.923"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M17 11a1 1 0 0 1-1-1V8h-2a1 1 0 1 1 0-2h2V4a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 0 1-1 1"
  }));
};
SvgSiPhoneAddCall.displayName = "SvgSiPhoneAddCall";
const ForwardRef$26 = /*#__PURE__*/React.forwardRef(SvgSiPhoneAddCall);
const Memo$26 = /*#__PURE__*/React.memo(ForwardRef$26);

const SvgSiPhoneCallback = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13.684 16.73 7.18 10.27S13.684 5.537 6.25 3C6.252 3 3 3.115 3 7.846c0 2.308 1.626 4.846 3.716 6.808.368.348.76.735 1.17 1.142 2.317 2.292 5.26 5.204 8.12 5.204C20.769 21 21 17.654 21 17.654c-2.206-6.462-6.62-1.73-7.316-.923"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M18.414 8.828h-1.828l3.95-3.95a1 1 0 1 0-1.415-1.414l-3.95 3.95V5.586a1 1 0 1 0-2 0v4.242a1 1 0 0 0 1 1h4.243a1 1 0 1 0 0-2"
  }));
};
SvgSiPhoneCallback.displayName = "SvgSiPhoneCallback";
const ForwardRef$25 = /*#__PURE__*/React.forwardRef(SvgSiPhoneCallback);
const Memo$25 = /*#__PURE__*/React.memo(ForwardRef$25);

const SvgSiPhoneEnabled = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m16.82 10.27-6.504 6.46c-.697-.807-5.11-5.538-7.316.924 0 0 .232 3.346 4.994 3.346 3.367 0 6.851-4.038 9.29-6.346 2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27"
  }));
};
SvgSiPhoneEnabled.displayName = "SvgSiPhoneEnabled";
const ForwardRef$24 = /*#__PURE__*/React.forwardRef(SvgSiPhoneEnabled);
const Memo$24 = /*#__PURE__*/React.memo(ForwardRef$24);

const SvgSiPhoneForwarded = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M17.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 8H13a1 1 0 1 1 0-2h5.586l-1.293-1.293a1 1 0 0 1 0-1.414"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13.684 16.73 7.18 10.27S13.684 5.537 6.25 3C6.252 3 3 3.115 3 7.846c0 2.308 1.626 4.846 3.716 6.808.368.348.76.735 1.17 1.142 2.317 2.292 5.26 5.204 8.12 5.204C20.769 21 21 17.654 21 17.654c-2.206-6.462-6.62-1.73-7.316-.923"
  }));
};
SvgSiPhoneForwarded.displayName = "SvgSiPhoneForwarded";
const ForwardRef$23 = /*#__PURE__*/React.forwardRef(SvgSiPhoneForwarded);
const Memo$23 = /*#__PURE__*/React.memo(ForwardRef$23);

const SvgSiPhoneLocked = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14.5 5a3 3 0 1 1 6 0v1.025c.85.143 1.5.885 1.5 1.775v2c0 1.212-.988 2.2-2.2 2.2h-4.6c-1.212 0-2.2-.988-2.2-2.2v-2c0-.89.65-1.632 1.5-1.775zm4 0v1h-2V5a1 1 0 1 1 2 0",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13.684 16.73 7.18 10.27S13.684 5.537 6.25 3C6.252 3 3 3.115 3 7.846c0 2.308 1.626 4.846 3.716 6.808.368.348.76.735 1.17 1.142 2.317 2.292 5.26 5.204 8.12 5.204C20.769 21 21 17.654 21 17.654c-2.206-6.462-6.62-1.73-7.316-.923"
  }));
};
SvgSiPhoneLocked.displayName = "SvgSiPhoneLocked";
const ForwardRef$22 = /*#__PURE__*/React.forwardRef(SvgSiPhoneLocked);
const Memo$22 = /*#__PURE__*/React.memo(ForwardRef$22);

const SvgSiPhonePaused = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13.684 16.73 7.18 10.27S13.684 5.537 6.25 3C6.252 3 3 3.115 3 7.846c0 2.308 1.626 4.846 3.716 6.808.368.348.76.735 1.17 1.142 2.317 2.292 5.26 5.204 8.12 5.204C20.769 21 21 17.654 21 17.654c-2.206-6.462-6.62-1.73-7.316-.923"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M17 4v6a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0m4 0v6a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0"
  }));
};
SvgSiPhonePaused.displayName = "SvgSiPhonePaused";
const ForwardRef$21 = /*#__PURE__*/React.forwardRef(SvgSiPhonePaused);
const Memo$21 = /*#__PURE__*/React.memo(ForwardRef$21);

const SvgSiPieChart = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1m-.75 1v9.689L4.398 18.54l1.061 1.06 6.852-6.851H22v-1.5h-3.537l3.072-3.073-1.06-1.06-4.133 4.133H13.81l5.79-5.791-1.061-1.06-5.79 5.79v-2.4l4.22-4.22-1.06-1.062-3.16 3.16V2z",
    clipRule: "evenodd"
  }));
};
SvgSiPieChart.displayName = "SvgSiPieChart";
const ForwardRef$20 = /*#__PURE__*/React.forwardRef(SvgSiPieChart);
const Memo$20 = /*#__PURE__*/React.memo(ForwardRef$20);

const SvgSiPin = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.672 4.095a9.017 9.017 0 0 1 12.627-.03h.002l.032.03c3.545 3.487 3.552 9.088.042 12.54l-5.671 5.578a1 1 0 0 1-1.403 0L5.63 16.635a8.74 8.74 0 0 1 0-12.499zM12 6.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
    clipRule: "evenodd"
  }));
};
SvgSiPin.displayName = "SvgSiPin";
const ForwardRef$1$ = /*#__PURE__*/React.forwardRef(SvgSiPin);
const Memo$1$ = /*#__PURE__*/React.memo(ForwardRef$1$);

const SvgSiPinAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.368 3.36a7.904 7.904 0 0 1 11.24-.027h.002l.015.015.001.002.01.01c3.142 3.16 3.15 8.226.038 11.355l-4.963 4.99a1 1 0 0 1-1.418 0l-4.962-4.99c-3.108-3.125-3.108-8.192 0-11.317zM12 5.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16.47 16.812a1 1 0 0 1 1.16-.81c1.414.251 2.653.604 3.565 1.054.455.224.878.496 1.2.832.327.34.605.807.605 1.384 0 .907-.66 1.527-1.244 1.903-.628.405-1.47.732-2.422.991-1.918.523-4.51.834-7.334.834s-5.416-.311-7.334-.834c-.952-.26-1.794-.586-2.422-.991C1.661 20.799 1 20.179 1 19.272c0-.577.278-1.044.604-1.384.323-.336.746-.608 1.2-.832.913-.45 2.152-.803 3.566-1.054a1 1 0 0 1 .35 1.969c-1.322.235-2.356.546-3.032.879-.337.166-.538.314-.64.42.047.05.13.128.28.224.384.248 1.007.508 1.864.742C6.894 20.7 9.302 21 12 21c2.699 0 5.106-.3 6.808-.764.857-.234 1.48-.494 1.864-.742.15-.096.232-.174.28-.224-.104-.106-.303-.254-.64-.42-.676-.333-1.71-.644-3.033-.88a1 1 0 0 1-.81-1.158"
  }));
};
SvgSiPinAlt1.displayName = "SvgSiPinAlt1";
const ForwardRef$1_ = /*#__PURE__*/React.forwardRef(SvgSiPinAlt1);
const Memo$1_ = /*#__PURE__*/React.memo(ForwardRef$1_);

const SvgSiPinAlt2 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15.742 15.737c1.911.204 3.599.563 4.838 1.05.615.24 1.176.534 1.6.897.418.358.82.89.82 1.588 0 .907-.66 1.527-1.244 1.903-.628.405-1.47.732-2.422.991-1.918.523-4.51.834-7.334.834s-5.416-.311-7.334-.834c-.952-.26-1.794-.586-2.422-.991C1.661 20.799 1 20.179 1 19.273c0-.7.402-1.231.82-1.59.424-.362.985-.656 1.6-.897 1.24-.486 2.927-.845 4.838-1.049a1 1 0 0 1 .212 1.99c-1.814.192-3.308.525-4.32.921-.51.2-.842.395-1.029.555a1 1 0 0 0-.072.069c.047.05.13.126.28.222.383.248 1.006.508 1.863.742C6.894 20.7 9.302 21 12 21c2.699 0 5.106-.3 6.808-.764.858-.234 1.48-.494 1.864-.742.148-.096.23-.173.278-.223q-.026-.028-.071-.068c-.187-.16-.52-.355-1.03-.555-1.01-.396-2.505-.729-4.319-.921a1 1 0 0 1 .212-1.99m2.712-8.283A6.456 6.456 0 0 1 13 13.831v4.532a1 1 0 0 1-2 .001l-.001-4.533a6.456 6.456 0 0 1 1-12.831 6.455 6.455 0 0 1 6.455 6.454"
  }));
};
SvgSiPinAlt2.displayName = "SvgSiPinAlt2";
const ForwardRef$1Z = /*#__PURE__*/React.forwardRef(SvgSiPinAlt2);
const Memo$1Z = /*#__PURE__*/React.memo(ForwardRef$1Z);

const SvgSiPlay = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m6.192 3.67 13.568 7.633a.8.8 0 0 1 0 1.394L6.192 20.33A.8.8 0 0 1 5 19.632V4.368a.8.8 0 0 1 1.192-.697"
  }));
};
SvgSiPlay.displayName = "SvgSiPlay";
const ForwardRef$1Y = /*#__PURE__*/React.forwardRef(SvgSiPlay);
const Memo$1Y = /*#__PURE__*/React.memo(ForwardRef$1Y);

const SvgSiPlayForward = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.573 4.18A1 1 0 0 0 3 5v14a1 1 0 0 0 1.573.82L10 16.02V19a1 1 0 0 0 1.573.82l10-7a1 1 0 0 0 0-1.64l-10-7A1 1 0 0 0 10 5v2.98zM12 9.38l2.573 1.8a1 1 0 0 1 0 1.64L12 14.62v2.46L19.256 12 12 6.92z",
    clipRule: "evenodd"
  }));
};
SvgSiPlayForward.displayName = "SvgSiPlayForward";
const ForwardRef$1X = /*#__PURE__*/React.forwardRef(SvgSiPlayForward);
const Memo$1X = /*#__PURE__*/React.memo(ForwardRef$1X);

const SvgSiPlayNext = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2.538 4.113a1 1 0 0 1 1.035.068l10 7a1 1 0 0 1 0 1.638l-10 7A1 1 0 0 1 2 19V5a1 1 0 0 1 .538-.887M16 5.8A1.8 1.8 0 0 1 17.8 4h1.4A1.8 1.8 0 0 1 21 5.8v12.4a1.8 1.8 0 0 1-1.8 1.8h-1.4a1.8 1.8 0 0 1-1.8-1.8z",
    clipRule: "evenodd"
  }));
};
SvgSiPlayNext.displayName = "SvgSiPlayNext";
const ForwardRef$1W = /*#__PURE__*/React.forwardRef(SvgSiPlayNext);
const Memo$1W = /*#__PURE__*/React.memo(ForwardRef$1W);

const SvgSiPlayPrevious = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3 5.8A1.8 1.8 0 0 1 4.8 4h1.4A1.8 1.8 0 0 1 8 5.8v12.4A1.8 1.8 0 0 1 6.2 20H4.8A1.8 1.8 0 0 1 3 18.2zm18.462-1.687A1 1 0 0 1 22 5v14a1 1 0 0 1-1.573.82l-10-7a1 1 0 0 1 0-1.64l10-7a1 1 0 0 1 1.035-.067"
  }));
};
SvgSiPlayPrevious.displayName = "SvgSiPlayPrevious";
const ForwardRef$1V = /*#__PURE__*/React.forwardRef(SvgSiPlayPrevious);
const Memo$1V = /*#__PURE__*/React.memo(ForwardRef$1V);

const SvgSiPlayRewind = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M14 5a1 1 0 0 0-1.573-.82l-10 7a1 1 0 0 0 0 1.64l10 7A1 1 0 0 0 14 19v-2.98l5.427 3.8A1 1 0 0 0 21 19V5a1 1 0 0 0-1.573-.82L14 7.98zm-2 4.38V6.92L4.744 12 12 17.08v-2.46l-2.573-1.8a1 1 0 0 1 0-1.64z",
    clipRule: "evenodd"
  }));
};
SvgSiPlayRewind.displayName = "SvgSiPlayRewind";
const ForwardRef$1U = /*#__PURE__*/React.forwardRef(SvgSiPlayRewind);
const Memo$1U = /*#__PURE__*/React.memo(ForwardRef$1U);

const SvgSiProjects = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M9 4h2v5h9v2h-9v9H9v-9H4V9h5z",
    clipRule: "evenodd"
  }));
};
SvgSiProjects.displayName = "SvgSiProjects";
const ForwardRef$1T = /*#__PURE__*/React.forwardRef(SvgSiProjects);
const Memo$1T = /*#__PURE__*/React.memo(ForwardRef$1T);

const SvgSiProjectsAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 2h13.2A3.4 3.4 0 0 1 22 5.4v13.2a3.4 3.4 0 0 1-3.4 3.4H5.4A3.4 3.4 0 0 1 2 18.6V5.4A3.4 3.4 0 0 1 5.4 2M7 5a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m6 1a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0z",
    clipRule: "evenodd"
  }));
};
SvgSiProjectsAlt.displayName = "SvgSiProjectsAlt";
const ForwardRef$1S = /*#__PURE__*/React.forwardRef(SvgSiProjectsAlt);
const Memo$1S = /*#__PURE__*/React.memo(ForwardRef$1S);

const SvgSiPullRequest = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7 8.83a3.001 3.001 0 1 0-2 0v6.34a3.001 3.001 0 1 0 2 0zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2m11-1.83a3.001 3.001 0 1 0 2 0V10.4A5.4 5.4 0 0 0 13.6 5h-.186l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 1 0 1.414-1.414L13.414 7h.186a3.4 3.4 0 0 1 3.4 3.4zM17 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
    clipRule: "evenodd"
  }));
};
SvgSiPullRequest.displayName = "SvgSiPullRequest";
const ForwardRef$1R = /*#__PURE__*/React.forwardRef(SvgSiPullRequest);
const Memo$1R = /*#__PURE__*/React.memo(ForwardRef$1R);

const SvgSiQuote = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M6.938 4.501c2-.053 4.172 1.435 4.523 4.6l.027.313.001.006c.191 3.319-2.124 7.857-7.181 10.039a.5.5 0 0 1-.631-.209l-1.11-1.919a.5.5 0 0 1 .188-.686c1.71-.962 3.043-2.471 3.845-4.302-1.19-.21-2.045-.703-2.618-1.36-.667-.766-.905-1.7-.905-2.517 0-2.214 1.703-4.005 3.86-3.965m10 0c2-.053 4.172 1.435 4.523 4.6l.027.313.001.006c.191 3.319-2.124 7.857-7.181 10.039a.5.5 0 0 1-.631-.209l-1.11-1.919a.5.5 0 0 1 .188-.686c1.71-.962 3.043-2.471 3.845-4.302-1.19-.21-2.045-.703-2.618-1.36-.667-.766-.905-1.7-.905-2.517 0-2.214 1.704-4.005 3.86-3.965"
  }));
};
SvgSiQuote.displayName = "SvgSiQuote";
const ForwardRef$1Q = /*#__PURE__*/React.forwardRef(SvgSiQuote);
const Memo$1Q = /*#__PURE__*/React.memo(ForwardRef$1Q);

const SvgSiRecord = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
  }));
};
SvgSiRecord.displayName = "SvgSiRecord";
const ForwardRef$1P = /*#__PURE__*/React.forwardRef(SvgSiRecord);
const Memo$1P = /*#__PURE__*/React.memo(ForwardRef$1P);

const SvgSiReleaseNotes = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M17.6 1A2.4 2.4 0 0 1 20 3.4v17.2a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 20.6V3.4A2.4 2.4 0 0 1 6.4 1zm-1.893 12.293a1 1 0 0 0-1.414 0L11 16.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414m0-8a1 1 0 0 0-1.414 0L11 8.586 9.707 7.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiReleaseNotes.displayName = "SvgSiReleaseNotes";
const ForwardRef$1O = /*#__PURE__*/React.forwardRef(SvgSiReleaseNotes);
const Memo$1O = /*#__PURE__*/React.memo(ForwardRef$1O);

const SvgSiRemove = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiRemove.displayName = "SvgSiRemove";
const ForwardRef$1N = /*#__PURE__*/React.forwardRef(SvgSiRemove);
const Memo$1N = /*#__PURE__*/React.memo(ForwardRef$1N);

const SvgSiRemoveAlarm = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M6.707 3.707a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 1.414 1.414zm10.586-1.414a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0M8 12a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiRemoveAlarm.displayName = "SvgSiRemoveAlarm";
const ForwardRef$1M = /*#__PURE__*/React.forwardRef(SvgSiRemoveAlarm);
const Memo$1M = /*#__PURE__*/React.memo(ForwardRef$1M);

const SvgSiRemoveCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiRemoveCircle.displayName = "SvgSiRemoveCircle";
const ForwardRef$1L = /*#__PURE__*/React.forwardRef(SvgSiRemoveCircle);
const Memo$1L = /*#__PURE__*/React.memo(ForwardRef$1L);

const SvgSiRemoveFromLibrary = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.6 2H8.4A2.4 2.4 0 0 0 6 4.4v11.2A2.4 2.4 0 0 0 8.4 18h11.2a2.4 2.4 0 0 0 2.4-2.4V4.4A2.4 2.4 0 0 0 19.6 2M10 9a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3 3a1 1 0 0 1 1 1v11.6C4 18.028 5.972 20 8.4 20H20a1 1 0 1 1 0 2H8.4A6.403 6.403 0 0 1 2 15.6V4a1 1 0 0 1 1-1"
  }));
};
SvgSiRemoveFromLibrary.displayName = "SvgSiRemoveFromLibrary";
const ForwardRef$1K = /*#__PURE__*/React.forwardRef(SvgSiRemoveFromLibrary);
const Memo$1K = /*#__PURE__*/React.memo(ForwardRef$1K);

const SvgSiRemoveSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiRemoveSquare.displayName = "SvgSiRemoveSquare";
const ForwardRef$1J = /*#__PURE__*/React.forwardRef(SvgSiRemoveSquare);
const Memo$1J = /*#__PURE__*/React.memo(ForwardRef$1J);

const SvgSiReorder = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zM3 9a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 3a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1 2a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z"
  }));
};
SvgSiReorder.displayName = "SvgSiReorder";
const ForwardRef$1I = /*#__PURE__*/React.forwardRef(SvgSiReorder);
const Memo$1I = /*#__PURE__*/React.memo(ForwardRef$1I);

const SvgSiReorderAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0-4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiReorderAlt.displayName = "SvgSiReorderAlt";
const ForwardRef$1H = /*#__PURE__*/React.forwardRef(SvgSiReorderAlt);
const Memo$1H = /*#__PURE__*/React.memo(ForwardRef$1H);

const SvgSiRightTwoHeaded = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L17.586 13h-2.172l-3.707 3.707a1 1 0 1 1-1.414-1.414L12.586 13H4a1 1 0 1 1 0-2h8.586l-2.293-2.293a1 1 0 1 1 1.414-1.414L15.414 11h2.172l-2.293-2.293a1 1 0 0 1 0-1.414"
  }));
};
SvgSiRightTwoHeaded.displayName = "SvgSiRightTwoHeaded";
const ForwardRef$1G = /*#__PURE__*/React.forwardRef(SvgSiRightTwoHeaded);
const Memo$1G = /*#__PURE__*/React.memo(ForwardRef$1G);

const SvgSiRocket = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13.5 19.862c0 .276-.092.572-.192.822a7 7 0 0 1-.372.76 11 11 0 0 1-.513.824l-.01.013-.003.004v.001a.5.5 0 0 1-.739.091l-.08-.09-.002-.002-.002-.004-.01-.013-.034-.05-.119-.18c-.098-.15-.229-.36-.36-.595a7 7 0 0 1-.371-.76c-.1-.25-.193-.545-.193-.82 0-.502.2-.885.549-1.116.313-.206.68-.247.951-.247s.638.04.95.247c.35.23.55.614.55 1.115m1.805-12.125c0 1.047.693 1.975 1.619 2.836.456.424.935.804 1.375 1.163.42.344.839.694 1.092 1.027.157.201.247.46.305.69.06.245.1.516.125.777.052.514.059 1.065.072 1.355a.88.88 0 0 1-.89.915H15.33l-.533.639a.9.9 0 0 1-.722.361H9.927a.9.9 0 0 1-.72-.361l-.534-.639H5a.88.88 0 0 1-.89-.915l.022-.594c.01-.238.024-.504.05-.761.026-.261.064-.532.126-.777.058-.23.147-.489.305-.69.253-.333.67-.683 1.09-1.027.44-.36.92-.739 1.376-1.163.926-.861 1.618-1.79 1.618-2.836V6.59c0-1.274.425-2.504 1.017-3.426.297-.462.645-.86 1.02-1.152.37-.288.8-.497 1.252-.512h.034c.452.015.882.224 1.252.512.374.291.723.69 1.02 1.152a6.5 6.5 0 0 1 1.013 3.426z"
  }));
};
SvgSiRocket.displayName = "SvgSiRocket";
const ForwardRef$1F = /*#__PURE__*/React.forwardRef(SvgSiRocket);
const Memo$1F = /*#__PURE__*/React.memo(ForwardRef$1F);

const SvgSiRupee = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M7.001 12h3.75c1.172 0 2.272-.4 3.061-1.077a3.43 3.43 0 0 0 1.01-1.423H7a1 1 0 0 1 0-2h7.822a3.43 3.43 0 0 0-1.01-1.423C13.022 5.401 11.923 5 10.751 5H7a1 1 0 1 1 0-2h3.75l.18.002L11 3h7a1 1 0 1 1 0 2h-2.425a5.24 5.24 0 0 1 1.322 2.5H18a1 1 0 1 1 0 2h-1.103c-.236 1.127-.865 2.154-1.783 2.941C13.934 13.452 12.363 14 10.75 14H9.712l6.138 5.24a1 1 0 0 1-1.299 1.52l-8.197-6.997-.01-.009a.996.996 0 0 1-.207-1.26A1 1 0 0 1 7.001 12"
  }));
};
SvgSiRupee.displayName = "SvgSiRupee";
const ForwardRef$1E = /*#__PURE__*/React.forwardRef(SvgSiRupee);
const Memo$1E = /*#__PURE__*/React.memo(ForwardRef$1E);

const SvgSiSearch = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2 11a9 9 0 1 1 16.032 5.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9 9 0 0 1 2 11m9-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14",
    clipRule: "evenodd"
  }));
};
SvgSiSearch.displayName = "SvgSiSearch";
const ForwardRef$1D = /*#__PURE__*/React.forwardRef(SvgSiSearch);
const Memo$1D = /*#__PURE__*/React.memo(ForwardRef$1D);

const SvgSiSearchAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9 2a7 7 0 1 0 4.192 12.606l7.1 7.101a1 1 0 0 0 1.415-1.414l-7.1-7.1A7 7 0 0 0 9 2M4 9a5 5 0 1 1 10 0A5 5 0 0 1 4 9",
    clipRule: "evenodd"
  }));
};
SvgSiSearchAlt.displayName = "SvgSiSearchAlt";
const ForwardRef$1C = /*#__PURE__*/React.forwardRef(SvgSiSearchAlt);
const Memo$1C = /*#__PURE__*/React.memo(ForwardRef$1C);

const SvgSiSegment = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m8 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
  }));
};
SvgSiSegment.displayName = "SvgSiSegment";
const ForwardRef$1B = /*#__PURE__*/React.forwardRef(SvgSiSegment);
const Memo$1B = /*#__PURE__*/React.memo(ForwardRef$1B);

const SvgSiServer = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M18.6 3A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3zM17 17a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM4 14.5v1h16v-1zM17 11a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM4 8.5v1h16v-1zM17 5a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiServer.displayName = "SvgSiServer";
const ForwardRef$1A = /*#__PURE__*/React.forwardRef(SvgSiServer);
const Memo$1A = /*#__PURE__*/React.memo(ForwardRef$1A);

const SvgSiSettings = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.02 1c1.1 0 2 .9 2 2v2.31c.23.07.45.15.67.24h.01c.22.09.43.19.64.3l1.62-1.62c.78-.78 2.05-.78 2.83 0s.78 2.05 0 2.83l-1.62 1.62a7.5 7.5 0 0 1 .54 1.32H21v-.02c1.1 0 2 .9 2 2s-.9 2-2 2h-2.29c-.07.23-.15.46-.24.68-.1.22-.2.44-.31.65l1.62 1.62c.78.78.78 2.05 0 2.83s-2.05.78-2.83 0l-1.62-1.62c-.21.12-.43.22-.65.31s-.45.17-.68.24v2.29c0 1.1-.9 2-2 2s-2-.9-2-2v-2.29c-.23-.07-.46-.15-.68-.24-.22-.1-.44-.2-.65-.31l-1.62 1.62c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83l1.62-1.62c-.12-.21-.22-.43-.31-.65s-.17-.45-.24-.68H3c-1.1 0-2-.9-2-2s.9-2 2-2h2.33a7.5 7.5 0 0 1 .54-1.32L4.25 7.04c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0L8.7 5.83c.21-.11.42-.21.64-.3h.01c.22-.09.44-.17.67-.24V3c0-1.1.9-2 2-2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
    clipRule: "evenodd"
  }));
};
SvgSiSettings.displayName = "SvgSiSettings";
const ForwardRef$1z = /*#__PURE__*/React.forwardRef(SvgSiSettings);
const Memo$1z = /*#__PURE__*/React.memo(ForwardRef$1z);

const SvgSiSettingsAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.4 1c.88 0 1.6.72 1.6 1.6v2.69c.47.14.91.32 1.33.55l1.9-1.9c.62-.62 1.64-.62 2.26 0l.57.57c.62.62.62 1.64 0 2.26l-1.9 1.9c.23.42.41.86.55 1.33h2.69c.88 0 1.6.72 1.6 1.6v.8c0 .88-.72 1.6-1.6 1.6h-2.69c-.14.47-.32.91-.55 1.33l1.9 1.9c.62.62.62 1.64 0 2.26l-.57.57c-.62.62-1.64.62-2.26 0l-1.9-1.9c-.42.23-.86.41-1.33.55v2.69c0 .88-.72 1.6-1.6 1.6h-.8c-.88 0-1.6-.72-1.6-1.6v-2.69a6.8 6.8 0 0 1-1.33-.55l-1.9 1.9c-.62.62-1.64.62-2.26 0l-.57-.57c-.62-.62-.62-1.64 0-2.26l1.9-1.9A6.8 6.8 0 0 1 5.29 14H2.6c-.88 0-1.6-.72-1.6-1.6v-.8c0-.88.72-1.6 1.6-1.6h2.69c.14-.47.32-.91.55-1.33l-1.9-1.9c-.62-.62-.62-1.64 0-2.26l.57-.57c.62-.62 1.64-.62 2.26 0l1.9 1.9c.42-.23.86-.41 1.33-.55V2.6c0-.88.72-1.6 1.6-1.6zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
    clipRule: "evenodd"
  }));
};
SvgSiSettingsAlt.displayName = "SvgSiSettingsAlt";
const ForwardRef$1y = /*#__PURE__*/React.forwardRef(SvgSiSettingsAlt);
const Memo$1y = /*#__PURE__*/React.memo(ForwardRef$1y);

const SvgSiSettingsAlt2 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13.583 1.005a1 1 0 0 1 .9.912l.144 1.722v.007a.8.8 0 0 0 .156.42.8.8 0 0 0 .297.246q.048.014.095.034a.85.85 0 0 0 .79-.07l.095-.072 1.3-1.136a1 1 0 0 1 1.366.047l2.117 2.122a1 1 0 0 1 .045 1.365l-1.139 1.303a.85.85 0 0 0-.139.881q.016.039.028.078c.06.123.15.23.26.31a.85.85 0 0 0 .436.159l1.738.126a1 1 0 0 1 .928.997v2.979a1 1 0 0 1-.925.997l-1.74.13-.012.002a.85.85 0 0 0-.71.48 1 1 0 0 1-.033.097.85.85 0 0 0 .139.88l1.138 1.304a1 1 0 0 1-.044 1.364l-2.105 2.109a1 1 0 0 1-1.364.048l-1.3-1.131-.095-.07a.85.85 0 0 0-.79-.07q-.035.015-.072.026a.87.87 0 0 0-.477.71l-.126 1.76a1 1 0 0 1-.997.929H10.51a1 1 0 0 1-.996-.915l-.153-1.787v-.016a.89.89 0 0 0-.481-.726q-.035-.011-.067-.024a.85.85 0 0 0-.88.139L6.627 20.81a1 1 0 0 1-1.364-.046l-2.105-2.105a1 1 0 0 1-.046-1.365l1.139-1.304a.85.85 0 0 0 .139-.88l-.03-.083a.85.85 0 0 0-.694-.464h-.002l-1.74-.131A1 1 0 0 1 1 13.435v-2.979a1 1 0 0 1 .928-.997l1.736-.126a.85.85 0 0 0 .722-.546l.012-.032a.85.85 0 0 0-.142-.884l-1.135-1.3a1 1 0 0 1 .056-1.375L5.319 3.11a1 1 0 0 1 1.356-.036l1.3 1.135a.86.86 0 0 0 .884.143l.01-.004a.83.83 0 0 0 .517-.708l.126-1.712.011-.097A1 1 0 0 1 10.51 1h2.978zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
    clipRule: "evenodd"
  }));
};
SvgSiSettingsAlt2.displayName = "SvgSiSettingsAlt2";
const ForwardRef$1x = /*#__PURE__*/React.forwardRef(SvgSiSettingsAlt2);
const Memo$1x = /*#__PURE__*/React.memo(ForwardRef$1x);

const SvgSiSettingsApplications = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M20.067 1H3.933A2.933 2.933 0 0 0 1 3.933v16.134A2.933 2.933 0 0 0 3.933 23h16.134A2.933 2.933 0 0 0 23 20.067V3.933A2.933 2.933 0 0 0 20.067 1M18.5 10.5h-1.75c-.09-.28-.2-.54-.33-.8l1.24-1.24c.59-.59.59-1.54 0-2.12s-1.54-.59-2.12 0L14.3 7.58c-.25-.13-.52-.24-.8-.33V5.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.75c-.28.09-.54.2-.8.33L8.46 6.34a1.49 1.49 0 0 0-2.12 0c-.58.59-.59 1.54 0 2.12L7.58 9.7c-.13.25-.24.52-.33.8H5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h1.75c.09.28.2.54.33.8l-1.24 1.24a1.49 1.49 0 0 0 0 2.12c.59.59 1.54.59 2.12 0l1.24-1.24c.25.13.52.24.8.33v1.75c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-1.75c.28-.09.54-.2.8-.33l1.24 1.24c.59.59 1.54.59 2.12 0 .59-.59.59-1.54 0-2.12l-1.24-1.24c.13-.25.24-.52.33-.8h1.75c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5",
    clipRule: "evenodd"
  }));
};
SvgSiSettingsApplications.displayName = "SvgSiSettingsApplications";
const ForwardRef$1w = /*#__PURE__*/React.forwardRef(SvgSiSettingsApplications);
const Memo$1w = /*#__PURE__*/React.memo(ForwardRef$1w);

const SvgSiSettingsCute = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M20 9c1.66 0 3 1.34 3 3s-1.34 3-3 3h-.76l.54.54a3 3 0 0 1 0 4.24 3 3 0 0 1-4.24 0l-.54-.54V20c0 1.66-1.34 3-3 3s-3-1.34-3-3v-.76l-.54.54a3 3 0 0 1-4.24 0 3 3 0 0 1 0-4.24l.54-.54H4c-1.66 0-3-1.34-3-3s1.34-3 3-3h.76l-.54-.54a3 3 0 0 1 0-4.24 3 3 0 0 1 4.24 0l.54.54V4c0-1.66 1.34-3 3-3s3 1.34 3 3v.76l.54-.54a3 3 0 0 1 4.24 0 3 3 0 0 1 0 4.24l-.54.54zm-4 3a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
    clipRule: "evenodd"
  }));
};
SvgSiSettingsCute.displayName = "SvgSiSettingsCute";
const ForwardRef$1v = /*#__PURE__*/React.forwardRef(SvgSiSettingsCute);
const Memo$1v = /*#__PURE__*/React.memo(ForwardRef$1v);

const SvgSiSettingsThick = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.89 2c.88 0 1.6.72 1.6 1.6v1.87c.093.03.18.067.269.105l.08.035 1.321-1.32c.62-.62 1.64-.62 2.26 0l1.27 1.27c.62.62.62 1.64 0 2.26l-1.32 1.32q.044.096.081.2l.059.15h1.87c.88 0 1.6.72 1.6 1.6v1.8c0 .88-.72 1.6-1.6 1.6h-1.87a4 4 0 0 1-.14.35l1.32 1.32c.62.62.62 1.64 0 2.26l-1.27 1.27c-.62.62-1.64.62-2.26 0l-1.32-1.32q-.096.044-.2.081l-.15.059v1.87c0 .88-.72 1.6-1.6 1.6h-1.8c-.88 0-1.6-.72-1.6-1.6v-1.87a4 4 0 0 1-.268-.106l-.082-.034-1.32 1.32c-.62.62-1.64.62-2.26 0l-1.27-1.27c-.62-.62-.62-1.64 0-2.26l1.32-1.32a4 4 0 0 1-.08-.2l-.06-.15H3.6c-.88 0-1.6-.72-1.6-1.6v-1.8c0-.88.72-1.6 1.6-1.6h1.87q.047-.136.105-.268l.035-.082-1.32-1.32c-.62-.62-.62-1.64 0-2.26l1.27-1.27c.62-.62 1.64-.62 2.26 0l1.32 1.32q.096-.043.2-.08l.15-.06V3.6c0-.88.72-1.6 1.6-1.6zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
    clipRule: "evenodd"
  }));
};
SvgSiSettingsThick.displayName = "SvgSiSettingsThick";
const ForwardRef$1u = /*#__PURE__*/React.forwardRef(SvgSiSettingsThick);
const Memo$1u = /*#__PURE__*/React.memo(ForwardRef$1u);

const SvgSiShield = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"
  }));
};
SvgSiShield.displayName = "SvgSiShield";
const ForwardRef$1t = /*#__PURE__*/React.forwardRef(SvgSiShield);
const Memo$1t = /*#__PURE__*/React.memo(ForwardRef$1t);

const SvgSiShieldAlert = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728M13 7a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0zm-1 7a1 1 0 1 0 0 2h.008a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiShieldAlert.displayName = "SvgSiShieldAlert";
const ForwardRef$1s = /*#__PURE__*/React.forwardRef(SvgSiShieldAlert);
const Memo$1s = /*#__PURE__*/React.memo(ForwardRef$1s);

const SvgSiShieldBad = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728m3.648-13.101a1 1 0 1 0-1.415-1.415L12 9.586 9.879 7.464A1 1 0 0 0 8.464 8.88L10.586 11l-2.122 2.121a1 1 0 1 0 1.415 1.415L12 12.414l2.121 2.122a1 1 0 1 0 1.415-1.415L13.414 11z",
    clipRule: "evenodd"
  }));
};
SvgSiShieldBad.displayName = "SvgSiShieldBad";
const ForwardRef$1r = /*#__PURE__*/React.forwardRef(SvgSiShieldBad);
const Memo$1r = /*#__PURE__*/React.memo(ForwardRef$1r);

const SvgSiShieldHealthSafety = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728M12 7a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H9a1 1 0 1 1 0-2h2V8a1 1 0 0 1 1-1",
    clipRule: "evenodd"
  }));
};
SvgSiShieldHealthSafety.displayName = "SvgSiShieldHealthSafety";
const ForwardRef$1q = /*#__PURE__*/React.forwardRef(SvgSiShieldHealthSafety);
const Memo$1q = /*#__PURE__*/React.memo(ForwardRef$1q);

const SvgSiShieldPolice = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728m2.334-10.045 2.652-2.147c.063-.126.126-.252.126-.379-.063-.126-.19-.252-.316-.252H13.4l-1.073-2.904c-.063-.127-.19-.253-.316-.253s-.252.126-.315.253l-1.01 2.904H7.34c-.126 0-.252.126-.315.252a.304.304 0 0 0 .126.38L9.74 11.87l-.821 3.157a.304.304 0 0 0 .126.379.4.4 0 0 0 .379 0l2.652-1.894 2.588 1.894c.063.063.126.063.19.063.063 0 .126 0 .189-.063a.304.304 0 0 0 .126-.379z",
    clipRule: "evenodd"
  }));
};
SvgSiShieldPolice.displayName = "SvgSiShieldPolice";
const ForwardRef$1p = /*#__PURE__*/React.forwardRef(SvgSiShieldPolice);
const Memo$1p = /*#__PURE__*/React.memo(ForwardRef$1p);

const SvgSiShieldSecurity = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728M13 10V3h-2v7H5v2h6v9h2v-9h6v-2z",
    clipRule: "evenodd"
  }));
};
SvgSiShieldSecurity.displayName = "SvgSiShieldSecurity";
const ForwardRef$1o = /*#__PURE__*/React.forwardRef(SvgSiShieldSecurity);
const Memo$1o = /*#__PURE__*/React.memo(ForwardRef$1o);

const SvgSiShieldTip = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728M13.008 7a1 1 0 0 1-1 1H12a1 1 0 1 1 0-2h.008a1 1 0 0 1 1 1m-1 9a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1",
    clipRule: "evenodd"
  }));
};
SvgSiShieldTip.displayName = "SvgSiShieldTip";
const ForwardRef$1n = /*#__PURE__*/React.forwardRef(SvgSiShieldTip);
const Memo$1n = /*#__PURE__*/React.memo(ForwardRef$1n);

const SvgSiShieldVerified = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.888 21.98q.113.04.225 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728m4.926-13.4a1 1 0 1 0-1.628-1.162l-4.314 6.04-2.165-2.166a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.52-.126z",
    clipRule: "evenodd"
  }));
};
SvgSiShieldVerified.displayName = "SvgSiShieldVerified";
const ForwardRef$1m = /*#__PURE__*/React.forwardRef(SvgSiShieldVerified);
const Memo$1m = /*#__PURE__*/React.memo(ForwardRef$1m);

const SvgSiSignIn = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M11 5.4A1.4 1.4 0 0 1 12.4 4h6.2A1.4 1.4 0 0 1 20 5.4v13.2a1.4 1.4 0 0 1-1.4 1.4h-6.2a1.4 1.4 0 0 1-1.4-1.4V16a1 1 0 1 0-2 0v2.6a3.4 3.4 0 0 0 3.4 3.4h6.2a3.4 3.4 0 0 0 3.4-3.4V5.4A3.4 3.4 0 0 0 18.6 2h-6.2A3.4 3.4 0 0 0 9 5.4V8a1 1 0 1 0 2 0z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13.293 8.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L14.586 13H3a1 1 0 1 1 0-2h11.586l-1.293-1.293a1 1 0 0 1 0-1.414"
  }));
};
SvgSiSignIn.displayName = "SvgSiSignIn";
const ForwardRef$1l = /*#__PURE__*/React.forwardRef(SvgSiSignIn);
const Memo$1l = /*#__PURE__*/React.memo(ForwardRef$1l);

const SvgSiSignInAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13.6 2a1 1 0 0 0 0 2h5A1.4 1.4 0 0 1 20 5.4v13.2a1.4 1.4 0 0 1-1.4 1.4H13a1 1 0 1 0 0 2h5.6a3.4 3.4 0 0 0 3.4-3.4V5.4A3.4 3.4 0 0 0 18.6 2z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L14.586 13H3a1 1 0 1 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414"
  }));
};
SvgSiSignInAlt.displayName = "SvgSiSignInAlt";
const ForwardRef$1k = /*#__PURE__*/React.forwardRef(SvgSiSignInAlt);
const Memo$1k = /*#__PURE__*/React.memo(ForwardRef$1k);

const SvgSiSignOut = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4 5.4A1.4 1.4 0 0 1 5.4 4h6.2A1.4 1.4 0 0 1 13 5.4V8a1 1 0 1 0 2 0V5.4A3.4 3.4 0 0 0 11.6 2H5.4A3.4 3.4 0 0 0 2 5.4v13.2A3.4 3.4 0 0 0 5.4 22h6.2a3.4 3.4 0 0 0 3.4-3.4V16a1 1 0 1 0-2 0v2.6a1.4 1.4 0 0 1-1.4 1.4H5.4A1.4 1.4 0 0 1 4 18.6z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M17.293 8.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 13H7a1 1 0 1 1 0-2h11.586l-1.293-1.293a1 1 0 0 1 0-1.414"
  }));
};
SvgSiSignOut.displayName = "SvgSiSignOut";
const ForwardRef$1j = /*#__PURE__*/React.forwardRef(SvgSiSignOut);
const Memo$1j = /*#__PURE__*/React.memo(ForwardRef$1j);

const SvgSiSignOutAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4 5.4A1.4 1.4 0 0 1 5.4 4H11a1 1 0 1 0 0-2H5.4A3.4 3.4 0 0 0 2 5.4v13.2A3.4 3.4 0 0 0 5.4 22H11a1 1 0 1 0 0-2H5.4A1.4 1.4 0 0 1 4 18.6z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 13H7a1 1 0 1 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414"
  }));
};
SvgSiSignOutAlt.displayName = "SvgSiSignOutAlt";
const ForwardRef$1i = /*#__PURE__*/React.forwardRef(SvgSiSignOutAlt);
const Memo$1i = /*#__PURE__*/React.memo(ForwardRef$1i);

const SvgSiSmartPhone = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.6 1A3.4 3.4 0 0 1 19 4.4v15.2a3.4 3.4 0 0 1-3.4 3.4H8.4a3.4 3.4 0 0 1-3.395-3.225L5 19.6V4.4A3.4 3.4 0 0 1 8.4 1zM11 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiSmartPhone.displayName = "SvgSiSmartPhone";
const ForwardRef$1h = /*#__PURE__*/React.forwardRef(SvgSiSmartPhone);
const Memo$1h = /*#__PURE__*/React.memo(ForwardRef$1h);

const SvgSiSort = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0-4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiSort.displayName = "SvgSiSort";
const ForwardRef$1g = /*#__PURE__*/React.forwardRef(SvgSiSort);
const Memo$1g = /*#__PURE__*/React.memo(ForwardRef$1g);

const SvgSiSortAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
  }));
};
SvgSiSortAlt.displayName = "SvgSiSortAlt";
const ForwardRef$1f = /*#__PURE__*/React.forwardRef(SvgSiSortAlt);
const Memo$1f = /*#__PURE__*/React.memo(ForwardRef$1f);

const SvgSiSouthEast = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7.293 7.293a1 1 0 0 1 1.414 0L15 13.586V11a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h2.586L7.293 8.707a1 1 0 0 1 0-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiSouthEast.displayName = "SvgSiSouthEast";
const ForwardRef$1e = /*#__PURE__*/React.forwardRef(SvgSiSouthEast);
const Memo$1e = /*#__PURE__*/React.memo(ForwardRef$1e);

const SvgSiSouthEastCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8.707 7.293a1 1 0 0 0-1.414 1.414L13.586 15H11a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v2.586z",
    clipRule: "evenodd"
  }));
};
SvgSiSouthEastCircle.displayName = "SvgSiSouthEastCircle";
const ForwardRef$1d = /*#__PURE__*/React.forwardRef(SvgSiSouthEastCircle);
const Memo$1d = /*#__PURE__*/React.memo(ForwardRef$1d);

const SvgSiSouthEastEscape = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.4 7C7.622 7 7 7.622 7 8.4v6.2c0 .778.622 1.4 1.4 1.4H9a1 1 0 1 1 0 2h-.6A3.394 3.394 0 0 1 5 14.6V8.4C5 6.518 6.518 5 8.4 5h6.2C16.482 5 18 6.518 18 8.4V9a1 1 0 1 1-2 0v-.6c0-.778-.622-1.4-1.4-1.4zm.893 2.293a1 1 0 0 1 1.414 0L17 15.586V14a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h1.586l-6.293-6.293a1 1 0 0 1 0-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiSouthEastEscape.displayName = "SvgSiSouthEastEscape";
const ForwardRef$1c = /*#__PURE__*/React.forwardRef(SvgSiSouthEastEscape);
const Memo$1c = /*#__PURE__*/React.memo(ForwardRef$1c);

const SvgSiSouthEastEscapeAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.4 7C7.622 7 7 7.622 7 8.4v4.2c0 .778.622 1.4 1.4 1.4H9a1 1 0 1 1 0 2h-.6A3.394 3.394 0 0 1 5 12.6V8.4C5 6.518 6.518 5 8.4 5h4.2C14.482 5 16 6.518 16 8.4V9a1 1 0 1 1-2 0v-.6c0-.778-.622-1.4-1.4-1.4zm.893 2.293a1 1 0 0 1 1.414 0L17 15.586V14a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h1.586l-6.293-6.293a1 1 0 0 1 0-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiSouthEastEscapeAlt.displayName = "SvgSiSouthEastEscapeAlt";
const ForwardRef$1b = /*#__PURE__*/React.forwardRef(SvgSiSouthEastEscapeAlt);
const Memo$1b = /*#__PURE__*/React.memo(ForwardRef$1b);

const SvgSiSouthEastSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m3.307 4.293a1 1 0 0 0-1.414 1.414L13.586 15H11a1 1 0 1 0 0 2h5a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v2.586z",
    clipRule: "evenodd"
  }));
};
SvgSiSouthEastSquare.displayName = "SvgSiSouthEastSquare";
const ForwardRef$1a = /*#__PURE__*/React.forwardRef(SvgSiSouthEastSquare);
const Memo$1a = /*#__PURE__*/React.memo(ForwardRef$1a);

const SvgSiSouthWest = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M16.707 7.293a1 1 0 0 1 0 1.414L10.414 15H13a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1v-5a1 1 0 1 1 2 0v2.586l6.293-6.293a1 1 0 0 1 1.414 0",
    clipRule: "evenodd"
  }));
};
SvgSiSouthWest.displayName = "SvgSiSouthWest";
const ForwardRef$19 = /*#__PURE__*/React.forwardRef(SvgSiSouthWest);
const Memo$19 = /*#__PURE__*/React.memo(ForwardRef$19);

const SvgSiSouthWestCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-5.293-3.293a1 1 0 0 0-1.414-1.414L9 13.586V11a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-2.586z",
    clipRule: "evenodd"
  }));
};
SvgSiSouthWestCircle.displayName = "SvgSiSouthWestCircle";
const ForwardRef$18 = /*#__PURE__*/React.forwardRef(SvgSiSouthWestCircle);
const Memo$18 = /*#__PURE__*/React.memo(ForwardRef$18);

const SvgSiSouthWestEscape = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6 8.4C6 6.518 7.518 5 9.4 5h6.2C17.482 5 19 6.518 19 8.4v6.2c0 1.882-1.518 3.4-3.4 3.4H15a1 1 0 1 1 0-2h.6c.778 0 1.4-.622 1.4-1.4V8.4c0-.778-.622-1.4-1.4-1.4H9.4C8.622 7 8 7.622 8 8.4V9a1 1 0 0 1-2 0zm7.293.893a1 1 0 1 1 1.414 1.414L8.414 17H10a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586z",
    clipRule: "evenodd"
  }));
};
SvgSiSouthWestEscape.displayName = "SvgSiSouthWestEscape";
const ForwardRef$17 = /*#__PURE__*/React.forwardRef(SvgSiSouthWestEscape);
const Memo$17 = /*#__PURE__*/React.memo(ForwardRef$17);

const SvgSiSouthWestEscapeAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8 8.4C8 6.518 9.518 5 11.4 5h4.2C17.482 5 19 6.518 19 8.4v4.2c0 1.882-1.518 3.4-3.4 3.4H15a1 1 0 1 1 0-2h.6c.778 0 1.4-.622 1.4-1.4V8.4c0-.778-.622-1.4-1.4-1.4h-4.2c-.778 0-1.4.622-1.4 1.4V9a1 1 0 1 1-2 0zm6.707.893a1 1 0 0 1 0 1.414L8.414 17H10a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v1.586l6.293-6.293a1 1 0 0 1 1.414 0",
    clipRule: "evenodd"
  }));
};
SvgSiSouthWestEscapeAlt.displayName = "SvgSiSouthWestEscapeAlt";
const ForwardRef$16 = /*#__PURE__*/React.forwardRef(SvgSiSouthWestEscapeAlt);
const Memo$16 = /*#__PURE__*/React.memo(ForwardRef$16);

const SvgSiSouthWestSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3m11.307 5.707a1 1 0 0 0-1.414-1.414L9 13.586V11a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-2.586z",
    clipRule: "evenodd"
  }));
};
SvgSiSouthWestSquare.displayName = "SvgSiSouthWestSquare";
const ForwardRef$15 = /*#__PURE__*/React.forwardRef(SvgSiSouthWestSquare);
const Memo$15 = /*#__PURE__*/React.memo(ForwardRef$15);

const SvgSiSpark = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M10.995 21.005v-6.588L6.34 19.072a1 1 0 1 1-1.414-1.414L9.584 13H3a1 1 0 1 1 0-2h6.574L4.926 6.352A1 1 0 1 1 6.34 4.937l4.655 4.656V3.005a1 1 0 1 1 2 0v6.584l4.658-4.658a1 1 0 1 1 1.414 1.414L14.412 11H21a1 1 0 1 1 0 2h-6.598l4.665 4.665a1 1 0 0 1-1.414 1.414l-4.658-4.658v6.584a1 1 0 0 1-2 0"
  }));
};
SvgSiSpark.displayName = "SvgSiSpark";
const ForwardRef$14 = /*#__PURE__*/React.forwardRef(SvgSiSpark);
const Memo$14 = /*#__PURE__*/React.memo(ForwardRef$14);

const SvgSiSpinner = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M11 22v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m-3.94-6.46a1 1 0 1 1 1.414 1.413l-2.828 2.828a1 1 0 1 1-1.414-1.414zm8.478 0a1 1 0 0 1 1.414 0l2.828 2.827a1 1 0 0 1-1.413 1.414l-2.829-2.828a1 1 0 0 1 0-1.414m-9.532-4.535a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2zm16 0a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2zM4.224 4.225a1 1 0 0 1 1.414 0l2.828 2.829a1 1 0 0 1-1.414 1.414L4.224 5.64a1 1 0 0 1 0-1.414m14.148 0a1 1 0 0 1 1.414 1.415l-2.828 2.828a1 1 0 1 1-1.414-1.414zM11 6V2a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0"
  }));
};
SvgSiSpinner.displayName = "SvgSiSpinner";
const ForwardRef$13 = /*#__PURE__*/React.forwardRef(SvgSiSpinner);
const Memo$13 = /*#__PURE__*/React.memo(ForwardRef$13);

const SvgSiSquare = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3"
  }));
};
SvgSiSquare.displayName = "SvgSiSquare";
const ForwardRef$12 = /*#__PURE__*/React.forwardRef(SvgSiSquare);
const Memo$12 = /*#__PURE__*/React.memo(ForwardRef$12);

const SvgSiStar = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.954 1.7a1 1 0 0 0-1.908-.001l-2.184 6.92-6.861-.005a1 1 0 0 0-.566 1.826l5.498 3.762-2.067 6.545A1 1 0 0 0 6.4 21.86l5.6-4.006 5.594 4.007a1 1 0 0 0 1.536-1.114l-2.067-6.545 5.502-3.762a1 1 0 0 0-.566-1.826l-6.866.005z"
  }));
};
SvgSiStar.displayName = "SvgSiStar";
const ForwardRef$11 = /*#__PURE__*/React.forwardRef(SvgSiStar);
const Memo$11 = /*#__PURE__*/React.memo(ForwardRef$11);

const SvgSiStarAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.025 2c-.455 0-.805.22-1.014.399-.22.189-.395.424-.512.659a1 1 0 0 0-.05.119L8.662 8.313H2.681c-.455 0-.805.22-1.014.399a2.1 2.1 0 0 0-.512.66c-.209.416-.18.858-.07 1.189.1.297.305.627.65.842l4.614 3.714-1.46 5.615c-.148.38-.115.769-.016 1.067.11.33.353.7.77.91a1.8 1.8 0 0 0 1.652 0 1 1 0 0 0 .134-.081l4.715-3.368 4.548 3.328c.404.355.847.353.999.352h.032c.146.001.561.003.952-.313.331-.215.53-.537.628-.828a1.58 1.58 0 0 0-.026-1.093l-1.68-5.484 4.78-3.869a1 1 0 0 0 .265-.33l.021-.043c.11-.215.337-.663.337-1.161a1 1 0 0 0-.106-.448 2.1 2.1 0 0 0-.512-.659c-.209-.18-.559-.399-1.013-.399h-5.87l-1.905-5.155a1 1 0 0 0-.043-.1 2.1 2.1 0 0 0-.512-.66c-.21-.179-.56-.398-1.014-.398"
  }));
};
SvgSiStarAlt.displayName = "SvgSiStarAlt";
const ForwardRef$10 = /*#__PURE__*/React.forwardRef(SvgSiStarAlt);
const Memo$10 = /*#__PURE__*/React.memo(ForwardRef$10);

const SvgSiStop = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M20.2 3H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8"
  }));
};
SvgSiStop.displayName = "SvgSiStop";
const ForwardRef$$ = /*#__PURE__*/React.forwardRef(SvgSiStop);
const Memo$$ = /*#__PURE__*/React.memo(ForwardRef$$);

const SvgSiStopCircle = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M9 9.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v4.4a.8.8 0 0 1-.8.8H9.8a.8.8 0 0 1-.8-.8z",
    clipRule: "evenodd"
  }));
};
SvgSiStopCircle.displayName = "SvgSiStopCircle";
const ForwardRef$_ = /*#__PURE__*/React.forwardRef(SvgSiStopCircle);
const Memo$_ = /*#__PURE__*/React.memo(ForwardRef$_);

const SvgSiStreetSign = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 0a1 1 0 0 1 1 1v2h5v6h-5v3h5l4 3-4 3h-5v5a1 1 0 1 1-2 0v-5H6v-6h5V9H6L2 6l4-3h5V1a1 1 0 0 1 1-1"
  }));
};
SvgSiStreetSign.displayName = "SvgSiStreetSign";
const ForwardRef$Z = /*#__PURE__*/React.forwardRef(SvgSiStreetSign);
const Memo$Z = /*#__PURE__*/React.memo(ForwardRef$Z);

const SvgSiStrikethrough = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16 16.773c0-.883-.218-1.492-.743-2.054-.511-.547-1.357-1.098-2.746-1.719H4a1 1 0 1 1 0-2h4.893C7.545 9.9 6.762 8.553 6.762 6.895c0-1.346.744-2.575 1.739-3.435C9.506 2.591 10.876 2 12.333 2h.031a9.6 9.6 0 0 1 4.786 1.483 1 1 0 1 1-1.063 1.694A7.6 7.6 0 0 0 12.313 4c-.916.005-1.824.386-2.504.974-.696.6-1.047 1.319-1.047 1.92 0 1.412 1.013 2.778 3.957 4.017l.206.089H20a1 1 0 1 1 0 2h-3.644q.194.172.363.354c.927.993 1.281 2.118 1.281 3.42 0 1.771-.935 3.109-2.167 3.966-1.212.843-2.75 1.26-4.166 1.26-1.858 0-3.677-.53-5.233-1.6a1 1 0 0 1 1.132-1.649c1.206.83 2.626 1.249 4.101 1.249 1.06 0 2.188-.32 3.023-.901.816-.568 1.31-1.343 1.31-2.326"
  }));
};
SvgSiStrikethrough.displayName = "SvgSiStrikethrough";
const ForwardRef$Y = /*#__PURE__*/React.forwardRef(SvgSiStrikethrough);
const Memo$Y = /*#__PURE__*/React.memo(ForwardRef$Y);

const SvgSiSun = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    fill: "currentColor",
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 20a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m-7.071-2.343a1 1 0 1 1 1.414 1.414l-1.414 1.414a1 1 0 0 1-1.414-1.414zm12.728 0a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 0 1-1.414 1.414l-1.414-1.414a1 1 0 0 1 0-1.414M12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12m-9 5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm20 0a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM3.515 3.515a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L3.515 4.929a1 1 0 0 1 0-1.414m15.556 0a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414zM12 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};
SvgSiSun.displayName = "SvgSiSun";
const ForwardRef$X = /*#__PURE__*/React.forwardRef(SvgSiSun);
const Memo$X = /*#__PURE__*/React.memo(ForwardRef$X);

const SvgSiSunSet = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16 20a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM12 7c3.31 0 6 2.69 6 6a5.97 5.97 0 0 1-1.53 4H20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h3.519A6 6 0 0 1 6 13c0-3.31 2.69-6 6-6m-9 5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm20 0a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM3.515 4.515a1 1 0 0 1 1.414 0l1.414 1.414a1 1 0 1 1-1.414 1.414L3.515 5.929a1 1 0 0 1 0-1.414m15.556 0a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414zM12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"
  }));
};
SvgSiSunSet.displayName = "SvgSiSunSet";
const ForwardRef$W = /*#__PURE__*/React.forwardRef(SvgSiSunSet);
const Memo$W = /*#__PURE__*/React.memo(ForwardRef$W);

const SvgSiSunnySnowing = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M1 12a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm17 1a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1M4.929 4.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414zm15.556 1.414a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414zM4 15a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm3 1a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m5-1a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm3 1a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.1a1 1 0 1 1 0 2H20a1 1 0 0 1-1-1m-7 2a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm0 3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm4-3a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm-8 0a1 1 0 1 0 0 2h.1a1 1 0 1 0 0-2zm0-5c0-2.21 1.79-4 4-4s4 1.79 4 4"
  }));
};
SvgSiSunnySnowing.displayName = "SvgSiSunnySnowing";
const ForwardRef$V = /*#__PURE__*/React.forwardRef(SvgSiSunnySnowing);
const Memo$V = /*#__PURE__*/React.memo(ForwardRef$V);

const SvgSiSwapHoriz = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7.707 2.293a1 1 0 0 1 0 1.414L5.414 6H21a1 1 0 1 1 0 2H5.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0m8.586 10a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L18.586 18H3a1 1 0 1 1 0-2h15.586l-2.293-2.293a1 1 0 0 1 0-1.414",
    clipRule: "evenodd"
  }));
};
SvgSiSwapHoriz.displayName = "SvgSiSwapHoriz";
const ForwardRef$U = /*#__PURE__*/React.forwardRef(SvgSiSwapHoriz);
const Memo$U = /*#__PURE__*/React.memo(ForwardRef$U);

const SvgSiSwapVert = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7 2a1 1 0 0 1 1 1v15.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L6 18.586V3a1 1 0 0 1 1-1m9.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L18 5.414V21a1 1 0 1 1-2 0V5.414l-2.293 2.293a1 1 0 1 1-1.414-1.414z",
    clipRule: "evenodd"
  }));
};
SvgSiSwapVert.displayName = "SvgSiSwapVert";
const ForwardRef$T = /*#__PURE__*/React.forwardRef(SvgSiSwapVert);
const Memo$T = /*#__PURE__*/React.memo(ForwardRef$T);

const SvgSiSwatch = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6 2a4 4 0 0 1 4 4v2.313l1.9-1.899a4 4 0 0 1 5.657 5.657L15.627 14H18a4 4 0 0 1 .206 7.995L18 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m0 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m3.628 4H18a2 2 0 0 0 .204-3.99L18 16h-4.372zm6.515-12.172a2 2 0 0 0-2.83 0L10 11.142v5.657l2.5-2.501.01-.01 3.633-3.63a2 2 0 0 0 0-2.83",
    clipRule: "evenodd"
  }));
};
SvgSiSwatch.displayName = "SvgSiSwatch";
const ForwardRef$S = /*#__PURE__*/React.forwardRef(SvgSiSwatch);
const Memo$S = /*#__PURE__*/React.memo(ForwardRef$S);

const SvgSiTable = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M14 10v4h-4v-4z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M10 8V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4z",
    clipRule: "evenodd"
  }));
};
SvgSiTable.displayName = "SvgSiTable";
const ForwardRef$R = /*#__PURE__*/React.forwardRef(SvgSiTable);
const Memo$R = /*#__PURE__*/React.memo(ForwardRef$R);

const SvgSiTableColumns = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M10 4v16H8V4zm6 0v16h-2V4z",
    clipRule: "evenodd"
  }));
};
SvgSiTableColumns.displayName = "SvgSiTableColumns";
const ForwardRef$Q = /*#__PURE__*/React.forwardRef(SvgSiTableColumns);
const Memo$Q = /*#__PURE__*/React.memo(ForwardRef$Q);

const SvgSiTableRows = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M4 8h16v2H4zm0 6h16v2H4z",
    clipRule: "evenodd"
  }));
};
SvgSiTableRows.displayName = "SvgSiTableRows";
const ForwardRef$P = /*#__PURE__*/React.forwardRef(SvgSiTableRows);
const Memo$P = /*#__PURE__*/React.memo(ForwardRef$P);

const SvgSiTakeoff = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M17.968 5.835c1.212-.681 2.755-.29 3.432.878l1.03 1.717a.5.5 0 0 1-.177.69l-10.355 6.036a.5.5 0 0 1-.148.057l-6.175 1.32a.5.5 0 0 1-.358-.058l-3.47-2.044a.5.5 0 0 1 .009-.866l.851-.48.005-.002a2.54 2.54 0 0 1 1.828-.232l1.225.174 3.73-2.209-4.332-1.779A.5.5 0 0 1 5 8.143l1.112-.649.028-.014a2.8 2.8 0 0 1 1.494-.302l.022.003 6.777.813 3.518-2.15zM18 18a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2z"
  }));
};
SvgSiTakeoff.displayName = "SvgSiTakeoff";
const ForwardRef$O = /*#__PURE__*/React.forwardRef(SvgSiTakeoff);
const Memo$O = /*#__PURE__*/React.memo(ForwardRef$O);

const SvgSiTarget = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m6-10a6 6 0 1 1-12 0 6 6 0 0 1 12 0",
    clipRule: "evenodd"
  }));
};
SvgSiTarget.displayName = "SvgSiTarget";
const ForwardRef$N = /*#__PURE__*/React.forwardRef(SvgSiTarget);
const Memo$N = /*#__PURE__*/React.memo(ForwardRef$N);

const SvgSiTaxiing = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M10.5 17.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m8 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0M8.855 5.501c.468.028.892.158 1.288.403l.167.113.029.022 5.329 4.45 4.227-.249h.037c1.416.017 2.535 1.203 2.537 2.587l.031 2.166a.5.5 0 0 1-.5.507H9.999a.5.5 0 0 1-.161-.026L3.824 13.42a.5.5 0 0 1-.28-.236l-1.984-3.7a.5.5 0 0 1 .446-.736l.977.012h.006a2.5 2.5 0 0 1 1.738.78l.977.959h4.34L7.124 6.29a.501.501 0 0 1 .408-.785l1.29-.006z"
  }));
};
SvgSiTaxiing.displayName = "SvgSiTaxiing";
const ForwardRef$M = /*#__PURE__*/React.forwardRef(SvgSiTaxiing);
const Memo$M = /*#__PURE__*/React.memo(ForwardRef$M);

const SvgSiTerminal = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M4.707 5.293a1 1 0 0 0-1.414 1.414L8.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414zM12 17a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
  }));
};
SvgSiTerminal.displayName = "SvgSiTerminal";
const ForwardRef$L = /*#__PURE__*/React.forwardRef(SvgSiTerminal);
const Memo$L = /*#__PURE__*/React.memo(ForwardRef$L);

const SvgSiTerminalAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4m.893 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L7.586 12 4.293 8.707a1 1 0 0 1 0-1.414M10 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiTerminalAlt.displayName = "SvgSiTerminalAlt";
const ForwardRef$K = /*#__PURE__*/React.forwardRef(SvgSiTerminalAlt);
const Memo$K = /*#__PURE__*/React.memo(ForwardRef$K);

const SvgSiText = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M19 7V4h-6v16h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3V4H5v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0"
  }));
};
SvgSiText.displayName = "SvgSiText";
const ForwardRef$J = /*#__PURE__*/React.forwardRef(SvgSiText);
const Memo$J = /*#__PURE__*/React.memo(ForwardRef$J);

const SvgSiThumbDown = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M7 13.174h1.665c.337 0 .652.17.837.451l4.578 6.981c.325-.314.502-.67.581-1.032.131-.604.009-1.33-.378-2.027l-.004-.007-.64-1.174-.02-.04c-.326-.669-.438-1.477-.031-2.174.416-.711 1.184-.987 1.932-.978h3.236c.238 0 .826-.042 1.32-.411.427-.32.992-1.043.917-2.85-.066-1.517-.73-2.784-1.47-3.685a6 6 0 0 0-1.038-1.011A2.5 2.5 0 0 0 18.148 5H7zM7 3h11.273c.321 0 .61.13.773.212.202.102.417.24.633.4.432.32.924.777 1.391 1.348.875 1.068 1.719 2.6 1.895 4.484l.026.382v.002c.096 2.304-.642 3.733-1.718 4.537-1.01.755-2.127.809-2.517.809H15.5a.7.7 0 0 0-.169.014.8.8 0 0 0 .082.253l.62 1.135.103.197c.5.988.718 2.128.48 3.225-.261 1.203-1.051 2.249-2.377 2.9a1 1 0 0 1-1.277-.35l-4.837-7.374H7v.026A1.8 1.8 0 0 1 5.2 17H2.8A1.8 1.8 0 0 1 1 15.2V2.8A1.8 1.8 0 0 1 2.8 1h2.4A1.8 1.8 0 0 1 7 2.8z"
  }));
};
SvgSiThumbDown.displayName = "SvgSiThumbDown";
const ForwardRef$I = /*#__PURE__*/React.forwardRef(SvgSiThumbDown);
const Memo$I = /*#__PURE__*/React.memo(ForwardRef$I);

const SvgSiThumbDownAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M6.2 1c.757 0 1.403.468 1.67 1.13l7.496-1.077a5.1 5.1 0 0 1 3.504.765 5.26 5.26 0 0 1 2.172 2.883l1.762 5.753a4.48 4.48 0 0 1-.64 3.916 4.36 4.36 0 0 1-1.537 1.328 4.3 4.3 0 0 1-1.968.479h-2.27q.064.256.115.514l.079.466q.102.704.103 1.43v.002a4.45 4.45 0 0 1-1.264 3.111c-.812.83-1.92 1.3-3.077 1.3a4.3 4.3 0 0 1-3.076-1.3 4.45 4.45 0 0 1-1.264-3.111c0-.224-.116-.67-.483-1.173A1.8 1.8 0 0 1 6.2 18H2.8A1.8 1.8 0 0 1 1 16.2V2.8A1.8 1.8 0 0 1 2.8 1zm3.805 17.589c0 .646.251 1.261.692 1.712.44.45 1.034.699 1.648.699s1.207-.25 1.648-.7.692-1.064.692-1.71l-.01-.388a8 8 0 0 0-.134-1.128h-.001a8.7 8.7 0 0 0-.444-1.531 1 1 0 0 1 .93-1.366h3.633c.364 0 .723-.088 1.049-.256a2.36 2.36 0 0 0 .831-.719c.22-.305.367-.66.429-1.036a2.5 2.5 0 0 0-.076-1.126l-1.763-5.753A3.26 3.26 0 0 0 17.787 3.5a3.1 3.1 0 0 0-2.134-.467h-.002L8 4.132v10.94q.311.236.61.538c.927.948 1.395 2.067 1.395 2.979"
  }));
};
SvgSiThumbDownAlt1.displayName = "SvgSiThumbDownAlt1";
const ForwardRef$H = /*#__PURE__*/React.forwardRef(SvgSiThumbDownAlt1);
const Memo$H = /*#__PURE__*/React.memo(ForwardRef$H);

const SvgSiThumbDownAlt2 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13.501 14.203a1 1 0 0 1 1-1h5.833a.6.6 0 0 0 .288-.071.7.7 0 0 0 .238-.21.78.78 0 0 0 .107-.664L18.66 4.502a.73.73 0 0 0-.25-.37.64.64 0 0 0-.284-.124l-.1-.008H8v7.265l3.945 4.896c.144.178.222.4.222.628v3.153c.36-.124.652-.32.866-.594.254-.326.468-.848.468-1.698zm2 3.447c0 1.196-.308 2.18-.89 2.927s-1.37 1.17-2.171 1.37l-.006.002a1.82 1.82 0 0 1-1.582-.363 1.86 1.86 0 0 1-.685-1.452V17.14l-2.428-3.013A1.8 1.8 0 0 1 6.2 15H2.8A1.8 1.8 0 0 1 1 13.2V2.8A1.8 1.8 0 0 1 2.8 1h3.4c.706 0 1.316.408 1.61 1h10.215c.579 0 1.14.192 1.598.542s.79.839.954 1.39l2.308 7.756a2.78 2.78 0 0 1-.397 2.396 2.7 2.7 0 0 1-.94.82 2.6 2.6 0 0 1-1.055.294l-.158.005h-4.834z"
  }));
};
SvgSiThumbDownAlt2.displayName = "SvgSiThumbDownAlt2";
const ForwardRef$G = /*#__PURE__*/React.forwardRef(SvgSiThumbDownAlt2);
const Memo$G = /*#__PURE__*/React.memo(ForwardRef$G);

const SvgSiThumbUp = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M9.502 10.375a1 1 0 0 1-.837.451H7V19h11.148c.075-.038.19-.107.337-.217a6 6 0 0 0 1.038-1.01c.74-.902 1.404-2.17 1.47-3.686.075-1.807-.49-2.53-.918-2.85-.493-.369-1.081-.41-1.32-.41H15.52c-.748.008-1.516-.268-1.932-.98-.407-.696-.295-1.504.03-2.172l.022-.041.64-1.174.003-.007.133-.263c.28-.614.36-1.236.245-1.764a2 2 0 0 0-.58-1.033zM7 8.826h1.125l4.837-7.375.055-.075a1 1 0 0 1 1.222-.273c1.326.65 2.116 1.696 2.377 2.899.254 1.167-.01 2.383-.58 3.414l-.623 1.142a.9.9 0 0 0-.082.254.7.7 0 0 0 .169.014h3.256c.39 0 1.506.054 2.517.809 1.076.804 1.814 2.233 1.718 4.537v.002c-.09 2.06-.987 3.727-1.92 4.866a8 8 0 0 1-1.392 1.349c-.216.16-.43.297-.633.4-.163.08-.452.21-.773.211H7v.2A1.8 1.8 0 0 1 5.2 23H2.8A1.8 1.8 0 0 1 1 21.2V8.8A1.8 1.8 0 0 1 2.8 7h2.4A1.8 1.8 0 0 1 7 8.8z"
  }));
};
SvgSiThumbUp.displayName = "SvgSiThumbUp";
const ForwardRef$F = /*#__PURE__*/React.forwardRef(SvgSiThumbUp);
const Memo$F = /*#__PURE__*/React.memo(ForwardRef$F);

const SvgSiThumbUpAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.345 1c1.158 0 2.265.47 3.077 1.3a4.45 4.45 0 0 1 1.264 3.111v.002a10 10 0 0 1-.296 2.41h2.27c.684 0 1.358.164 1.967.479s1.135.77 1.536 1.328a4.48 4.48 0 0 1 .64 3.916l-1.761 5.753a5.25 5.25 0 0 1-2.172 2.883 5.1 5.1 0 0 1-3.504.764L7.87 21.87A1.8 1.8 0 0 1 6.2 23H2.8A1.8 1.8 0 0 1 1 21.2V7.8A1.8 1.8 0 0 1 2.8 6h3.4c.524 0 .994.226 1.322.583.366-.502.483-.948.483-1.172 0-1.163.452-2.282 1.264-3.111A4.3 4.3 0 0 1 12.345 1m-2.34 4.411c0 .911-.468 2.031-1.396 2.979A6 6 0 0 1 8 8.927v10.94l7.651 1.1h.002a3.1 3.1 0 0 0 2.134-.466 3.25 3.25 0 0 0 1.342-1.787l1.763-5.754c.111-.364.137-.75.076-1.126a2.45 2.45 0 0 0-.429-1.036 2.36 2.36 0 0 0-.831-.719 2.3 2.3 0 0 0-1.049-.256h-3.633a1.002 1.002 0 0 1-.93-1.366 8.7 8.7 0 0 0 .444-1.53l.001-.001q.143-.733.144-1.515c0-.646-.25-1.261-.692-1.712C13.553 3.25 12.96 3 12.345 3s-1.207.25-1.648.7a2.45 2.45 0 0 0-.692 1.711"
  }));
};
SvgSiThumbUpAlt1.displayName = "SvgSiThumbUpAlt1";
const ForwardRef$E = /*#__PURE__*/React.forwardRef(SvgSiThumbUpAlt1);
const Memo$E = /*#__PURE__*/React.memo(ForwardRef$E);

const SvgSiThumbUpAlt2 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13.501 5.35c0-.85-.214-1.372-.468-1.698a1.8 1.8 0 0 0-.866-.595V6.21c0 .228-.078.45-.222.628L8 11.734V19h10.025c.135 0 .27-.044.384-.132a.73.73 0 0 0 .251-.37l2.308-7.756a.78.78 0 0 0-.108-.664.7.7 0 0 0-.238-.21.6.6 0 0 0-.215-.067l-.073-.004h-5.833a1 1 0 0 1-1-1zm2 2.447h4.834l.158.005a2.6 2.6 0 0 1 1.055.294c.374.195.696.477.94.82a2.78 2.78 0 0 1 .396 2.396l-2.307 7.756a2.72 2.72 0 0 1-.954 1.39c-.401.307-.88.492-1.382.533l-.216.009H7.811a1.8 1.8 0 0 1-1.61 1H2.8A1.8 1.8 0 0 1 1 20.2V9.8A1.8 1.8 0 0 1 2.8 8h3.4a1.8 1.8 0 0 1 1.54.871l2.427-3.013V2.866a1.86 1.86 0 0 1 .685-1.452l.168-.124a1.82 1.82 0 0 1 1.206-.276l.208.037.006.002c.801.2 1.589.624 2.17 1.37.583.748.891 1.731.891 2.927z"
  }));
};
SvgSiThumbUpAlt2.displayName = "SvgSiThumbUpAlt2";
const ForwardRef$D = /*#__PURE__*/React.forwardRef(SvgSiThumbUpAlt2);
const Memo$D = /*#__PURE__*/React.memo(ForwardRef$D);

const SvgSiTicket = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M20.8 4A2.2 2.2 0 0 1 23 6.2V9a1 1 0 0 1-1 1 2 2 0 1 0 0 4 1 1 0 0 1 1 1v2.8a2.2 2.2 0 0 1-2.2 2.2H3.2A2.2 2.2 0 0 1 1 17.8V15a1 1 0 0 1 1-1 2 2 0 1 0 0-4 1 1 0 0 1-1-1V6.2A2.2 2.2 0 0 1 3.2 4zM8 15h8V9H8z",
    clipRule: "evenodd"
  }));
};
SvgSiTicket.displayName = "SvgSiTicket";
const ForwardRef$C = /*#__PURE__*/React.forwardRef(SvgSiTicket);
const Memo$C = /*#__PURE__*/React.memo(ForwardRef$C);

const SvgSiTicketAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M20.8 4A2.2 2.2 0 0 1 23 6.2V9a1 1 0 0 1-1 1 2 2 0 1 0 0 4 1 1 0 0 1 1 1v2.8a2.2 2.2 0 0 1-2.2 2.2H3.2A2.2 2.2 0 0 1 1 17.8V15a1 1 0 0 1 1-1 2 2 0 1 0 0-4 1 1 0 0 1-1-1V6.2A2.2 2.2 0 0 1 3.2 4zM8 5v14h2V5z",
    clipRule: "evenodd"
  }));
};
SvgSiTicketAlt1.displayName = "SvgSiTicketAlt1";
const ForwardRef$B = /*#__PURE__*/React.forwardRef(SvgSiTicketAlt1);
const Memo$B = /*#__PURE__*/React.memo(ForwardRef$B);

const SvgSiToggleOff = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6m3 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
    clipRule: "evenodd"
  }));
};
SvgSiToggleOff.displayName = "SvgSiToggleOff";
const ForwardRef$A = /*#__PURE__*/React.forwardRef(SvgSiToggleOff);
const Memo$A = /*#__PURE__*/React.memo(ForwardRef$A);

const SvgSiToggleOn = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6m13 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
    clipRule: "evenodd"
  }));
};
SvgSiToggleOn.displayName = "SvgSiToggleOn";
const ForwardRef$z = /*#__PURE__*/React.forwardRef(SvgSiToggleOn);
const Memo$z = /*#__PURE__*/React.memo(ForwardRef$z);

const SvgSiTrafficCone = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M22 20h-3.278l-1.014-3.646q-.122.066-.265.095A26.8 26.8 0 0 1 12 17c-1.868 0-3.767-.197-5.564-.571a1 1 0 0 1-.153-.045L5.278 20H2a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2M6.817 14.466l.027.005A25.6 25.6 0 0 0 12 15c1.733 0 3.415-.173 5.037-.51a1 1 0 0 1 .148-.019l-1.087-3.911a1 1 0 0 1-.275.093A21 21 0 0 1 12 11a21.4 21.4 0 0 1-4.108-.404zM8.43 8.665A19.3 19.3 0 0 0 12 9a19 19 0 0 0 3.457-.313q.058-.01.116-.015L14.16 3.59a.8.8 0 0 0-.77-.59h-2.78c-.36 0-.67.24-.77.59z"
  }));
};
SvgSiTrafficCone.displayName = "SvgSiTrafficCone";
const ForwardRef$y = /*#__PURE__*/React.forwardRef(SvgSiTrafficCone);
const Memo$y = /*#__PURE__*/React.memo(ForwardRef$y);

const SvgSiTrain = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M16 21a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M17.6 1A3.4 3.4 0 0 1 21 4.4v12.2a3.4 3.4 0 0 1-3.4 3.4H6.4a3.4 3.4 0 0 1-3.395-3.225L3 16.6V4.4A3.4 3.4 0 0 1 6.4 1zM8 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M6.4 4a.4.4 0 0 0-.4.4V11h12V4.4a.4.4 0 0 0-.4-.4z",
    clipRule: "evenodd"
  }));
};
SvgSiTrain.displayName = "SvgSiTrain";
const ForwardRef$x = /*#__PURE__*/React.forwardRef(SvgSiTrain);
const Memo$x = /*#__PURE__*/React.memo(ForwardRef$x);

const SvgSiTwitter = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M7.91 20.889c8.302 0 12.845-6.885 12.845-12.845 0-.193 0-.387-.009-.58A9.2 9.2 0 0 0 23 5.121a9.2 9.2 0 0 1-2.597.713 4.54 4.54 0 0 0 1.99-2.5 9 9 0 0 1-2.87 1.091A4.5 4.5 0 0 0 16.23 3a4.52 4.52 0 0 0-4.516 4.516c0 .352.044.696.114 1.03a12.82 12.82 0 0 1-9.305-4.718 4.526 4.526 0 0 0 1.4 6.03 4.6 4.6 0 0 1-2.043-.563v.061a4.524 4.524 0 0 0 3.62 4.428 4.4 4.4 0 0 1-1.189.159q-.435 0-.845-.08a4.51 4.51 0 0 0 4.217 3.135 9.05 9.05 0 0 1-5.608 1.936A9 9 0 0 1 1 18.873a12.84 12.84 0 0 0 6.91 2.016"
  }));
};
SvgSiTwitter.displayName = "SvgSiTwitter";
const ForwardRef$w = /*#__PURE__*/React.forwardRef(SvgSiTwitter);
const Memo$w = /*#__PURE__*/React.memo(ForwardRef$w);

const SvgSiUmbrella = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M17.186 18.39a1 1 0 0 1 1.03.97c.062 1.968-1.529 3.579-3.49 3.638l-.03.001h-.088c-1.954.044-3.549-1.54-3.608-3.491V13H2a1 1 0 0 1-1-1C1 5.925 5.925 1 12 1s11 4.925 11 11a1 1 0 0 1-1 1h-9v6.447l.013.167c.106.821.801 1.409 1.564 1.385h.088c.907-.027 1.578-.763 1.553-1.577a1 1 0 0 1 .968-1.031"
  }));
};
SvgSiUmbrella.displayName = "SvgSiUmbrella";
const ForwardRef$v = /*#__PURE__*/React.forwardRef(SvgSiUmbrella);
const Memo$v = /*#__PURE__*/React.memo(ForwardRef$v);

const SvgSiUnderline = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M20 20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zM5 12V4H4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2H7v8c0 2.748 2.252 5 5 5s5-2.252 5-5V4h-1a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2h-1v8c0 3.852-3.148 7-7 7s-7-3.148-7-7"
  }));
};
SvgSiUnderline.displayName = "SvgSiUnderline";
const ForwardRef$u = /*#__PURE__*/React.forwardRef(SvgSiUnderline);
const Memo$u = /*#__PURE__*/React.memo(ForwardRef$u);

const SvgSiUnfoldMore = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.293 14.293a1 1 0 0 1 1.414 0L12 16.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414m3-9a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L12 7.414 9.707 9.707a1 1 0 0 1-1.414-1.414z",
    clipRule: "evenodd"
  }));
};
SvgSiUnfoldMore.displayName = "SvgSiUnfoldMore";
const ForwardRef$t = /*#__PURE__*/React.forwardRef(SvgSiUnfoldMore);
const Memo$t = /*#__PURE__*/React.memo(ForwardRef$t);

const SvgSiUnlink = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M13.25 21v-3a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0m-6.191-9.706a1 1 0 0 1 1.416 1.412L5.729 15.46l-.003.004a2 2 0 0 0-.019 2.821 2 2 0 0 0 2.186.437c.243-.101.464-.25.65-.437l2.749-2.753a1.001 1.001 0 0 1 1.416 1.413l-2.749 2.75.001.001a4 4 0 0 1-5.67 0l-.003-.003a4 4 0 0 1 .026-5.646zm8.673 4.438c.39-.39 1.025-.39 1.416 0l2.122 2.124a1 1 0 1 1-1.415 1.413l-2.123-2.121a1 1 0 0 1 0-1.416M21 13.25a1 1 0 1 1 0 2h-3.187a1 1 0 1 1 0-2zM16.855 3.126a4.03 4.03 0 0 1 3.723 2.488 4 4 0 0 1-.017 3.087c-.206.488-.508.93-.887 1.3L19.673 10l-2.697 2.706a1 1 0 1 1-1.416-1.412l2.707-2.715.01-.01a2 2 0 0 0 .014-2.847l-.001-.001a2.03 2.03 0 0 0-2.871 0l-2.711 2.715a1 1 0 0 1-1.416-1.414l2.712-2.714a4.03 4.03 0 0 1 2.85-1.182M6.188 8.75a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zM4.73 4.67a1 1 0 0 1 1.415 0l2.123 2.123a1 1 0 0 1-1.415 1.414L4.73 6.085a1 1 0 0 1 0-1.415m4.02 1.518V3a1 1 0 0 1 2 0v3.188a1 1 0 1 1-2 0"
  }));
};
SvgSiUnlink.displayName = "SvgSiUnlink";
const ForwardRef$s = /*#__PURE__*/React.forwardRef(SvgSiUnlink);
const Memo$s = /*#__PURE__*/React.memo(ForwardRef$s);

const SvgSiUnlock = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7 7a5 5 0 0 1 9.843-1.25 1 1 0 0 1-1.937.5A3 3 0 0 0 9 7v3h8.4c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6H7zm5 5.25a1.75 1.75 0 0 0-.75 3.332V18a.75.75 0 0 0 1.5 0v-2.418A1.75 1.75 0 0 0 12 12.25",
    clipRule: "evenodd"
  }));
};
SvgSiUnlock.displayName = "SvgSiUnlock";
const ForwardRef$r = /*#__PURE__*/React.forwardRef(SvgSiUnlock);
const Memo$r = /*#__PURE__*/React.memo(ForwardRef$r);

const SvgSiUnlockAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7 7c0-2.762 2.238-5 5-5s5 2.238 5 5v4h2.4c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6H15V7c0-1.658-1.342-3-3-3S9 5.342 9 7a1 1 0 0 1-2 0m3 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
    clipRule: "evenodd"
  }));
};
SvgSiUnlockAlt.displayName = "SvgSiUnlockAlt";
const ForwardRef$q = /*#__PURE__*/React.forwardRef(SvgSiUnlockAlt);
const Memo$q = /*#__PURE__*/React.memo(ForwardRef$q);

const SvgSiUnlockMuted = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M18 2a5 5 0 0 0-5 5v3H4.6c-.88 0-1.6.72-1.6 1.6v7C3 19.92 4.08 21 5.4 21h9.2c1.32 0 2.4-1.08 2.4-2.4v-7c0-.88-.72-1.6-1.6-1.6H15V7c0-1.658 1.342-3 3-3s3 1.342 3 3v3a1 1 0 1 0 2 0V7a5 5 0 0 0-5-5"
  }));
};
SvgSiUnlockMuted.displayName = "SvgSiUnlockMuted";
const ForwardRef$p = /*#__PURE__*/React.forwardRef(SvgSiUnlockMuted);
const Memo$p = /*#__PURE__*/React.memo(ForwardRef$p);

const SvgSiUpDown = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M11.37 2.225a1 1 0 0 1 1.337.068l4 4a1 1 0 1 1-1.414 1.414L13 5.414v13.172l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 18.586V5.414L8.707 7.707a1 1 0 1 1-1.414-1.414l4-4z"
  }));
};
SvgSiUpDown.displayName = "SvgSiUpDown";
const ForwardRef$o = /*#__PURE__*/React.forwardRef(SvgSiUpDown);
const Memo$o = /*#__PURE__*/React.memo(ForwardRef$o);

const SvgSiUpTwoHeaded = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M11 20v-8.586l-2.293 2.293a1 1 0 1 1-1.414-1.414L11 8.586V6.414L8.707 8.707a1 1 0 1 1-1.414-1.414l4-4 .076-.068a1 1 0 0 1 1.338.068l4 4a1 1 0 1 1-1.414 1.414L13 6.414v2.172l3.707 3.707a1 1 0 1 1-1.414 1.414L13 11.414V20a1 1 0 1 1-2 0"
  }));
};
SvgSiUpTwoHeaded.displayName = "SvgSiUpTwoHeaded";
const ForwardRef$n = /*#__PURE__*/React.forwardRef(SvgSiUpTwoHeaded);
const Memo$n = /*#__PURE__*/React.memo(ForwardRef$n);

const SvgSiUser = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M6.25 7a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0m5.548 7.261a1 1 0 0 1 .13-.011h.144q.066 0 .13.011l7.295 1.283.038.008c1.344.31 2.788 1.163 3.069 2.82l.004.029.114.877v.002c.264 2.009-1.329 3.47-3.21 3.47a1 1 0 0 1-.124-.01h-14.9c-1.881 0-3.475-1.462-3.21-3.472l.114-.869.005-.03c.28-1.627 1.736-2.528 3.077-2.819l.029-.006z"
  }));
};
SvgSiUser.displayName = "SvgSiUser";
const ForwardRef$m = /*#__PURE__*/React.forwardRef(SvgSiUser);
const Memo$m = /*#__PURE__*/React.memo(ForwardRef$m);

const SvgSiUserAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M7 8.5c0 2.75 2.25 5 5 5s5-2.25 5-5V7c0-2.75-2.25-5-5-5S7 4.25 7 7z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M2 20.4c0 .88.72 1.6 1.6 1.6h16.78c.88 0 1.6-.72 1.6-1.6v-4.65c0-.24 0-.5-.12-.62-.37-.87-1.5-1.63-3.25-2.25-1.24 2.38-3.75 4-6.62 4s-5.37-1.62-6.62-4c-1.75.63-2.87 1.37-3.25 2.25-.12.24-.12.37-.12.62z"
  }));
};
SvgSiUserAlt.displayName = "SvgSiUserAlt";
const ForwardRef$l = /*#__PURE__*/React.forwardRef(SvgSiUserAlt);
const Memo$l = /*#__PURE__*/React.memo(ForwardRef$l);

const SvgSiUserAlt2 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12.9 14c4.474 0 8.1 3.582 8.1 8H3c0-4.418 3.626-8 8.1-8zM12 1.25A4.75 4.75 0 0 1 16.75 6v1a4.75 4.75 0 1 1-9.5 0V6A4.75 4.75 0 0 1 12 1.25"
  }));
};
SvgSiUserAlt2.displayName = "SvgSiUserAlt2";
const ForwardRef$k = /*#__PURE__*/React.forwardRef(SvgSiUserAlt2);
const Memo$k = /*#__PURE__*/React.memo(ForwardRef$k);

const SvgSiUserAlt3 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M7.25 7a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m13.5 14a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75v-4.6a3.15 3.15 0 0 1 3.15-3.15h11.2a3.15 3.15 0 0 1 3.15 3.15z"
  }));
};
SvgSiUserAlt3.displayName = "SvgSiUserAlt3";
const ForwardRef$j = /*#__PURE__*/React.forwardRef(SvgSiUserAlt3);
const Memo$j = /*#__PURE__*/React.memo(ForwardRef$j);

const SvgSiUserAlt4 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M7.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0m-5 16c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75"
  }));
};
SvgSiUserAlt4.displayName = "SvgSiUserAlt4";
const ForwardRef$i = /*#__PURE__*/React.forwardRef(SvgSiUserAlt4);
const Memo$i = /*#__PURE__*/React.memo(ForwardRef$i);

const SvgSiUserAlt5 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M6.25 7c0-3.164 2.586-5.75 5.75-5.75S17.75 3.836 17.75 7v1.5c0 3.164-2.586 5.75-5.75 5.75S6.25 11.664 6.25 8.5z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M3.6 22h16.78c.88 0 1.6-.72 1.6-1.6v-3.65c0-.24 0-.5-.12-.62-.37-.87-1.5-1.63-3.25-2.25C17.657 14.63 15 16 12 16s-5.42-1.37-6.63-2.12c-1.75.63-2.87 1.37-3.25 2.25-.12.24-.12.37-.12.62v3.65c0 .88.72 1.6 1.6 1.6"
  }));
};
SvgSiUserAlt5.displayName = "SvgSiUserAlt5";
const ForwardRef$h = /*#__PURE__*/React.forwardRef(SvgSiUserAlt5);
const Memo$h = /*#__PURE__*/React.memo(ForwardRef$h);

const SvgSiUserAlt6 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M22 18.714c0 .888-.371 1.729-1.014 2.34-.64.611-1.5.946-2.386.946H5.4a3.46 3.46 0 0 1-2.386-.945A3.23 3.23 0 0 1 2 18.714c0-1.797.75-3.51 2.067-4.765A7.16 7.16 0 0 1 9 12h6c1.841 0 3.616.696 4.933 1.95S22 16.916 22 18.713M17 6A5 5 0 1 1 7 6a5 5 0 0 1 10 0"
  }));
};
SvgSiUserAlt6.displayName = "SvgSiUserAlt6";
const ForwardRef$g = /*#__PURE__*/React.forwardRef(SvgSiUserAlt6);
const Memo$g = /*#__PURE__*/React.memo(ForwardRef$g);

const SvgSiVerified = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M21.007 8.27C22.194 9.125 23 10.45 23 12s-.806 2.876-1.993 3.73c.24 1.442-.134 2.958-1.227 4.05-1.095 1.095-2.61 1.459-4.046 1.225C14.883 22.196 13.546 23 12 23c-1.55 0-2.878-.807-3.731-1.996-1.438.235-2.954-.128-4.05-1.224-1.095-1.095-1.459-2.611-1.217-4.05C1.816 14.877 1 13.551 1 12s.816-2.878 2.002-3.73c-.242-1.439.122-2.955 1.218-4.05 1.093-1.094 2.61-1.467 4.057-1.227C9.125 1.804 10.453 1 12 1c1.545 0 2.88.803 3.732 1.993 1.442-.24 2.956.135 4.048 1.227s1.468 2.608 1.227 4.05m-4.426-.084a1 1 0 0 1 .233 1.395l-5 7a1 1 0 0 1-1.521.126l-3-3a1 1 0 0 1 1.414-1.414l2.165 2.165 4.314-6.04a1 1 0 0 1 1.395-.232",
    clipRule: "evenodd"
  }));
};
SvgSiVerified.displayName = "SvgSiVerified";
const ForwardRef$f = /*#__PURE__*/React.forwardRef(SvgSiVerified);
const Memo$f = /*#__PURE__*/React.memo(ForwardRef$f);

const SvgSiVideo = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M23.383 5.076A1 1 0 0 1 24 6v12a1 1 0 0 1-1.707.707l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.09-.217M3.4 6h8.2A2.4 2.4 0 0 1 14 8.4v7.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 15.6V8.4A2.4 2.4 0 0 1 3.4 6"
  }));
};
SvgSiVideo.displayName = "SvgSiVideo";
const ForwardRef$e = /*#__PURE__*/React.forwardRef(SvgSiVideo);
const Memo$e = /*#__PURE__*/React.memo(ForwardRef$e);

const SvgSiViewCompact = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M11 13H8v-3h3zm5 0h-3v-3h3z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v10.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 16.6V6.4A2.4 2.4 0 0 1 4.4 4M8 8V5H6v3H3v2h3v3H3v2h3v3h2v-3h3v3h2v-3h3v3h2v-3h3v-2h-3v-3h3V8h-3V5h-2v3h-3V5h-2v3z",
    clipRule: "evenodd"
  }));
};
SvgSiViewCompact.displayName = "SvgSiViewCompact";
const ForwardRef$d = /*#__PURE__*/React.forwardRef(SvgSiViewCompact);
const Memo$d = /*#__PURE__*/React.memo(ForwardRef$d);

const SvgSiViewStream = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M22 11H2v2h20z",
    clipRule: "evenodd"
  }));
};
SvgSiViewStream.displayName = "SvgSiViewStream";
const ForwardRef$c = /*#__PURE__*/React.forwardRef(SvgSiViewStream);
const Memo$c = /*#__PURE__*/React.memo(ForwardRef$c);

const SvgSiWallet = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M19 12a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H20a1 1 0 0 1-1-1"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M18.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V16h.4a2.6 2.6 0 0 0 2.6-2.6v-2.8A2.6 2.6 0 0 0 21.4 8H21V6.4A2.4 2.4 0 0 0 18.6 4m-2 6a.6.6 0 0 0-.6.6v2.8a.6.6 0 0 0 .6.6h4.8a.6.6 0 0 0 .6-.6v-2.8a.6.6 0 0 0-.6-.6z",
    clipRule: "evenodd"
  }));
};
SvgSiWallet.displayName = "SvgSiWallet";
const ForwardRef$b = /*#__PURE__*/React.forwardRef(SvgSiWallet);
const Memo$b = /*#__PURE__*/React.memo(ForwardRef$b);

const SvgSiWalletAlt = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    fill: "currentColor",
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M17.6 4H5a1 1 0 1 1 0-2h12.6C21.132 2 24 4.868 24 8.4V17a1 1 0 1 1-2 0V8.4C22 5.972 20.028 4 17.6 4"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M17.6 6H4.4C3.075 6 2 7.164 2 8.6v9.8C2 19.836 3.075 21 4.4 21h13.2c1.325 0 2.4-1.164 2.4-2.6V8.6C20 7.164 18.925 6 17.6 6m-.6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0",
    clipRule: "evenodd"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};
SvgSiWalletAlt.displayName = "SvgSiWalletAlt";
const ForwardRef$a = /*#__PURE__*/React.forwardRef(SvgSiWalletAlt);
const Memo$a = /*#__PURE__*/React.memo(ForwardRef$a);

const SvgSiWalletDetailed = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M15.995 13A1 1 0 0 0 15 14c0 .552.445 1 .995 1h.01c.55 0 .995-.448.995-1s-.445-1-.995-1z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M16.448 2h.042C18.38 2 20 3.458 20 5.38v.923c1.178.535 2 1.723 2 3.097v9.2c0 1.872-1.528 3.4-3.4 3.4H5.4A3.407 3.407 0 0 1 2 18.6V5.5A2.5 2.5 0 0 1 4.453 3zM18 5.38V6H4.5a.5.5 0 0 1-.5-.5c0-.278.222-.5.5-.5h.042l11.985-1c.87.018 1.473.672 1.473 1.38M21 11h-6.286c-.947 0-1.714.716-1.714 1.6v2.8c0 .884.768 1.6 1.714 1.6H21z",
    clipRule: "evenodd"
  }));
};
SvgSiWalletDetailed.displayName = "SvgSiWalletDetailed";
const ForwardRef$9 = /*#__PURE__*/React.forwardRef(SvgSiWalletDetailed);
const Memo$9 = /*#__PURE__*/React.memo(ForwardRef$9);

const SvgSiWarning = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10M12 7a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  }));
};
SvgSiWarning.displayName = "SvgSiWarning";
const ForwardRef$8 = /*#__PURE__*/React.forwardRef(SvgSiWarning);
const Memo$8 = /*#__PURE__*/React.memo(ForwardRef$8);

const SvgSiWebcam = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M12 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 1a9 9 0 0 0-1 17.945V21H6a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2h-5v-2.055A9.001 9.001 0 0 0 12 1m-3 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0",
    clipRule: "evenodd"
  }));
};
SvgSiWebcam.displayName = "SvgSiWebcam";
const ForwardRef$7 = /*#__PURE__*/React.forwardRef(SvgSiWebcam);
const Memo$7 = /*#__PURE__*/React.memo(ForwardRef$7);

const SvgSiWidget = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M9.2 13a1.8 1.8 0 0 1 1.8 1.8v5.4A1.8 1.8 0 0 1 9.2 22H3.8A1.8 1.8 0 0 1 2 20.2v-5.4A1.8 1.8 0 0 1 3.8 13zm8.3 0a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9M5.325 2.492a1.8 1.8 0 0 1 2.409.124l3.111 3.111a1.8 1.8 0 0 1 0 2.545l-3.111 3.111a1.8 1.8 0 0 1-2.545 0l-3.112-3.11a1.8 1.8 0 0 1 0-2.546L5.19 2.616zm12.658 8.854a1 1 0 0 1-1.063.004l.529-.85zm2.354-5.714c0-.658-.505-1.132-1.062-1.132-.388 0-.746.227-.935.598a1 1 0 0 1-1.783 0 1.06 1.06 0 0 0-.934-.598c-.557 0-1.063.477-1.063 1.132 0 .774.477 1.607 1.316 2.42.403.391.922.79 1.36 1.1q.109.077.209.143.095-.063.198-.136a14 14 0 0 0 1.39-1.117c.916-.86 1.304-1.616 1.304-2.41m2 0c0 1.467-.71 2.654-1.727 3.668l-.207.2c-.526.494-1.134.955-1.597 1.286-.234.168-.438.306-.583.402l-.173.114-.048.031-.012.009-.005.002h-.001l-.535-.844-.529.85-.006-.004-.013-.01-.05-.031-.178-.115c-.15-.098-.357-.238-.595-.407a14 14 0 0 1-1.594-1.294c-.986-.956-1.924-2.28-1.924-3.857 0-1.697 1.34-3.132 3.063-3.132.69 0 1.32.235 1.826.621a3 3 0 0 1 1.826-.621c1.722 0 3.062 1.43 3.062 3.132"
  }));
};
SvgSiWidget.displayName = "SvgSiWidget";
const ForwardRef$6 = /*#__PURE__*/React.forwardRef(SvgSiWidget);
const Memo$6 = /*#__PURE__*/React.memo(ForwardRef$6);

const SvgSiWidgetAlt1 = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M6.5 2a1 1 0 0 1 .868.504l4 7A1 1 0 0 1 10.5 11h-8a1 1 0 0 1-.868-1.496l4-7 .073-.111A1 1 0 0 1 6.5 2M11 17.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m11 2.7a1.8 1.8 0 0 1-1.8 1.8h-5.4a1.8 1.8 0 0 1-1.8-1.8v-5.4a1.8 1.8 0 0 1 1.8-1.8h5.4a1.8 1.8 0 0 1 1.8 1.8z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19.275 2.5c1.721 0 3.062 1.43 3.062 3.132 0 1.467-.711 2.654-1.727 3.668l-.208.2c-.525.494-1.133.955-1.596 1.286a22 22 0 0 1-.756.516l-.048.031-.013.009-.005.002-.002.002a1 1 0 0 1-1.062.004l-.006-.004-.014-.01-.05-.031-.177-.115a21 21 0 0 1-.596-.407 14 14 0 0 1-1.594-1.294c-.986-.956-1.923-2.28-1.923-3.857 0-1.697 1.34-3.132 3.062-3.132.692 0 1.32.235 1.826.621a3 3 0 0 1 1.826-.621m0 2c-.388 0-.747.227-.935.598a1 1 0 0 1-1.783 0 1.06 1.06 0 0 0-.935-.598c-.556 0-1.062.477-1.062 1.132 0 .774.477 1.607 1.316 2.42.403.391.922.79 1.36 1.1q.11.077.208.143.094-.063.199-.136a14 14 0 0 0 1.39-1.117c.916-.86 1.304-1.616 1.304-2.41 0-.658-.505-1.132-1.062-1.132",
    clipRule: "evenodd"
  }));
};
SvgSiWidgetAlt1.displayName = "SvgSiWidgetAlt1";
const ForwardRef$5 = /*#__PURE__*/React.forwardRef(SvgSiWidgetAlt1);
const Memo$5 = /*#__PURE__*/React.memo(ForwardRef$5);

const SvgSiWindow = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3M13 4v7h7v2h-7v7h-2v-7H4v-2h7V4z",
    clipRule: "evenodd"
  }));
};
SvgSiWindow.displayName = "SvgSiWindow";
const ForwardRef$4 = /*#__PURE__*/React.forwardRef(SvgSiWindow);
const Memo$4 = /*#__PURE__*/React.memo(ForwardRef$4);

const SvgSiWrench = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M21.764 7.035c-.076-.282-.425-.36-.631-.154l-3.082 3.08a1.2 1.2 0 0 1-1.697 0l-2.32-2.32a1.2 1.2 0 0 1 0-1.698l3.08-3.075c.206-.207.129-.556-.153-.632a6.8 6.8 0 0 0-6.589 1.748c-2.04 2.04-2.502 5.044-1.416 7.536L3.7 16.768a2.4 2.4 0 0 0 0 3.396l.14.14a2.4 2.4 0 0 0 3.393 0l5.263-5.258c2.49 1.074 5.484.606 7.518-1.43 1.787-1.783 2.362-4.307 1.75-6.581"
  }));
};
SvgSiWrench.displayName = "SvgSiWrench";
const ForwardRef$3 = /*#__PURE__*/React.forwardRef(SvgSiWrench);
const Memo$3 = /*#__PURE__*/React.memo(ForwardRef$3);

const SvgSiYouTube = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M22.54 6.42a2.77 2.77 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.77 2.77 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.77 2.77 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.77 2.77 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33M9.75 8.479v6.542l5.75-3.271z",
    clipRule: "evenodd"
  }));
};
SvgSiYouTube.displayName = "SvgSiYouTube";
const ForwardRef$2 = /*#__PURE__*/React.forwardRef(SvgSiYouTube);
const Memo$2 = /*#__PURE__*/React.memo(ForwardRef$2);

const SvgSiZoomIn = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11 19a7.97 7.97 0 0 0 4.906-1.68l4.387 4.387a1 1 0 0 0 1.414-1.414l-4.387-4.387A8 8 0 1 0 11 19m0-12a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H8a1 1 0 1 1 0-2h2V8a1 1 0 0 1 1-1",
    clipRule: "evenodd"
  }));
};
SvgSiZoomIn.displayName = "SvgSiZoomIn";
const ForwardRef$1 = /*#__PURE__*/React.forwardRef(SvgSiZoomIn);
const Memo$1 = /*#__PURE__*/React.memo(ForwardRef$1);

const SvgSiZoomOut = ({
  title,
  titleId,
  ...props
}) => {
  React.useId();
  const isTitlePresent = !!title;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24",
    "aria-hidden": !isTitlePresent,
    "aria-labelledby": titleId,
    ref: ref
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11 19a7.97 7.97 0 0 0 4.906-1.68l4.387 4.387a1 1 0 0 0 1.414-1.414l-4.387-4.387A8 8 0 1 0 11 19m-3-9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z",
    clipRule: "evenodd"
  }));
};
SvgSiZoomOut.displayName = "SvgSiZoomOut";
const ForwardRef = /*#__PURE__*/React.forwardRef(SvgSiZoomOut);
const Memo = /*#__PURE__*/React.memo(ForwardRef);

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SiActions: Memo$6k,
  SiActivity: Memo$6j,
  SiAdd: Memo$6i,
  SiAddAlarm: Memo$6h,
  SiAddCircle: Memo$6g,
  SiAddSquare: Memo$6f,
  SiAddToLibrary: Memo$6e,
  SiAddToPlaylist: Memo$6d,
  SiAi: Memo$6M,
  SiAiAlt1: Memo$6L,
  SiAiAlt2: Memo$6K,
  SiAiArchive: Memo$6J,
  SiAiBriefcase: Memo$6I,
  SiAiChat: Memo$6H,
  SiAiChecklist: Memo$6G,
  SiAiEdit: Memo$6F,
  SiAiEditAlt1: Memo$6E,
  SiAiEditAlt2: Memo$6D,
  SiAiFact: Memo$6C,
  SiAiFactAlt1: Memo$6B,
  SiAiInventory: Memo$6A,
  SiAiLock: Memo$6z,
  SiAiMonitor: Memo$6y,
  SiAiNote: Memo$6x,
  SiAiNoteAlt1: Memo$6w,
  SiAiPhone: Memo$6v,
  SiAiPhoneAlt1: Memo$6u,
  SiAiScan: Memo$6t,
  SiAiSearch: Memo$6s,
  SiAiShield: Memo$6r,
  SiAiSmartphone: Memo$6q,
  SiAiSort: Memo$6p,
  SiAiSortAlt1: Memo$6o,
  SiAiSummarize: Memo$6n,
  SiAiSummarizeAlt: Memo$6m,
  SiAiUnlock: Memo$6l,
  SiAirplane: Memo$6c,
  SiAirplaneAlt: Memo$6b,
  SiAlbum: Memo$6a,
  SiAlert: Memo$69,
  SiAlignBottomDetailed: Memo$68,
  SiAlignBottomSimple: Memo$67,
  SiAlignCenter: Memo$66,
  SiAlignHorizCenterDetailed: Memo$65,
  SiAlignHorizCenterSimple: Memo$64,
  SiAlignJustify: Memo$63,
  SiAlignLeft: Memo$62,
  SiAlignLeftDetailed: Memo$61,
  SiAlignLeftSimple: Memo$60,
  SiAlignRight: Memo$5$,
  SiAlignRightDetailed: Memo$5_,
  SiAlignRightSimple: Memo$5Z,
  SiAlignTopDetailed: Memo$5Y,
  SiAlignTopSimple: Memo$5X,
  SiAlignVertCenterDetailed: Memo$5W,
  SiAlignVertCenterSimple: Memo$5V,
  SiApple: Memo$5U,
  SiArchive: Memo$5T,
  SiArchiveAlt: Memo$5S,
  SiArrowDownward: Memo$5R,
  SiArrowDownwardCircle: Memo$5Q,
  SiArrowDownwardSquare: Memo$5P,
  SiArrowLeft: Memo$5O,
  SiArrowLeftCircle: Memo$5N,
  SiArrowLeftSquare: Memo$5M,
  SiArrowRight: Memo$5L,
  SiArrowRightCircle: Memo$5K,
  SiArrowRightSquare: Memo$5J,
  SiArrowUpward: Memo$5I,
  SiArrowUpwardCircle: Memo$5H,
  SiArrowUpwardSquare: Memo$5G,
  SiArticle: Memo$5F,
  SiAssignment: Memo$5E,
  SiAttachment: Memo$5D,
  SiBallot: Memo$5C,
  SiBarChart: Memo$5B,
  SiBarcode: Memo$5A,
  SiBarcodeScan: Memo$5z,
  SiBarcodeScanAlt: Memo$5y,
  SiBarn: Memo$5x,
  SiBin: Memo$5w,
  SiBluetooth: Memo$5v,
  SiBold: Memo$5u,
  SiBook: Memo$5t,
  SiBookmark: Memo$5s,
  SiBriefcase: Memo$5r,
  SiBriefcaseDetailed: Memo$5q,
  SiBriefcaseMedical: Memo$5p,
  SiBriefcases: Memo$5o,
  SiBuilding: Memo$5n,
  SiBuildingAlt1: Memo$5m,
  SiBuildingAlt2: Memo$5l,
  SiBuildingAlt3: Memo$5k,
  SiBus: Memo$5j,
  SiCancelPhoto: Memo$5i,
  SiCancelPresentation: Memo$5h,
  SiCastle: Memo$5g,
  SiCastleAlt1: Memo$5f,
  SiChat: Memo$5e,
  SiChatText: Memo$5d,
  SiCheck: Memo$5c,
  SiCheckAlt: Memo$5b,
  SiCheckCircle: Memo$5a,
  SiCheckSquare: Memo$59,
  SiChecklist: Memo$58,
  SiChecklistAlt: Memo$57,
  SiChevronLeft: Memo$56,
  SiChevronLeftAlt: Memo$55,
  SiChevronLeftCircle: Memo$54,
  SiChevronLeftSquare: Memo$53,
  SiChevronRight: Memo$52,
  SiChevronRightAlt: Memo$51,
  SiChevronRightCircle: Memo$50,
  SiChevronRightSquare: Memo$4$,
  SiCity: Memo$4_,
  SiClearAll: Memo$4Z,
  SiClearDay: Memo$4Y,
  SiClick: Memo$4X,
  SiClipboard: Memo$4W,
  SiClipboardAlt: Memo$4V,
  SiClipboardCheck: Memo$4U,
  SiClipboardCheckAlt: Memo$4T,
  SiClipboardFilled: Memo$4S,
  SiClipboardFilledAlt: Memo$4R,
  SiClock: Memo$4Q,
  SiClockAlt: Memo$4P,
  SiClose: Memo$4O,
  SiCloseCircle: Memo$4N,
  SiCloseSquare: Memo$4M,
  SiCloud: Memo$4L,
  SiCode: Memo$4K,
  SiCodeMuted: Memo$4J,
  SiColumns: Memo$4I,
  SiCopy: Memo$4H,
  SiCopyAlt: Memo$4G,
  SiCopyright: Memo$4F,
  SiCopyrightAlt: Memo$4E,
  SiCreditCard: Memo$4D,
  SiCreditCardDetailed: Memo$4C,
  SiCreditCardDetailedAlt: Memo$4B,
  SiCrop: Memo$4A,
  SiCrosshairDetailed: Memo$4z,
  SiCrosshairSimple: Memo$4y,
  SiDangerous: Memo$4x,
  SiDashboard: Memo$4w,
  SiDashboardCustomize: Memo$4v,
  SiDashboardHorz: Memo$4u,
  SiDashboardVert: Memo$4t,
  SiDeleteAlarm: Memo$4s,
  SiDiamondsFour: Memo$4r,
  SiDirection: Memo$4q,
  SiDirectionAlt: Memo$4p,
  SiDollar: Memo$4o,
  SiDollarAlt1: Memo$4n,
  SiDollarAlt2: Memo$4m,
  SiDoubleArrowRight: Memo$4l,
  SiDownLeft: Memo$4k,
  SiDownRight: Memo$4j,
  SiDownTwoHeaded: Memo$4i,
  SiDownloadOffline: Memo$4h,
  SiDragHandle: Memo$4g,
  SiDragIndicator: Memo$4f,
  SiDragIndicatorAlt: Memo$4e,
  SiEditDetailed: Memo$4d,
  SiEditDetailedAlt: Memo$4c,
  SiEditSimple: Memo$4b,
  SiEject: Memo$4a,
  SiEmoji: Memo$49,
  SiEmojiAlt: Memo$48,
  SiEqualizer: Memo$47,
  SiError: Memo$46,
  SiExpandLess: Memo$45,
  SiExpandLessAlt: Memo$44,
  SiExpandLessCircle: Memo$43,
  SiExpandLessSquare: Memo$42,
  SiExpandMore: Memo$41,
  SiExpandMoreAlt: Memo$40,
  SiExpandMoreCircle: Memo$3$,
  SiExpandMoreSquare: Memo$3_,
  SiEye: Memo$3Z,
  SiFactCheck: Memo$3Y,
  SiFeaturedPlaylist: Memo$3X,
  SiFileDownload: Memo$3W,
  SiFileUpload: Memo$3V,
  SiFilterList: Memo$3U,
  SiFilterListAlt: Memo$3T,
  SiFilterNone: Memo$3S,
  SiFlag: Memo$3R,
  SiFlagAlt1: Memo$3Q,
  SiFlagAlt2: Memo$3P,
  SiFlagAlt3: Memo$3O,
  SiFlagAlt4: Memo$3N,
  SiFlare: Memo$3M,
  SiFlow: Memo$3L,
  SiFlowBranch: Memo$3K,
  SiFlowCascade: Memo$3J,
  SiFlowLine: Memo$3I,
  SiFlowParallel: Memo$3H,
  SiFlowTree: Memo$3G,
  SiGarage: Memo$3F,
  SiGlobeDetailed: Memo$3E,
  SiGrid: Memo$3D,
  SiGridOn: Memo$3C,
  SiGridView: Memo$3B,
  SiHammer: Memo$3A,
  SiHammerAlt: Memo$3z,
  SiHeart: Memo$3y,
  SiHeartAlt: Memo$3x,
  SiHelp: Memo$3w,
  SiHome: Memo$3v,
  SiHomeDetailed: Memo$3u,
  SiHospital: Memo$3t,
  SiHospitalAlt1: Memo$3s,
  SiHourglass: Memo$3r,
  SiInflight: Memo$3q,
  SiInfo: Memo$3p,
  SiInput: Memo$3o,
  SiInsights: Memo$3n,
  SiInventory: Memo$3m,
  SiItalic: Memo$3l,
  SiJson: Memo$3k,
  SiJsonAlt1: Memo$3j,
  SiJsonAlt2: Memo$3i,
  SiJsonAlt3: Memo$3h,
  SiJsonAlt4: Memo$3g,
  SiJsonAlt5: Memo$3f,
  SiKey: Memo$3e,
  SiKeypad: Memo$3d,
  SiKnob: Memo$3c,
  SiLamp: Memo$3b,
  SiLanding: Memo$3a,
  SiLayers: Memo$39,
  SiLeftDown: Memo$38,
  SiLeftRight: Memo$37,
  SiLeftTwoHeaded: Memo$36,
  SiLeftUp: Memo$35,
  SiLibraryBooks: Memo$34,
  SiLightMode: Memo$33,
  SiLightning: Memo$32,
  SiLink: Memo$31,
  SiLock: Memo$30,
  SiLockAlt: Memo$2$,
  SiLockMuted: Memo$2_,
  SiMail: Memo$2Z,
  SiMap: Memo$2Y,
  SiMemory: Memo$2X,
  SiMeter: Memo$2W,
  SiMic: Memo$2V,
  SiMicDetailed: Memo$2U,
  SiMoney: Memo$2T,
  SiMonitor: Memo$2S,
  SiMonitorCheck: Memo$2R,
  SiMonitorClose: Memo$2Q,
  SiMonitorDown: Memo$2P,
  SiMonitorPause: Memo$2O,
  SiMonitorPlay: Memo$2N,
  SiMonitorStop: Memo$2M,
  SiMonitorUp: Memo$2L,
  SiMoon: Memo$2K,
  SiMoreHoriz: Memo$2J,
  SiMoreHorizCircle: Memo$2I,
  SiMoreHorizSquare: Memo$2H,
  SiMoreMutedHoriz: Memo$2G,
  SiMoreMutedHorizCircle: Memo$2F,
  SiMoreMutedHorizSquare: Memo$2E,
  SiMoreMutedVert: Memo$2D,
  SiMoreMutedVertCircle: Memo$2C,
  SiMoreMutedVertSquare: Memo$2B,
  SiMoreSquareHoriz: Memo$2A,
  SiMoreSquareVert: Memo$2z,
  SiMoreVert: Memo$2y,
  SiMoreVertCircle: Memo$2x,
  SiMoreVertSquare: Memo$2w,
  SiMove: Memo$2v,
  SiMovie: Memo$2u,
  SiNope: Memo$2t,
  SiNorthEast: Memo$2s,
  SiNorthEastCircle: Memo$2r,
  SiNorthEastEscape: Memo$2q,
  SiNorthEastEscapeAlt: Memo$2p,
  SiNorthEastSquare: Memo$2o,
  SiNorthWest: Memo$2n,
  SiNorthWestCircle: Memo$2m,
  SiNorthWestEscape: Memo$2l,
  SiNorthWestEscapeAlt: Memo$2k,
  SiNorthWestSquare: Memo$2j,
  SiNortheastSouthwest: Memo$2i,
  SiNorthwestSoutheast: Memo$2h,
  SiNotifications: Memo$2g,
  SiNotificationsAlt: Memo$2f,
  SiNotificationsAlt2: Memo$2e,
  SiNotificationsThick: Memo$2d,
  SiOctagon: Memo$2c,
  SiOctagonCheck: Memo$2b,
  SiPause: Memo$2a,
  SiPausePresentation: Memo$29,
  SiPentagon: Memo$28,
  SiPhone: Memo$27,
  SiPhoneAddCall: Memo$26,
  SiPhoneCallback: Memo$25,
  SiPhoneEnabled: Memo$24,
  SiPhoneForwarded: Memo$23,
  SiPhoneLocked: Memo$22,
  SiPhonePaused: Memo$21,
  SiPieChart: Memo$20,
  SiPin: Memo$1$,
  SiPinAlt1: Memo$1_,
  SiPinAlt2: Memo$1Z,
  SiPlay: Memo$1Y,
  SiPlayForward: Memo$1X,
  SiPlayNext: Memo$1W,
  SiPlayPrevious: Memo$1V,
  SiPlayRewind: Memo$1U,
  SiProjects: Memo$1T,
  SiProjectsAlt: Memo$1S,
  SiPullRequest: Memo$1R,
  SiQuote: Memo$1Q,
  SiRecord: Memo$1P,
  SiReleaseNotes: Memo$1O,
  SiRemove: Memo$1N,
  SiRemoveAlarm: Memo$1M,
  SiRemoveCircle: Memo$1L,
  SiRemoveFromLibrary: Memo$1K,
  SiRemoveSquare: Memo$1J,
  SiReorder: Memo$1I,
  SiReorderAlt: Memo$1H,
  SiRightTwoHeaded: Memo$1G,
  SiRocket: Memo$1F,
  SiRupee: Memo$1E,
  SiSearch: Memo$1D,
  SiSearchAlt: Memo$1C,
  SiSegment: Memo$1B,
  SiServer: Memo$1A,
  SiSettings: Memo$1z,
  SiSettingsAlt: Memo$1y,
  SiSettingsAlt2: Memo$1x,
  SiSettingsApplications: Memo$1w,
  SiSettingsCute: Memo$1v,
  SiSettingsThick: Memo$1u,
  SiShield: Memo$1t,
  SiShieldAlert: Memo$1s,
  SiShieldBad: Memo$1r,
  SiShieldHealthSafety: Memo$1q,
  SiShieldPolice: Memo$1p,
  SiShieldSecurity: Memo$1o,
  SiShieldTip: Memo$1n,
  SiShieldVerified: Memo$1m,
  SiSignIn: Memo$1l,
  SiSignInAlt: Memo$1k,
  SiSignOut: Memo$1j,
  SiSignOutAlt: Memo$1i,
  SiSmartPhone: Memo$1h,
  SiSort: Memo$1g,
  SiSortAlt: Memo$1f,
  SiSouthEast: Memo$1e,
  SiSouthEastCircle: Memo$1d,
  SiSouthEastEscape: Memo$1c,
  SiSouthEastEscapeAlt: Memo$1b,
  SiSouthEastSquare: Memo$1a,
  SiSouthWest: Memo$19,
  SiSouthWestCircle: Memo$18,
  SiSouthWestEscape: Memo$17,
  SiSouthWestEscapeAlt: Memo$16,
  SiSouthWestSquare: Memo$15,
  SiSpark: Memo$14,
  SiSpinner: Memo$13,
  SiSquare: Memo$12,
  SiStar: Memo$11,
  SiStarAlt: Memo$10,
  SiStop: Memo$$,
  SiStopCircle: Memo$_,
  SiStreetSign: Memo$Z,
  SiStrikethrough: Memo$Y,
  SiSun: Memo$X,
  SiSunSet: Memo$W,
  SiSunnySnowing: Memo$V,
  SiSwapHoriz: Memo$U,
  SiSwapVert: Memo$T,
  SiSwatch: Memo$S,
  SiTable: Memo$R,
  SiTableColumns: Memo$Q,
  SiTableRows: Memo$P,
  SiTakeoff: Memo$O,
  SiTarget: Memo$N,
  SiTaxiing: Memo$M,
  SiTerminal: Memo$L,
  SiTerminalAlt: Memo$K,
  SiText: Memo$J,
  SiThumbDown: Memo$I,
  SiThumbDownAlt1: Memo$H,
  SiThumbDownAlt2: Memo$G,
  SiThumbUp: Memo$F,
  SiThumbUpAlt1: Memo$E,
  SiThumbUpAlt2: Memo$D,
  SiTicket: Memo$C,
  SiTicketAlt1: Memo$B,
  SiToggleOff: Memo$A,
  SiToggleOn: Memo$z,
  SiTrafficCone: Memo$y,
  SiTrain: Memo$x,
  SiTwitter: Memo$w,
  SiUmbrella: Memo$v,
  SiUnderline: Memo$u,
  SiUnfoldMore: Memo$t,
  SiUnlink: Memo$s,
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

exports.Memo = Memo$6M;
exports.Memo$1 = Memo$6L;
exports.Memo$10 = Memo$6C;
exports.Memo$100 = Memo$5c;
exports.Memo$101 = Memo$5b;
exports.Memo$102 = Memo$5a;
exports.Memo$103 = Memo$59;
exports.Memo$104 = Memo$58;
exports.Memo$105 = Memo$57;
exports.Memo$106 = Memo$56;
exports.Memo$107 = Memo$55;
exports.Memo$108 = Memo$54;
exports.Memo$109 = Memo$53;
exports.Memo$11 = Memo$6B;
exports.Memo$110 = Memo$52;
exports.Memo$111 = Memo$51;
exports.Memo$112 = Memo$50;
exports.Memo$113 = Memo$4$;
exports.Memo$114 = Memo$4_;
exports.Memo$115 = Memo$4Z;
exports.Memo$116 = Memo$4Y;
exports.Memo$117 = Memo$4X;
exports.Memo$118 = Memo$4W;
exports.Memo$119 = Memo$4V;
exports.Memo$12 = Memo$6A;
exports.Memo$120 = Memo$4U;
exports.Memo$121 = Memo$4T;
exports.Memo$122 = Memo$4S;
exports.Memo$123 = Memo$4R;
exports.Memo$124 = Memo$4Q;
exports.Memo$125 = Memo$4P;
exports.Memo$126 = Memo$4O;
exports.Memo$127 = Memo$4N;
exports.Memo$128 = Memo$4M;
exports.Memo$129 = Memo$4L;
exports.Memo$13 = Memo$6z;
exports.Memo$130 = Memo$4K;
exports.Memo$131 = Memo$4J;
exports.Memo$132 = Memo$4I;
exports.Memo$133 = Memo$4H;
exports.Memo$134 = Memo$4G;
exports.Memo$135 = Memo$4F;
exports.Memo$136 = Memo$4E;
exports.Memo$137 = Memo$4D;
exports.Memo$138 = Memo$4C;
exports.Memo$139 = Memo$4B;
exports.Memo$14 = Memo$6y;
exports.Memo$140 = Memo$4A;
exports.Memo$141 = Memo$4z;
exports.Memo$142 = Memo$4y;
exports.Memo$143 = Memo$4x;
exports.Memo$144 = Memo$4w;
exports.Memo$145 = Memo$4v;
exports.Memo$146 = Memo$4u;
exports.Memo$147 = Memo$4t;
exports.Memo$148 = Memo$4s;
exports.Memo$149 = Memo$4r;
exports.Memo$15 = Memo$6x;
exports.Memo$150 = Memo$4q;
exports.Memo$151 = Memo$4p;
exports.Memo$152 = Memo$4o;
exports.Memo$153 = Memo$4n;
exports.Memo$154 = Memo$4m;
exports.Memo$155 = Memo$4l;
exports.Memo$156 = Memo$4k;
exports.Memo$157 = Memo$4j;
exports.Memo$158 = Memo$4i;
exports.Memo$159 = Memo$4h;
exports.Memo$16 = Memo$6w;
exports.Memo$160 = Memo$4g;
exports.Memo$161 = Memo$4f;
exports.Memo$162 = Memo$4e;
exports.Memo$163 = Memo$4d;
exports.Memo$164 = Memo$4c;
exports.Memo$165 = Memo$4b;
exports.Memo$166 = Memo$4a;
exports.Memo$167 = Memo$49;
exports.Memo$168 = Memo$48;
exports.Memo$169 = Memo$47;
exports.Memo$17 = Memo$6v;
exports.Memo$170 = Memo$46;
exports.Memo$171 = Memo$45;
exports.Memo$172 = Memo$44;
exports.Memo$173 = Memo$43;
exports.Memo$174 = Memo$42;
exports.Memo$175 = Memo$41;
exports.Memo$176 = Memo$40;
exports.Memo$177 = Memo$3$;
exports.Memo$178 = Memo$3_;
exports.Memo$179 = Memo$3Z;
exports.Memo$18 = Memo$6u;
exports.Memo$180 = Memo$3Y;
exports.Memo$181 = Memo$3X;
exports.Memo$182 = Memo$3W;
exports.Memo$183 = Memo$3V;
exports.Memo$184 = Memo$3U;
exports.Memo$185 = Memo$3T;
exports.Memo$186 = Memo$3S;
exports.Memo$187 = Memo$3R;
exports.Memo$188 = Memo$3Q;
exports.Memo$189 = Memo$3P;
exports.Memo$19 = Memo$6t;
exports.Memo$190 = Memo$3O;
exports.Memo$191 = Memo$3N;
exports.Memo$192 = Memo$3M;
exports.Memo$193 = Memo$3L;
exports.Memo$194 = Memo$3K;
exports.Memo$195 = Memo$3J;
exports.Memo$196 = Memo$3I;
exports.Memo$197 = Memo$3H;
exports.Memo$198 = Memo$3G;
exports.Memo$199 = Memo$3F;
exports.Memo$2 = Memo$6K;
exports.Memo$20 = Memo$6s;
exports.Memo$200 = Memo$3E;
exports.Memo$201 = Memo$3D;
exports.Memo$202 = Memo$3C;
exports.Memo$203 = Memo$3B;
exports.Memo$204 = Memo$3A;
exports.Memo$205 = Memo$3z;
exports.Memo$206 = Memo$3y;
exports.Memo$207 = Memo$3x;
exports.Memo$208 = Memo$3w;
exports.Memo$209 = Memo$3v;
exports.Memo$21 = Memo$6r;
exports.Memo$210 = Memo$3u;
exports.Memo$211 = Memo$3t;
exports.Memo$212 = Memo$3s;
exports.Memo$213 = Memo$3r;
exports.Memo$214 = Memo$3q;
exports.Memo$215 = Memo$3p;
exports.Memo$216 = Memo$3o;
exports.Memo$217 = Memo$3n;
exports.Memo$218 = Memo$3m;
exports.Memo$219 = Memo$3l;
exports.Memo$22 = Memo$6q;
exports.Memo$220 = Memo$3k;
exports.Memo$221 = Memo$3j;
exports.Memo$222 = Memo$3i;
exports.Memo$223 = Memo$3h;
exports.Memo$224 = Memo$3g;
exports.Memo$225 = Memo$3f;
exports.Memo$226 = Memo$3e;
exports.Memo$227 = Memo$3d;
exports.Memo$228 = Memo$3c;
exports.Memo$229 = Memo$3b;
exports.Memo$23 = Memo$6p;
exports.Memo$230 = Memo$3a;
exports.Memo$231 = Memo$39;
exports.Memo$232 = Memo$38;
exports.Memo$233 = Memo$37;
exports.Memo$234 = Memo$36;
exports.Memo$235 = Memo$35;
exports.Memo$236 = Memo$34;
exports.Memo$237 = Memo$33;
exports.Memo$238 = Memo$32;
exports.Memo$239 = Memo$31;
exports.Memo$24 = Memo$6o;
exports.Memo$240 = Memo$30;
exports.Memo$241 = Memo$2$;
exports.Memo$242 = Memo$2_;
exports.Memo$243 = Memo$2Z;
exports.Memo$244 = Memo$2Y;
exports.Memo$245 = Memo$2X;
exports.Memo$246 = Memo$2W;
exports.Memo$247 = Memo$2V;
exports.Memo$248 = Memo$2U;
exports.Memo$249 = Memo$2T;
exports.Memo$25 = Memo$6n;
exports.Memo$250 = Memo$2S;
exports.Memo$251 = Memo$2R;
exports.Memo$252 = Memo$2Q;
exports.Memo$253 = Memo$2P;
exports.Memo$254 = Memo$2O;
exports.Memo$255 = Memo$2N;
exports.Memo$256 = Memo$2M;
exports.Memo$257 = Memo$2L;
exports.Memo$258 = Memo$2K;
exports.Memo$259 = Memo$2J;
exports.Memo$26 = Memo$6m;
exports.Memo$260 = Memo$2I;
exports.Memo$261 = Memo$2H;
exports.Memo$262 = Memo$2G;
exports.Memo$263 = Memo$2F;
exports.Memo$264 = Memo$2E;
exports.Memo$265 = Memo$2D;
exports.Memo$266 = Memo$2C;
exports.Memo$267 = Memo$2B;
exports.Memo$268 = Memo$2A;
exports.Memo$269 = Memo$2z;
exports.Memo$27 = Memo$6l;
exports.Memo$270 = Memo$2y;
exports.Memo$271 = Memo$2x;
exports.Memo$272 = Memo$2w;
exports.Memo$273 = Memo$2v;
exports.Memo$274 = Memo$2u;
exports.Memo$275 = Memo$2t;
exports.Memo$276 = Memo$2s;
exports.Memo$277 = Memo$2r;
exports.Memo$278 = Memo$2q;
exports.Memo$279 = Memo$2p;
exports.Memo$28 = Memo$6k;
exports.Memo$280 = Memo$2o;
exports.Memo$281 = Memo$2n;
exports.Memo$282 = Memo$2m;
exports.Memo$283 = Memo$2l;
exports.Memo$284 = Memo$2k;
exports.Memo$285 = Memo$2j;
exports.Memo$286 = Memo$2i;
exports.Memo$287 = Memo$2h;
exports.Memo$288 = Memo$2g;
exports.Memo$289 = Memo$2f;
exports.Memo$29 = Memo$6j;
exports.Memo$290 = Memo$2e;
exports.Memo$291 = Memo$2d;
exports.Memo$292 = Memo$2c;
exports.Memo$293 = Memo$2b;
exports.Memo$294 = Memo$2a;
exports.Memo$295 = Memo$29;
exports.Memo$296 = Memo$28;
exports.Memo$297 = Memo$27;
exports.Memo$298 = Memo$26;
exports.Memo$299 = Memo$25;
exports.Memo$3 = Memo$6J;
exports.Memo$30 = Memo$6i;
exports.Memo$300 = Memo$24;
exports.Memo$301 = Memo$23;
exports.Memo$302 = Memo$22;
exports.Memo$303 = Memo$21;
exports.Memo$304 = Memo$20;
exports.Memo$305 = Memo$1$;
exports.Memo$306 = Memo$1_;
exports.Memo$307 = Memo$1Z;
exports.Memo$308 = Memo$1Y;
exports.Memo$309 = Memo$1X;
exports.Memo$31 = Memo$6h;
exports.Memo$310 = Memo$1W;
exports.Memo$311 = Memo$1V;
exports.Memo$312 = Memo$1U;
exports.Memo$313 = Memo$1T;
exports.Memo$314 = Memo$1S;
exports.Memo$315 = Memo$1R;
exports.Memo$316 = Memo$1Q;
exports.Memo$317 = Memo$1P;
exports.Memo$318 = Memo$1O;
exports.Memo$319 = Memo$1N;
exports.Memo$32 = Memo$6g;
exports.Memo$320 = Memo$1M;
exports.Memo$321 = Memo$1L;
exports.Memo$322 = Memo$1K;
exports.Memo$323 = Memo$1J;
exports.Memo$324 = Memo$1I;
exports.Memo$325 = Memo$1H;
exports.Memo$326 = Memo$1G;
exports.Memo$327 = Memo$1F;
exports.Memo$328 = Memo$1E;
exports.Memo$329 = Memo$1D;
exports.Memo$33 = Memo$6f;
exports.Memo$330 = Memo$1C;
exports.Memo$331 = Memo$1B;
exports.Memo$332 = Memo$1A;
exports.Memo$333 = Memo$1z;
exports.Memo$334 = Memo$1y;
exports.Memo$335 = Memo$1x;
exports.Memo$336 = Memo$1w;
exports.Memo$337 = Memo$1v;
exports.Memo$338 = Memo$1u;
exports.Memo$339 = Memo$1t;
exports.Memo$34 = Memo$6e;
exports.Memo$340 = Memo$1s;
exports.Memo$341 = Memo$1r;
exports.Memo$342 = Memo$1q;
exports.Memo$343 = Memo$1p;
exports.Memo$344 = Memo$1o;
exports.Memo$345 = Memo$1n;
exports.Memo$346 = Memo$1m;
exports.Memo$347 = Memo$1l;
exports.Memo$348 = Memo$1k;
exports.Memo$349 = Memo$1j;
exports.Memo$35 = Memo$6d;
exports.Memo$350 = Memo$1i;
exports.Memo$351 = Memo$1h;
exports.Memo$352 = Memo$1g;
exports.Memo$353 = Memo$1f;
exports.Memo$354 = Memo$1e;
exports.Memo$355 = Memo$1d;
exports.Memo$356 = Memo$1c;
exports.Memo$357 = Memo$1b;
exports.Memo$358 = Memo$1a;
exports.Memo$359 = Memo$19;
exports.Memo$36 = Memo$6c;
exports.Memo$360 = Memo$18;
exports.Memo$361 = Memo$17;
exports.Memo$362 = Memo$16;
exports.Memo$363 = Memo$15;
exports.Memo$364 = Memo$14;
exports.Memo$365 = Memo$13;
exports.Memo$366 = Memo$12;
exports.Memo$367 = Memo$11;
exports.Memo$368 = Memo$10;
exports.Memo$369 = Memo$$;
exports.Memo$37 = Memo$6b;
exports.Memo$370 = Memo$_;
exports.Memo$371 = Memo$Z;
exports.Memo$372 = Memo$Y;
exports.Memo$373 = Memo$X;
exports.Memo$374 = Memo$W;
exports.Memo$375 = Memo$V;
exports.Memo$376 = Memo$U;
exports.Memo$377 = Memo$T;
exports.Memo$378 = Memo$S;
exports.Memo$379 = Memo$R;
exports.Memo$38 = Memo$6a;
exports.Memo$380 = Memo$Q;
exports.Memo$381 = Memo$P;
exports.Memo$382 = Memo$O;
exports.Memo$383 = Memo$N;
exports.Memo$384 = Memo$M;
exports.Memo$385 = Memo$L;
exports.Memo$386 = Memo$K;
exports.Memo$387 = Memo$J;
exports.Memo$388 = Memo$I;
exports.Memo$389 = Memo$H;
exports.Memo$39 = Memo$69;
exports.Memo$390 = Memo$G;
exports.Memo$391 = Memo$F;
exports.Memo$392 = Memo$E;
exports.Memo$393 = Memo$D;
exports.Memo$394 = Memo$C;
exports.Memo$395 = Memo$B;
exports.Memo$396 = Memo$A;
exports.Memo$397 = Memo$z;
exports.Memo$398 = Memo$y;
exports.Memo$399 = Memo$x;
exports.Memo$4 = Memo$6I;
exports.Memo$40 = Memo$68;
exports.Memo$400 = Memo$w;
exports.Memo$401 = Memo$v;
exports.Memo$402 = Memo$u;
exports.Memo$403 = Memo$t;
exports.Memo$404 = Memo$s;
exports.Memo$405 = Memo$r;
exports.Memo$406 = Memo$q;
exports.Memo$407 = Memo$p;
exports.Memo$408 = Memo$o;
exports.Memo$409 = Memo$n;
exports.Memo$41 = Memo$67;
exports.Memo$410 = Memo$m;
exports.Memo$411 = Memo$l;
exports.Memo$412 = Memo$k;
exports.Memo$413 = Memo$j;
exports.Memo$414 = Memo$i;
exports.Memo$415 = Memo$h;
exports.Memo$416 = Memo$g;
exports.Memo$417 = Memo$f;
exports.Memo$418 = Memo$e;
exports.Memo$419 = Memo$d;
exports.Memo$42 = Memo$66;
exports.Memo$420 = Memo$c;
exports.Memo$421 = Memo$b;
exports.Memo$422 = Memo$a;
exports.Memo$423 = Memo$9;
exports.Memo$424 = Memo$8;
exports.Memo$425 = Memo$7;
exports.Memo$426 = Memo$6;
exports.Memo$427 = Memo$5;
exports.Memo$428 = Memo$4;
exports.Memo$429 = Memo$3;
exports.Memo$43 = Memo$65;
exports.Memo$430 = Memo$2;
exports.Memo$431 = Memo$1;
exports.Memo$432 = Memo;
exports.Memo$44 = Memo$64;
exports.Memo$45 = Memo$63;
exports.Memo$46 = Memo$62;
exports.Memo$47 = Memo$61;
exports.Memo$48 = Memo$60;
exports.Memo$49 = Memo$5$;
exports.Memo$5 = Memo$6H;
exports.Memo$50 = Memo$5_;
exports.Memo$51 = Memo$5Z;
exports.Memo$52 = Memo$5Y;
exports.Memo$53 = Memo$5X;
exports.Memo$54 = Memo$5W;
exports.Memo$55 = Memo$5V;
exports.Memo$56 = Memo$5U;
exports.Memo$57 = Memo$5T;
exports.Memo$58 = Memo$5S;
exports.Memo$59 = Memo$5R;
exports.Memo$6 = Memo$6G;
exports.Memo$60 = Memo$5Q;
exports.Memo$61 = Memo$5P;
exports.Memo$62 = Memo$5O;
exports.Memo$63 = Memo$5N;
exports.Memo$64 = Memo$5M;
exports.Memo$65 = Memo$5L;
exports.Memo$66 = Memo$5K;
exports.Memo$67 = Memo$5J;
exports.Memo$68 = Memo$5I;
exports.Memo$69 = Memo$5H;
exports.Memo$7 = Memo$6F;
exports.Memo$70 = Memo$5G;
exports.Memo$71 = Memo$5F;
exports.Memo$72 = Memo$5E;
exports.Memo$73 = Memo$5D;
exports.Memo$74 = Memo$5C;
exports.Memo$75 = Memo$5B;
exports.Memo$76 = Memo$5A;
exports.Memo$77 = Memo$5z;
exports.Memo$78 = Memo$5y;
exports.Memo$79 = Memo$5x;
exports.Memo$8 = Memo$6E;
exports.Memo$80 = Memo$5w;
exports.Memo$81 = Memo$5v;
exports.Memo$82 = Memo$5u;
exports.Memo$83 = Memo$5t;
exports.Memo$84 = Memo$5s;
exports.Memo$85 = Memo$5r;
exports.Memo$86 = Memo$5q;
exports.Memo$87 = Memo$5p;
exports.Memo$88 = Memo$5o;
exports.Memo$89 = Memo$5n;
exports.Memo$9 = Memo$6D;
exports.Memo$90 = Memo$5m;
exports.Memo$91 = Memo$5l;
exports.Memo$92 = Memo$5k;
exports.Memo$93 = Memo$5j;
exports.Memo$94 = Memo$5i;
exports.Memo$95 = Memo$5h;
exports.Memo$96 = Memo$5g;
exports.Memo$97 = Memo$5f;
exports.Memo$98 = Memo$5e;
exports.Memo$99 = Memo$5d;
exports.index = index;
