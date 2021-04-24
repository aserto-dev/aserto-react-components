import { _ as __makeTemplateObject, a as __rest, b as __assign } from '../../_tslib-49c9bcfb.js';
import React, { useState, useEffect } from 'react';
import { Y as Ye } from '../../styled-components.esm-7d3bd1b9.js';
import { t as theme } from '../../theme-526b9b1f.js';
import { m as mapTestIdToProps } from '../../utils-f85fb3a8.js';

var SwitchBackground = Ye.div.withConfig({
  displayName: "SwitchButton__SwitchBackground",
  componentId: "sc-1dqppfh-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  position: absolute;\n  -webkit-transition: background-color 0.2s;\n  -moz-transition: background-color 0.2s;\n  transition: background-color 0.2s;\n  border-radius: 34px;\n"], ["\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  position: absolute;\n  -webkit-transition: background-color 0.2s;\n  -moz-transition: background-color 0.2s;\n  transition: background-color 0.2s;\n  border-radius: 34px;\n"])));
var SwitchLabel = Ye.label.withConfig({
  displayName: "SwitchButton__SwitchLabel",
  componentId: "sc-1dqppfh-1"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  height: 31px;\n  position: relative;\n  width: 56px;\n  margin-bottom: 0;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n"], ["\n  display: inline-block;\n  height: 31px;\n  position: relative;\n  width: 56px;\n  margin-bottom: 0;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n"])));
var SwitchInput = Ye.input.withConfig({
  displayName: "SwitchButton__SwitchInput",
  componentId: "sc-1dqppfh-2"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 0;\n  border: 1px solid #2a2a2a;\n\n  height: 0;\n  overflow: hidden;\n"], ["\n  width: 0;\n  border: 1px solid #2a2a2a;\n\n  height: 0;\n  overflow: hidden;\n"])));
var SwitchHandle = Ye.div.withConfig({
  displayName: "SwitchButton__SwitchHandle",
  componentId: "sc-1dqppfh-3"
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  bottom: 2px;\n  height: 27px;\n  left: 2px;\n  position: absolute;\n  width: 27px;\n  border-radius: 50%;\n  transform: translateX(0);\n  outline: none;\n  ", ";\n  background-color: #4a4a4a;\n"], ["\n  bottom: 2px;\n  height: 27px;\n  left: 2px;\n  position: absolute;\n  width: 27px;\n  border-radius: 50%;\n  transform: translateX(0);\n  outline: none;\n  ", ";\n  background-color: #4a4a4a;\n"])), function (_a) {
  var $isChecked = _a.$isChecked;
  return $isChecked ? 'transform: translateX(26px)' : '';
});
var SwitchButton = function SwitchButton(_a) {
  _a.className;
      var checked = _a.checked,
      onChange = _a.onChange,
      onColor = _a.onColor,
      offColor = _a.offColor;
      _a.handleColor;
      var focusShadow = _a.focusShadow,
      disabled = _a.disabled,
      testId = _a.testId,
      labelProps = __rest(_a, ["className", "checked", "onChange", "onColor", "offColor", "handleColor", "focusShadow", "disabled", "testId"]);

  var _b = useState(false),
      hasOutline = _b[0],
      setOutline = _b[1];

  var _c = useState(0),
      lastMouseUpTime = _c[0],
      setMouseUpTime = _c[1];

  var handleChange = function handleChange() {
    onChange(!checked);
  };

  var onMouseUp = function onMouseUp() {
    setMouseUpTime(Date.now());
  };

  useEffect(function () {
    window.addEventListener('mouseup', onMouseUp);
    return function () {
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);
  return /*#__PURE__*/React.createElement(SwitchLabel, __assign({
    style: {
      cursor: disabled ? 'not-allowed' : 'pointer',
      filter: disabled ? 'brightness(0.9)' : 'unset'
    }
  }, labelProps, mapTestIdToProps(testId)), /*#__PURE__*/React.createElement(SwitchBackground, {
    style: {
      backgroundColor: checked ? onColor || theme.lochivar100 : offColor || theme.grey20
    }
  }), /*#__PURE__*/React.createElement(SwitchHandle, __assign({}, mapTestIdToProps(testId + "-handle"), {
    "$isChecked": checked,
    style: {
      WebkitTransition: 'transform .2s',
      MozTransition: 'transform .2s',
      transition: 'transform .2s',
      boxShadow: hasOutline ? focusShadow || 'rgba(0,0,0,0.5) 0px 0px 2px 3px' : undefined
    }
  })), /*#__PURE__*/React.createElement(SwitchInput, __assign({
    role: "switch",
    "aria-checked": checked,
    type: "checkbox",
    defaultChecked: checked,
    onChange: handleChange,
    onFocus: function onFocus() {
      // prevent focus after user clicked switch, allows keyboard to focus switch
      if (Date.now() - lastMouseUpTime > 25) setOutline(true);
    },
    onBlur: function onBlur() {
      setOutline(false);
    },
    disabled: disabled
  }, mapTestIdToProps(testId + "-switch-input"))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

export { SwitchButton };
