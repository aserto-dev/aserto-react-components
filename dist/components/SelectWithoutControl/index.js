import { _ as __makeTemplateObject, a as __rest, b as __assign } from '../../_tslib-02678a84.js';
import React, { useState, useCallback } from 'react';
import ReactSelect, { components } from 'react-select';
import { t as theme } from '../../theme-526b9b1f.js';
import { Label } from '../Label/index.js';
import { Button } from '../Button/index.js';
import styled from 'styled-components';
import 'react-bootstrap';

var RemoveFromTenant = styled.div.withConfig({
  displayName: "SelectWithoutControl__RemoveFromTenant",
  componentId: "o5rci0-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n"], ["\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n"])), theme.grey10, theme.lochivarAccent1, theme.grey100);
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

var menuHeaderStyle = {
  padding: '4px 12px',
  background: theme.grey20,
  color: theme.mojoAccent3,
  borderTop: "1px solid " + theme.grey30,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
};
var removeFromTenantStyle = {
  padding: '4px 12px',
  background: theme.grey20,
  color: theme.mojoAccent3,
  borderTop: "1px solid " + theme.grey30,
  cursor: 'pointer',
  marginTop: -4
};
var SelectWithoutControl = /*#__PURE__*/React.forwardRef(function (_a, forRef) {
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
      props = __rest(_a, ["options", "defaultValue", "onChange", "label", "disabled", "isLoading", "style", "value", "disableLabel", "name", "onClickRemoveTenant", "onClickSave", "onClickCancel"]);

  var _b = useState(false),
      open = _b[0],
      setOpen = _b[1];

  var removeFocusBox = {
    outline: 'none',
    webkitBoxShadow: 'none',
    boxShadow: 'none'
  };
  var CustomMenu = useCallback(function (_a) {
    var innerRef = _a.innerRef,
        innerProps = _a.innerProps,
        children = _a.children;
    return /*#__PURE__*/React.createElement("div", __assign({
      ref: innerRef,
      style: {
        zIndex: 20,
        position: 'absolute',
        width: 250,
        left: -150,
        paddingBottom: 0
      }
    }, innerProps), children, /*#__PURE__*/React.createElement(RemoveFromTenant, {
      style: removeFromTenantStyle,
      onClick: function onClick() {
        onClickRemoveTenant();
        setOpen(false);
      }
    }, "Remove member from tenant"), /*#__PURE__*/React.createElement("div", {
      style: menuHeaderStyle
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      style: {
        marginRight: 10
      },
      variant: "secondary",
      onClick: function onClick() {
        setOpen(false);
        onClickCancel && onClickCancel();
      }
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: function onClick() {
        onClickSave();
        setOpen(false);
      }
    }, "Save")));
  }, [onClickRemoveTenant, onClickCancel, onClickSave]);
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
        backgroundColor: 'transparent',
        color: theme.grey70,
        border: 'none',
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
        color: isDisabled ? theme.grey40 : theme.grey100,
        width: '100%',
        textAlign: 'right',
        overflow: 'auto'
      }), removeFocusBox);
    },
    menu: function menu(styles) {
      return __assign(__assign({}, styles), {
        backgroundColor: theme.primaryBlack,
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
    indicatorSeparator: function indicatorSeparator(styles) {
      return __assign(__assign({}, styles), {
        display: 'none'
      });
    },
    valueContainer: function valueContainer(styles) {
      return __assign(__assign({}, styles), {
        overflow: 'none'
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

export { SelectWithoutControl };
