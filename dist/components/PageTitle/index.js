'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var React = require('react');
var styled = require('styled-components');
var theme = require('../../theme-a5004722.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var Title = styled__default['default'].div.withConfig({
  displayName: "PageTitle__Title",
  componentId: "sc-1fx2f8-0"
})(templateObject_1 || (templateObject_1 = _tslib.__makeTemplateObject(["\n  font-size: 24px;\n  @media (max-width: 600px) {\n    font-size: 20px;\n  }\n  color: ", ";\n"], ["\n  font-size: 24px;\n  @media (max-width: 600px) {\n    font-size: 20px;\n  }\n  color: ", ";\n"])), theme.theme.grey100);
var PageTitle = function PageTitle(_a) {
  var title = _a.title;
  return /*#__PURE__*/React__default['default'].createElement(Title, null, title);
};
var templateObject_1;

exports.PageTitle = PageTitle;
