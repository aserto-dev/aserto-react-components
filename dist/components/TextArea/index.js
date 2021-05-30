import { a as __rest, b as __assign } from '../../_tslib-02678a84.js';
import React from 'react';
import { s as styleInject } from '../../style-inject.es-1f59c1d0.js';

var css_248z = "\ntextarea {\n  background-color: #121212;\n  color: #E7E7E7;\n  border-color: #595959;\n  border-radius: 2px;\n  resize: none;\n  padding: 0 8px;\n}\n\ntextarea:focus {\n  background-color: #121212;\n  color: #E7E7E7;\n  outline: none;\n  box-shadow: none;\n  border: 1px solid #36B1B5;\n  -webkit-box-shadow: none;\n}";
styleInject(css_248z);

var TextArea = function TextArea(_a) {
  var placeholder = _a.placeholder,
      value = _a.value,
      onChange = _a.onChange,
      rows = _a.rows,
      props = __rest(_a, ["placeholder", "value", "onChange", "rows"]);

  return /*#__PURE__*/React.createElement("textarea", __assign({
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }, props));
};

export { TextArea };
