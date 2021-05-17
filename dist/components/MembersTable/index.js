import { _ as __makeTemplateObject } from '../../_tslib-02678a84.js';
import React, { useMemo } from 'react';
import { DataTable } from '../DataTable/index.js';
import styled from 'styled-components';
import { Button } from '../Button/index.js';
import { t as theme } from '../../theme-526b9b1f.js';
import { StatusPill } from '../StatusPill/index.js';
import 'react-table';
import 'react-bootstrap';

var getStatusStyle = function getStatusStyle(status) {
  var obj = {
    ACTIVE: {
      text: 'Active',
      color: theme.apple50
    },
    PENDING: {
      text: 'Pending',
      color: theme.grey30
    },
    EXPIRED: {
      text: 'Invitation expired',
      color: theme.mojo50
    },
    DEFAULT: {
      text: 'Unkown',
      color: theme.grey40
    }
  };
  return obj[status] || obj.DEFAULT;
};
var CellWithImage = styled.div.withConfig({
  displayName: "MembersTable__CellWithImage",
  componentId: "vd2vhe-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  img {\n    width: 40px;\n    border-radius: 20px;\n    height: 40px;\n    margin-right: 10px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  img {\n    width: 40px;\n    border-radius: 20px;\n    height: 40px;\n    margin-right: 10px;\n  }\n"])));
var BoldText = styled.div.withConfig({
  displayName: "MembersTable__BoldText",
  componentId: "vd2vhe-1"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: bold;\n  font-size: 14px;\n"], ["\n  font-weight: bold;\n  font-size: 14px;\n"])));
var TopRightButton = styled(Button).withConfig({
  displayName: "MembersTable__TopRightButton",
  componentId: "vd2vhe-2"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-right: -20px;\n  float: right;\n"], ["\n  margin-right: -20px;\n  float: right;\n"])));
var MembersTable = function MembersTable(_a) {
  var data = _a.data,
      onClickInvite = _a.onClickInvite;
      _a.onClickCancel;
      _a.onClickSave;
      _a.onClickRemoveTenant;
      _a.selectRef;
  var columns = useMemo(function () {
    return [{
      Header: 'Member',
      accessor: 'name',
      style: {
        cellWidth: '50%'
      },
      Cell: function Cell(_a) {
        var row = _a.row;
        return /*#__PURE__*/React.createElement(CellWithImage, null, /*#__PURE__*/React.createElement(BoldText, null, row.original.email));
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
        return /*#__PURE__*/React.createElement(StatusPill, {
          backgroundColor: statusStyle.color
        }, statusStyle.text);
      }
    }, {
      Header: function Header() {
        return /*#__PURE__*/React.createElement(TopRightButton, {
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
        return /*#__PURE__*/React.createElement("div", {
          style: {
            float: 'right',
            minWidth: 100
          }
        });
      }
    }];
  }, [data, onClickInvite]);
  return /*#__PURE__*/React.createElement(DataTable, {
    data: data,
    columns: columns
  });
};
var templateObject_1, templateObject_2, templateObject_3;

export { MembersTable, getStatusStyle };
