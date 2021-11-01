import { _ as __makeTemplateObject, a as __rest, b as __assign } from '../../_tslib-66d5e02f.js';
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { t as theme } from '../../theme-526b9b1f.js';
import { Label } from '../Label/index.js';

var CheckboxContainer = styled.div.withConfig({
  displayName: "Checkbox__CheckboxContainer",
  componentId: "sc-5rlsyj-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  vertical-align: middle;\n"], ["\n  display: inline-block;\n  vertical-align: middle;\n"])));
var HiddenCheckbox = styled.input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "Checkbox__HiddenCheckbox",
  componentId: "sc-5rlsyj-1"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"], ["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"])));
var Icon = styled.svg.withConfig({
  displayName: "Checkbox__Icon",
  componentId: "sc-5rlsyj-2"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: none;\n  stroke: ", ";\n  stroke-width: 2px;\n"], ["\n  fill: none;\n  stroke: ", ";\n  stroke-width: 2px;\n"])), theme.fullWhite);
var StyledCheckbox = styled.div.withConfig({
  displayName: "Checkbox__StyledCheckbox",
  componentId: "sc-5rlsyj-3"
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: inline-block;\n  border: 1px solid ", ";\n  ", "\n  width: 16px;\n  height: 16px;\n  background: ", ";\n  display: flex;\n  transition: all 150ms;\n  ", ":focus + & {\n    box-shadow: 0 0 0 3px ", ";\n  }\n  ", ";\n"], ["\n  display: inline-block;\n  border: 1px solid ", ";\n  ", "\n  width: 16px;\n  height: 16px;\n  background: ", ";\n  display: flex;\n  transition: all 150ms;\n  ", ":focus + & {\n    box-shadow: 0 0 0 3px ", ";\n  }\n  ", ";\n"])), function (props) {
  return props.checked ? theme.primary : theme.grey50;
}, function (_a) {
  var hasLabel = _a.hasLabel;
  return hasLabel ? 'margin-right: 10px;' : '';
}, function (props) {
  return props.checked ? theme.primary : 'transparent';
}, HiddenCheckbox, theme.grey40, function (_a) {
  var $disabled = _a.$disabled;
  return $disabled ? css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n          pointer-events: none;\n          background-color: ", ";\n          border-color: ", ";\n          svg {\n            stroke: ", ";\n          }\n        "], ["\n          pointer-events: none;\n          background-color: ", ";\n          border-color: ", ";\n          svg {\n            stroke: ", ";\n          }\n        "])), theme.grey10, theme.grey30, theme.grey40) : '';
});
var HorizontalLabel = styled(Label).withConfig({
  displayName: "Checkbox__HorizontalLabel",
  componentId: "sc-5rlsyj-4"
})(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  margin-bottom: 0px;\n  align-items: center;\n"], ["\n  display: flex;\n  margin-bottom: 0px;\n  align-items: center;\n"])));
var Checkbox = function Checkbox(_a) {
  var onChange = _a.onChange,
      label = _a.label,
      disabled = _a.disabled,
      checked = _a.checked,
      className = _a.className,
      checkboxProps = __rest(_a, ["onChange", "label", "disabled", "checked", "className"]);

  var onCheckboxChange = useCallback(function (event) {
    return onChange(event.target.checked);
  }, [onChange]);
  return /*#__PURE__*/React.createElement(CheckboxContainer, null, /*#__PURE__*/React.createElement(HorizontalLabel, {
    "$small": true
  }, /*#__PURE__*/React.createElement(HiddenCheckbox, __assign({
    checked: checked,
    disabled: disabled,
    onChange: onCheckboxChange
  }, checkboxProps)), /*#__PURE__*/React.createElement(StyledCheckbox, {
    "$disabled": disabled,
    checked: checked,
    hasLabel: !!label,
    className: className
  }, checked && /*#__PURE__*/React.createElement(Icon, {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

export { Checkbox };
