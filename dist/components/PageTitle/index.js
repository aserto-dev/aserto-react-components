import { _ as __makeTemplateObject } from '../../_tslib-02678a84.js';
import React from 'react';
import styled from 'styled-components';
import { t as theme } from '../../theme-526b9b1f.js';

var Title = styled.div.withConfig({
  displayName: "PageTitle__Title",
  componentId: "sc-1fx2f8-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 24px;\n  @media (max-width: 600px) {\n    font-size: 20px;\n  }\n  color: ", ";\n"], ["\n  font-size: 24px;\n  @media (max-width: 600px) {\n    font-size: 20px;\n  }\n  color: ", ";\n"])), theme.grey100);
var PageTitle = function PageTitle(_a) {
  var title = _a.title;
  return /*#__PURE__*/React.createElement(Title, null, title);
};
var templateObject_1;

export { PageTitle };
