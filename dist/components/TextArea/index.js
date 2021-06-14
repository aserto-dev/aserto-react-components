'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var React = require('react');
var styleInject_es = require('../../style-inject.es-dcee06b6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var css_248z = "\ntextarea {\n  background-color: #121212;\n  color: #E7E7E7;\n  border-color: #595959;\n  border-radius: 2px;\n  resize: none;\n  padding: 0 8px;\n}\n\ntextarea:focus {\n  background-color: #121212;\n  color: #E7E7E7;\n  outline: none;\n  box-shadow: none;\n  border: 1px solid #36B1B5;\n  -webkit-box-shadow: none;\n}";
styleInject_es.styleInject(css_248z);

var TextArea = function TextArea(_a) {
  var placeholder = _a.placeholder,
      value = _a.value,
      onChange = _a.onChange,
      rows = _a.rows,
      props = _tslib.__rest(_a, ["placeholder", "value", "onChange", "rows"]);

  return /*#__PURE__*/React__default['default'].createElement("textarea", _tslib.__assign({
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }, props));
};

exports.TextArea = TextArea;
