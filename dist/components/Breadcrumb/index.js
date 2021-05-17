'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var React = require('react');
var reactRouterDom = require('react-router-dom');
var styled = require('styled-components');
var theme = require('../../theme-a5004722.js');
var utils = require('../../utils-e99f2d3c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var BreadcrumbContainer = styled__default['default'].div.withConfig({
  displayName: "Breadcrumb__BreadcrumbContainer",
  componentId: "sc-1t0cykt-0"
})(templateObject_1 || (templateObject_1 = _tslib.__makeTemplateObject(["\n  font-size: 24px;\n  color: ", ";\n  @media (max-width: 600px) {\n    font-size: 20px;\n  }\n"], ["\n  font-size: 24px;\n  color: ", ";\n  @media (max-width: 600px) {\n    font-size: 20px;\n  }\n"])), theme.theme.grey100);
var Breadcrumb = function Breadcrumb(_a) {
  var title = _a.title,
      usePathAsBreadcrumb = _a.usePathAsBreadcrumb,
      breadcrumbText = _a.breadcrumbText,
      breadcrumbUrl = _a.breadcrumbUrl,
      testId = _a.testId; // if the flag was passed as true, construct the breadcrumb from the path

  if (usePathAsBreadcrumb) {
    var path = window.location.pathname;
    var components = path.split('/');

    if (components.length > 1) {
      var tabName = components[1];
      var capitalizedTabName = tabName.charAt(0).toUpperCase() + tabName.slice(1);
      var breadcrumb = /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Link, {
        to: "/" + tabName
      }, capitalizedTabName);
      return /*#__PURE__*/React__default['default'].createElement(BreadcrumbContainer, null, breadcrumb, " / ", title);
    } // no path to construct breadcrumb from, so return just the title


    return /*#__PURE__*/React__default['default'].createElement(BreadcrumbContainer, null, title);
  } // if the breadcrumb properties were passed in, construct the breadcrumb from them


  if (breadcrumbText && breadcrumbUrl) {
    var breadcrumb = /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Link, {
      to: "" + breadcrumbUrl
    }, breadcrumbText);
    return /*#__PURE__*/React__default['default'].createElement(BreadcrumbContainer, null, breadcrumb, " / ", title);
  } // as a last resort, just use the title


  return /*#__PURE__*/React__default['default'].createElement(BreadcrumbContainer, _tslib.__assign({}, utils.mapTestIdToProps(testId)), title);
};
var templateObject_1;

exports.Breadcrumb = Breadcrumb;
