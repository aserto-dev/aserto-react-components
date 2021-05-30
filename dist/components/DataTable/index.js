import { _ as __makeTemplateObject, b as __assign } from '../../_tslib-02678a84.js';
import React from 'react';
import { useTable, useSortBy } from 'react-table';
import styled from 'styled-components';
import { t as theme } from '../../theme-526b9b1f.js';

var img$1 = "data:image/svg+xml,%3csvg version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='visible' preserveAspectRatio='none' viewBox='0 0 16 8' width='16' height='8'%3e%3cg transform='translate(0%2c 0)'%3e%3cdefs%3e%3cpath id='path-16196542201702383' d='M8.568888888888887 0.21449780518582723 C8.248888888888887 -0.0715007202473131 7.733333333333332 -0.07150072024731312 7.431111111111109 0.21449691629682474 C7.431111111111109 0.21449691629682474 0.2666666666666666 6.617671956702422 0.2666666666666666 6.617671956702422 C-0.0888888888888889 6.935449775085138 -0.0888888888888889 7.443894284497484 0.2666666666666666 7.7616721028802 C0.6222222222222221 8.079441032372891 1.191111111111111 8.079441032372891 1.5466666666666664 7.7616721028802 C1.5466666666666664 7.7616721028802 7.431111111111109 2.502480319761334 7.431111111111109 2.502480319761334 C7.75111111111111 2.2164802832168893 8.266666666666666 2.2164802832168893 8.568888888888887 2.502480319761334 C8.568888888888887 2.502480319761334 14.453333333333331 7.745778767516052 14.453333333333331 7.745778767516052 C14.808888888888886 8.063556585898768 15.377777777777776 8.063556585898768 15.73333333333333 7.745778767516052 C16.08888888888889 7.428000949133335 16.08888888888889 6.919565328611014 15.73333333333333 6.601787510228299 C15.73333333333333 6.601787510228299 8.568888888888887 0.21449780518582723 8.568888888888887 0.21449780518582723 Z' vector-effect='non-scaling-stroke'/%3e%3c/defs%3e%3cg transform='translate(2.7755575615628914e-17%2c 0.000001350000145693142)'%3e%3cpath d='M8.568888888888887 0.21449780518582723 C8.248888888888887 -0.0715007202473131 7.733333333333332 -0.07150072024731312 7.431111111111109 0.21449691629682474 C7.431111111111109 0.21449691629682474 0.2666666666666666 6.617671956702422 0.2666666666666666 6.617671956702422 C-0.0888888888888889 6.935449775085138 -0.0888888888888889 7.443894284497484 0.2666666666666666 7.7616721028802 C0.6222222222222221 8.079441032372891 1.191111111111111 8.079441032372891 1.5466666666666664 7.7616721028802 C1.5466666666666664 7.7616721028802 7.431111111111109 2.502480319761334 7.431111111111109 2.502480319761334 C7.75111111111111 2.2164802832168893 8.266666666666666 2.2164802832168893 8.568888888888887 2.502480319761334 C8.568888888888887 2.502480319761334 14.453333333333331 7.745778767516052 14.453333333333331 7.745778767516052 C14.808888888888886 8.063556585898768 15.377777777777776 8.063556585898768 15.73333333333333 7.745778767516052 C16.08888888888889 7.428000949133335 16.08888888888889 6.919565328611014 15.73333333333333 6.601787510228299 C15.73333333333333 6.601787510228299 8.568888888888887 0.21449780518582723 8.568888888888887 0.21449780518582723 Z' style='stroke-width: 0%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b fill: rgb(62%2c 202%2c 207)%3b' vector-effect='non-scaling-stroke'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg width='16' height='8' viewBox='0 0 16 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cg clip-path='url(%23clip0)'%3e%3cpath d='M7.43111 7.7855C7.75111 8.0715 8.26667 8.0715 8.56889 7.7855L15.7333 1.38233C16.0889 1.06455 16.0889 0.556104 15.7333 0.238327C15.3778 -0.0794424 14.8089 -0.0794424 14.4533 0.238327L8.56889 5.49752C8.24889 5.78352 7.73333 5.78352 7.43111 5.49752L1.54667 0.25422C1.19111 -0.0635578 0.622222 -0.0635578 0.266666 0.25422C-0.0888892 0.571998 -0.0888892 1.08043 0.266666 1.39821L7.43111 7.7855Z' fill='%233ECACF'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='clip0'%3e%3crect width='16' height='8' fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";

var Icon = styled.img.withConfig({
  displayName: "DataTable__Icon",
  componentId: "cnajix-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-left: 8px;\n"], ["\n  margin-left: 8px;\n"])));
var TableContainer = styled.div.withConfig({
  displayName: "DataTable__TableContainer",
  componentId: "cnajix-1"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  max-width: 100%;\n  .tableWrap {\n    display: block;\n    max-width: 100%;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    border-bottom: 1px solid black;\n  }\n"], ["\n  display: block;\n  max-width: 100%;\n  .tableWrap {\n    display: block;\n    max-width: 100%;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    border-bottom: 1px solid black;\n  }\n"])));
var Table = styled.table.withConfig({
  displayName: "DataTable__Table",
  componentId: "cnajix-2"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  width: 100%;\n  thead {\n    tr {\n      color: ", ";\n      font-weight: bold;\n      font-size: 16px;\n      th {\n        min-width: 120px;\n        padding: 20px;\n      }\n    }\n  }\n  tbody {\n    font-size: 14px;\n    tr {\n      color: ", ";\n      border: 1px solid ", ";\n      td {\n        border-bottom: 1px solid ", ";\n        padding: 20px;\n      }\n    }\n  }\n"], ["\n  background-color: ", ";\n  width: 100%;\n  thead {\n    tr {\n      color: ", ";\n      font-weight: bold;\n      font-size: 16px;\n      th {\n        min-width: 120px;\n        padding: 20px;\n      }\n    }\n  }\n  tbody {\n    font-size: 14px;\n    tr {\n      color: ", ";\n      border: 1px solid ", ";\n      td {\n        border-bottom: 1px solid ", ";\n        padding: 20px;\n      }\n    }\n  }\n"])), theme.primaryBlack, theme.grey100, theme.grey70, theme.grey20, theme.grey20);
var DataTable = function DataTable(_a) {
  var data = _a.data,
      columns = _a.columns;

  var _b = useTable({
    columns: columns,
    data: data
  }, useSortBy),
      getTableProps = _b.getTableProps,
      getTableBodyProps = _b.getTableBodyProps,
      headerGroups = _b.headerGroups,
      rows = _b.rows,
      prepareRow = _b.prepareRow;

  return /*#__PURE__*/React.createElement(TableContainer, null, /*#__PURE__*/React.createElement(Table, __assign({}, getTableProps()), /*#__PURE__*/React.createElement("thead", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/React.createElement("tr", __assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(function (column) {
      var _a;

      return /*#__PURE__*/React.createElement("th", __assign({}, column.getHeaderProps(column.getSortByToggleProps()), {
        style: (_a = column.style) === null || _a === void 0 ? void 0 : _a.headerCell
      }), column.render('Header'), /*#__PURE__*/React.createElement("span", null, column.isSorted ? column.isSortedDesc ? /*#__PURE__*/React.createElement(Icon, {
        src: img
      }) : /*#__PURE__*/React.createElement(Icon, {
        src: img$1
      }) : ''));
    }));
  })), /*#__PURE__*/React.createElement("tbody", __assign({}, getTableBodyProps()), rows.map(function (row) {
    prepareRow(row);
    return /*#__PURE__*/React.createElement("tr", __assign({}, row.getRowProps()), row.cells.map(function (cell) {
      var _a, _b;

      return /*#__PURE__*/React.createElement("td", __assign({}, cell.getCellProps(), {
        width: ((_b = (_a = cell.column) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.cellWidth) ? cell.column.style.cellWidth : ''
      }), cell.render('Cell'));
    }));
  }))));
};
var templateObject_1, templateObject_2, templateObject_3;

export { DataTable };
