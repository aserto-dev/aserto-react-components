import React from 'react';
import { Link } from 'react-router-dom';
import { s as styleInject } from '../../style-inject.es-1f59c1d0.js';

var css_248z = ".page-breadcrumb {\n  font-family: Roboto;\n  font-weight: 600;\n  font-size: 24px;\n  color: #d7d8d8;\n  text-decoration: none solid rgb(215, 216, 216);\n  line-height: 32px;\n  margin: 20px 20px 20px 20px;\n}";
styleInject(css_248z);

var BreadCrumb = function BreadCrumb(_ref) {
  var title = _ref.title,
      usePathAsBreadcrumb = _ref.usePathAsBreadcrumb,
      breadcrumbText = _ref.breadcrumbText,
      breadcrumbUrl = _ref.breadcrumbUrl;

  // if the flag was passed as true, construct the breadcrumb from the path
  if (usePathAsBreadcrumb) {
    var path = window.location.pathname;
    var components = path.split('/');

    if (components.length > 1) {
      var tabName = components[1];
      var capitalizedTabName = tabName.charAt(0).toUpperCase() + tabName.slice(1);
      var breadcrumb = /*#__PURE__*/React.createElement(Link, {
        to: "/".concat(tabName)
      }, capitalizedTabName);
      return /*#__PURE__*/React.createElement("div", {
        className: "page-breadcrumb"
      }, breadcrumb, " / ", title);
    } // no path to construct breadkcrumb from, so return just the title


    return /*#__PURE__*/React.createElement("div", {
      className: "page-breadcrumb"
    }, title);
  } // if the breadcrumb properties were passed in, construct the breadcrumb from them


  if (breadcrumbText && breadcrumbUrl) {
    var _breadcrumb = /*#__PURE__*/React.createElement(Link, {
      to: "".concat(breadcrumbUrl)
    }, breadcrumbText);

    return /*#__PURE__*/React.createElement("div", {
      className: "page-breadcrumb"
    }, _breadcrumb, " / ", title);
  } // as a last resort, just use the title


  return /*#__PURE__*/React.createElement("div", {
    className: "page-breadcrumb"
  }, title);
};

export default BreadCrumb;
