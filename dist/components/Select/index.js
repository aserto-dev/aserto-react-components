import { a as __rest, b as __assign } from '../../_tslib-02678a84.js';
import React, { useCallback } from 'react';
import ReactSelect, { components } from 'react-select';
import { t as theme } from '../../theme-526b9b1f.js';
import { Label } from '../Label/index.js';
import 'styled-components';

var groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  marginTop: -8,
  marginBottom: -3,
  marginLeft: -11,
  marginRight: -11,
  height: 1,
  backgroundColor: theme.grey
};

var formatGroupLabel = function formatGroupLabel() {
  return /*#__PURE__*/React.createElement("div", {
    style: groupStyles
  });
};

var Select = /*#__PURE__*/React.forwardRef(function (_a, forRef) {
  var options = _a.options,
      defaultValue = _a.defaultValue,
      onChange = _a.onChange,
      label = _a.label,
      disabled = _a.disabled,
      isLoading = _a.isLoading,
      style = _a.style;
      _a.value;
      var disableLabel = _a.disableLabel,
      name = _a.name,
      props = __rest(_a, ["options", "defaultValue", "onChange", "label", "disabled", "isLoading", "style", "value", "disableLabel", "name"]);

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
        backgroundColor: isDisabled ? theme.grey20 : isFocused ? theme.grey30 : isSelected ? theme.grey20 : theme.grey20,
        borderLeft: isSelected ? "5px solid " + theme.lochivarAccent3 : '',
        color: isFocused ? theme.grey100 : theme.grey70,
        height: 36,
        fontSize: 14,
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': __assign(__assign({}, styles[':active']), {
          backgroundColor: theme.grey30
        })
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
        marginTop: -5
      });
    },
    dropdownIndicator: function dropdownIndicator(styles, _a) {
      var isDisabled = _a.isDisabled;
      return __assign(__assign({}, styles), {
        color: isDisabled ? theme.grey40 : theme.grey70
      });
    },
    menuList: function menuList(style) {
      return __assign(__assign({}, style), {
        zIndex: 5,
        borderRadius: 6
      });
    },
    indicatorSeparator: function indicatorSeparator(styles, _a) {
      var isDisabled = _a.isDisabled;
      return __assign(__assign({}, styles), {
        backgroundColor: isDisabled ? theme.grey30 : theme.grey30
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
    ref: forRef || null,
    isLoading: isLoading,
    isDisabled: disabled,
    options: options,
    defaultValue: defaultValue,
    onChange: onChange,
    styles: colourStyles,
    formatGroupLabel: formatGroupLabel,
    components: {
      Option: Option
    }
  })));
});

export { Select };
