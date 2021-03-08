import React from 'react';
import { s as styleInject } from '../../style-inject.es-1f59c1d0.js';

var css_248z = ".page-title {\n  font-family: 'Open Sans';\n  font-size: 32px;\n  color: #d7d8d8;\n  text-decoration: none solid rgb(215, 216, 216);\n  line-height: 42px;  \n  margin-left: 20px;\n  margin-right: 20px;\n}";
styleInject(css_248z);

var PageTitle = function PageTitle(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-title"
  }, title);
};

export default PageTitle;
