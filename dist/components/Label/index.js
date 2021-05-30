import { _ as __makeTemplateObject } from '../../_tslib-02678a84.js';
import styled, { css } from 'styled-components';
import { t as theme } from '../../theme-526b9b1f.js';

var Label = styled.label.withConfig({
  displayName: "Label",
  componentId: "sc-1bxhqu3-0"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n\n  margin-bottom: 8px;\n  color: ", ";\n"], ["\n  ", "\n\n  margin-bottom: 8px;\n  color: ", ";\n"])), function (_a) {
  var $small = _a.$small;
  return $small ? css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          font-size: 12px;\n        "], ["\n          font-size: 12px;\n        "]))) : css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          font-weight: 600;\n          font-size: 16px;\n        "], ["\n          font-weight: 600;\n          font-size: 16px;\n        "])));
}, function (_a) {
  var disabled = _a.disabled;
  return disabled ? theme.grey40 : theme.grey100;
});
var templateObject_1, templateObject_2, templateObject_3;

export { Label };
