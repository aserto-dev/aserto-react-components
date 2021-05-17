'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var React = require('react');
var ReactSelect = require('react-select');
var theme = require('../../theme-a5004722.js');
var components_Label_index = require('../Label/index.js');
var components_Button_index = require('../Button/index.js');
var styled = require('styled-components');
require('react-bootstrap');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactSelect__default = /*#__PURE__*/_interopDefaultLegacy(ReactSelect);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var RemoveFromTenant = styled__default['default'].div.withConfig({
  displayName: "SelectWithoutControl__RemoveFromTenant",
  componentId: "o5rci0-0"
})(templateObject_1 || (templateObject_1 = _tslib.__makeTemplateObject(["\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n"], ["\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n"])), theme.theme.grey10, theme.theme.lochivarAccent1, theme.theme.grey100);
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

var menuHeaderStyle = {
  padding: '4px 12px',
  background: theme.theme.grey20,
  color: theme.theme.mojoAccent3,
  borderTop: "1px solid " + theme.theme.grey30,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
};
var removeFromTenantStyle = {
  padding: '4px 12px',
  background: theme.theme.grey20,
  color: theme.theme.mojoAccent3,
  borderTop: "1px solid " + theme.theme.grey30,
  cursor: 'pointer',
  marginTop: -4
};
var SelectWithoutControl = /*#__PURE__*/React__default['default'].forwardRef(function (_a, forRef) {
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
      onClickRemoveTenant = _a.onClickRemoveTenant,
      onClickSave = _a.onClickSave,
      onClickCancel = _a.onClickCancel,
      props = _tslib.__rest(_a, ["options", "defaultValue", "onChange", "label", "disabled", "isLoading", "style", "value", "disableLabel", "name", "onClickRemoveTenant", "onClickSave", "onClickCancel"]);

  var _b = React.useState(false),
      open = _b[0],
      setOpen = _b[1];

  var removeFocusBox = {
    outline: 'none',
    webkitBoxShadow: 'none',
    boxShadow: 'none'
  };
  var CustomMenu = React.useCallback(function (_a) {
    var innerRef = _a.innerRef,
        innerProps = _a.innerProps,
        children = _a.children;
    return /*#__PURE__*/React__default['default'].createElement("div", _tslib.__assign({
      ref: innerRef,
      style: {
        zIndex: 20,
        position: 'absolute',
        width: 250,
        left: -150,
        paddingBottom: 0
      }
    }, innerProps), children, /*#__PURE__*/React__default['default'].createElement(RemoveFromTenant, {
      style: removeFromTenantStyle,
      onClick: function onClick() {
        onClickRemoveTenant();
        setOpen(false);
      }
    }, "Remove member from tenant"), /*#__PURE__*/React__default['default'].createElement("div", {
      style: menuHeaderStyle
    }, /*#__PURE__*/React__default['default'].createElement(components_Button_index.Button, {
      size: "sm",
      style: {
        marginRight: 10
      },
      variant: "secondary",
      onClick: function onClick() {
        setOpen(false);
        onClickCancel && onClickCancel();
      }
    }, "Cancel"), /*#__PURE__*/React__default['default'].createElement(components_Button_index.Button, {
      size: "sm",
      onClick: function onClick() {
        onClickSave();
        setOpen(false);
      }
    }, "Save")));
  }, [onClickRemoveTenant, onClickCancel, onClickSave]);
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
        backgroundColor: 'transparent',
        color: theme.theme.grey70,
        border: 'none',
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
        color: isDisabled ? theme.theme.grey40 : theme.theme.grey100,
        width: '100%',
        textAlign: 'right',
        overflow: 'auto'
      }), removeFocusBox);
    },
    menu: function menu(styles) {
      return _tslib.__assign(_tslib.__assign({}, styles), {
        backgroundColor: theme.theme.primaryBlack,
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
    indicatorSeparator: function indicatorSeparator(styles) {
      return _tslib.__assign(_tslib.__assign({}, styles), {
        display: 'none'
      });
    },
    valueContainer: function valueContainer(styles) {
      return _tslib.__assign(_tslib.__assign({}, styles), {
        overflow: 'none'
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
    isClearable: false,
    inputId: name,
    isSearchable: false,
    ref: forRef || null,
    isLoading: isLoading,
    isDisabled: disabled,
    options: options,
    onFocus: function onFocus() {
      setOpen(true);
    },
    onBlur: function onBlur() {
      setOpen(false);
    },
    defaultValue: defaultValue,
    closeMenuOnSelect: false,
    onChange: onChange,
    menuIsOpen: open,
    styles: colourStyles,
    formatGroupLabel: formatGroupLabel,
    components: {
      Option: Option,
      Menu: CustomMenu
    }
  })));
});
var templateObject_1;

exports.SelectWithoutControl = SelectWithoutControl;
