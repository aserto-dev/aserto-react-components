'use strict';

var _tslib = require('./_tslib-4b1ff751.js');
var React = require('react');
var styled = require('styled-components');
var theme = require('./theme-a5004722.js');
var utils = require('./utils-e99f2d3c.js');
var DropdownMenu$1 = require('@radix-ui/react-dropdown-menu');
var styleInject_es = require('./style-inject.es-dcee06b6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var img$1 = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='131' height='48.033' viewBox='0 0 131 48.033'%3e %3cdefs%3e %3clinearGradient id='linear-gradient' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'%3e %3cstop offset='0' stop-color='%2370d0d3'/%3e %3cstop offset='1' stop-color='%23048a8f'/%3e %3c/linearGradient%3e %3cclipPath id='clip-aserto-horizontal-white-text'%3e %3crect width='131' height='48.033'/%3e %3c/clipPath%3e %3c/defs%3e %3cg id='aserto-horizontal-white-text' clip-path='url(%23clip-aserto-horizontal-white-text)'%3e %3cg id='Group_1' transform='translate(-294.001 -78.674)'%3e %3cg id='Group_8' %3e %3cg id='Group_3' transform='translate(347.737 94.026)'%3e %3cpath id='Path_2' d='M350.609%2c71.44q-.35-1.023-.724-2.021t-.724-2.046h-7.291q-.35%2c1.048-.712%2c2.058t-.711%2c2.009h-3.264q.97-2.769%2c1.842-5.114t1.705-4.442q.833-2.1%2c1.655-3.992t1.693-3.743h3q.872%2c1.847%2c1.694%2c3.743t1.656%2c3.992q.835%2c2.1%2c1.719%2c4.441T354%2c71.44Zm-5.094-13.948q-.573%2c1.323-1.308%2c3.219t-1.532%2c4.117h5.679q-.8-2.22-1.544-4.142t-1.3-3.194' transform='translate(-337.183 -54.149)' fill='white'/%3e %3cpath id='Path_3' d='M479.3%2c94.918a3.96%2c3.96%2c0%2c0%2c0%2c1.744-.287%2c1.019%2c1.019%2c0%2c0%2c0%2c.548-.985A1.279%2c1.279%2c0%2c0%2c0%2c481%2c92.572a8.606%2c8.606%2c0%2c0%2c0-1.931-.923%2c15.162%2c15.162%2c0%2c0%2c1-1.507-.636%2c5.13%2c5.13%2c0%2c0%2c1-1.183-.786%2c3.218%2c3.218%2c0%2c0%2c1-.785-1.085%2c3.788%2c3.788%2c0%2c0%2c1-.287-1.559%2c3.4%2c3.4%2c0%2c0%2c1%2c1.32-2.832%2c5.666%2c5.666%2c0%2c0%2c1%2c3.587-1.036%2c11.032%2c11.032%2c0%2c0%2c1%2c2.192.212%2c10.686%2c10.686%2c0%2c0%2c1%2c1.569.412l-.548%2c2.446a7.359%2c7.359%2c0%2c0%2c0-1.27-.412%2c7.668%2c7.668%2c0%2c0%2c0-1.793-.187%2c3.116%2c3.116%2c0%2c0%2c0-1.494.312%2c1.024%2c1.024%2c0%2c0%2c0-.573.961%2c1.386%2c1.386%2c0%2c0%2c0%2c.112.574%2c1.231%2c1.231%2c0%2c0%2c0%2c.386.461%2c3.921%2c3.921%2c0%2c0%2c0%2c.722.424%2c11.055%2c11.055%2c0%2c0%2c0%2c1.1.437%2c16.775%2c16.775%2c0%2c0%2c1%2c1.818.786%2c4.929%2c4.929%2c0%2c0%2c1%2c1.233.873%2c2.988%2c2.988%2c0%2c0%2c1%2c.71%2c1.11%2c4.442%2c4.442%2c0%2c0%2c1%2c.224%2c1.5%2c3.227%2c3.227%2c0%2c0%2c1-1.382%2c2.832%2c6.873%2c6.873%2c0%2c0%2c1-3.948.961%2c10.775%2c10.775%2c0%2c0%2c1-2.764-.287%2c14.2%2c14.2%2c0%2c0%2c1-1.47-.461l.523-2.52a13.479%2c13.479%2c0%2c0%2c0%2c1.607.524%2c8.275%2c8.275%2c0%2c0%2c0%2c2.129.249' transform='translate(-456.806 -80.137)' fill='white'/%3e %3cpath id='Path_4' d='M564.1%2c90.621a8.21%2c8.21%2c0%2c0%2c1%2c.511-3.019%2c6.343%2c6.343%2c0%2c0%2c1%2c1.357-2.159%2c5.616%2c5.616%2c0%2c0%2c1%2c1.943-1.3%2c6.008%2c6.008%2c0%2c0%2c1%2c2.242-.437%2c5.361%2c5.361%2c0%2c0%2c1%2c4.2%2c1.672%2c7.243%2c7.243%2c0%2c0%2c1%2c1.507%2c4.992q0%2c.25-.012.562t-.037.562h-8.593a3.444%2c3.444%2c0%2c0%2c0%2c1.108%2c2.433%2c4.206%2c4.206%2c0%2c0%2c0%2c2.852.861%2c9.341%2c9.341%2c0%2c0%2c0%2c2-.2%2c8.241%2c8.241%2c0%2c0%2c0%2c1.432-.424l.4%2c2.47a4.765%2c4.765%2c0%2c0%2c1-.685.262%2c9.551%2c9.551%2c0%2c0%2c1-1%2c.25q-.561.112-1.208.187a11.487%2c11.487%2c0%2c0%2c1-1.32.075%2c7.976%2c7.976%2c0%2c0%2c1-2.989-.512%2c5.559%2c5.559%2c0%2c0%2c1-2.092-1.422%2c5.827%2c5.827%2c0%2c0%2c1-1.221-2.146%2c8.773%2c8.773%2c0%2c0%2c1-.4-2.707m8.742-1.347a3.988%2c3.988%2c0%2c0%2c0-.174-1.185%2c2.863%2c2.863%2c0%2c0%2c0-.511-.973%2c2.417%2c2.417%2c0%2c0%2c0-.822-.649%2c2.619%2c2.619%2c0%2c0%2c0-1.158-.237%2c2.694%2c2.694%2c0%2c0%2c0-1.221.262%2c2.783%2c2.783%2c0%2c0%2c0-.884.686%2c3.131%2c3.131%2c0%2c0%2c0-.56.973%2c5.265%2c5.265%2c0%2c0%2c0-.274%2c1.123Z' transform='translate(-534.088 -80.132)' fill='white'/%3e %3cpath id='Path_5' d='M685.471%2c87.083a9.719%2c9.719%2c0%2c0%2c0-1.034-.262%2c7.617%2c7.617%2c0%2c0%2c0-1.532-.137%2c6.084%2c6.084%2c0%2c0%2c0-1.058.1%2c6.418%2c6.418%2c0%2c0%2c0-.785.175V97.413h-3.014V84.987a16.6%2c16.6%2c0%2c0%2c1%2c2.179-.611%2c13.58%2c13.58%2c0%2c0%2c1%2c2.9-.287q.3%2c0%2c.7.037t.8.1q.4.062.772.15t.6.162Z' transform='translate(-632.967 -80.114)' fill='white'/%3e %3cpath id='Path_6' d='M753.749%2c56.908l3.014-.5v3.942H761.4v2.52h-4.633v5.315a3.867%2c3.867%2c0%2c0%2c0%2c.5%2c2.246%2c1.97%2c1.97%2c0%2c0%2c0%2c1.694.674%2c5.509%2c5.509%2c0%2c0%2c0%2c1.457-.175%2c9.734%2c9.734%2c0%2c0%2c0%2c1.009-.324l.5%2c2.4a11.283%2c11.283%2c0%2c0%2c1-1.37.461%2c7.444%2c7.444%2c0%2c0%2c1-1.992.237%2c6.292%2c6.292%2c0%2c0%2c1-2.329-.374%2c3.431%2c3.431%2c0%2c0%2c1-1.482-1.085%2c4.306%2c4.306%2c0%2c0%2c1-.772-1.722%2c10.709%2c10.709%2c0%2c0%2c1-.224-2.308Z' transform='translate(-698.654 -56.409)' fill='white'/%3e %3cpath id='Path_7' d='M839.326%2c90.549a8.436%2c8.436%2c0%2c0%2c1-.448%2c2.82%2c6.243%2c6.243%2c0%2c0%2c1-1.27%2c2.171%2c5.707%2c5.707%2c0%2c0%2c1-1.981%2c1.4%2c6.391%2c6.391%2c0%2c0%2c1-2.553.5%2c6.3%2c6.3%2c0%2c0%2c1-2.541-.5%2c5.735%2c5.735%2c0%2c0%2c1-1.968-1.4%2c6.4%2c6.4%2c0%2c0%2c1-1.283-2.171%2c8.224%2c8.224%2c0%2c0%2c1-.461-2.82%2c8.12%2c8.12%2c0%2c0%2c1%2c.461-2.807%2c6.313%2c6.313%2c0%2c0%2c1%2c1.3-2.158%2c5.727%2c5.727%2c0%2c0%2c1%2c1.98-1.385%2c6.373%2c6.373%2c0%2c0%2c1%2c2.516-.487%2c6.466%2c6.466%2c0%2c0%2c1%2c2.528.487%2c5.579%2c5.579%2c0%2c0%2c1%2c1.98%2c1.385%2c6.425%2c6.425%2c0%2c0%2c1%2c1.283%2c2.158%2c8.128%2c8.128%2c0%2c0%2c1%2c.461%2c2.807m-3.088%2c0a5.1%2c5.1%2c0%2c0%2c0-.834-3.081%2c2.956%2c2.956%2c0%2c0%2c0-4.658%2c0%2c5.1%2c5.1%2c0%2c0%2c0-.834%2c3.081%2c5.2%2c5.2%2c0%2c0%2c0%2c.834%2c3.119%2c2.937%2c2.937%2c0%2c0%2c0%2c4.658%2c0%2c5.207%2c5.207%2c0%2c0%2c0%2c.834-3.119' transform='translate(-762.064 -80.135)' fill='white'/%3e %3c/g%3e %3cpath id='Subtraction_117' d='M-4025.98-3951.967a24.268%2c24.268%2c0%2c0%2c1-4.413-.4%2c23.863%2c23.863%2c0%2c0%2c1-4.132-1.16l13.348-26.174%2c11.083%2c21.734a24.174%2c24.174%2c0%2c0%2c1-3.411%2c2.515%2c23.979%2c23.979%2c0%2c0%2c1-3.836%2c1.889%2c23.9%2c23.9%2c0%2c0%2c1-4.183%2c1.189A24.221%2c24.221%2c0%2c0%2c1-4025.98-3951.967Zm19.185-9.567L-4025.98-4000a24.2%2c24.2%2c0%2c0%2c1%2c4.84.488%2c23.887%2c23.887%2c0%2c0%2c1%2c4.508%2c1.4%2c24.024%2c24.024%2c0%2c0%2c1%2c4.08%2c2.215%2c24.2%2c24.2%2c0%2c0%2c1%2c3.555%2c2.933%2c24.279%2c24.279%2c0%2c0%2c1%2c2.933%2c3.554%2c24.059%2c24.059%2c0%2c0%2c1%2c2.214%2c4.08%2c23.864%2c23.864%2c0%2c0%2c1%2c1.4%2c4.509%2c24.189%2c24.189%2c0%2c0%2c1%2c.488%2c4.839%2c23.982%2c23.982%2c0%2c0%2c1-1.278%2c7.751%2c23.937%2c23.937%2c0%2c0%2c1-3.553%2c6.7Zm-38.37%2c0a23.918%2c23.918%2c0%2c0%2c1-3.553-6.7%2c23.985%2c23.985%2c0%2c0%2c1-1.278-7.752%2c24.222%2c24.222%2c0%2c0%2c1%2c.49-4.85%2c23.929%2c23.929%2c0%2c0%2c1%2c1.4-4.5%2c24.025%2c24.025%2c0%2c0%2c1%2c2.215-4.08%2c24.223%2c24.223%2c0%2c0%2c1%2c2.933-3.555%2c24.2%2c24.2%2c0%2c0%2c1%2c3.554-2.932%2c24.02%2c24.02%2c0%2c0%2c1%2c4.079-2.216%2c23.9%2c23.9%2c0%2c0%2c1%2c4.509-1.4%2c24.206%2c24.206%2c0%2c0%2c1%2c4.839-.488Z' transform='translate(4343.998 4078.674)' fill='url(%23linear-gradient)'/%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg version='1.2' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' overflow='visible' preserveAspectRatio='none' viewBox='0 0 1 36' width='1' height='36'%3e%3cg transform='translate(0%2c 0)'%3e%3cdefs%3e%3cpath id='path-16161767949605221' d='M0 0 C0 0 1 0 1 0 C1 0 1 36.00000000000001 1 36.00000000000001 C1 36.00000000000001 0 36.00000000000001 0 36.00000000000001 C0 36.00000000000001 0 0 0 0 Z' vector-effect='non-scaling-stroke'/%3e%3c/defs%3e%3cg transform='translate(0%2c 0)'%3e%3cpath d='M0 0 C0 0 1 0 1 0 C1 0 1 36.00000000000001 1 36.00000000000001 C1 36.00000000000001 0 36.00000000000001 0 36.00000000000001 C0 36.00000000000001 0 0 0 0 Z' style='stroke: rgb(140%2c 140%2c 140)%3b stroke-width: 0%3b stroke-linecap: butt%3b stroke-linejoin: miter%3b fill: rgb(65%2c 65%2c 65)%3b' vector-effect='non-scaling-stroke'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

var NavBarContainer = styled__default['default'].div.withConfig({
  displayName: "styles__NavBarContainer",
  componentId: "sc-1h9z8kw-0"
})(templateObject_2$1 || (templateObject_2$1 = _tslib.__makeTemplateObject(["\n  position: fixed;\n  top: ", "px;\n  width: 100%;\n  left: 0;\n  z-index: 10;\n\n  .router-link-exact-active {\n    color: rgb(231, 231, 231) !important;\n    @media (min-width: ", "px) {\n      border-bottom: 1px solid rgb(103, 203, 207);\n    }\n    @media (max-width: ", "px) {\n      border-left: 1px solid rgb(103, 203, 207);\n    }\n  }\n\n  nav {\n    display: flex;\n    -webkit-align-items: center;\n    z-index: 9;\n    align-items: center;\n    -webkit-justify-content: space-between;\n    justify-content: space-between;\n    background-color: rgb(30, 30, 30);\n    position: relative;\n    ", ";\n    @media (max-width: ", "px) {\n      display: flex;\n      -webkit-box-align: center;\n      align-items: center;\n      padding: 10px 6px;\n    }\n    @media (min-width: ", "px) {\n      height: 82px;\n      -webkit-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n      -webkit-justify-content: flex-start;\n      justify-content: flex-start;\n    }\n  }\n"], ["\n  position: fixed;\n  top: ", "px;\n  width: 100%;\n  left: 0;\n  z-index: 10;\n\n  .router-link-exact-active {\n    color: rgb(231, 231, 231) !important;\n    @media (min-width: ", "px) {\n      border-bottom: 1px solid rgb(103, 203, 207);\n    }\n    @media (max-width: ", "px) {\n      border-left: 1px solid rgb(103, 203, 207);\n    }\n  }\n\n  nav {\n    display: flex;\n    -webkit-align-items: center;\n    z-index: 9;\n    align-items: center;\n    -webkit-justify-content: space-between;\n    justify-content: space-between;\n    background-color: rgb(30, 30, 30);\n    position: relative;\n    ", ";\n    @media (max-width: ", "px) {\n      display: flex;\n      -webkit-box-align: center;\n      align-items: center;\n      padding: 10px 6px;\n    }\n    @media (min-width: ", "px) {\n      height: 82px;\n      -webkit-flex-flow: row nowrap;\n      flex-flow: row nowrap;\n      -webkit-justify-content: flex-start;\n      justify-content: flex-start;\n    }\n  }\n"])), function (_a) {
  var $topPosition = _a.$topPosition;
  return $topPosition || 0;
}, function (_a) {
  var $expandBreakpoint = _a.$expandBreakpoint;
  return $expandBreakpoint || 1200;
}, function (_a) {
  var $expandBreakpoint = _a.$expandBreakpoint;
  return $expandBreakpoint || 1200;
}, function (_a) {
  var $showMobileMenu = _a.$showMobileMenu;
  return $showMobileMenu ? '' : styled.css(templateObject_1$1 || (templateObject_1$1 = _tslib.__makeTemplateObject(["\n            border-bottom: 1px solid rgb(65, 65, 65);\n          "], ["\n            border-bottom: 1px solid rgb(65, 65, 65);\n          "])));
}, function (_a) {
  var $expandBreakpoint = _a.$expandBreakpoint;
  return $expandBreakpoint || 1200;
}, function (_a) {
  var $expandBreakpoint = _a.$expandBreakpoint;
  return $expandBreakpoint || 1200;
});
var NavBarBrand = styled__default['default'].span.withConfig({
  displayName: "styles__NavBarBrand",
  componentId: "sc-1h9z8kw-1"
})(templateObject_3$1 || (templateObject_3$1 = _tslib.__makeTemplateObject(["\n  display: inline-block;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n\n  @media (min-width: ", "px) {\n    margin-left: 10px;\n    margin-right: 30px;\n  }\n  @media (max-width: ", "px) {\n    img {\n      margin-left: 0px !important;\n      height: 38px;\n    }\n    vertical-align: top;\n  }\n"], ["\n  display: inline-block;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap;\n\n  @media (min-width: ", "px) {\n    margin-left: 10px;\n    margin-right: 30px;\n  }\n  @media (max-width: ", "px) {\n    img {\n      margin-left: 0px !important;\n      height: 38px;\n    }\n    vertical-align: top;\n  }\n"])), function (_a) {
  var $expandBreakpoint = _a.$expandBreakpoint;
  return $expandBreakpoint || 1200;
}, function (_a) {
  var $expandBreakpoint = _a.$expandBreakpoint;
  return $expandBreakpoint || 1200;
});
var Separator = styled__default['default'].img.withConfig({
  displayName: "styles__Separator",
  componentId: "sc-1h9z8kw-2"
})(templateObject_4$1 || (templateObject_4$1 = _tslib.__makeTemplateObject(["\n  margin-top: 3px;\n  margin-right: 30px;\n  @media (max-width: ", "px) {\n    display: none;\n  }\n"], ["\n  margin-top: 3px;\n  margin-right: 30px;\n  @media (max-width: ", "px) {\n    display: none;\n  }\n"])), function (_a) {
  var $hideBreakpoint = _a.$hideBreakpoint;
  return $hideBreakpoint || 1200;
});
var NavbarText = styled__default['default'].div.withConfig({
  displayName: "styles__NavbarText",
  componentId: "sc-1h9z8kw-3"
})(templateObject_5$1 || (templateObject_5$1 = _tslib.__makeTemplateObject(["\n  @media (max-width: ", "px) {\n    padding-bottom: 2px;\n    padding-top: 0px;\n  }\n  padding-top: 16px;\n  margin-right: 10px;\n"], ["\n  @media (max-width: ", "px) {\n    padding-bottom: 2px;\n    padding-top: 0px;\n  }\n  padding-top: 16px;\n  margin-right: 10px;\n"])), function (_a) {
  var $expandBreakpoint = _a.$expandBreakpoint;
  return $expandBreakpoint || 1200;
});
var NavbarToggle = styled__default['default'].button.withConfig({
  displayName: "styles__NavbarToggle",
  componentId: "sc-1h9z8kw-4"
})(templateObject_6 || (templateObject_6 = _tslib.__makeTemplateObject(["\n  padding: 0.25rem 0.5rem;\n  //margin-right: 10px;\n  color: rgb(160, 160, 160);\n  border-color: hsla(0, 0%, 100%, 0.1);\n  font-size: 1.1rem;\n  line-height: 1;\n  background-color: transparent;\n  border-radius: 0.25rem;\n  @media (min-width: 1200px) {\n    display: none;\n  }\n  span {\n    display: inline-block;\n    width: 1.5em;\n    height: 1.5em;\n    vertical-align: middle;\n    content: '';\n    background: 50%/100% 100% no-repeat;\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\n  }\n"], ["\n  padding: 0.25rem 0.5rem;\n  //margin-right: 10px;\n  color: rgb(160, 160, 160);\n  border-color: hsla(0, 0%, 100%, 0.1);\n  font-size: 1.1rem;\n  line-height: 1;\n  background-color: transparent;\n  border-radius: 0.25rem;\n  @media (min-width: 1200px) {\n    display: none;\n  }\n  span {\n    display: inline-block;\n    width: 1.5em;\n    height: 1.5em;\n    vertical-align: middle;\n    content: '';\n    background: 50%/100% 100% no-repeat;\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");\n  }\n"])));
var NavbarCollapse = styled__default['default'].div.withConfig({
  displayName: "styles__NavbarCollapse",
  componentId: "sc-1h9z8kw-5"
})(templateObject_7 || (templateObject_7 = _tslib.__makeTemplateObject(["\n  -webkit-flex-basis: 100%;\n  flex-basis: 100%;\n  -webkit-flex-grow: 1;\n  flex-grow: 1;\n  -webkit-align-items: center;\n  align-items: center;\n  @media (min-width: 992px) {\n    display: -webkit-flex !important;\n    display: flex !important;\n    -webkit-flex-basis: auto;\n    flex-basis: auto;\n  }\n\n  ul {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n    flex-direction: column;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n    margin-right: auto !important;\n    @media (min-width: ", "px) {\n      -webkit-flex-direction: row;\n      flex-direction: row;\n    }\n    @media (max-width: ", "px) {\n      display: none;\n    }\n  }\n"], ["\n  -webkit-flex-basis: 100%;\n  flex-basis: 100%;\n  -webkit-flex-grow: 1;\n  flex-grow: 1;\n  -webkit-align-items: center;\n  align-items: center;\n  @media (min-width: 992px) {\n    display: -webkit-flex !important;\n    display: flex !important;\n    -webkit-flex-basis: auto;\n    flex-basis: auto;\n  }\n\n  ul {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n    flex-direction: column;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n    margin-right: auto !important;\n    @media (min-width: ", "px) {\n      -webkit-flex-direction: row;\n      flex-direction: row;\n    }\n    @media (max-width: ", "px) {\n      display: none;\n    }\n  }\n"])), function (_a) {
  var $expandBreakpoint = _a.$expandBreakpoint;
  return $expandBreakpoint || 1200;
}, function (_a) {
  var $expandBreakpoint = _a.$expandBreakpoint;
  return $expandBreakpoint || 1200;
});
var NavMobile = styled__default['default'].div.withConfig({
  displayName: "styles__NavMobile",
  componentId: "sc-1h9z8kw-6"
})(templateObject_8 || (templateObject_8 = _tslib.__makeTemplateObject(["\n  -webkit-flex-basis: 100%;\n  border-bottom: 1px solid rgb(65, 65, 65);\n  flex-basis: 100%;\n  -webkit-flex-grow: 1;\n  flex-grow: 1;\n  -webkit-align-items: center;\n  align-items: center;\n  width: 100%;\n  position: absolute;\n  top: ", "px;\n  left: 0px;\n  background-color: rgb(30, 30, 30);\n  transition: top 0.55s;\n\n  ul {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n    flex-direction: column;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n    margin-right: auto !important;\n    li {\n      padding-left: 10px;\n    }\n    @media (min-width: ", "px) {\n      display: none;\n    }\n    a {\n      border-bottom: 0px;\n      vertical-align: middle;\n      padding-left: 13px !important;\n      border-left: 1px solid rgb(30, 30, 30);\n    }\n  }\n"], ["\n  -webkit-flex-basis: 100%;\n  border-bottom: 1px solid rgb(65, 65, 65);\n  flex-basis: 100%;\n  -webkit-flex-grow: 1;\n  flex-grow: 1;\n  -webkit-align-items: center;\n  align-items: center;\n  width: 100%;\n  position: absolute;\n  top: ", "px;\n  left: 0px;\n  background-color: rgb(30, 30, 30);\n  transition: top 0.55s;\n\n  ul {\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-direction: column;\n    flex-direction: column;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n    margin-right: auto !important;\n    li {\n      padding-left: 10px;\n    }\n    @media (min-width: ", "px) {\n      display: none;\n    }\n    a {\n      border-bottom: 0px;\n      vertical-align: middle;\n      padding-left: 13px !important;\n      border-left: 1px solid rgb(30, 30, 30);\n    }\n  }\n"])), function (_a) {
  var show = _a.show;
  return show ? 53 : -500;
}, function (_a) {
  var $expandBreakpoint = _a.$expandBreakpoint;
  return $expandBreakpoint || 1200;
});
var NavItem = styled__default['default'].li.withConfig({
  displayName: "styles__NavItem",
  componentId: "sc-1h9z8kw-7"
})(templateObject_9 || (templateObject_9 = _tslib.__makeTemplateObject(["\n  cursor: pointer;\n  a {\n    display: block;\n    text-decoration: none;\n    background-color: transparent;\n    padding-top: 14px;\n    padding-bottom: 34px;\n    box-sizing: border-box;\n    margin: 0px 40px 0px 0px;\n    font-weight: 400;\n    color: rgb(160, 160, 160) !important;\n    &:hover {\n      color: ", " !important;\n    }\n  }\n"], ["\n  cursor: pointer;\n  a {\n    display: block;\n    text-decoration: none;\n    background-color: transparent;\n    padding-top: 14px;\n    padding-bottom: 34px;\n    box-sizing: border-box;\n    margin: 0px 40px 0px 0px;\n    font-weight: 400;\n    color: rgb(160, 160, 160) !important;\n    &:hover {\n      color: ", " !important;\n    }\n  }\n"])), theme.theme.grey100);
var NavItemDropdownMobile = styled__default['default'](NavItem).withConfig({
  displayName: "styles__NavItemDropdownMobile",
  componentId: "sc-1h9z8kw-8"
})(templateObject_10 || (templateObject_10 = _tslib.__makeTemplateObject(["\n  font-size: 14px;\n  margin-left: 12px;\n"], ["\n  font-size: 14px;\n  margin-left: 12px;\n"])));
var DropdownNavItem = styled__default['default'].li.withConfig({
  displayName: "styles__DropdownNavItem",
  componentId: "sc-1h9z8kw-9"
})(templateObject_11 || (templateObject_11 = _tslib.__makeTemplateObject(["\n  cursor: pointer;\n  a {\n    text-decoration: none;\n    background-color: transparent;\n    padding-top: 2px;\n    padding-bottom: 26px;\n    box-sizing: border-box;\n    margin: 0px 25px 0px -10px;\n    font-weight: 400;\n    color: rgb(160, 160, 160) !important;\n    &:hover {\n      color: ", " !important;\n    }\n  }\n"], ["\n  cursor: pointer;\n  a {\n    text-decoration: none;\n    background-color: transparent;\n    padding-top: 2px;\n    padding-bottom: 26px;\n    box-sizing: border-box;\n    margin: 0px 25px 0px -10px;\n    font-weight: 400;\n    color: rgb(160, 160, 160) !important;\n    &:hover {\n      color: ", " !important;\n    }\n  }\n"])), theme.theme.grey100);
var MobileMenu = styled__default['default'].div.withConfig({
  displayName: "styles__MobileMenu",
  componentId: "sc-1h9z8kw-10"
})(templateObject_12 || (templateObject_12 = _tslib.__makeTemplateObject(["\n  display: none;\n  a {\n    padding-bottom: 24px;\n  }\n  @media (max-width: ", "px) {\n    display: block;\n  }\n"], ["\n  display: none;\n  a {\n    padding-bottom: 24px;\n  }\n  @media (max-width: ", "px) {\n    display: block;\n  }\n"])), function (_a) {
  var $expandBreakpoint = _a.$expandBreakpoint;
  return $expandBreakpoint || 1200;
});
var FatherLink = styled__default['default'].a.withConfig({
  displayName: "styles__FatherLink",
  componentId: "sc-1h9z8kw-11"
})(templateObject_13 || (templateObject_13 = _tslib.__makeTemplateObject(["\n  @media (max-width: ", "px) {\n    a {\n      margin: 0px 25px 0px -10px;\n      padding-bottom: 14px;\n    }\n    pointer-events: none;\n  }\n"], ["\n  @media (max-width: ", "px) {\n    a {\n      margin: 0px 25px 0px -10px;\n      padding-bottom: 14px;\n    }\n    pointer-events: none;\n  }\n"])), function (_a) {
  var $expandBreakpoint = _a.$expandBreakpoint;
  return $expandBreakpoint || 1200;
});
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;

var UserDropdown = styled__default['default'].div.withConfig({
  displayName: "NavBarUserDropdown__UserDropdown",
  componentId: "sc-1kf9vbw-0"
})(templateObject_1 || (templateObject_1 = _tslib.__makeTemplateObject(["\n  flex-wrap: wrap;\n  padding-left: 0;\n  position: relative;\n  float: right;\n  margin-bottom: 0;\n  list-style: none;\n  display: none;\n  a {\n    margin: auto 20px;\n    white-space: nowrap;\n    cursor: pointer;\n    text-decoration: none;\n    background-color: transparent;\n    display: block;\n    padding: 0.5rem 1rem;\n    img {\n      border-radius: 50%;\n    }\n  }\n  @media (min-width: 1200px) {\n    display: block;\n  }\n"], ["\n  flex-wrap: wrap;\n  padding-left: 0;\n  position: relative;\n  float: right;\n  margin-bottom: 0;\n  list-style: none;\n  display: none;\n  a {\n    margin: auto 20px;\n    white-space: nowrap;\n    cursor: pointer;\n    text-decoration: none;\n    background-color: transparent;\n    display: block;\n    padding: 0.5rem 1rem;\n    img {\n      border-radius: 50%;\n    }\n  }\n  @media (min-width: 1200px) {\n    display: block;\n  }\n"])));
var DropdownContainer = styled__default['default'].div.withConfig({
  displayName: "NavBarUserDropdown__DropdownContainer",
  componentId: "sc-1kf9vbw-1"
})(templateObject_2 || (templateObject_2 = _tslib.__makeTemplateObject(["\n  position: absolute;\n  inset: 0px auto auto 0px;\n  transform: translate3d(-97px, 62px, 0px);\n  display: block;\n  border-radius: 5px;\n  margin: 5px !important;\n  background-color: #1e1e1e;\n  color: #a0a0a0;\n  width: 203px;\n  top: 9px;\n  left: -20px;\n  z-index: 1000;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  font-size: 1rem;\n  text-align: left;\n  list-style: none;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n"], ["\n  position: absolute;\n  inset: 0px auto auto 0px;\n  transform: translate3d(-97px, 62px, 0px);\n  display: block;\n  border-radius: 5px;\n  margin: 5px !important;\n  background-color: #1e1e1e;\n  color: #a0a0a0;\n  width: 203px;\n  top: 9px;\n  left: -20px;\n  z-index: 1000;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  font-size: 1rem;\n  text-align: left;\n  list-style: none;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n"])));
var DropdownMenu = styled__default['default'].div.withConfig({
  displayName: "NavBarUserDropdown__DropdownMenu",
  componentId: "sc-1kf9vbw-2"
})(templateObject_3 || (templateObject_3 = _tslib.__makeTemplateObject([""], [""])));
var DropdownHeader = styled__default['default'].div.withConfig({
  displayName: "NavBarUserDropdown__DropdownHeader",
  componentId: "sc-1kf9vbw-3"
})(templateObject_4 || (templateObject_4 = _tslib.__makeTemplateObject(["\n  color: #e7e7e7;\n  font-weight: bold;\n  display: block;\n  overflow: hidden;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  text-align: left;\n\n  list-style: none;\n"], ["\n  color: #e7e7e7;\n  font-weight: bold;\n  display: block;\n  overflow: hidden;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  text-align: left;\n\n  list-style: none;\n"])));
var DropdownItem = styled__default['default'].div.withConfig({
  displayName: "NavBarUserDropdown__DropdownItem",
  componentId: "sc-1kf9vbw-4"
})(templateObject_5 || (templateObject_5 = _tslib.__makeTemplateObject(["\n  color: rgb(160, 160, 160);\n  display: block;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  text-decoration: none;\n  margin: auto !important;\n  &:hover {\n    background-color: rgb(65, 65, 65);\n    color: rgb(231, 231, 231);\n  }\n"], ["\n  color: rgb(160, 160, 160);\n  display: block;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  text-decoration: none;\n  margin: auto !important;\n  &:hover {\n    background-color: rgb(65, 65, 65);\n    color: rgb(231, 231, 231);\n  }\n"])));
var NavBarUserDropdown = function NavBarUserDropdown() {
  var _a = React.useState(false),
      open = _a[0],
      setOpen = _a[1];

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(UserDropdown, null, /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("a", {
    onClick: function onClick() {
      return setOpen(function (o) {
        return !o;
      });
    }
  }, /*#__PURE__*/React__default['default'].createElement("img", {
    height: "41",
    width: "41",
    src: "https://s.gravatar.com/avatar/0a50ef6565b21bc790bb5f66d92ac018?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fed.png"
  }))), open && /*#__PURE__*/React__default['default'].createElement(DropdownContainer, null, /*#__PURE__*/React__default['default'].createElement(DropdownMenu, null, /*#__PURE__*/React__default['default'].createElement(DropdownHeader, null, "drdpedroso@gmail.com"), /*#__PURE__*/React__default['default'].createElement(DropdownItem, null, "Leke"), /*#__PURE__*/React__default['default'].createElement(DropdownItem, null, "Leke"), /*#__PURE__*/React__default['default'].createElement(DropdownItem, null, "Leke")))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

var css_248z = ".menu-content {\n  list-style-type: none;\n  outline: none;\n  padding-top: 1.25rem;\n  background-color: rgba(30, 30, 30, 1);\n  border: 1px solid rgba(65, 65, 65, 1);\n  border-radius: 4px;\n  margin-top: 0.75rem;\n}";
styleInject_es.styleInject(css_248z);

var expansionBreakpointsMap = {
  xl: 1200,
  lg: 991
};
var NavBar = function NavBar(_a) {
  var children = _a.children,
      showBrandSeparator = _a.showBrandSeparator,
      topPosition = _a.topPosition,
      expand = _a.expand,
      expandBreakpoint = _a.expandBreakpoint,
      testId = _a.testId,
      uncollapsableContent = _a.uncollapsableContent,
      user = _a.user,
      props = _tslib.__rest(_a, ["children", "showBrandSeparator", "topPosition", "expand", "expandBreakpoint", "testId", "uncollapsableContent", "user"]);

  var _b = React.useState(false),
      showMobileMenu = _b[0],
      setShowMobileMenu = _b[1];

  return /*#__PURE__*/React__default['default'].createElement(NavBarContainer, _tslib.__assign({
    "$showMobileMenu": showMobileMenu,
    "$expandBreakpoint": expansionBreakpointsMap[expand] || expandBreakpoint,
    "$topPosition": topPosition
  }, props, utils.mapTestIdToProps(testId)), /*#__PURE__*/React__default['default'].createElement("nav", {
    className: "navbar-dark"
  }, /*#__PURE__*/React__default['default'].createElement(NavBarBrand, {
    "$expandBreakpoint": expansionBreakpointsMap[expand] || expandBreakpoint
  }, /*#__PURE__*/React__default['default'].createElement("img", {
    src: img$1,
    width: "131",
    height: "48",
    style: {
      marginLeft: 10
    },
    className: "d-inline-block align-center",
    alt: "logo"
  })), uncollapsableContent && /*#__PURE__*/React__default['default'].createElement(NavbarText, null, uncollapsableContent), showBrandSeparator && /*#__PURE__*/React__default['default'].createElement(Separator, {
    "$hideBreakpoint": expansionBreakpointsMap[expand] || expandBreakpoint,
    src: img
  }), /*#__PURE__*/React__default['default'].createElement(NavbarCollapse, null, children), /*#__PURE__*/React__default['default'].createElement(NavbarToggle, {
    onClick: function onClick() {
      return setShowMobileMenu(function (s) {
        return !s;
      });
    }
  }, /*#__PURE__*/React__default['default'].createElement("span", null)), user && /*#__PURE__*/React__default['default'].createElement(NavBarUserDropdown, null)), /*#__PURE__*/React__default['default'].createElement(NavMobile, {
    show: showMobileMenu
  }, children));
};

var useDropdown = function useDropdown() {
  var _a = React.useState(false),
      isOpen = _a[0],
      setIsOpen = _a[1];

  var open = function open() {
    return setIsOpen(true);
  };

  var close = function close() {
    return setIsOpen(false);
  };

  var toggle = function toggle() {
    return setIsOpen(function (state) {
      return !state;
    });
  };

  return {
    isOpen: isOpen,
    open: open,
    close: close,
    toggle: toggle
  };
};

var NavItemWithDropdown = function NavItemWithDropdown(_a) {
  var _b, _c, _d, _e;

  var link = _a.link,
      id = _a.id;

  var _f = useDropdown(),
      isOpen = _f.isOpen,
      open = _f.open,
      close = _f.close,
      toggle = _f.toggle;

  var _g = React.useState(true),
      focusOnClose = _g[0],
      setFocusOnClose = _g[1];

  var triggerRef = React.useRef(null);
  React__default['default'].useEffect(function () {
    function handleMouseMove(e) {
      var clientX = e.clientX,
          clientY = e.clientY;
      var elementMouseIsOver = document.elementFromPoint(clientX, clientY);

      if (!elementMouseIsOver) {
        setFocusOnClose(false);
        return close();
      }

      var isHoveringDropdown = elementMouseIsOver.closest("[data-radix-popper-content-wrapper]") !== null;
      var isHoveringContainer = elementMouseIsOver === triggerRef.current || elementMouseIsOver.closest("[data-id=\"" + id + "\"]") !== null;

      if (!isHoveringContainer && !isHoveringDropdown) {
        setFocusOnClose(false);
        return close();
      }
    }

    if (isOpen) {
      document.addEventListener('mousemove', handleMouseMove);
      return function () {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    } else {
      setFocusOnClose(true);
    }
  }, [isOpen, close, id]);
  var trigger = /*#__PURE__*/React__default['default'].createElement(DropdownMenu$1.Trigger, {
    onMouseEnter: open,
    ref: triggerRef,
    "data-id": id,
    tabIndex: 0,
    as: NavItem
  }, /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("a", null, link.label)));
  return /*#__PURE__*/React__default['default'].createElement(DropdownMenu$1.Root, {
    open: ((_b = link === null || link === void 0 ? void 0 : link.items) === null || _b === void 0 ? void 0 : _b.length) ? isOpen : false,
    onOpenChange: toggle
  }, /*#__PURE__*/React__default['default'].createElement(FatherLink, {
    href: link.href,
    hasItems: ((_c = link === null || link === void 0 ? void 0 : link.items) === null || _c === void 0 ? void 0 : _c.length) > 0
  }, trigger), /*#__PURE__*/React__default['default'].createElement(MobileMenu, null, ((_d = link === null || link === void 0 ? void 0 : link.items) === null || _d === void 0 ? void 0 : _d.length) && link.items.map(function (item) {
    return /*#__PURE__*/React__default['default'].createElement(NavItemDropdownMobile, {
      style: {
        marginLeft: 10
      },
      key: item.label
    }, /*#__PURE__*/React__default['default'].createElement("a", null, item.label));
  })), /*#__PURE__*/React__default['default'].createElement(DropdownMenu$1.Content, {
    onCloseAutoFocus: function onCloseAutoFocus(e) {
      if (!focusOnClose) {
        e.preventDefault();
      }
    },
    sideOffset: -20,
    disableOutsidePointerEvents: false,
    as: "ul",
    className: "menu-content"
  }, (_e = link === null || link === void 0 ? void 0 : link.items) === null || _e === void 0 ? void 0 : _e.map(function (l, i) {
    return /*#__PURE__*/React__default['default'].createElement(DropdownNavItem, {
      key: i
    }, /*#__PURE__*/React__default['default'].createElement(DropdownMenu$1.Item, {
      href: l.href,
      as: "a",
      onSelect: function onSelect() {
        window.open(l === null || l === void 0 ? void 0 : l.href, '_blank');
      }
    }, l === null || l === void 0 ? void 0 : l.label));
  })));
};

exports.NavBar = NavBar;
exports.NavItem = NavItem;
exports.NavItemWithDropdown = NavItemWithDropdown;
