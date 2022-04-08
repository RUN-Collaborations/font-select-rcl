"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useDetectRTL;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function useDetectRTL() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
}

;
useDetectRTL.propTypes = {
  /** text to examine */
  text: _propTypes["default"].string.isRequired,

  /** RTL:LTR Ratio Threshold  */
  ratioThreshold: _propTypes["default"].number.isRequired
};
useDetectRTL.propDefaults = {
  ratioThreshold: 0.3
};