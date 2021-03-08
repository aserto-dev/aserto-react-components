import React from 'react';
import PageTitle from '../PageTitle/index.js';
import RefreshButton from '../RefreshButton/index.js';
import { s as styleInject } from '../../style-inject.es-1f59c1d0.js';
import '../Button/index.js';
import '@babel/runtime/helpers/extends';
import 'react-bootstrap';

var css_248z = ".page-header {\n  padding: 40px 0px 0px 0px;\n  position: sticky !important;\n\ttop: 82px !important;\n  z-index: 9 !important;  \n  background-color: #161719;\n}";
styleInject(css_248z);

var PageHeader = function PageHeader(_ref) {
  var title = _ref.title,
      load = _ref.load,
      loading = _ref.loading,
      children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-header"
  }, load && /*#__PURE__*/React.createElement(RefreshButton, {
    load: load,
    loading: loading
  }), /*#__PURE__*/React.createElement(PageTitle, {
    title: title
  }), children);
};

export default PageHeader;
