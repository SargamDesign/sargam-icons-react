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

const SvgSiActions = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-5 0L9 7.5v9l8-4.5Z",
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
    d: "m9 7.5 8 4.5-8 4.5v-9Z"
  }));
};

const SvgSiAdd = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiAddAlarm = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M8 13h8m-4 4V9m6-6 3 3M3 6l3-3m14 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
  }));
};

const SvgSiAddCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M8 12h8m-4 4V8m10 4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));
};

const SvgSiAddSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M8 12h8m-4 4V8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiAddToLibrary = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M20 22H8.4C5.42 22 3 19.58 3 16.6V5m11 10V7m4 4h-8M8.4 3h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3Z"
  }));
};

const SvgSiAddToPlaylist = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiAlbum = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-6 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
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
};

const SvgSiAlert = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M10.575 5.217 3.517 17a1.667 1.667 0 0 0 1.425 2.5h14.116a1.666 1.666 0 0 0 1.425-2.5L13.425 5.217a1.666 1.666 0 0 0-2.85 0Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 16h.008M12 10v3m-1.425-7.783L3.517 17a1.667 1.667 0 0 0 1.425 2.5h14.116a1.666 1.666 0 0 0 1.425-2.5L13.425 5.217a1.666 1.666 0 0 0-2.85 0Z"
  }));
};

const SvgSiAlignBottomDetailed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M17.4 10h-1.8a1.6 1.6 0 0 0-1.6 1.6v4.8a1.6 1.6 0 0 0 1.6 1.6h1.8a1.6 1.6 0 0 0 1.6-1.6v-4.8a1.6 1.6 0 0 0-1.6-1.6Zm-9-8H6.6A1.6 1.6 0 0 0 5 3.6v12.8A1.6 1.6 0 0 0 6.6 18h1.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 8.4 2Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M2 22h20m-6.4-12h1.8a1.6 1.6 0 0 1 1.6 1.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6v-4.8a1.6 1.6 0 0 1 1.6-1.6Zm-9-8h1.8A1.6 1.6 0 0 1 10 3.6v12.8A1.6 1.6 0 0 1 8.4 18H6.6A1.6 1.6 0 0 1 5 16.4V3.6A1.6 1.6 0 0 1 6.6 2Z"
  }));
};

const SvgSiAlignBottomSimple = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M13.4 2h-2.8A1.6 1.6 0 0 0 9 3.6v12.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 13.4 2Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M2 22h20M10.6 2h2.8A1.6 1.6 0 0 1 15 3.6v12.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 16.4V3.6A1.6 1.6 0 0 1 10.6 2Z"
  }));
};

const SvgSiAlignCenter = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiAlignHorizCenterDetailed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M16 17.4v-1.8a1.6 1.6 0 0 0-1.6-1.6H9.6A1.6 1.6 0 0 0 8 15.6v1.8A1.6 1.6 0 0 0 9.6 19h4.8a1.6 1.6 0 0 0 1.6-1.6Zm4-9V6.6A1.6 1.6 0 0 0 18.4 5H5.6A1.6 1.6 0 0 0 4 6.6v1.8A1.6 1.6 0 0 0 5.6 10h12.8A1.6 1.6 0 0 0 20 8.4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 2v3m0 5v4m0 5v3m4-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6H9.6A1.6 1.6 0 0 1 8 17.4v-1.8A1.6 1.6 0 0 1 9.6 14h4.8a1.6 1.6 0 0 1 1.6 1.6Zm4-9v1.8a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 8.4V6.6A1.6 1.6 0 0 1 5.6 5h12.8A1.6 1.6 0 0 1 20 6.6Z"
  }));
};

const SvgSiAlignHorizCenterSimple = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M20 13.4v-2.8A1.6 1.6 0 0 0 18.4 9H5.6A1.6 1.6 0 0 0 4 10.6v2.8A1.6 1.6 0 0 0 5.6 15h12.8a1.6 1.6 0 0 0 1.6-1.6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 2v7m0 6v7m8-11.4v2.8a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 13.4v-2.8A1.6 1.6 0 0 1 5.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6Z"
  }));
};

const SvgSiAlignJustify = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiAlignLeft = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiAlignLeftDetailed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M22 6.6v1.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 8.4V6.6A1.6 1.6 0 0 1 7.6 5h12.8A1.6 1.6 0 0 1 22 6.6Zm-8 9v1.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 17.4v-1.8A1.6 1.6 0 0 1 7.6 14h4.8a1.6 1.6 0 0 1 1.6 1.6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M2 2v20m12-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 17.4v-1.8A1.6 1.6 0 0 1 7.6 14h4.8a1.6 1.6 0 0 1 1.6 1.6Zm8-9v1.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 8.4V6.6A1.6 1.6 0 0 1 7.6 5h12.8A1.6 1.6 0 0 1 22 6.6Z"
  }));
};

const SvgSiAlignLeftSimple = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M22 13.4v-2.8A1.6 1.6 0 0 0 20.4 9H7.6A1.6 1.6 0 0 0 6 10.6v2.8A1.6 1.6 0 0 0 7.6 15h12.8a1.6 1.6 0 0 0 1.6-1.6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M2 2v20m20-11.4v2.8a1.6 1.6 0 0 1-1.6 1.6H7.6A1.6 1.6 0 0 1 6 13.4v-2.8A1.6 1.6 0 0 1 7.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6Z"
  }));
};

const SvgSiAlignRight = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiAlignRightDetailed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18 17.4v-1.8a1.6 1.6 0 0 0-1.6-1.6h-4.8a1.6 1.6 0 0 0-1.6 1.6v1.8a1.6 1.6 0 0 0 1.6 1.6h4.8a1.6 1.6 0 0 0 1.6-1.6Zm0-9V6.6A1.6 1.6 0 0 0 16.4 5H3.6A1.6 1.6 0 0 0 2 6.6v1.8A1.6 1.6 0 0 0 3.6 10h12.8A1.6 1.6 0 0 0 18 8.4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M22 2v20m-4-6.4v1.8a1.6 1.6 0 0 1-1.6 1.6h-4.8a1.6 1.6 0 0 1-1.6-1.6v-1.8a1.6 1.6 0 0 1 1.6-1.6h4.8a1.6 1.6 0 0 1 1.6 1.6Zm0-9v1.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 8.4V6.6A1.6 1.6 0 0 1 3.6 5h12.8A1.6 1.6 0 0 1 18 6.6Z"
  }));
};

const SvgSiAlignRightSimple = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M2 10.6v2.8A1.6 1.6 0 0 0 3.6 15h12.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 16.4 9H3.6A1.6 1.6 0 0 0 2 10.6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M22 22V2M2 13.4v-2.8A1.6 1.6 0 0 1 3.6 9h12.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6H3.6A1.6 1.6 0 0 1 2 13.4Z"
  }));
};

const SvgSiAlignTopDetailed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M17.4 6h-1.8A1.6 1.6 0 0 0 14 7.6v4.8a1.6 1.6 0 0 0 1.6 1.6h1.8a1.6 1.6 0 0 0 1.6-1.6V7.6A1.6 1.6 0 0 0 17.4 6Zm-9 0H6.6A1.6 1.6 0 0 0 5 7.6v12.8A1.6 1.6 0 0 0 6.6 22h1.8a1.6 1.6 0 0 0 1.6-1.6V7.6A1.6 1.6 0 0 0 8.4 6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M2 2h20m-6.4 4h1.8A1.6 1.6 0 0 1 19 7.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6V7.6A1.6 1.6 0 0 1 15.6 6Zm-9 0h1.8A1.6 1.6 0 0 1 10 7.6v12.8A1.6 1.6 0 0 1 8.4 22H6.6A1.6 1.6 0 0 1 5 20.4V7.6A1.6 1.6 0 0 1 6.6 6Z"
  }));
};

const SvgSiAlignTopSimple = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M13.4 6h-2.8A1.6 1.6 0 0 0 9 7.6v12.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6V7.6A1.6 1.6 0 0 0 13.4 6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M2 2h20M10.6 6h2.8A1.6 1.6 0 0 1 15 7.6v12.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 20.4V7.6A1.6 1.6 0 0 1 10.6 6Z"
  }));
};

const SvgSiAlignVertCenterDetailed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M17.4 8h-1.8A1.6 1.6 0 0 0 14 9.6v4.8a1.6 1.6 0 0 0 1.6 1.6h1.8a1.6 1.6 0 0 0 1.6-1.6V9.6A1.6 1.6 0 0 0 17.4 8Zm-9-4H6.6A1.6 1.6 0 0 0 5 5.6v12.8A1.6 1.6 0 0 0 6.6 20h1.8a1.6 1.6 0 0 0 1.6-1.6V5.6A1.6 1.6 0 0 0 8.4 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M2 12h3m14 0h3m-12 0h4m1.6-4h1.8A1.6 1.6 0 0 1 19 9.6v4.8a1.6 1.6 0 0 1-1.6 1.6h-1.8a1.6 1.6 0 0 1-1.6-1.6V9.6A1.6 1.6 0 0 1 15.6 8Zm-9-4h1.8A1.6 1.6 0 0 1 10 5.6v12.8A1.6 1.6 0 0 1 8.4 20H6.6A1.6 1.6 0 0 1 5 18.4V5.6A1.6 1.6 0 0 1 6.6 4Z"
  }));
};

const SvgSiAlignVertCenterSimple = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M13.4 4h-2.8A1.6 1.6 0 0 0 9 5.6v12.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6V5.6A1.6 1.6 0 0 0 13.4 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M2 12h7m6 0h7M10.6 4h2.8A1.6 1.6 0 0 1 15 5.6v12.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 18.4V5.6A1.6 1.6 0 0 1 10.6 4Z"
  }));
};

const SvgSiApple = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M19.764 8.819c-.116.09-2.165 1.244-2.165 3.81 0 2.968 2.607 4.019 2.685 4.045-.012.064-.414 1.438-1.374 2.838-.857 1.232-1.75 2.462-3.11 2.462-1.361 0-1.711-.79-3.281-.79-1.53 0-2.074.816-3.318.816-1.245 0-2.113-1.14-3.11-2.54C4.933 17.816 4 15.26 4 12.837c0-3.888 2.528-5.95 5.017-5.95 1.322 0 2.424.868 3.254.868.79 0 2.022-.92 3.526-.92.57 0 2.618.051 3.967 1.984Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M19.764 8.819c-.116.09-2.165 1.244-2.165 3.81 0 2.968 2.607 4.019 2.685 4.045-.012.064-.414 1.438-1.374 2.838-.857 1.232-1.75 2.462-3.11 2.462-1.361 0-1.711-.79-3.281-.79-1.53 0-2.074.816-3.318.816-1.245 0-2.113-1.14-3.11-2.54C4.933 17.816 4 15.26 4 12.837c0-3.888 2.528-5.95 5.017-5.95 1.322 0 2.424.868 3.254.868.79 0 2.022-.92 3.526-.92.57 0 2.618.051 3.967 1.984Zm-4.681-3.631c.622-.738 1.062-1.762 1.062-2.786A1.92 1.92 0 0 0 16.107 2c-1.012.038-2.216.674-2.942 1.516-.57.648-1.102 1.672-1.102 2.71 0 .156.026.312.038.362.064.012.168.026.272.026.908 0 2.05-.608 2.71-1.426Z"
  }));
};

const SvgSiArchive = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M16.75 7h-9.5v2.2c0 .856.694 1.55 1.55 1.55h6.4a1.55 1.55 0 0 0 1.55-1.55V7Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m21 7-1 11.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3 7m18.4-4H2.6A1.6 1.6 0 0 0 1 4.6v.8A1.6 1.6 0 0 0 2.6 7h18.8A1.6 1.6 0 0 0 23 5.4v-.8A1.6 1.6 0 0 0 21.4 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M15.2 10a.8.8 0 0 0 .8-.8V7H8v2.2a.8.8 0 0 0 .8.8h6.4Z"
  }));
};

const SvgSiArchiveAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
    d: "m21 7-1 11.6c0 1.33-1.07 2.4-2.4 2.4H6.4C5.07 21 4 19.93 4 18.6L3 7m12 10-6-6m6 0-6 6M2.6 3h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3Z"
  }));
};

const SvgSiArrowDownward = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiArrowDownwardCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M8.53 11.47a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM12 16l-.53.53a.75.75 0 0 0 1.06 0L12 16Zm4.53-3.47a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM12.75 8a.75.75 0 0 0-1.5 0h1.5Zm8.5 4A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5Zm-4.53 9.78 4 4 1.06-1.06-4-4-1.06 1.06Zm5.06 4 4-4-1.06-1.06-4 4 1.06 1.06Zm.22-.53V8h-1.5v8h1.5Z"
  }));
};

const SvgSiArrowDownwardSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m8 12 4 4m0 0 4-4m-4 4V8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiArrowLeft = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiArrowLeftCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
    d: "m12 16-4-4m0 0 4-4m-4 4h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));
};

const SvgSiArrowLeftSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
    d: "m12 16-4-4m0 0 4-4m-4 4h8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiArrowRight = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiArrowRightCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m12 16 4-4m0 0-4-4m4 4H8m14 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));
};

const SvgSiArrowRightSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m12 16 4-4m0 0-4-4m4 4H8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiArrowUpward = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiArrowUpwardCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m8 12 4-4m0 0 4 4m-4-4v8m10-4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));
};

const SvgSiArrowUpwardSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m8 12 4-4m0 0 4 4m-4-4v8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiArticle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M19.6 4H4.4A2.4 2.4 0 0 0 2 6.4v11.2A2.4 2.4 0 0 0 4.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 19.6 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M8 12h8m-8 3h4M8 9h8M4.4 4h15.2A2.4 2.4 0 0 1 22 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 17.6V6.4A2.4 2.4 0 0 1 4.4 4Z"
  }));
};

const SvgSiAssignment = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M16 5.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V3h8v2.2Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M7 14h10M7 11h10M7 17h6M10 3a2 2 0 1 1 4 0M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3ZM16 5.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V3h8v2.2Z"
  }));
};

const SvgSiBallot = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 15h5m-5-6h5M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3ZM9 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};

const SvgSiBarcode = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiBarcodeScan = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiBarcodeScanAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#si_Barcode_scan_alt_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M5.6 4h2.8A1.6 1.6 0 0 1 10 5.6v2.8A1.6 1.6 0 0 1 8.4 10H5.6A1.6 1.6 0 0 1 4 8.4V5.6A1.6 1.6 0 0 1 5.6 4Zm10 10h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8a1.6 1.6 0 0 1-1.6-1.6v-2.8a1.6 1.6 0 0 1 1.6-1.6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M5 23H3.4A2.4 2.4 0 0 1 1 20.6V19m18 4h1.6a2.4 2.4 0 0 0 2.4-2.4V19m0-14V3.4A2.4 2.4 0 0 0 20.6 1H19M5 1H3.4A2.4 2.4 0 0 0 1 3.4V5m4.6-1h2.8A1.6 1.6 0 0 1 10 5.6v2.8A1.6 1.6 0 0 1 8.4 10H5.6A1.6 1.6 0 0 1 4 8.4V5.6A1.6 1.6 0 0 1 5.6 4Zm0 10h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8A1.6 1.6 0 0 1 8.4 20H5.6A1.6 1.6 0 0 1 4 18.4v-2.8A1.6 1.6 0 0 1 5.6 14Zm10-10h2.8A1.6 1.6 0 0 1 20 5.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 14 8.4V5.6A1.6 1.6 0 0 1 15.6 4Zm0 10h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8a1.6 1.6 0 0 1-1.6-1.6v-2.8a1.6 1.6 0 0 1 1.6-1.6Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "si_Barcode_scan_alt_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

const SvgSiBookmark = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M12 17.025c-.142 0-.341.072-.588.208a7.187 7.187 0 0 0-.835.56c-.614.464-1.317 1.085-1.983 1.706a62.283 62.283 0 0 0-2.455 2.43l-.04.041-.013.014a.05.05 0 0 1-.055.012A.05.05 0 0 1 6 21.95V4.438A2.428 2.428 0 0 1 8.43 2h7.14A2.428 2.428 0 0 1 18 4.438V21.95a.05.05 0 0 1-.085.034h-.001l-.013-.014-.04-.041a66.594 66.594 0 0 0-2.455-2.43c-.666-.621-1.37-1.242-1.983-1.707a7.187 7.187 0 0 0-.835-.56c-.247-.135-.446-.207-.588-.207Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 17.025c-.142 0-.341.072-.588.208a7.187 7.187 0 0 0-.835.56c-.614.464-1.317 1.085-1.983 1.706a62.283 62.283 0 0 0-2.455 2.43l-.04.041-.013.014a.05.05 0 0 1-.055.012A.05.05 0 0 1 6 21.95V4.438A2.428 2.428 0 0 1 8.43 2h7.14A2.428 2.428 0 0 1 18 4.438V21.95a.05.05 0 0 1-.085.034h-.001l-.013-.014-.04-.041a66.594 66.594 0 0 0-2.455-2.43c-.666-.621-1.37-1.242-1.983-1.707a7.187 7.187 0 0 0-.835-.56c-.247-.135-.446-.207-.588-.207Z",
    clipRule: "evenodd"
  }));
};

const SvgSiBriefcase = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M19.6 7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M15 21V4.8a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V21M4.4 7h15.2A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7Z"
  }));
};

const SvgSiBriefcaseDetailed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M4.4 7h15.2A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7Zm6.4 5h2.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1-.8-.8v-2.4a.8.8 0 0 1 .8-.8Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M2 14h8m4 0h8m-7-7V4.8a.8.8 0 0 0-.8-.8H9.8a.8.8 0 0 0-.8.8V7M4.4 7h15.2A2.4 2.4 0 0 1 22 9.4v9.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 18.6V9.4A2.4 2.4 0 0 1 4.4 7Zm6.4 5h2.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1-.8-.8v-2.4a.8.8 0 0 1 .8-.8Z"
  }));
};

const SvgSiBriefcaseMedical = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M19.6 7H4.4A2.4 2.4 0 0 0 2 9.4v9.2A2.4 2.4 0 0 0 4.4 21h15.2a2.4 2.4 0 0 0 2.4-2.4V9.4A2.4 2.4 0 0 0 19.6 7Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M9 13.25a.75.75 0 0 0 0 1.5v-1.5Zm6 1.5a.75.75 0 0 0 0-1.5v1.5ZM11.25 17a.75.75 0 0 0 1.5 0h-1.5Zm1.5-6a.75.75 0 0 0-1.5 0h1.5ZM4.4 7.75h15.2v-1.5H4.4v1.5Zm15.2 0c.911 0 1.65.739 1.65 1.65h1.5a3.15 3.15 0 0 0-3.15-3.15v1.5Zm1.65 1.65v9.2h1.5V9.4h-1.5Zm0 9.2a1.65 1.65 0 0 1-1.65 1.65v1.5a3.15 3.15 0 0 0 3.15-3.15h-1.5Zm-1.65 1.65H4.4v1.5h15.2v-1.5Zm-15.2 0a1.65 1.65 0 0 1-1.65-1.65h-1.5a3.15 3.15 0 0 0 3.15 3.15v-1.5ZM2.75 18.6V9.4h-1.5v9.2h1.5Zm0-9.2c0-.911.739-1.65 1.65-1.65v-1.5A3.15 3.15 0 0 0 1.25 9.4h1.5ZM9 14.75h6v-1.5H9v1.5ZM12.75 17v-6h-1.5v6h1.5ZM9.8 4.75h4.4v-1.5H9.8v1.5Zm4.4 0a.05.05 0 0 1 .05.05h1.5a1.55 1.55 0 0 0-1.55-1.55v1.5Zm.05.05V7h1.5V4.8h-1.5ZM9.75 7V4.8h-1.5V7h1.5Zm0-2.2a.05.05 0 0 1 .05-.05v-1.5A1.55 1.55 0 0 0 8.25 4.8h1.5Z"
  }));
};

const SvgSiBriefcases = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M20.6 6H7.4A2.4 2.4 0 0 0 5 8.4v8.2A2.4 2.4 0 0 0 7.4 19h13.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 20.6 6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M19 22H7.4C4.42 22 2 19.58 2 16.6V11m15 8V3.8a.8.8 0 0 0-.8-.8h-4.4a.8.8 0 0 0-.8.8V19M7.4 6h13.2A2.4 2.4 0 0 1 23 8.4v8.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V8.4A2.4 2.4 0 0 1 7.4 6Z"
  }));
};

const SvgSiCancelPhoto = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M20 22H8.4C5.42 22 3 19.58 3 16.6V5m13.828 8.828-5.656-5.656m5.656 0-5.656 5.656M8.4 3h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3Z"
  }));
};

const SvgSiCancelPresentation = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m7.757 16.243 8.486-8.486m0 8.486L7.757 7.757M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4Z"
  }));
};

const SvgSiChat = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65c-.4.5-1.162.5-1.563 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.663 0-3-1.338-3-3V6c0-1.662 1.337-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65c-.4.5-1.162.5-1.563 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.663 0-3-1.338-3-3V6c0-1.662 1.337-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3Z"
  }));
};

const SvgSiChatText = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M19 16h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65c-.4.5-1.162.5-1.563 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.663 0-3-1.338-3-3V6c0-1.662 1.337-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M8 8h8m-8 3h8m3 5h-2.525a.99.99 0 0 0-.775.375l-2.925 3.65c-.4.5-1.162.5-1.563 0l-2.925-3.65A.99.99 0 0 0 7.512 16H5c-1.663 0-3-1.338-3-3V6c0-1.662 1.337-3 3-3h14c1.663 0 3 1.338 3 3v7c0 1.662-1.337 3-3 3Z"
  }));
};

const SvgSiCheck = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiCheckAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiCheckCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m8 13 3 3 5-7m6 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));
};

const SvgSiCheckSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m8 13 3 3 5-7M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiChecklist = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiChecklistAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiChevronLeft = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiChevronLeftAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiChevronLeftCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiChevronLeftSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiChevronRight = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiChevronRightAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiChevronRightCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiChevronRightSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
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
};

const SvgSiClearAll = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiClearDay = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 4V2m0 20v-2m-8-8H2m20 0h-2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41m0 11.32 1.41 1.41M4.93 4.93l1.41 1.41M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  }));
};

const SvgSiClipboard = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M8 3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H16v1.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8m.8-2h6.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V1.8a.8.8 0 0 1 .8-.8Z"
  }));
};

const SvgSiClipboardAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M14 3a2 2 0 1 1-4 0H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H14Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M14 3a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m4 0h4.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H10"
  }));
};

const SvgSiClipboardCheck = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M8 3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H16v1.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8m0 11 3 3 5-7M8.8 1h6.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V1.8a.8.8 0 0 1 .8-.8Z"
  }));
};

const SvgSiClipboardCheckAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M14 3a2 2 0 1 1-4 0H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H14Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M14 3h4.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H10m4 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0M8 14l3 3 5-7"
  }));
};

const SvgSiClipboardFilled = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M8 3H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H16v1.2a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M16 3h2.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H8M7 13h10M7 10h10M7 16h6M8.8 1h6.4a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-.8.8H8.8a.8.8 0 0 1-.8-.8V1.8a.8.8 0 0 1 .8-.8Z"
  }));
};

const SvgSiClipboardFilledAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M14 3a2 2 0 1 1-4 0H5.4A2.4 2.4 0 0 0 3 5.4v15.2A2.4 2.4 0 0 0 5.4 23h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3H14Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M14 3h4.6A2.4 2.4 0 0 1 21 5.4v15.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 20.6V5.4A2.4 2.4 0 0 1 5.4 3H10m4 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0M7 13h10M7 10h10M7 16h6"
  }));
};

const SvgSiClock = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 6v5.8a.2.2 0 0 1-.2.2H8m14 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));
};

const SvgSiClockAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 6v5.844a.2.2 0 0 0 .152.194L16 13m6-1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));
};

const SvgSiClose = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiCloseCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m7.757 16.243 8.486-8.486m0 8.486L7.757 7.757M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));
};

const SvgSiCloseSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m7.757 16.243 8.486-8.486m0 8.486L7.757 7.757M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiCloud = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M4.178 18.555H18.28a4.7 4.7 0 1 0 0-9.4 5.319 5.319 0 0 0-.783.07A6.267 6.267 0 0 0 5.87 11.042c-.082.41-.124.828-.125 1.246v.446a3.133 3.133 0 1 0-1.567 5.82Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M4.178 18.555H18.28a4.7 4.7 0 1 0 0-9.4 5.319 5.319 0 0 0-.783.07A6.267 6.267 0 0 0 5.87 11.042c-.082.41-.124.828-.125 1.246v.446a3.133 3.133 0 1 0-1.567 5.82Z",
    clipRule: "evenodd"
  }));
};

const SvgSiCode = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiCodeMuted = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiColumns = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 21V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiCopy = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 9h-7.2A2.4 2.4 0 0 0 9 11.4v7.2a2.4 2.4 0 0 0 2.4 2.4h7.2a2.4 2.4 0 0 0 2.4-2.4v-7.2A2.4 2.4 0 0 0 18.6 9Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M6 15h-.6C4.07 15 3 13.93 3 12.6V5.4C3 4.07 4.07 3 5.4 3h7.2C13.93 3 15 4.07 15 5.4V6m-3.6 3h7.2a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4h-7.2A2.4 2.4 0 0 1 9 18.6v-7.2A2.4 2.4 0 0 1 11.4 9Z"
  }));
};

const SvgSiCopyAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12.6 3H5.4A2.4 2.4 0 0 0 3 5.4v7.2A2.4 2.4 0 0 0 5.4 15h7.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 12.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M18 9h.6c1.33 0 2.4 1.07 2.4 2.4v7.2c0 1.33-1.07 2.4-2.4 2.4h-7.2C10.07 21 9 19.93 9 18.6V18M5.4 3h7.2A2.4 2.4 0 0 1 15 5.4v7.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 12.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiCopyright = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M15.33 10.238C14.876 8.865 13.795 8 12.227 8 10.163 8 8.66 9.643 8.66 12s1.503 4 3.567 4c1.568 0 2.65-.865 3.103-2.238M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
  }));
};

const SvgSiCopyrightAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M15.23 13.697C14.974 15.095 13.767 16 12.142 16c-2.076 0-3.373-1.535-3.373-3.992v-.01C8.77 9.534 10.062 8 12.137 8c1.61 0 2.865 1.011 3.092 2.478M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
  }));
};

const SvgSiCreditCard = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M1 10h22M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4Z"
  }));
};

const SvgSiCreditCardDetailed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4V8H1V6.4A2.4 2.4 0 0 1 3.4 4ZM1 11v6.6A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V11H1Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M20 14h-3M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4ZM1 8h22v3H1V8Z"
  }));
};

const SvgSiCreditCardDetailedAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4V8H1V6.4A2.4 2.4 0 0 1 3.4 4ZM1 11v6.6A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V11H1Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M23 8H1v3h22V8Z"
  }));
};

const SvgSiCrosshairDetailed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M2 12h4m12 0h4M12 22v-4m0-12V2m8 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }));
};

const SvgSiCrosshairSimple = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10h-4m-6 10C6.477 22 2 17.523 2 12m10 10v-4M2 12C2 6.477 6.477 2 12 2M2 12h4m6-10v4"
  }));
};

const SvgSiDangerous = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.81.81 0 0 1-.57-.23l-4.67-4.673a.793.793 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57v.01Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M9 14.657 14.657 9m0 5.657L9 9M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.81.81 0 0 1-.57-.23l-4.67-4.673a.793.793 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57v.01Z"
  }));
};

const SvgSiDashboard = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M8.4 15H5.6A1.6 1.6 0 0 0 4 16.6v2.8A1.6 1.6 0 0 0 5.6 21h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 15Zm10-12h-2.8A1.6 1.6 0 0 0 14 4.6v2.8A1.6 1.6 0 0 0 15.6 9h2.8A1.6 1.6 0 0 0 20 7.4V4.6A1.6 1.6 0 0 0 18.4 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M8.4 3H5.6A1.6 1.6 0 0 0 4 4.6v4.8A1.6 1.6 0 0 0 5.6 11h2.8A1.6 1.6 0 0 0 10 9.4V4.6A1.6 1.6 0 0 0 8.4 3Zm0 12H5.6A1.6 1.6 0 0 0 4 16.6v2.8A1.6 1.6 0 0 0 5.6 21h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 15Zm10-12h-2.8A1.6 1.6 0 0 0 14 4.6v2.8A1.6 1.6 0 0 0 15.6 9h2.8A1.6 1.6 0 0 0 20 7.4V4.6A1.6 1.6 0 0 0 18.4 3Zm0 10h-2.8a1.6 1.6 0 0 0-1.6 1.6v4.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-4.8a1.6 1.6 0 0 0-1.6-1.6Z"
  }));
};

const SvgSiDashboardCustomize = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M8.4 14H5.6A1.6 1.6 0 0 0 4 15.6v2.8A1.6 1.6 0 0 0 5.6 20h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 14Zm10-10h-2.8A1.6 1.6 0 0 0 14 5.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8A1.6 1.6 0 0 0 20 8.4V5.6A1.6 1.6 0 0 0 18.4 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M14 17h6m-3 3v-6M5.6 4h2.8A1.6 1.6 0 0 1 10 5.6v2.8A1.6 1.6 0 0 1 8.4 10H5.6A1.6 1.6 0 0 1 4 8.4V5.6A1.6 1.6 0 0 1 5.6 4Zm0 10h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8A1.6 1.6 0 0 1 8.4 20H5.6A1.6 1.6 0 0 1 4 18.4v-2.8A1.6 1.6 0 0 1 5.6 14Zm10-10h2.8A1.6 1.6 0 0 1 20 5.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 14 8.4V5.6A1.6 1.6 0 0 1 15.6 4Z"
  }));
};

const SvgSiDashboardHorz = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M10 21v-9m-7 0h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiDashboardVert = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 21V3m0 7h9M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiDeleteAlarm = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m9.172 15.828 5.656-5.656m0 5.656-5.656-5.656M18 3l3 3M3 6l3-3m14 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
  }));
};

const SvgSiDiamondsFour = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#si_Diamonds_four_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m3.798 8.889-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0Zm14.142 0-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m3.798 8.889-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0Zm7.071-7.071-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0Zm0 14.142-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0Zm7.071-7.071-1.98 1.98a1.6 1.6 0 0 0 0 2.262l1.98 1.98a1.6 1.6 0 0 0 2.262 0l1.98-1.98a1.6 1.6 0 0 0 0-2.262l-1.98-1.98a1.6 1.6 0 0 0-2.262 0Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "si_Diamonds_four_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

const SvgSiDoubleArrowRight = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiDownLeft = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiDownRight = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiDownloadOffline = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m8 11 4 4m0 0 4-4m-4 4V6m4 12H8m14-6c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));
};

const SvgSiDragHandle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiDragIndicator = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiDragIndicatorAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiEditDetailed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m4.929 19.071.707-3.535 9.192-9.193 2.829 2.829-9.193 9.192-3.535.707Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m14.828 6.343 2.829 2.829m.566-5.091 1.697 1.697a.8.8 0 0 1 0 1.13L8.464 18.365l-3.535.707.707-3.535L17.091 4.08a.8.8 0 0 1 1.132 0Z"
  }));
};

const SvgSiEditDetailedAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m4.929 19.071.707-3.536 9.192-9.192 2.829 2.829-9.193 9.192-3.535.707Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M19.071 7.757 8.464 18.364l-3.535.707.707-3.535L16.243 4.929m2.828 2.828a2 2 0 0 0-2.828-2.828m2.828 2.828-1.414 1.415-2.829-2.829 1.415-1.414"
  }));
};

const SvgSiEditSimple = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M19.92 5.777 18.222 4.08a.8.8 0 0 0-1.13 0L5.635 15.536 4.93 19.07l3.535-.707L19.92 6.909a.8.8 0 0 0 0-1.132Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M19.92 5.777 18.222 4.08a.8.8 0 0 0-1.13 0L5.635 15.536 4.93 19.07l3.535-.707L19.92 6.909a.8.8 0 0 0 0-1.132Z"
  }));
};

const SvgSiEject = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m5 13 7-10 7 10H5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m5 13 7-10 7 10H5Zm0 4.8v2.4a.8.8 0 0 0 .8.8h12.4a.8.8 0 0 0 .8-.8v-2.4a.8.8 0 0 0-.8-.8H5.8a.8.8 0 0 0-.8.8Z"
  }));
};

const SvgSiEqualizer = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiError = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.81.81 0 0 1-.57-.23l-4.67-4.673a.793.793 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57v.01Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 16h.008M12 8v5M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.81.81 0 0 1-.57-.23l-4.67-4.673a.793.793 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57v.01Z"
  }));
};

const SvgSiExpandLess = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiExpandLessAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiExpandLessCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiExpandLessSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiExpandMore = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiExpandMoreAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiExpandMoreCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiExpandMoreSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiFactCheck = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M5 15h5m-5-3h5M5 9h5m3 3 2 2 4-4M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4Z"
  }));
};

const SvgSiFeaturedPlaylist = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M6 9h8m-8 3h8M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4Z"
  }));
};

const SvgSiFileDownload = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M8.53 11.47a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM12 16l-.53.53a.75.75 0 0 0 1.06 0L12 16Zm4.53-3.47a.75.75 0 1 0-1.06-1.06l1.06 1.06ZM12.75 4a.75.75 0 0 0-1.5 0h1.5Zm7 13a.75.75 0 0 0-1.5 0h1.5Zm-14 0a.75.75 0 0 0-1.5 0h1.5Zm1.72-4.47 4 4 1.06-1.06-4-4-1.06 1.06Zm5.06 4 4-4-1.06-1.06-4 4 1.06 1.06Zm.22-.53V4h-1.5v12h1.5Zm5.5 1v.6h1.5V17h-1.5Zm0 .6c0 .916-.734 1.65-1.65 1.65v1.5a3.144 3.144 0 0 0 3.15-3.15h-1.5Zm-1.65 1.65H7.4v1.5h9.2v-1.5Zm-9.2 0c-.916 0-1.65-.734-1.65-1.65h-1.5a3.144 3.144 0 0 0 3.15 3.15v-1.5ZM5.75 17.6V17h-1.5v.6h1.5Z"
  }));
};

const SvgSiFileUpload = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M7.47 7.47a.75.75 0 0 0 1.06 1.06L7.47 7.47ZM12 4l.53-.53a.75.75 0 0 0-1.06 0L12 4Zm3.47 4.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM11.25 16a.75.75 0 0 0 1.5 0h-1.5Zm8.5 1a.75.75 0 0 0-1.5 0h1.5Zm-14 0a.75.75 0 0 0-1.5 0h1.5Zm2.78-8.47 4-4-1.06-1.06-4 4 1.06 1.06Zm2.94-4 4 4 1.06-1.06-4-4-1.06 1.06ZM11.25 4v12h1.5V4h-1.5Zm7 13v.6h1.5V17h-1.5Zm0 .6c0 .916-.734 1.65-1.65 1.65v1.5a3.144 3.144 0 0 0 3.15-3.15h-1.5Zm-1.65 1.65H7.4v1.5h9.2v-1.5Zm-9.2 0c-.916 0-1.65-.734-1.65-1.65h-1.5a3.144 3.144 0 0 0 3.15 3.15v-1.5ZM5.75 17.6V17h-1.5v.6h1.5Z"
  }));
};

const SvgSiFilterList = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiFilterListAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiFilterNone = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M20 22H8.4C5.42 22 3 19.58 3 16.6V5m5.4-2h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3Z"
  }));
};

const SvgSiFlare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#si_Flare_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M7 12H1m22 0h-6m-5 5v6m3.536-7.464 1.414 1.414m-9.9-9.9 1.414 1.414m7.072 0L16.95 7.05m-9.9 9.9 1.414-1.414M12 1v6m2 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "si_Flare_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

const SvgSiFlowLine = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
  }));
};

const SvgSiFlowParallel = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
  }));
};

const SvgSiGlobeDetailed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M10.674 22.145a.75.75 0 1 0 1.193-.91l-1.194.91Zm1.259-19.466a.75.75 0 1 0-1.186-.918l1.186.918Zm1.394-.914a.75.75 0 0 0-1.194.91l1.194-.91Zm-1.26 19.466a.75.75 0 1 0 1.186.918l-1.186-.918ZM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5Zm-.133 18.485A15.188 15.188 0 0 1 8.75 12h-1.5a16.69 16.69 0 0 0 3.424 10.145l1.193-.91ZM8.75 12a15.23 15.23 0 0 1 3.183-9.32l-1.186-.92A16.737 16.737 0 0 0 7.25 12h1.5Zm3.383-9.325a15.188 15.188 0 0 1 3.117 9.235h1.5c0-3.81-1.278-7.329-3.423-10.145l-1.194.91Zm3.117 9.235a15.23 15.23 0 0 1-3.183 9.32l1.186.92a16.737 16.737 0 0 0 3.497-10.24h-1.5ZM12 16.75c2.59 0 4.92 1.062 6.605 2.776l1.07-1.052A10.726 10.726 0 0 0 12 15.25v1.5Zm6.604-12.274A9.209 9.209 0 0 1 12 7.25v1.5c3.01 0 5.73-1.237 7.676-3.226l-1.072-1.048ZM12 7.25a9.226 9.226 0 0 1-6.605-2.776l-1.07 1.052A10.726 10.726 0 0 0 12 8.75v-1.5ZM5.396 19.524A9.21 9.21 0 0 1 12 16.75v-1.5c-3.01 0-5.73 1.237-7.676 3.226l1.072 1.049ZM2 12.75h20v-1.5H2v1.5Z"
  }));
};

const SvgSiGrid = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M8.4 3H4.6A1.6 1.6 0 0 0 3 4.6v3.8A1.6 1.6 0 0 0 4.6 10h3.8A1.6 1.6 0 0 0 10 8.4V4.6A1.6 1.6 0 0 0 8.4 3Zm11 11h-3.8a1.6 1.6 0 0 0-1.6 1.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8a1.6 1.6 0 0 0-1.6-1.6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M8.4 3H4.6A1.6 1.6 0 0 0 3 4.6v3.8A1.6 1.6 0 0 0 4.6 10h3.8A1.6 1.6 0 0 0 10 8.4V4.6A1.6 1.6 0 0 0 8.4 3Zm11 0h-3.8A1.6 1.6 0 0 0 14 4.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8A1.6 1.6 0 0 0 21 8.4V4.6A1.6 1.6 0 0 0 19.4 3Zm-11 11H4.6A1.6 1.6 0 0 0 3 15.6v3.8A1.6 1.6 0 0 0 4.6 21h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8A1.6 1.6 0 0 0 8.4 14Zm11 0h-3.8a1.6 1.6 0 0 0-1.6 1.6v3.8a1.6 1.6 0 0 0 1.6 1.6h3.8a1.6 1.6 0 0 0 1.6-1.6v-3.8a1.6 1.6 0 0 0-1.6-1.6Z"
  }));
};

const SvgSiGridOn = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M3 15h18M3 9h18M9 21V3m6 18V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiGridView = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M8.4 4H5.6A1.6 1.6 0 0 0 4 5.6v2.8A1.6 1.6 0 0 0 5.6 10h2.8A1.6 1.6 0 0 0 10 8.4V5.6A1.6 1.6 0 0 0 8.4 4Zm10 10h-2.8a1.6 1.6 0 0 0-1.6 1.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8a1.6 1.6 0 0 0-1.6-1.6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M8.4 4H5.6A1.6 1.6 0 0 0 4 5.6v2.8A1.6 1.6 0 0 0 5.6 10h2.8A1.6 1.6 0 0 0 10 8.4V5.6A1.6 1.6 0 0 0 8.4 4Zm0 10H5.6A1.6 1.6 0 0 0 4 15.6v2.8A1.6 1.6 0 0 0 5.6 20h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 14Zm10-10h-2.8A1.6 1.6 0 0 0 14 5.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8A1.6 1.6 0 0 0 20 8.4V5.6A1.6 1.6 0 0 0 18.4 4Zm0 10h-2.8a1.6 1.6 0 0 0-1.6 1.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8a1.6 1.6 0 0 0-1.6-1.6Z"
  }));
};

const SvgSiHeart = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M16.696 3C14.652 3 12.887 4.197 12 5.943 11.113 4.197 9.348 3 7.304 3 4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481 22 5.448 19.626 3 16.696 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M16.696 3C14.652 3 12.887 4.197 12 5.943 11.113 4.197 9.348 3 7.304 3 4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481 22 5.448 19.626 3 16.696 3Z"
  }));
};

const SvgSiHeartAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M16.55 3.084a5.452 5.452 0 0 1 3.852 9.307l-.648.654-.86.854-6.852 6.852L5.19 13.9l-.86-.854-.648-.654a5.453 5.453 0 1 1 7.706-7.712l.654.654.655-.654a5.452 5.452 0 0 1 3.852-1.595Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M16.55 3.084a5.452 5.452 0 0 1 3.852 9.307l-.648.654-.86.854-6.852 6.852L5.19 13.9l-.86-.854-.648-.654a5.453 5.453 0 1 1 7.706-7.712l.654.654.655-.654a5.452 5.452 0 0 1 3.852-1.595Z",
    clipRule: "evenodd"
  }));
};

const SvgSiHome = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M15 22h3.6a2.4 2.4 0 0 0 2.4-2.412V8.332c0-.382-.18-.734-.48-.965L12.7 2.24a1.195 1.195 0 0 0-1.44 0L3.48 7.367c-.3.231-.48.583-.48.965v11.256A2.4 2.4 0 0 0 5.4 22H9v-9.2c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8V22Z"
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
};

const SvgSiHomeDetailed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M15 22h3.6a2.4 2.4 0 0 0 2.4-2.412V8.332c0-.382-.18-.734-.48-.965L12.7 2.24a1.195 1.195 0 0 0-1.44 0L3.48 7.367c-.3.231-.48.583-.48.965v11.256A2.4 2.4 0 0 0 5.4 22H9v-9.2c0-.44.36-.8.8-.8h4.4c.44 0 .8.36.8.8V22Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M.587 8.374a.75.75 0 1 0 .826 1.252L.587 8.374ZM11.26 2.24l.413.626a.729.729 0 0 0 .035-.024l-.448-.602Zm1.44 0-.448.602a.798.798 0 0 0 .037.025l.411-.627Zm9.889 7.387a.75.75 0 1 0 .823-1.254l-.823 1.254ZM21.75 8a.75.75 0 0 0-1.5 0h1.5Zm-18 0a.75.75 0 0 0-1.5 0h1.5ZM15 22v.75h.75V22H15Zm-6 0h-.75v.75H9V22Zm9.75-19a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5ZM15 8.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5ZM1.413 9.626l10.26-6.76-.826-1.252-10.26 6.76.826 1.252Zm10.295-6.784a.45.45 0 0 1 .544 0l.896-1.204a1.95 1.95 0 0 0-2.336 0l.896 1.204Zm.58.025 10.3 6.76.823-1.254-10.3-6.76-.822 1.254ZM20.25 8v11.6h1.5V8h-1.5Zm0 11.6c0 .916-.734 1.65-1.65 1.65v1.5a3.144 3.144 0 0 0 3.15-3.15h-1.5Zm-1.65 1.65H5.4v1.5h13.2v-1.5Zm-13.2 0c-.916 0-1.65-.734-1.65-1.65h-1.5a3.144 3.144 0 0 0 3.15 3.15v-1.5ZM3.75 19.6V8h-1.5v11.6h1.5Zm6.05-6.85h4.4v-1.5H9.8v1.5Zm4.4 0c.011 0 .023.004.035.015a.048.048 0 0 1 .015.035h1.5c0-.854-.696-1.55-1.55-1.55v1.5Zm.05.05V22h1.5v-9.2h-1.5Zm.75 8.45H9v1.5h6v-1.5ZM9.75 22v-9.2h-1.5V22h1.5Zm0-9.2c0-.011.004-.023.015-.035a.048.048 0 0 1 .035-.015v-1.5c-.854 0-1.55.696-1.55 1.55h1.5Zm7.5-9.8v2h1.5V3h-1.5ZM15 7.25H9v1.5h6v-1.5Z"
  }));
};

const SvgSiInfo = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 8h.008M12 16v-5m10 1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));
};

const SvgSiInput = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiInsights = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiInventory = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
    d: "M21 7v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V7m5 4h8M2.6 3h18.8A1.6 1.6 0 0 1 23 4.6v.8A1.6 1.6 0 0 1 21.4 7H2.6A1.6 1.6 0 0 1 1 5.4v-.8A1.6 1.6 0 0 1 2.6 3Z"
  }));
};

const SvgSiKeypad = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
  }));
};

const SvgSiLeftDown = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiLeftUp = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M9 5v9.6a4.4 4.4 0 0 0 4.4 4.4H19M9 5 5 9m4-4 4 4"
  }));
};

const SvgSiLibraryBooks = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M10 11h8m-8 3h4m-4-6h8m2 14H8.4C5.42 22 3 19.58 3 16.6V5m5.4-2h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3Z"
  }));
};

const SvgSiLightMode = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#si_Light_mode_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M5 12H1m22 0h-4M7.05 7.05 4.222 4.222m15.556 15.556L16.95 16.95m-9.9 0-2.828 2.828M19.778 4.222 16.95 7.05M12 19v4m0-22v4m4 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "si_Light_mode_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

const SvgSiLock = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M6.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M8 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3m-4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 0v3m-5.4-8h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6Z"
  }));
};

const SvgSiLockAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M8 11V7c0-2.21 1.79-4 4-4s4 1.79 4 4v4M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6Zm8.4 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};

const SvgSiLockMuted = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
    d: "M8 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3m-9.4 0h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6Z"
  }));
};

const SvgSiMail = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M3.2 4h17.6c.66 0 1.2.54 1.2 1.2v12.4c0 1.32-1.08 2.4-2.4 2.4H4.4C3.08 20 2 18.92 2 17.6V5.2C2 4.54 2.54 4 3.2 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m5 7.06 6.87 5.89c.07.06.19.06.26 0L19 7.06M3.2 4h17.6c.66 0 1.2.54 1.2 1.2v12.4c0 1.32-1.08 2.4-2.4 2.4H4.4C3.08 20 2 18.92 2 17.6V5.2C2 4.54 2.54 4 3.2 4Z"
  }));
};

const SvgSiMemory = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M7.4 5h9.2A2.4 2.4 0 0 1 19 7.4v9.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V7.4A2.4 2.4 0 0 1 7.4 5Zm3.2 4h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 13.4v-2.8A1.6 1.6 0 0 1 10.6 9Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M14 5V3m-4 2V3m4 18v-2m-4 2v-2m11-5h-2m2-4h-2M5 14H3m2-4H3m4.4-5h9.2A2.4 2.4 0 0 1 19 7.4v9.2a2.4 2.4 0 0 1-2.4 2.4H7.4A2.4 2.4 0 0 1 5 16.6V7.4A2.4 2.4 0 0 1 7.4 5Zm3.2 4h2.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-2.8A1.6 1.6 0 0 1 9 13.4v-2.8A1.6 1.6 0 0 1 10.6 9Z"
  }));
};

const SvgSiMic = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 17c-2.75 0-5-2.172-5-4.828V5.828C7 3.172 9.25 1 12 1s5 2.172 5 4.828v6.344C17 14.828 14.75 17 12 17Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 23v-3m0 0a8 8 0 0 1-8-8m8 8a8 8 0 0 0 8-8m-8 5c-2.75 0-5-2.172-5-4.828V5.828C7 3.172 9.25 1 12 1s5 2.172 5 4.828v6.344C17 14.828 14.75 17 12 17Z"
  }));
};

const SvgSiMicDetailed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 1a6 6 0 0 0-6 6v6a6 6 0 0 0 12 0V7a6 6 0 0 0-6-6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M6 23h12m-6 0v-4m0 0a6 6 0 0 0 6-6V7A6 6 0 0 0 6 7v6a6 6 0 0 0 6 6Zm0-9h.1m2.9 0h.1M9 10h.1M12 7h.1M15 7h.1M9 7h.1m2.9 6h.1m-.1 3h.1M12 4h.1m2.9 9h.1M9 13h.1"
  }));
};

const SvgSiMoney = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M19.2 9H2.8a.8.8 0 0 0-.8.8v8.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V9.8a.8.8 0 0 0-.8-.8Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M5 9V6.8c0-.44.36-.8.8-.8h16.4c.44 0 .8.36.8.8v8.4c0 .44-.36.8-.8.8H20M2.8 9h16.4a.8.8 0 0 1 .8.8v8.4a.8.8 0 0 1-.8.8H2.8a.8.8 0 0 1-.8-.8V9.8a.8.8 0 0 1 .8-.8Zm9.2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};

const SvgSiMoon = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.399 10.399 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205 1.026-1.026 1.846-2.051 2.256-3.282-3.896 1.436-8.409.82-11.486-2.256Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M10.41 13.28C7.332 10.205 6.716 5.693 8.357 2c-1.23.41-2.256 1.23-3.281 2.256a10.399 10.399 0 0 0 0 14.768c4.102 4.102 10.46 3.897 14.562-.205 1.026-1.026 1.846-2.051 2.256-3.282-3.896 1.436-8.409.82-11.486-2.256Z"
  }));
};

const SvgSiMoreHoriz = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm14 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }));
};

const SvgSiMoreHorizCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
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
};

const SvgSiMoreHorizSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
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
};

const SvgSiMoreMutedHoriz = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiMoreMutedHorizCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 12v.1M8 12v.1m8-.1v.1m6-.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));
};

const SvgSiMoreMutedHorizSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M12 12v.1M8 12v.1m8-.1v.1M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiMoreMutedVert = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiMoreMutedVertCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11.95 12.05h.1m-.1 4h.1m-.1-8h.1M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));
};

const SvgSiMoreMutedVertSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11.95 12.05h.1m-.1 4h.1m-.1-8h.1M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiMoreSquareHoriz = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm7 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm-14 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 6 12.467v-.934A.533.533 0 0 0 5.467 11Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm7 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm-14 0h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 6 12.467v-.934A.533.533 0 0 0 5.467 11Z"
  }));
};

const SvgSiMoreSquareVert = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0 7h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0-14h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 13 5.467v-.934A.533.533 0 0 0 12.467 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12.467 11h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0 7h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934a.533.533 0 0 0 .533-.533v-.934a.533.533 0 0 0-.533-.533Zm0-14h-.934a.533.533 0 0 0-.533.533v.934c0 .294.239.533.533.533h.934A.533.533 0 0 0 13 5.467v-.934A.533.533 0 0 0 12.467 4Z"
  }));
};

const SvgSiMoreVert = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
  }));
};

const SvgSiMoreVertCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
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
};

const SvgSiMoreVertSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
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
};

const SvgSiMove = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiMovie = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M23 9H1v9.6A2.4 2.4 0 0 0 3.4 21h17.2a2.4 2.4 0 0 0 2.4-2.4V9Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "M14.289 8.763a.75.75 0 1 0 1.422.474l-1.422-.474Zm3.423-5.526a.75.75 0 1 0-1.424-.474l1.424.474ZM6.288 8.763a.75.75 0 1 0 1.424.474l-1.424-.474Zm3.424-5.526a.75.75 0 1 0-1.424-.474l1.424.474ZM3.4 3.75h17.2v-1.5H3.4v1.5Zm17.2 0c.911 0 1.65.739 1.65 1.65h1.5a3.15 3.15 0 0 0-3.15-3.15v1.5Zm1.65 1.65v13.2h1.5V5.4h-1.5Zm0 13.2a1.65 1.65 0 0 1-1.65 1.65v1.5a3.15 3.15 0 0 0 3.15-3.15h-1.5Zm-1.65 1.65H3.4v1.5h17.2v-1.5Zm-17.2 0a1.65 1.65 0 0 1-1.65-1.65H.25a3.15 3.15 0 0 0 3.15 3.15v-1.5ZM1.75 18.6V5.4H.25v13.2h1.5Zm0-13.2c0-.911.739-1.65 1.65-1.65v-1.5A3.15 3.15 0 0 0 .25 5.4h1.5ZM1 9.75h22v-1.5H1v1.5Zm14.711-.513 2-6-1.422-.474-2 6 1.422.474Zm-8 0 2-6-1.423-.474-2 6 1.424.474Z"
  }));
};

const SvgSiNotifications = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 4a6 6 0 0 0-6 6v8h12v-8a6 6 0 0 0-6-6Zm0 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 14H4m10 2a2 2 0 1 1-4 0"
  }));
};

const SvgSiNotificationsAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M5 18a1 1 0 0 1-.894-1.447L6 12.764V10c0-3.728 2.55-6.86 6-7.748 3.45.888 6 4.02 6 7.748v2.764l1.894 3.789A1 1 0 0 1 19 18H5Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M16 18a4 4 0 0 1-8 0m-3 0a1 1 0 0 1-.894-1.447L6 12.763V10c0-3.728 2.55-6.86 6-7.748 3.45.888 6 4.02 6 7.748v2.764l1.894 3.789A1 1 0 0 1 19 18H5Z"
  }));
};

const SvgSiNotificationsThick = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M3 18h18a1 1 0 0 0 .894-1.447L20 12.763V10a8 8 0 1 0-16 0v2.764l-1.894 3.789A1 1 0 0 0 3 18Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M8 18H3a1 1 0 0 1-.894-1.447L4 12.763V10a8 8 0 1 1 16 0v2.764l1.894 3.789A1 1 0 0 1 21 18h-5m-8 0h8m-8 0a4 4 0 0 0 8 0"
  }));
};

const SvgSiOctagon = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.81.81 0 0 1-.57-.23l-4.67-4.673a.793.793 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57v.01Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.81.81 0 0 1-.57-.23l-4.67-4.673a.793.793 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57v.01Z"
  }));
};

const SvgSiOctagonCheck = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.81.81 0 0 1-.57-.23l-4.67-4.673a.793.793 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57v.01Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m8 13 3 3 5-7M3.23 7.913 7.91 3.23c.15-.15.35-.23.57-.23h7.05c.21 0 .42.08.57.23l4.67 4.673c.15.15.23.35.23.57v7.054c0 .21-.08.42-.23.57L16.1 20.77c-.15.15-.35.23-.57.23H8.47a.81.81 0 0 1-.57-.23l-4.67-4.673a.793.793 0 0 1-.23-.57V8.473c0-.21.08-.42.23-.57v.01Z"
  }));
};

const SvgSiPause = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M20.2 3h-4.4a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Zm-12 0H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M20.2 3h-4.4a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Zm-12 0H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h4.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Z"
  }));
};

const SvgSiPausePresentation = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M14 16V8m-4 8V8M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4Z"
  }));
};

const SvgSiPhone = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27Z"
  }));
};

const SvgSiPhoneAddCall = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m7.18 10.27-.44-.607-.713.518.625.62.529-.532Zm6.504 6.46-.529.533.571.567.526-.61-.568-.49Zm7.316.924.748.052a.752.752 0 0 0-.038-.294l-.71.242Zm-14.284-3 .516-.545-.003-.002-.513.547ZM6.252 3l.242-.71-.13-.044-.139.004.027.75ZM20 7.75a.75.75 0 0 0 0-1.5v1.5Zm-6-1.5a.75.75 0 0 0 0 1.5v-1.5ZM17.75 4a.75.75 0 0 0-1.5 0h1.5Zm-1.5 6a.75.75 0 0 0 1.5 0h-1.5Zm-9.598.801 6.503 6.462 1.058-1.064-6.504-6.462-1.057 1.064Zm7.6 6.42a9.31 9.31 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021.586-.19 1.125-.178 1.624.129.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38-.97-.598-1.992-.564-2.873-.278-.862.28-1.633.812-2.214 1.297-.588.49-1.023.97-1.214 1.19l1.136.98Zm6.748.433a54.29 54.29 0 0 1-.748-.053v-.007.01a2.352 2.352 0 0 1-.079.353 2.835 2.835 0 0 1-.475.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962.394-.505.61-1.01.726-1.392a3.826 3.826 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001L21 17.654Zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075 1.617 1.315 3.506 2.476 5.466 2.476v-1.5ZM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354l1.026-1.094Zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602.316-.24.63-.365.864-.43a2.116 2.116 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22a.559.559 0 0 0-.068.005 3.611 3.611 0 0 0-.61.114 4.061 4.061 0 0 0-1.371.684C3.14 3.838 2.25 5.288 2.25 7.846h1.5ZM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855.284.522.237 1.087-.05 1.706-.293.63-.8 1.227-1.267 1.683a9.237 9.237 0 0 1-.816.708l-.001.001.442.606c.44.607.441.607.441.606h.001l.002-.002.005-.003.018-.014a5.732 5.732 0 0 0 .274-.216c.176-.145.418-.354.683-.614.521-.51 1.175-1.254 1.578-2.123.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29l-.485 1.42ZM20 6.25h-6v1.5h6v-1.5ZM16.25 4v6h1.5V4h-1.5Z"
  }));
};

const SvgSiPhoneCallback = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m7.18 10.27-.44-.607-.713.518.625.62.529-.532Zm6.504 6.46-.529.533.571.567.526-.61-.568-.49Zm7.316.924.748.052a.752.752 0 0 0-.038-.294l-.71.242Zm-14.284-3 .516-.545-.003-.002-.513.547ZM6.252 3l.242-.71-.13-.044-.139.004.027.75Zm8.67 2.586a.75.75 0 0 0-1.5 0h1.5Zm-.75 4.242h-.75v.75h.75v-.75Zm4.242.75a.75.75 0 0 0 0-1.5v1.5Zm1.945-5.876a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-13.707 6.1 6.503 6.46 1.058-1.063-6.504-6.462-1.057 1.064Zm7.6 6.419a9.31 9.31 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021.586-.19 1.125-.178 1.624.129.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38-.97-.598-1.992-.564-2.873-.278-.862.28-1.633.812-2.214 1.297-.588.49-1.023.97-1.214 1.19l1.136.98Zm6.748.433a54.29 54.29 0 0 1-.748-.053v-.007.01a2.352 2.352 0 0 1-.079.353 2.835 2.835 0 0 1-.475.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962.394-.505.61-1.01.726-1.392a3.826 3.826 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001L21 17.654Zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075 1.617 1.315 3.506 2.476 5.466 2.476v-1.5ZM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354l1.026-1.094Zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602.316-.24.63-.365.864-.43a2.116 2.116 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22a.559.559 0 0 0-.068.005 3.611 3.611 0 0 0-.61.114 4.061 4.061 0 0 0-1.371.684C3.14 3.838 2.25 5.288 2.25 7.846h1.5ZM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855.284.522.237 1.087-.05 1.706-.293.63-.8 1.227-1.267 1.683a9.237 9.237 0 0 1-.816.708l-.001.001.442.606c.44.607.441.607.441.606h.001l.002-.002.005-.003.018-.014a5.732 5.732 0 0 0 .274-.216c.176-.145.418-.354.683-.614.521-.51 1.175-1.254 1.578-2.123.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29l-.485 1.42Zm7.412 1.876v4.242h1.5V5.586h-1.5Zm.75 4.992h4.242v-1.5h-4.242v1.5Zm.53-.22 5.657-5.656-1.06-1.06-5.658 5.656 1.06 1.06Z"
  }));
};

const SvgSiPhoneEnabled = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m16.82 10.27-6.504 6.46c-.697-.807-5.11-5.538-7.316.924 0 0 .232 3.346 4.994 3.346 3.367 0 6.851-4.038 9.29-6.346 2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m16.82 10.27-6.504 6.46c-.697-.807-5.11-5.538-7.316.924 0 0 .232 3.346 4.994 3.346 3.367 0 6.851-4.038 9.29-6.346 2.09-1.962 3.716-4.5 3.716-6.808C21 3.116 17.748 3 17.748 3c-7.432 2.538-.929 7.27-.929 7.27Z"
  }));
};

const SvgSiPhoneForwarded = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m7.18 10.27-.44-.607-.713.518.625.62.529-.532Zm6.504 6.46-.529.533.571.567.526-.61-.568-.49Zm7.316.924.748.052a.752.752 0 0 0-.038-.294l-.71.242Zm-14.284-3 .516-.545-.003-.002-.513.547ZM6.252 3l.242-.71-.13-.044-.139.004.027.75ZM17.47 9.47a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM21 7l.53.53.53-.53-.53-.53L21 7Zm-2.47-3.53a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM13 6.25a.75.75 0 0 0 0 1.5v-1.5Zm-6.348 4.551 6.503 6.462 1.058-1.064-6.504-6.462-1.057 1.064Zm7.6 6.42a9.31 9.31 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021.586-.19 1.125-.178 1.624.129.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38-.97-.598-1.992-.564-2.873-.278-.862.28-1.633.812-2.214 1.297-.588.49-1.023.97-1.214 1.19l1.136.98Zm6.748.433a54.29 54.29 0 0 1-.748-.053v-.007.01a2.352 2.352 0 0 1-.079.353 2.835 2.835 0 0 1-.475.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962.394-.505.61-1.01.726-1.392a3.826 3.826 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001L21 17.654Zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075 1.617 1.315 3.506 2.476 5.466 2.476v-1.5ZM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354l1.026-1.094Zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602.316-.24.63-.365.864-.43a2.116 2.116 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22a.559.559 0 0 0-.068.005 3.611 3.611 0 0 0-.61.114 4.061 4.061 0 0 0-1.371.684C3.14 3.838 2.25 5.288 2.25 7.846h1.5ZM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855.284.522.237 1.087-.05 1.706-.293.63-.8 1.227-1.267 1.683a9.237 9.237 0 0 1-.816.708l-.001.001.442.606c.44.607.441.607.441.606h.001l.002-.002.005-.003.018-.014a5.732 5.732 0 0 0 .274-.216c.176-.145.418-.354.683-.614.521-.51 1.175-1.254 1.578-2.123.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29l-.485 1.42Zm12.52 6.82 3-3-1.06-1.06-3 3 1.06 1.06Zm3-4.06-3-3-1.06 1.06 3 3 1.06-1.06ZM21 6.25h-8v1.5h8v-1.5Z"
  }));
};

const SvgSiPhoneLocked = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m7.18 10.27-.44-.607-.713.518.625.62.529-.532Zm6.504 6.46-.529.533.571.567.526-.61-.568-.49Zm7.316.924.748.052a.752.752 0 0 0-.038-.294l-.71.242Zm-14.284-3 .516-.545-.003-.002-.513.547ZM6.252 3l.242-.71-.13-.044-.139.004.027.75Zm8.498 3.5a.75.75 0 1 0 1.5 0h-1.5Zm4 0a.75.75 0 1 0 1.5 0h-1.5ZM6.652 10.801l6.503 6.462 1.058-1.064-6.504-6.462-1.057 1.064Zm7.6 6.42a9.31 9.31 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021.586-.19 1.125-.178 1.624.129.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38-.97-.598-1.992-.564-2.873-.278-.862.28-1.633.812-2.214 1.297-.588.49-1.023.97-1.214 1.19l1.136.98Zm6.748.433a54.29 54.29 0 0 1-.748-.053v-.007.01a2.352 2.352 0 0 1-.079.353 2.835 2.835 0 0 1-.475.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962.394-.505.61-1.01.726-1.392a3.826 3.826 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001L21 17.654Zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075 1.617 1.315 3.506 2.476 5.466 2.476v-1.5ZM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354l1.026-1.094Zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602.316-.24.63-.365.864-.43a2.116 2.116 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22a.559.559 0 0 0-.068.005 3.611 3.611 0 0 0-.61.114 4.061 4.061 0 0 0-1.371.684C3.14 3.838 2.25 5.288 2.25 7.846h1.5ZM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855.284.522.237 1.087-.05 1.706-.293.63-.8 1.227-1.267 1.683a9.237 9.237 0 0 1-.816.708l-.001.001.442.606c.44.607.441.607.441.606h.001l.002-.002.005-.003.018-.014a5.732 5.732 0 0 0 .274-.216c.176-.145.418-.354.683-.614.521-.51 1.175-1.254 1.578-2.123.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29l-.485 1.42Zm8.79 4.04h5.4v-1.5h-5.4v1.5Zm5.4 0c.011 0 .023.004.035.015a.048.048 0 0 1 .015.035h1.5c0-.854-.696-1.55-1.55-1.55v1.5Zm.05.05v2h1.5v-2h-1.5Zm0 2c0 .246-.204.45-.45.45v1.5c1.074 0 1.95-.876 1.95-1.95h-1.5Zm-.45.45h-4.6v1.5h4.6v-1.5Zm-4.6 0a.454.454 0 0 1-.45-.45h-1.5c0 1.074.876 1.95 1.95 1.95v-1.5Zm-.45-.45v-2h-1.5v2h1.5Zm0-2c0-.011.004-.023.015-.035a.048.048 0 0 1 .035-.015v-1.5c-.854 0-1.55.696-1.55 1.55h1.5Zm2.75-5.55A2.75 2.75 0 0 0 14.75 5h1.5c0-.69.56-1.25 1.25-1.25v-1.5ZM14.75 5v1.5h1.5V5h-1.5Zm5.5 1.5V5h-1.5v1.5h1.5Zm0-1.5a2.75 2.75 0 0 0-2.75-2.75v1.5c.69 0 1.25.56 1.25 1.25h1.5Z"
  }));
};

const SvgSiPhonePaused = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m7.18 10.27 6.504 6.46c.697-.807 5.11-5.538 7.316.924 0 0-.232 3.346-4.994 3.346-3.367 0-6.851-4.038-9.29-6.346C4.626 12.692 3 10.154 3 7.846 3 3.116 6.252 3 6.252 3c7.432 2.538.929 7.27.929 7.27Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m7.18 10.27-.44-.607-.713.518.625.62.529-.532Zm6.504 6.46-.529.533.571.567.526-.61-.568-.49Zm7.316.924.748.052a.752.752 0 0 0-.038-.294l-.71.242Zm-14.284-3 .516-.545-.003-.002-.513.547ZM6.252 3l.242-.71-.13-.044-.139.004.027.75ZM19.25 9a.75.75 0 0 0 1.5 0h-1.5Zm1.5-6a.75.75 0 0 0-1.5 0h1.5Zm-5.5 6a.75.75 0 0 0 1.5 0h-1.5Zm1.5-6a.75.75 0 0 0-1.5 0h1.5ZM6.652 10.801l6.503 6.462 1.058-1.064-6.504-6.462-1.057 1.064Zm7.6 6.42a9.31 9.31 0 0 1 1.04-1.02c.511-.427 1.112-.825 1.715-1.021.586-.19 1.125-.178 1.624.129.526.324 1.136 1.054 1.66 2.587l1.419-.485c-.58-1.697-1.35-2.799-2.293-3.38-.97-.598-1.992-.564-2.873-.278-.862.28-1.633.812-2.214 1.297-.588.49-1.023.97-1.214 1.19l1.136.98Zm6.748.433a54.29 54.29 0 0 1-.748-.053v-.007.01a2.352 2.352 0 0 1-.079.353 2.835 2.835 0 0 1-.475.908c-.493.631-1.51 1.385-3.692 1.385v1.5c2.58 0 4.06-.92 4.874-1.962.394-.505.61-1.01.726-1.392a3.826 3.826 0 0 0 .14-.664l.001-.015v-.006l.001-.003v-.001L21 17.654Zm-4.994 2.596c-1.407 0-2.944-.858-4.52-2.14-1.57-1.276-2.985-2.8-4.254-4L6.2 15.198c1.17 1.106 2.715 2.755 4.339 4.075 1.617 1.315 3.506 2.476 5.466 2.476v-1.5ZM7.23 14.107c-2.039-1.913-3.48-4.265-3.48-6.26h-1.5c0 2.619 1.81 5.343 3.953 7.354l1.026-1.094Zm-3.48-6.26c0-2.174.734-3.147 1.33-3.602.316-.24.63-.365.864-.43a2.116 2.116 0 0 1 .342-.066H6.28c-.001 0-.002 0-.028-.749l-.028-.75H6.22a.559.559 0 0 0-.068.005 3.611 3.611 0 0 0-.61.114 4.061 4.061 0 0 0-1.371.684C3.14 3.838 2.25 5.288 2.25 7.846h1.5ZM6.01 3.71c1.783.609 2.56 1.296 2.863 1.855.284.522.237 1.087-.05 1.706-.293.63-.8 1.227-1.267 1.683a9.237 9.237 0 0 1-.816.708l-.001.001.442.606c.44.607.441.607.441.606h.001l.002-.002.005-.003.018-.014a5.732 5.732 0 0 0 .274-.216c.176-.145.418-.354.683-.614.521-.51 1.175-1.254 1.578-2.123.41-.882.595-1.976.008-3.055C9.624 3.807 8.426 2.95 6.494 2.29l-.485 1.42ZM20.75 9V3h-1.5v6h1.5Zm-4 0V3h-1.5v6h1.5Z"
  }));
};

const SvgSiPlay = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m5 3 16 9-16 9V3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m5 3 16 9-16 9V3Z"
  }));
};

const SvgSiPlayForward = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m4 5 10 7-10 7V5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m21 12 .43.614a.75.75 0 0 0 0-1.228L21 12ZM11 5l.43-.614A.75.75 0 0 0 10.25 5H11Zm0 14h-.75a.75.75 0 0 0 1.18.614L11 19Zm.75-4.867a.75.75 0 0 0-1.5 0h1.5ZM14 12l.43.614a.75.75 0 0 0 0-1.228L14 12ZM4 5l.43-.614A.75.75 0 0 0 3.25 5H4Zm0 14h-.75a.75.75 0 0 0 1.18.614L4 19Zm17.43-7.614-10-7-.86 1.228 10 7 .86-1.228Zm-10 8.228 10-7-.86-1.228-10 7 .86 1.228ZM10.25 5v4.688h1.5V5h-1.5Zm0 9.133V19h1.5v-4.867h-1.5Zm4.18-2.747-10-7-.86 1.228 10 7 .86-1.228ZM3.25 5v14h1.5V5h-1.5Zm1.18 14.614 10-7-.86-1.228-10 7 .86 1.228Z"
  }));
};

const SvgSiPlayNext = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m3 5 10 7-10 7V5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m3 5 10 7-10 7V5Zm17.2 0h-2.4a.8.8 0 0 0-.8.8v12.4a.8.8 0 0 0 .8.8h2.4a.8.8 0 0 0 .8-.8V5.8a.8.8 0 0 0-.8-.8Z"
  }));
};

const SvgSiPlayPrevious = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m21 5-10 7 10 7V5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m21 5-10 7 10 7V5ZM3.8 5h2.4a.8.8 0 0 1 .8.8v12.4a.8.8 0 0 1-.8.8H3.8a.8.8 0 0 1-.8-.8V5.8a.8.8 0 0 1 .8-.8Z"
  }));
};

const SvgSiPlayRewind = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m20 5-10 7 10 7V5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m3 12-.43-.614a.75.75 0 0 0 0 1.228L3 12Zm10-7h.75a.75.75 0 0 0-1.18-.614L13 5Zm0 14-.43.614A.75.75 0 0 0 13.75 19H13Zm.75-4.867a.75.75 0 0 0-1.5 0h1.5ZM10 12l-.43-.614a.75.75 0 0 0 0 1.228L10 12Zm10-7h.75a.75.75 0 0 0-1.18-.614L20 5Zm0 14-.43.614A.75.75 0 0 0 20.75 19H20ZM3.43 12.614l10-7-.86-1.228-10 7 .86 1.228Zm10 5.772-10-7-.86 1.228 10 7 .86-1.228ZM12.25 5v4.688h1.5V5h-1.5Zm0 9.133V19h1.5v-4.867h-1.5Zm-1.82-1.519 10-7-.86-1.228-10 7 .86 1.228ZM19.25 5v14h1.5V5h-1.5Zm1.18 13.386-10-7-.86 1.228 10 7 .86-1.228Z"
  }));
};

const SvgSiProjects = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
    d: "M10 21V3m-7 7h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiProjectsAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 12V6m-5 8V6m10 10V6M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiPullRequest = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M18 16v-5.6A4.4 4.4 0 0 0 13.6 6H11m7 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM11 6l2-2m-2 2 2 2m-7 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
  }));
};

const SvgSiRecord = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }));
};

const SvgSiRemove = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiRemoveAlarm = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M8 13h8m2-10 3 3M3 6l3-3m14 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
  }));
};

const SvgSiRemoveCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M8 12h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));
};

const SvgSiRemoveFromLibrary = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M19.6 3H8.4A2.4 2.4 0 0 0 6 5.4v11.2A2.4 2.4 0 0 0 8.4 19h11.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 19.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M10 11h8m2 11H8.4C5.42 22 3 19.58 3 16.6V5m5.4-2h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3Z"
  }));
};

const SvgSiRemoveSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M8 12h8M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiReorder = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiReorderAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiRupee = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M7 4h3.75c1.393 0 2.728.474 3.713 1.318C15.447 6.162 16 7.307 16 8.5c0 1.193-.553 2.338-1.537 3.182-.985.844-2.32 1.318-3.712 1.318H7l8.2 7M7 8.5h11M11 4h7"
  }));
};

const SvgSiSearch = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m21 21-4-4m2-6a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
  }));
};

const SvgSiSearchAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M9 15A6 6 0 1 0 9 3a6 6 0 0 0 0 12Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m21 21-7.5-7.5M15 9A6 6 0 1 1 3 9a6 6 0 0 1 12 0Z"
  }));
};

const SvgSiSegment = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiSettings = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    fill: "currentColor",
    clipPath: "url(#si_Settings_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M18.71 10H21v-.02c1.1 0 2 .9 2 2s-.9 2-2 2h-2.29c-.07.23-.15.46-.24.68-.1.22-.2.44-.31.65l1.62 1.62c.78.78.78 2.05 0 2.83-.78.78-2.05.78-2.83 0l-1.62-1.62c-.21.12-.43.22-.65.31-.22.09-.45.17-.68.24v2.29c0 1.1-.9 2-2 2s-2-.9-2-2v-2.29c-.23-.07-.46-.15-.68-.24-.22-.1-.44-.2-.65-.31l-1.62 1.62c-.78.78-2.05.78-2.83 0-.78-.78-.78-2.05 0-2.83l1.62-1.62c-.12-.21-.22-.43-.31-.65-.09-.22-.17-.45-.24-.68H3c-1.1 0-2-.9-2-2s.9-2 2-2h2.33a7.454 7.454 0 0 1 .54-1.32L4.25 7.04c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0L8.7 5.83c.21-.11.42-.21.64-.3h.01c.22-.09.44-.17.67-.24V3c0-1.1.9-2 2-2s2 .9 2 2v2.31c.23.07.45.15.67.24h.01c.22.09.43.19.64.3l1.62-1.62c.78-.78 2.05-.78 2.83 0 .78.78.78 2.05 0 2.83l-1.62 1.62a7.454 7.454 0 0 1 .54 1.32ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M21 10v.75a.75.75 0 0 0 .75-.75H21Zm-2.29 0-.718.218a.75.75 0 0 0 .718.532V10Zm-.54-1.32-.53-.53a.75.75 0 0 0-.134.878l.664-.348Zm1.62-1.62.53.53-.53-.53Zm-2.83-2.83-.53-.53.53.53Zm-1.62 1.62-.348.664a.75.75 0 0 0 .878-.134l-.53-.53Zm-.64-.3.284-.694A.75.75 0 0 0 14.7 4.8v.75Zm-.01 0-.284.694a.75.75 0 0 0 .284.056v-.75Zm-.67-.24h-.75c0 .33.216.621.532.718l.218-.718Zm-4-.02.218.718a.75.75 0 0 0 .532-.718h-.75Zm-.67.24v.75a.75.75 0 0 0 .284-.056L9.35 5.53Zm-.01 0v-.75a.75.75 0 0 0-.284.056l.284.694Zm-.64.3-.53.53a.75.75 0 0 0 .878.134L8.7 5.83ZM5.87 8.66l.664.348A.75.75 0 0 0 6.4 8.13l-.53.53Zm-.54 1.32v.75a.75.75 0 0 0 .718-.532L5.33 9.98Zm-.04 4 .718-.218a.75.75 0 0 0-.718-.532v.75Zm.55 1.33.53.53a.75.75 0 0 0 .121-.902l-.651.372Zm-1.62 1.62-.53-.53.53.53Zm2.83 2.83.53.53-.53-.53Zm1.62-1.62.348-.664a.75.75 0 0 0-.878.134l.53.53Zm.65.31-.31.683.026.011.284-.694Zm.68.24h.75a.75.75 0 0 0-.532-.718L10 18.69Zm4 0-.218-.718a.75.75 0 0 0-.532.718H14Zm1.33-.55.53-.53a.75.75 0 0 0-.902-.121l.372.651Zm4.45-1.21.53-.53-.53.53Zm-1.62-1.62-.664-.348a.75.75 0 0 0 .134.878l.53-.53Zm.31-.65.683.31.011-.026-.694-.284Zm.24-.68v-.75a.75.75 0 0 0-.718.532l.718.218Zm2.29-4v-.75a.75.75 0 0 0-.75.75H21Zm0-.73h-2.29v1.5H21v-1.5Zm-1.573.532a8.572 8.572 0 0 0-.263-.746l-1.388.568c.08.195.152.403.216.614l1.435-.436Zm-.263-.746a8.25 8.25 0 0 0-.33-.704l-1.328.696c.1.193.19.382.27.576l1.388-.568Zm-.464.174 1.62-1.62-1.06-1.06-1.62 1.62 1.06 1.06Zm1.62-1.62a2.754 2.754 0 0 0 0-3.89l-1.06 1.06a1.254 1.254 0 0 1 0 1.77l1.06 1.06Zm0-3.89a2.754 2.754 0 0 0-3.89 0l1.06 1.06a1.254 1.254 0 0 1 1.77 0l1.06-1.06Zm-3.89 0-1.62 1.62 1.06 1.06 1.62-1.62-1.06-1.06Zm-.742 1.486a8.195 8.195 0 0 0-.704-.33l-.568 1.388c.194.08.383.17.576.27l.696-1.328Zm-.988.364V4.8h-.01v1.5h.01v-.75Zm.274-.694a8.37 8.37 0 0 0-.736-.264l-.436 1.436c.204.062.402.134.604.216l.568-1.388Zm-.204.454V3h-1.5v2.31h1.5Zm0-2.31A2.756 2.756 0 0 0 12.02.25v1.5c.686 0 1.25.564 1.25 1.25h1.5ZM12.02.25A2.756 2.756 0 0 0 9.27 3h1.5c0-.686.564-1.25 1.25-1.25V.25ZM9.27 3v2.29h1.5V3h-1.5Zm.532 1.572a8.358 8.358 0 0 0-.736.264l.568 1.388c.202-.082.4-.154.604-.216l-.436-1.436Zm-.452.958v-.75h-.01v1.5h.01v-.75Zm-.294-.694c-.246.1-.477.21-.704.33l.696 1.328c.193-.1.382-.19.576-.27l-.568-1.388Zm.174.464L7.61 3.68 6.55 4.74l1.62 1.62L9.23 5.3ZM7.61 3.68a2.754 2.754 0 0 0-3.89 0l1.06 1.06a1.254 1.254 0 0 1 1.77 0l1.06-1.06Zm-3.89 0a2.754 2.754 0 0 0 0 3.89l1.06-1.06a1.254 1.254 0 0 1 0-1.77L3.72 3.68Zm0 3.89 1.62 1.62L6.4 8.13 4.78 6.51 3.72 7.57Zm1.486.742c-.12.227-.23.458-.33.704l1.388.568c.08-.194.17-.383.27-.576l-1.328-.696Zm-.33.704c-.1.245-.188.497-.264.746l1.436.436c.064-.211.136-.419.216-.614l-1.388-.568Zm.454.214H3v1.5h2.33v-1.5ZM3 9.23a2.756 2.756 0 0 0-2.75 2.75h1.5c0-.686.564-1.25 1.25-1.25v-1.5ZM.25 11.98A2.756 2.756 0 0 0 3 14.73v-1.5c-.686 0-1.25-.564-1.25-1.25H.25ZM3 14.73h2.29v-1.5H3v1.5Zm1.572-.532c.076.249.164.501.264.746l1.388-.568a7.07 7.07 0 0 1-.216-.614l-1.436.436Zm.264.746c.097.237.21.49.353.738l1.302-.744a4.775 4.775 0 0 1-.267-.562l-1.388.568Zm.474-.164L3.69 16.4l1.06 1.06 1.62-1.62-1.06-1.06ZM3.69 16.4a2.754 2.754 0 0 0 0 3.89l1.06-1.06a1.254 1.254 0 0 1 0-1.77L3.69 16.4Zm0 3.89a2.754 2.754 0 0 0 3.89 0l-1.06-1.06a1.254 1.254 0 0 1-1.77 0l-1.06 1.06Zm3.89 0 1.62-1.62-1.06-1.06-1.62 1.62 1.06 1.06Zm.742-1.486c.232.122.471.23.688.329l.62-1.366a12.229 12.229 0 0 1-.612-.291l-.696 1.328Zm.714.34c.245.1.497.188.746.264l.436-1.436a7.063 7.063 0 0 1-.614-.216l-.568 1.388Zm.214-.454v2.29h1.5v-2.29h-1.5Zm0 2.29A2.756 2.756 0 0 0 12 23.73v-1.5c-.686 0-1.25-.564-1.25-1.25h-1.5ZM12 23.73a2.756 2.756 0 0 0 2.75-2.75h-1.5c0 .686-.564 1.25-1.25 1.25v1.5Zm2.75-2.75v-2.29h-1.5v2.29h1.5Zm-.532-1.573c.249-.075.501-.163.746-.263l-.568-1.388c-.195.08-.403.152-.614.216l.436 1.435Zm.746-.263c.237-.097.49-.21.738-.353l-.744-1.302a4.762 4.762 0 0 1-.562.267l.568 1.388Zm-.164-.474 1.62 1.62 1.06-1.06-1.62-1.62-1.06 1.06Zm1.62 1.62a2.754 2.754 0 0 0 3.89 0l-1.06-1.06a1.254 1.254 0 0 1-1.77 0l-1.06 1.06Zm3.89 0a2.754 2.754 0 0 0 0-3.89l-1.06 1.06a1.254 1.254 0 0 1 0 1.77l1.06 1.06Zm0-3.89-1.62-1.62-1.06 1.06 1.62 1.62 1.06-1.06Zm-1.486-.742c.122-.232.23-.471.329-.688l-1.366-.62a12.41 12.41 0 0 1-.291.612l1.328.696Zm.34-.714c.1-.245.188-.497.263-.746l-1.434-.436a7.262 7.262 0 0 1-.217.614l1.388.568Zm-.454-.214H21v-1.5h-2.29v1.5Zm2.29 0a2.756 2.756 0 0 0 2.75-2.75h-1.5c0 .686-.564 1.25-1.25 1.25v1.5Zm2.75-2.75A2.756 2.756 0 0 0 21 9.23v1.5c.686 0 1.25.564 1.25 1.25h1.5Zm-3.5-2V10h1.5v-.02h-1.5Zm-5 2.02A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12h-1.5ZM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75v-1.5ZM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12h1.5ZM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25v1.5Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "si_Settings_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

const SvgSiSettingsAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    fill: "currentColor",
    clipPath: "url(#si_Settings_alt_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M18.71 10h2.69c.88 0 1.6.72 1.6 1.6v.8c0 .88-.72 1.6-1.6 1.6h-2.69c-.14.47-.32.91-.55 1.33l1.9 1.9c.62.62.62 1.64 0 2.26l-.57.57c-.62.62-1.64.62-2.26 0l-1.9-1.9c-.42.23-.86.41-1.33.55v2.69c0 .88-.72 1.6-1.6 1.6h-.8c-.88 0-1.6-.72-1.6-1.6v-2.69a6.77 6.77 0 0 1-1.33-.55l-1.9 1.9c-.62.62-1.64.62-2.26 0l-.57-.57c-.62-.62-.62-1.64 0-2.26l1.9-1.9A6.77 6.77 0 0 1 5.29 14H2.6c-.88 0-1.6-.72-1.6-1.6v-.8c0-.88.72-1.6 1.6-1.6h2.69c.14-.47.32-.91.55-1.33l-1.9-1.9c-.62-.62-.62-1.64 0-2.26l.57-.57c.62-.62 1.64-.62 2.26 0l1.9 1.9c.42-.23.86-.41 1.33-.55V2.6c0-.88.72-1.6 1.6-1.6h.8c.88 0 1.6.72 1.6 1.6v2.69c.47.14.91.32 1.33.55l1.9-1.9c.62-.62 1.64-.62 2.26 0l.57.57c.62.62.62 1.64 0 2.26l-1.9 1.9c.23.42.41.86.55 1.33ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m18.71 10-.719.214a.75.75 0 0 0 .719.536V10Zm-.55-1.33-.53-.53a.75.75 0 0 0-.128.89l.658-.36Zm1.9-1.9-.53-.53.53.53Zm0-2.26-.53.53.53-.53Zm-.57-.57.53-.53-.53.53Zm-2.26 0-.53-.53.53.53Zm-1.9 1.9-.36.658a.75.75 0 0 0 .89-.128l-.53-.53ZM14 5.29h-.75a.75.75 0 0 0 .536.719L14 5.29Zm-4 0 .214.719a.75.75 0 0 0 .536-.719H10Zm-1.33.55-.53.53a.75.75 0 0 0 .89.128l-.36-.658ZM5.84 8.67l.658.36a.75.75 0 0 0-.128-.89l-.53.53ZM5.29 10v.75a.75.75 0 0 0 .719-.536L5.29 10Zm0 4 .719-.214a.75.75 0 0 0-.719-.536V14Zm.55 1.33.53.53a.75.75 0 0 0 .128-.89l-.658.36Zm-1.9 1.9-.53-.53.53.53Zm0 2.26-.53.53.53-.53Zm.57.57.53-.53-.53.53Zm2.26 0-.53-.53.53.53Zm1.9-1.9.36-.658a.75.75 0 0 0-.89.128l.53.53Zm1.33.55h.75a.75.75 0 0 0-.536-.719L10 18.71Zm4 0-.214-.719a.75.75 0 0 0-.536.719H14Zm1.33-.55.53-.53a.75.75 0 0 0-.89-.128l.36.658Zm2.83-2.83-.658-.36a.75.75 0 0 0 .128.89l.53-.53Zm.55-1.33v-.75a.75.75 0 0 0-.719.536l.719.214Zm2.69-4.75h-2.69v1.5h2.69v-1.5Zm-1.971.536a7.516 7.516 0 0 0-.611-1.476l-1.316.72c.203.37.363.76.49 1.184l1.437-.428ZM18.69 9.2l1.9-1.9-1.06-1.06-1.9 1.9 1.06 1.06Zm1.9-1.9a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2l1.06 1.06Zm0-3.32-.57-.57-1.06 1.06.57.57 1.06-1.06Zm-.57-.57a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0l1.06-1.06Zm-3.32 0-1.9 1.9 1.06 1.06 1.9-1.9-1.06-1.06Zm-1.01 1.772a7.518 7.518 0 0 0-1.476-.61l-.428 1.437a6 6 0 0 1 1.184.489l.72-1.316Zm-.94.108V2.6h-1.5v2.69h1.5Zm0-2.69A2.355 2.355 0 0 0 12.4.25v1.5c.466 0 .85.384.85.85h1.5ZM12.4.25h-.8v1.5h.8V.25Zm-.8 0A2.355 2.355 0 0 0 9.25 2.6h1.5c0-.466.384-.85.85-.85V.25ZM9.25 2.6v2.69h1.5V2.6h-1.5Zm.536 1.971a7.52 7.52 0 0 0-1.476.611l.72 1.316a6.02 6.02 0 0 1 1.184-.49l-.428-1.437ZM9.2 5.31l-1.9-1.9-1.06 1.06 1.9 1.9L9.2 5.31Zm-1.9-1.9a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0L7.3 3.41Zm-3.32 0-.57.57 1.06 1.06.57-.57-1.06-1.06Zm-.57.57a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2L3.41 3.98Zm0 3.32 1.9 1.9 1.06-1.06-1.9-1.9L3.41 7.3Zm1.772 1.01a7.52 7.52 0 0 0-.61 1.476l1.437.428a6.02 6.02 0 0 1 .489-1.184l-1.316-.72Zm.108.94H2.6v1.5h2.69v-1.5Zm-2.69 0A2.355 2.355 0 0 0 .25 11.6h1.5c0-.466.384-.85.85-.85v-1.5ZM.25 11.6v.8h1.5v-.8H.25Zm0 .8a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85H.25Zm2.35 2.35h2.69v-1.5H2.6v1.5Zm1.971-.536a7.54 7.54 0 0 0 .611 1.476l1.316-.72a6.022 6.022 0 0 1-.49-1.184l-1.437.428Zm.739.586-1.9 1.9 1.06 1.06 1.9-1.9-1.06-1.06Zm-1.9 1.9a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2L3.41 16.7Zm0 3.32.57.57 1.06-1.06-.57-.57-1.06 1.06Zm.57.57a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0l-1.06 1.06Zm3.32 0 1.9-1.9-1.06-1.06-1.9 1.9 1.06 1.06Zm1.01-1.772a7.5 7.5 0 0 0 1.476.61l.428-1.437a6.024 6.024 0 0 1-1.184-.489l-.72 1.316Zm.94-.108v2.69h1.5v-2.69h-1.5Zm0 2.69a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85h-1.5Zm2.35 2.35h.8v-1.5h-.8v1.5Zm.8 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85v1.5Zm2.35-2.35v-2.69h-1.5v2.69h1.5Zm-.536-1.971a7.515 7.515 0 0 0 1.476-.611l-.72-1.316c-.37.203-.76.363-1.184.49l.428 1.437Zm.586-.739 1.9 1.9 1.06-1.06-1.9-1.9-1.06 1.06Zm1.9 1.9a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0l-1.06 1.06Zm3.32 0 .57-.57-1.06-1.06-.57.57 1.06 1.06Zm.57-.57a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2l1.06 1.06Zm0-3.32-1.9-1.9-1.06 1.06 1.9 1.9 1.06-1.06Zm-1.772-1.01a7.5 7.5 0 0 0 .61-1.476l-1.437-.428a6.025 6.025 0 0 1-.489 1.184l1.316.72Zm-.108-.94h2.69v-1.5h-2.69v1.5Zm2.69 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85v1.5Zm2.35-2.35v-.8h-1.5v.8h1.5Zm0-.8a2.355 2.355 0 0 0-2.35-2.35v1.5c.466 0 .85.384.85.85h1.5Zm-8.5.4A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12h-1.5ZM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75v-1.5ZM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12h1.5ZM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25v1.5Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "si_Settings_alt_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

const SvgSiSettingsApplications = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    fill: "currentColor",
    clipPath: "url(#si_Settings_applications_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M16.75 10.5h1.75c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-1.75c-.09.28-.2.55-.33.8l1.24 1.24c.59.58.59 1.53 0 2.12-.58.59-1.53.59-2.12 0l-1.24-1.24c-.26.13-.52.24-.8.33v1.75c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-1.75c-.28-.09-.55-.2-.8-.33l-1.24 1.24c-.58.59-1.53.59-2.12 0a1.49 1.49 0 0 1 0-2.12l1.24-1.24c-.13-.26-.24-.52-.33-.8H5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h1.75c.09-.28.2-.55.33-.8L6.34 8.46c-.59-.58-.58-1.53 0-2.12a1.49 1.49 0 0 1 2.12 0L9.7 7.58c.26-.13.52-.24.8-.33V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1.75c.28.09.55.2.8.33l1.24-1.24c.58-.59 1.53-.58 2.12 0 .59.58.59 1.53 0 2.12L16.42 9.7c.13.26.24.52.33.8ZM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m16.75 10.5-.714.23c.1.31.388.52.714.52v-.75Zm-.33-.8-.53-.53a.75.75 0 0 0-.14.865l.67-.335Zm-.88-3.36.53.53.005-.004-.535-.526ZM14.3 7.58l-.346.665a.75.75 0 0 0 .876-.135l-.53-.53Zm-.8-.33h-.75c0 .326.21.614.52.714l.23-.714Zm-3 0 .23.714a.75.75 0 0 0 .52-.714h-.75Zm-.8.33-.53.53a.75.75 0 0 0 .865.14L9.7 7.58Zm-3.36.88.53-.53-.004-.005-.526.535ZM7.58 9.7l.665.346a.75.75 0 0 0-.135-.876l-.53.53Zm-.33.8v.75a.75.75 0 0 0 .714-.52l-.714-.23Zm0 3 .714-.23a.75.75 0 0 0-.714-.52v.75Zm.33.8.53.53a.75.75 0 0 0 .14-.865l-.67.335Zm-1.24 3.36.53-.53-.004-.005-.526.535Zm2.12 0-.53-.53-.005.004.535.526Zm1.24-1.24.346-.665a.75.75 0 0 0-.876.135l.53.53Zm.8.33h.75a.75.75 0 0 0-.52-.714l-.23.714Zm3 0-.23-.714a.75.75 0 0 0-.52.714h.75Zm.8-.33.53-.53a.75.75 0 0 0-.865-.14l.335.67Zm3.36 1.24-.53-.53-.005.004.535.526Zm0-2.12-.53.53.004.005.526-.535Zm-1.24-1.24-.665-.346a.75.75 0 0 0 .135.876l.53-.53Zm.33-.8v-.75a.75.75 0 0 0-.714.52l.714.23ZM3.933 1.75h16.134V.25H3.933v1.5Zm16.134 0c1.206 0 2.183.978 2.183 2.183h1.5A3.683 3.683 0 0 0 20.067.25v1.5Zm2.183 2.183v16.134h1.5V3.933h-1.5Zm0 16.134a2.183 2.183 0 0 1-2.183 2.183v1.5a3.683 3.683 0 0 0 3.683-3.683h-1.5Zm-2.183 2.183H3.933v1.5h16.134v-1.5Zm-16.134 0a2.183 2.183 0 0 1-2.183-2.183H.25a3.683 3.683 0 0 0 3.683 3.683v-1.5ZM1.75 20.067V3.933H.25v16.134h1.5Zm0-16.134c0-1.205.978-2.183 2.183-2.183V.25A3.683 3.683 0 0 0 .25 3.933h1.5ZM18.5 9.75h-1.75v1.5h1.75v-1.5Zm-1.036.52a6.357 6.357 0 0 0-.373-.905l-1.342.67c.116.232.21.457.287.694l1.428-.458Zm-.514-.04 1.24-1.24-1.06-1.06-1.24 1.24 1.06 1.06Zm1.24-1.24a2.24 2.24 0 0 0-.004-3.185l-1.052 1.07a.74.74 0 0 1-.004 1.055l1.06 1.06Zm-.004-3.185c-.874-.858-2.299-.888-3.18.01l1.069 1.05a.75.75 0 0 1 1.06.01l1.05-1.07Zm-3.176.005-1.24 1.24 1.06 1.06 1.24-1.24-1.06-1.06Zm-.364 1.105a5.912 5.912 0 0 0-.917-.379l-.458 1.428c.244.079.475.173.683.281l.692-1.33Zm-.396.335V5.5h-1.5v1.75h1.5Zm0-1.75A2.248 2.248 0 0 0 12 3.25v1.5c.416 0 .75.334.75.75h1.5ZM12 3.25A2.248 2.248 0 0 0 9.75 5.5h1.5c0-.416.334-.75.75-.75v-1.5ZM9.75 5.5v1.75h1.5V5.5h-1.5Zm.52 1.036a6.353 6.353 0 0 0-.905.373l.67 1.342a4.86 4.86 0 0 1 .694-.287l-.458-1.428Zm-.04.514L8.99 5.81 7.93 6.87l1.24 1.24 1.06-1.06ZM8.99 5.81a2.24 2.24 0 0 0-3.185.004l1.07 1.052a.74.74 0 0 1 1.055.004l1.06-1.06Zm-3.185.004c-.858.874-.888 2.299.01 3.18l1.05-1.069a.75.75 0 0 1 .01-1.06l-1.07-1.05ZM5.81 8.99l1.24 1.24 1.06-1.06-1.24-1.24-1.06 1.06Zm1.105.364a5.913 5.913 0 0 0-.379.917l1.428.458c.079-.244.173-.475.281-.683l-1.33-.692Zm.335.396H5.5v1.5h1.75v-1.5Zm-1.75 0A2.248 2.248 0 0 0 3.25 12h1.5c0-.416.334-.75.75-.75v-1.5ZM3.25 12a2.248 2.248 0 0 0 2.25 2.25v-1.5a.748.748 0 0 1-.75-.75h-1.5Zm2.25 2.25h1.75v-1.5H5.5v1.5Zm1.036-.52c.103.322.229.617.373.905l1.342-.67a4.86 4.86 0 0 1-.287-.694l-1.428.458Zm.514.04-1.24 1.24 1.06 1.06 1.24-1.24-1.06-1.06Zm-1.24 1.24a2.24 2.24 0 0 0 .004 3.185l1.052-1.07a.741.741 0 0 1 .004-1.055l-1.06-1.06Zm0 3.18a2.24 2.24 0 0 0 3.185-.004l-1.07-1.052a.74.74 0 0 1-1.055-.004l-1.06 1.06Zm3.18 0 1.24-1.24-1.06-1.06-1.24 1.24 1.06 1.06Zm.364-1.105c.292.152.601.278.917.379l.458-1.428a4.42 4.42 0 0 1-.683-.281l-.692 1.33Zm.396-.335v1.75h1.5v-1.75h-1.5Zm0 1.75A2.248 2.248 0 0 0 12 20.75v-1.5a.748.748 0 0 1-.75-.75h-1.5ZM12 20.75a2.248 2.248 0 0 0 2.25-2.25h-1.5c0 .416-.334.75-.75.75v1.5Zm2.25-2.25v-1.75h-1.5v1.75h1.5Zm-.52-1.036c.322-.104.617-.229.905-.373l-.67-1.342a4.96 4.96 0 0 1-.694.287l.458 1.428Zm.04-.514 1.24 1.24 1.06-1.06-1.24-1.24-1.06 1.06Zm1.24 1.24a2.24 2.24 0 0 0 3.185-.004l-1.07-1.052a.741.741 0 0 1-1.055-.004l-1.06 1.06Zm3.18 0a2.24 2.24 0 0 0-.004-3.185l-1.052 1.07a.741.741 0 0 1-.004 1.055l1.06 1.06Zm0-3.18-1.24-1.24-1.06 1.06 1.24 1.24 1.06-1.06Zm-1.105-.364a5.84 5.84 0 0 0 .379-.917l-1.428-.458a4.42 4.42 0 0 1-.281.683l1.33.692Zm-.335-.396h1.75v-1.5h-1.75v1.5Zm1.75 0A2.248 2.248 0 0 0 20.75 12h-1.5c0 .416-.334.75-.75.75v1.5ZM20.75 12a2.248 2.248 0 0 0-2.25-2.25v1.5c.416 0 .75.334.75.75h1.5Zm-7.5 0c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 12h-1.5ZM12 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 14.75v-1.5ZM10.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 12h1.5ZM12 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 9.25v1.5Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "si_Settings_applications_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

const SvgSiSettingsCute = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    fill: "currentColor",
    clipPath: "url(#si_Settings_cute_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M20 9c1.66 0 3 1.34 3 3s-1.34 3-3 3h-.76l.54.54a3 3 0 0 1 0 4.24 3 3 0 0 1-4.24 0l-.54-.54V20c0 1.66-1.34 3-3 3s-3-1.34-3-3v-.76l-.54.54a3 3 0 0 1-4.24 0 3 3 0 0 1 0-4.24l.54-.54H4c-1.66 0-3-1.34-3-3s1.34-3 3-3h.76l-.54-.54a3 3 0 0 1 0-4.24 3 3 0 0 1 4.24 0l.54.54V4c0-1.66 1.34-3 3-3s3 1.34 3 3v.76l.54-.54a3 3 0 0 1 4.24 0 3 3 0 0 1 0 4.24l-.54.54H20Zm-4 3a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m19.24 9-.53-.53a.75.75 0 0 0 .53 1.28V9Zm.54-.54.53.53-.53-.53Zm-4.24-4.24-.53-.53.53.53Zm-.54.54h-.75a.75.75 0 0 0 1.28.53L15 4.76Zm-6 0-.53.53a.75.75 0 0 0 1.28-.53H9Zm-.54-.54.53-.53-.53.53ZM4.22 8.46l-.53.53.53-.53Zm.54.54v.75a.75.75 0 0 0 .53-1.28L4.76 9Zm0 6 .53.53a.75.75 0 0 0-.53-1.28V15Zm-.54.54-.53-.53.53.53Zm4.24 4.24.53.53-.53-.53Zm.54-.54h.75a.75.75 0 0 0-1.28-.53l.53.53Zm6 0 .53-.53a.75.75 0 0 0-1.28.53H15Zm.54.54-.53.53.53-.53Zm4.24-4.24.53-.53-.53.53Zm-.54-.54v-.75a.75.75 0 0 0-.53 1.28l.53-.53Zm4.51-3A3.746 3.746 0 0 0 20 8.25v1.5A2.246 2.246 0 0 1 22.25 12h1.5ZM20 8.25h-.76v1.5H20v-1.5Zm-.23 1.28.54-.54-1.06-1.06-.54.54 1.06 1.06Zm.54-.54a3.75 3.75 0 0 0 0-5.3l-1.06 1.06a2.25 2.25 0 0 1 0 3.18l1.06 1.06Zm0-5.3a3.75 3.75 0 0 0-5.3 0l1.06 1.06a2.25 2.25 0 0 1 3.18 0l1.06-1.06Zm-5.3 0-.54.54 1.06 1.06.54-.54-1.06-1.06Zm.74 1.07V4h-1.5v.76h1.5Zm0-.76A3.746 3.746 0 0 0 12 .25v1.5A2.246 2.246 0 0 1 14.25 4h1.5ZM12 .25A3.746 3.746 0 0 0 8.25 4h1.5A2.246 2.246 0 0 1 12 1.75V.25ZM8.25 4v.76h1.5V4h-1.5Zm1.28.23-.54-.54-1.06 1.06.54.54 1.06-1.06Zm-.54-.54a3.75 3.75 0 0 0-5.3 0l1.06 1.06a2.25 2.25 0 0 1 3.18 0l1.06-1.06Zm-5.3 0a3.75 3.75 0 0 0 0 5.3l1.06-1.06a2.25 2.25 0 0 1 0-3.18L3.69 3.69Zm0 5.3.54.54 1.06-1.06-.54-.54-1.06 1.06Zm1.07-.74H4v1.5h.76v-1.5Zm-.76 0A3.746 3.746 0 0 0 .25 12h1.5A2.246 2.246 0 0 1 4 9.75v-1.5ZM.25 12A3.746 3.746 0 0 0 4 15.75v-1.5A2.246 2.246 0 0 1 1.75 12H.25ZM4 15.75h.76v-1.5H4v1.5Zm.23-1.28-.54.54 1.06 1.06.54-.54-1.06-1.06Zm-.54.54a3.75 3.75 0 0 0 0 5.3l1.06-1.06a2.25 2.25 0 0 1 0-3.18l-1.06-1.06Zm0 5.3a3.75 3.75 0 0 0 5.3 0l-1.06-1.06a2.25 2.25 0 0 1-3.18 0l-1.06 1.06Zm5.3 0 .54-.54-1.06-1.06-.54.54 1.06 1.06Zm-.74-1.07V20h1.5v-.76h-1.5Zm0 .76A3.746 3.746 0 0 0 12 23.75v-1.5A2.246 2.246 0 0 1 9.75 20h-1.5ZM12 23.75A3.746 3.746 0 0 0 15.75 20h-1.5A2.246 2.246 0 0 1 12 22.25v1.5ZM15.75 20v-.76h-1.5V20h1.5Zm-1.28-.23.54.54 1.06-1.06-.54-.54-1.06 1.06Zm.54.54a3.75 3.75 0 0 0 5.3 0l-1.06-1.06a2.25 2.25 0 0 1-3.18 0l-1.06 1.06Zm5.3 0a3.75 3.75 0 0 0 0-5.3l-1.06 1.06a2.25 2.25 0 0 1 0 3.18l1.06 1.06Zm0-5.3-.54-.54-1.06 1.06.54.54 1.06-1.06Zm-1.07.74H20v-1.5h-.76v1.5Zm.76 0A3.746 3.746 0 0 0 23.75 12h-1.5A2.246 2.246 0 0 1 20 14.25v1.5ZM15.25 12A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12h-1.5ZM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75v-1.5ZM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12h1.5ZM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25v1.5Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "si_Settings_cute_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

const SvgSiSettingsThick = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M18.51 9.49h1.87c.88 0 1.6.72 1.6 1.6v1.8c0 .88-.72 1.6-1.6 1.6h-1.87c-.03.092-.068.179-.106.269l-.034.081 1.32 1.32c.62.62.62 1.64 0 2.26l-1.27 1.27c-.62.62-1.64.62-2.26 0l-1.32-1.32a2.777 2.777 0 0 1-.2.08l-.15.06v1.87c0 .88-.72 1.6-1.6 1.6h-1.8c-.88 0-1.6-.72-1.6-1.6v-1.87c-.092-.03-.179-.068-.269-.106l-.081-.034-1.32 1.32c-.62.62-1.64.62-2.26 0l-1.27-1.27c-.62-.62-.62-1.64 0-2.26l1.32-1.32a2.777 2.777 0 0 1-.08-.2l-.06-.15H3.6c-.88 0-1.6-.72-1.6-1.6v-1.8c0-.88.72-1.6 1.6-1.6h1.87c.03-.092.068-.179.106-.269l.034-.081-1.32-1.32c-.62-.62-.62-1.64 0-2.26l1.27-1.27c.62-.62 1.64-.62 2.26 0l1.32 1.32c.064-.029.131-.055.2-.08l.15-.06V3.6c0-.88.72-1.6 1.6-1.6h1.8c.88 0 1.6.72 1.6 1.6v1.87c.092.03.179.068.269.106l.081.034 1.32-1.32c.62-.62 1.64-.62 2.26 0l1.27 1.27c.62.62.62 1.64 0 2.26l-1.32 1.32c.029.064.055.131.08.2l.06.15ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    d: "m18.51 9.49-.692.288a.75.75 0 0 0 .692.462v-.75Zm-.14-.35-.53-.53a.75.75 0 0 0-.153.84l.683-.31Zm1.32-1.32-.53-.53.53.53Zm0-2.26-.53.53.53-.53Zm-1.27-1.27.53-.53-.53.53Zm-2.26 0-.53-.53.53.53Zm-1.32 1.32-.288.692a.75.75 0 0 0 .818-.162l-.53-.53Zm-.35-.14h-.75c0 .323.207.61.513.712l.237-.712Zm-5 0 .288.692a.75.75 0 0 0 .462-.692h-.75Zm-.35.14-.53.53a.75.75 0 0 0 .84.153l-.31-.683ZM7.82 4.29l.53-.53-.53.53Zm-2.26 0-.53-.53.53.53ZM4.29 5.56l.53.53-.53-.53Zm0 2.26.53-.53-.53.53Zm1.32 1.32.692.288a.75.75 0 0 0-.162-.818l-.53.53Zm-.14.35v.75a.75.75 0 0 0 .712-.513L5.47 9.49Zm0 5 .692-.289a.75.75 0 0 0-.692-.461v.75Zm.14.35.53.53a.75.75 0 0 0 .153-.84l-.683.31Zm-1.32 1.32-.53-.53.53.53Zm0 2.26.53-.53-.53.53Zm1.27 1.27-.53.53.53-.53Zm2.26 0 .53.53-.53-.53Zm1.32-1.32.288-.692a.75.75 0 0 0-.818.162l.53.53Zm.35.14h.75a.75.75 0 0 0-.513-.712l-.237.712Zm5 0-.289-.692a.75.75 0 0 0-.461.692h.75Zm.35-.14.53-.53a.75.75 0 0 0-.84-.153l.31.683Zm1.32 1.32-.53.53.53-.53Zm2.26 0 .53.53-.53-.53Zm1.27-1.27-.53-.53.53.53Zm-1.32-3.58-.692-.288a.75.75 0 0 0 .162.818l.53-.53Zm.14-.35v-.75a.75.75 0 0 0-.712.513l.712.237Zm1.87-5.75h-1.87v1.5h1.87v-1.5Zm-1.178.462c-.02-.048-.037-.093-.062-.159a3.864 3.864 0 0 0-.087-.213l-1.366.62c.015.033.03.072.053.13.02.051.047.126.078.198l1.384-.576Zm-.302.468 1.32-1.32-1.06-1.06-1.32 1.32 1.06 1.06Zm1.32-1.32a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2l1.06 1.06Zm0-3.32-1.27-1.27-1.06 1.06 1.27 1.27 1.06-1.06Zm-1.27-1.27a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0l1.06-1.06Zm-3.32 0-1.32 1.32 1.06 1.06 1.32-1.32-1.06-1.06Zm-.502 1.158c-.091-.039-.246-.108-.4-.16l-.475 1.424c.085.028.15.059.299.12l.577-1.384Zm.112.552V3.6h-1.5v1.87h1.5Zm0-1.87a2.355 2.355 0 0 0-2.35-2.35v1.5c.466 0 .85.384.85.85h1.5Zm-2.35-2.35h-1.8v1.5h1.8v-1.5Zm-1.8 0A2.355 2.355 0 0 0 8.74 3.6h1.5c0-.466.384-.85.85-.85v-1.5ZM8.74 3.6v1.87h1.5V3.6h-1.5Zm.462 1.178c-.048.02-.093.037-.159.062-.06.022-.136.052-.213.087l.62 1.366c.033-.015.072-.03.13-.053.051-.02.126-.047.198-.078l-.576-1.384Zm.468.302L8.35 3.76 7.29 4.82l1.32 1.32 1.06-1.06ZM8.35 3.76a2.355 2.355 0 0 0-3.32 0l1.06 1.06a.856.856 0 0 1 1.2 0l1.06-1.06Zm-3.32 0L3.76 5.03l1.06 1.06 1.27-1.27-1.06-1.06ZM3.76 5.03a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2L3.76 5.03Zm0 3.32 1.32 1.32 1.06-1.06-1.32-1.32-1.06 1.06Zm1.158.502c-.039.091-.108.246-.16.4l1.424.475c.028-.085.059-.15.12-.299l-1.384-.576Zm.552-.112H3.6v1.5h1.87v-1.5Zm-1.87 0a2.355 2.355 0 0 0-2.35 2.35h1.5c0-.466.384-.85.85-.85v-1.5Zm-2.35 2.35v1.8h1.5v-1.8h-1.5Zm0 1.8a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85h-1.5Zm2.35 2.35h1.87v-1.5H3.6v1.5Zm1.178-.462c.02.047.037.093.062.159.022.06.052.136.087.213l1.366-.62a2.337 2.337 0 0 1-.053-.13c-.02-.051-.047-.126-.078-.199l-1.384.577Zm.302-.468-1.32 1.32 1.06 1.06 1.32-1.32-1.06-1.06Zm-1.32 1.32a2.355 2.355 0 0 0 0 3.32l1.06-1.06a.856.856 0 0 1 0-1.2l-1.06-1.06Zm0 3.32 1.27 1.27 1.06-1.06-1.27-1.27-1.06 1.06Zm1.27 1.27a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0l-1.06 1.06Zm3.32 0 1.32-1.32-1.06-1.06-1.32 1.32 1.06 1.06Zm.502-1.158c.091.039.246.108.4.16l.475-1.424c-.085-.028-.15-.059-.299-.12l-.576 1.384Zm-.112-.552v1.87h1.5v-1.87h-1.5Zm0 1.87a2.355 2.355 0 0 0 2.35 2.35v-1.5a.855.855 0 0 1-.85-.85h-1.5Zm2.35 2.35h1.8v-1.5h-1.8v1.5Zm1.8 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85v1.5Zm2.35-2.35v-1.87h-1.5v1.87h1.5Zm-.462-1.178c.047-.02.093-.037.159-.062.06-.023.136-.052.213-.087l-.62-1.366c-.033.015-.072.03-.13.053-.051.02-.126.047-.199.078l.577 1.384Zm-.468-.302 1.32 1.32 1.06-1.06-1.32-1.32-1.06 1.06Zm1.32 1.32a2.355 2.355 0 0 0 3.32 0l-1.06-1.06a.856.856 0 0 1-1.2 0l-1.06 1.06Zm3.32 0 1.27-1.27-1.06-1.06-1.27 1.27 1.06 1.06Zm1.27-1.27a2.355 2.355 0 0 0 0-3.32l-1.06 1.06a.856.856 0 0 1 0 1.2l1.06 1.06Zm0-3.32-1.32-1.32-1.06 1.06 1.32 1.32 1.06-1.06Zm-1.158-.502c.039-.091.108-.246.16-.4l-1.424-.475c-.028.085-.059.15-.12.299l1.384.577Zm-.552.112h1.87v-1.5h-1.87v1.5Zm1.87 0a2.355 2.355 0 0 0 2.35-2.35h-1.5c0 .466-.384.85-.85.85v1.5Zm2.35-2.35v-1.8h-1.5v1.8h1.5Zm0-1.8a2.355 2.355 0 0 0-2.35-2.35v1.5c.466 0 .85.384.85.85h1.5Zm-7.48.91A3.25 3.25 0 0 1 12 15.25v1.5A4.75 4.75 0 0 0 16.75 12h-1.5ZM12 15.25A3.25 3.25 0 0 1 8.75 12h-1.5A4.75 4.75 0 0 0 12 16.75v-1.5ZM8.75 12A3.25 3.25 0 0 1 12 8.75v-1.5A4.75 4.75 0 0 0 7.25 12h1.5ZM12 8.75A3.25 3.25 0 0 1 15.25 12h1.5A4.75 4.75 0 0 0 12 7.25v1.5Z"
  }));
};

const SvgSiShield = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12.113 21.98a.333.333 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12.113 21.98a.333.333 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"
  }));
};

const SvgSiShieldAlert = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12.113 21.98a.333.333 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 15h.008M12 7v5m-8-.748c0 7.687 6.918 10.387 7.887 10.728.076.026.15.027.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948Z"
  }));
};

const SvgSiShieldBad = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12.113 21.98a.333.333 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M9.172 13.828 12 11m0 0 2.828-2.828M12 11l2.828 2.828M12 11 9.172 8.172M4 11.252c0 7.687 6.918 10.387 7.887 10.728.076.026.15.027.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948Z"
  }));
};

const SvgSiShieldHealthSafety = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12.113 21.98a.333.333 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M9 11h6m-3 3V8m-8 3.252c0 7.687 6.918 10.387 7.887 10.728.076.026.15.027.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948Z"
  }));
};

const SvgSiShieldPolice = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M11.887 21.98c.076.026.15.027.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948c0 7.687 6.918 10.387 7.887 10.728Zm2.335-10.045 2.652-2.147c.063-.126.126-.252.126-.379-.063-.126-.19-.252-.316-.252h-3.283l-1.073-2.904c-.063-.127-.19-.253-.316-.253s-.252.126-.315.253l-1.01 2.904H7.34c-.126 0-.252.126-.315.252a.304.304 0 0 0 .126.38L9.74 11.87l-.821 3.157a.304.304 0 0 0 .126.379.402.402 0 0 0 .379 0l2.652-1.894 2.588 1.894c.063.063.126.063.19.063.063 0 .126 0 .189-.063a.304.304 0 0 0 .126-.379l-.947-3.093Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12.113 21.98a.333.333 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m16.874 9.788-2.652 2.147.947 3.093a.304.304 0 0 1-.126.379c-.063.063-.126.063-.19.063-.063 0-.126 0-.189-.063l-2.588-1.894-2.652 1.894a.402.402 0 0 1-.379 0 .304.304 0 0 1-.126-.379l.82-3.157-2.588-2.083a.304.304 0 0 1-.126-.379c.063-.126.19-.252.315-.252h3.347l1.01-2.904c.063-.127.19-.253.315-.253.127 0 .253.126.316.253l1.073 2.904h3.283c.127 0 .253.126.316.252 0 .127-.063.253-.126.38Z"
  }));
};

const SvgSiShieldSecurity = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12.113 21.98a.333.333 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M4 11h16m-8 10V2m-8 9.252c0 7.687 6.918 10.387 7.887 10.728.076.026.15.027.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948Z"
  }));
};

const SvgSiShieldTip = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12.113 21.98a.333.333 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12.008 7H12m.008 8v-5M4 11.252c0 7.687 6.918 10.387 7.887 10.728.076.026.15.027.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948Z"
  }));
};

const SvgSiShieldVerified = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12.113 21.98a.333.333 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m8 12 3 3 5-7M4 11.252c0 7.687 6.918 10.387 7.887 10.728.076.026.15.027.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304v6.948Z"
  }));
};

const SvgSiSignIn = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiSignInAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiSignOut = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiSignOutAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiSort = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiSortAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiSpinner = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 2v4.167m0 11.666V22m10-10h-4.166M6.167 12H2m17.209-7.208-2.917 2.917m-8.584 8.583-2.917 2.916m14.418 0-2.917-2.916M7.708 7.708 4.791 4.793"
  }));
};

const SvgSiSquare = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }));
};

const SvgSiStar = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m12 2 2.4 7.619 7.6-.005-6.114 4.181 2.29 7.253L12 16.624l-6.181 4.424 2.29-7.253L2 9.615l7.595.004L12 2Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m12 2 2.4 7.619 7.6-.005-6.114 4.181 2.29 7.253L12 16.624l-6.181 4.424 2.29-7.253L2 9.615l7.595.004L12 2Z"
  }));
};

const SvgSiStarAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "m21.747 10.576-5.303 4.293 1.894 6.187c.127.253 0 .632-.252.758-.127.126-.253.126-.38.126-.125 0-.252 0-.378-.126l-5.177-3.788-5.303 3.788a.805.805 0 0 1-.758 0c-.252-.126-.379-.505-.252-.758l1.641-6.313-5.177-4.167c-.252-.126-.379-.505-.252-.757.126-.253.378-.506.63-.506h6.693l2.02-5.808c.127-.252.38-.505.632-.505s.505.253.631.505l2.147 5.808h6.566c.252 0 .505.253.631.506 0 .252-.126.505-.253.757Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m21.747 10.576-5.303 4.293 1.894 6.187c.127.253 0 .632-.252.758-.127.126-.253.126-.38.126-.125 0-.252 0-.378-.126l-5.177-3.788-5.303 3.788a.805.805 0 0 1-.758 0c-.252-.126-.379-.505-.252-.758l1.641-6.313-5.177-4.167c-.252-.126-.379-.505-.252-.757.126-.253.378-.506.63-.506h6.693l2.02-5.808c.127-.252.38-.505.632-.505s.505.253.631.505l2.147 5.808h6.566c.252 0 .505.253.631.506 0 .252-.126.505-.253.757Z"
  }));
};

const SvgSiStop = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M20.2 3H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M20.2 3H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8Z"
  }));
};

const SvgSiStopCircle = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM9 9.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v4.4a.8.8 0 0 1-.8.8H9.8a.8.8 0 0 1-.8-.8V9.8Z",
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
};

const SvgSiSun = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("g", {
    stroke: "currentColor",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    clipPath: "url(#si_Sun_svg__a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    d: "M3 12H1m22 0h-2m-9 9v2m0-22v2M5.636 18.364l-1.414 1.414M19.778 4.222l-1.414 1.414m-12.728 0L4.222 4.222m15.556 15.556-1.414-1.414M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "si_Sun_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
};

const SvgSiSunSet = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
    d: "M12 4V2M3 13H1m22 0h-2m-1.222-7.778-1.414 1.414m-12.728 0L4.222 5.222M4 18h16M8 21h8m-7.43-3.07A5.98 5.98 0 0 1 6 13c0-3.31 2.69-6 6-6s6 2.69 6 6c0 2.05-1.03 3.86-2.6 4.94l-6.83-.01Z"
  }));
};

const SvgSiSunnySnowing = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
    d: "M5 13H1m22 0h-4M12 2v4M7.05 8.05 4.222 5.222m15.556 0L16.95 8.05M12 16h.1m3.9 0h.1m3.9 0h.1M8 16h.1m3.9 3h.1m-.1 3h.1m3.9-3h.1M8 19h.1M4 16h.1M8 13c0-2.21 1.79-4 4-4s4 1.79 4 4H8Z"
  }));
};

const SvgSiSwapHoriz = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M6 13 2 9m0 0 4-4M2 9h12m4 10 4-4m0 0-4-4m4 4H10"
  }));
};

const SvgSiSwapVert = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m13 18-4 4m0 0-4-4m4 4V10m10-4-4-4m0 0-4 4m4-4v12"
  }));
};

const SvgSiTable = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M3 15h18M3 9h18M9 21V3m6 18V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiTableColumns = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M9 21V3m6 18V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiTableRows = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M3 15h18M3 9h18M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiTarget = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-4 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z",
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
};

const SvgSiTerminal = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiTerminalAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m5 16 4-4-4-4m6 8h8M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4Z"
  }));
};

const SvgSiToggleOff = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6Zm3 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
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
};

const SvgSiToggleOn = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M7 6h10a6 6 0 0 1 0 12H7A6 6 0 0 1 7 6Zm13 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
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
};

const SvgSiTrafficCone = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
    d: "M5 21 9.84 3.59c.1-.35.41-.59.77-.59h2.78c.36 0 .67.24.77.59L19 21M15.64 9.67c-1.18.22-2.4.33-3.64.33-1.32 0-2.6-.13-3.85-.37m9.09 5.84c-1.69.35-3.44.53-5.24.53-1.8 0-3.63-.19-5.36-.55M2 21h20"
  }));
};

const SvgSiTwitter = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M7.91 20.889c8.302 0 12.845-6.885 12.845-12.845 0-.193 0-.387-.009-.58A9.197 9.197 0 0 0 23 5.121a9.15 9.15 0 0 1-2.597.713 4.542 4.542 0 0 0 1.99-2.5 8.98 8.98 0 0 1-2.87 1.091A4.506 4.506 0 0 0 16.23 3a4.52 4.52 0 0 0-4.516 4.516c0 .352.044.696.114 1.03a12.822 12.822 0 0 1-9.305-4.718 4.526 4.526 0 0 0 1.4 6.03 4.566 4.566 0 0 1-2.043-.563v.061a4.524 4.524 0 0 0 3.62 4.428 4.399 4.399 0 0 1-1.189.159c-.29 0-.572-.027-.845-.08a4.514 4.514 0 0 0 4.217 3.135 9.054 9.054 0 0 1-5.608 1.936A8.69 8.69 0 0 1 1 18.873a12.841 12.841 0 0 0 6.91 2.016Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M7.91 20.889c8.302 0 12.845-6.885 12.845-12.845 0-.193 0-.387-.009-.58A9.195 9.195 0 0 0 23 5.121a9.15 9.15 0 0 1-2.597.713 4.542 4.542 0 0 0 1.99-2.5 8.98 8.98 0 0 1-2.87 1.091A4.506 4.506 0 0 0 16.23 3a4.52 4.52 0 0 0-4.516 4.516c0 .352.044.696.114 1.03a12.822 12.822 0 0 1-9.305-4.718 4.526 4.526 0 0 0 1.4 6.03 4.566 4.566 0 0 1-2.043-.563v.061a4.524 4.524 0 0 0 3.62 4.428 4.399 4.399 0 0 1-1.189.159c-.29 0-.572-.027-.845-.08a4.514 4.514 0 0 0 4.217 3.135 9.054 9.054 0 0 1-5.608 1.936A8.69 8.69 0 0 1 1 18.873a12.841 12.841 0 0 0 6.91 2.016Z"
  }));
};

const SvgSiUnfoldMore = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
};

const SvgSiUnlock = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M6.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M8 10V7a4 4 0 0 1 7.874-1M12 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 0v3m-5.4-8h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H7.4C6.08 21 5 19.92 5 18.6v-7c0-.88.72-1.6 1.6-1.6Z"
  }));
};

const SvgSiUnlockAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
    d: "M8 7c0-2.21 1.79-4 4-4s4 1.79 4 4v4M4.6 11h14.8c.88 0 1.6.72 1.6 1.6v6c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-6c0-.88.72-1.6 1.6-1.6Zm8.4 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
  }));
};

const SvgSiUnlockMuted = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M4.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-7c0-.88.72-1.6 1.6-1.6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M14 10V7c0-2.21 1.79-4 4-4s4 1.79 4 4v3M4.6 10h10.8c.88 0 1.6.72 1.6 1.6v7c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6v-7c0-.88.72-1.6 1.6-1.6Z"
  }));
};

const SvgSiUser = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M19.523 21.99H4.488c-1.503 0-2.663-1.134-2.466-2.624l.114-.869c.207-1.2 1.305-1.955 2.497-2.214L11.928 15h.144l7.295 1.283c1.212.28 2.29.993 2.497 2.214l.114.88c.197 1.49-.963 2.623-2.466 2.623l.01-.01Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M19.523 21.99H4.488c-1.503 0-2.663-1.134-2.466-2.624l.114-.869c.207-1.2 1.305-1.955 2.497-2.214L11.928 15h.144l7.295 1.283c1.212.28 2.29.993 2.497 2.214l.114.88c.197 1.49-.963 2.623-2.466 2.623l.01-.01ZM17 7A5 5 0 1 1 7 7a5 5 0 0 1 10 0Z"
  }));
};

const SvgSiUserAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M20.4 22H3.6c-.88 0-1.6-.72-1.6-1.6v-4.65c0-.25 0-.38.12-.62.38-.88 1.5-1.62 3.25-2.25 1.25 2.38 3.75 4 6.62 4s5.38-1.62 6.62-4c1.75.62 2.88 1.38 3.25 2.25.12.12.12.38.12.62v4.65c0 .88-.72 1.6-1.6 1.6h.02Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M20.4 22H3.6c-.88 0-1.6-.72-1.6-1.6v-4.65c0-.25 0-.38.12-.62.38-.88 1.5-1.62 3.25-2.25 1.25 2.38 3.75 4 6.62 4s5.38-1.62 6.62-4c1.75.62 2.88 1.38 3.25 2.25.12.12.12.38.12.62v4.65c0 .88-.72 1.6-1.6 1.6h.02Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5Z"
  }));
};

const SvgSiUserAlt2 = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M8 6a4 4 0 1 1 8 0v1a4 4 0 0 1-8 0V6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M21 22c0-4.418-3.627-8-8.1-8h-1.8C6.626 14 3 17.582 3 22m9-11a4 4 0 0 1-4-4V6a4 4 0 1 1 8 0v1a4 4 0 0 1-4 4Z"
  }));
};

const SvgSiUserAlt3 = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
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
    d: "M20 21v-4.6a2.4 2.4 0 0 0-2.4-2.4H6.4A2.4 2.4 0 0 0 4 16.4V21M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  }));
};

const SvgSiUserAlt4 = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 13a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 13a9 9 0 0 0-9 9h18a9 9 0 0 0-9-9Zm4-7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
  }));
};

const SvgSiUserAlt5 = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M20.4 22h-.02m0 0H3.6c-.88 0-1.6-.72-1.6-1.6v-3.65c0-.25 0-.38.12-.62.38-.88 1.5-1.62 3.25-2.25M20.38 22c.88 0 1.6-.72 1.6-1.6v-3.65c0-.24 0-.5-.12-.62-.37-.87-1.5-1.63-3.25-2.25M12 13.5c-2.75 0-5-2.25-5-5V7c0-2.75 2.25-5 5-5s5 2.25 5 5v1.5c0 2.75-2.25 5-5 5Z"
  }));
};

const SvgSiVerified = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M22 12c0-1.395-.858-2.605-2.137-3.259.45-1.356.195-2.829-.79-3.814-.985-.986-2.458-1.24-3.815-.79C14.615 2.859 13.396 2 12 2s-2.605.859-3.249 2.137c-1.366-.45-2.839-.196-3.824.79-.986.985-1.23 2.458-.78 3.814C2.867 9.395 2 10.605 2 12c0 1.395.868 2.605 2.146 3.258-.448 1.357-.205 2.83.78 3.815.986.985 2.46 1.23 3.815.79C9.395 21.142 10.605 22 12 22c1.395 0 2.615-.858 3.258-2.137 1.357.44 2.83.195 3.815-.79.985-.985 1.24-2.458.79-3.815C21.142 14.605 22 13.396 22 12Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m8 13 3 3 5-7m6 3c0-1.395-.858-2.605-2.137-3.259.45-1.356.195-2.829-.79-3.814-.985-.986-2.458-1.24-3.815-.79C14.615 2.859 13.396 2 12 2s-2.605.859-3.249 2.137c-1.366-.45-2.839-.196-3.824.79-.986.985-1.23 2.458-.78 3.814C2.867 9.395 2 10.605 2 12c0 1.395.868 2.605 2.146 3.258-.448 1.357-.205 2.83.78 3.815.986.985 2.46 1.23 3.815.79C9.395 21.142 10.605 22 12 22c1.395 0 2.615-.858 3.258-2.137 1.357.44 2.83.195 3.815-.79.985-.985 1.24-2.458.79-3.815C21.142 14.605 22 13.396 22 12Z"
  }));
};

const SvgSiVideo = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M11.6 6H3.4A2.4 2.4 0 0 0 1 8.4v7.2A2.4 2.4 0 0 0 3.4 18h8.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 11.6 6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11.6 6H3.4A2.4 2.4 0 0 0 1 8.4v7.2A2.4 2.4 0 0 0 3.4 18h8.2a2.4 2.4 0 0 0 2.4-2.4V8.4A2.4 2.4 0 0 0 11.6 6ZM23 6l-6 6 6 6V6Z"
  }));
};

const SvgSiViewCompact = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M19.6 5H4.4A2.4 2.4 0 0 0 2 7.4v10.2A2.4 2.4 0 0 0 4.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V7.4A2.4 2.4 0 0 0 19.6 5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M7 20V5m5 15V5m5 15V5M2 10h20M2 15h20M4.4 5h15.2A2.4 2.4 0 0 1 22 7.4v10.2a2.4 2.4 0 0 1-2.4 2.4H4.4A2.4 2.4 0 0 1 2 17.6V7.4A2.4 2.4 0 0 1 4.4 5Z"
  }));
};

const SvgSiViewStream = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M1 12h22M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4Z"
  }));
};

const SvgSiWallet = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h15.2a2.4 2.4 0 0 0 2.4-2.4V15h-4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4V6.4A2.4 2.4 0 0 0 18.6 4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M21 9V6.4c0-1.325-.88-2.4-1.964-2.4H2.964C1.879 4 1 5.075 1 6.4v11.2c0 1.325.88 2.4 1.964 2.4h16.072C20.121 20 21 18.925 21 17.6V15m-1-3h.01M16.6 9h4.8a1.6 1.6 0 0 1 1.6 1.6v2.8a1.6 1.6 0 0 1-1.6 1.6h-4.8a1.6 1.6 0 0 1-1.6-1.6v-2.8A1.6 1.6 0 0 1 16.6 9Z"
  }));
};

const SvgSiWalletAlt = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M4.4 6h13.2C18.925 6 20 7.164 20 8.6v9.8c0 1.436-1.075 2.6-2.4 2.6H4.4C3.075 21 2 19.836 2 18.4V8.6C2 7.164 3.075 6 4.4 6ZM17 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M5 3h12.6C20.58 3 23 5.42 23 8.4V17M4.4 6h13.2C18.925 6 20 7.164 20 8.6v9.8c0 1.436-1.075 2.6-2.4 2.6H4.4C3.075 21 2 19.836 2 18.4V8.6C2 7.164 3.075 6 4.4 6ZM17 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }));
};

const SvgSiWalletDetailed = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 7H4.2C3.54 7 3 7.54 3 8.2v10.4C3 19.92 4.08 21 5.4 21h13.2c1.32 0 2.4-1.08 2.4-2.4V17h-6.286C13.767 17 13 16.284 13 15.4v-2.8c0-.884.768-1.6 1.714-1.6H21V9.4C21 8.08 19.92 7 18.6 7Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M3 8.5v-3m0 0C3 4.67 3.67 4 4.5 4l11.99-1C17.88 3 19 4.06 19 5.38V7H4.5C3.67 7 3 6.33 3 5.5ZM16 14h.01M4.2 7h14.4C19.92 7 21 8.08 21 9.4v9.2c0 1.32-1.08 2.4-2.4 2.4H5.4C4.08 21 3 19.92 3 18.6V8.2C3 7.54 3.54 7 4.2 7Zm10.514 4H21v6h-6.286C13.767 17 13 16.284 13 15.4v-2.8c0-.884.768-1.6 1.714-1.6Z"
  }));
};

const SvgSiWarning = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 16h.008M12 8v5m10-1c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
  }));
};

const SvgSiWebcam = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M20 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 0v4m-6 0h12m-4-12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
  }));
};

const SvgSiWindow = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M18.6 3H5.4A2.4 2.4 0 0 0 3 5.4v13.2A2.4 2.4 0 0 0 5.4 21h13.2a2.4 2.4 0 0 0 2.4-2.4V5.4A2.4 2.4 0 0 0 18.6 3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M3 12h18m-9 9V3M5.4 3h13.2A2.4 2.4 0 0 1 21 5.4v13.2a2.4 2.4 0 0 1-2.4 2.4H5.4A2.4 2.4 0 0 1 3 18.6V5.4A2.4 2.4 0 0 1 5.4 3Z"
  }));
};

const SvgSiYouTube = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    fillRule: "evenodd",
    d: "M22.54 6.42a2.765 2.765 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.765 2.765 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.765 2.765 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.765 2.765 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33ZM9.75 8.479v6.542l5.75-3.271-5.75-3.271Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M20.595 4.463A2.765 2.765 0 0 1 22.54 6.42c.46 1.728.46 5.33.46 5.33s0 3.604-.46 5.33a2.765 2.765 0 0 1-1.945 1.958C18.88 19.5 12 19.5 12 19.5s-6.879 0-8.595-.462A2.765 2.765 0 0 1 1.46 17.08C1 15.353 1 11.75 1 11.75s0-3.602.46-5.33a2.765 2.765 0 0 1 1.945-1.957C5.12 4 12 4 12 4s6.88 0 8.595.463Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M9.75 15.021V8.48l5.75 3.271-5.75 3.271Z"
  }));
};

const SvgSiZoomIn = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m21 21-4-4m-9-6h6m-3 3V8m8 3a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
  }));
};

const SvgSiZoomOut = _ref => {
  let {
    title,
    titleId,
    ...props
  } = _ref;
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "currentColor",
    fillOpacity: 0.16,
    d: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "m21 21-4-4m-9-6h6m5 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
  }));
};

exports.SiActions = SvgSiActions;
exports.SiAdd = SvgSiAdd;
exports.SiAddAlarm = SvgSiAddAlarm;
exports.SiAddCircle = SvgSiAddCircle;
exports.SiAddSquare = SvgSiAddSquare;
exports.SiAddToLibrary = SvgSiAddToLibrary;
exports.SiAddToPlaylist = SvgSiAddToPlaylist;
exports.SiAlbum = SvgSiAlbum;
exports.SiAlert = SvgSiAlert;
exports.SiAlignBottomDetailed = SvgSiAlignBottomDetailed;
exports.SiAlignBottomSimple = SvgSiAlignBottomSimple;
exports.SiAlignCenter = SvgSiAlignCenter;
exports.SiAlignHorizCenterDetailed = SvgSiAlignHorizCenterDetailed;
exports.SiAlignHorizCenterSimple = SvgSiAlignHorizCenterSimple;
exports.SiAlignJustify = SvgSiAlignJustify;
exports.SiAlignLeft = SvgSiAlignLeft;
exports.SiAlignLeftDetailed = SvgSiAlignLeftDetailed;
exports.SiAlignLeftSimple = SvgSiAlignLeftSimple;
exports.SiAlignRight = SvgSiAlignRight;
exports.SiAlignRightDetailed = SvgSiAlignRightDetailed;
exports.SiAlignRightSimple = SvgSiAlignRightSimple;
exports.SiAlignTopDetailed = SvgSiAlignTopDetailed;
exports.SiAlignTopSimple = SvgSiAlignTopSimple;
exports.SiAlignVertCenterDetailed = SvgSiAlignVertCenterDetailed;
exports.SiAlignVertCenterSimple = SvgSiAlignVertCenterSimple;
exports.SiApple = SvgSiApple;
exports.SiArchive = SvgSiArchive;
exports.SiArchiveAlt = SvgSiArchiveAlt;
exports.SiArrowDownward = SvgSiArrowDownward;
exports.SiArrowDownwardCircle = SvgSiArrowDownwardCircle;
exports.SiArrowDownwardSquare = SvgSiArrowDownwardSquare;
exports.SiArrowLeft = SvgSiArrowLeft;
exports.SiArrowLeftCircle = SvgSiArrowLeftCircle;
exports.SiArrowLeftSquare = SvgSiArrowLeftSquare;
exports.SiArrowRight = SvgSiArrowRight;
exports.SiArrowRightCircle = SvgSiArrowRightCircle;
exports.SiArrowRightSquare = SvgSiArrowRightSquare;
exports.SiArrowUpward = SvgSiArrowUpward;
exports.SiArrowUpwardCircle = SvgSiArrowUpwardCircle;
exports.SiArrowUpwardSquare = SvgSiArrowUpwardSquare;
exports.SiArticle = SvgSiArticle;
exports.SiAssignment = SvgSiAssignment;
exports.SiBallot = SvgSiBallot;
exports.SiBarcode = SvgSiBarcode;
exports.SiBarcodeScan = SvgSiBarcodeScan;
exports.SiBarcodeScanAlt = SvgSiBarcodeScanAlt;
exports.SiBookmark = SvgSiBookmark;
exports.SiBriefcase = SvgSiBriefcase;
exports.SiBriefcaseDetailed = SvgSiBriefcaseDetailed;
exports.SiBriefcaseMedical = SvgSiBriefcaseMedical;
exports.SiBriefcases = SvgSiBriefcases;
exports.SiCancelPhoto = SvgSiCancelPhoto;
exports.SiCancelPresentation = SvgSiCancelPresentation;
exports.SiChat = SvgSiChat;
exports.SiChatText = SvgSiChatText;
exports.SiCheck = SvgSiCheck;
exports.SiCheckAlt = SvgSiCheckAlt;
exports.SiCheckCircle = SvgSiCheckCircle;
exports.SiCheckSquare = SvgSiCheckSquare;
exports.SiChecklist = SvgSiChecklist;
exports.SiChecklistAlt = SvgSiChecklistAlt;
exports.SiChevronLeft = SvgSiChevronLeft;
exports.SiChevronLeftAlt = SvgSiChevronLeftAlt;
exports.SiChevronLeftCircle = SvgSiChevronLeftCircle;
exports.SiChevronLeftSquare = SvgSiChevronLeftSquare;
exports.SiChevronRight = SvgSiChevronRight;
exports.SiChevronRightAlt = SvgSiChevronRightAlt;
exports.SiChevronRightCircle = SvgSiChevronRightCircle;
exports.SiChevronRightSquare = SvgSiChevronRightSquare;
exports.SiClearAll = SvgSiClearAll;
exports.SiClearDay = SvgSiClearDay;
exports.SiClipboard = SvgSiClipboard;
exports.SiClipboardAlt = SvgSiClipboardAlt;
exports.SiClipboardCheck = SvgSiClipboardCheck;
exports.SiClipboardCheckAlt = SvgSiClipboardCheckAlt;
exports.SiClipboardFilled = SvgSiClipboardFilled;
exports.SiClipboardFilledAlt = SvgSiClipboardFilledAlt;
exports.SiClock = SvgSiClock;
exports.SiClockAlt = SvgSiClockAlt;
exports.SiClose = SvgSiClose;
exports.SiCloseCircle = SvgSiCloseCircle;
exports.SiCloseSquare = SvgSiCloseSquare;
exports.SiCloud = SvgSiCloud;
exports.SiCode = SvgSiCode;
exports.SiCodeMuted = SvgSiCodeMuted;
exports.SiColumns = SvgSiColumns;
exports.SiCopy = SvgSiCopy;
exports.SiCopyAlt = SvgSiCopyAlt;
exports.SiCopyright = SvgSiCopyright;
exports.SiCopyrightAlt = SvgSiCopyrightAlt;
exports.SiCreditCard = SvgSiCreditCard;
exports.SiCreditCardDetailed = SvgSiCreditCardDetailed;
exports.SiCreditCardDetailedAlt = SvgSiCreditCardDetailedAlt;
exports.SiCrosshairDetailed = SvgSiCrosshairDetailed;
exports.SiCrosshairSimple = SvgSiCrosshairSimple;
exports.SiDangerous = SvgSiDangerous;
exports.SiDashboard = SvgSiDashboard;
exports.SiDashboardCustomize = SvgSiDashboardCustomize;
exports.SiDashboardHorz = SvgSiDashboardHorz;
exports.SiDashboardVert = SvgSiDashboardVert;
exports.SiDeleteAlarm = SvgSiDeleteAlarm;
exports.SiDiamondsFour = SvgSiDiamondsFour;
exports.SiDoubleArrowRight = SvgSiDoubleArrowRight;
exports.SiDownLeft = SvgSiDownLeft;
exports.SiDownRight = SvgSiDownRight;
exports.SiDownloadOffline = SvgSiDownloadOffline;
exports.SiDragHandle = SvgSiDragHandle;
exports.SiDragIndicator = SvgSiDragIndicator;
exports.SiDragIndicatorAlt = SvgSiDragIndicatorAlt;
exports.SiEditDetailed = SvgSiEditDetailed;
exports.SiEditDetailedAlt = SvgSiEditDetailedAlt;
exports.SiEditSimple = SvgSiEditSimple;
exports.SiEject = SvgSiEject;
exports.SiEqualizer = SvgSiEqualizer;
exports.SiError = SvgSiError;
exports.SiExpandLess = SvgSiExpandLess;
exports.SiExpandLessAlt = SvgSiExpandLessAlt;
exports.SiExpandLessCircle = SvgSiExpandLessCircle;
exports.SiExpandLessSquare = SvgSiExpandLessSquare;
exports.SiExpandMore = SvgSiExpandMore;
exports.SiExpandMoreAlt = SvgSiExpandMoreAlt;
exports.SiExpandMoreCircle = SvgSiExpandMoreCircle;
exports.SiExpandMoreSquare = SvgSiExpandMoreSquare;
exports.SiFactCheck = SvgSiFactCheck;
exports.SiFeaturedPlaylist = SvgSiFeaturedPlaylist;
exports.SiFileDownload = SvgSiFileDownload;
exports.SiFileUpload = SvgSiFileUpload;
exports.SiFilterList = SvgSiFilterList;
exports.SiFilterListAlt = SvgSiFilterListAlt;
exports.SiFilterNone = SvgSiFilterNone;
exports.SiFlare = SvgSiFlare;
exports.SiFlowLine = SvgSiFlowLine;
exports.SiFlowParallel = SvgSiFlowParallel;
exports.SiGlobeDetailed = SvgSiGlobeDetailed;
exports.SiGrid = SvgSiGrid;
exports.SiGridOn = SvgSiGridOn;
exports.SiGridView = SvgSiGridView;
exports.SiHeart = SvgSiHeart;
exports.SiHeartAlt = SvgSiHeartAlt;
exports.SiHome = SvgSiHome;
exports.SiHomeDetailed = SvgSiHomeDetailed;
exports.SiInfo = SvgSiInfo;
exports.SiInput = SvgSiInput;
exports.SiInsights = SvgSiInsights;
exports.SiInventory = SvgSiInventory;
exports.SiKeypad = SvgSiKeypad;
exports.SiLeftDown = SvgSiLeftDown;
exports.SiLeftUp = SvgSiLeftUp;
exports.SiLibraryBooks = SvgSiLibraryBooks;
exports.SiLightMode = SvgSiLightMode;
exports.SiLock = SvgSiLock;
exports.SiLockAlt = SvgSiLockAlt;
exports.SiLockMuted = SvgSiLockMuted;
exports.SiMail = SvgSiMail;
exports.SiMemory = SvgSiMemory;
exports.SiMic = SvgSiMic;
exports.SiMicDetailed = SvgSiMicDetailed;
exports.SiMoney = SvgSiMoney;
exports.SiMoon = SvgSiMoon;
exports.SiMoreHoriz = SvgSiMoreHoriz;
exports.SiMoreHorizCircle = SvgSiMoreHorizCircle;
exports.SiMoreHorizSquare = SvgSiMoreHorizSquare;
exports.SiMoreMutedHoriz = SvgSiMoreMutedHoriz;
exports.SiMoreMutedHorizCircle = SvgSiMoreMutedHorizCircle;
exports.SiMoreMutedHorizSquare = SvgSiMoreMutedHorizSquare;
exports.SiMoreMutedVert = SvgSiMoreMutedVert;
exports.SiMoreMutedVertCircle = SvgSiMoreMutedVertCircle;
exports.SiMoreMutedVertSquare = SvgSiMoreMutedVertSquare;
exports.SiMoreSquareHoriz = SvgSiMoreSquareHoriz;
exports.SiMoreSquareVert = SvgSiMoreSquareVert;
exports.SiMoreVert = SvgSiMoreVert;
exports.SiMoreVertCircle = SvgSiMoreVertCircle;
exports.SiMoreVertSquare = SvgSiMoreVertSquare;
exports.SiMove = SvgSiMove;
exports.SiMovie = SvgSiMovie;
exports.SiNotifications = SvgSiNotifications;
exports.SiNotificationsAlt = SvgSiNotificationsAlt;
exports.SiNotificationsThick = SvgSiNotificationsThick;
exports.SiOctagon = SvgSiOctagon;
exports.SiOctagonCheck = SvgSiOctagonCheck;
exports.SiPause = SvgSiPause;
exports.SiPausePresentation = SvgSiPausePresentation;
exports.SiPhone = SvgSiPhone;
exports.SiPhoneAddCall = SvgSiPhoneAddCall;
exports.SiPhoneCallback = SvgSiPhoneCallback;
exports.SiPhoneEnabled = SvgSiPhoneEnabled;
exports.SiPhoneForwarded = SvgSiPhoneForwarded;
exports.SiPhoneLocked = SvgSiPhoneLocked;
exports.SiPhonePaused = SvgSiPhonePaused;
exports.SiPlay = SvgSiPlay;
exports.SiPlayForward = SvgSiPlayForward;
exports.SiPlayNext = SvgSiPlayNext;
exports.SiPlayPrevious = SvgSiPlayPrevious;
exports.SiPlayRewind = SvgSiPlayRewind;
exports.SiProjects = SvgSiProjects;
exports.SiProjectsAlt = SvgSiProjectsAlt;
exports.SiPullRequest = SvgSiPullRequest;
exports.SiRecord = SvgSiRecord;
exports.SiRemove = SvgSiRemove;
exports.SiRemoveAlarm = SvgSiRemoveAlarm;
exports.SiRemoveCircle = SvgSiRemoveCircle;
exports.SiRemoveFromLibrary = SvgSiRemoveFromLibrary;
exports.SiRemoveSquare = SvgSiRemoveSquare;
exports.SiReorder = SvgSiReorder;
exports.SiReorderAlt = SvgSiReorderAlt;
exports.SiRupee = SvgSiRupee;
exports.SiSearch = SvgSiSearch;
exports.SiSearchAlt = SvgSiSearchAlt;
exports.SiSegment = SvgSiSegment;
exports.SiSettings = SvgSiSettings;
exports.SiSettingsAlt = SvgSiSettingsAlt;
exports.SiSettingsApplications = SvgSiSettingsApplications;
exports.SiSettingsCute = SvgSiSettingsCute;
exports.SiSettingsThick = SvgSiSettingsThick;
exports.SiShield = SvgSiShield;
exports.SiShieldAlert = SvgSiShieldAlert;
exports.SiShieldBad = SvgSiShieldBad;
exports.SiShieldHealthSafety = SvgSiShieldHealthSafety;
exports.SiShieldPolice = SvgSiShieldPolice;
exports.SiShieldSecurity = SvgSiShieldSecurity;
exports.SiShieldTip = SvgSiShieldTip;
exports.SiShieldVerified = SvgSiShieldVerified;
exports.SiSignIn = SvgSiSignIn;
exports.SiSignInAlt = SvgSiSignInAlt;
exports.SiSignOut = SvgSiSignOut;
exports.SiSignOutAlt = SvgSiSignOutAlt;
exports.SiSort = SvgSiSort;
exports.SiSortAlt = SvgSiSortAlt;
exports.SiSpinner = SvgSiSpinner;
exports.SiSquare = SvgSiSquare;
exports.SiStar = SvgSiStar;
exports.SiStarAlt = SvgSiStarAlt;
exports.SiStop = SvgSiStop;
exports.SiStopCircle = SvgSiStopCircle;
exports.SiSun = SvgSiSun;
exports.SiSunSet = SvgSiSunSet;
exports.SiSunnySnowing = SvgSiSunnySnowing;
exports.SiSwapHoriz = SvgSiSwapHoriz;
exports.SiSwapVert = SvgSiSwapVert;
exports.SiTable = SvgSiTable;
exports.SiTableColumns = SvgSiTableColumns;
exports.SiTableRows = SvgSiTableRows;
exports.SiTarget = SvgSiTarget;
exports.SiTerminal = SvgSiTerminal;
exports.SiTerminalAlt = SvgSiTerminalAlt;
exports.SiToggleOff = SvgSiToggleOff;
exports.SiToggleOn = SvgSiToggleOn;
exports.SiTrafficCone = SvgSiTrafficCone;
exports.SiTwitter = SvgSiTwitter;
exports.SiUnfoldMore = SvgSiUnfoldMore;
exports.SiUnlock = SvgSiUnlock;
exports.SiUnlockAlt = SvgSiUnlockAlt;
exports.SiUnlockMuted = SvgSiUnlockMuted;
exports.SiUser = SvgSiUser;
exports.SiUserAlt = SvgSiUserAlt;
exports.SiUserAlt2 = SvgSiUserAlt2;
exports.SiUserAlt3 = SvgSiUserAlt3;
exports.SiUserAlt4 = SvgSiUserAlt4;
exports.SiUserAlt5 = SvgSiUserAlt5;
exports.SiVerified = SvgSiVerified;
exports.SiVideo = SvgSiVideo;
exports.SiViewCompact = SvgSiViewCompact;
exports.SiViewStream = SvgSiViewStream;
exports.SiWallet = SvgSiWallet;
exports.SiWalletAlt = SvgSiWalletAlt;
exports.SiWalletDetailed = SvgSiWalletDetailed;
exports.SiWarning = SvgSiWarning;
exports.SiWebcam = SvgSiWebcam;
exports.SiWindow = SvgSiWindow;
exports.SiYouTube = SvgSiYouTube;
exports.SiZoomIn = SvgSiZoomIn;
exports.SiZoomOut = SvgSiZoomOut;
