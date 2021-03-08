import _objectSpread from '@babel/runtime/helpers/objectSpread2';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import React from 'react';
import ReactSelect from 'react-select';
import { s as styleInject } from '../../style-inject.es-1f59c1d0.js';

var css_248z = ".react-select {\n  font-family: Roboto;\n  font-size: 14px;\n  color: #d7d8d8;\n  text-decoration: none solid rgb(215, 216, 216);  \n}\n\ndiv.react-select {\n  outline: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;  \n  border-color: white;\n}";
styleInject(css_248z);

var Select = function Select(_ref) {
  var options = _ref.options,
      defaultValue = _ref.defaultValue,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["options", "defaultValue", "onChange"]);

  var removeFocusBox = {
    outline: 'none',
    //borderColor: 'inherit',
    webkitBoxShadow: 'none',
    boxShadow: 'none' //borderColor: 'white'

  };
  var colourStyles = {
    control: function control(styles, _ref2) {
      var isFocused = _ref2.isFocused;
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: isFocused ? '#585f66' : '#35393d',
        color: isFocused ? '#ffffff' : '#d7d8d8',
        borderColor: isFocused ? '#35393d' : '#35393d',
        borderWidth: 0,
        ':hover': _objectSpread(_objectSpread({}, styles[':hover']), {}, {
          backgroundColor: '#585f66',
          borderColor: '#585f66',
          color: '#ffffff'
        })
      });
    },
    option: function option(styles, _ref3) {
      _ref3.data;
          var isDisabled = _ref3.isDisabled,
          isFocused = _ref3.isFocused,
          isSelected = _ref3.isSelected;
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: isFocused ? '#298a8e' : isSelected ? '#3e4347' : '#35393d',
        color: isFocused || isSelected ? '#ffffff' : '#d7d8d8',
        cursor: isDisabled ? 'not-allowed' : 'default',
        ':active': _objectSpread(_objectSpread({}, styles[':active']), {}, {
          backgroundColor: '#298a8e'
        })
      });
    },
    input: function input(styles, _ref4) {
      _ref4.isFocused;
      return _objectSpread(_objectSpread({}, styles), {}, {
        borderColor: '#8a959f'
      });
    },
    placeholder: function placeholder(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        color: '#d7d8d8'
      });
    },
    singleValue: function singleValue(styles, _ref5) {
      _ref5.data;
      return _objectSpread(_objectSpread({}, styles), {}, {
        color: '#d7d8d8'
      }, removeFocusBox);
    },
    menu: function menu(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        backgroundColor: '#35393d'
      });
    },
    dropdownIndicator: function dropdownIndicator(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        ':focus': {
          color: 'white'
        }
      });
    },
    indicatorSeparator: function indicatorSeparator(styles) {
      return _objectSpread(_objectSpread({}, styles), {}, {
        fill: 'black'
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", props, /*#__PURE__*/React.createElement(ReactSelect, {
    className: "react-select",
    options: options,
    defaultValue: defaultValue,
    onChange: onChange,
    styles: colourStyles
  }));
};

export default Select;
