import { _ as __makeTemplateObject, c as __awaiter, d as __generator } from '../../_tslib-66d5e02f.js';
import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { UserCard } from '../UserCard/index.js';
import '../../theme-526b9b1f.js';
import '../../utils-6a0a2690.js';

var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='200' height='200' viewBox='0 0 200 200'%3e %3cdefs%3e %3cclipPath id='clip-path'%3e %3crect id='Rectangle_1' data-name='Rectangle 1' width='82' height='82' fill='%23a0a0a0'/%3e %3c/clipPath%3e %3cclipPath id='clip-No-users'%3e %3crect width='200' height='200'/%3e %3c/clipPath%3e %3c/defs%3e %3cg id='No-users' clip-path='url(%23clip-No-users)'%3e %3ccircle id='Ellipse_3' data-name='Ellipse 3' cx='100' cy='100' r='100' fill='%232a2a2a'/%3e %3cg id='User' transform='translate(59 59)' clip-path='url(%23clip-path)'%3e %3cg id='noun_User_1994976' transform='translate(-3.913 -2.5)'%3e %3cg id='Group_2' data-name='Group 2' transform='translate(12.7 2.5)'%3e %3cg id='Group_1' data-name='Group 1'%3e %3cpath id='Path_1' data-name='Path 1' d='M61.84%2c48.965a1.293%2c1.293%2c0%2c0%2c0-1.555.086A25.591%2c25.591%2c0%2c0%2c1%2c44.913%2c54.06%2c26.175%2c26.175%2c0%2c0%2c1%2c29.54%2c49.052a1.451%2c1.451%2c0%2c0%2c0-1.555-.086C17.8%2c55.529%2c12.7%2c68.4%2c12.7%2c83.164c0%2c10.191%2c64.425%2c10.191%2c64.425%2c0C77.125%2c68.4%2c72.03%2c55.529%2c61.84%2c48.965Z' transform='translate(-12.7 -8.807)' fill='%23a0a0a0'/%3e %3ccircle id='Ellipse_1' data-name='Ellipse 1' cx='19.259' cy='19.259' r='19.259' transform='translate(12.954 0)' fill='%23a0a0a0'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e";

var Grid = styled.div.withConfig({
  displayName: "DirectoryBrowserGrid__Grid",
  componentId: "sc-12cbf7-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 399px);\n  gap: 20px;\n  justify-content: center;\n  @media (max-width: 860px) {\n    grid-template-columns: 1fr;\n    padding-right: 20px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 399px);\n  gap: 20px;\n  justify-content: center;\n  @media (max-width: 860px) {\n    grid-template-columns: 1fr;\n    padding-right: 20px;\n  }\n"])));
var UserCardStyled = styled(UserCard).withConfig({
  displayName: "DirectoryBrowserGrid__UserCardStyled",
  componentId: "sc-12cbf7-1"
})(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var InfiniteScrollView = styled(InfiniteScroll).withConfig({
  displayName: "DirectoryBrowserGrid__InfiniteScrollView",
  componentId: "sc-12cbf7-2"
})(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n  padding: 20px;\n"], ["\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n  padding: 20px;\n"])));
var EmptyUsersContainer = styled.div.withConfig({
  displayName: "DirectoryBrowserGrid__EmptyUsersContainer",
  componentId: "sc-12cbf7-3"
})(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  font-size: 16px;\n  img {\n    margin: 60px auto auto;\n  }\n  div {\n    margin-top: 22px;\n    margin-bottom: 20px;\n    color: ", ";\n    strong {\n      color: ", ";\n    }\n  }\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"], ["\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  font-size: 16px;\n  img {\n    margin: 60px auto auto;\n  }\n  div {\n    margin-top: 22px;\n    margin-bottom: 20px;\n    color: ", ";\n    strong {\n      color: ", ";\n    }\n  }\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"])), function (_a) {
  var theme = _a.theme;
  return theme.grey70;
}, function (_a) {
  var theme = _a.theme;
  return theme.grey100;
});

var renderUserCards = function renderUserCards(users, _onClick) {
  if (users.length === 0) {
    return /*#__PURE__*/React.createElement(EmptyUsersContainer, null, /*#__PURE__*/React.createElement("img", {
      src: img,
      alt: "no-users"
    }), /*#__PURE__*/React.createElement("div", null, "You dont have any users."));
  }

  return users === null || users === void 0 ? void 0 : users.map(function (u) {
    return /*#__PURE__*/React.createElement(UserCardStyled, {
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
var DirectoryBrowserGrid = function DirectoryBrowserGrid(_a) {
  var users = _a.users,
      filter = _a.filter,
      _b = _a.pageSize,
      pageSize = _b === void 0 ? 30 : _b,
      onClickCard = _a.onClickCard;

  var _c = useState(1),
      page = _c[0],
      setPage = _c[1];

  useEffect(function () {
    if (filter) {
      scrollToTop();
    }
  }, [page, filter]);
  var filteredUsers = useMemo(function () {
    return filterUsers(users, filter.toLowerCase());
  }, [users, filter]);
  var lastPage = useMemo(function () {
    return Math.ceil((filteredUsers === null || filteredUsers === void 0 ? void 0 : filteredUsers.length) / pageSize);
  }, [pageSize, filteredUsers]);

  var onReachEnd = function onReachEnd() {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        setPage(function (prevPage) {
          return prevPage + 1;
        });
        return [2
        /*return*/
        ];
      });
    });
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(InfiniteScrollView, {
    dataLength: filteredUsers === null || filteredUsers === void 0 ? void 0 : filteredUsers.length,
    next: onReachEnd,
    hasMore: page <= lastPage,
    loader: page < lastPage && /*#__PURE__*/React.createElement("div", null, "Loading...")
  }, /*#__PURE__*/React.createElement(Grid, null, renderUserCards(filteredUsers, onClickCard))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

export { DirectoryBrowserGrid, scrollToTop };
