import { _ as __makeTemplateObject, a as __rest, b as __assign } from '../../_tslib-02678a84.js';
import React from 'react';
import { FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import { t as theme } from '../../theme-526b9b1f.js';
import { Label } from '../Label/index.js';
import { m as mapTestIdToProps } from '../../utils-bc584a2b.js';

var img$2 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1'%3e %3ctext x='0' y='15' fill='%2336b1b5' font-family='Roboto%2c Helvetica%2c sans-serif' font-size='12' font-weight='bold' color='%2336b1b5'%3e AVAILABLE %3c/text%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1'%3e %3ctext x='0' y='15' fill='%23FF4A4A' font-family='Roboto%2c Helvetica%2c sans-serif' font-weight='bold' font-size='12'%3e INVALID %3c/text%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1'%3e %3ctext x='0' y='15' fill='%23FF4A4A' font-family='Roboto%2c Helvetica%2c sans-serif' font-weight='bold' font-size='12'%3e UNAVAILABLE %3c/text%3e%3c/svg%3e";

var getInputValueForState = function getInputValueForState(isValid, isInvalid, isUnavailable) {
  if (isValid) {
    return "border-color: " + theme.lochivarAccent2 + " !important;background-image: url(\"" + img$2 + "\") !important; background-size: calc(4.2em + 0.375rem) calc(1em + 0.375rem) !important;";
  } else if (isUnavailable) {
    return "border-color: " + theme.mojoAccent3 + " !important;background-image: url(\"" + img + "\") !important; background-size: calc(5.2em + 0.375rem) calc(1em + 0.375rem) !important;";
  } else if (isInvalid) {
    return "border-color: " + theme.mojoAccent3 + " !important;background-image: url(\"" + img$1 + "\") !important; background-size: calc(3em + 0.375rem) calc(1em + 0.375rem) !important;";
  }

  return "border-color: #403f3f;";
};

var AsertoInput = styled(FormControl).withConfig({
  displayName: "Input__AsertoInput",
  componentId: "ghb1ht-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  border-color: ", ";\n  &:focus {\n    background-color: ", ";\n    color: ", ";\n    outline: none;\n    box-shadow: none;\n    border-color: ", ";\n    -webkit-box-shadow: none;\n  }\n  &:disabled {\n    color: ", ";\n    background-color: ", ";\n    opacity: 0.6;\n  }\n  ", ";\n"], ["\n  background-color: ", ";\n  color: ", ";\n  border-color: ", ";\n  &:focus {\n    background-color: ", ";\n    color: ", ";\n    outline: none;\n    box-shadow: none;\n    border-color: ", ";\n    -webkit-box-shadow: none;\n  }\n  &:disabled {\n    color: ", ";\n    background-color: ", ";\n    opacity: 0.6;\n  }\n  ", ";\n"])), theme.primaryBlack, theme.grey100, theme.grey40, theme.primaryBlack, theme.grey100, theme.lochivarAccent2, theme.grey40, theme.grey20, function (_a) {
  var isValid = _a.isValid,
      isInvalid = _a.isInvalid,
      $isUnavailable = _a.$isUnavailable;
  return getInputValueForState(isValid, isInvalid, $isUnavailable);
});
var InputContainer = styled.div.withConfig({
  displayName: "Input__InputContainer",
  componentId: "ghb1ht-1"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var Info = styled.div.withConfig({
  displayName: "Input__Info",
  componentId: "ghb1ht-2"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 14px;\n  color: ", ";\n  margin-top: 8px;\n  @media (max-width: 720px) {\n    max-width: 270px;\n  }\n"], ["\n  font-size: 14px;\n  color: ", ";\n  margin-top: 8px;\n  @media (max-width: 720px) {\n    max-width: 270px;\n  }\n"])), theme.grey70);
var Error = styled(Info).withConfig({
  displayName: "Input__Error",
  componentId: "ghb1ht-3"
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n" // eslint-disable-next-line react/display-name
])), theme.mojoAccent3); // eslint-disable-next-line react/display-name

var Input = /*#__PURE__*/React.forwardRef(function (_a, ref) {
  var placeholder = _a.placeholder,
      value = _a.value,
      onChange = _a.onChange,
      label = _a.label,
      info = _a.info,
      error = _a.error,
      isValid = _a.isValid,
      isUnavailable = _a.isUnavailable,
      type = _a.type,
      style = _a.style,
      hasSmallLabel = _a.hasSmallLabel,
      props = __rest(_a, ["placeholder", "value", "onChange", "label", "info", "error", "isValid", "isUnavailable", "type", "style", "hasSmallLabel"]);

  var shouldDisplayInfo = !error && info;
  var testId = props['data-testid'];
  return /*#__PURE__*/React.createElement(InputContainer, null, label && /*#__PURE__*/React.createElement(Label, {
    "$small": hasSmallLabel
  }, label), /*#__PURE__*/React.createElement(AsertoInput, __assign({
    ref: ref,
    isValid: isValid,
    isInvalid: error,
    "$isUnavailable": isUnavailable,
    placeholder: placeholder,
    value: value,
    type: type,
    onChange: onChange,
    style: style
  }, props)), shouldDisplayInfo && /*#__PURE__*/React.createElement(Info, __assign({}, mapTestIdToProps(testId + "-info")), info), error && /*#__PURE__*/React.createElement(Error, __assign({}, mapTestIdToProps(testId + "-error")), error));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

export { Input };
