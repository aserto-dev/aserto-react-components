import { _ as __makeTemplateObject, a as __rest, b as __assign } from '../../_tslib-02678a84.js';
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Input } from '../Input/index.js';
import { Button } from '../Button/index.js';
import { m as mapTestIdToProps } from '../../utils-bc584a2b.js';
import 'react-bootstrap';
import '../../theme-526b9b1f.js';
import '../Label/index.js';

var img$2 = "data:image/svg+xml,%3csvg version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='visible' preserveAspectRatio='none' viewBox='0 0 16 12' width='16' height='12'%3e%3cg transform='translate(0%2c 0)'%3e%3cg transform='translate(0%2c 0) rotate(0)'%3e%3cpath d='M8%2c0c4.31371%2c0 8%2c4 8%2c6c0%2c2 -3.68629%2c6 -8%2c6c-4.31371%2c0 -8%2c-4 -8%2c-6c0%2c-2 3.68629%2c-6 8%2c-6zM8%2c2c-2.20914%2c0 -4%2c1.79086 -4%2c4c0%2c2.20914 1.79086%2c4 4%2c4c2.20914%2c0 4%2c-1.79086 4%2c-4c0%2c-2.20914 -1.79086%2c-4 -4%2c-4zM8%2c4c0.20503%2c0 0.40285%2c0.03085 0.58908%2c0.08817c-0.34736%2c0.15669 -0.58908%2c0.50603 -0.58908%2c0.91183c0%2c0.55228 0.44772%2c1 1%2c1c0.4058%2c0 0.75515%2c-0.24172 0.91192%2c-0.58902c0.05723%2c0.18617 0.08808%2c0.384 0.08808%2c0.58902c0%2c1.10457 -0.89543%2c2 -2%2c2c-1.10457%2c0 -2%2c-0.89543 -2%2c-2c0%2c-1.10457 0.89543%2c-2 2%2c-2z' style='stroke-width: 0%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b fill: rgb(160%2c 160%2c 160)%3b' vector-effect='non-scaling-stroke'/%3e%3c/g%3e%3cdefs%3e%3cpath id='path-1617926008239128' d='M8%2c0c4.31371%2c0 8%2c4 8%2c6c0%2c2 -3.68629%2c6 -8%2c6c-4.31371%2c0 -8%2c-4 -8%2c-6c0%2c-2 3.68629%2c-6 8%2c-6zM8%2c2c-2.20914%2c0 -4%2c1.79086 -4%2c4c0%2c2.20914 1.79086%2c4 4%2c4c2.20914%2c0 4%2c-1.79086 4%2c-4c0%2c-2.20914 -1.79086%2c-4 -4%2c-4zM8%2c4c0.20503%2c0 0.40285%2c0.03085 0.58908%2c0.08817c-0.34736%2c0.15669 -0.58908%2c0.50603 -0.58908%2c0.91183c0%2c0.55228 0.44772%2c1 1%2c1c0.4058%2c0 0.75515%2c-0.24172 0.91192%2c-0.58902c0.05723%2c0.18617 0.08808%2c0.384 0.08808%2c0.58902c0%2c1.10457 -0.89543%2c2 -2%2c2c-1.10457%2c0 -2%2c-0.89543 -2%2c-2c0%2c-1.10457 0.89543%2c-2 2%2c-2z' vector-effect='non-scaling-stroke'/%3e%3c/defs%3e%3c/g%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='visible' preserveAspectRatio='none' viewBox='0 0 16.024839999999998 16.024839999999998' width='16.024839999999998' height='16.024839999999998'%3e%3cg transform='translate(0%2c 0)'%3e%3cg transform='translate(0.0000049999999997552%2c -0.0000049999999998801) rotate(0)'%3e%3cpath d='M15.87839%2c0.14645c0.19526%2c0.19526 0.19526%2c0.51184 0%2c0.70711l-15.02484%2c15.02484c-0.19526%2c0.19526 -0.51184%2c0.19526 -0.70711%2c0c-0.19526%2c-0.19526 -0.19526%2c-0.51184 0%2c-0.70711l15.02484%2c-15.02484c0.19526%2c-0.19526 0.51184%2c-0.19526 0.70711%2c0zM13.38215%2c4.09942c1.60366%2c1.28762 2.63027%2c2.90005 2.63027%2c3.9555c0%2c2 -3.68629%2c6 -8%2c6c-1.30384%2c0 -2.55037%2c-0.36543 -3.65511%2c-0.93062l1.62309%2c-1.62322c0.59552%2c0.35191 1.29019%2c0.55385 2.03201%2c0.55385c2.20914%2c0 4%2c-1.79086 4%2c-4c0%2c-0.74183 -0.20194%2c-1.43649 -0.55385%2c-2.03201zM8.01242%2c2.05492c1.30391%2c0 2.5505%2c0.36547 3.65527%2c0.93071l-1.62309%2c1.62324c-0.59556%2c-0.35197 -1.29028%2c-0.55394 -2.03218%2c-0.55394c-2.20914%2c0 -4%2c1.79086 -4%2c4c0%2c0.7419 0.20198%2c1.43662 0.55394%2c2.03218l-1.92351%2c1.92346c-1.60376%2c-1.28764 -2.63043%2c-2.90015 -2.63043%2c-3.95564c0%2c-2 3.68629%2c-6 8%2c-6zM9.94473%2c7.53691c0.04413%2c0.16519 0.06769%2c0.33885 0.06769%2c0.51801c0%2c1.10457 -0.89543%2c2 -2%2c2c-0.17915%2c0 -0.35281%2c-0.02356 -0.51803%2c-0.06774zM8.01242%2c6.05492c0.17922%2c0 0.35294%2c0.02357 0.51821%2c0.06779l-2.45043%2c2.45041c-0.04421%2c-0.16527 -0.06778%2c-0.33898 -0.06778%2c-0.51819c0%2c-1.10457 0.89543%2c-2 2%2c-2z' style='stroke-width: 0%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b fill: rgb(160%2c 160%2c 160)%3b' vector-effect='non-scaling-stroke'/%3e%3c/g%3e%3cdefs%3e%3cpath id='path-1617926008240131' d='M15.87839%2c0.14645c0.19526%2c0.19526 0.19526%2c0.51184 0%2c0.70711l-15.02484%2c15.02484c-0.19526%2c0.19526 -0.51184%2c0.19526 -0.70711%2c0c-0.19526%2c-0.19526 -0.19526%2c-0.51184 0%2c-0.70711l15.02484%2c-15.02484c0.19526%2c-0.19526 0.51184%2c-0.19526 0.70711%2c0zM13.38215%2c4.09942c1.60366%2c1.28762 2.63027%2c2.90005 2.63027%2c3.9555c0%2c2 -3.68629%2c6 -8%2c6c-1.30384%2c0 -2.55037%2c-0.36543 -3.65511%2c-0.93062l1.62309%2c-1.62322c0.59552%2c0.35191 1.29019%2c0.55385 2.03201%2c0.55385c2.20914%2c0 4%2c-1.79086 4%2c-4c0%2c-0.74183 -0.20194%2c-1.43649 -0.55385%2c-2.03201zM8.01242%2c2.05492c1.30391%2c0 2.5505%2c0.36547 3.65527%2c0.93071l-1.62309%2c1.62324c-0.59556%2c-0.35197 -1.29028%2c-0.55394 -2.03218%2c-0.55394c-2.20914%2c0 -4%2c1.79086 -4%2c4c0%2c0.7419 0.20198%2c1.43662 0.55394%2c2.03218l-1.92351%2c1.92346c-1.60376%2c-1.28764 -2.63043%2c-2.90015 -2.63043%2c-3.95564c0%2c-2 3.68629%2c-6 8%2c-6zM9.94473%2c7.53691c0.04413%2c0.16519 0.06769%2c0.33885 0.06769%2c0.51801c0%2c1.10457 -0.89543%2c2 -2%2c2c-0.17915%2c0 -0.35281%2c-0.02356 -0.51803%2c-0.06774zM8.01242%2c6.05492c0.17922%2c0 0.35294%2c0.02357 0.51821%2c0.06779l-2.45043%2c2.45041c-0.04421%2c-0.16527 -0.06778%2c-0.33898 -0.06778%2c-0.51819c0%2c-1.10457 0.89543%2c-2 2%2c-2z' vector-effect='non-scaling-stroke'/%3e%3c/defs%3e%3c/g%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='16' height='16' viewBox='0 0 16 16'%3e %3cdefs%3e %3cclipPath id='clip-Copy-to-clipboard'%3e %3crect width='16' height='16'/%3e %3c/clipPath%3e %3c/defs%3e %3cg id='Copy-to-clipboard' clip-path='url(%23clip-Copy-to-clipboard)'%3e %3cg id='Group_1' data-name='Group 1' transform='translate(-13 133)'%3e %3cg id='File_Paste_Copy' data-name='File%2c Paste%2c Copy' transform='translate(13 -133)'%3e %3cpath id='Path_1' data-name='Path 1' d='M6.692%2c14.691H4.231V4.231h8.615a.615.615%2c0%2c1%2c0%2c0-1.231H3.615A.615.615%2c0%2c0%2c0%2c3%2c3.615V15.306a.615.615%2c0%2c0%2c0%2c.615.615H6.692a.615.615%2c0%2c0%2c0%2c0-1.231Z' transform='translate(-3 -3)' fill='%23a0a0a0'/%3e %3cpath id='Path_2' data-name='Path 2' d='M21.845%2c8h-9.23A.615.615%2c0%2c0%2c0%2c12%2c8.615V20.306a.615.615%2c0%2c0%2c0%2c.615.615h9.23a.615.615%2c0%2c0%2c0%2c.615-.615V8.615A.615.615%2c0%2c0%2c0%2c21.845%2c8ZM21.23%2c19.691h-8V9.231h8Z' transform='translate(-6.462 -4.923)' fill='%23a0a0a0'/%3e %3cpath id='Path_3' data-name='Path 3' d='M17.615%2c17.231h3.077a.615.615%2c0%2c1%2c0%2c0-1.231H17.615a.615.615%2c0%2c1%2c0%2c0%2c1.231Z' transform='translate(-8.385 -8.001)' fill='%23a0a0a0'/%3e %3cpath id='Path_4' data-name='Path 4' d='M17.615%2c21.231h3.077a.615.615%2c0%2c1%2c0%2c0-1.231H17.615a.615.615%2c0%2c1%2c0%2c0%2c1.231Z' transform='translate(-8.385 -9.54)' fill='%23a0a0a0'/%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var Anm = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n\n  10% {\n    transform: translateY(-100%);\n  }\n\n  15% {\n    transform: translateY(0);\n  }\n\n  30% {\n    transform: translateY(-10%);\n  }\n\n  40% {\n    transform: translateY(0%);\n  }\n\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n\n  10% {\n    transform: translateY(-100%);\n  }\n\n  15% {\n    transform: translateY(0);\n  }\n\n  30% {\n    transform: translateY(-10%);\n  }\n\n  40% {\n    transform: translateY(0%);\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])));
var ActionableInputContainer = styled.div.withConfig({
  displayName: "ActionableInput__ActionableInputContainer",
  componentId: "sc-17yazxy-0"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));
var ButtonContainer = styled(Button).withConfig({
  displayName: "ActionableInput__ButtonContainer",
  componentId: "sc-17yazxy-1"
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 8px;\n  margin-left: 4px;\n  ", "\n"], ["\n  padding: 8px;\n  margin-left: 4px;\n  ", "\n"])), function (_a) {
  var $wasClicked = _a.$wasClicked;
  return $wasClicked ? css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          animation: ", " 0.6s 0.1s 1 linear alternate;\n          background-color: transparent !important;\n        "], ["\n          animation: ", " 0.6s 0.1s 1 linear alternate;\n          background-color: transparent !important;\n        "])), Anm) : '';
});
var ActionableInput = function ActionableInput(_a) {
  var onClickCopy = _a.onClickCopy,
      shouldShowHideShowButton = _a.shouldShowHideShowButton,
      testId = _a.testId,
      inputProps = __rest(_a, ["onClickCopy", "shouldShowHideShowButton", "testId"]);

  var _b = useState(inputProps.type || 'text'),
      type = _b[0],
      setType = _b[1];

  var _c = useState(false),
      wasClicked = _c[0],
      setWasClicked = _c[1];

  useEffect(function () {
    if (wasClicked) {
      setTimeout(function () {
        setWasClicked(false);
      }, 800);
    }
  }, [wasClicked]);
  return /*#__PURE__*/React.createElement(ActionableInputContainer, null, /*#__PURE__*/React.createElement(Input, __assign({}, inputProps, {
    type: type,
    "data-testid": testId
  })), onClickCopy && /*#__PURE__*/React.createElement(ButtonContainer, __assign({
    "$wasClicked": wasClicked,
    variant: "secondary-borderless",
    onClick: function onClick(e) {
      setWasClicked(true);
      e.currentTarget.blur();
      onClickCopy(String(inputProps.value));
    }
  }, mapTestIdToProps(testId + "-copy-btn")), /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "copy"
  })), shouldShowHideShowButton && /*#__PURE__*/React.createElement(React.Fragment, null, type === 'password' ? /*#__PURE__*/React.createElement(Button, __assign({
    variant: "secondary-borderless",
    onClick: function onClick() {
      return setType('text');
    }
  }, mapTestIdToProps(testId + "-show-btn")), /*#__PURE__*/React.createElement("img", {
    alt: "show",
    src: img$2
  })) : /*#__PURE__*/React.createElement(Button, __assign({
    onClick: function onClick() {
      return setType('password');
    },
    variant: "secondary-borderless"
  }, mapTestIdToProps(testId + "-hide-btn")), /*#__PURE__*/React.createElement("img", {
    alt: "hide",
    src: img$1
  }))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

export { ActionableInput };
