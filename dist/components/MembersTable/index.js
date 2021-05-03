import { _ as __makeTemplateObject } from '../../_tslib-2598d085.js';
import React, { useMemo } from 'react';
import { DataTable } from '../DataTable/index.js';
import { Y as Ye } from '../../styled-components.esm-4ce7ee54.js';
import { Button } from '../Button/index.js';
import { t as theme } from '../../theme-526b9b1f.js';
import 'react-table';
import 'react-bootstrap';

var img = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:1.41421%3b'%3e %3cg transform='matrix(1%2c0%2c0%2c1%2c-2%2c0)'%3e %3ccircle cx='4' cy='8' r='2' style='fill:%23a0a0a0%3b'/%3e %3c/g%3e %3cg transform='matrix(1%2c0%2c0%2c1%2c10%2c0)'%3e %3ccircle cx='4' cy='8' r='2' style='fill:%23a0a0a0%3b'/%3e %3c/g%3e %3cg transform='matrix(1%2c0%2c0%2c1%2c4%2c0)'%3e %3ccircle cx='4' cy='8' r='2' style='fill:%23a0a0a0%3b'/%3e %3c/g%3e%3c/svg%3e";

var getStatusStyle = function getStatusStyle(status) {
  var obj = {
    ACTIVE: {
      text: 'Active',
      color: theme.apple80
    },
    PENDING: {
      text: 'Pending',
      color: theme.cooperAccent3
    },
    EXPIRED: {
      text: 'Expired',
      color: theme.mojoAccent3
    },
    DEFAULT: {
      text: 'Unkown',
      color: theme.grey40
    }
  };
  return obj[status] || obj.DEFAULT;
};
var CellWithImage = Ye.div.withConfig({
  displayName: "MembersTable__CellWithImage",
  componentId: "vd2vhe-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  img {\n    width: 40px;\n    border-radius: 20px;\n    height: 40px;\n    margin-right: 10px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  img {\n    width: 40px;\n    border-radius: 20px;\n    height: 40px;\n    margin-right: 10px;\n  }\n"])));
var BoldText = Ye.div.withConfig({
  displayName: "MembersTable__BoldText",
  componentId: "vd2vhe-1"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-weight: bold;\n"], ["\n  font-weight: bold;\n"])));
var StatusText = Ye.div.withConfig({
  displayName: "MembersTable__StatusText",
  componentId: "vd2vhe-2"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  line-height: 24px;\n"], ["\n  color: ", ";\n  line-height: 24px;\n"])), function (_a) {
  var color = _a.color;
  return color;
});
var TopRightButton = Ye(Button).withConfig({
  displayName: "MembersTable__TopRightButton",
  componentId: "vd2vhe-3"
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-right: -20px;\n  float: right;\n"], ["\n  margin-right: -20px;\n  float: right;\n"])));
var DotsButton = Ye(Button).withConfig({
  displayName: "MembersTable__DotsButton",
  componentId: "vd2vhe-4"
})(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  float: right;\n  width: 40px;\n"], ["\n  float: right;\n  width: 40px;\n"])));
var MembersTable = function MembersTable(_a) {
  var data = _a.data,
      onClickInvite = _a.onClickInvite,
      onClickDots = _a.onClickDots;
  var columns = useMemo(function () {
    return [{
      Header: 'Member',
      accessor: 'name',
      style: {
        cellWidth: '50%'
      },
      Cell: function Cell(_a) {
        var row = _a.row;
        return /*#__PURE__*/React.createElement(CellWithImage, null, /*#__PURE__*/React.createElement("img", {
          src: row.original.image,
          alt: "profile-image"
        }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BoldText, null, row.original.name), /*#__PURE__*/React.createElement("div", null, row.original.email)));
      }
    }, {
      Header: 'Role',
      accessor: 'role',
      style: {
        cellWidth: '8%'
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
        return /*#__PURE__*/React.createElement(StatusText, {
          color: statusStyle.color
        }, statusStyle.text);
      }
    }, {
      Header: function Header() {
        return /*#__PURE__*/React.createElement(TopRightButton, {
          onClick: onClickInvite
        }, "Invite members...");
      },
      accessor: 'id',
      style: {
        headerCell: {
          minWidth: 155
        }
      },
      disableSortBy: true,
      Cell: function Cell(data) {
        return /*#__PURE__*/React.createElement(DotsButton, {
          onClick: function onClick() {
            return onClickDots(data.row.original);
          },
          variant: "secondary-borderless"
        }, /*#__PURE__*/React.createElement("img", {
          src: img,
          alt: "see-more"
        }));
      }
    }];
  }, [data, onClickInvite]);
  return /*#__PURE__*/React.createElement(DataTable, {
    data: data,
    columns: columns
  });
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

export { MembersTable, getStatusStyle };
