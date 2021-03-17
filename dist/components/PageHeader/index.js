import { _ as __makeTemplateObject } from '../../_tslib-2598d085.js';
import React from 'react';
import { Y as Ye } from '../../styled-components.esm-33dbba00.js';
import { t as theme } from '../../theme-526b9b1f.js';
import { PageTitle } from '../PageTitle/index.js';
import { RefreshButton } from '../RefreshButton/index.js';
import '../Button/index.js';
import 'react-bootstrap';

var PageHeaderContainer = Ye.div.withConfig({
  displayName: "PageHeader__PageHeaderContainer",
  componentId: "sc-171orqq-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 20px;\n  position: sticky;\n  top: 82px;\n  ", ";\n  height: 100px;\n  display: flex;\n  align-items: center;\n  z-index: 9;\n  background-color: ", ";\n"], ["\n  padding: 20px;\n  position: sticky;\n  top: 82px;\n  ", ";\n  height: 100px;\n  display: flex;\n  align-items: center;\n  z-index: 9;\n  background-color: ", ";\n"])), function (_a) {
  var $hasBorderBottom = _a.$hasBorderBottom;
  return $hasBorderBottom ? "border-bottom: 1px solid " + theme.grey20 : '';
}, theme.primaryBlack);
var PageHeader = function PageHeader(_a) {
  var title = _a.title,
      load = _a.load,
      loading = _a.loading,
      hasBorderBottom = _a.hasBorderBottom,
      children = _a.children;
  return /*#__PURE__*/React.createElement(PageHeaderContainer, {
    "$hasBorderBottom": hasBorderBottom
  }, load && /*#__PURE__*/React.createElement(RefreshButton, {
    load: load,
    loading: loading
  }), title && /*#__PURE__*/React.createElement(PageTitle, {
    title: title
  }), children);
};
var templateObject_1;

export { PageHeader };
