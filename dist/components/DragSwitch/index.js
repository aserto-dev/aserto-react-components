import { a as __rest, b as __assign } from '../../_tslib-66d5e02f.js';
import React, { useRef, useState, useEffect } from 'react';
import { s as styleInject } from '../../style-inject.es-1f59c1d0.js';
import { m as mapTestIdToProps } from '../../utils-6a0a2690.js';

var css_248z = ".switch {\n  display: inline-block;\n  height: 20px;\n  position: relative;\n  width: 40px;\n  margin-bottom: 0;\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.switchBg {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  position: absolute;\n  -webkit-transition: background-color .2s;\n  -moz-transition: background-color .2s;\n  transition: background-color .2s;\n  border-radius: 34px;\n}\n\n.switchInput {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n}\n\n.switchHandle {\n  bottom: 2px;\n  height: 16px;\n  left: 2px;\n  position: absolute;\n  width: 16px;\n  border-radius: 50%;\n  transform: translateX(0);\n  outline: none;\n}\n\n.switchHandle.isChecked {\n  transform: translateX(20px);\n}";
styleInject(css_248z);

var DragSwitch = function DragSwitch(_a) {
  var className = _a.className,
      checked = _a.checked,
      onChange = _a.onChange,
      onColor = _a.onColor,
      offColor = _a.offColor,
      handleColor = _a.handleColor,
      focusShadow = _a.focusShadow,
      disabled = _a.disabled,
      testId = _a.testId,
      labelProps = __rest(_a, ["className", "checked", "onChange", "onColor", "offColor", "handleColor", "focusShadow", "disabled", "testId"]);

  var switchRef = useRef(null);

  var _b = useState(checked ? 20 : 0),
      Xpos = _b[0],
      setPos = _b[1];

  var _c = useState(false),
      isMouseDown = _c[0],
      setMouseDown = _c[1];

  var _d = useState(0),
      lastMouseUpTime = _d[0],
      setMouseUpTime = _d[1];

  var _e = useState(false),
      hasOutline = _e[0],
      setOutline = _e[1];

  var _f = useState(false),
      dragging = _f[0],
      setDragging = _f[1];

  var _g = useState(0),
      dragEnd = _g[0],
      setDragEnd = _g[1];

  var handleChange = function handleChange() {
    // prevent setting checked if user was just dragging
    if (Date.now() - dragEnd > 25) {
      handleChecked(!checked);
    }
  };

  var handleChecked = function handleChecked(newChecked) {
    if (newChecked) {
      setPos(20);
    } else {
      setPos(0);
    }

    if (newChecked !== checked) onChange(newChecked);
  };

  var startDrag = function startDrag(e) {
    e.preventDefault();
    setMouseDown(true);
    setOutline(true);
  };

  var onMouseUp = function onMouseUp(e) {
    setMouseDown(false);
    setOutline(false);
    setMouseUpTime(Date.now());

    if (switchRef.current && dragging) {
      var mouseRelativePos = e.clientX - switchRef.current.getBoundingClientRect().left;
      setDragEnd(Date.now());
      setDragging(false);

      if (mouseRelativePos >= 20) {
        handleChecked(true);
      } else {
        handleChecked(false);
      }
    }
  };

  var onMouseMove = function onMouseMove(e) {
    if (isMouseDown && !dragging) {
      setDragging(true);
    }

    if (switchRef.current && dragging) {
      var halfHandle = 8;
      var newPos = e.clientX - switchRef.current.getBoundingClientRect().left - halfHandle;

      if (newPos < 0) {
        setPos(0);
      } else if (newPos > 20) {
        setPos(20);
      } else {
        setPos(newPos);
      }
    }
  };

  useEffect(function () {
    // onMouseMove function relies on dragging and isMouseDown state
    window.addEventListener('mousemove', onMouseMove);
    return function () {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [dragging, isMouseDown]);
  useEffect(function () {
    // onMouseUp function relies on dragging state when setting value
    window.addEventListener('mouseup', onMouseUp);
    return function () {
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging]);
  return /*#__PURE__*/React.createElement("label", __assign({
    style: {
      cursor: disabled ? 'not-allowed' : 'pointer',
      filter: disabled ? 'brightness(0.9)' : 'unset'
    }
  }, labelProps, {
    className: "switch " + (className || ''),
    ref: switchRef,
    onMouseDown: disabled ? undefined : startDrag
  }, mapTestIdToProps(testId)), /*#__PURE__*/React.createElement("div", {
    className: "switchBg " + (checked ? 'isChecked' : ''),
    style: {
      backgroundColor: checked ? onColor || '#66bb6a' : offColor || '#cccccc'
    }
  }), /*#__PURE__*/React.createElement("div", __assign({
    id: "dragswitch-handle"
  }, mapTestIdToProps(testId + "-handle"), {
    className: "switchHandle " + (checked ? 'isChecked' : ''),
    style: {
      transform: "translateX(" + Xpos + "px)",
      WebkitTransition: dragging ? undefined : 'transform .2s',
      MozTransition: dragging ? undefined : 'transform .2s',
      transition: dragging ? undefined : 'transform .2s',
      boxShadow: hasOutline ? focusShadow || 'rgba(0,0,0,0.5) 0px 0px 2px 3px' : undefined,
      backgroundColor: handleColor || '#ffffff'
    },
    onClick: function onClick(e) {
      e.preventDefault();
      setOutline(false);
      if (!disabled) handleChange();
    }
  })), /*#__PURE__*/React.createElement("input", __assign({
    role: "switch",
    "aria-checked": checked,
    type: "checkbox",
    defaultChecked: checked,
    onChange: handleChange,
    onFocus: function onFocus() {
      // prevent focus after user clicked/dragged switch
      if (Date.now() - lastMouseUpTime > 25) setOutline(true);
    },
    onBlur: function onBlur() {
      setOutline(false);
    },
    disabled: disabled
  }, mapTestIdToProps(testId + "-switch-input"))));
};

export { DragSwitch };
