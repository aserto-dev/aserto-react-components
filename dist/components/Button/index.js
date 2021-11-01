import { _ as __makeTemplateObject, a as __rest, b as __assign } from '../../_tslib-66d5e02f.js';
import React from 'react';
import styled, { css } from 'styled-components';
import { Button as Button$1 } from 'react-bootstrap';
import { t as theme } from '../../theme-526b9b1f.js';

var BaseButton = styled(Button$1).withConfig({
  displayName: "styles__BaseButton",
  componentId: "en8qcp-0"
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  text-align: center;\n  font-weight: 500;\n  font-family: 'Roboto', 'Open Sans', sans-serif;\n  ", "\n  &:disabled {\n    background-color: ", ";\n  }\n"], ["\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  text-align: center;\n  font-weight: 500;\n  font-family: 'Roboto', 'Open Sans', sans-serif;\n  ", "\n  &:disabled {\n    background-color: ", ";\n  }\n"])), function (_a) {
  var size = _a.size;

  if (size === 'sm') {
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        font-size: 12px;\n      "], ["\n        font-size: 12px;\n      "])));
  } else if (size === 'lg') {
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        height: 48px;\n        font-size: 1.25rem;\n      "], ["\n        height: 48px;\n        font-size: 1.25rem;\n      "])));
  }

  return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      height: 36px;\n    "], ["\n      height: 36px;\n    "])));
}, theme.grey40);
var PrimaryButton = styled(BaseButton).withConfig({
  displayName: "styles__PrimaryButton",
  componentId: "en8qcp-1"
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  &:hover:not(:disabled),\n  &:visited,\n  &:focus {\n    background-color: ", ";\n    box-shadow: none !important;\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  &:hover:not(:disabled),\n  &:visited,\n  &:focus {\n    background-color: ", ";\n    box-shadow: none !important;\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  }\n"])), theme.lochivar60, theme.fullWhite, theme.lochivar90, theme.primary, theme.lochivar30, theme.grey50);
var SecondaryButton = styled(BaseButton).withConfig({
  displayName: "styles__SecondaryButton",
  componentId: "en8qcp-2"
})(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  &:hover:not(:disabled),\n  &:visited,\n  &:focus {\n    border: 1px solid ", " !important;\n    outline: none;\n    box-shadow: none !important;\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n  &:active {\n    border: 1px solid ", " !important;\n    background-color: ", " !important;\n  }\n"], ["\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  &:hover:not(:disabled),\n  &:visited,\n  &:focus {\n    border: 1px solid ", " !important;\n    outline: none;\n    box-shadow: none !important;\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n  &:active {\n    border: 1px solid ", " !important;\n    background-color: ", " !important;\n  }\n"])), theme.grey100, theme.grey20, theme.grey30, theme.grey40, theme.grey40, theme.grey10, theme.grey10, theme.grey40, theme.grey40, theme.grey40);
var DangerButton = styled(BaseButton).withConfig({
  displayName: "styles__DangerButton",
  componentId: "en8qcp-3"
})(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  color: ", ";\n  background-color: ", ";\n  &:hover:not(:disabled),\n  &:visited,\n  &:focus {\n    box-shadow: none !important;\n    background-color: ", " !important;\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n"], ["\n  color: ", ";\n  background-color: ", ";\n  &:hover:not(:disabled),\n  &:visited,\n  &:focus {\n    box-shadow: none !important;\n    background-color: ", " !important;\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n"])), theme.fullWhite, theme.mojo80, theme.mojo60, theme.mojo20, theme.mojo50, theme.grey80);
var SecondaryBorderlessButton = styled(BaseButton).withConfig({
  displayName: "styles__SecondaryBorderlessButton",
  componentId: "en8qcp-4"
})(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  height: 100%;\n  border: none !important;\n  color: ", ";\n  background-color: transparent;\n  outline: none;\n  box-shadow: none !important;\n  &:hover:not(:disabled),\n  &:visited,\n  &:focus {\n    outline: none;\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n"], ["\n  height: 100%;\n  border: none !important;\n  color: ", ";\n  background-color: transparent;\n  outline: none;\n  box-shadow: none !important;\n  &:hover:not(:disabled),\n  &:visited,\n  &:focus {\n    outline: none;\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n"])), theme.grey100, theme.grey40, theme.grey10, theme.grey40, theme.grey40);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;

var getButtonFromVariant = function getButtonFromVariant(variant) {
  var variantObj = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    danger: DangerButton,
    'secondary-borderless': SecondaryBorderlessButton
  };
  return variantObj[variant] || variantObj.primary;
};

var Button = function Button(_a) {
  var _b = _a.variant,
      variant = _b === void 0 ? 'primary' : _b,
      displayState = _a.displayState,
      props = __rest(_a, ["variant", "displayState"]);

  var ButtonComponent = getButtonFromVariant(variant);

  if (!displayState) {
    return /*#__PURE__*/React.createElement(ButtonComponent, __assign({}, props));
  }

  if (displayState.visible) {
    if (displayState.enabled) {
      return /*#__PURE__*/React.createElement(ButtonComponent, __assign({}, props));
    }

    return /*#__PURE__*/React.createElement(ButtonComponent, __assign({
      disabled: true
    }, props));
  }
};

export { Button };
