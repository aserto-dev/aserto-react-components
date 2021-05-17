'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var React = require('react');
var components_DataTable_index = require('../DataTable/index.js');
var styled = require('styled-components');
var components_Button_index = require('../Button/index.js');
var theme = require('../../theme-a5004722.js');
var components_StatusPill_index = require('../StatusPill/index.js');
require('react-table');
require('react-bootstrap');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var getStatusStyle = function getStatusStyle(status) {
  var obj = {
    ACTIVE: {
      text: 'Active',
      color: theme.theme.apple50
    },
    PENDING: {
      text: 'Pending',
      color: theme.theme.grey30
    },
    EXPIRED: {
      text: 'Invitation expired',
      color: theme.theme.mojo50
    },
    DEFAULT: {
      text: 'Unkown',
      color: theme.theme.grey40
    }
  };
  return obj[status] || obj.DEFAULT;
};
var CellWithImage = styled__default['default'].div.withConfig({
  displayName: "MembersTable__CellWithImage",
  componentId: "vd2vhe-0"
})(templateObject_1 || (templateObject_1 = _tslib.__makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  img {\n    width: 40px;\n    border-radius: 20px;\n    height: 40px;\n    margin-right: 10px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  img {\n    width: 40px;\n    border-radius: 20px;\n    height: 40px;\n    margin-right: 10px;\n  }\n"])));
var BoldText = styled__default['default'].div.withConfig({
  displayName: "MembersTable__BoldText",
  componentId: "vd2vhe-1"
})(templateObject_2 || (templateObject_2 = _tslib.__makeTemplateObject(["\n  font-weight: bold;\n  font-size: 14px;\n"], ["\n  font-weight: bold;\n  font-size: 14px;\n"])));
var TopRightButton = styled__default['default'](components_Button_index.Button).withConfig({
  displayName: "MembersTable__TopRightButton",
  componentId: "vd2vhe-2"
})(templateObject_3 || (templateObject_3 = _tslib.__makeTemplateObject(["\n  margin-right: -20px;\n  float: right;\n"], ["\n  margin-right: -20px;\n  float: right;\n"])));
var MembersTable = function MembersTable(_a) {
  var data = _a.data,
      onClickInvite = _a.onClickInvite;
      _a.onClickCancel;
      _a.onClickSave;
      _a.onClickRemoveTenant;
      _a.selectRef;
  var columns = React.useMemo(function () {
    return [{
      Header: 'Member',
      accessor: 'name',
      style: {
        cellWidth: '50%'
      },
      Cell: function Cell(_a) {
        var row = _a.row;
        return /*#__PURE__*/React__default['default'].createElement(CellWithImage, null, /*#__PURE__*/React__default['default'].createElement(BoldText, null, row.original.email));
      }
    }, {
      Header: 'Status',
      accessor: 'status',
      style: {
        cellWidth: '10%'
      },
      Cell: function Cell(_a) {
        var value = _a.value;
        var statusStyle = getStatusStyle(value);
        return /*#__PURE__*/React__default['default'].createElement(components_StatusPill_index.StatusPill, {
          backgroundColor: statusStyle.color
        }, statusStyle.text);
      }
    }, {
      Header: function Header() {
        return /*#__PURE__*/React__default['default'].createElement(TopRightButton, {
          onClick: onClickInvite
        }, "Invite member...");
      },
      accessor: 'id',
      style: {
        headerCell: {
          minWidth: 155
        }
      },
      disableSortBy: true,
      Cell: function Cell(_a) {
        _a.row;
        return /*#__PURE__*/React__default['default'].createElement("div", {
          style: {
            float: 'right',
            minWidth: 100
          }
        });
      }
    }];
  }, [data, onClickInvite]);
  return /*#__PURE__*/React__default['default'].createElement(components_DataTable_index.DataTable, {
    data: data,
    columns: columns
  });
};
var templateObject_1, templateObject_2, templateObject_3;

exports.MembersTable = MembersTable;
exports.getStatusStyle = getStatusStyle;
