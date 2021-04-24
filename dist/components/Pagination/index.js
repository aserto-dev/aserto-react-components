import { _ as __makeTemplateObject, b as __assign } from '../../_tslib-49c9bcfb.js';
import React from 'react';
import { Y as Ye, _ as _e } from '../../styled-components.esm-7d3bd1b9.js';
import { t as theme } from '../../theme-526b9b1f.js';
import { Button } from '../Button/index.js';
import { m as mapTestIdToProps } from '../../utils-f85fb3a8.js';
import 'react-bootstrap';

var PaginationButton = Ye(Button).attrs(function () {
  return {
    variant: 'secondary'
  };
}).withConfig({
  displayName: "Pagination__PaginationButton",
  componentId: "sc-1d3134d-0"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-radius: 0px;\n  font-weight: 600;\n  ", ";\n  &:hover {\n  }\n  ", ";\n"], ["\n  border-radius: 0px;\n  font-weight: 600;\n  ", ";\n  &:hover {\n  }\n  ", ";\n"])), function (_a) {
  var $last = _a.$last,
      $first = _a.$first;

  if ($first) {
    return 'border-top-left-radius: 4px; border-bottom-left-radius: 4px; width: 100px;';
  }

  if ($last) {
    return 'border-top-right-radius: 4px; border-bottom-right-radius: 4px; width: 100px;';
  }
}, function (_a) {
  var $active = _a.$active;
  return $active ? _e(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          pointer-events: none;\n          background-color: ", ";\n          border: 1px solid ", ";\n          color: ", ";\n          &:hover,\n          &:active,\n          &:focus {\n            background-color: ", ";\n            border: 1px solid ", ";\n            color: ", ";\n          }\n        "], ["\n          pointer-events: none;\n          background-color: ", ";\n          border: 1px solid ", ";\n          color: ", ";\n          &:hover,\n          &:active,\n          &:focus {\n            background-color: ", ";\n            border: 1px solid ", ";\n            color: ", ";\n          }\n        "])), theme.lochivarAccent4, theme.lochivarAccent4, theme.primaryBlack, theme.lochivarAccent4, theme.lochivarAccent4, theme.primaryBlack) : '';
});
var PaginationContainer = Ye.div.withConfig({
  displayName: "Pagination__PaginationContainer",
  componentId: "sc-1d3134d-1"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  gap: 5px;\n  justify-content: center;\n"], ["\n  display: flex;\n  gap: 5px;\n  justify-content: center;\n"])));
var Pagination = function Pagination(_a) {
  var startPage = _a.startPage,
      endPage = _a.endPage,
      currentPage = _a.currentPage,
      onClickFirst = _a.onClickFirst,
      onClickLast = _a.onClickLast,
      onChangePage = _a.onChangePage,
      onClickNext = _a.onClickNext,
      onClickPrev = _a.onClickPrev,
      showPrevNextButtons = _a.showPrevNextButtons,
      showFirstAndLastButtons = _a.showFirstAndLastButtons,
      disabledNext = _a.disabledNext,
      disabledPrev = _a.disabledPrev,
      testId = _a.testId;
  var pages = Array.from({
    length: endPage - startPage
  }, function (x, i) {
    return i + startPage;
  });
  return /*#__PURE__*/React.createElement(PaginationContainer, null, showFirstAndLastButtons && /*#__PURE__*/React.createElement(PaginationButton, __assign({}, mapTestIdToProps(testId + "-first-btn"), {
    "$first": true,
    onClick: onClickFirst
  }), "First"), showPrevNextButtons && /*#__PURE__*/React.createElement(PaginationButton, __assign({}, mapTestIdToProps(testId + "-prev-btn"), {
    "$first": !showFirstAndLastButtons,
    onClick: onClickPrev,
    disabled: disabledPrev
  }), showFirstAndLastButtons ? '«' : 'Previous'), pages.map(function (page) {
    return /*#__PURE__*/React.createElement(PaginationButton, __assign({
      key: page
    }, mapTestIdToProps(testId + "-" + page + "-btn"), {
      "$active": page === currentPage,
      onClick: function onClick() {
        return onChangePage(page);
      }
    }), page);
  }), showPrevNextButtons && /*#__PURE__*/React.createElement(PaginationButton, __assign({
    "$last": !showFirstAndLastButtons,
    disabled: disabledNext,
    onClick: onClickNext
  }, mapTestIdToProps(testId + "-next-btn")), showFirstAndLastButtons ? '»' : 'Next'), showFirstAndLastButtons && /*#__PURE__*/React.createElement(PaginationButton, __assign({}, mapTestIdToProps(testId + "-last-btn"), {
    "$last": true,
    onClick: onClickLast
  }), "Last"));
};
var templateObject_1, templateObject_2, templateObject_3;

export { Pagination };
