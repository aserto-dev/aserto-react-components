import React from 'react';

var EvaluateDisplayStateComponent = function EvaluateDisplayStateComponent(_a) {
  var children = _a.children,
      displayState = _a.displayState;
  var isVisible = displayState.visible;
  var isEnabled = displayState.enabled;
  return /*#__PURE__*/React.createElement(React.Fragment, null, isVisible && /*#__PURE__*/React.cloneElement(children, {
    disabled: !isEnabled
  }));
};

var EvaluateDisplayState = /*#__PURE__*/React.memo(EvaluateDisplayStateComponent);

export { EvaluateDisplayState };
