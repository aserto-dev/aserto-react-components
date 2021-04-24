import { _ as __makeTemplateObject, b as __assign } from '../../_tslib-49c9bcfb.js';
import React from 'react';
import { Y as Ye } from '../../styled-components.esm-7d3bd1b9.js';
import { t as theme } from '../../theme-526b9b1f.js';
import { PageTitle } from '../PageTitle/index.js';
import { RefreshButton } from '../RefreshButton/index.js';
import { m as mapTestIdToProps } from '../../utils-f85fb3a8.js';
import '../Button/index.js';
import 'react-bootstrap';

var PageHeaderContainer = Ye.div.withConfig({
  displayName: "PageHeader__PageHeaderContainer",
  componentId: "sc-171orqq-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px;\n  position: fixed;\n  width: 100%;\n  top: ", "px;\n  ", ";\n  height: 100px;\n  display: flex;\n  align-items: center;\n  z-index: 9;\n  background-color: ", ";\n  @media (max-width: ", "px) {\n    top: ", "px;\n  }\n  @media (max-width: 600px) {\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n"], ["\n  padding: 20px;\n  position: fixed;\n  width: 100%;\n  top: ", "px;\n  ", ";\n  height: 100px;\n  display: flex;\n  align-items: center;\n  z-index: 9;\n  background-color: ", ";\n  @media (max-width: ", "px) {\n    top: ", "px;\n  }\n  @media (max-width: 600px) {\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n"])), function (_a) {
  var $topPosition = _a.$topPosition;
  return $topPosition || 82;
}, function (_a) {
  var $hasBorderBottom = _a.$hasBorderBottom;
  return $hasBorderBottom ? "border-bottom: 1px solid " + theme.grey20 : '';
}, theme.primaryBlack, function (_a) {
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
  return /*#__PURE__*/React.createElement(PageHeaderContainer, __assign({
    "$hasBorderBottom": hasBorderBottom,
    id: id,
    "$topPosition": topPosition,
    "$mobileBreakpoint": mobileBreakpoint
  }, mapTestIdToProps(testId)), load && /*#__PURE__*/React.createElement(RefreshButton, {
    load: load,
    loading: loading
  }), title && /*#__PURE__*/React.createElement(PageTitle, {
    title: title
  }), children);
};
var templateObject_1;

export { PageHeader };
