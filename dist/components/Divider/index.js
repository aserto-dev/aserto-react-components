import React from 'react';
import { s as styleInject } from '../../style-inject.es-1f59c1d0.js';

var css_248z = ".page-divider {\n  border-top-color: #35393d;\n  width: 100vw;\n  margin-bottom: 0px;\n}";
styleInject(css_248z);

var Divider = function Divider(_ref) {
  var marginBottom = _ref.marginBottom;
  return /*#__PURE__*/React.createElement("hr", {
    className: "page-divider",
    style: {
      marginBottom: marginBottom
    }
  });
};

export default Divider;
