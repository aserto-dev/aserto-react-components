import { _ as __makeTemplateObject, a as __rest, b as __assign } from '../../_tslib-66d5e02f.js';
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Input } from '../Input/index.js';
import { Button } from '../Button/index.js';
import { m as mapTestIdToProps } from '../../utils-6a0a2690.js';
import { Label } from '../Label/index.js';
import 'react-bootstrap';
import '../../theme-526b9b1f.js';

var img$3 = "data:image/svg+xml,%3csvg version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='visible' preserveAspectRatio='none' viewBox='0 0 16 12' width='16' height='12'%3e%3cg transform='translate(0%2c 0)'%3e%3cg transform='translate(0%2c 0) rotate(0)'%3e%3cpath d='M8%2c0c4.31371%2c0 8%2c4 8%2c6c0%2c2 -3.68629%2c6 -8%2c6c-4.31371%2c0 -8%2c-4 -8%2c-6c0%2c-2 3.68629%2c-6 8%2c-6zM8%2c2c-2.20914%2c0 -4%2c1.79086 -4%2c4c0%2c2.20914 1.79086%2c4 4%2c4c2.20914%2c0 4%2c-1.79086 4%2c-4c0%2c-2.20914 -1.79086%2c-4 -4%2c-4zM8%2c4c0.20503%2c0 0.40285%2c0.03085 0.58908%2c0.08817c-0.34736%2c0.15669 -0.58908%2c0.50603 -0.58908%2c0.91183c0%2c0.55228 0.44772%2c1 1%2c1c0.4058%2c0 0.75515%2c-0.24172 0.91192%2c-0.58902c0.05723%2c0.18617 0.08808%2c0.384 0.08808%2c0.58902c0%2c1.10457 -0.89543%2c2 -2%2c2c-1.10457%2c0 -2%2c-0.89543 -2%2c-2c0%2c-1.10457 0.89543%2c-2 2%2c-2z' style='stroke-width: 0%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b fill: rgb(160%2c 160%2c 160)%3b' vector-effect='non-scaling-stroke'/%3e%3c/g%3e%3cdefs%3e%3cpath id='path-1617926008239128' d='M8%2c0c4.31371%2c0 8%2c4 8%2c6c0%2c2 -3.68629%2c6 -8%2c6c-4.31371%2c0 -8%2c-4 -8%2c-6c0%2c-2 3.68629%2c-6 8%2c-6zM8%2c2c-2.20914%2c0 -4%2c1.79086 -4%2c4c0%2c2.20914 1.79086%2c4 4%2c4c2.20914%2c0 4%2c-1.79086 4%2c-4c0%2c-2.20914 -1.79086%2c-4 -4%2c-4zM8%2c4c0.20503%2c0 0.40285%2c0.03085 0.58908%2c0.08817c-0.34736%2c0.15669 -0.58908%2c0.50603 -0.58908%2c0.91183c0%2c0.55228 0.44772%2c1 1%2c1c0.4058%2c0 0.75515%2c-0.24172 0.91192%2c-0.58902c0.05723%2c0.18617 0.08808%2c0.384 0.08808%2c0.58902c0%2c1.10457 -0.89543%2c2 -2%2c2c-1.10457%2c0 -2%2c-0.89543 -2%2c-2c0%2c-1.10457 0.89543%2c-2 2%2c-2z' vector-effect='non-scaling-stroke'/%3e%3c/defs%3e%3c/g%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3csvg version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='visible' preserveAspectRatio='none' viewBox='0 0 16.024839999999998 16.024839999999998' width='16.024839999999998' height='16.024839999999998'%3e%3cg transform='translate(0%2c 0)'%3e%3cg transform='translate(0.0000049999999997552%2c -0.0000049999999998801) rotate(0)'%3e%3cpath d='M15.87839%2c0.14645c0.19526%2c0.19526 0.19526%2c0.51184 0%2c0.70711l-15.02484%2c15.02484c-0.19526%2c0.19526 -0.51184%2c0.19526 -0.70711%2c0c-0.19526%2c-0.19526 -0.19526%2c-0.51184 0%2c-0.70711l15.02484%2c-15.02484c0.19526%2c-0.19526 0.51184%2c-0.19526 0.70711%2c0zM13.38215%2c4.09942c1.60366%2c1.28762 2.63027%2c2.90005 2.63027%2c3.9555c0%2c2 -3.68629%2c6 -8%2c6c-1.30384%2c0 -2.55037%2c-0.36543 -3.65511%2c-0.93062l1.62309%2c-1.62322c0.59552%2c0.35191 1.29019%2c0.55385 2.03201%2c0.55385c2.20914%2c0 4%2c-1.79086 4%2c-4c0%2c-0.74183 -0.20194%2c-1.43649 -0.55385%2c-2.03201zM8.01242%2c2.05492c1.30391%2c0 2.5505%2c0.36547 3.65527%2c0.93071l-1.62309%2c1.62324c-0.59556%2c-0.35197 -1.29028%2c-0.55394 -2.03218%2c-0.55394c-2.20914%2c0 -4%2c1.79086 -4%2c4c0%2c0.7419 0.20198%2c1.43662 0.55394%2c2.03218l-1.92351%2c1.92346c-1.60376%2c-1.28764 -2.63043%2c-2.90015 -2.63043%2c-3.95564c0%2c-2 3.68629%2c-6 8%2c-6zM9.94473%2c7.53691c0.04413%2c0.16519 0.06769%2c0.33885 0.06769%2c0.51801c0%2c1.10457 -0.89543%2c2 -2%2c2c-0.17915%2c0 -0.35281%2c-0.02356 -0.51803%2c-0.06774zM8.01242%2c6.05492c0.17922%2c0 0.35294%2c0.02357 0.51821%2c0.06779l-2.45043%2c2.45041c-0.04421%2c-0.16527 -0.06778%2c-0.33898 -0.06778%2c-0.51819c0%2c-1.10457 0.89543%2c-2 2%2c-2z' style='stroke-width: 0%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b fill: rgb(160%2c 160%2c 160)%3b' vector-effect='non-scaling-stroke'/%3e%3c/g%3e%3cdefs%3e%3cpath id='path-1617926008240131' d='M15.87839%2c0.14645c0.19526%2c0.19526 0.19526%2c0.51184 0%2c0.70711l-15.02484%2c15.02484c-0.19526%2c0.19526 -0.51184%2c0.19526 -0.70711%2c0c-0.19526%2c-0.19526 -0.19526%2c-0.51184 0%2c-0.70711l15.02484%2c-15.02484c0.19526%2c-0.19526 0.51184%2c-0.19526 0.70711%2c0zM13.38215%2c4.09942c1.60366%2c1.28762 2.63027%2c2.90005 2.63027%2c3.9555c0%2c2 -3.68629%2c6 -8%2c6c-1.30384%2c0 -2.55037%2c-0.36543 -3.65511%2c-0.93062l1.62309%2c-1.62322c0.59552%2c0.35191 1.29019%2c0.55385 2.03201%2c0.55385c2.20914%2c0 4%2c-1.79086 4%2c-4c0%2c-0.74183 -0.20194%2c-1.43649 -0.55385%2c-2.03201zM8.01242%2c2.05492c1.30391%2c0 2.5505%2c0.36547 3.65527%2c0.93071l-1.62309%2c1.62324c-0.59556%2c-0.35197 -1.29028%2c-0.55394 -2.03218%2c-0.55394c-2.20914%2c0 -4%2c1.79086 -4%2c4c0%2c0.7419 0.20198%2c1.43662 0.55394%2c2.03218l-1.92351%2c1.92346c-1.60376%2c-1.28764 -2.63043%2c-2.90015 -2.63043%2c-3.95564c0%2c-2 3.68629%2c-6 8%2c-6zM9.94473%2c7.53691c0.04413%2c0.16519 0.06769%2c0.33885 0.06769%2c0.51801c0%2c1.10457 -0.89543%2c2 -2%2c2c-0.17915%2c0 -0.35281%2c-0.02356 -0.51803%2c-0.06774zM8.01242%2c6.05492c0.17922%2c0 0.35294%2c0.02357 0.51821%2c0.06779l-2.45043%2c2.45041c-0.04421%2c-0.16527 -0.06778%2c-0.33898 -0.06778%2c-0.51819c0%2c-1.10457 0.89543%2c-2 2%2c-2z' vector-effect='non-scaling-stroke'/%3e%3c/defs%3e%3c/g%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='16' height='16' viewBox='0 0 16 16'%3e %3cdefs%3e %3cclipPath id='clip-Copy-to-clipboard'%3e %3crect width='16' height='16'/%3e %3c/clipPath%3e %3c/defs%3e %3cg id='Copy-to-clipboard' clip-path='url(%23clip-Copy-to-clipboard)'%3e %3cg id='Group_1' data-name='Group 1' transform='translate(-13 133)'%3e %3cg id='File_Paste_Copy' data-name='File%2c Paste%2c Copy' transform='translate(13 -133)'%3e %3cpath id='Path_1' data-name='Path 1' d='M6.692%2c14.691H4.231V4.231h8.615a.615.615%2c0%2c1%2c0%2c0-1.231H3.615A.615.615%2c0%2c0%2c0%2c3%2c3.615V15.306a.615.615%2c0%2c0%2c0%2c.615.615H6.692a.615.615%2c0%2c0%2c0%2c0-1.231Z' transform='translate(-3 -3)' fill='%23a0a0a0'/%3e %3cpath id='Path_2' data-name='Path 2' d='M21.845%2c8h-9.23A.615.615%2c0%2c0%2c0%2c12%2c8.615V20.306a.615.615%2c0%2c0%2c0%2c.615.615h9.23a.615.615%2c0%2c0%2c0%2c.615-.615V8.615A.615.615%2c0%2c0%2c0%2c21.845%2c8ZM21.23%2c19.691h-8V9.231h8Z' transform='translate(-6.462 -4.923)' fill='%23a0a0a0'/%3e %3cpath id='Path_3' data-name='Path 3' d='M17.615%2c17.231h3.077a.615.615%2c0%2c1%2c0%2c0-1.231H17.615a.615.615%2c0%2c1%2c0%2c0%2c1.231Z' transform='translate(-8.385 -8.001)' fill='%23a0a0a0'/%3e %3cpath id='Path_4' data-name='Path 4' d='M17.615%2c21.231h3.077a.615.615%2c0%2c1%2c0%2c0-1.231H17.615a.615.615%2c0%2c1%2c0%2c0%2c1.231Z' transform='translate(-8.385 -9.54)' fill='%23a0a0a0'/%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0_120:8)'%3e%3cpath d='M15.9432 11.1452L11.0448 5.36546C11.7059 4.0773 11.5872 2.4671 10.5872 1.29759C9.55327 0.0602806 7.85833 -0.312608 6.43457 0.246725C7.29899 0.839956 7.96002 1.72133 8.28206 2.7722C8.7736 4.36544 8.40071 6.06039 7.34984 7.28075C7.87527 7.34855 8.41766 7.2977 8.94309 7.12821L9.68887 7.99263C9.73972 8.06043 9.80751 8.09433 9.89226 8.09433L10.7736 8.16213C10.9431 8.17907 11.0618 8.31467 11.0448 8.48416L11.0279 8.67061C11.0279 8.75536 11.0448 8.82315 11.0957 8.89095C11.1804 8.99265 11.1974 9.14519 11.1126 9.24689L11.0618 9.34859C10.994 9.46723 10.994 9.60283 11.0787 9.70453L11.5194 10.23C11.5872 10.3147 11.7059 10.3486 11.8076 10.3317L11.8923 10.3147C11.994 10.2978 12.1126 10.3317 12.1804 10.4164L12.4855 10.7723C12.5194 10.8232 12.5703 10.8571 12.6381 10.874L13.0279 10.9757C13.0957 10.9927 13.1466 11.0266 13.1805 11.0774L13.2991 11.213C13.3669 11.2808 13.3839 11.3825 13.3669 11.4842L13.2144 12.0605C13.1974 12.1452 13.2144 12.2469 13.2822 12.3317L13.8245 12.9758C13.8754 13.0266 13.9432 13.0775 14.011 13.0775L15.5873 13.247C15.7568 13.2639 15.9093 13.1283 15.9093 12.9588L15.9941 11.3656C16.011 11.2808 15.9941 11.213 15.9432 11.1452Z' fill='white'/%3e%3cpath d='M5.99272 7.0433C7.11139 6.12803 7.63682 4.58563 7.17918 3.12798C6.58595 1.17879 4.53507 0.0940215 2.60283 0.687253C0.653641 1.28048 -0.431125 3.33137 0.162106 5.28056C0.619742 6.73821 1.9079 7.72128 3.34861 7.85688L3.6876 8.94164C3.70454 9.00944 3.75539 9.07724 3.84014 9.11114L4.61982 9.53487C4.77236 9.61962 4.82321 9.78912 4.73846 9.94166L4.65371 10.1112C4.61982 10.179 4.60287 10.2637 4.63677 10.3484C4.67066 10.484 4.61982 10.6196 4.51812 10.6874L4.45032 10.7044C4.33167 10.7722 4.29778 10.9078 4.33167 11.0434L4.53507 11.7044C4.56897 11.8061 4.65371 11.8908 4.75541 11.9078L4.84016 11.9247C4.94186 11.9417 5.04355 12.0264 5.0605 12.1281L5.1961 12.5688C5.21305 12.6197 5.24695 12.6875 5.29779 12.7214L5.63678 12.9587C5.68763 12.9926 5.72153 13.0434 5.73848 13.1112L5.78933 13.2807C5.82323 13.3655 5.80628 13.4671 5.73848 13.5519L5.36559 14.0265C5.31474 14.1112 5.28084 14.196 5.31474 14.2977L5.56899 15.1112C5.58593 15.179 5.63678 15.2468 5.70458 15.2807L7.07749 16.0604C7.23003 16.1452 7.41648 16.0943 7.48428 15.9418L8.1792 14.518C8.2131 14.4502 8.2131 14.3655 8.19615 14.2977L5.99272 7.0433ZM3.6198 4.0263C3.07741 4.19579 2.50113 3.8907 2.33164 3.34832C2.16214 2.80594 2.46723 2.22965 3.00962 2.06016C3.552 1.89066 4.12828 2.19576 4.29778 2.73814C4.46727 3.28052 4.16218 3.8568 3.6198 4.0263Z' fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0_120:8'%3e%3crect width='16' height='16' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

var Anm = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n\n  10% {\n    transform: translateY(-100%);\n  }\n\n  15% {\n    transform: translateY(0);\n  }\n\n  30% {\n    transform: translateY(-10%);\n  }\n\n  40% {\n    transform: translateY(0%);\n  }\n\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n\n  10% {\n    transform: translateY(-100%);\n  }\n\n  15% {\n    transform: translateY(0);\n  }\n\n  30% {\n    transform: translateY(-10%);\n  }\n\n  40% {\n    transform: translateY(0%);\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])));
var CenteredRow = styled.div.withConfig({
  displayName: "ActionableInput__CenteredRow",
  componentId: "sc-17yazxy-0"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
var ActionableInputContainer = styled.div.withConfig({
  displayName: "ActionableInput__ActionableInputContainer",
  componentId: "sc-17yazxy-1"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n"])));
var ButtonContainer = styled(Button).withConfig({
  displayName: "ActionableInput__ButtonContainer",
  componentId: "sc-17yazxy-2"
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 8px;\n  margin-left: -34px;\n  ", "\n"], ["\n  padding: 8px;\n  margin-left: -34px;\n  ", "\n"])), function (_a) {
  var $wasClicked = _a.$wasClicked;
  return $wasClicked ? css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          animation: ", " 0.6s 0.1s 1 linear alternate;\n          background-color: transparent !important;\n        "], ["\n          animation: ", " 0.6s 0.1s 1 linear alternate;\n          background-color: transparent !important;\n        "])), Anm) : '';
});
var RotateKeyButton = styled(Button).withConfig({
  displayName: "ActionableInput__RotateKeyButton",
  componentId: "sc-17yazxy-3"
})(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-left: 55px;\n  background-color: #692525;\n  width: 120;\n"], ["\n  margin-left: 55px;\n  background-color: #692525;\n  width: 120;\n"])));
var ActionableInput = function ActionableInput(_a) {
  var onClickCopy = _a.onClickCopy,
      shouldShowHideShowButton = _a.shouldShowHideShowButton,
      testId = _a.testId,
      label = _a.label,
      onClickRotateModal = _a.onClickRotateModal,
      inputProps = __rest(_a, ["onClickCopy", "shouldShowHideShowButton", "testId", "label", "onClickRotateModal"]);

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
  return /*#__PURE__*/React.createElement(ActionableInputContainer, null, /*#__PURE__*/React.createElement(Label, null, label, /*#__PURE__*/React.createElement(CenteredRow, null, /*#__PURE__*/React.createElement(Input, __assign({}, inputProps, {
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
    src: img$1,
    alt: "copy"
  })), shouldShowHideShowButton && /*#__PURE__*/React.createElement(React.Fragment, null, type === 'password' ? /*#__PURE__*/React.createElement(Button, __assign({
    variant: "secondary-borderless",
    onClick: function onClick() {
      return setType('text');
    }
  }, mapTestIdToProps(testId + "-show-btn"), {
    style: {
      marginLeft: '-74px'
    }
  }), /*#__PURE__*/React.createElement("img", {
    alt: "show",
    src: img$3
  })) : /*#__PURE__*/React.createElement(Button, __assign({
    onClick: function onClick() {
      return setType('password');
    },
    variant: "secondary-borderless"
  }, mapTestIdToProps(testId + "-hide-btn"), {
    style: {
      marginLeft: '-74px'
    }
  }), /*#__PURE__*/React.createElement("img", {
    alt: "hide",
    src: img$2
  }))), onClickRotateModal && /*#__PURE__*/React.createElement(RotateKeyButton, __assign({
    onClick: function onClick() {
      return onClickRotateModal(true);
    },
    variant: "danger"
  }, mapTestIdToProps(testId + "-rotate-btn"), {
    style: {
      marginLeft: '55px',
      backgroundColor: '#692525',
      width: 120
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "rotate key",
    style: {
      paddingRight: '10px'
    }
  }), "Rotate key"))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

export { ActionableInput };
