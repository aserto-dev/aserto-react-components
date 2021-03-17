import { _ as __makeTemplateObject } from '../../_tslib-2598d085.js';
import React from 'react';
import { Link } from 'react-router-dom';
import { Y as Ye } from '../../styled-components.esm-33dbba00.js';
import { t as theme } from '../../theme-526b9b1f.js';

var BreadcrumbContainer = Ye.div.withConfig({
  displayName: "Breadcrumb__BreadcrumbContainer",
  componentId: "sc-1t0cykt-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 24px;\n  color: ", ";\n"], ["\n  font-size: 24px;\n  color: ", ";\n"])), theme.grey100);
var Breadcrumb = function Breadcrumb(_a) {
  var title = _a.title,
      usePathAsBreadcrumb = _a.usePathAsBreadcrumb,
      breadcrumbText = _a.breadcrumbText,
      breadcrumbUrl = _a.breadcrumbUrl; // if the flag was passed as true, construct the breadcrumb from the path

  if (usePathAsBreadcrumb) {
    var path = window.location.pathname;
    var components = path.split('/');

    if (components.length > 1) {
      var tabName = components[1];
      var capitalizedTabName = tabName.charAt(0).toUpperCase() + tabName.slice(1);
      var breadcrumb = /*#__PURE__*/React.createElement(Link, {
        to: "/" + tabName
      }, capitalizedTabName);
      return /*#__PURE__*/React.createElement(BreadcrumbContainer, null, breadcrumb, " / ", title);
    } // no path to construct breadcrumb from, so return just the title


    return /*#__PURE__*/React.createElement(BreadcrumbContainer, null, title);
  } // if the breadcrumb properties were passed in, construct the breadcrumb from them


  if (breadcrumbText && breadcrumbUrl) {
    var breadcrumb = /*#__PURE__*/React.createElement(Link, {
      to: "" + breadcrumbUrl
    }, breadcrumbText);
    return /*#__PURE__*/React.createElement(BreadcrumbContainer, null, breadcrumb, " / ", title);
  } // as a last resort, just use the title


  return /*#__PURE__*/React.createElement(BreadcrumbContainer, null, title);
};
var templateObject_1;

export { Breadcrumb };
