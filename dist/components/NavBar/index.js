import React from 'react';
import { Navbar } from 'react-bootstrap';
import { s as styleInject } from '../../style-inject.es-1f59c1d0.js';

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

var css_248z = "/* make it sticky */\n\ndiv.navbar-container {\n\tposition: sticky !important;\n\ttop: 0;\n\twidth: 100%;\n\tz-index: 10 !important;  \n}\n\n/* navbar styling */\n\n.navbar.bg-dark .nav-link {\n  color: #9ca9b3; \n}\n\n.navbar.bg-dark .nav-link:hover {\n  color: #eceded; \n}\n\n.navbar {\n  background-color: #1F2224;\n  padding: 1.375rem 0;\n  box-shadow: 0px 1px 2px 0px #35393d; \n}\n\n.navbar .router-link-exact-active {\n  border-bottom: 1px solid #48a4a7;         \n}\n\n.nav-item a.nav-link {\n  padding-top: 10px;\n  padding-bottom: 25px;\n}\n\n.navbar-brand {\n  margin-left: 10px;\n  margin-right: 30px; \n  margin-top: -18px;\n}\n\n.navbar-nav .nav-link {\n  color: #041433;\n  padding: 0 0 1rem 0;\n  box-sizing: border-box;\n  margin: 0 40px 0 0;\n  font-weight: 400; \n}\n\n.navbar-nav .nav-link:hover {\n  color: #ECEDED;     \n}\n\n.navbar-nav .btn {\n  min-width: 145px; \n}\n\n.nav-user-profile {\n  border-radius: 50% 50%;\n  max-width: 3.785rem;\n  height: auto;\n  box-shadow: 0px 0px 4px 0px #b3bac7; \n}\n\n.nav-item.dropdown .dropdown-toggle {\n  margin: 0; \n}\n\n.nav-item.dropdown .dropdown-name {\n  font-weight: 600; \n}\n\n.nav-item.dropdown .router-link-exact-active {\n  border: 0; \n}\n\n.nav-item.dropdown .dropdown-menu {\n  box-shadow: 0px 0px 4px 0px #b3bac7; \n}\n\n.nav-item.dropdown .dropdown-header {\n  border-bottom: 1px solid #b3bac7;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #041433; \n}\n\n.nav-item.dropdown .dropdown-item {\n  border-bottom: 1px solid #b3bac7;\n  padding: 0.55rem 1.5rem; \n}\n\n.nav-item.dropdown .dropdown-item .icon {\n  margin-right: 8px;\n  vertical-align: middle; \n}\n\n.nav-item.dropdown .dropdown-item:first-child:hover {\n  background: inherit;\n}\n\n.nav-item.dropdown .dropdown-item:last-child {\n  border-bottom: 0; \n}\n\n.navbar {\n  /* padding: 1.375rem 0; */\n  padding: 1.375rem 0 0 0;\n}\n\n@media (max-width: 767px) {\n  .nav-item {\n    margin-bottom: 1rem; \n  }\n  .nav-item .nav-link {\n    padding: 0 0 0 16px; \n  }\n  .nav-item .nav-link.router-link-exact-active {\n    border-bottom: 0;\n    border-left: 1px solid #48a4a7;\n    padding-left: 13px !important;\n    vertical-align: middle; \n  }\n  .navbar-brand {\n    margin-left: 2.5rem;\n    vertical-align: top; \n  }\n  .navbar-toggler {\n    margin-right: 2.5rem; \n  }\n  .navbar-nav {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem; \n  }\n  .navbar-nav:first-child {\n    margin-top: 1.5em; \n  }\n  .navbar-nav:last-child {\n    background-color: #1F2224;\n    box-shadow: 0 -1px 2px 0 #dfe3ec;\n    margin: 1.5em 0 0 0;\n    padding: 1.5em 2.5rem; \n  }\n  .navbar-nav:last-child li {\n    margin-bottom: 1em; \n  }\n  .navbar-nav:last-child li .icon {\n    margin-right: 1em;\n    vertical-align: middle; \n  }\n  .navbar-nav:last-child li a {\n    vertical-align: middle;\n    color: #041433; \n  }\n  .navbar-nav .user-info img {\n    margin-right: 1em; \n  }\n  .navbar-nav .btn-link {\n    padding: 0;\n    color: #041433;\n    min-width: 0px; \n  }\n}\n";
styleInject(css_248z);

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

export default NavBar;
