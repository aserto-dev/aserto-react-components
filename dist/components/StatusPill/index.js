import { _ as __makeTemplateObject } from '../../_tslib-02678a84.js';
import React from 'react';
import styled from 'styled-components';
import { t as theme } from '../../theme-526b9b1f.js';

var Pill = styled.div.withConfig({
  displayName: "StatusPill__Pill",
  componentId: "sc-1kukreg-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  width: 120px;\n  font-size: 12px;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-weight: 500;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  width: 120px;\n  font-size: 12px;\n  padding: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-weight: 500;\n"])), function (_a) {
  var $backgroundColor = _a.$backgroundColor;
  return $backgroundColor || 'transparent';
}, function (_a) {
  var $textColor = _a.$textColor;
  return $textColor || theme.grey100;
});
var StatusPill = function StatusPill(_a) {
  var backgroundColor = _a.backgroundColor,
      textColor = _a.textColor,
      children = _a.children,
      testId = _a.testId;
  return /*#__PURE__*/React.createElement(Pill, {
    "$textColor": textColor,
    "data-testid": testId,
    "$backgroundColor": backgroundColor
  }, children);
};
var templateObject_1;

export { StatusPill };
