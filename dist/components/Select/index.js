'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var React = require('react');
var ReactSelect = require('react-select');
var theme = require('../../theme-a5004722.js');
var components_Label_index = require('../Label/index.js');
require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactSelect__default = /*#__PURE__*/_interopDefaultLegacy(ReactSelect);

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
  backgroundColor: theme.theme.grey
};

var formatGroupLabel = function formatGroupLabel() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: groupStyles
  });
};

var Select = /*#__PURE__*/React__default['default'].forwardRef(function (_a, forRef) {
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
      props = _tslib.__rest(_a, ["options", "defaultValue", "onChange", "label", "disabled", "isLoading", "style", "value", "disableLabel", "name"]);

  var removeFocusBox = {
    outline: 'none',
    webkitBoxShadow: 'none',
    boxShadow: 'none'
  };
  var Option = React.useCallback(function (props) {
    return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(ReactSelect.components.Option, _tslib.__assign({}, props, {
      innerProps: _tslib.__assign(_tslib.__assign({}, props.innerProps), {
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
      return _tslib.__assign(_tslib.__assign({}, styles), {
        backgroundColor: isDisabled ? theme.theme.grey20 : theme.theme.primaryBlack,
        color: isDisabled ? theme.theme.grey40 : theme.theme.grey100,
        borderColor: isFocused ? theme.theme.lochivarAccent2 : theme.theme.grey40,
        opacity: isDisabled ? 0.6 : 1,
        outline: isFocused ? 'none' : '',
        boxShadow: 'none',
        borderWidth: 1,
        ':hover': _tslib.__assign(_tslib.__assign({}, styles[':hover']), {
          backgroundColor: theme.theme.grey10,
          borderColor: theme.theme.lochivarAccent1,
          color: theme.theme.grey100
        })
      });
    },
    option: function option(styles, _a) {
      var isDisabled = _a.isDisabled,
          isFocused = _a.isFocused,
          isSelected = _a.isSelected;
      return _tslib.__assign(_tslib.__assign({}, styles), {
        backgroundColor: isDisabled ? theme.theme.grey20 : isFocused ? theme.theme.grey30 : isSelected ? theme.theme.grey20 : theme.theme.grey20,
        borderLeft: isSelected ? "5px solid " + theme.theme.lochivarAccent3 : '',
        color: isFocused ? theme.theme.grey100 : theme.theme.grey70,
        height: 36,
        fontSize: 14,
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': _tslib.__assign(_tslib.__assign({}, styles[':active']), {
          backgroundColor: theme.theme.grey30
        })
      });
    },
    input: function input(styles) {
      return _tslib.__assign(_tslib.__assign({}, styles), {
        color: theme.theme.grey100,
        borderColor: theme.theme.grey60
      });
    },
    placeholder: function placeholder(styles, _a) {
      var isDisabled = _a.isDisabled;
      return _tslib.__assign(_tslib.__assign({}, styles), {
        color: isDisabled ? theme.theme.grey40 : theme.theme.grey90
      });
    },
    singleValue: function singleValue(styles, _a) {
      var isDisabled = _a.isDisabled;
      return _tslib.__assign(_tslib.__assign(_tslib.__assign({}, styles), {
        color: isDisabled ? theme.theme.grey40 : theme.theme.grey100
      }), removeFocusBox);
    },
    menu: function menu(styles) {
      return _tslib.__assign(_tslib.__assign({}, styles), {
        backgroundColor: 'transparent',
        zIndex: 6,
        marginTop: -5
      });
    },
    dropdownIndicator: function dropdownIndicator(styles, _a) {
      var isDisabled = _a.isDisabled;
      return _tslib.__assign(_tslib.__assign({}, styles), {
        color: isDisabled ? theme.theme.grey40 : theme.theme.grey70
      });
    },
    menuList: function menuList(style) {
      return _tslib.__assign(_tslib.__assign({}, style), {
        zIndex: 5,
        borderRadius: 6
      });
    },
    indicatorSeparator: function indicatorSeparator(styles, _a) {
      var isDisabled = _a.isDisabled;
      return _tslib.__assign(_tslib.__assign({}, styles), {
        backgroundColor: isDisabled ? theme.theme.grey30 : theme.theme.grey30
      });
    }
  };
  return /*#__PURE__*/React__default['default'].createElement("div", {
    style: style
  }, label && /*#__PURE__*/React__default['default'].createElement(components_Label_index.Label, {
    htmlFor: name,
    disabled: disableLabel
  }, label), /*#__PURE__*/React__default['default'].createElement(ReactSelect__default['default'], _tslib.__assign({}, props, {
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

exports.Select = Select;
