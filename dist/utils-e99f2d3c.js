'use strict';

var _tslib = require('./_tslib-4b1ff751.js');

var mapTestIdToProps = function mapTestIdToProps(testId) {
  return _tslib.__assign({}, testId && {
    'data-testid': testId
  });
};

exports.mapTestIdToProps = mapTestIdToProps;
