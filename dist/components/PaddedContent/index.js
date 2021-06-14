'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var PaddedContent = styled__default['default'].div.withConfig({
  displayName: "PaddedContent",
  componentId: "sc-4cqq6o-0"
})(templateObject_1 || (templateObject_1 = _tslib.__makeTemplateObject(["\n  padding-top: ", "px;\n  @media (max-width: ", "px) {\n    padding-top: 175px;\n  }\n"], ["\n  padding-top: ", "px;\n  @media (max-width: ", "px) {\n    padding-top: 175px;\n  }\n"])), function (_a) {
  var paddingTop = _a.paddingTop;
  return paddingTop || 185;
}, function (_a) {
  var mobileBreakPoint = _a.mobileBreakPoint;
  return mobileBreakPoint || 991;
});
var templateObject_1;

exports.PaddedContent = PaddedContent;
