'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var React = require('react');
var styled = require('styled-components');
var theme = require('../../theme-a5004722.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var Pill = styled__default['default'].div.withConfig({
  displayName: "StatusPill__Pill",
  componentId: "sc-1kukreg-0"
})(templateObject_1 || (templateObject_1 = _tslib.__makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  width: 120px;\n  font-size: 12px;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-weight: 500;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  width: 120px;\n  font-size: 12px;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-weight: 500;\n"])), function (_a) {
  var $backgroundColor = _a.$backgroundColor;
  return $backgroundColor || 'transparent';
}, function (_a) {
  var $textColor = _a.$textColor;
  return $textColor || theme.theme.grey100;
});
var StatusPill = function StatusPill(_a) {
  var backgroundColor = _a.backgroundColor,
      textColor = _a.textColor,
      children = _a.children;
  return /*#__PURE__*/React__default['default'].createElement(Pill, {
    "$textColor": textColor,
    "$backgroundColor": backgroundColor
  }, children);
};
var templateObject_1;

exports.StatusPill = StatusPill;
