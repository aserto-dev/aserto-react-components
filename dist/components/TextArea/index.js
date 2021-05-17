'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var React = require('react');
var reactBootstrap = require('react-bootstrap');
var styleInject_es = require('../../style-inject.es-dcee06b6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var css_248z = "\ntextarea.form-control {\n  background-color: #161719;\n  color: #d7d8d8;\n  border-color: #595959;\n  font-family: 'Ubuntu', monospace;\n}\n\n/* focus for textarea */\ntextarea.form-control:focus {\n  background-color: #161719;\n  color: #d7d8d8;\n  outline: none;\n  border-color: #7d7a7a;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}";
styleInject_es.styleInject(css_248z);

var TextArea = function TextArea(_a) {
  var placeholder = _a.placeholder,
      value = _a.value,
      onChange = _a.onChange,
      rows = _a.rows,
      props = _tslib.__rest(_a, ["placeholder", "value", "onChange", "rows"]);

  return /*#__PURE__*/React__default['default'].createElement(reactBootstrap.FormControl, _tslib.__assign({
    as: "textarea",
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }, props));
};

exports.TextArea = TextArea;
