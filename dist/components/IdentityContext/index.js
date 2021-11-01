import { _ as __makeTemplateObject } from '../../_tslib-66d5e02f.js';
import React from 'react';
import styled from 'styled-components';
import { Input } from '../Input/index.js';
import { Select } from '../Select/index.js';
import 'react-bootstrap';
import '../../theme-526b9b1f.js';
import '../Label/index.js';
import '../../utils-6a0a2690.js';
import 'react-select';

var Col = styled.div.withConfig({
  displayName: "IdentityContext__Col",
  componentId: "t0887f-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var Row = styled.div.withConfig({
  displayName: "IdentityContext__Row",
  componentId: "t0887f-1"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  ", ":first-of-type {\n    padding-right: 10px;\n  }\n"], ["\n  display: flex;\n  flex: 1;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  ", ":first-of-type {\n    padding-right: 10px;\n  }\n"])), Col);
var IdentityContext = function IdentityContext(_a) {
  var mode = _a.mode,
      setMode = _a.setMode,
      identity = _a.identity,
      setIdentity = _a.setIdentity;
  var identityOptions = [{
    label: 'Anonymous',
    value: 'ANONYMOUS'
  }, {
    label: 'JWT',
    value: 'JWT'
  }, {
    label: 'Manual',
    value: 'MANUAL'
  }]; // if mode wasn't specified and identity is set, use Manual

  if (!mode && identity) {
    mode = 'MANUAL';
  } // set default identity context


  var index = identityOptions.findIndex(function (i) {
    return i.value === mode;
  });

  if (index < 0) {
    index = 0;
  }

  var defaultMode = identityOptions[index];
  return /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Select, {
    options: identityOptions,
    defaultValue: defaultMode,
    onChange: function onChange(e) {
      return setMode(e.value);
    }
  })), /*#__PURE__*/React.createElement(Col, {
    style: {
      marginTop: 10,
      marginBottom: 10
    }
  }, mode !== 'ANONYMOUS' && /*#__PURE__*/React.createElement(Input, {
    placeholder: mode === 'JWT' ? 'JWT' : 'identity',
    value: identity,
    onChange: function onChange(e) {
      return setIdentity(e.target.value);
    }
  })));
};
var templateObject_1, templateObject_2;

export { IdentityContext };
