import { _ as __makeTemplateObject } from '../../_tslib-02678a84.js';
import React from 'react';
import styled from 'styled-components';
import { t as theme } from '../../theme-526b9b1f.js';

var Hr = styled.hr.withConfig({
  displayName: "Divider__Hr",
  componentId: "sc-10k26ii-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-top-color: ", ";\n  width: 100vw;\n  margin-bottom: 0px;\n"], ["\n  border-top-color: ", ";\n  width: 100vw;\n  margin-bottom: 0px;\n"])), theme.grey20);
var Divider = function Divider(_a) {
  var marginBottom = _a.marginBottom;
  return /*#__PURE__*/React.createElement(Hr, {
    style: {
      marginBottom: marginBottom
    }
  });
};
var templateObject_1;

export { Divider };
