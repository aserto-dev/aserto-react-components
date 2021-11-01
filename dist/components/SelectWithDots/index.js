import { _ as __makeTemplateObject, a as __rest, b as __assign, e as __spreadArray } from '../../_tslib-66d5e02f.js';
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import ReactSelect, { components } from 'react-select';
import { t as theme } from '../../theme-526b9b1f.js';
import { Label } from '../Label/index.js';
import { Button } from '../Button/index.js';
import styled from 'styled-components';
import 'react-bootstrap';

var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:1.41421%3b'%3e %3cg transform='matrix(1%2c0%2c0%2c1%2c-2%2c0)'%3e %3ccircle cx='4' cy='8' r='2' style='fill:%23a0a0a0%3b'/%3e %3c/g%3e %3cg transform='matrix(1%2c0%2c0%2c1%2c10%2c0)'%3e %3ccircle cx='4' cy='8' r='2' style='fill:%23a0a0a0%3b'/%3e %3c/g%3e %3cg transform='matrix(1%2c0%2c0%2c1%2c4%2c0)'%3e %3ccircle cx='4' cy='8' r='2' style='fill:%23a0a0a0%3b'/%3e %3c/g%3e%3c/svg%3e";

var DotsButton = styled(Button).withConfig({
  displayName: "SelectWithDots__DotsButton",
  componentId: "sc-14x5wz1-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  float: right;\n  width: 40px;\n  height: 35px;\n"], ["\n  float: right;\n  width: 40px;\n  height: 35px;\n"])));

function composeStyles(outer, inner) {
  var composed = __assign({}, inner);

  var _loop_1 = function _loop_1(name_1) {
    if (name_1 in inner) {
      composed[name_1] = function (styles) {
        var rest = [];

        for (var _i = 1; _i < arguments.length; _i++) {
          rest[_i - 1] = arguments[_i];
        }

        return outer[name_1].apply(outer, __spreadArray([inner[name_1].apply(inner, __spreadArray([styles], rest))], rest));
      };
    } else {
      composed[name_1] = outer[name_1];
    }
  };

  for (var _i = 0, _a = Object.keys(outer); _i < _a.length; _i++) {
    var name_1 = _a[_i];

    _loop_1(name_1);
  }

  return composed;
}

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

var SelectWithDots = /*#__PURE__*/React.forwardRef(function (_a, ref) {
  var defaultValue = _a.defaultValue,
      _onChange = _a.onChange,
      label = _a.label,
      disabled = _a.disabled,
      style = _a.style,
      disableLabel = _a.disableLabel,
      name = _a.name,
      shouldDisableOptions = _a.shouldDisableOptions,
      _onBlur = _a.onBlur,
      _b = _a.menuAlignment,
      menuAlignment = _b === void 0 ? 'bottom-right' : _b,
      componentsProp = _a.components,
      stylesProp = _a.styles,
      menuPortalTarget = _a.menuPortalTarget,
      props = __rest(_a, ["defaultValue", "onChange", "label", "disabled", "style", "disableLabel", "name", "shouldDisableOptions", "onBlur", "menuAlignment", "components", "styles", "menuPortalTarget"]);

  var _c = useState(false),
      open = _c[0],
      setOpen = _c[1];

  var _d = useState(null),
      firstSelectedOption = _d[0],
      setFirstSelectedOption = _d[1];

  var removeFocusBox = {
    outline: 'none',
    webkitBoxShadow: 'none',
    boxShadow: 'none'
  };
  useEffect(function () {
    if (defaultValue) {
      setFirstSelectedOption(defaultValue);
    }
  }, [defaultValue]);
  var selectRef = useRef(undefined);
  var setSelectRef = useCallback(function (selectElement) {
    if (typeof ref === 'function') {
      ref(selectElement);
    } else if (ref != null) {
      ref.current = selectElement;
    }

    selectRef.current = selectElement;
  }, [ref, selectRef]);
  useEffect(function () {
    var _a, _b;

    if (!open) {
      (_b = (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.blur) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
  }, [open, selectRef]);
  var CustomMenu = useCallback(function (_a) {
    var innerRef = _a.innerRef,
        innerProps = _a.innerProps,
        children = _a.children;
    var alignmentStyleOverrides = {
      'bottom-left': {
        top: 39,
        left: 0
      },
      'bottom-right': {
        top: 39,
        right: 0
      },
      'right-bottom': {
        bottom: 0,
        left: 40,
        marginBottom: 1,
        marginLeft: 2
      },
      'right-top': {
        top: 0,
        left: 40,
        marginTop: 1,
        marginLeft: 2
      }
    };
    var alignmentStyleOverride = alignmentStyleOverrides[menuAlignment];

    if (menuPortalTarget != null && 'top' in alignmentStyleOverride) {
      alignmentStyleOverride.top = Number(alignmentStyleOverride.top) - 38;
    }

    return /*#__PURE__*/React.createElement("div", __assign({
      ref: innerRef,
      style: __assign({
        zIndex: 20,
        position: 'absolute',
        width: 250
      }, alignmentStyleOverride)
    }, innerProps), children);
  }, [menuAlignment, selectRef]);
  var ValueContainer = useCallback(function (_a) {
    var children = _a.children;
    return /*#__PURE__*/React.createElement(DotsButton, {
      variant: "secondary-borderless"
    }, /*#__PURE__*/React.createElement("img", {
      src: img,
      alt: "see-more"
    }), " ", children);
  }, []);
  var Option = useCallback(function (props) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(components.Option, __assign({}, props, {
      innerProps: __assign(__assign({}, props.innerProps), {
        onMouseDown: function onMouseDown(e) {
          var _a;

          if (shouldDisableOptions) {
            return;
          }

          if (props.data.shouldStopPropagation) {
            e.stopPropagation();
            (_a = props.data) === null || _a === void 0 ? void 0 : _a.onClick();
          }
        }
      })
    })));
  }, [shouldDisableOptions]);
  var colourStyles = useMemo(function () {
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
          borderWidth: 1
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
          cursor: isDisabled ? 'not-allowed' : 'default',
          ':active': __assign(__assign({}, styles[':active']), {
            backgroundColor: theme.grey40
          })
        });
      },
      input: function input(styles) {
        return __assign(__assign({}, styles), {
          color: theme.grey100,
          borderColor: theme.grey60
        });
      },
      group: function group(styles) {
        return __assign(__assign({}, styles), {
          paddingBottom: 0
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
        return __assign(__assign(__assign(__assign({}, styles), {
          color: isDisabled ? theme.grey40 : theme.grey100,
          width: '100%',
          textAlign: 'right',
          overflow: 'auto'
        }), removeFocusBox), {
          display: 'none'
        });
      },
      menu: function menu(styles) {
        return __assign(__assign({}, styles), {
          backgroundColor: theme.primaryBlack,
          zIndex: 6,
          marginTop: -5
        });
      },
      dropdownIndicator: function dropdownIndicator(styles) {
        return __assign(__assign({}, styles), {
          display: 'none'
        });
      },
      container: function container(style) {
        return __assign(__assign({}, style), {
          width: 40
        });
      },
      menuList: function menuList(style) {
        return __assign(__assign({}, style), {
          zIndex: 5,
          padding: 0,
          border: "1px solid " + theme.grey50
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

    if (stylesProp !== undefined) {
      return composeStyles(stylesProp, colourStyles);
    } else {
      return colourStyles;
    }
  }, [stylesProp]);
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, label && /*#__PURE__*/React.createElement(Label, {
    htmlFor: name,
    disabled: disableLabel
  }, label), /*#__PURE__*/React.createElement(ReactSelect, __assign({}, props, {
    name: name,
    value: null,
    isClearable: false,
    inputId: name,
    isSearchable: false,
    ref: setSelectRef,
    isDisabled: disabled,
    onFocus: function onFocus() {
      setOpen(true);
    },
    onBlur: function onBlur() {
      setOpen(false);
      _onBlur && _onBlur(firstSelectedOption);
    },
    defaultValue: defaultValue,
    closeMenuOnSelect: false,
    onChange: function onChange(option) {
      setOpen(false);
      _onChange && _onChange(option);
    },
    menuIsOpen: open,
    menuPortalTarget: menuPortalTarget,
    styles: colourStyles,
    formatGroupLabel: formatGroupLabel,
    components: __assign({
      ValueContainer: ValueContainer,
      Option: Option,
      Menu: CustomMenu
    }, componentsProp),
    placeholder: ""
  })));
});
var templateObject_1;

export { SelectWithDots };
