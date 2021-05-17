'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var React = require('react');
var styled = require('styled-components');
var reactBootstrap = require('react-bootstrap');
var theme = require('../../theme-a5004722.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var BaseButton = styled__default['default'](reactBootstrap.Button).withConfig({
  displayName: "styles__BaseButton",
  componentId: "en8qcp-0"
})(templateObject_4 || (templateObject_4 = _tslib.__makeTemplateObject(["\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  text-align: center;\n  font-weight: 500;\n  font-family: 'Roboto', 'Open Sans', sans-serif;\n  ", "\n  &:disabled {\n    background-color: ", ";\n  }\n"], ["\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  text-align: center;\n  font-weight: 500;\n  font-family: 'Roboto', 'Open Sans', sans-serif;\n  ", "\n  &:disabled {\n    background-color: ", ";\n  }\n"])), function (_a) {
  var size = _a.size;

  if (size === 'sm') {
    return styled.css(templateObject_1 || (templateObject_1 = _tslib.__makeTemplateObject(["\n        //height: 24px;\n        font-size: 12px;\n      "], ["\n        //height: 24px;\n        font-size: 12px;\n      "])));
  } else if (size === 'lg') {
    return styled.css(templateObject_2 || (templateObject_2 = _tslib.__makeTemplateObject(["\n        height: 48px;\n        font-size: 1.25rem;\n      "], ["\n        height: 48px;\n        font-size: 1.25rem;\n      "])));
  }

  return styled.css(templateObject_3 || (templateObject_3 = _tslib.__makeTemplateObject(["\n      height: 36px;\n    "], ["\n      height: 36px;\n    "])));
}, theme.theme.grey40);
var PrimaryButton = styled__default['default'](BaseButton).withConfig({
  displayName: "styles__PrimaryButton",
  componentId: "en8qcp-1"
})(templateObject_5 || (templateObject_5 = _tslib.__makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  &:hover,\n  &:visited,\n  &:focus {\n    background-color: ", ";\n    box-shadow: none !important;\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  &:hover,\n  &:visited,\n  &:focus {\n    background-color: ", ";\n    box-shadow: none !important;\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  }\n"])), theme.theme.lochivar60, theme.theme.fullWhite, theme.theme.lochivar90, theme.theme.primary, theme.theme.lochivar30, theme.theme.grey50);
var SecondaryButton = styled__default['default'](BaseButton).withConfig({
  displayName: "styles__SecondaryButton",
  componentId: "en8qcp-2"
})(templateObject_6 || (templateObject_6 = _tslib.__makeTemplateObject(["\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  &:hover,\n  &:visited,\n  &:focus {\n    border: 1px solid ", " !important;\n    outline: none;\n    box-shadow: none !important;\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n  &:active {\n    border: 1px solid ", " !important;\n    background-color: ", " !important;\n  }\n"], ["\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  &:hover,\n  &:visited,\n  &:focus {\n    border: 1px solid ", " !important;\n    outline: none;\n    box-shadow: none !important;\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n  &:active {\n    border: 1px solid ", " !important;\n    background-color: ", " !important;\n  }\n"])), theme.theme.grey100, theme.theme.grey20, theme.theme.grey30, theme.theme.grey40, theme.theme.grey30, theme.theme.grey10, theme.theme.grey10, theme.theme.grey40, theme.theme.grey40, theme.theme.grey40);
var DangerButton = styled__default['default'](BaseButton).withConfig({
  displayName: "styles__DangerButton",
  componentId: "en8qcp-3"
})(templateObject_7 || (templateObject_7 = _tslib.__makeTemplateObject(["\n  color: ", ";\n  background-color: ", ";\n  &:hover,\n  &:visited,\n  &:focus {\n    box-shadow: none !important;\n    background-color: ", " !important;\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n"], ["\n  color: ", ";\n  background-color: ", ";\n  &:hover,\n  &:visited,\n  &:focus {\n    box-shadow: none !important;\n    background-color: ", " !important;\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n"])), theme.theme.fullWhite, theme.theme.mojo80, theme.theme.mojo60, theme.theme.mojo20, theme.theme.mojo50, theme.theme.grey80);
var SecondaryBorderlessButton = styled__default['default'](BaseButton).withConfig({
  displayName: "styles__SecondaryBorderlessButton",
  componentId: "en8qcp-4"
})(templateObject_8 || (templateObject_8 = _tslib.__makeTemplateObject(["\n  height: 100%;\n  border: none !important;\n  color: ", ";\n  background-color: transparent;\n  outline: none;\n  box-shadow: none !important;\n  &:hover,\n  &:visited,\n  &:focus {\n    outline: none;\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n"], ["\n  height: 100%;\n  border: none !important;\n  color: ", ";\n  background-color: transparent;\n  outline: none;\n  box-shadow: none !important;\n  &:hover,\n  &:visited,\n  &:focus {\n    outline: none;\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n  }\n  &:active {\n    background-color: ", " !important;\n  }\n"])), theme.theme.grey100, theme.theme.grey30, theme.theme.grey10, theme.theme.grey40, theme.theme.grey40);
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
      props = _tslib.__rest(_a, ["variant"]);

  var ButtonComponent = getButtonFromVariant(variant);
  return /*#__PURE__*/React__default['default'].createElement(ButtonComponent, _tslib.__assign({}, props));
};

exports.Button = Button;
