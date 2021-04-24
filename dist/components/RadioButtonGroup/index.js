import { _ as __makeTemplateObject, b as __assign } from '../../_tslib-49c9bcfb.js';
import React, { useState, useEffect } from 'react';
import { Y as Ye, _ as _e } from '../../styled-components.esm-7d3bd1b9.js';
import { t as theme } from '../../theme-526b9b1f.js';
import { Label } from '../Label/index.js';
import { m as mapTestIdToProps } from '../../utils-f85fb3a8.js';

var RadioButton = Ye.div.withConfig({
  displayName: "RadioButtonGroup__RadioButton",
  componentId: "sc-1xlmwdo-0"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 17px;\n  min-width: 17px;\n  display: flex;\n  height: 17px;\n  min-height: 17px;\n  border-radius: 20px;\n  stroke-width: 1;\n  ", "\n  ", "\n"], ["\n  width: 17px;\n  min-width: 17px;\n  display: flex;\n  height: 17px;\n  min-height: 17px;\n  border-radius: 20px;\n  stroke-width: 1;\n  ", "\n  ", "\n"])), function (_a) {
  var $disabled = _a.$disabled;
  return $disabled ? _e(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          background-color: ", ";\n          border: 1px solid ", ";\n        "], ["\n          background-color: ", ";\n          border: 1px solid ", ";\n        "])), theme.grey10, theme.grey30) : '';
}, function (_a) {
  var $selected = _a.$selected,
      $disabled = _a.$disabled;
  var color = $disabled ? theme.lochivar30 : theme.lochivar100;
  return $selected ? _e(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          border: 1px solid ", ";\n          &:after {\n            background: ", ";\n            width: 11px;\n            height: 11px;\n            display: flex;\n            margin: auto;\n            border-radius: 10px;\n            content: '';\n          }\n        "], ["\n          border: 1px solid ", ";\n          &:after {\n            background: ", ";\n            width: 11px;\n            height: 11px;\n            display: flex;\n            margin: auto;\n            border-radius: 10px;\n            content: '';\n          }\n        "])), color, color) : "border: 1px solid " + theme.grey50 + ";";
});
var RadioGroupContainer = Ye.div.withConfig({
  displayName: "RadioButtonGroup__RadioGroupContainer",
  componentId: "sc-1xlmwdo-1"
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var RadioRow = Ye.div.withConfig({
  displayName: "RadioButtonGroup__RadioRow",
  componentId: "sc-1xlmwdo-2"
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  ", ";\n  label {\n    margin-right: 20px;\n    cursor: pointer;\n    margin-left: 10px;\n    margin-bottom: 0px;\n    color: ", ";\n    font-size: 12px;\n  }\n  &:last-child {\n    //gap: 20px;\n    label {\n      margin-right: auto;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  ", ";\n  label {\n    margin-right: 20px;\n    cursor: pointer;\n    margin-left: 10px;\n    margin-bottom: 0px;\n    color: ", ";\n    font-size: 12px;\n  }\n  &:last-child {\n    //gap: 20px;\n    label {\n      margin-right: auto;\n    }\n  }\n"])), function (_a) {
  var disabled = _a.disabled;
  return disabled ? 'pointer-events: none' : '';
}, theme.grey100);
var RadioButtonGroup = function RadioButtonGroup(_a) {
  var options = _a.options,
      onChange = _a.onChange,
      defaultSelected = _a.defaultSelected,
      label = _a.label,
      value = _a.value,
      testId = _a.testId;

  var _b = useState(defaultSelected || ''),
      selectedOption = _b[0],
      setSelectedOption = _b[1];

  var onChangeOption = function onChangeOption(val) {
    setSelectedOption(val);
  };

  useEffect(function () {
    if (selectedOption) {
      onChange(selectedOption);
    }
  }, [selectedOption]);
  useEffect(function () {
    if (value) {
      setSelectedOption(value);
    }
  }, [value]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, label && /*#__PURE__*/React.createElement(Label, __assign({}, mapTestIdToProps(testId + "-field-label")), label), /*#__PURE__*/React.createElement(RadioGroupContainer, __assign({}, mapTestIdToProps(testId)), options.map(function (option) {
    return /*#__PURE__*/React.createElement(RadioRow, __assign({
      disabled: option.disabled,
      key: option.value
    }, mapTestIdToProps(testId + "-" + option.value + "-btn"), {
      onClick: function onClick() {
        return onChangeOption(option.value);
      }
    }), /*#__PURE__*/React.createElement(RadioButton, {
      "$disabled": option.disabled,
      "$selected": selectedOption === option.value
    }), /*#__PURE__*/React.createElement("label", __assign({}, mapTestIdToProps(testId + "-" + option.value + "-label")), option.label));
  })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

export { RadioButtonGroup };
