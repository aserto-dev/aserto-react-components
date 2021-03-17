import { _ as __makeTemplateObject, a as __rest, b as __assign } from '../../_tslib-2598d085.js';
import React from 'react';
import { Y as Ye } from '../../styled-components.esm-33dbba00.js';
import { Button as Button$1 } from 'react-bootstrap';
import { t as theme } from '../../theme-526b9b1f.js';

var BaseButton = Ye(Button$1).withConfig({
  displayName: "styles__BaseButton",
  componentId: "en8qcp-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  height: 36px;\n  text-align: center;\n  &:disabled {\n    background-color: ", ";\n  }\n"], ["\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  height: 36px;\n  text-align: center;\n  &:disabled {\n    background-color: ", ";\n  }\n"])), theme.grey40);
var PrimaryButton = Ye(BaseButton).withConfig({
  displayName: "styles__PrimaryButton",
  componentId: "en8qcp-1"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  &:hover,\n  &:visited,\n  &:focus {\n    background-color: ", ";\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n  &:disabled {\n    background-color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  &:hover,\n  &:visited,\n  &:focus {\n    background-color: ", ";\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n  &:disabled {\n    background-color: ", ";\n  }\n"])), theme.lochivarAccent1, theme.fullWhite, theme.lochivarAccent2, theme.lochivarAccent3, theme.lochivar30);
var SecondaryButton = Ye(BaseButton).withConfig({
  displayName: "styles__SecondaryButton",
  componentId: "en8qcp-2"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  &:hover,\n  &:visited,\n  &:focus {\n    background-color: ", ";\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n"], ["\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  &:hover,\n  &:visited,\n  &:focus {\n    background-color: ", ";\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n"])), theme.grey100, theme.grey20, theme.grey, theme.grey60, theme.grey80);
var templateObject_1, templateObject_2, templateObject_3;

var getButtonFromVariant = function getButtonFromVariant(variant) {
  var variantObj = {
    primary: PrimaryButton,
    secondary: SecondaryButton
  };
  return variantObj[variant] || variantObj.primary;
};

var Button = function Button(_a) {
  var _b = _a.variant,
      variant = _b === void 0 ? 'primary' : _b,
      props = __rest(_a, ["variant"]);

  var ButtonComponent = getButtonFromVariant(variant);
  return /*#__PURE__*/React.createElement(ButtonComponent, __assign({}, props));
};

export { Button };
