import { _ as __makeTemplateObject, a as __rest, b as __assign } from '../../_tslib-49c9bcfb.js';
import React from 'react';
import { Y as Ye, _ as _e } from '../../styled-components.esm-7d3bd1b9.js';
import { t as theme } from '../../theme-526b9b1f.js';
import { m as mapTestIdToProps } from '../../utils-f85fb3a8.js';

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='82' height='82' viewBox='0 0 82 82'%3e %3cdefs%3e %3cclipPath id='clip-User'%3e %3crect width='82' height='82'/%3e %3c/clipPath%3e %3c/defs%3e %3cg id='User' clip-path='url(%23clip-User)'%3e %3cg id='noun_User_1994976' transform='translate(-3.913 -2.5)'%3e %3cg id='Group_2' data-name='Group 2' transform='translate(12.7 2.5)'%3e %3cg id='Group_1' data-name='Group 1'%3e %3cpath id='Path_1' data-name='Path 1' d='M61.84%2c48.965a1.293%2c1.293%2c0%2c0%2c0-1.555.086%2c25.591%2c25.591%2c0%2c0%2c1-15.372%2c5.009A26.175%2c26.175%2c0%2c0%2c1%2c29.54%2c49.052a1.451%2c1.451%2c0%2c0%2c0-1.555-.086C17.8%2c55.529%2c12.7%2c68.4%2c12.7%2c83.164c0%2c10.191%2c64.425%2c10.191%2c64.425%2c0C77.125%2c68.4%2c72.03%2c55.529%2c61.84%2c48.965Z' transform='translate(-12.7 -8.807)' fill='%238a959f'/%3e %3ccircle id='Ellipse_1' data-name='Ellipse 1' cx='19.259' cy='19.259' r='19.259' transform='translate(12.954)' fill='%238a959f'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var CardContainer = Ye.div.withConfig({
  displayName: "UserCard__CardContainer",
  componentId: "b9xflt-0"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  min-width: 320px;\n  max-height: 102px;\n  display: flex;\n  align-items: center;\n  padding: 8px 10px;\n  border-radius: 5px;\n  background-color: ", ";\n  background-size: cover;\n  color: ", ";\n  &:hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n  ", "\n"], ["\n  width: 100%;\n  min-width: 320px;\n  max-height: 102px;\n  display: flex;\n  align-items: center;\n  padding: 8px 10px;\n  border-radius: 5px;\n  background-color: ", ";\n  background-size: cover;\n  color: ", ";\n  &:hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n  ", "\n"])), theme.grey20, theme.grey100, theme.grey30, function (_a) {
  var $disabled = _a.$disabled;
  return $disabled ? _e(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          pointer-events: none;\n          background-color: ", ";\n          color: ", ";\n        "], ["\n          pointer-events: none;\n          background-color: ", ";\n          color: ", ";\n        "])), theme.grey10, theme.grey40) : '';
});
var CardContent = Ye.div.withConfig({
  displayName: "UserCard__CardContent",
  componentId: "b9xflt-1"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  overflow: hidden;\n"], ["\n  overflow: hidden;\n"])));
var CardText = Ye.div.withConfig({
  displayName: "UserCard__CardText",
  componentId: "b9xflt-2"
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
  var $bold = _a.$bold;
  return $bold ? 'font-weight: bold' : '';
});
var CardImageContainer = Ye.div.withConfig({
  displayName: "UserCard__CardImageContainer",
  componentId: "b9xflt-3"
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-right: 30px;\n  img {\n    width: 84px;\n    height: 84px;\n  }\n"], ["\n  margin-right: 30px;\n  img {\n    width: 84px;\n    height: 84px;\n  }\n"])));
var UserCard = function UserCard(_a) {
  var user = _a.user,
      onClick = _a.onClick,
      disabled = _a.disabled,
      testId = _a.testId,
      props = __rest(_a, ["user", "onClick", "disabled", "testId"]);

  return /*#__PURE__*/React.createElement(CardContainer, __assign({}, mapTestIdToProps(testId), {
    onClick: onClick
  }, props, {
    "$disabled": disabled
  }), /*#__PURE__*/React.createElement(CardImageContainer, null, /*#__PURE__*/React.createElement("img", {
    src: user.picture || img,
    alt: "picture"
  })), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement(CardText, {
    "$bold": true
  }, user.display_name), /*#__PURE__*/React.createElement(CardText, null, user.email)));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

export { UserCard };
