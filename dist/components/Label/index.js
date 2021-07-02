'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var styled = require('styled-components');
var theme = require('../../theme-a5004722.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var Label = styled__default['default'].label.withConfig({
  displayName: "Label",
  componentId: "sc-1bxhqu3-0"
})(templateObject_3 || (templateObject_3 = _tslib.__makeTemplateObject(["\n  ", "\n\n  margin-bottom: 8px;\n  color: ", ";\n"], ["\n  ", "\n\n  margin-bottom: 8px;\n  color: ", ";\n"])), function (_a) {
  var $small = _a.$small;
  return $small ? styled.css(templateObject_1 || (templateObject_1 = _tslib.__makeTemplateObject(["\n          font-size: 12px;\n        "], ["\n          font-size: 12px;\n        "]))) : styled.css(templateObject_2 || (templateObject_2 = _tslib.__makeTemplateObject(["\n          font-weight: 600;\n          font-size: 16px;\n        "], ["\n          font-weight: 600;\n          font-size: 16px;\n        "])));
}, function (_a) {
  var disabled = _a.disabled;
  return disabled ? theme.theme.grey40 : theme.theme.grey100;
});
var templateObject_1, templateObject_2, templateObject_3;

exports.Label = Label;
