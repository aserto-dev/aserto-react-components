import { _ as __makeTemplateObject, a as __rest, b as __assign } from '../../_tslib-2598d085.js';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Y as Ye } from '../../styled-components.esm-33dbba00.js';

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='82' height='82' viewBox='0 0 82 82'%3e %3cdefs%3e %3cclipPath id='clip-User'%3e %3crect width='82' height='82'/%3e %3c/clipPath%3e %3c/defs%3e %3cg id='User' clip-path='url(%23clip-User)'%3e %3cg id='noun_User_1994976' transform='translate(-3.913 -2.5)'%3e %3cg id='Group_2' data-name='Group 2' transform='translate(12.7 2.5)'%3e %3cg id='Group_1' data-name='Group 1'%3e %3cpath id='Path_1' data-name='Path 1' d='M61.84%2c48.965a1.293%2c1.293%2c0%2c0%2c0-1.555.086%2c25.591%2c25.591%2c0%2c0%2c1-15.372%2c5.009A26.175%2c26.175%2c0%2c0%2c1%2c29.54%2c49.052a1.451%2c1.451%2c0%2c0%2c0-1.555-.086C17.8%2c55.529%2c12.7%2c68.4%2c12.7%2c83.164c0%2c10.191%2c64.425%2c10.191%2c64.425%2c0C77.125%2c68.4%2c72.03%2c55.529%2c61.84%2c48.965Z' transform='translate(-12.7 -8.807)' fill='%238a959f'/%3e %3ccircle id='Ellipse_1' data-name='Ellipse 1' cx='19.259' cy='19.259' r='19.259' transform='translate(12.954)' fill='%238a959f'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var CardContainer = Ye(Card).withConfig({
  displayName: "UserCard__CardContainer",
  componentId: "b9xflt-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  min-width: 428px;\n  max-width: 428px;\n  height: 104px;\n  border-radius: 5px;\n  background-color: #35393d66;\n  background-size: cover;\n  margin: 0px 20px 20px 0px !important;\n  &:hover {\n    background-color: #35393d;\n    background-size: cover;\n    cursor: pointer;\n  }\n  .card-title {\n    color: #d7d8d8;\n    font-size: 18px;\n    vertical-align: middle;\n    text-decoration: none solid rgb(215, 216, 216);\n  }\n"], ["\n  min-width: 428px;\n  max-width: 428px;\n  height: 104px;\n  border-radius: 5px;\n  background-color: #35393d66;\n  background-size: cover;\n  margin: 0px 20px 20px 0px !important;\n  &:hover {\n    background-color: #35393d;\n    background-size: cover;\n    cursor: pointer;\n  }\n  .card-title {\n    color: #d7d8d8;\n    font-size: 18px;\n    vertical-align: middle;\n    text-decoration: none solid rgb(215, 216, 216);\n  }\n"])));
var CardImage = Ye.div.withConfig({
  displayName: "UserCard__CardImage",
  componentId: "b9xflt-1"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 10px;\n  width: 82px;\n  background-image: url('./user.svg');\n"], ["\n  margin: 10px;\n  width: 82px;\n  background-image: url('./user.svg');\n"])));
var UserCard = function UserCard(_a) {
  var user = _a.user,
      onClick = _a.onClick,
      props = __rest(_a, ["user", "onClick"]);

  return /*#__PURE__*/React.createElement(CardContainer, __assign({
    onClick: onClick
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "display-flex"
  }, /*#__PURE__*/React.createElement(CardImage, null, /*#__PURE__*/React.createElement(Card.Img, {
    src: user.picture,
    alt: "picture",
    onError: function onError(e) {
      return e.target.src = img;
    }
  })), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Title, {
    as: "h5"
  }, user.display_name), /*#__PURE__*/React.createElement(Card.Text, null, user.email))));
};
var templateObject_1, templateObject_2;

export { UserCard };