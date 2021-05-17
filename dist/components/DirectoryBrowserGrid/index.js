'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_tslib-4b1ff751.js');
var React = require('react');
var styled = require('styled-components');
var InfiniteScroll = require('react-infinite-scroll-component');
var components_UserCard_index = require('../UserCard/index.js');
require('../../theme-a5004722.js');
require('../../utils-e99f2d3c.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var InfiniteScroll__default = /*#__PURE__*/_interopDefaultLegacy(InfiniteScroll);

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='200' height='200' viewBox='0 0 200 200'%3e %3cdefs%3e %3cclipPath id='clip-path'%3e %3crect id='Rectangle_1' data-name='Rectangle 1' width='82' height='82' fill='%23a0a0a0'/%3e %3c/clipPath%3e %3cclipPath id='clip-No-users'%3e %3crect width='200' height='200'/%3e %3c/clipPath%3e %3c/defs%3e %3cg id='No-users' clip-path='url(%23clip-No-users)'%3e %3ccircle id='Ellipse_3' data-name='Ellipse 3' cx='100' cy='100' r='100' fill='%232a2a2a'/%3e %3cg id='User' transform='translate(59 59)' clip-path='url(%23clip-path)'%3e %3cg id='noun_User_1994976' transform='translate(-3.913 -2.5)'%3e %3cg id='Group_2' data-name='Group 2' transform='translate(12.7 2.5)'%3e %3cg id='Group_1' data-name='Group 1'%3e %3cpath id='Path_1' data-name='Path 1' d='M61.84%2c48.965a1.293%2c1.293%2c0%2c0%2c0-1.555.086A25.591%2c25.591%2c0%2c0%2c1%2c44.913%2c54.06%2c26.175%2c26.175%2c0%2c0%2c1%2c29.54%2c49.052a1.451%2c1.451%2c0%2c0%2c0-1.555-.086C17.8%2c55.529%2c12.7%2c68.4%2c12.7%2c83.164c0%2c10.191%2c64.425%2c10.191%2c64.425%2c0C77.125%2c68.4%2c72.03%2c55.529%2c61.84%2c48.965Z' transform='translate(-12.7 -8.807)' fill='%23a0a0a0'/%3e %3ccircle id='Ellipse_1' data-name='Ellipse 1' cx='19.259' cy='19.259' r='19.259' transform='translate(12.954 0)' fill='%23a0a0a0'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var MOBILE_PAGE_SIZE = 40;
var Grid = styled__default['default'].div.withConfig({
  displayName: "DirectoryBrowserGrid__Grid",
  componentId: "sc-12cbf7-0"
})(templateObject_1 || (templateObject_1 = _tslib.__makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 399px);\n  gap: 20px;\n  justify-content: center;\n  @media (max-width: 860px) {\n    grid-template-columns: 1fr;\n    padding-right: 20px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 399px);\n  gap: 20px;\n  justify-content: center;\n  @media (max-width: 860px) {\n    grid-template-columns: 1fr;\n    padding-right: 20px;\n  }\n"])));
var UserCardStyled = styled__default['default'](components_UserCard_index.UserCard).withConfig({
  displayName: "DirectoryBrowserGrid__UserCardStyled",
  componentId: "sc-12cbf7-1"
})(templateObject_2 || (templateObject_2 = _tslib.__makeTemplateObject([""], [""])));
var InfiniteScrollView = styled__default['default'](InfiniteScroll__default['default']).withConfig({
  displayName: "DirectoryBrowserGrid__InfiniteScrollView",
  componentId: "sc-12cbf7-2"
})(templateObject_3 || (templateObject_3 = _tslib.__makeTemplateObject(["\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n  padding: 20px;\n"], ["\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n  padding: 20px;\n"])));
var EmptyUsersContainer = styled__default['default'].div.withConfig({
  displayName: "DirectoryBrowserGrid__EmptyUsersContainer",
  componentId: "sc-12cbf7-3"
})(templateObject_4 || (templateObject_4 = _tslib.__makeTemplateObject(["\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  font-size: 16px;\n  img {\n    margin: 60px auto auto;\n  }\n  div {\n    margin-top: 22px;\n    margin-bottom: 20px;\n    color: ", ";\n    strong {\n      color: ", ";\n    }\n  }\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"], ["\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  font-size: 16px;\n  img {\n    margin: 60px auto auto;\n  }\n  div {\n    margin-top: 22px;\n    margin-bottom: 20px;\n    color: ", ";\n    strong {\n      color: ", ";\n    }\n  }\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"])), function (_a) {
  var theme = _a.theme;
  return theme.grey70;
}, function (_a) {
  var theme = _a.theme;
  return theme.grey100;
});

var renderUserCards = function renderUserCards(users, _onClick) {
  if (users.length === 0) {
    return /*#__PURE__*/React__default['default'].createElement(EmptyUsersContainer, null, /*#__PURE__*/React__default['default'].createElement("img", {
      src: img,
      alt: "no-users"
    }), /*#__PURE__*/React__default['default'].createElement("div", null, "You dont have any users."));
  }

  return users === null || users === void 0 ? void 0 : users.map(function (u) {
    return /*#__PURE__*/React__default['default'].createElement(UserCardStyled, {
      key: u.id,
      user: u,
      onClick: function onClick() {
        return _onClick(u.id);
      }
    });
  });
};

var filterUsers = function filterUsers(users, filter) {
  if (filter) {
    return users.filter(function (value) {
      return value.display_name.toLowerCase().includes(filter) || value.email.toLowerCase().includes(filter);
    });
  }

  return users;
};

var scrollToTop = function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

var mapUsersToInfiniteScroll = function mapUsersToInfiniteScroll(users, page, pageSize) {
  if (pageSize === void 0) {
    pageSize = MOBILE_PAGE_SIZE;
  }

  try {
    return users.slice(0, page * pageSize);
  } catch (er) {
    return [];
  }
};

var DirectoryBrowserGrid = function DirectoryBrowserGrid(_a) {
  var users = _a.users,
      filter = _a.filter,
      _b = _a.pageSize,
      pageSize = _b === void 0 ? 30 : _b,
      onClickCard = _a.onClickCard;

  var _c = React.useState(1),
      page = _c[0],
      setPage = _c[1];

  React.useEffect(function () {
    if (filter) {
      scrollToTop();
    }
  }, [page, filter]);
  var filteredUsers = React.useMemo(function () {
    return filterUsers(users, filter.toLowerCase());
  }, [users, filter]);
  var usersToDisplay = React.useMemo(function () {
    return mapUsersToInfiniteScroll(filteredUsers, page, pageSize);
  }, [filteredUsers, page, pageSize]);
  var lastPage = React.useMemo(function () {
    return Math.ceil((usersToDisplay === null || usersToDisplay === void 0 ? void 0 : usersToDisplay.length) / pageSize);
  }, [pageSize, usersToDisplay]);

  var onReachEnd = function onReachEnd() {
    return _tslib.__awaiter(void 0, void 0, void 0, function () {
      return _tslib.__generator(this, function (_a) {
        setPage(function (prevPage) {
          return prevPage + 1;
        });
        return [2
        /*return*/
        ];
      });
    });
  };

  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(InfiniteScrollView, {
    dataLength: usersToDisplay === null || usersToDisplay === void 0 ? void 0 : usersToDisplay.length,
    next: onReachEnd,
    hasMore: page <= lastPage,
    loader: page < lastPage && /*#__PURE__*/React__default['default'].createElement("div", null, "Loading...")
  }, /*#__PURE__*/React__default['default'].createElement(Grid, null, renderUserCards(usersToDisplay, onClickCard))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

exports.DirectoryBrowserGrid = DirectoryBrowserGrid;
exports.scrollToTop = scrollToTop;
