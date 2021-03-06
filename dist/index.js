import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React, { Component } from 'react';
import { Card, Button as Button$1, FormControl, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import _objectSpread from '@babel/runtime/helpers/objectSpread2';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _assertThisInitialized from '@babel/runtime/helpers/assertThisInitialized';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import ReactSelect from 'react-select';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$e = "/* IMPORT FONTS */\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Roboto:400,500,600,700,800|Ubuntu+Mono:400,600');\n\n/* general styles */\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: #161719;\n  color: #8a959f\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Open Sans', sans-serif;\n  color: #d7d8d8\n}\n\ncode {\n  font-family: 'Ubuntu Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n/* link treatment */\na {\n  color: #48a4a7\n}\na:hover {\n  color: #48a4a7\n}\n\n/* display-flex utility */\n.display-flex {\n  display: flex;\n}";
styleInject(css_248z$e);

var appicon = "var img = \"data:image/svg+xml,%3csvg version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='visible' preserveAspectRatio='none' viewBox='0 0 82 82' width='82' height='82'%3e%3cg transform='translate(0%2c 0)'%3e%3cg transform='translate(-0.00001000000000384027%2c -0.00001000000000384027) rotate(0)'%3e%3cpath d='M80.40778%2c82.00001h-78.81554c-0.87891%2c-0.0011 -1.59114%2c-0.71332 -1.59223%2c-1.59223v-78.81554c0%2c-0.87937 0.71287%2c-1.59223 1.59223%2c-1.59223h78.81554c0.87937%2c0 1.59223%2c0.71287 1.59223%2c1.59223v78.81554c0%2c0.87937 -0.71287%2c1.59223 -1.59223%2c1.59223zM46.97088%2c63.95921v2.67575h5.54217c0.82152%2c0.01065 1.63845%2c-0.12411 2.41303%2c-0.39806c0.70628%2c-0.2586 1.34965%2c-0.66413 1.88759%2c-1.1898c0.55404%2c-0.55031 0.97136%2c-1.22284 1.21846%2c-1.96362c0.28498%2c-0.8775 0.42219%2c-1.79626 0.40602%2c-2.71874v-3.74573c-0.0226%2c-0.97807 0.16641%2c-1.94947 0.5541%2c-2.84771c0.33229%2c-0.74742 0.79868%2c-1.42765 1.37609%2c-2.00701c0.50401%2c-0.50479 1.1011%2c-0.90709 1.75822%2c-1.18462c0.52478%2c-0.23228 1.08916%2c-0.36199 1.66269%2c-0.38214v-2.67575c-0.56831%2c-0.0162 -1.13007%2c-0.12594 -1.66269%2c-0.32482c-0.65225%2c-0.23441 -1.25033%2c-0.59837 -1.75822%2c-1.06998c-0.58207%2c-0.54585 -1.04983%2c-1.20196 -1.37609%2c-1.93018c-0.3958%2c-0.92934 -0.58486%2c-1.9336 -0.5541%2c-2.94324v-3.89818c0.00981%2c-0.86069 -0.13861%2c-1.71585 -0.43786%2c-2.52289c-0.27587%2c-0.73513 -0.69124%2c-1.41001 -1.22323%2c-1.98751c-0.52779%2c-0.56346 -1.16583%2c-1.01235 -1.87446%2c-1.31877c-0.75432%2c-0.32331 -1.5677%2c-0.48599 -2.38835%2c-0.47767h-5.54336v2.67575h4.20429c1.59781%2c0 2.72312%2c0.38572 3.34369%2c1.14681c0.62057%2c0.76109 0.93663%2c1.90551 0.93663%2c3.40181v3.70751c-0.0166%2c0.96098 0.17913%2c1.91377 0.5732%2c2.79039c0.34131%2c0.75366 0.80644%2c1.44483 1.37609%2c2.04483c0.4847%2c0.50761 1.0379%2c0.94505 1.64358%2c1.29966c0.42244%2c0.26438 0.88831%2c0.45197 1.37609%2c0.5541v0.22928c-0.47849%2c0.11399 -0.93197%2c0.31489 -1.33787%2c0.59271c-0.61328%2c0.3896 -1.16689%2c0.86598 -1.64358%2c1.4143c-0.56052%2c0.63906 -1.02941%2c1.35299 -1.3932%2c2.12125c-0.4013%2c0.84784 -0.60401%2c1.77601 -0.59271%2c2.71396v3.6693c0%2c1.54725 -0.33437%2c2.70441 -0.99515%2c3.44042c-0.66078%2c0.73601 -1.77852%2c1.10859 -3.32578%2c1.10859zM29.48657%2c31.04855c-0.82065%2c-0.00834 -1.63404%2c0.15433 -2.38835%2c0.47767c-0.70806%2c0.30661 -1.34554%2c0.75549 -1.87286%2c1.31877c-0.532%2c0.57749 -0.94737%2c1.25237 -1.22323%2c1.98751c-0.29925%2c0.80705 -0.44767%2c1.66221 -0.43786%2c2.52289v3.89898c0.03077%2c1.00964 -0.1583%2c2.01391 -0.5541%2c2.94324c-0.32626%2c0.72823 -0.79402%2c1.38433 -1.37609%2c1.93018c-0.50789%2c0.47162 -1.10597%2c0.83559 -1.75822%2c1.06998c-0.53276%2c0.19888 -1.09465%2c0.30862 -1.66309%2c0.32482v2.67575c0.57367%2c0.02009 1.13819%2c0.14981 1.66309%2c0.38214c0.65713%2c0.27752 1.25422%2c0.67982 1.75822%2c1.18462c0.57741%2c0.57936 1.0438%2c1.25959 1.37609%2c2.00701c0.38768%2c0.89824 0.57669%2c1.86964 0.5541%2c2.84771v3.74573c-0.01617%2c0.92248 0.12104%2c1.84123 0.40602%2c2.71874c0.2471%2c0.74078 0.66441%2c1.41331 1.21846%2c1.96362c0.53783%2c0.52562 1.18106%2c0.93114 1.88719%2c1.1898c0.77458%2c0.27395 1.59151%2c0.40871 2.41303%2c0.39806h5.54018v-2.67575h-4.16648c-1.54725%2c0 -2.66699%2c-0.37298 -3.32538%2c-1.10859c-0.65839%2c-0.73561 -0.99515%2c-1.89317 -0.99515%2c-3.44042v-3.6693c0.0113%2c-0.93795 -0.19141%2c-1.86612 -0.59271%2c-2.71396c-0.3639%2c-0.76821 -0.83278%2c-1.48212 -1.3932%2c-2.12125c-0.47669%2c-0.54833 -1.0303%2c-1.02471 -1.64358%2c-1.4143c-0.40601%2c-0.27789 -0.85964%2c-0.47879 -1.33827%2c-0.59271v-0.22928c0.48792%2c-0.10207 0.95393%2c-0.28966 1.37649%2c-0.5541c0.60557%2c-0.35461 1.15864%2c-0.79205 1.64318%2c-1.29966c0.56972%2c-0.59994 1.03486%2c-1.29112 1.37609%2c-2.04483c0.39422%2c-0.87658 0.59009%2c-1.82938 0.5736%2c-2.79039v-3.70831c0%2c-1.4967 0.31526%2c-2.64112 0.93663%2c-3.40181c0.62137%2c-0.76069 1.74668%2c-1.14681 3.34369%2c-1.14681h4.20509v-2.67575zM3.98058%2c3.98058v12.73787h74.03884v-12.73787z' style='stroke-width: 0%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b fill: rgb(138%2c 149%2c 159)%3b' vector-effect='non-scaling-stroke'/%3e%3c/g%3e%3cdefs%3e%3cpath id='path-161128060290575' d='M80.40778%2c82.00001h-78.81554c-0.87891%2c-0.0011 -1.59114%2c-0.71332 -1.59223%2c-1.59223v-78.81554c0%2c-0.87937 0.71287%2c-1.59223 1.59223%2c-1.59223h78.81554c0.87937%2c0 1.59223%2c0.71287 1.59223%2c1.59223v78.81554c0%2c0.87937 -0.71287%2c1.59223 -1.59223%2c1.59223zM46.97088%2c63.95921v2.67575h5.54217c0.82152%2c0.01065 1.63845%2c-0.12411 2.41303%2c-0.39806c0.70628%2c-0.2586 1.34965%2c-0.66413 1.88759%2c-1.1898c0.55404%2c-0.55031 0.97136%2c-1.22284 1.21846%2c-1.96362c0.28498%2c-0.8775 0.42219%2c-1.79626 0.40602%2c-2.71874v-3.74573c-0.0226%2c-0.97807 0.16641%2c-1.94947 0.5541%2c-2.84771c0.33229%2c-0.74742 0.79868%2c-1.42765 1.37609%2c-2.00701c0.50401%2c-0.50479 1.1011%2c-0.90709 1.75822%2c-1.18462c0.52478%2c-0.23228 1.08916%2c-0.36199 1.66269%2c-0.38214v-2.67575c-0.56831%2c-0.0162 -1.13007%2c-0.12594 -1.66269%2c-0.32482c-0.65225%2c-0.23441 -1.25033%2c-0.59837 -1.75822%2c-1.06998c-0.58207%2c-0.54585 -1.04983%2c-1.20196 -1.37609%2c-1.93018c-0.3958%2c-0.92934 -0.58486%2c-1.9336 -0.5541%2c-2.94324v-3.89818c0.00981%2c-0.86069 -0.13861%2c-1.71585 -0.43786%2c-2.52289c-0.27587%2c-0.73513 -0.69124%2c-1.41001 -1.22323%2c-1.98751c-0.52779%2c-0.56346 -1.16583%2c-1.01235 -1.87446%2c-1.31877c-0.75432%2c-0.32331 -1.5677%2c-0.48599 -2.38835%2c-0.47767h-5.54336v2.67575h4.20429c1.59781%2c0 2.72312%2c0.38572 3.34369%2c1.14681c0.62057%2c0.76109 0.93663%2c1.90551 0.93663%2c3.40181v3.70751c-0.0166%2c0.96098 0.17913%2c1.91377 0.5732%2c2.79039c0.34131%2c0.75366 0.80644%2c1.44483 1.37609%2c2.04483c0.4847%2c0.50761 1.0379%2c0.94505 1.64358%2c1.29966c0.42244%2c0.26438 0.88831%2c0.45197 1.37609%2c0.5541v0.22928c-0.47849%2c0.11399 -0.93197%2c0.31489 -1.33787%2c0.59271c-0.61328%2c0.3896 -1.16689%2c0.86598 -1.64358%2c1.4143c-0.56052%2c0.63906 -1.02941%2c1.35299 -1.3932%2c2.12125c-0.4013%2c0.84784 -0.60401%2c1.77601 -0.59271%2c2.71396v3.6693c0%2c1.54725 -0.33437%2c2.70441 -0.99515%2c3.44042c-0.66078%2c0.73601 -1.77852%2c1.10859 -3.32578%2c1.10859zM29.48657%2c31.04855c-0.82065%2c-0.00834 -1.63404%2c0.15433 -2.38835%2c0.47767c-0.70806%2c0.30661 -1.34554%2c0.75549 -1.87286%2c1.31877c-0.532%2c0.57749 -0.94737%2c1.25237 -1.22323%2c1.98751c-0.29925%2c0.80705 -0.44767%2c1.66221 -0.43786%2c2.52289v3.89898c0.03077%2c1.00964 -0.1583%2c2.01391 -0.5541%2c2.94324c-0.32626%2c0.72823 -0.79402%2c1.38433 -1.37609%2c1.93018c-0.50789%2c0.47162 -1.10597%2c0.83559 -1.75822%2c1.06998c-0.53276%2c0.19888 -1.09465%2c0.30862 -1.66309%2c0.32482v2.67575c0.57367%2c0.02009 1.13819%2c0.14981 1.66309%2c0.38214c0.65713%2c0.27752 1.25422%2c0.67982 1.75822%2c1.18462c0.57741%2c0.57936 1.0438%2c1.25959 1.37609%2c2.00701c0.38768%2c0.89824 0.57669%2c1.86964 0.5541%2c2.84771v3.74573c-0.01617%2c0.92248 0.12104%2c1.84123 0.40602%2c2.71874c0.2471%2c0.74078 0.66441%2c1.41331 1.21846%2c1.96362c0.53783%2c0.52562 1.18106%2c0.93114 1.88719%2c1.1898c0.77458%2c0.27395 1.59151%2c0.40871 2.41303%2c0.39806h5.54018v-2.67575h-4.16648c-1.54725%2c0 -2.66699%2c-0.37298 -3.32538%2c-1.10859c-0.65839%2c-0.73561 -0.99515%2c-1.89317 -0.99515%2c-3.44042v-3.6693c0.0113%2c-0.93795 -0.19141%2c-1.86612 -0.59271%2c-2.71396c-0.3639%2c-0.76821 -0.83278%2c-1.48212 -1.3932%2c-2.12125c-0.47669%2c-0.54833 -1.0303%2c-1.02471 -1.64358%2c-1.4143c-0.40601%2c-0.27789 -0.85964%2c-0.47879 -1.33827%2c-0.59271v-0.22928c0.48792%2c-0.10207 0.95393%2c-0.28966 1.37649%2c-0.5541c0.60557%2c-0.35461 1.15864%2c-0.79205 1.64318%2c-1.29966c0.56972%2c-0.59994 1.03486%2c-1.29112 1.37609%2c-2.04483c0.39422%2c-0.87658 0.59009%2c-1.82938 0.5736%2c-2.79039v-3.70831c0%2c-1.4967 0.31526%2c-2.64112 0.93663%2c-3.40181c0.62137%2c-0.76069 1.74668%2c-1.14681 3.34369%2c-1.14681h4.20509v-2.67575zM3.98058%2c3.98058v12.73787h74.03884v-12.73787z' vector-effect='non-scaling-stroke'/%3e%3c/defs%3e%3c/g%3e%3c/svg%3e\";\n  export default img;";

var css_248z$d = ".card.application-card {\n  max-width: 428px;\n  height: 104px;\n  border-radius: 5px;\n  background-color: #35393d66;\n  background-size: cover;\n  margin: 0px 20px 20px 0px !important;\n}\n\n.card.application-card:hover {\n  background-color: #35393d;\n  background-size: cover;\n  cursor: pointer;\n}\n\n.card.application-card .card-img {\n  margin: 10px;\n  width: 82px;\n}\n\n.card.application-card .card-title {\n  color: #d7d8d8;\n  font-family: Roboto;\n  font-size: 14px;\n  vertical-align: middle;\n  line-height: 80px;\n  font-size: 14px;\n  text-decoration: none solid rgb(215, 216, 216);\n  margin: 10px;\n}\n";
styleInject(css_248z$d);

var ApplicationCard = function ApplicationCard(_ref) {
  var application = _ref.application,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["application", "onClick"]);

  return /*#__PURE__*/React.createElement(Card, _extends({
    className: "application-card",
    onClick: onClick
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "display-flex"
  }, /*#__PURE__*/React.createElement(Card.Img, {
    src: appicon,
    alt: "application"
  }), /*#__PURE__*/React.createElement(Card.Title, null, application)));
};

var css_248z$c = ".page-breadcrumb {\n  font-family: Roboto;\n  font-weight: 600;\n  font-size: 24px;\n  color: #d7d8d8;\n  text-decoration: none solid rgb(215, 216, 216);\n  line-height: 32px;\n  margin: 20px 20px 20px 20px;\n}";
styleInject(css_248z$c);

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

var css_248z$b = "button.aserto-button, \nbutton.aserto-button:focus, \nbutton.aserto-button:active, \nbutton.aserto-button:visited {\n  border: 1px solid #35393d;\n  border-radius: 4px;\n  background-color: #35393d66;\n  background-size: cover;\n  font-family: Roboto;\n  font-size: 14px;\n  color: #d7d8d8;\n  text-decoration: none solid rgb(215, 216, 216);\n  text-align: center;\n  box-shadow: none;\n  outline: none;\n}\n\nbutton.aserto-button:hover {\n  background-color: #35393d;\n  border: 1px solid #35393d;\n}\n";
styleInject(css_248z$b);

var Button = function Button(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(Button$1, _extends({
    className: "aserto-button btn-secondary"
  }, props));
};

var css_248z$a = ".page-divider {\n  border-top-color: #35393d;\n  width: 100vw;\n  margin-bottom: 0px;\n}";
styleInject(css_248z$a);

var Divider = function Divider(_ref) {
  var marginBottom = _ref.marginBottom;
  return /*#__PURE__*/React.createElement("hr", {
    className: "page-divider",
    style: {
      marginBottom: marginBottom
    }
  });
};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var propTypes = createCommonjsModule(function (module) {
if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var registeredLanguages = {};

var Highlight = /*#__PURE__*/function (_Component) {
  _inherits(Highlight, _Component);

  var _super = _createSuper(Highlight);

  function Highlight(props) {
    var _this;

    _classCallCheck(this, Highlight);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "highlight", function () {
      _this.codeNode && _this.codeNode.current && hljs.highlightBlock(_this.codeNode.current);
    });

    _this.state = {
      loaded: false
    };
    _this.codeNode = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(Highlight, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var language = this.props.language;

      if (language && !registeredLanguages[language]) {
        try {
          var newLanguage = require("highlight.js/lib/languages/".concat(language));

          hljs.registerLanguage(language, newLanguage);
          registeredLanguages[language] = true;
          this.setState({
            loaded: true
          }, this.highlight);
        } catch (e) {
          console.error(e);
          throw Error("Cannot register the language ".concat(language));
        }
      } else {
        this.setState({
          loaded: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.highlight();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          language = _this$props.language,
          children = _this$props.children,
          style = _this$props.style;
      var loaded = this.state.loaded;

      if (!loaded) {
        return null;
      }

      return /*#__PURE__*/React.createElement("pre", {
        className: "rounded"
      }, /*#__PURE__*/React.createElement("code", {
        ref: this.codeNode,
        className: language,
        style: _objectSpread(_objectSpread({}, style), {}, {
          backgroundColor: '#161719',
          fontSize: 16
        })
      }, children));
    }
  }]);

  return Highlight;
}(Component);

Highlight.propTypes = {
  children: propTypes.node.isRequired,
  language: propTypes.string
};
Highlight.defaultProps = {
  language: "json"
};

var css_248z$9 = "\ninput.form-control {\n  background-color: #161719;\n  color: #d7d8d8;\n  border-color: #403f3f;\n}\n\n/* focus for inputs */\ninput.form-control:focus {\n  background-color: #161719;\n  color: #d7d8d8;\n  outline: none;\n  border-color: #7d7a7a;\n  -webkit-box-shadow: none;\n  box-shadow: none;  \n}";
styleInject(css_248z$9);

var Input = function Input(_ref) {
  var placeholder = _ref.placeholder,
      value = _ref.value,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["placeholder", "value", "onChange"]);

  return /*#__PURE__*/React.createElement(FormControl, _extends({
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }, props));
};

var loading = "var img = \"data:image/svg+xml,%3c%3fxml version='1.0' encoding='utf-8'%3f%3e%3csvg width='120px' height='120px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' class='uil-ring'%3e%3crect x='0' y='0' width='100' height='100' fill='none' class='bk'%3e%3c/rect%3e%3cdefs%3e%3cfilter id='uil-ring-shadow' x='-100%25' y='-100%25' width='300%25' height='300%25'%3e%3cfeOffset result='offOut' in='SourceGraphic' dx='0' dy='0'%3e%3c/feOffset%3e%3cfeGaussianBlur result='blurOut' in='offOut' stdDeviation='0'%3e%3c/feGaussianBlur%3e%3cfeBlend in='SourceGraphic' in2='blurOut' mode='normal'%3e%3c/feBlend%3e%3c/filter%3e%3c/defs%3e%3cpath d='M10%2c50c0%2c0%2c0%2c0.5%2c0.1%2c1.4c0%2c0.5%2c0.1%2c1%2c0.2%2c1.7c0%2c0.3%2c0.1%2c0.7%2c0.1%2c1.1c0.1%2c0.4%2c0.1%2c0.8%2c0.2%2c1.2c0.2%2c0.8%2c0.3%2c1.8%2c0.5%2c2.8 c0.3%2c1%2c0.6%2c2.1%2c0.9%2c3.2c0.3%2c1.1%2c0.9%2c2.3%2c1.4%2c3.5c0.5%2c1.2%2c1.2%2c2.4%2c1.8%2c3.7c0.3%2c0.6%2c0.8%2c1.2%2c1.2%2c1.9c0.4%2c0.6%2c0.8%2c1.3%2c1.3%2c1.9 c1%2c1.2%2c1.9%2c2.6%2c3.1%2c3.7c2.2%2c2.5%2c5%2c4.7%2c7.9%2c6.7c3%2c2%2c6.5%2c3.4%2c10.1%2c4.6c3.6%2c1.1%2c7.5%2c1.5%2c11.2%2c1.6c4-0.1%2c7.7-0.6%2c11.3-1.6 c3.6-1.2%2c7-2.6%2c10-4.6c3-2%2c5.8-4.2%2c7.9-6.7c1.2-1.2%2c2.1-2.5%2c3.1-3.7c0.5-0.6%2c0.9-1.3%2c1.3-1.9c0.4-0.6%2c0.8-1.3%2c1.2-1.9 c0.6-1.3%2c1.3-2.5%2c1.8-3.7c0.5-1.2%2c1-2.4%2c1.4-3.5c0.3-1.1%2c0.6-2.2%2c0.9-3.2c0.2-1%2c0.4-1.9%2c0.5-2.8c0.1-0.4%2c0.1-0.8%2c0.2-1.2 c0-0.4%2c0.1-0.7%2c0.1-1.1c0.1-0.7%2c0.1-1.2%2c0.2-1.7C90%2c50.5%2c90%2c50%2c90%2c50s0%2c0.5%2c0%2c1.4c0%2c0.5%2c0%2c1%2c0%2c1.7c0%2c0.3%2c0%2c0.7%2c0%2c1.1 c0%2c0.4-0.1%2c0.8-0.1%2c1.2c-0.1%2c0.9-0.2%2c1.8-0.4%2c2.8c-0.2%2c1-0.5%2c2.1-0.7%2c3.3c-0.3%2c1.2-0.8%2c2.4-1.2%2c3.7c-0.2%2c0.7-0.5%2c1.3-0.8%2c1.9 c-0.3%2c0.7-0.6%2c1.3-0.9%2c2c-0.3%2c0.7-0.7%2c1.3-1.1%2c2c-0.4%2c0.7-0.7%2c1.4-1.2%2c2c-1%2c1.3-1.9%2c2.7-3.1%2c4c-2.2%2c2.7-5%2c5-8.1%2c7.1 c-0.8%2c0.5-1.6%2c1-2.4%2c1.5c-0.8%2c0.5-1.7%2c0.9-2.6%2c1.3L66%2c87.7l-1.4%2c0.5c-0.9%2c0.3-1.8%2c0.7-2.8%2c1c-3.8%2c1.1-7.9%2c1.7-11.8%2c1.8L47%2c90.8 c-1%2c0-2-0.2-3-0.3l-1.5-0.2l-0.7-0.1L41.1%2c90c-1-0.3-1.9-0.5-2.9-0.7c-0.9-0.3-1.9-0.7-2.8-1L34%2c87.7l-1.3-0.6 c-0.9-0.4-1.8-0.8-2.6-1.3c-0.8-0.5-1.6-1-2.4-1.5c-3.1-2.1-5.9-4.5-8.1-7.1c-1.2-1.2-2.1-2.7-3.1-4c-0.5-0.6-0.8-1.4-1.2-2 c-0.4-0.7-0.8-1.3-1.1-2c-0.3-0.7-0.6-1.3-0.9-2c-0.3-0.7-0.6-1.3-0.8-1.9c-0.4-1.3-0.9-2.5-1.2-3.7c-0.3-1.2-0.5-2.3-0.7-3.3 c-0.2-1-0.3-2-0.4-2.8c-0.1-0.4-0.1-0.8-0.1-1.2c0-0.4%2c0-0.7%2c0-1.1c0-0.7%2c0-1.2%2c0-1.7C10%2c50.5%2c10%2c50%2c10%2c50z' fill='%23277F82' filter='url(%23uil-ring-shadow)'%3e%3canimateTransform attributeName='transform' type='rotate' from='0 50 50' to='360 50 50' repeatCount='indefinite' dur='1s'%3e%3c/animateTransform%3e%3c/path%3e%3c/svg%3e\";\n  export default img;";

var css_248z$8 = ".spinner {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  background-color: #161719;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}";
styleInject(css_248z$8);

var Loading = function Loading() {
  return /*#__PURE__*/React.createElement("div", {
    className: "spinner"
  }, /*#__PURE__*/React.createElement("img", {
    src: loading,
    alt: "Loading"
  }));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var css_248z$7 = "/* make it sticky */\n\ndiv.navbar-container {\n\tposition: sticky !important;\n\ttop: 0;\n\twidth: 100%;\n\tz-index: 10 !important;  \n}\n\n/* navbar styling */\n\n.navbar.bg-dark .nav-link {\n  color: #9ca9b3; \n}\n\n.navbar.bg-dark .nav-link:hover {\n  color: #eceded; \n}\n\n.navbar {\n  background-color: #1F2224;\n  padding: 1.375rem 0;\n  box-shadow: 0px 1px 2px 0px #35393d; \n}\n\n.navbar .router-link-exact-active {\n  border-bottom: 1px solid #48a4a7;         \n}\n\n.nav-item a.nav-link {\n  padding-top: 10px;\n  padding-bottom: 25px;\n}\n\n.navbar-brand {\n  margin-left: 10px;\n  margin-right: 30px; \n  margin-top: -18px;\n}\n\n.navbar-nav .nav-link {\n  color: #041433;\n  padding: 0 0 1rem 0;\n  box-sizing: border-box;\n  margin: 0 40px 0 0;\n  font-weight: 400; \n}\n\n.navbar-nav .nav-link:hover {\n  color: #ECEDED;     \n}\n\n.navbar-nav .btn {\n  min-width: 145px; \n}\n\n.nav-user-profile {\n  border-radius: 50% 50%;\n  max-width: 3.785rem;\n  height: auto;\n  box-shadow: 0px 0px 4px 0px #b3bac7; \n}\n\n.nav-item.dropdown .dropdown-toggle {\n  margin: 0; \n}\n\n.nav-item.dropdown .dropdown-name {\n  font-weight: 600; \n}\n\n.nav-item.dropdown .router-link-exact-active {\n  border: 0; \n}\n\n.nav-item.dropdown .dropdown-menu {\n  box-shadow: 0px 0px 4px 0px #b3bac7; \n}\n\n.nav-item.dropdown .dropdown-header {\n  border-bottom: 1px solid #b3bac7;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #041433; \n}\n\n.nav-item.dropdown .dropdown-item {\n  border-bottom: 1px solid #b3bac7;\n  padding: 0.55rem 1.5rem; \n}\n\n.nav-item.dropdown .dropdown-item .icon {\n  margin-right: 8px;\n  vertical-align: middle; \n}\n\n.nav-item.dropdown .dropdown-item:first-child:hover {\n  background: inherit;\n}\n\n.nav-item.dropdown .dropdown-item:last-child {\n  border-bottom: 0; \n}\n\n.navbar {\n  /* padding: 1.375rem 0; */\n  padding: 1.375rem 0 0 0;\n}\n\n@media (max-width: 767px) {\n  .nav-item {\n    margin-bottom: 1rem; \n  }\n  .nav-item .nav-link {\n    padding: 0 0 0 16px; \n  }\n  .nav-item .nav-link.router-link-exact-active {\n    border-bottom: 0;\n    border-left: 1px solid #48a4a7;\n    padding-left: 13px !important;\n    vertical-align: middle; \n  }\n  .navbar-brand {\n    margin-left: 2.5rem;\n    vertical-align: top; \n  }\n  .navbar-toggler {\n    margin-right: 2.5rem; \n  }\n  .navbar-nav {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem; \n  }\n  .navbar-nav:first-child {\n    margin-top: 1.5em; \n  }\n  .navbar-nav:last-child {\n    background-color: #1F2224;\n    box-shadow: 0 -1px 2px 0 #dfe3ec;\n    margin: 1.5em 0 0 0;\n    padding: 1.5em 2.5rem; \n  }\n  .navbar-nav:last-child li {\n    margin-bottom: 1em; \n  }\n  .navbar-nav:last-child li .icon {\n    margin-right: 1em;\n    vertical-align: middle; \n  }\n  .navbar-nav:last-child li a {\n    vertical-align: middle;\n    color: #041433; \n  }\n  .navbar-nav .user-info img {\n    margin-right: 1em; \n  }\n  .navbar-nav .btn-link {\n    padding: 0;\n    color: #041433;\n    min-width: 0px; \n  }\n}\n";
styleInject(css_248z$7);

var NavBar = function NavBar(_a) {
  var children = _a.children,
      props = __rest(_a, ["children"]);

  console.log('v1');
  return /*#__PURE__*/React.createElement("div", __assign({
    className: 'navbar-container'
  }, props), /*#__PURE__*/React.createElement(Navbar, {
    className: "navbar-dark",
    expand: "md"
  }, /*#__PURE__*/React.createElement(Navbar.Brand, null, /*#__PURE__*/React.createElement("img", {
    src: "https://res.cloudinary.com/drdpedroso/image/upload/v1614880272/logo_tj6soa.png",
    width: "48",
    height: "48",
    style: {
      marginLeft: 10
    },
    className: "d-inline-block align-center",
    alt: "logo"
  })), /*#__PURE__*/React.createElement(Navbar.Toggle, null), /*#__PURE__*/React.createElement(Navbar.Collapse, null, children)));
};

var css_248z$6 = ".page-title {\n  font-family: 'Open Sans';\n  font-size: 32px;\n  color: #d7d8d8;\n  text-decoration: none solid rgb(215, 216, 216);\n  line-height: 42px;  \n  margin-left: 20px;\n  margin-right: 20px;\n}";
styleInject(css_248z$6);

var PageTitle = function PageTitle(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/React.createElement("div", {
    className: "page-title"
  }, title);
};

var css_248z$5 = "button.refresh-button, \nbutton.refresh-button:focus, \nbutton.refresh-button:active, \nbutton.refresh-button:visited {\n  position: absolute;\n  right: 20px;  \n  width: 92px;\n  height: 36px;\n  border: 1px solid #35393d;\n  border-radius: 4px;\n  background-color: #35393d66;\n  background-size: cover;\n  font-family: Roboto;\n  font-size: 14px;\n  color: #d7d8d8;\n  text-decoration: none solid rgb(215, 216, 216);\n  text-align: center;\n  box-shadow: none;\n  outline: none;\n}\n\nbutton.refresh-button:hover {\n  background-color: #35393d;\n  border: 1px solid #35393d;\n}\n";
styleInject(css_248z$5);

var RefreshButton = function RefreshButton(_ref) {
  var load = _ref.load,
      loading = _ref.loading;
  return /*#__PURE__*/React.createElement(Button, {
    className: "refresh-button btn-secondary",
    onClick: load
  }, /*#__PURE__*/React.createElement("i", {
    className: loading ? "fa fa-spinner" : "fa fa-refresh"
  }), "\xA0Refresh");
};

var css_248z$4 = ".page-header {\n  padding: 40px 0px 0px 0px;\n  position: sticky !important;\n\ttop: 82px !important;\n  z-index: 9 !important;  \n  background-color: #161719;\n}";
styleInject(css_248z$4);

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

var css_248z$3 = ".play-button {\n  margin-top: 9px;\n  width: 42px;\n  height: 42px;\n  fill: #298A8E;\n}\n\n.play-button:hover {\n  fill: #32a9ad;\n}\n";
styleInject(css_248z$3);

var PlayButton = function PlayButton(_ref) {
  var onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("div", {
    className: "play-button",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("svg", {
    version: "1.2",
    xmlns: "http://www.w3.org/2000/svg",
    overflow: "visible",
    preserveAspectRatio: "none",
    viewBox: "0 0 41.99999699397481 41.99999601375708",
    width: "41.99999699397481",
    height: "41.99999601375708"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0, 0)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(4.721301208598927e-7, -0.000003331672143458819) rotate(0)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.18749,0.00104c-9.34969,-0.09325 -17.93495,6.11204 -20.46684,15.56138c-3.00075,11.19921 3.6434,22.71612 14.84234,25.71692c11.19899,3.0008 22.71559,-3.6435 25.71638,-14.84271c3.0007,-11.19921 -3.6435,-22.71608 -14.84239,-25.7169c-1.7498,-0.46887 -3.5181,-0.70142 -5.2495,-0.71869zM16.00049,11.50021l15.99849,9.49941l-15.99849,9.49931z",
    style: {
      strokeWidth: 0,
      strokeLinecap: 'butt',
      strokeLinejoin: 'miter'
    },
    vectorEffect: "non-scaling-stroke"
  })))));
};

var css_248z$2 = ".react-select {\n  font-family: Roboto;\n  font-size: 14px;\n  color: #d7d8d8;\n  text-decoration: none solid rgb(215, 216, 216);  \n}\n\ndiv.react-select {\n  outline: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;  \n  border-color: white;\n}";
styleInject(css_248z$2);

var Select = function Select(_ref) {
  var options = _ref.options,
      defaultValue = _ref.defaultValue,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["options", "defaultValue", "onChange"]);

  var removeFocusBox = {
    outline: 'none',
    //borderColor: 'inherit',
    webkitBoxShadow: 'none',
    boxShadow: 'none' //borderColor: 'white'

  };
  var colourStyles = {
    control: function control(styles, _ref2) {
      var isFocused = _ref2.isFocused;
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: isFocused ? '#585f66' : '#35393d',
        color: isFocused ? '#ffffff' : '#d7d8d8',
        borderColor: isFocused ? '#35393d' : '#35393d',
        borderWidth: 0,
        ':hover': _objectSpread(_objectSpread({}, styles[':hover']), {}, {
          backgroundColor: '#585f66',
          borderColor: '#585f66',
          color: '#ffffff'
        })
      });
    },
    option: function option(styles, _ref3) {
      _ref3.data;
          var isDisabled = _ref3.isDisabled,
          isFocused = _ref3.isFocused,
          isSelected = _ref3.isSelected;
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: isFocused ? '#298a8e' : isSelected ? '#3e4347' : '#35393d',
        color: isFocused || isSelected ? '#ffffff' : '#d7d8d8',
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': _objectSpread(_objectSpread({}, styles[':active']), {}, {
          backgroundColor: '#298a8e'
        })
      });
    },
    input: function input(styles, _ref4) {
      _ref4.isFocused;
      return _objectSpread(_objectSpread({}, styles), {}, {
        borderColor: '#8a959f'
      });
    },
    placeholder: function placeholder(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        color: '#d7d8d8'
      });
    },
    singleValue: function singleValue(styles, _ref5) {
      _ref5.data;
      return _objectSpread(_objectSpread({}, styles), {}, {
        color: '#d7d8d8'
      }, removeFocusBox);
    },
    menu: function menu(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: '#35393d'
      });
    },
    dropdownIndicator: function dropdownIndicator(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        ':focus': {
          color: 'white'
        }
      });
    },
    indicatorSeparator: function indicatorSeparator(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        fill: 'black'
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", props, /*#__PURE__*/React.createElement(ReactSelect, {
    className: "react-select",
    options: options,
    defaultValue: defaultValue,
    onChange: onChange,
    styles: colourStyles
  }));
};

var css_248z$1 = "\ntextarea.form-control {\n  background-color: #161719;\n  color: #d7d8d8;\n  border-color: #403f3f;\n  font-family: 'Ubuntu', monospace;\n}\n\n/* focus for textarea */\ntextarea.form-control:focus {\n  background-color: #161719;\n  color: #d7d8d8;\n  outline: none;\n  border-color: #7d7a7a;\n  -webkit-box-shadow: none;\n  box-shadow: none;  \n}";
styleInject(css_248z$1);

var TextArea = function TextArea(_ref) {
  var placeholder = _ref.placeholder,
      value = _ref.value,
      onChange = _ref.onChange,
      rows = _ref.rows,
      props = _objectWithoutProperties(_ref, ["placeholder", "value", "onChange", "rows"]);

  return /*#__PURE__*/React.createElement(FormControl, _extends({
    as: "textarea",
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }, props));
};

var usericon = "var img = \"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='82' height='82' viewBox='0 0 82 82'%3e %3cdefs%3e %3cclipPath id='clip-User'%3e %3crect width='82' height='82'/%3e %3c/clipPath%3e %3c/defs%3e %3cg id='User' clip-path='url(%23clip-User)'%3e %3cg id='noun_User_1994976' transform='translate(-3.913 -2.5)'%3e %3cg id='Group_2' data-name='Group 2' transform='translate(12.7 2.5)'%3e %3cg id='Group_1' data-name='Group 1'%3e %3cpath id='Path_1' data-name='Path 1' d='M61.84%2c48.965a1.293%2c1.293%2c0%2c0%2c0-1.555.086%2c25.591%2c25.591%2c0%2c0%2c1-15.372%2c5.009A26.175%2c26.175%2c0%2c0%2c1%2c29.54%2c49.052a1.451%2c1.451%2c0%2c0%2c0-1.555-.086C17.8%2c55.529%2c12.7%2c68.4%2c12.7%2c83.164c0%2c10.191%2c64.425%2c10.191%2c64.425%2c0C77.125%2c68.4%2c72.03%2c55.529%2c61.84%2c48.965Z' transform='translate(-12.7 -8.807)' fill='%238a959f'/%3e %3ccircle id='Ellipse_1' data-name='Ellipse 1' cx='19.259' cy='19.259' r='19.259' transform='translate(12.954)' fill='%238a959f'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e\";\n  export default img;";

var css_248z = ".card.user-card {\n  min-width: 428px;\n  max-width: 428px;\n  height: 104px;\n  border-radius: 5px;\n  background-color: #35393d66;\n  background-size: cover;\n  margin: 0px 20px 20px 0px !important;\n}\n\n.card.user-card:hover {\n  background-color: #35393d;\n  background-size: cover;\n  cursor: pointer;\n}\n\n.card.user-card .card-title {\n  color: #d7d8d8;\n  font-family: Roboto;\n  font-size: 18px;\n  vertical-align: middle;\n  text-decoration: none solid rgb(215, 216, 216);\n}\n\n.card.user-card .user-card-image {\n  margin: 10px;\n  width: 82px;\n  background-image: url('./user.svg');\n}\n";
styleInject(css_248z);

var UserCard = function UserCard(_ref) {
  var user = _ref.user,
      onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ["user", "onClick"]);

  return /*#__PURE__*/React.createElement(Card, _extends({
    className: "user-card",
    onClick: onClick
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "display-flex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "user-card-image"
  }, /*#__PURE__*/React.createElement(Card.Img, {
    src: user.picture,
    alt: "picture",
    onError: function onError(e) {
      return e.target.src = usericon;
    }
  })), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Title, {
    as: "h5"
  }, user.display_name), /*#__PURE__*/React.createElement(Card.Text, null, user.email))));
};

export { ApplicationCard, BreadCrumb as Breadcrumb, Button, Divider, Highlight, Input, Loading, NavBar, PageHeader, PageTitle, PlayButton, RefreshButton, Select, TextArea, UserCard };
