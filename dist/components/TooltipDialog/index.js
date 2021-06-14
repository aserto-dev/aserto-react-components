'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var styled = require('styled-components');
var Tooltip = require('@atlaskit/tooltip');
var theme = require('../../theme-a5004722.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var TooltipDialog = styled__default['default'](Tooltip.TooltipPrimitive).withConfig({
  displayName: "TooltipDialog",
  componentId: "sc-15eaaeu-0"
})(templateObject_1 || (templateObject_1 = _tslib.__makeTemplateObject(["\n  background: ", ";\n  font-size: 12px;\n  color: ", ";\n  border-radius: 4px;\n  border: 1px solid ", ";\n  box-sizing: content-box; /* do not set this to border-box or it will break the overflow handling */\n  max-width: 300px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.35);\n  padding: 8px;\n"], ["\n  background: ", ";\n  font-size: 12px;\n  color: ", ";\n  border-radius: 4px;\n  border: 1px solid ", ";\n  box-sizing: content-box; /* do not set this to border-box or it will break the overflow handling */\n  max-width: 300px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.35);\n  padding: 8px;\n"])), theme.theme.grey10, theme.theme.grey100, theme.theme.grey30);
var templateObject_1;

exports.TooltipDialog = TooltipDialog;
