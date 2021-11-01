import { a as __rest, b as __assign } from '../../_tslib-66d5e02f.js';
import React, { useCallback } from 'react';
import ReactSelect, { components } from 'react-select';
import { t as theme } from '../../theme-526b9b1f.js';
import { Label } from '../Label/index.js';
import 'styled-components';

var groupLabelStyle = {
  position: 'relative',
  marginTop: -8,
  marginBottom: -3,
  marginLeft: -11,
  marginRight: -11,
  height: 1,
  backgroundColor: theme.grey
};

var formatGroupLabel = function formatGroupLabel() {
  return /*#__PURE__*/React.createElement("div", {
    style: groupLabelStyle
  });
};

var Select = /*#__PURE__*/React.forwardRef(function (_a, ref) {
  var onChange = _a.onChange,
      label = _a.label,
      disabled = _a.disabled,
      style = _a.style,
      value = _a.value,
      disableLabel = _a.disableLabel,
      name = _a.name,
      props = __rest(_a, ["onChange", "label", "disabled", "style", "value", "disableLabel", "name"]);

  var removeFocusBox = {
    outline: 'none',
    webkitBoxShadow: 'none',
    boxShadow: 'none'
  };
  var Option = useCallback(function (props) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(components.Option, __assign({}, props, {
      innerProps: __assign(__assign({}, props.innerProps), {
        onMouseDown: function onMouseDown(e) {
          var _a;

          if (props.data.shouldStopPropagation) {
            e.stopPropagation();
            (_a = props.data) === null || _a === void 0 ? void 0 : _a.onClick();
          }
        }
      })
    })));
  }, []);
  var colourStyles = {
    control: function control(styles, _a) {
      var isDisabled = _a.isDisabled,
          isFocused = _a.isFocused;
      return __assign(__assign({}, styles), {
        minHeight: 36,
        backgroundColor: isDisabled ? theme.grey20 : theme.primaryBlack,
        color: isDisabled ? theme.grey40 : theme.grey100,
        borderColor: isFocused ? theme.lochivarAccent2 : theme.grey40,
        opacity: isDisabled ? 0.6 : 1,
        outline: isFocused ? 'none' : '',
        boxShadow: 'none',
        borderWidth: 1,
        ':hover': __assign(__assign({}, styles[':hover']), {
          backgroundColor: theme.grey10,
          borderColor: theme.lochivarAccent1,
          color: theme.grey100
        })
      });
    },
    option: function option(styles, _a) {
      var isDisabled = _a.isDisabled,
          isFocused = _a.isFocused,
          isSelected = _a.isSelected;
      return __assign(__assign({}, styles), {
        backgroundColor: isDisabled ? theme.grey20 : isFocused ? theme.grey40 : isSelected ? theme.grey20 : theme.grey20,
        borderLeft: isSelected ? "5px solid " + theme.lochivarAccent3 : '',
        color: isFocused ? theme.grey100 : theme.grey70,
        height: 36,
        fontSize: 14,
        lineHeight: '20px',
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': __assign(__assign({}, styles[':active']), {
          backgroundColor: theme.grey40
        })
      });
    },
    group: function group(styles) {
      return __assign(__assign({}, styles), {
        paddingBottom: 0
      });
    },
    input: function input(styles) {
      return __assign(__assign({}, styles), {
        color: theme.grey100,
        borderColor: theme.grey60
      });
    },
    placeholder: function placeholder(styles, _a) {
      var isDisabled = _a.isDisabled;
      return __assign(__assign({}, styles), {
        color: isDisabled ? theme.grey40 : theme.grey90
      });
    },
    singleValue: function singleValue(styles, _a) {
      var isDisabled = _a.isDisabled;
      return __assign(__assign(__assign({}, styles), {
        color: isDisabled ? theme.grey40 : theme.grey100
      }), removeFocusBox);
    },
    menu: function menu(styles) {
      return __assign(__assign({}, styles), {
        backgroundColor: 'transparent',
        zIndex: 6,
        marginTop: 1
      });
    },
    dropdownIndicator: function dropdownIndicator(styles, _a) {
      var isDisabled = _a.isDisabled;
      return __assign(__assign({}, styles), {
        color: isDisabled ? theme.grey40 : theme.grey70,
        padding: 7
      });
    },
    menuList: function menuList(style) {
      return __assign(__assign({}, style), {
        zIndex: 5,
        padding: 0
      });
    },
    indicatorSeparator: function indicatorSeparator(styles, _a) {
      var isDisabled = _a.isDisabled;
      return __assign(__assign({}, styles), {
        backgroundColor: isDisabled ? theme.grey30 : theme.grey30
      });
    },
    valueContainer: function valueContainer(styles) {
      return __assign(__assign({}, styles), {
        fontSize: 14
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement(Label, {
    htmlFor: name,
    disabled: disableLabel
  }, label), /*#__PURE__*/React.createElement(ReactSelect, __assign({}, props, {
    name: name,
    inputId: name,
    value: value,
    ref: ref,
    isDisabled: disabled,
    onChange: onChange,
    styles: colourStyles,
    formatGroupLabel: formatGroupLabel,
    components: {
      Option: Option
    }
  })));
});

export { Select };
