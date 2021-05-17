'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var React = require('react');
var styled = require('styled-components');
var theme = require('../../theme-a5004722.js');
var components_PageTitle_index = require('../PageTitle/index.js');
var components_RefreshButton_index = require('../RefreshButton/index.js');
var utils = require('../../utils-e99f2d3c.js');
require('../Button/index.js');
require('react-bootstrap');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var PageHeaderContainer = styled__default['default'].div.withConfig({
  displayName: "PageHeader__PageHeaderContainer",
  componentId: "sc-171orqq-0"
})(templateObject_1 || (templateObject_1 = _tslib.__makeTemplateObject(["\n  padding: 20px;\n  position: fixed;\n  width: 100%;\n  top: ", "px;\n  ", ";\n  height: 100px;\n  display: flex;\n  align-items: center;\n  z-index: 9;\n  background-color: ", ";\n  @media (max-width: ", "px) {\n    top: ", "px;\n  }\n  @media (max-width: 600px) {\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n"], ["\n  padding: 20px;\n  position: fixed;\n  width: 100%;\n  top: ", "px;\n  ", ";\n  height: 100px;\n  display: flex;\n  align-items: center;\n  z-index: 9;\n  background-color: ", ";\n  @media (max-width: ", "px) {\n    top: ", "px;\n  }\n  @media (max-width: 600px) {\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n"])), function (_a) {
  var $topPosition = _a.$topPosition;
  return $topPosition || 82;
}, function (_a) {
  var $hasBorderBottom = _a.$hasBorderBottom;
  return $hasBorderBottom ? "border-bottom: 1px solid " + theme.theme.grey20 : '';
}, theme.theme.primaryBlack, function (_a) {
  var $mobileBreakpoint = _a.$mobileBreakpoint;
  return $mobileBreakpoint || 991;
}, function (_a) {
  var $topPosition = _a.$topPosition;
  return $topPosition || 73;
});
var PageHeader = function PageHeader(_a) {
  var title = _a.title,
      load = _a.load,
      loading = _a.loading,
      hasBorderBottom = _a.hasBorderBottom,
      topPosition = _a.topPosition,
      id = _a.id,
      mobileBreakpoint = _a.mobileBreakpoint,
      testId = _a.testId,
      children = _a.children;
  return /*#__PURE__*/React__default['default'].createElement(PageHeaderContainer, _tslib.__assign({
    "$hasBorderBottom": hasBorderBottom,
    id: id,
    "$topPosition": topPosition,
    "$mobileBreakpoint": mobileBreakpoint
  }, utils.mapTestIdToProps(testId)), load && /*#__PURE__*/React__default['default'].createElement(components_RefreshButton_index.RefreshButton, {
    load: load,
    loading: loading
  }), title && /*#__PURE__*/React__default['default'].createElement(components_PageTitle_index.PageTitle, {
    title: title
  }), children);
};
var templateObject_1;

exports.PageHeader = PageHeader;
