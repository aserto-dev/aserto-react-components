'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var React = require('react');
var styled = require('styled-components');
var theme = require('../../theme-a5004722.js');
var components_Button_index = require('../Button/index.js');
var utils = require('../../utils-e99f2d3c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var PaginationButton = styled__default['default'](components_Button_index.Button).attrs(function () {
  return {
    variant: 'secondary'
  };
}).withConfig({
  displayName: "Pagination__PaginationButton",
  componentId: "sc-1d3134d-0"
})(templateObject_2 || (templateObject_2 = _tslib.__makeTemplateObject(["\n  border-radius: 0px;\n  font-weight: 600;\n  ", ";\n  &:hover {\n  }\n  ", ";\n"], ["\n  border-radius: 0px;\n  font-weight: 600;\n  ", ";\n  &:hover {\n  }\n  ", ";\n"])), function (_a) {
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
  return $active ? styled.css(templateObject_1 || (templateObject_1 = _tslib.__makeTemplateObject(["\n          pointer-events: none;\n          background-color: ", ";\n          border: 1px solid ", ";\n          color: ", ";\n          &:hover,\n          &:active,\n          &:focus {\n            background-color: ", ";\n            border: 1px solid ", ";\n            color: ", ";\n          }\n        "], ["\n          pointer-events: none;\n          background-color: ", ";\n          border: 1px solid ", ";\n          color: ", ";\n          &:hover,\n          &:active,\n          &:focus {\n            background-color: ", ";\n            border: 1px solid ", ";\n            color: ", ";\n          }\n        "])), theme.theme.lochivarAccent4, theme.theme.lochivarAccent4, theme.theme.primaryBlack, theme.theme.lochivarAccent4, theme.theme.lochivarAccent4, theme.theme.primaryBlack) : '';
});
var PaginationContainer = styled__default['default'].div.withConfig({
  displayName: "Pagination__PaginationContainer",
  componentId: "sc-1d3134d-1"
})(templateObject_3 || (templateObject_3 = _tslib.__makeTemplateObject(["\n  display: flex;\n  gap: 5px;\n  justify-content: center;\n"], ["\n  display: flex;\n  gap: 5px;\n  justify-content: center;\n"])));
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
  return /*#__PURE__*/React__default['default'].createElement(PaginationContainer, null, showFirstAndLastButtons && /*#__PURE__*/React__default['default'].createElement(PaginationButton, _tslib.__assign({}, utils.mapTestIdToProps(testId + "-first-btn"), {
    "$first": true,
    onClick: onClickFirst
  }), "First"), showPrevNextButtons && /*#__PURE__*/React__default['default'].createElement(PaginationButton, _tslib.__assign({}, utils.mapTestIdToProps(testId + "-prev-btn"), {
    "$first": !showFirstAndLastButtons,
    onClick: onClickPrev,
    disabled: disabledPrev
  }), showFirstAndLastButtons ? '«' : 'Previous'), pages.map(function (page) {
    return /*#__PURE__*/React__default['default'].createElement(PaginationButton, _tslib.__assign({
      key: page
    }, utils.mapTestIdToProps(testId + "-" + page + "-btn"), {
      "$active": page === currentPage,
      onClick: function onClick() {
        return onChangePage(page);
      }
    }), page);
  }), showPrevNextButtons && /*#__PURE__*/React__default['default'].createElement(PaginationButton, _tslib.__assign({
    "$last": !showFirstAndLastButtons,
    disabled: disabledNext,
    onClick: onClickNext
  }, utils.mapTestIdToProps(testId + "-next-btn")), showFirstAndLastButtons ? '»' : 'Next'), showFirstAndLastButtons && /*#__PURE__*/React__default['default'].createElement(PaginationButton, _tslib.__assign({}, utils.mapTestIdToProps(testId + "-last-btn"), {
    "$last": true,
    onClick: onClickLast
  }), "Last"));
};
var templateObject_1, templateObject_2, templateObject_3;

exports.Pagination = Pagination;
