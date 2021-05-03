import { _ as __makeTemplateObject } from '../../_tslib-2598d085.js';
import { Y as Ye, _ as _e } from '../../styled-components.esm-4ce7ee54.js';
import { t as theme } from '../../theme-526b9b1f.js';
import 'react';

var Label = Ye.label.withConfig({
  displayName: "Label",
  componentId: "sc-1bxhqu3-0"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n\n  margin-bottom: 8px;\n  color: ", ";\n"], ["\n  ", "\n\n  margin-bottom: 8px;\n  color: ", ";\n"])), function (_a) {
  var $small = _a.$small;
  return $small ? _e(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          font-size: 12px;\n        "], ["\n          font-size: 12px;\n        "]))) : _e(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          font-weight: 600;\n          font-size: 16px;\n        "], ["\n          font-weight: 600;\n          font-size: 16px;\n        "])));
}, function (_a) {
  var disabled = _a.disabled;
  return disabled ? theme.grey40 : theme.grey100;
});
var templateObject_1, templateObject_2, templateObject_3;

export { Label };
